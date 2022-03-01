<template>
    <div class="numerator">
        <h1> 1 </h1>
        <div v-if="is_searching" class="loader">
            <div v-loading="is_searching"></div>
        </div>
        <div v-else>
            <el-input class="textArea"
                v-model="keywords"
                :autosize="{ minRows: 4, maxRows: 10 }"
                type="textarea"
                placeholder="Insert keywords one for each line"
            >
            </el-input>
        </div>
        <el-button type="primary" @click="$store.dispatch('requestKeywordTool', keywords)">Search and download Excel</el-button>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useStore } from "vuex";

export default {
    name: 'KeywordTextAreaComponent',
    computed: {
        is_searching() {
            const store = useStore();
            return store.state.is_searching
        }
    },
    setup() {
        return {
            keywords: ref("")
        }
    }

}

</script>

<style scoped>
.numerator {
    size: 20em;
    opacity: 50;
}
.textArea {
    text-align: center;
    width: 40%;
    margin-bottom: 2em;
}
.loader {
    padding-top: 2em;
    padding-bottom: 3em
}
</style>