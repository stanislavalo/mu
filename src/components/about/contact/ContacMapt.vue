<template>
  <div style="height:500px; width: 100%" >
    <v-btn  small class="hidden-sm-and-up mt-3" @click="showMap = !showMap">
        Toggle map
      </v-btn>
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 100%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-marker :lat-lng="withTooltip">
        <l-icon
          :icon-size="dynamicSize"
          :icon-anchor="dynamicAnchor"
          icon-url="/dist/marker-icon.png"
        />
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css';

import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LIcon, LTooltip } from "vue2-leaflet";

export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LTooltip
  },
  props:['gpss','gpsd'],
  data() {
    return {
      zoom: 13,

      center: latLng(this.gpss,this.gpsd),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      // withPopup: latLng(50.08804,14.420762),
      withTooltip: latLng(this.gpss,this.gpsd),
      //  currentZoom: 11.5,
      currentCenter: latLng(this.gpss,this.gpsd),
      showParagraph: false,
      mapOptions: {
         zoomSnap: 0.5
      },
      showMap: true,
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    }
  }
};
</script>
