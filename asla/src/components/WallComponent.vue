<template>
    <div>
        <div v-for="d in posts.slice().reverse()" :key="d.id" >
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
import { ref } from 'vue';

export default {
    name: 'WallComponent',
    setup() {
        let posts = ref(postsArray)
        return {
            posts
        }
    }
    
}

const postsArray = [
    {
        "id": 1,
        "header": "Deploying web page on Amazon Lambda",
        "content": "Just for learning. Had some days off work so I decided to see if I could get a simple web page up and running. " +
        "Since I'm mainly a backend developer, this is pretty much new to me. But guessing the experience will be great!"
    },
    {
        "id": 2,
        "header": "Learning a bit about Vue",
        "content": "So I decided to learn a bit about the javascript library Vue. Seems like a library scoped between React and Angular. " +
        "hopefully getting the best of both worlds. This web page will use Vue"
    },
    {
        "id": 3,
        "header": "Creating awesome keywordtool io software",
        "content": "A friend wants to make life easier at work. So creating a simple Proof-of-concept / Minimal viable product to see if I can  " +
        " actually help out. Fun to do something other than just work stuff."
    }
]
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