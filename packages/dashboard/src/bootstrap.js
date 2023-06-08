import {createApp} from 'vue';
import Dashboard from './components/Dashboard.vue';


// Mount function to start ut the app
const mount  = (el)  => {
 const app = createApp(Dashboard);
 app.mount(el);
};

// If we are in development and in isolation, 
// call the mount function immediately.
if( process.env.NODE_ENV === 'development' ) {
     const devRoot = document.querySelector('#dashboard-dev-root');

     if(devRoot) {

        // If app is loaded in development / isolation mode then we want to use browserhistory
        //as we want to see url getting changes in urlbar
        mount(devRoot);
     }
}

// We are running through container
// and we should export the mount function
export { mount };