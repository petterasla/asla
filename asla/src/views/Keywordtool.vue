<template>
    <div class="keywordtool">
        <h1>Let's make life easier</h1>
        <KeywordInputComponent />
        <KeywordResultComponent />
    </div>
</template>


<script>
    import KeywordInputComponent from "@/components/KeywordInputComponent.vue";
    import KeywordResultComponent from "@/components/KeywordResultComponent.vue";

    export default {
    components: {
        KeywordInputComponent,
        KeywordResultComponent
    }
    };

</script>


<style scoped>
.keywordtool {
     text-align: center;
}

</style>