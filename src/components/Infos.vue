<template>
    <v-flex
      xs12
      sm3
      order-xs1
      class="mt-4 mr-3">
      <v-card>
        <v-card-title>
          <div>
            <h3 v-if="!show">Cliquez sur une icône
              <v-icon large color="red darken-2">map-marker</v-icon> afin d'avoir plus d'informations
            </h3>
            <div v-if="show">
              <h3 class="headline mb-3">Informations</h3>
              <p><b>Nom</b> : {{infos.name}}</p>
              <p><b>Adresse</b> : {{infos.address}}</p>
              <p><b>Numéro</b> de téléphone : {{infos.phoneNumber}}</p>
              <p><b>Horaires</b> :</p>
              <v-rating v-model="infos.rating"></v-rating>
            </div>
          </div>
        </v-card-title>
      </v-card>
      <v-flex
        class="mt-3"
        v-if="show">
        <div>
          <v-chip
            small
            v-for="(tag, index) in infos.tags"
            :key="index">
            {{tag}}
          </v-chip>
        </div>
      </v-flex>
      <v-card class="mt-3">
        <v-card-title>
          <div>
            <p class="mb-0"><b>M</b> : Magasins</p>
            <p class="mb-0"><b>B</b> : Boulangeries</p>
            <p class="mb-0"><b>R</b> : Restaurants</p>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
 </template>

<script>

export default {
  name: 'Infos',
  data() {
    return {
      infos: {},
      show: false,
    };
  },
  created() {
    this.$root.$on('marker clicked', (payload) => {
      this.show = true;
      this.infos = payload;
    });
  },
  beforeDestroy() {
    this.$root.$off('marker clicked');
  },
};
</script>
