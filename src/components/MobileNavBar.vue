<template>
  <v-app-bar
    app
    color="primary"
    elevate-on-scroll
  >
    <v-app-bar-nav-icon @click="drawer = !drawer" />

    <v-toolbar-title>My App</v-toolbar-title>

    <v-spacer />

    <v-btn
      icon
      :to="{ name: 'home' }"
    >
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn
      icon
      :to="{ name: 'whoWeAre' }"
    >
      <v-icon>mdi-information</v-icon>
    </v-btn>

    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
    >
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Home', icon: 'mdi-home', to: { name: 'home' } },
        { title: 'Chi Siamo', icon: 'mdi-information', to: { name: 'whoWeAre' } },
        { title: 'Terms of Service', icon: 'mdi-gavel', to: { name: 'termsOfService' } },
      ],
    }
  },
}
</script>

<style scoped>
.v-app-bar {
  z-index: 10; /* Assicurati che la navbar stia sopra altri elementi */
}
</style>
