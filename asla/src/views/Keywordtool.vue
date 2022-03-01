<template>
    <div class="keywordtool" v-if="!state.loading">
        <div v-if="state.isAuthenticated">
            <h1>Let's make life easier</h1>
            <KeywordTextAreaComponent />
            <el-button type="info" @click="logout()" class="auth0-logout btn btn-primary">Logout</el-button>
        </div>
        <div v-else class="auth0-login">
            <el-button type="primary" @click="login()" class="btn btn-primary">Login</el-button>
        </div>
    </div>
</template>


<script>
import KeywordTextAreaComponent from "@/components/keyword/KeywordTextAreaComponent.vue";
import { useAuth0, AuthState } from "@/utils/useAuth0";
import { ref } from 'vue';
import {useStore} from "vuex";

const { login, logout, initAuth } = useAuth0(AuthState);

initAuth();

export default {
components: {
        KeywordTextAreaComponent
    },
    computed: {
        searched() {
            const store = useStore();
            return store.state.has_searched;
        }
    },
    setup() {
        let state = ref(AuthState);

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
.auth0-logout {
    margin-top: 5em
}

</style>