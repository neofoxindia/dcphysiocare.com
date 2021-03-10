export { default as BaseHeader } from '../../components/BaseHeader.vue'

export const LazyBaseHeader = import('../../components/BaseHeader.vue' /* webpackChunkName: "components/base-header" */).then(c => c.default || c)
