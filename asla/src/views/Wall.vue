<template>
  <div class="wall">
    <h1>Wall of experience</h1>
    <WallComponent/>
  </div>
</template>

<script>
import WallComponent from "@/components/WallComponent.vue";

export default {
  components: {
    WallComponent
  }
};

</script>

<style scoped>
.wall {
  text-align: center;
}
</style>