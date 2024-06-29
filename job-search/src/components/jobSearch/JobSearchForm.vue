<template>
  <form @submit.prevent="searchForJobs">
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div>
      <div class="input-wrapper pr-3">
        <label class="left-0" for="role">Role</label>
        <text-input id="role" v-model="role" placeholder="Frontend dev" required />
      </div>

      <span>in</span>

      <div class="input-wrapper pl-3">
        <label class="left-3" for="location">Where?</label>
        <text-input id="location" v-model="location" placeholder="Osecina" required />
      </div>
    </div>
    <action-button text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script>
import ActionButton from '@/components/shared/ActionButton.vue';
import TextInput from '@/components/shared/TextInput.vue';

export default {
  name: 'JobSearchForm',
  components: {
    ActionButton,
    TextInput,
  },
  data() {
    return {
      role: '',
      location: '',
    };
  },
  methods: {
    searchForJobs() {
      this.$router.push({
        name: 'JobResults',
        query: {
          role: this.role,
          location: this.location,
        },
      });
    },
  },
};
</script>

<style scoped>
form {
  @apply flex h-12 w-full items-center rounded-3xl border border-solid border-brand-grey-3;
}
form > div {
  @apply flex h-full flex-1 flex-nowrap text-base font-light;
}
.input-wrapper {
  @apply relative flex h-full flex-1 items-center;
}
label {
  @apply absolute -top-7;
}
span {
  @apply flex h-full items-center border-l border-r border-brand-grey-3 bg-brand-grey-2 px-2;
}
</style>
