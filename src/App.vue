<template>
  <div class="app-container">
    <!-- Beverage Preview -->
    <Beverage :isIced="beverageStore.currentTemp === 'Cold'" />

    <!-- Temperature Selection -->
    <div class="selection-row">
      <label v-for="temp in beverageStore.temps" :key="temp">
        <input
          type="radio"
          name="temperature"
          :value="temp"
          v-model="beverageStore.currentTemp"
        />
        {{ temp }}
      </label>
    </div>

    <!-- Base Selection -->
    <div class="selection-row">
      <label v-for="b in beverageStore.bases" :key="b.id">
        <input
          type="radio"
          name="bases"
          :value="b"
          v-model="beverageStore.currentBase"
        />
        {{ b.name }}
      </label>
    </div>

    <!-- Syrup Selection -->
    <div class="selection-row">
      <label v-for="s in beverageStore.syrups" :key="s.id">
        <input
          type="radio"
          name="syrups"
          :value="s"
          v-model="beverageStore.currentSyrup"
        />
        {{ s.name }}
      </label>
    </div>

    <!-- Creamer Selection -->
    <div class="selection-row">
      <label v-for="c in beverageStore.creamers" :key="c.id">
        <input
          type="radio"
          name="creamers"
          :value="c"
          v-model="beverageStore.currentCreamer"
        />
        {{ c.name }}
      </label>
    </div>

    <!-- Auth & Beverage Controls -->
    <button v-if="!beverageStore.user" @click="signInWithGoogle" class="auth-btn">
      Sign in with Google
    </button>
    <button v-else @click="signOut" class="auth-btn">Sign out</button>

    <input
      type="text"
      placeholder="Beverage Name"
      v-model="beverageStore.currentName"
      class="beverage-input"
    />

    <button
      @click="handleMakeBeverage"
      :disabled="!beverageStore.user"
      class="make-btn"
    >
      ☕ Make Beverage
    </button>

    <!-- Messages -->
    <p v-if="message" class="message">{{ message }}</p>
    <p v-if="!beverageStore.user" class="message">
      Please sign in to save your beverage.
    </p>

    <!-- Saved Beverages -->
    <div v-if="beverageStore.user && beverageStore.beverages.length > 0" class="saved-beverages">
      <h3>Your Saved Beverages:</h3>
      <label v-for="bev in beverageStore.beverages" :key="bev.id">
        <input
          type="radio"
          name="savedBeverage"
          @change="selectBeverage(bev)"
        />
        {{ bev.name }}
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";
import { auth } from "./firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
} from "firebase/auth";
import type { BeverageType } from "./types/beverage";

const beverageStore = useBeverageStore();
const message = ref("");

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    beverageStore.setUser(user);
  });
});

async function signInWithGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    message.value = "Signed in successfully!";
  } catch (error: any) {
    message.value = `Error: ${error.message}`;
  }
}

async function signOut() {
  await firebaseSignOut(auth);
  message.value = "Signed out successfully!";
}

async function handleMakeBeverage() {
  const result = await beverageStore.makeBeverage();
  message.value = result;
}

function selectBeverage(bev: BeverageType) {
  beverageStore.currentBeverage = bev;
  beverageStore.currentTemp = bev.temp;
  beverageStore.currentBase = bev.base;
  beverageStore.currentSyrup = bev.syrup;
  beverageStore.currentCreamer = bev.creamer;
  beverageStore.currentName = bev.name;
}
</script>

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
  font-family: Arial, sans-serif;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.app-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 20px;
  color: white;
  max-width: 600px;
}

.selection-row {
  display: flex;
  gap: 10px;
  align-items: center;
  label {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    white-space: nowrap;
  }
  input[type="radio"] {
    cursor: pointer;
  }
}

.auth-btn,
.make-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  align-self: flex-start;
}

.auth-btn {
  background: white;
  color: #6e4228;
}

.make-btn {
  background: #e8d5c4;
  color: #6e4228;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.beverage-input {
  padding: 8px;
  border-radius: 5px;
  border: none;
  width: 250px;
}

.message {
  font-size: 14px;
  margin: 0;
  align-self: flex-start;
}

.saved-beverages {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: flex-start;
  h3 {
    margin: 0 0 10px 0;
  }
  label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }
}
</style>
