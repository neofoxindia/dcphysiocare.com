import Vue from 'vue'

const components = {
  BaseHeader: () => import('../../components/BaseHeader.vue' /* webpackChunkName: "components/base-header" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}