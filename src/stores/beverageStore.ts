import { defineStore } from "pinia";
import {
  BaseBeverageType,
  CreamerType,
  SyrupType,
  BeverageType,
} from "../types/beverage";
import tempretures from "../data/tempretures.json";
import db from "../firebase.ts";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  query,
  where,
  onSnapshot,
  Unsubscribe,
} from "firebase/firestore";
import type { User } from "firebase/auth";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: [
      { id: "b1", name: "Black Tea", color: "#8B4513" },
      { id: "b2", name: "Green Tea", color: "#C8E6C9" },
      { id: "b3", name: "Coffee", color: "#6F4E37" },
    ] as BaseBeverageType[],
    currentBase: { id: "b1", name: "Black Tea", color: "#8B4513" } as BaseBeverageType,
    syrups: [
      { id: "s1", name: "No Syrup", color: "transparent" },
      { id: "s2", name: "Vanilla", color: "#FFEFD5" },
      { id: "s3", name: "Caramel", color: "#DAA520" },
      { id: "s4", name: "Hazelnut", color: "#6B4423" },
    ] as SyrupType[],
    currentSyrup: { id: "s1", name: "No Syrup", color: "transparent" } as SyrupType,
    creamers: [
      { id: "c1", name: "No Cream", color: "transparent" },
      { id: "c2", name: "Milk", color: "AliceBlue" },
      { id: "c3", name: "Cream", color: "#F5F5DC" },
      { id: "c4", name: "Half & Half", color: "#FFFACD" },
    ] as CreamerType[],
    currentCreamer: { id: "c1", name: "No Cream", color: "transparent" } as CreamerType,
    beverages: [] as BeverageType[],
    currentBeverage: null as BeverageType | null,
    currentName: "",
    user: null as User | null,
    unsubscribe: null as Unsubscribe | null,
  }),

  actions: {
    async init() {
      try {
        // Try to load from Firebase (will load when configured)
        const basesSnap = await getDocs(collection(db, "bases"));
        if(basesSnap.docs.length > 0) {
          this.bases = basesSnap.docs.map((d) => d.data() as BaseBeverageType);
          this.currentBase = this.bases[0];
        }

        const creamersSnap = await getDocs(collection(db, "creamers"));
        if(creamersSnap.docs.length > 0) {
          this.creamers = creamersSnap.docs.map((d) => d.data() as CreamerType);
          this.currentCreamer = this.creamers[0];
        }

        const syrupsSnap = await getDocs(collection(db, "syrups"));
        if(syrupsSnap.docs.length > 0) {
          this.syrups = syrupsSnap.docs.map((d) => d.data() as SyrupType);
          this.currentSyrup = this.syrups[0];
        }
      } catch (error) {
        console.log("Using demo data (Firebase not configured yet)");
        // Data already initialized in state
      }
    },

    setUser(user: User | null) {
      this.user = user;

      // Detach previous listener
      if (this.unsubscribe) {
        this.unsubscribe();
        this.unsubscribe = null;
      }

      // If user signed in, set up listener for their beverages
      if (user) {
        const q = query(
          collection(db, "beverages"),
          where("userId", "==", user.uid)
        );
        this.unsubscribe = onSnapshot(q, (snapshot) => {
          this.beverages = snapshot.docs.map((d) => d.data() as BeverageType);
          if (this.beverages.length > 0) {
            this.currentBeverage = this.beverages[0];
          }
        });
      } else {
        this.beverages = [];
        this.currentBeverage = null;
      }
    },

    async makeBeverage() {
      if (!this.user) {
        return "No user logged in, please sign in first.";
      }
      if (
        !this.currentBase ||
        !this.currentSyrup ||
        !this.currentCreamer ||
        !this.currentName
      ) {
        return "Please complete all beverage options and the name before making a beverage.";
      }

      const beverage: BeverageType = {
        id: `${Date.now()}-${this.user.uid}`,
        name: this.currentName,
        temp: this.currentTemp,
        base: this.currentBase,
        syrup: this.currentSyrup,
        creamer: this.currentCreamer,
      };

      await setDoc(doc(db, "beverages", beverage.id), {
        ...beverage,
        userId: this.user.uid,
      });

      this.currentName = "";
      return `Beverage ${beverage.name} made successfully!`;
    },

    showBeverage() {},
  },
});
