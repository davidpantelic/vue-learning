<template>
  <h1>{{ name }}</h1>
  <button @click="someFunction">Click</button>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('Thrift Shop');

const someFunction = () => {
  console.log(name.value);
};
</script>