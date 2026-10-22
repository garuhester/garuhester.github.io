store文件夹结构：
![](https://upload-images.jianshu.io/upload_images/2381669-6566efaadbba20f5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

counter.js：
```
const state = {
  main: 0
}

const mutations = {
  DECREMENT_MAIN_COUNTER(state) {
    state.main--
  },
  INCREMENT_MAIN_COUNTER(state) {
    state.main++
  }
}

const actions = {
  incrementMain({ commit }) {
    commit('INCREMENT_MAIN_COUNTER')
  },
  decrementMain({ commit }) {
    commit('DECREMENT_MAIN_COUNTER')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}

```

index.js：
```
import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    counter
  }
})

export default store

```

vue页面：
>- ```commit```调用的是mutations中的方法
>- ```dispatch```调用的是actions中的方法
```
<el-button @click="incrementMain">+</el-button>
<el-button @click="decrementMain">-</el-button>

methods: {
    incrementMain() {
        this.$store.commit("counter/INCREMENT_MAIN_COUNTER");
        this.$store.dispatch("counter/incrementMain");
        console.log(this.$store.state.counter.main);
    },
    decrementMain() {
        this.$store.commit("counter/DECREMENT_MAIN_COUNTER");
        this.$store.dispatch("counter/decrementMain");
        console.log(this.$store.state.counter.main);
    },
},
```
