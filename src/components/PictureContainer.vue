<script setup>
import profileData from "@/assets/json/profiles.json";
import { watch, ref } from "vue";

const props = defineProps(["ProfileName"]);

const profiles = profileData.profiles;
const profile = ref(null);

const loadProfile = (profileName) => {
  profile.value = profiles.find(p => p.firstName.toLowerCase() === profileName.toLowerCase()) || null;

  profile.value === null
    // ? console.log("Can't find profile data for " + profileName)
    // : console.log("Profile found: ", profile.value);
}

loadProfile(props.ProfileName);

watch(() => props.ProfileName, (newProfileName) => {
  loadProfile(newProfileName);
})

// console.log(props.ProfileName);
</script>

<template>
  <v-card v-if="profile" class="mx-auto my-4">
    <v-col>
      <v-img :src="`/personal-images/${profile.photoLocation}`" height="200px" class="border-lg" 
      :alt="`An image of ${profile.firstName}`"></v-img>
    </v-col>
    <v-card-title>{{ profile.firstName }} {{ profile.lastName }}</v-card-title>
    <v-card-text>
      <p>{{ profile.description }}</p>
    </v-card-text>
    <v-card-actions class="d-flex justify-center">
      <v-btn v-if="profile.linkedin !== ''" :href="profile.linkedin" target="_blank" color="primary">
        LinkedIn
      </v-btn>
      <v-btn v-else disabled>
        LinkedIn
      </v-btn>
      <v-btn v-if="profile.github !== ''" :href="profile.github" target="_blank" color="secondary">
        GitHub
      </v-btn>
      <v-btn v-else disabled>
        Github
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
  .d-inline-block {
    display: inline-block;
  }

</style>