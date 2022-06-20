<template>
    <div class="keywordtool" v-if="!state.loading">
        <div v-if="state.is_authenticated">
            <h1>Let's make life easier</h1>
            <KeywordTextAreaComponent />
            <el-button type="info" @click="logout()" class="auth0-logout btn btn-primary">Logout</el-button>
        </div>
        <div v-else class="google-login">
            <GoogleComponent />
        </div>
    </div>
</template>


<script>
import KeywordTextAreaComponent from "@/components/keyword/KeywordTextAreaComponent.vue";
import { ref } from 'vue';
import {useStore} from "vuex";
import GoogleComponent from "@/components/GoogleComponent.vue";

export default {
components: {
        KeywordTextAreaComponent,
        GoogleComponent
    },
    computed: {
        searched() {
            const store = useStore();
            return store.state.has_searched;
        }
    },
    setup() {
        const store = useStore();
        const state = ref(store.state);
        return {
            state
        }
    }
};

</script>


<style scoped>
.keywordtool {
     text-align: center;
}
.google-login {
    margin-top: 5em;
    text-align: center;
}
.auth0-logout {
    margin-top: 5em
}

</style>