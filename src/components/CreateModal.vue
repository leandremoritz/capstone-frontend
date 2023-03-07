<template>
  <button class="meow" @click="toggleModal">Create Product</button>

  <div v-if="active == true" class="addme">
    <form>
      <div>IMAGE</div>
      <input class="button-17" type="text" v-model="image" />
      <div>DESCRIPTION</div>
      <input class="button-17" type="text" v-model="descriptions" />
      <div>CATEGORY</div>
      <input class="button-17" type="text" v-model="category" />

      <div>PRICE</div>
      <input class="button-17" type="text" v-model="price" />
      <button class="button-17" @click="createProduct()">Add</button>
    </form>
  </div>
</template>
<script>
export default {
  props: ["product"],
  data() {
    return {
      active: false,
      image: "",
      descriptions: "",
      category: "",
      color: "",
      price: "",
    };
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  methods: {
    toggleModal() {
      this.active = !this.active;
      console.trace();
    },
    createProduct() {
      this.$store.dispatch("createProduct", {
        image: this.image,
        descriptions: this.descriptions,
        category: this.category,
        color: this.color,
        price: this.price,
      });
    },
  },
  mounted() {
    console.log(this.product);
  },
};
</script>

<style scoped>
form {
  background-color: white !important;
}
.meow {
  margin-top: 120px !important;
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
button.btn {
  background-color: brown;
  color: black;
  height: 40px;
  padding: 5px;
  text-align: center;
}
button.btn:hover {
  background-color: black;
  color: pink;
}
.addme form {
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
  width: 50vw;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.7px);
  -webkit-backdrop-filter: blur(6.7px);
  border: 1px solid rgba(255, 255, 255, 0.88);
}
</style>
