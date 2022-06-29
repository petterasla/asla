
<template>
    <div class="center-button">
        <button id="signin_button" @click="handleSomething" >Authorize with Google</button>
        <!--
        <div id="g_id_onload"
            data-client_id="749862802460-aeuuju8u5m1l6s12bb0671ard7g216vs.apps.googleusercontent.com"
            data-context="signin"
            data-ux_mode="popup"
            data-callback="globalThis.handleCredentialResponse">
        </div>

        <div class="g_id_signin"
            data-type="standard"
            data-shape="rectangular"
            data-theme="outline"
            data-text="signin_with"
            data-size="large"
            data-logo_alignment="left">
        </div>
        -->
    </div>
</template>


<script>
import { ref } from 'vue';
import { useStore } from "vuex";

export default {
    methods: {
        handleCredentialResponse(response) {
            console.log("credential response:")
            console.log(response);
            if (response.credential != null && response.credential.length > 0) {
                console.log("User successfully logged in");
                this.$store.dispatch('updateAuthentication', true);
            } else {
                console.log("User failed to log in")
                this.$store.dispatch("updateAuthentication", false);
            }
        },
        handleSomething() {


//        window.addEventListener('load', () => {
           const googleId = process.env.VUE_APP_GOOGLE_CLIENT_ID;
           const client = window.google.accounts.oauth2.initCodeClient({
            client_id: googleId,
            scope: "https://www.googleapis.com/auth/adwords",
            ux_mode: 'popup',
            callback: (response) => {
                console.log("Inside google client callback ")
                console.log(response)
                console.log("code: " + response.code)
                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'http://localhost:8080/api/login', true);
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                // Set custom header for CRSF
                xhr.setRequestHeader('X-Requested-With', 'XmlHttpRequest');
                xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
                xhr.setRequestHeader('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
                xhr.setRequestHeader('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
                xhr.onload = function() {
                    console.log('Auth code response: ' + response);
                };
                xhr.send();
                console.log("finished google client callback")
                console.log(response)
            }
  //        });
    
          //const loginButton = document.getElementById('signin_button');
          //loginButton.setAttribute('onclick', console.log("button clicked"));
                // console.log(window.google);
                // const googleId = process.env.VUE_APP_GOOGLE_CLIENT_ID;
                // console.log("google Id: " + googleId)
                // window.google.accounts.id.initialize({
                //     client_id: process.env.VUE_APP_GOOGLE_CLIENT_ID,
                //     callback: this.handleCredentialResponse
                // });
                // window.google.accounts.id.renderButton(
                //     document.getElementById("signin_button"),
                //     { theme: "outline", size: "large" }  // customization attributes
                // );
        });

        // const loginButton = document.getElementById('signin_button');
        // loginButton.onclick = this.handleSomething(client);
            console.log("calling requestCode");
            var response = client.requestCode();
            console.log("finished requesting code")
            console.log(window.google);
        }
    },
    setup() {
        const store = useStore();
        const state = ref(store);
        return {
            state
        }
    },
    mounted() {
        let gapiScript = document.createElement('script')
        gapiScript.setAttribute('src', 'https://accounts.google.com/gsi/client')
        document.head.appendChild(gapiScript);
    }
}
</script>

<style scope>
.center-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
}
</style>