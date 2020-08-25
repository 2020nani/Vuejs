import Vue from 'vue'
import App from './App'

new Vue({
    /*primeiro metodo renderizar 
    el:'#app',
    render(createElement){
        return createElement(App)
    }
})*/
// segundo metodo renderizar(padrao vue)
render: h => h(App)
}).$mount("#app")