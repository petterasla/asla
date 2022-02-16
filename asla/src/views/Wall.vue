<template>
  <div class="wall">
    <h1>Wall of experience</h1>
    <WallComponent/>
  </div>
</template>

<script >
import WallComponent from "@/components/WallComponent.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    WallComponent
  }
})
export default class Wall extends Vue {}
</script>

<style scoped>
.wall {
  text-align: center;
}
</style>