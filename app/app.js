import Vue from 'nativescript-vue'
import Home from './components/Home'

Vue.registerElement('HTMLLabel', () => require('@nativescript-community/ui-label').Label);
new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
