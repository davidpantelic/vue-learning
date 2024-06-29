<template>
  <h1 class="text-6xl font-bold">Job page for job {{ currentJobId }}</h1>
</template>

<script>
export default {
  name: 'JobView',
  computed: {
    currentJobId() {
      return this.$route.params.id;
    },
  },
};
</script>
