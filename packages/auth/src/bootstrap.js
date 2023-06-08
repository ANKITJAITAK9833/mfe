import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createMemoryHistory, createBrowserHistory} from 'history'; //Note: here we are using history instead of react-router-dom
// as react-router-dom internally uses history


// Mount function to start ut the app
const mount  = (el, {onSignIn,onNavigate, defaultHistory , initialPath})  => {
 
    const history =  defaultHistory ||  createMemoryHistory({
        initialEntries : [initialPath] //  initialPath is provided so that none of the sub apps take initial path as / but the inital path provided
    }); // if defualtHistory is present use it else create MemoryHistory

    if(onNavigate){
        history.listen(onNavigate);
    }


    ReactDOM.render(
        <App onSignIn={onSignIn} history={history} />,
        el
    );

    return {
        onParentNavigate({pathname: nextPathName}) {
            const {pathname} = history.location;

            if(pathname!==nextPathName) {
                history.push(nextPathName);
            }
        }
    }
};

// If we are in development and in isolation, 
// call the mount function immediately.
if( process.env.NODE_ENV === 'development' ) {
     const devRoot = document.querySelector('#auth-dev-root');

     if(devRoot) {

        // If app is loaded in development / isolation mode then we want to use browserhistory
        //as we want to see url getting changes in urlbar
        mount(devRoot, {defaultHistory: createBrowserHistory()});
     }
}

// We are running through container
// and we should export the mount function
export { mount };