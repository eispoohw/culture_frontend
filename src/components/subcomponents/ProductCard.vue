<template>

  <div class="card border-0 m-2" style="width: 18em;">

    <div class="card-body">
      <image-carousel :product_slug="product.slug" :images="product.images"
                      :product_title="product.title"></image-carousel>
      <h4 class="card-title mt-2 text-end fw-bold text-primary">{{ product.product_units[0].price }} ₽</h4>
      <router-link :to="'/product/?slug=' + product.slug" class="navbar-brand" href="#">
        <h5 class="h6 text-decoration-none">{{ product.title }}</h5>
      </router-link>
    </div>
  </div>

</template>

<script>
import ImageCarousel from "@/components/subcomponents/ImagesCarousel.vue";

export default {
  components: {ImageCarousel},
  name: "ProductCard",
  props: {
    product: {
      required: true
    },
  },
}
</script>
