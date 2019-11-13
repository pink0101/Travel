import Vue from 'vue'
import Vuex from 'vuex'// 引入vuex

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        city: '西安'
    },
    actions: {// 用来提交 mutation
        changeCity(ctx, city) {
            ctx.commit('changeCity', city)
        }
    },
    mutations: {// 用来修改数据
        changeCity (state, city) {
            state.city = city
        }
    }
})
