<template>
    <div class="keywordtool">
        <h1>Let's make life easier</h1>
        <KeywordInputComponent />
        <KeywordResultComponent />
        <ExportToExcelComponent />
    </div>
</template>


<script>
    import KeywordInputComponent from "@/components/keyword/KeywordInputComponent.vue";
    import KeywordResultComponent from "@/components/keyword/KeywordResultComponent.vue";
    import ExportToExcelComponent from "@/components/keyword/ExportToExcelComponent.vue"

    export default {
    components: {
        KeywordInputComponent,
        KeywordResultComponent,
        ExportToExcelComponent
    }
    };

</script>


<style scoped>
.keywordtool {
     text-align: center;
}

</style>