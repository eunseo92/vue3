import { createApp } from 'vue'
import App from './App'
import store from './store'  // Same as './store/index.js'
import router from './routes' // Same as './routes/index.js'
import loadImage from './plugins/loadImage'

createApp(App) 
  .use(router) // 플러그인 연결 시 사용하는 메서드  $route, $router
  .use(store)  // $store
  .use(loadImage) // $loadImage
  .mount('#app')

