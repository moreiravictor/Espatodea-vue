import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import VueSimpleAlert from "vue-simple-alert";
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css' 

Vue.use(VueSimpleAlert);
Vue.use(VueQuillEditor,  { 
  placeholder: 'Escreva aqui...' ,
  modules: {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'], 
        ['link', 'image'],  
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],  
        [{ 'align': [] }], 
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'size': ['small', false, 'large', 'huge'] }]
      ]
    }
  }
});
library.add(fab)
library.add(fas)
library.add(faFontAwesome)
library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
