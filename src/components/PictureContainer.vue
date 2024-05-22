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
    <div class="pic-container">
        <h1 class="pic-container-firstname-and-lastname">{{ profile.firstName }} {{ profile.lastName }}</h1>
        <img :src="`/personal-images/${profile.photoLocation}`" class="pic-container-image" :alt="`An image of ${profile.firstName}`">
        <div class="pic-container-desc-container">
            <p class="pic-container-desc">{{ profile.description }}</p>
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

    .pic-container {
        text-align: center;

        border-color: black;
        border-style: solid;
        border-width: 5px;
        border-radius: 20px;
        margin-bottom: 20px;

        width: 360px;

        display: flex;
        flex-direction: column;
        justify-content: center; /* doesn't align anything after the image because descs have different lengths */
        align-items: center;
        background-color: white;
    }

    .pic-container-firstname-and-lastname {
        padding-top: 15px;
        padding-bottom: 15px;
        width: 100%;
        border-bottom: solid gray 2px;
    }

    .pic-container-image {
        height: 250px;
        width: 250px;
        border-radius: 20px;
        
        margin-top: 16px;
        margin-bottom: 16px;

        border-style: solid;
        border-width: 1px;
    }

    .pic-container-desc-container {
        width: 100%;
        border-top: solid gray 2px;
        border-bottom: solid gray 2px;
    }

    .pic-container-desc {
        padding-inline-start: 10px;
        padding-inline-end: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    
    .profile-links {
        display: flex;
        justify-content: space-around;
        width: 50%;
        margin: 8px;
    }

</style>