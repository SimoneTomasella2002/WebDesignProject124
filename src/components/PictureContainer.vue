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
        <h1>{{ profile.firstName }} {{ profile.lastName }}</h1>
        <img>
        <p>{{ profile.description }}</p>
    </div>
</template>

<style scoped>
    .picture-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        height: fit-content;
        width: fit-content;
        background-color: white;
    }
</style>