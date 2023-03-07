<template>
  <body>
    <div class="move">
      <div class="addup">
        <h5>CART SUMMARY</h5>
        <div class="cart-details">
          <div class="row">
            <p>Subtotal:</p>
            <p>Shipping:</p>
          </div>
          <div class="row">
            <p>R{{ calculatePrice }}</p>
            <p>Free shipping</p>
          </div>
        </div>
        <router-link to="/checkout">
          <button type="submit" class="button-17">Checkout</button>
        </router-link>
      </div>
    </div>
    <div class="wrapper">
      <div id="cartbox">
        <h1>You've ordered :</h1>
        <div class="content">
          <div class="card" v-for="product in cartproducts" :key="product.id">
            <img id="cartimages" :src="product.image" class="mb-2" alt="food" />
            <div class="cart-content">
              <h3 class="ms-5">{{ product.descriptions }}</h3>
              <br />
              <p class="d-flex justify-content- gap-3">
                <span class="ms-5">Price: R{{ product.price }}</span>
              </p>
              <br />
              <button @click="deleteFromCart(product.id)" class="button-17">
                <i class="fa fa-trash"></i>
                <span class="btn2"></span>
              </button>
              <div class="right-bar">
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="move">
      <div class="addup">
        <h5>CART SUMMARY</h5>
        <div class="cart-details">
          <div class="row">
            <p>Subtotal:</p>
            <p>Shipping:</p>
          </div>
          <div class="row">
            <p>R{{ calculatePrice }}</p>
            <p>Free shipping</p>
          </div>
        </div>
        <router-link to="/checkout">
          <button type="submit" class="button-17">Checkout</button>
        </router-link>
      </div>
    </div> -->
  </body>
</template>

<script>
export default {
  data() {
    return {
      total: "",
    };
  },
  methods: {
    deleteFromCart(id) {
      return this.$store.dispatch("deleteFromCart", id);
    },
  },
  computed: {
    calculatePrice() {
      // console.log($store.state.currentValue)
      return this.$store.state.cart.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.price);
      }, 0);
    },
    cartproducts() {
      return this.$store.state.cart;
    },
    product() {
      return this.$store.state.product;
    },
  },
};
</script>

<style scoped>
h1 {
  width: 40vh;
  border-bottom: 2px solid black;
  margin-left: 30px;
  border-left: 2px solid black;
}
.heading {
  color: #f5d9d6;
}
.move {
  display: flex;
  align-items: center;

  padding-bottom: 20px;
  margin-top: 170px;
  display: flex;
  justify-content: center;
  /* margin-right: 30px; */
}
.addup {
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: stretch;
  padding: 30px;

  width: 20vw;
  padding: 10px;

  background: rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.7px);
  -webkit-backdrop-filter: blur(6.7px);
  border: 1px solid rgba(255, 255, 255, 0.88);
}

#cartbox {
  background-color: brown;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content {
  display: flex;
  flex-wrap: wrap;
}

body {
  overflow-x: hidden;
  background-color: brown;
  height: 100vh;
}
.wrapper {
  padding-top: 20px;
  display: flex;
  justify-content: center;
}

.box {
  width: 100vw;
  margin: 200px 0 0 0;
}

#cartimages {
  margin: 20px;
  width: 200px;
  height: 200px;
  border-bottom-left-radius: 50px;
  border-top-right-radius: 50px;
  filter: drop-shadow(0px 0px 10px white);
}

div.card {
  margin: 30px;
}

h3 {
  font-size: 30px;
}
.card {
  padding: 30px;

  width: 20vw;
  padding: 10px;

  background: rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.7px);
  -webkit-backdrop-filter: blur(6.7px);
  border: 1px solid rgba(255, 255, 255, 0.88);
}
.cart-content {
  display: flex;
  flex-direction: column;
}

.cart-details {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
@media screen and (max-width: 700px) {
  .cart-content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: fit-content;
  }
}
@media screen and (max-width: 500px) {
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
  }
}
@media screen and (max-width: 890px) {
  .content {
    display: flex;
    flex-wrap: wrap;
  }
  .card {
    width: fit-content;
  }
  .addup {
    width: fit-content;
  }
}
</style>
