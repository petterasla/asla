<template>
    <div class="keywordtool" v-if="!state.loading">
        <div v-if="state.isAuthenticated">
            <h1>Let's make life easier</h1>
            <KeywordInputComponent />
            <KeywordResultComponent />
            <ExportToExcelComponent />
            <button @click="logout()" class="btn btn-primary">Logout</button>
        </div>
        <div v-else class="auth0-login">
            <button @click="login()" class="btn btn-primary">Login</button>
        </div>
    </div>
</template>


<script>
import KeywordInputComponent from "@/components/keyword/KeywordInputComponent.vue";
import KeywordResultComponent from "@/components/keyword/KeywordResultComponent.vue";
import ExportToExcelComponent from "@/components/keyword/ExportToExcelComponent.vue"
import { useAuth0, AuthState } from "@/utils/useAuth0";
import { ref } from 'vue';
const { login, logout, initAuth } = useAuth0(AuthState);

initAuth();

export default {
components: {
    KeywordInputComponent,
    KeywordResultComponent,
    ExportToExcelComponent
    },
    setup() {
        let state = ref(AuthState);
        console.log(state)
        return {
            state,
            login,
            logout
        }
    }
};

</script>


<style scoped>
.keywordtool {
     text-align: center;
}
.auth0-login {
    margin-top: 5em;
    text-align: center;
}

</style>