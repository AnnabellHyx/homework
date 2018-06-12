import Vue from 'Vue'
import Vuex from 'Vuex'
Vue.use(Vuex);

//引入modules
import users from './modules/users'
const store = new Vuex.Store({
    modules:{
      users,
    }
});
export default store
