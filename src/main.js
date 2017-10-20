// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引用elment-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI);

//引入store
import store from './store'

//在应用启动时，可以通过设置 Vue.config.productionTip = false 来关闭生产模式下给出的提示
Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
Vue.prototype.created= function(val){
    if(this.$store.state.admin=='true'&&this.$store.state.id=='null'){
        api.getAllProdStg(10,val).then((response) => {
            this.getData(response);
        });
    }else if(this.$store.state.admin=='true'&&this.$store.state.id!='null'){
        let id = this.$store.state.id;
        api.getIdProdStg(id,10,val).then((response) => {
            this.getData(response);
        });
    }else{
        api.getProdStg(10,val).then((response) => {
            this.getData(response);
        });
    }
}