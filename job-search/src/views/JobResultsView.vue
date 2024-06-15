<template>
  <h1 class="text-6xl font-bold">Job Results page</h1>
  <button @click="goToHome">go to home page</button>
</template>

<script>
export default {
  name: 'JobResultsView',
  methods: {
    goToHome() {
      // this.$router.push({ path: '/' });
      // this.$router.push('/');
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>
