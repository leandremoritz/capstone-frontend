import { createStore } from 'vuex'
// Allows user state to b e saved to local storage
import createPersistedState from "vuex-persistedstate";
import router from "@/router";


export default createStore({
  state: { 
    product: null,
    products: null,
    user: null,
    token: null,
    cart: [],
    asc:true,
  },
  getters: {},
  mutations: {
    setCart(state, cart) {
      state.cart = cart;
    },
    updateCart: (state, product) => {
      state.cart.push(product);
    },
    removeFromCart: (state, cart) => {
      state.cart = cart;
    },
    removeProduct: (state , product) => {
    state.product = product
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    Logout(state){ 
     (state.user = ""), (state.token = "") 
    },

    sortByPrice:(state)=>{
      state.products.sort((a,b) =>{
        return a.price - b.price;
      })
      if(!state.asc){
        state.products.reverse()
      }
      state.asc=!state.asc
    }

  },
  actions: {
    // cart
    getCart: async (context) => {
      fetch(`https://capstone-backend-qxo4.onrender.com/products`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length === 0) {
            console.log(data);
          } else {
            context.commit("setProducts", data);
            // console.log(data);
          }
        });
    },
    addToCart: async (context, id) => {
      console.log(id);
    
     
      // this.state.cart.product.push(id);
      // context.dispatch("updateCart", this.state.cart);
    },
    deleteFromCart: async (context, id) => {
      const newCart = context.state.cart.filter(
        (product) => product.id != id
      );
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
      // swal({
      //   title: "Are you sure you want to remove this item?",
      //   text: "",
      //   icon: "warning",
      //   buttons: true,
      //   dangerMode: true,
      // })
      // .then((willDelete) => {
      //   if (willDelete) {
      //     swal("Poof! Removed !", {
      //       icon: "success",
      //     });
      //   } 
      // })
      context.commit("removeFromCart", newCart);
    },
   
     // get get all products
     getProducts: async (context , id ) => {
      fetch(`https://capstone-backend-qxo4.onrender.com/products`)
     
        .then((res) => res.json())
       .then((data) => context.commit("setProducts", data));
    },
    // get singleproduct
    getProduct: async (context , id ) => {
      fetch(`https://capstone-backend-qxo4.onrender.com/products/` + id)
        .then((res) => res.json())
        .then((data) => context.commit("setProduct", data));
    },
    // get necklaces
    getNecklaces: async (context) => {
      fetch(`https://capstone-backend-qxo4.onrender.com/products/products/necklace`)
        .then((res) => res.json())
        
        .then((data) => {
          if (data.length === 0) {
            console.log(data);
          } else {
            console.log(data);
            context.commit("setProducts", data);
            // console.log(data);
          }
        });
    },
    //  only bracelets
    getBracelets: async (context) => {
      fetch(`https://capstone-backend-qxo4.onrender.com/products/products/bracelet`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length === 0) {
            console.log(data);
          } else {
            console.log(data);
            context.commit("setProducts", data);
            // console.log(data);
          }
        });
    },
    // only earrings
    getEarrings: async (context) => {
      fetch(`https://capstone-backend-qxo4.onrender.com/products/products/earrings`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length === 0) {
            console.log(data);
          } else {
            console.log(data);
            context.commit("setProducts", data);
            // console.log(data);
          }
        });
    },
    // only rings
    getRings: async (context) => {
      fetch(`https://capstone-backend-qxo4.onrender.com/products/products/rings`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length === 0) {
            console.log(data);
          } else {
            console.log(data);
            context.commit("setProducts", data);
            // console.log(data);
          }
        });
    },
    // only set
    getSet: async (context) => {
      fetch(`https://capstone-backend-qxo4.onrender.com/products/products/2pc`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length === 0) {
            console.log(data);
          } else {
            console.log(data);
            context.commit("setProducts", data);
            // console.log(data);
          }
        });
    },
     // LOGIN USER
     Login: async (context, payload) => {
      fetch(`https://capstone-backend-qxo4.onrender.com/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      })
        .then((response) => response.json())
   
        .then((data) => {
          if (data.token) {
            // Saveing token to the store
            context.commit("setToken", data.token);

            // Once token
            // Verify Route
            fetch(`https://capstone-backend-qxo4.onrender.com/users/users/verify`, {
              headers: {
                "Conten-Type": "application/json",
                "x-auth-token": data.token,
              },
            })
            .then((res) => res.json())
          
            .then((data) => {
              context.commit("setUser", data.user);
              console.log(data.user)
              Swal.fire({
                icon: 'success',
                title: 'Welcome to L\'s Jewels',
                text: 'You\'ve succesfully logged in !'
              })
              // alert("You've succesfully logged in !");
              // router.push({
                //   name: "users",
                // });
              });
              router.push("/profile");
          }
         
        });
    },

    Register: async (context, payload) => {
      fetch(`https://capstone-backend-qxo4.onrender.com/users/users/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         fullname:payload.fullname,
         dob:payload.dob,
         age:payload.age,
         gender: payload.gender,
         image:payload.image,
         email: payload.email,
         password: payload.password
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    },

    // Admin page
    updateProduct: async (context, product) => {
      fetch(`https://capstone-backend-qxo4.onrender.com/products/` + id, {
        method: "PUT",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => context.dispatch("getProducts"));
    },

    // updateUser
    updateUser: async (context, payload) => {
      console.log(payload)
      fetch(`https://capstone-backend-qxo4.onrender.com/users/` + payload.id, {
        method: "PUT",
        body: JSON.stringify(
          {
            fullname:payload.fullname,
            dob:payload.dob,
            age:payload.age,
            gender:payload.gender,
            image:payload.image,
            email: payload.email,
           }
        ),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data) );
    },
    // delete
    deleteProduct: async (context , id) => {
      fetch(`https://capstone-backend-qxo4.onrender.com/products/` + id, {
        method: "DELETE",
      })
      .then((response) => response.json())
        .then(() => context.dispatch("setProduct"));
    },
     // delete user
     deleteUser: async (context, id) => {
      fetch(`https://capstone-backend-qxo4.onrender.com/users/` + id, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => context.dispatch("setUser"));
    },
    // create a product
    createProduct: async (context, payload) => {
      await fetch(`http://localhost:6969/products/addproduct`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
       
        },
        body: JSON.stringify({
        
          image: payload.image,
          descriptions: payload.descriptions,
          category: payload.category,
          color: payload.color,
          price: payload.price
        }),
      })
        .then((response) => response.json())
        .then(() => context.dispatch("setProducts"));
    },
  },
  modules: {
    // Allows user state to b e saved to local storage
  },  plugins: [createPersistedState()],
})
