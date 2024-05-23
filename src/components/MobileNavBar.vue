<template>
  <v-app-bar color="primary" class="rounded">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>
      <RouterLink to="/">
        <img src="@/assets/images/logotype.svg" alt="logo" height="50" />
      </RouterLink>
    </v-app-bar-title>
  </v-app-bar>
</template>