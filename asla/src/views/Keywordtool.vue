<template>
    <div class="keywordtool">
        <h1>Let's make life easier</h1>
        <KeywordInputComponent />
    </div>
</template>


<script>
    import KeywordInputComponent from "@/components/KeywordInputComponent.vue";

    export default {
    components: {
        KeywordInputComponent
    }
    };

</script>


<style scoped>
.keywordtool {
     text-align: center;
}

</style>