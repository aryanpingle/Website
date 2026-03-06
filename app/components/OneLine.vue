<script setup lang="ts">
import type { CSSProperties } from "vue";

const props = defineProps<{
  text: string;
  textAlign?: "center" | "left" | "right";
  fontFamily?: string;
  fontSize?: string;
}>();

const containerStyles = computed<CSSProperties>(() => ({
  fontFamily: props.fontFamily,
  fontSize: props.fontSize,
  textAlign: props.textAlign ?? "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
}));

const textStyles = computed<CSSProperties>(() => ({
  width: "max-content",
  whiteSpace: "nowrap",
}));
</script>

<template>
  <div :class="ONELINE_CONTAINER_CLASS_NAME" :style="containerStyles">
    <div :class="ONELINE_TEXT_CLASS_NAME" :style="textStyles">
      {{ $props.text }}
    </div>
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
</style>
