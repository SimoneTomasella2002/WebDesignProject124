<script setup>
    import profileData from "@/assets/json/profiles.json";
    import { onMounted, ref } from "vue";

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

    onMounted(() => {
        loadProfile(props.ProfileName);
    });

    console.log(props.ProfileName);
</script>

<template>
    <div class="picture-container">
        <h1>{{ profile.firstName }} {{ profile.lastName }}</h1>
    </div>
</template>

<style scoped>
    .picture-container {
        display: flex;
        flex-direction: column;
        height: fit-content;
        width: fit-content;
        background-color: white;
    }
</style>