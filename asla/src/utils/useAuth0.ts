import createAuth0Client from '@auth0/auth0-spa-js';
import { reactive } from 'vue';

export const AuthState = reactive({
    user: null,
    loading: false,
    isAuthenticated: false,
    auth0: null,
});

const config = {
    domain: process.env.VUE_APP_AUTH0_DOMAIN,
    client_id: process.env.VUE_APP_AUTH0_CLIENT_ID
};

export const useAuth0 = function(state: any) { 
    // The implementation will go here
    const handleStateChange = async () => {
        state.isAuthenticated = !!(await state.auth0.isAuthenticated());
        state.user = await state.auth0.getUser();
        state.loading = false;
    }

    const initAuth = () => {
        state.loading = true;
        const client = createAuth0Client({
             domain: config.domain,
             client_id: config.client_id,
             cacheLocation: 'localstorage',
             redirect_uri: window.location.origin
         }).then(async auth => {
             state.auth0 = auth;
             await handleStateChange();
         });      
   }

   const login = async () => {
        await state.auth0.loginWithPopup();
        await handleStateChange();
    };

    const logout = async () => {
    state.auth0.logout({
          returnTo: window.location.origin,
    });
}

     return {
        login,
        logout,
        initAuth
     }
   }