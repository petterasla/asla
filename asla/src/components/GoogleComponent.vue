
<template>
    <div class="center-button">
        <div id="signin_button"></div>
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
      document.head.appendChild(gapiScript)

       window.addEventListener('load', () => {
                console.log(window.google);
                const googleId = process.env.VUE_APP_GOOGLE_CLIENT_ID;
                console.log("google Id: " + googleId)
                window.google.accounts.id.initialize({
                    client_id: process.env.VUE_APP_GOOGLE_CLIENT_ID,
                    callback: this.handleCredentialResponse
                });
                window.google.accounts.id.renderButton(
                    document.getElementById("signin_button"),
                    { theme: "outline", size: "large" }  // customization attributes
                );
            })

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