<template>
    <div class="keyword-result">
        <h1> 2 </h1>
        <div>
            <label>Filter:</label><input v-model="searchTerm" />
        </div>
        <table-lite
            :is-loading="table.isLoading"
            :columns="table.columns"
            :rows="rows"
            :total="table.totalRecordCount"
            :is-re-search="true"
            :sortable="table.sortable"
        ></table-lite>
    </div>
</template>

<style scoped>
.keyword-result {
    margin-top: 3em;
}
</style>

<script>
import { ref } from 'vue';
import TableLite  from 'vue3-table-lite'
import { useStore } from 'vuex'

export default {
    name: "KeywordResultComponent",
    components: {
        TableLite 
    },
    computed: {
        rows() {
            return useStore().state.table.rows
        }
    },
    method: {
        filteredRows(searchTerm) {
            const rows = useStore().state.table.rows
            return rows.filter(
                (x) => {
                    if (typeof x.keyword === 'undefined') {
                        console.log('filter search undefined')
                        return ""
                    }
                    x.keyword.toLowerCase().includes(searchTerm.value.toLowerCase())
                });
        }
    },
    setup() {
        const searchTerm = ref(""); // Search text
        const table = useStore().state.table

        return {
            searchTerm,
            table
        }
    }
}

</script>

