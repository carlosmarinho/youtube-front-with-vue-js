import Vue from 'vue';
import App from './App';

//Here is another way to use the el and more used
new Vue({
    render: h => h(App)
}).$mount('#app');

/*
new Vue({
    el: '#app',
    render: h => h(App)
})*/

/*new Vue({
    render: function(createElement) {
        return createElement(App);
    }
})*/
