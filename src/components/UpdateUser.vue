<template>
  <button class="button-17" @click="toggleModal">
    <i class="fa-solid fa-pen ms-2"></i><span class="ms-2"></span>
  </button>
  <div v-if="active" class="mod">
    <router-link to="/profile">
      <img
        class="arrow"
        src="https://i.postimg.cc/pVYs9HkF/icons8-back-arrow-50.pngg"
        alt=""
      />
    </router-link>
    <form>
      <input class="button-17" type="text" v-model="user.fullname" />

      <input class="button-17" type="text" v-model="user.dob" />

      <input class="button-17" type="text" v-model="user.age" />

      <input class="button-17" type="text" v-model="user.gender" />

      <input class="button-17" type="text" v-model="user.image" />

      <input class="button-17" type="text" v-model="user.email" />

      <button class="button-17" @click.prevent="updateUser(user.id)">
        <span class="ms-2">Submit</span>
      </button>
    </form>
  </div>
</template>
<script>
export default {
  props: ["user"],
  data() {
    return {
      active: false,
      fullname: "",
      dob: "",
      age: "",
      gender: "",
      image: "",
      email: "",
    };
  },
  methods: {
    toggleModal() {
      this.active = !this.active;
    },
    updateUser(id) {
      return this.$store.dispatch("updateUser", {
        id: id,
        fullname: this.user.fullname,
        dob: this.user.dob,
        age: this.user.age,
        gender: this.user.gender,
        image: this.user.image,
        email: this.user.email,
      });
    },
    // updateUser(id) {
    //   return this.$store.dispatch("updateUser", id);
    // },
  },
  mounted() {
    console.log(this.user);
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
<style scoped>
.mod form {
  margin-top: 150px !important;
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
.arrow {
  width: 50px;
  filter: drop-shadow(20px 20px 1px pink);
  margin-bottom: 10px;
}
form {
  margin-top: 250px;
  width: 90vw !important;
  display: flex !important;
  flex-direction: row !important;
}
</style>
