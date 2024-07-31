import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex';
import router from './router/router';


const store = createStore({
  state: {
   UserLoged: false,
   configOn: false
  },
  mutations: {
    sigin(state) {
      state.UserLoged = true 
    },
    sigup(state){
        state.UserLoged = false 
    },
    exitFromConfigs(state){
      state.configOn = false 
    },
    joinConfigs(state){
      state.configOn = true 
    },
  },
});


const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')