<script setup lang="ts">
import Divider from "./Divider.vue";
import OneLine from "./OneLine.vue";
</script>

<template>
  <div class="masthead">
    <Divider style="margin: 0.2rem 0; border-width: 0.11rem" />
    <Divider
      style="margin: 0.2rem 0; border-width: 0.075rem"
      border-style="dashed"
    />
    <OneLine
      text="The Daily Pingle"
      fontFamily="Old London, serif"
      fontSize="10rem"
    />
    <Divider
      style="margin: 0.2rem 0; border-width: 0.075rem"
      border-style="dashed"
    />
    <Divider style="margin: 0.2rem 0; border-width: 0.11rem" />
  </div>
</template>

<style scoped>
.masthead-title-container {
  font-family: "Old London", serif;
  font-size: 10rem;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.masthead-title-text {
  width: max-content;
  white-space: nowrap;
}

.masthead-subtitle {
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.15rem 0;
  font-weight: 700;
  max-width: 800px;

  /* border: 0.15rem solid black; */
  border-right: none;
  border-left: none;
}

.masthead-subtitle > span {
  text-align: center;
}
</style>
