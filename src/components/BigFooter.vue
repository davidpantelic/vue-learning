<template>
  <footer class="bg-brand-black text-brand-yellow w-full">
    <div class="flex">
      <div class="w-1/2 py-10 px-[5%] text-center">
        <h2>{{ t('head.title') }}</h2>
        <h3>{{ t('head.job') }}</h3>
        <br>
        <p><a href="mailto:panicplast@gmail.com" class="hover:underline"><span class="sr-only">Pisite nam na mejl:</span>panicplast@gmail.com</a></p>
        <p><a href="tel:+381654441560" class="hover:underline"><span class="sr-only">Pozovite nas na:</span>+381 65/444-15-60</a></p>
        <br>
        <p>Copyright &copy; {{ getCurrentYear }} {{ t('head.title') }}. {{ t('footer.rights') }}</p>
        <p>{{ t('footer.webdak') }} - <a href="mailto:dpdavid156@gmail.com" class="hover:underline">Webdak</a></p>
      </div>
      <div class="w-1/2 py-10 px-[5%]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque aperiam explicabo rerum itaque, saepe tempore doloribus reiciendis labore maiores exercitationem consequatur pariatur odit nostrum eaque sapiente aut numquam. Praesentium, eveniet!
        Ab velit voluptate ex laudantium blanditiis, cumque tenetur excepturi sapiente obcaecati, corporis a totam rerum ipsa atque dolorem quis iste sit ipsam non alias saepe. Magnam harum voluptas nihil cumque.
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const getCurrentYear = computed(() => {
  return new Date().getFullYear();
})
</script>