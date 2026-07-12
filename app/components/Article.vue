<script setup lang="ts">
import { getSaloonOutlinePath } from "@/utils";
import { parse } from "marked";

const { link, text } = defineProps({
  title: {
    type: String,
  },
  imageSrc: { type: String },
  imageCaption: { type: String },
  text: { type: String },
  byline: { type: String },
  link: { type: String },
  linkText: { type: String },
});

const RY = 20;
const PY = 10;
const ASPECT_RATIO = 5;
const outerSvgPathD = getSaloonOutlinePath({
  width: 100,
  height: 100,
  radiusX: RY / ASPECT_RATIO,
  radiusY: RY,
});
const innerSvgPathD = getSaloonOutlinePath({
  width: 100,
  height: 100,
  radiusX: RY / ASPECT_RATIO,
  radiusY: RY,
  paddingX: PY / ASPECT_RATIO,
  paddingY: PY,
});
</script>

<template>
  <div class="frontpage-article">
    <h1 v-if="$props.title" style="text-align: center">{{ $props.title }}</h1>
    <div
      v-if="$props.byline"
      style="text-align: center; font-style: italic; margin-bottom: 1rem"
    >
      {{ $props.byline }}
    </div>
    <Image v-if="$props.imageSrc" :src="$props.imageSrc" :caption="$props.imageCaption" />

    <template v-if="text">
      <div class="article_body" v-html="parse(text)"></div>
    </template>

    <a v-if="$props.link" class="frontpage_article-link" :href="link">
      <svg
        class="frontpage_article-svg"
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
        <path
          class="frontpage_article-svg-background"
          :d="innerSvgPathD"
          fill="currentColor"
          opacity="0.25"
        />
      </svg>
      {{ $props.linkText }}
    </a>
  </div>
</template>

<!-- Dynamically generated article body -->
<style>
.device-sm .article_body {
  font-size: 0.9rem;
}

.article_body > p {
  text-align: justify;
}

.article_body p:first-of-type:first-letter {
  float: left;
  margin-right: 0.25rem;
  font-weight: bold;
  font-size: 2lh;
  line-height: 1;
}

.device-md .article_body p:first-of-type:first-letter,
.device-lg .article_body p:first-of-type:first-letter {
  font-size: 3lh;
}

.article_body p:not(:first-of-type) {
  text-indent: 2rem;
}

.device-md .article_body p:not(:first-of-type),
.device-lg .article_body p:not(:first-of-type) {
  text-indent: 3rem;
}

.article_body a {
  font-weight: 900;
  color: currentColor;
  text-decoration: underline;
  background-color: hsl(39, 100%, 50%, 33%);
  padding: 0 0.2rem;
}

.article_body h1 {
  text-align: center;
}
</style>

<style scoped>
.frontpage-article {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0;
}

.device-md .frontpage-article,
.device-lg .frontpage-article {
  padding: 0.5rem 1rem;
}

/* Link */

.frontpage_article-link {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
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

.frontpage_article-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.frontpage_article-svg-background {
  transition: all 250ms ease;
}

.frontpage_article-link:hover .frontpage_article-svg-background {
  opacity: 0.15;
}
</style>
