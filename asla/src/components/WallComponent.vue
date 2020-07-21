<template>
    <div>
        <div v-for="d in data" :key="d.id" >
            <div class="row">    
                <div class="column"/>
                <div class="column">
                    <h2> {{d.header}} </h2>
                    <p> {{d.content}} </p>
                </div>
                <div class="column" />
            </div>
        </div>
    </div>  
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component
    export default class WallComponent extends Vue {
    
    data = [
        {
            "id": 1,
            "header": "This is a header",
            "content": "this is content"
        },
        {
            "id": 2,
            "header": "This is a header2",
            "content": "this is content2"
        }
    ]
}
</script>

<style scoped>
.row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
}

.column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    text-align: left;
}

</style>