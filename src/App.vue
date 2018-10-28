<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Exotic food spots</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="mr-2">Ajouter une boutique exotique</span>
      <AddStore/>
    </v-toolbar>

    <v-content>
      <v-layout row justify-center>
        <GoogleMaps/>
        <Infos/>
      </v-layout>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import ApolloExample from './components/ApolloExample.vue';
import GoogleMaps from './components/GoogleMaps.vue';
import AddStore from './components/AddStore.vue';
import Infos from './components/Infos.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    ApolloExample,
    GoogleMaps,
    AddStore,
    Infos,
    Footer,
  },
};
</script>
