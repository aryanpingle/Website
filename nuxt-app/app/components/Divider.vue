<script setup lang="ts">
import type { CSSProperties } from "vue";

const {
  borderColor = "currentColor",
  borderStyle = "solid",
  borderWidth = "0.1rem",
  style,
} = defineProps<{
  borderWidth?: CSSProperties["borderWidth"];
  borderColor?: CSSProperties["borderColor"];
  borderStyle?: CSSProperties["borderStyle"];
  style?: CSSProperties;
}>();

const dividerStyle = computed<CSSProperties>(() => {
  return {
    color: "inherit",
    borderStyle: borderStyle,
    borderWidth: borderWidth,
    borderColor: borderColor,
    ...style,
  };
});
</script>

<template>
  <hr :style="dividerStyle" />
</template>
