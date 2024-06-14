<template>
  <input type="text" :value="modelValue" @input="handleInput" />
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: [
    'update:modelValue',
  ],
  methods: {
    handleInput($event) {
      this.$emit('update:modelValue', $event.target.value);
    },
  },
};
</script>

<style scoped>
input {
  @apply w-full text-lg font-normal focus:outline-none;
}
</style>
