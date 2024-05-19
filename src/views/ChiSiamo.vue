<script setup>
    import pictureContainer from "@/components/PictureContainer.vue";
</script>

<template> 
    <h1>Chi siamo</h1>

    <div class="pictures-container">
        <pictureContainer ProfileName="Simone"/>
        <pictureContainer ProfileName="Thomas"/>
        <pictureContainer ProfileName="Kevin"/>
        <pictureContainer ProfileName="Loris"/>
        <pictureContainer ProfileName="Gabriel"/>
        <pictureContainer ProfileName="Giulia"/>
        <pictureContainer ProfileName="Francesca"/>
        <pictureContainer ProfileName="Lorenzo"/>
    </div>

</template>

<style scoped>
    .pictures-container {
        width: 80%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: stretch;
    }

    div.first-paragraph {
        width: 50%;
    }

    div.blank-space {
        height: 50px;
    }

    div.second-paragraph {
        width: 75%;
    }
</style>