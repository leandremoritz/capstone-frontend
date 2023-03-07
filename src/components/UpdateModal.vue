<template>
  <button class="button-17" @click="toggleModal">
    <i class="fa-solid fa-pen ms-2"></i><span class="ms-2"></span>
  </button>
  <div v-if="active" class="mod">
    <form>
      <!-- <router-link to="/profile"> -->
      <img
        class="arrow"
        src="https://i.postimg.cc/pVYs9HkF/icons8-back-arrow-50.pngg"
        alt=""
      />
      <!-- </router-link> -->
      <div>IMAGE</div>
      <input id="btn" class="button-17" type="text" v-model="product.image" />
      <div>CATEGORY</div>
      <input id="btn" class="button-17" type="text" v-model="product.brand" />
      <div>DESCRIPTION</div>
      <input
        id="btn"
        class="button-17"
        type="text"
        v-model="product.descriptions"
      />
      <div>PRICE</div>
      <input id="btn" class="button-17" type="text" v-model="product.price" />
      <button id="btn" class="button-17" @click="toggleModal">
        <i class="fa-solid fa-pen ms-2"></i><span class="ms-2"></span>
      </button>
      <!-- <button
        class="button-17"
        @click.prevent="updateProduct(updateProduct.id)"
      >
        <i class="fa-solid fa-pen ms-2"></i><span class="ms-2">Change</span>
      </button> -->
    </form>
  </div>
</template>
<script>
export default {
  props: ["product"],
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggleModal() {
      this.active = !this.active;
    },
    updateProduct(id) {
      return this.$store.dispatch("updateProproduct", {
        id: id,
        image: this.product.image,
        brand: this.product.brand,
        descriptions: this.product.descriptions,
        price: this.product.price,
      });
    },
  },
  mounted() {
    console.log(this.product);
  },
};
</script>
<style scoped>
.arrow {
  width: 50px;
  filter: drop-shadow(20px 20px 1px pink);
  margin-bottom: 10px;
}
.mod form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 30px;
  margin: 20px;
  width: 20vw;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.7px);
  -webkit-backdrop-filter: blur(6.7px);
  border: 1px solid rgba(255, 255, 255, 0.88);
  z-index: 10 !important;
}
.button-17 {
  width: 150px !important;
  margin: 0;
}
#btn {
  width: 300px !important;
}

form {
  background-color: white !important;
}
</style>
