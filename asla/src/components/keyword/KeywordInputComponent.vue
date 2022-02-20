<template>
    <div class="numerator">
        <h1> 1 </h1>
        <input v-model="keyword" placeholder="Insert keyword here">
        <button @click="$store.dispatch('requestKeywordTool', keyword)">Search</button>
    </div>
</template>

<script>
export default {
    name: 'KeywordInputComponent',
    setup() {
        return {
            keyword: null
        }
    }

}

</script>

<style scoped>
.numerator {
    size: 20em;
    opacity: 50;
}
</style>