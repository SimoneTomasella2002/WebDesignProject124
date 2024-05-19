<script setup>
    import profileData from "@/assets/json/profiles.json";
    import { watch, ref } from "vue";

    const props = defineProps(["ProfileName"]);

    const profiles = profileData.profiles;
    const profile = ref(null);

    const loadProfile = (profileName) => {
        profile.value = profiles.find(p => p.firstName.toLowerCase() === profileName.toLowerCase()) || null;
    
        if (profile.value === null) {
            console.log("Can't find profile data for " + profileName);
        } else {
            console.log("Profile found: ", profile.value)
        }
    }

    loadProfile(props.ProfileName);

    watch(() => props.ProfileName, (newProfileName) => {
        loadProfile(newProfileName);
    })

    console.log(props.ProfileName);
</script>

<template>
    <div class="picture-container">
        <h1 class="picture-container-firstname-and-lastname">{{ profile.firstName }} {{ profile.lastName }}</h1>
        <img :src="`./src/assets/images/personal-pictures/${profile.photoLocation}`" class="picture-container-image" :alt="`An image of ${profile.firstName}`">
        <p class="picture-container-description">{{ profile.description }}</p>
    </div>
</template>

<style scoped>
    .picture-container {
        text-align: center;

        border-color: black;
        border-style: solid;
        border-width: 5px;
        border-radius: 20px;
        margin-bottom: 20px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: white;
    }

    .picture-container-image {
        height: 250px;
        width: 250px;
    }

    .picture-container-description {
        width: 350px;
    }

</style>