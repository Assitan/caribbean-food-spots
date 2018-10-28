<template>
  <v-flex
    xs12
    sm8
    order-xs2
    class="gmaps">
    <label>
      Entrez votre adresse
      <GmapAutocomplete @place_changed="setPlace"/>
      <button @click="usePlace">Add</button>
    </label>

    <GmapMap
      :center="{lat: center.lat, lng: center.lng}"
      :zoom="7"
      map-type-id="terrain"
      style="width: 100%; height: 400px; margin-left: auto; margin-right: auto;"
    >
      <GmapInfoWindow :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
        {{infoContent}}
      </GmapInfoWindow>
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="toggleInfoWindow(m,index)"
      />
    </GmapMap>
  </v-flex>
</template>

<script>
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

import spots from '../../srv/api/spots.json';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB_gYjE_uDTg79iTgw60JrD8oCN7sfBruU',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    // // If you want to set the version, you can do so:
    // v: '3.26',
  },

  // // If you intend to programmatically custom event listener code
  // // (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  // // instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  // // you might need to turn this on.
  // autobindAllEvents: false,

  // // If you want to manually install components, e.g.
  // // import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  // // Vue.component('GmapMarker', GmapMarker)
  // // then disable the following:
  // installComponents: true,
});

export default {
  name: 'GoogleMaps',
  data() {
    return {
      center: {
        lat: 48.8499198,
        lng: 2.6370411,
      },
      infoContent: '',
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      // optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
      markers: spots,
    };
  },
  methods: {
    setPlace(place) {
      this.place = place;
    },
    usePlace(place) {
      if (this.place) {
        // this.markers.push({
        //   position: {
        //     lat: this.place.geometry.location.lat(),
        //     lng: this.place.geometry.location.lng(),
        //   }
        // })
        this.place = null;
      }
    },
    toggleInfoWindow(marker, idx) {
      this.$root.$emit('marker clicked', marker);
      this.infoWindowPos = marker.position;
      this.infoContent = marker.name;
      // check if its the same marker that was selected if yes toggle
      if (this.currentMidx === idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      // if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
  },
};
</script>

<style>
  .gmaps .vue-map-container {
    border: 15px solid #fff;
  }
</style>
