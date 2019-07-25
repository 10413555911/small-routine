import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

var Store = new Vuex.Store({
    state: {
        month: 1,
        date: 1,
        list_big: '',
        list_detal: '',
        push_1: []
    },
    mutations: {
        addmonth(state, time) {
            state.month = time.month * 1
            state.date = time.date
        },
        list_big(state, item) {
            state.list_big = item
        },
        list_detal(state, item) {
            state.list_big.child[item].flag = !state.list_big.child[item].flag
        },
        push_1(state) {
            state.list_big.child.map(item => {
                if (item.flag) {
                    let ind = state.push_1.indexOf(item)
                    ind == -1 ? state.push_1.push(item) : state.push_1;
                }
                // else {
                //     state.push_1 && state.push_1.map((item, index) => {
                //         let num = "";
                //         item.flag === false ? num = index : "";
                //         state.push_1.splice(num, num + 1)
                //     })
                // }
                // else{
                //    console.log(item.name)
                // console.log(state.push_1)
                //    let num=state.push_1.findIndex(i=>{
                //         item.name===i.name
                //         console.log(item.name===i.name)
                //    })
                //    console.log(num)

                // }
            })
        }
    }
})

export default Store