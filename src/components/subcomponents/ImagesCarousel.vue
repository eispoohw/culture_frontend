<template>
  <div v-if="images.length === 0">
    <img class="d-block w-100" src="https://storage.yandexcloud.net/cultureshop/no-product.jpg" alt="no-product">
  </div>
  <div v-else>
    <div :id="'carousel' + product_slug" class="carousel slide carousel-fade">
      <div class="carousel-inner">
        <div>
          <div class="carousel-item active">
            <img :src="images[0].image" class="d-block w-100 rounded-2" :alt="product_title">
          </div>
        </div>
        <div v-for="image in images.slice(1,)">
          <div class="carousel-item">
            <img :src="image.image" class="d-block w-100 rounded-2" :alt="product_title">
          </div>
        </div>
      </div>
      <div v-if="images.length > 1">
        <button class="carousel-control-prev" type="button" :data-bs-target="'#carousel' + product_slug"
                data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Предыдующее изображение</span>
        </button>
        <button class="carousel-control-next" type="button" :data-bs-target="'#carousel' + product_slug"
                data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Следющее изображение</span>
        </button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "ImagesCarousel",
  props: {
    product_slug: {
      required: true
    },
    product_title: {
      required: false
    },
    images: {
      required: this
    }
  },
}
</script>

<style>
img {
  aspect-ratio: 1/1;
  object-fit: cover;
}
</style>
