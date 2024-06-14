<template>
  <img class="h-80 w-80 object-contain" :src="imageUrl" />
</template>

<script>
import nextElementInList from '@/utils/nextElementInLIst';

export default {
  name: 'TheHeroSlide',
  data() {
    return {
      imageUrl: 'https://entrepreneurhandbook.co.uk/wp-content/uploads/2019/10/Website-builder.jpg.webp',
      urls: [
        'https://entrepreneurhandbook.co.uk/wp-content/uploads/2019/10/Website-builder.jpg.webp',
        'https://lh3.googleusercontent.com/proxy/Lp016wVrZI61YWtRzlR5V-MrCHuZVN1oBHYqjmPhhiuyHrD1RbQkI-PbIwcnmHDFNzfDCQ5rTNOmN_UquSQLCHkFuCCvGAAIQR5D3N8DLHW1CoXWAJT-HaJsq_5QdgpVUNaKhWRW',
        'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/09/Image_-_How_to_design_a_website_.jpeg.jpg',
        'https://www.zdnet.com/a/img/resize/adcb2eb2cc3f5562f7e80931308e2a08b01947ce/2019/08/19/4a663776-f4a9-4f89-9bee-2d07ee052f5b/istock-1147195672-11.jpg?auto=webp&fit=crop&height=900&width=1200',
      ],
    };
  },
  created() {
    // lyfecycle event
    this.changeImgUrl();
  },
  beforeUnmount() {
    // lyfecycle event
    clearInterval(this.interval2);
  },
  methods: {
    changeImgUrl() {
      this.interval2 = setInterval(() => {
        this.imageUrl = nextElementInList(this.urls, this.imageUrl);
      }, 3000);
    },
  },
};
</script>
