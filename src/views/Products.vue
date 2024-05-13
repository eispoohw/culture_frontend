<template>
  <base-layout>
    <div class="row">
      <div class="col-3">
        <filter-products
            :selected_category="this.selected_category"
            :selected_color_slug="this.selected_color_slug"
        ></filter-products>
      </div>
      <div class="col-9">
        <products-list></products-list>
      </div>
    </div>
  </base-layout>


</template>

<script>
import {mapActions, mapState} from 'pinia'
import BaseLayout from "@/layouts/BaseLayout.vue";
import useCultureStore from "@/stores/culture";
import ProductsList from "@/components/ProductsList.vue";
import FilterProducts from "@/components/FilterProducts.vue";

export default {
  name: "ProductsPage",
  components: {FilterProducts, BaseLayout, ProductsList},
  computed: {
    ...mapState(useCultureStore, ['products', 'materials', 'colors', 'categories'])
  },
  methods: {
    ...mapActions(useCultureStore, ['getProducts', 'getCategories', 'getColors']),
  },
  data() {
    return {
      selected_category: null,
      selected_color_slug: null,
    }
  },

  mounted: async function () {
    const query = new URLSearchParams(window.location.search)

    // GET CATEGORIES
    const parent_category = query.get('category')
    const selected_category = await this.getCategories(`slug=${parent_category}`)
    const categories_response = await this.getCategories(`parent=${parent_category}`)
    if (categories_response.data.length === 0) {
      if (selected_category.data.length === 0) {
        await this.getCategories(`root=1`)
      }
    }
    this.selected_category = selected_category.data[0]

    // GET COLORS
    this.selected_color_slug = query.get('color')
    await this.getColors()


    await this.getProducts()

  },
}
</script>