<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="border-brand-gray-1 mx-auto flex h-full flex-nowrap border-b border-solid px-8">
        <router-link :to="{ name: 'Home' }" class="flex h-full items-center text-xl">David Careers</router-link>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="menuItem in menuItems" :key="menuItem.text" class="ml-5 h-full first:ml-0">
              <router-link :to="menuItem.url" class="flex h-full items-center py-2.5">{{ menuItem.text }}</router-link>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn" />
          <action-button v-else text="Sign in" type="primary" @click="loginUser" />
        </div>
      </div>

      <the-subnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import ActionButton from '@/components/shared/ActionButton.vue';
import ProfileImage from '@/components/navigation/ProfileImage.vue';
import TheSubnav from '@/components/navigation/TheSubnav.vue';

export default {
  name: 'MainNav',
  components: {
    ActionButton,
    ProfileImage,
    TheSubnav,
  },
  data() {
    return {
      menuItems: [
        { text: 'Teams', url: '/teams' },
        { text: 'Locations', url: '/' },
        { text: 'Life at', url: '/' },
        { text: 'How we hire', url: '/' },
        { text: 'Students', url: '/' },
        { text: 'Jobs', url: '/jobs/results' },
      ],
      isLoggedIn: false,
    };
  },
  computed: {
    headerHeightClass() {
      return {
        'h-16': !this.isLoggedIn,
        'h-32': this.isLoggedIn,
      };
    },
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>
