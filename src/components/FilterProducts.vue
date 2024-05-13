<template>
  <label for="#select-category" class="form-label">Категория товаров</label>
  <select class="form-select" aria-label="Категория товаров" id="select-category">
    <option v-if="selected_category" selected :value="selected_category.slug">{{ selected_category.title }}</option>
    <option v-else selected>Любая</option>
    <option v-for="c in categories" :value="c.slug">-- {{ c.title }}</option>
  </select>

  <label class="mt-3 mb-2 form-label" for="#select-color">Цвета</label>
  <fieldset id="select-color">
    <div v-for="color in colors" class="form-check form-check-inline" >
      <input class="form-check-input" type="checkbox" :id="color.slug" :value="color.slug">
      <div :style="'border: 1px solid black; width: 20px; height: 20px; background-color: ' + color.value"></div>
    </div>
  </fieldset>


</template>

<script>

import {mapState} from 'pinia'
import useCultureStore from "@/stores/culture";

export default {
  name: "FilterProducts",
  components: {},
  computed: {
    ...mapState(useCultureStore, ['products', 'materials', 'colors', 'categories'])
  },
  props: {
    selected_category: {
      required: false,
    },
    selected_color_slug: {
      required: false
    }
  }
}
</script>

<style scoped>

</style>