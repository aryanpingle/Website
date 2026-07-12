<script setup lang="ts">
import type { CSSProperties } from "vue";
import MASK_IMAGE from "~/assets/mask.webp";

type Props = {
  src: string | undefined;
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
};

defineProps<Props>();

const imgStyle = reactive<CSSProperties>({
  maxWidth: "100%",
  maskImage: `url(${MASK_IMAGE})`,
  maskMode: "luminance",
  maskSize: "100% 100%",
  maskRepeat: "no-repeat",
  filter: "sepia(1)",
});
</script>

<template>
  <figure>
    <img :src="$props.src" :alt="$props.alt" :style="imgStyle" loading="lazy" />
    <figcaption
      v-if="caption"
      style="font-style: italic; font-size: small; text-align: center"
    >
      {{ caption }}
    </figcaption>
  </figure>
</template>
