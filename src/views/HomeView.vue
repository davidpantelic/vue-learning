<template>
  <main>
    <div class="w-full h-screen flex items-center justify-center flex-col">
      <h1 class="text-5xl"><span>{{ actionWord }}</span> proizvodi od plastike</h1>
      <h2 class="text-3xl mt-3">Panic Plast</h2>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import nextElementInList from '@/utils/nextElementInLIst';

const actionWord = ref('Povoljni');

onMounted(() => {
  changeTitle();
});

const changeTitle = () => {
  setInterval(() => {
    const actions = ['Povoljni', 'Kvalitetni', 'Dugotrajni', 'Ekoloski'];
    actionWord.value = nextElementInList(actions, actionWord.value);
  }, 2000);
};
</script>

<style scoped>
main>div {
  background-image: url('@/assets/images/horizontalni_vertikalni_rezervoar.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>