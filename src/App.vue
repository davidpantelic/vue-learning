<template>
  <NavBar />
  <RouterView />
</template>

<script setup>
import { provide } from 'vue';
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'

const myFunction = (text) => {
  console.log(text);
};

provide('myFunction', myFunction);
</script>
