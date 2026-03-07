<script setup lang="ts">
import BEER_IMAGE from "~/assets/beer.png";
import HERO_IMAGE from "~/assets/hero.png";

const HERO_TEXT = `
In all of jujutsu sorcerer history, there's never been anyone who has managed to subjugate this one. In this exclusive issue, with this sacred treasure, we summon 24 year old, Divergent Sila Divine General, Aryan Pingle.

While others coward behind platitudes of fake humility, he boldly proclaims himself to be a 'Web Developer Extraordinaire'. But don't be fooled by the sheer magnificence of his aptitude in Front-End Web Development, for his peers deem him a master of adaptability; he can make container management scripts as skillfully as he can prototype in Figma. This charismatic prodigy is the single greatest asset to the fields of Compiler Construction, Meta-programming, and Engineering in general (with the sole exception of Terry Davis, of course).`;

const ZOMATO_TEXT = `
Gongs of the Buddhist monastery echo that all things are impermanent. Yet no one could have foreseen the executive order to promote Zomato rockstar Aryan Pingle to sister corporation, "Temple".

After a legendary 1 year run at Nugget — the up-and-coming customer support platform — senior executives at Eternal have decided to leverage Pingle's talents to the fullest at Temple — a health-oriented smart-wearable company. During his tenure at Nugget, he made a name for himself as a full-stack developer, contributing to the user interface as well as to the overall Zomato code infrastructure. It's no surprise that these qualities are sought after by an early stage startup infamous for an extremely rapid pace.
`;

defineProps<{ articleId: ArticleId }>();
</script>

<template>
  <Article
    v-if="$props.articleId === 'drinker'"
    title="Greatest Drinker Ever?"
    :image-src="BEER_IMAGE"
  ></Article>

  <Article
    v-if="$props.articleId === 'hero'"
    title="Inside the mind of a genius"
    :imageSrc="HERO_IMAGE"
    :text="HERO_TEXT"
  ></Article>

  <Article
    v-if="$props.articleId === 'eternal'"
    title="Zomato ordered to donate to Temple"
    byline="Aoi Todo / Gurgaon, March 1, 2026"
    :text="ZOMATO_TEXT"
    linkText="Read more"
    link="https://example.com"
  ></Article>

  <Article v-if="$props.articleId === 'temple'" title="TEMPLE"></Article>
</template>

<style scoped></style>
