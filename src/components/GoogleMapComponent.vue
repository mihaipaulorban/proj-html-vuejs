<script setup>
import { ref } from 'vue';
import { GoogleMap, Marker } from 'vue3-google-map';

const apiKey = 'AIzaSyCQs866g7gNgoKIRyPgo1bMr1Mrzxkslyk';
const center = ref({ lat: 45.3955, lng: -75.7069 });
const zoom = ref(14);
const markerOptions = ref({
  position: center.value,
  title: 'My Marker Title', // Aggiungi ulteriori opzioni qui se necessario
});
</script>

<template>
  <div class="map"></div>
</template>

<style scoped lang="scss">
.map {
  width: 100%;
  height: 400px;
  background-image: url(../../public/img/map.jpg);
}
</style>
