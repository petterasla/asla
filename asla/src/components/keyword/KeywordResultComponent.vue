<template>
    <div class="keyword-result">
        <h1> 2 </h1>
        <div>
            <label>Filter:</label><input v-model="searchTerm" />
        </div>
        <table-lite
            :is-static-mode="true"
            :is-loading="table.isLoading"
            :columns="table.columns"
            :rows="table.rows"
            :total="table.totalRecordCount"
            :sortable="table.sortable"
            @is-finished="table.isLoading = false"
        ></table-lite>
    </div>
</template>

<style scoped>
.keyword-result {
    margin-top: 3em;
}
</style>

<script>
import { ref, computed, reactive } from 'vue';
import TableLite  from 'vue3-table-lite'
import store from '@/store'

export default {
    name: "KeywordResultComponent",
    components: {
        TableLite 
    },
    setup() {
        const searchTerm = ref(""); // Search text

        let data = store.getters.getKeywordResult;
        console.log(data)

        // Init Your table settings
        const table = reactive({
            isLoading: false,
            columns: [
            {
                label: "Keyword",
                field: 'keyword',
                width: "20%",
                sortable: true,
                isKey: true,
            },
            {
                label: "Avg volume last 12 months",
                field: 'volume',
                width: "20%",
                sortable: true,
            },
            {
                label: "Cost per click",
                field: 'cpc',
                width: "10%",
                sortable: true,
            },
            {
                label: "Ads competition",
                field: 'cmp',
                width: "10%",
                sortable: true,
            },
            ],
            //rows: data,
            rows: computed(() => {
            return data.filter(
            (x) =>
                x.keyword.toLowerCase().includes(searchTerm.value.toLowerCase())
            );
            }),
            totalRecordCount: computed(() => {
                return table.rows.length;
            }),
            sortable: {
                order: "avgVolume",
                sort: "desc",
            },
        });

        return {
            searchTerm,
            table
        }
    }
}

</script>

