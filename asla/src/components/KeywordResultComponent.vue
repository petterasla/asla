<template>
    <div class="keyword-result">
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

export default {
    name: "KeywordResultComponent",
    components: {
        TableLite 
    },
    setup() {
        const searchTerm = ref(""); // Search text

      // Fake data
        const data = reactive([]);
        for (let i = 0; i < 126; i++) {
        data.push({
            keyword: "keyword"+i,
            avgVolume: i*100,
            cpc: i *3.14,
            cmp: i * 3.14
        });
        }

        // Init Your table settings
        const table = reactive({
            isLoading: false,
            columns: [
            {
                label: "Keyword",
                field: "keyword",
                width: "10%",
                sortable: true,
                isKey: true,
            },
            {
                label: "Avg volume",
                field: "avgVolume",
                width: "10%",
                sortable: true,
            },
            {
                label: "Cost per click",
                field: "cpc",
                width: "10%",
                sortable: true,
            },
            {
                label: "Ads competition",
                field: "cmp",
                width: "10%",
                sortable: true,
            },
            ],
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

