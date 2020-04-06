// 1.创建vue实例
import Vue from 'vue'
import App from './App.vue'
new Vue({
    el:'#app',
    components:{
        App
    },
    template:'<App/>'
})
const arr= [1,2,3].map(v=> v+1)
console.log(arr)
//2. 挂在app组件