<script setup lang="ts">
import { getSaloonOutlinePath2 } from "@/utils";
import type { CSSProperties } from "vue";
import MASK_IMAGE from "~/assets/mask.png";

const { link, text } = defineProps({
  title: {
    type: String,
  },
  imageSrc: { type: String },
  text: { type: String },
  date: { type: String },
  link: { type: String },
  linkText: { type: String },
});

const paras = (text ?? "").trim().split(/\n+/g);

const RY = 20;
const PY = 10;
const ASPECT_RATIO = 5;
const outerSvgPathD = getSaloonOutlinePath2({
  width: 100,
  height: 100,
  radiusX: RY / ASPECT_RATIO,
  radiusY: RY,
});
const innerSvgPathD = getSaloonOutlinePath2({
  width: 100,
  height: 100,
  radiusX: RY / ASPECT_RATIO,
  radiusY: RY,
  paddingX: PY / ASPECT_RATIO,
  paddingY: PY,
});

console.log("outer", outerSvgPathD);
console.log("inner", innerSvgPathD);

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
  <div>
    <div class="frontpage-article">
      <h1 v-if="$props.title" style="text-align: center">{{ $props.title }}</h1>
      <div
        v-if="$props.date"
        style="text-align: center; font-style: italic; margin-bottom: 1rem"
      >
        Senku Ishigami — {{ $props.date }}
      </div>
      <img :src="$props.imageSrc" :style="imgStyle" alt="" />

      <p v-for="para in paras" style="text-align: justify">{{ para }}</p>

      <a v-if="$props.link" class="frontpage_article-link" :href="link">
        <svg
          class="promo_svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style="pointer-events: none; user-select: none"
        >
          <!-- Outline -->
          <path
            :d="`${outerSvgPathD} ${innerSvgPathD}`"
            fill="black"
            fill-rule="evenodd"
            opacity="0.65"
          />
          <!-- Background -->
          <path :d="innerSvgPathD" fill="currentColor" opacity="0.25" />
        </svg>
        {{ $props.linkText }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.frontpage-article {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
}

.frontpage-article p:first-of-type:first-letter {
  float: left;
  margin-right: 0.25rem;
  font-weight: bold;
  font-size: 3lh;
  line-height: 1;
}

.frontpage-article p:not(:first-of-type) {
  margin-top: 0;
  text-indent: 3rem;
}

/* Link */

.frontpage_article-link {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 1rem;
  aspect-ratio: 5 / 1;
  font-size: 1.2rem;
  width: 100%;
  max-width: 20rem;
  color: inherit;
  font-weight: 900;
  font-family: "Playfair Display";
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
}

.frontpage_article-link:hover {
  color: inherit;
}

.promo_svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
