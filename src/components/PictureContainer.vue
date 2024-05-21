<script setup>
    import profileData from "@/assets/json/profiles.json";
    import { watch, ref } from "vue";

    const props = defineProps(["ProfileName"]);

    const profiles = profileData.profiles;
    const profile = ref(null);

    const loadProfile = (profileName) => {
        profile.value = profiles.find(p => p.firstName.toLowerCase() === profileName.toLowerCase()) || null;
    
        profile.value === null
            ? console.log("Can't find profile data for " + profileName)
            : console.log("Profile found: ", profile.value);
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
        <!-- Doesn't work in local server, but it works in deployment server -->
        <img :src="`/personal-images/${profile.photoLocation}`" class="picture-container-image" :alt="`An image of ${profile.firstName}`">
        <div class="picture-container-description-container">
            <p class="picture-container-description">{{ profile.description }}</p>
        </div>
        <div class="profile-links">
            <button class="profile-linkedin">
                <a :href="profile.linkedin">LinkedIn</a>
            </button>
            <button class="profile-github">
                <a :href="profile.github">GitHub</a>
            </button>
        </div>
    </div>
</template>

<style scoped>

    .profile-linkedin, .profile-github {
        border-color: black;
        border-style: solid;
        border-width: 3px;
        border-radius: 8px;
        margin-bottom: 8px;
        background-color: lightgray;
    }

    .picture-container {
        text-align: center;

        border-color: black;
        border-style: solid;
        border-width: 5px;
        border-radius: 20px;
        margin-bottom: 20px;

        width: 360px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
    }

    .picture-container-firstname-and-lastname {
        padding-bottom: 15px;
        width: 100%;
        border-bottom: solid gray 2px;
    }

    .picture-container-image {
        height: 250px;
        width: 250px;
        border-radius: 20px;

        border-style: solid;
        border-width: 1px;
    }

    .picture-container-description-container {
        margin-top: 15px;

        width: 100%;
        border-top: solid gray 2px;
    }

    .picture-container-description {
        padding-inline-start: 10px;
        padding-inline-end: 10px;
    }
    
    .profile-links {
        display: flex;
        justify-content: space-around;
        width: 50%;
        margin: 8px;
    }

</style>