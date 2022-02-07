<template>
    <div class="numerator">
        <h2> 1 </h2>
        <input v-model="keyword" placeholder="Insert keyword here">
        <button @click="search">Search</button>
    </div>
</template>

<script lang="ts">
    import { ref } from 'vue';
    let isClicked = false;

    export default {
        name: 'KeywordInputComponent',
        methods: {
            search() {
                isClicked = true
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