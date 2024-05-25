<script setup>
import PictureContainer from "@/components/PictureContainer.vue";
</script>

<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Chi siamo</h1>
      </v-col>
      <v-col v-for="name in ['Simone', 'Thomas', 'Kevin', 'Loris', 'Gabriel', 'Giulia', 'Francesca', 'Lorenzo']"
        :key="name" cols="12" sm="6" md="4" lg="3">
        <PictureContainer :ProfileName="name" />
      </v-col>
    </v-row>
  </v-container>
</template>
