import './public-path';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router';
// import store from './store';
import actions from "@/qiankun/actions"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


Vue.config.productionTip = false;
Vue.use(VueRouter)

let router = null;
let instance = null;
function render(props = {}) {
  const { container, 
    onGlobalStateChange, 
    setGlobalState, 
    offGlobalStateChange, 
    router: parentRouter } = props;

  const parentActions = {
    onGlobalStateChange,
    setGlobalState,
    offGlobalStateChange
  }
  actions.setActions(parentActions, parentRouter)
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/vue2' : '/',
    mode: 'history',
    routes
  });

  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  instance.$destroy?.()
  // instance._container.innerHTML = ''
  instance.$el.innerHTML = ''
  instance = null
  router = null
}
