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
        <div class="picture-container-description-container">
            <p class="picture-container-description">{{ profile.description }}</p>
        </div>
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

</style>