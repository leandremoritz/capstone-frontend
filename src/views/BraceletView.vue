<template>
  <h1>BRACELETS</h1>
  <div class="test">
    <div class="sort">
      <button class="button-17" @click="sortByPrice">Sort By Price</button>
    </div>
    <div v-for="product in products" :key="product.id" :product="product">
      <div class="loop">
        <div class="card">
          <img id="braceletsimages" :src="product.image" />
          <div class="content">
            <h2 class="desc">{{ product.descriptions }}</h2>
            <h3>R{{ product.price }}</h3>
            <h3>{{ product.category }}</h3>
            <h2 class="title">
              <router-link
                :to="{ name: 'SingleProduct', params: { id: product.id } }"
              >
                <button class="button-17 btn">Single view</button>
              </router-link>
              <button @click="addToCart(product)" class="button-17">
                <i class="fa-solid fa-cart-arrow-down"></i>
                <span class="btn2 ms-1"> Add to Cart</span>
              </button>
            </h2>

            <p class="copy"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "product"],

  mounted() {
    this.$store.dispatch("getBracelets", this.id);
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
    filteredProducts() {
      return this.$store.state.products?.filter((product) => {
        let isMatch = true;
        if (
          !product.descriptions
            .toLowerCase()
            .includes(this.search.toLowerCase())
        )
          isMatch = false;
        // if (this.category !== "all" && product.category !== this.category) isMatch = false;
        // if (this.company !== "all" && product.company !== this.company) isMatch = false;
        return isMatch;
      });
    },
  },
  methods: {
    addToCart(product) {
      this.$store.commit("updateCart", product);
    },
    sortByPrice() {
      this.$store.commit("sortByPrice");
      // console.log("You clicked me!");
    },
  },
};
</script>

<style scoped>
.sort {
  width: 100vw;
}

h1 {
  padding-top: 250px;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 0 !important;
}
#braceletsimages {
  border-bottom-left-radius: 50px;
  border-top-right-radius: 50px;
  margin: 10px;
  filter: drop-shadow(0px 0px 7px white);
}
.button-17 {
  margin: 3%;
  align-items: center;
  appearance: none;
  background-color: brown;
  border-radius: 24px;
  border-style: none;
  filter: drop-shadow(0px 0px 5px pink);
  box-sizing: border-box;
  color: white;
  font-weight: bolder;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 48px;
  justify-content: center;
  letter-spacing: 0.25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform, opacity;
  z-index: 0;
}

.button-17:hover {
  background: #f6f9fe;
  color: brown;
}

.button-17:active {
  box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%),
    0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
}

.button-17:focus {
  outline: none;
  border: 2px solid brown;
}

.button-17:not(:disabled) {
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
    rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}

.button-17:not(:disabled):hover {
  box-shadow: rgba(60, 64, 67, 0.3) 0 2px 3px 0,
    rgba(60, 64, 67, 0.15) 0 6px 10px 4px;
}

.button-17:not(:disabled):focus {
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
    rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}

.button-17:not(:disabled):active {
  box-shadow: rgba(60, 64, 67, 0.3) 0 4px 4px 0,
    rgba(60, 64, 67, 0.15) 0 8px 12px 6px;
}

.button-17:disabled {
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
    rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}
img {
  width: 200px;
  height: 300px;
}
.test {
  display: flex;
  /* padding-top: 150px; */
  flex-wrap: wrap;
  justify-content: center;
}
.title {
  padding-left: 50px !important;
}

/* cards */
.card {
  height: 75vh;
  padding: 10px;
  margin: 20px;
  width: 20vw;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.7px);
  -webkit-backdrop-filter: blur(6.7px);
  border: 1px solid rgba(255, 255, 255, 0.88);
}
@media screen and (max-width: 850px) {
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
  }
}
</style>
