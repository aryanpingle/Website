<script setup lang="ts">
import throttle from "throttleit";
import ArticleRenderer from "./ArticleRenderer.vue";

const SM = 720;
const MD = 1200;

const columnwiseData = ref<ColumnwiseArticles>(ARTICLES["sm"]);

const recalculate = () => {
  if (window.innerWidth <= SM) columnwiseData.value = ARTICLES["sm"];
  else if (window.innerWidth <= MD) columnwiseData.value = ARTICLES["md"];
  else columnwiseData.value = ARTICLES["lg"];
};

const throttledRecalculate = throttle(recalculate, 100);

// Recalculate columns once + every time window is resized
onMounted(() => {
  recalculate();
  window.addEventListener("resize", throttledRecalculate);
});
// Remove event listeners
onUnmounted(() => {
  window.removeEventListener("resize", throttledRecalculate);
});
</script>

<template>
  <div style="display: flex">
    <div
      v-if="columnwiseData['1']?.length"
      class="frontpage_column"
      style="flex: 1; display: flex; flex-direction: column"
    >
      <ArticleRenderer
        v-for="value in columnwiseData['1']"
        :article-id="value"
      />
    </div>

    <div v-if="columnwiseData['2']?.length" class="frontpage_column">
      <ArticleRenderer
        v-for="value in columnwiseData['2']"
        :article-id="value"
      />
    </div>

    <div v-if="columnwiseData['3']?.length" class="frontpage_column">
      <ArticleRenderer
        v-for="value in columnwiseData['3']"
        :article-id="value"
      />
    </div>
  </div>
</template>

<style scoped>
.frontpage_column {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
