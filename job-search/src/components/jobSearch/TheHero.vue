<template>
  <main>
    <section class="flex h-screen flex-col pb-20 pt-10">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1"></div>
        <div class="col-span-5 col-start-2">
          <the-headline />
          <job-search-form />
        </div>
        <div class="col-span-5 col-start-7 self-center justify-self-center">
          <the-hero-slide />
        </div>
        <div class="col-span-1 col-start-12"></div>
      </div>
    </section>
  </main>
</template>

<script>
import TheHeadline from '@/components/jobSearch/TheHeadline.vue';
import JobSearchForm from '@/components/jobSearch/JobSearchForm.vue';
import TheHeroSlide from '@/components/jobSearch/TheHeroSlide.vue';

export default {
  name: 'TheHero',
  components: {
    TheHeadline,
    JobSearchForm,
    TheHeroSlide,
  },
};
</script>
