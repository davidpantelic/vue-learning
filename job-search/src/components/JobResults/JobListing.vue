<template>
  <li class="mb-7">
    <router-link to="/jobs/results/1" class="border-brand-gray-2 hover:shadow-gray mx-auto block rounded border border-solid bg-white">
      <div class="border-brand-gray-2 mx-8 border-b border-solid pb-2 pt-5">
        <h2 class="mb-2 text-2xl">Front End Dev</h2>
        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <span>David doo</span>
          </div>

          <div>
            <span>Osecina, Srbija</span>
          </div>
        </div>
      </div>

      <div class="px-8 py-4">
        <div>
          <h3 class="mb-2 mt-1">Qualifications</h3>
          <div>
            <ul class="list-disc pl-8">
              <li>Experience</li>
              <li>Dedication</li>
              <li>Kolegijalnost</li>
            </ul>
          </div>

          <div class="mt-2 text-center">
            <router-link to="/jobs/results/1" class="text-brand-blue-1">Expand</router-link>
          </div>
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'JobListing',
};
</script>
