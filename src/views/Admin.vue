<template>
  <div class="admin">
    <td class="create"><CreateModal :product="product" /></td>

    <div id="wrap">
      <tbody class="b-wrap">
        <tr v-for="product of products" :key="product.id">
          <div class="card">
            <div scope="row">
              <img id="adminimages" v-bind:src="product.image" alt="" />
            </div>
            <h2>{{ product.category }}</h2>
            <h1>{{ product.descriptions }}</h1>
            <h1>R{{ product.price }}</h1>
            <button
              id="delete"
              class="button-17"
              @click="deleteProduct(product.id)"
            >
              <i class="fa-solid fa-trash"></i><span class="ms-2"></span>
            </button>
            <UpdateModal :product="product" />
          </div>
        </tr>
      </tbody>
    </div>
  </div>

  <!-- </table> -->
</template>
<script>
import UpdateModal from "../components/UpdateModal.vue";
import CreateModal from "../components/CreateModal.vue";
export default {
  components: {
    UpdateModal,
    CreateModal,
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    deleteProduct(id) {
      this.$store.dispatch("deleteProduct", id);
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
};
</script>

<style>
/* cards */
.card {
  height: 65vh;
  padding: 30px;
  margin: 20px;
  width: 25vw;

  background: rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.7px);
  -webkit-backdrop-filter: blur(6.7px);
  border: 1px solid rgba(255, 255, 255, 0.88);
}
#delete {
  width: 9vw !important;
}
@media screen and (max-width: 850px) {
  .card {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    filter: drop-shadow(0px 0px 5px pink);
    align-items: center;
    width: fit-content;
  }
}

.create {
  display: flex;
  justify-content: center;
  border: none;
}
.admin {
  padding: 10% 10px 10px 10px;
  color: black;
}
table {
  width: 100%;
  padding: 15px;
}

.b-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#adminimages {
  width: 150px;
  height: 150px;
  filter: drop-shadow(0px 0px 10px white);
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  margin-bottom: 10px;
}
/* button */
.button-17 {
  margin-top: 10px !important;
  margin: 3%;
  align-items: center;
  appearance: none;
  background-color: brown;
  border-radius: 24px;
  border-style: none;
  filter: drop-shadow(0px 0px 1px pink);
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
@media screen and (max-width: 1300px) {
  img {
    width: 100px;
  }
  .card {
    width: 300px;
    height: fit-content;
  }
  .admin {
    padding: 0;
    margin: 0;
  }
  .create {
    padding-top: 100px;
  }
}
@media screen and (max-width: 300px) {
  .admin {
    display: flex;
    flex-direction: column;
  }
  .table {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: fit-content;
  }
}
@media screen and (max-width: 1100px) {
  button.button-17 {
    margin: 10px !important;
  }
}
</style>
