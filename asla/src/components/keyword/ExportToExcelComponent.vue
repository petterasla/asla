<template>
    <div class="export-to-excel">
        <h1> 3 </h1>
        <button @click=downloadExcelFile>Export to excel</button>
    </div>
</template>


<script>
import XLSX from 'xlsx';
import store from '@/store'

export default {
    name: "ExportToExcelComponent",
    methods: {
        downloadExcelFile: function() {
            console.log("clicked download to excel")
            const keywords = store.getters.getKeywordResult
            console.log(keywords)
            console.log(keywords.lengths)
            const data = XLSX.utils.json_to_sheet(keywords)
            const wb = XLSX.utils.book_new()
            XLSX.utils.book_append_sheet(wb, data, 'data')
            XLSX.writeFile(wb,'demo.xlsx')
        }
    }
}


</script>

<style scoped>
.export-to-excel {
    margin-top: 3em;
    margin-bottom: 5em;
}
</style>