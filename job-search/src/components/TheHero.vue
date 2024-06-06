<template>
  <main>
    <section class="flex h-screen flex-col pb-20 pt-10">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1 border border-solid border-blue-400">1</div>
        <div class="col-span-5 col-start-2 border border-solid border-blue-400">
          <the-headline />
        </div>
        <div class="col-span-5 col-start-7 border border-solid border-blue-400">5</div>
        <div class="col-span-1 col-start-12 border border-solid border-blue-400">1</div>
      </div>
    </section>
  </main>
</template>

<script>
import TheHeadline from '@/components/TheHeadline.vue';
export default {
  name: 'TheHero',
  components: {
    TheHeadline,
  },
};
</script>
