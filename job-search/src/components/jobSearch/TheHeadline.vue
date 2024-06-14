<template>
  <section class="mb-16">
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="actionClasses">{{ actionWord }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job here</h2>
  </section>
</template>

<script>
import nextElementInList from '@/utils/nextElementInLIst';

export default {
  name: 'TheHeadline',
  data() {
    return {
      actionWord: 'Build',
      interval: null,
    };
  },
  computed: {
    actionClasses() {
      return {
        // build: this.actionWord === 'Build',
        // create: this.actionWord === 'Create',
        // design: this.actionWord === 'Design',
        // code: this.actionWord === 'Code',
        // ili ovako
        [this.actionWord.toLowerCase()]: true,
      };
    },
  },
  created() {
    // lyfecycle event
    this.changeTitle();
  },
  beforeUnmount() {
    // lyfecycle event
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ['Build', 'Create', 'Design', 'Code'];
        this.actionWord = nextElementInList(actions, this.actionWord);
      }, 3000);
    },
  },
};
</script>

<style scoped>
.build {
  color: #1a73e8;
}

.create {
  color: #34a853;
}

.design {
  color: #f9ab00;
}

.code {
  color: #d93025;
}
</style>
