<template>
  <div class="container">
    <div class="go" v-if="user">
      <!-- Image and user details -->
      <div class="display text-center">
        <div class="users_PP">
          <img class="profilepicture" alt="profilepicture" :src="user.image" />
        </div>
        <div class="Users_details">
          <h1 class="user text-light">{{ user.fullname }}</h1>
          <h2 class="email text-light">{{ user.email }}</h2>
        </div>
        <div class="buttons">
          <UpdateUser :user="user" />
          <button class="button-17" @click="deleteUser(user.id)">
            <span class="ms-2"><i class="fa-solid fa-trash"></i></span>
          </button>
          <li>
            <button class="button-17" @click="Logout()">
              <i class="fa-solid fa-right-from-bracket"></i>
            </button>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UpdateUser from "../components/UpdateUser.vue";
export default {
  components: {
    UpdateUser,
  },
  computed: {
    user() {
      console.log(this.$store.state.user);
      return this.$store.state.user;
    },
  },
  methods: {
    Logout() {
      this.$store.commit("Logout");
      this.$router.push("/");
    },
    deleteUser(id) {
      return this.$store.dispatch("deleteUser", id);
    },
  },
};
</script>

<style scoped>
.go {
  display: flex;
  align-items: center;
  justify-content: center;
}

.buttons {
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  align-content: center;
  align-items: center;
}
/* .display {
  background-color: brown;
  width: 80vw;
  margin: 20px;
  padding: 10px;
  height: fit-content;
  width: 50vw;
  display: block;
  margin: 0 auto;
  border-radius: 30px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.7px);
} */
li {
  list-style-type: none;
}
.container {
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: brown;
  padding-top: 150px;

  /* margin-top: 150px; */
}
.profilepicture {
  filter: drop-shadow(0px 10px 5px black);
  border-radius: 50%;
  border: 3px solid;
  aspect-ratio: 1;
  height: 200px;
  width: 200px;
  animation-name: bounce;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-delay: 2s;
}
/* The animation "bounce" */
@keyframes bounce {
  /* start */
  0% {
    top: 0px;
  }
  /* step (you can add multiple incremental steps from 1-100) */
  50% {
    transform: rotate(40deg);
  }
  /* end (you can count down from 100 to 0 too) */
  100% {
    top: 0px;
  }
}

.button-17 {
  /* margin: 3%; */
  align-items: center;
  appearance: none;
  background-color: brown;
  border-radius: 24px;
  border-style: none;
  filter: drop-shadow(0px 0px 5px pink);
  box-sizing: border-box;
  color: white;
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
  color: grey !important;
}

.button-17:active {
  box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%),
    0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
}

.button-17:focus {
  outline: none;
  border: 2px solid #4285f4;
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
@media screen and (max-width: 800px) {
  .display {
    width: fit-content;
  }
}
</style>
