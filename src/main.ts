/* Archivo que se encarga de crear una app de vue */
import { createApp } from 'vue'
import App from './App.vue' /* Impotamos el componente APP.vue que se encuentra en la misma carpeta */

createApp(App).mount('#app') /* Esta aplicacion vue se va a montar en el div cuyo ID es "app" del archivo index ubicado en la carpeta public*/
