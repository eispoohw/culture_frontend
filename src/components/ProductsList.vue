<template>
    <div class="row row-cols-3 row-cols-md-4 row-cols-lg-6 bg-light rounded-start">
      <product-card v-for="product in products" :product="product"></product-card>
    </div>
</template>

<script>
import ProductCard from "@/components/subcomponents/ProductCard.vue";
import {mapState} from "pinia";
import useCultureStore from "@/stores/culture.js";

export default {
  components: {ProductCard},
  name: "ProductsList",
  computed: {
    ...mapState(useCultureStore, ['products'])
  },
}
</script>