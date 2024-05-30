<template>
  <img :src="imageUrl" class="h-8 w-8 rounded-3xl object-contain" alt="David profile image" />
</template>

<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      imageUrl: '../../assets/david.jpg',
    };
  },
};
</script>
