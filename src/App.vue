<template>
  <Navbar msg="test-props" />
</template>

<script setup>
import { ref, defineProps } from 'vue';
import Navbar from './components/Navbar.vue';

const name = ref('Thrift Shop');

const someFunction = () => {
  console.log(name.value);
};
</script>