<template>
  <div class="single">
    <div class="page" v-for="product in product" :key="product.id">
      <div>
        <h1>{{ product.descriptions }}</h1>
      </div>
      <div class="card">
        <div>
          <router-link to="/products">
            <img
              class="arrow"
              src="https://i.postimg.cc/pVYs9HkF/icons8-back-arrow-50.pngg"
              alt=""
            />
          </router-link>
        </div>
        <img id="images" :src="product.image" alt="" />
        <!-- <h1>{{ product.descriptions }}</h1> -->
        <h2>R{{ product.price }}</h2>

        <button @click="addToCart(product)" class="button-17">
          <i class="fa-solid fa-cart-arrow-down"></i>
          <span class="btn2 ms-1" id="add-to-cart"> Add to Cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product.id"],

  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.$route.params.id);
  },
};
</script>

<style scoped>
.single {
  background-color: brown;
  height: 100vh;
}
.arrow {
  width: 50px;
  filter: drop-shadow(20px 20px 1px pink);
  margin-bottom: 10px;
}
#images {
  width: 150px;
  margin-top: 20px;
  filter: drop-shadow(0px 0px 10px white);
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
}
.page {
  height: 100vh;
  padding-top: 150px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  padding-left: 50px !important;
}
h1 {
  text-shadow: 0px 0px 10px white;
  font-size: 50px;
}
/* cards */
.card {
  padding: 30px;
  margin-top: 20px;
  height: fit-content;
  /* margin: 20px; */
  margin-bottom: 20px;
  padding-bottom: 20px;
  width: 50vh;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  filter: drop-shadow(0px 0px 5px pink);
  backdrop-filter: blur(6.7px);
  -webkit-backdrop-filter: blur(6.7px);
  border: 1px solid rgba(255, 255, 255, 0.88);
}

@media screen and (max-width: 570px) {
  .card {
    width: fit-content !important;
  }
  .page {
    padding-top: 130px;
  }
  h2 {
    font-size: 15px;
  }
}
@media screen and (max-width: 375px) {
  .page {
    padding-top: 130px;
  }
}
@media screen and (max-width: 590px) {
  .page {
    padding-top: 150px;
  }
}
</style>
