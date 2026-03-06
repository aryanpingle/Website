<script setup>
import BEER_IMAGE from "~/assets/beer.png";
import HERO_IMAGE from "~/assets/hero.png";

const HERO_TEXT = `
In all of jujutsu sorcerer history, there's never been anyone who has managed to subjugate this one. In this exclusive issue, with this sacred treasure, we summon 24 year old, Divergent Sila Divine General, Aryan Pingle.

While others coward behind platitudes of fake humility, he boldly proclaims himself to be a 'Web Developer Extraordinaire'. But don't be fooled by the sheer magnificence of his aptitude in Front-End Web Development, for his peers deem him a master of adaptability; he can make container management scripts as skillfully as he can prototype in Figma. This charismatic prodigy is the single greatest asset to the fields of Compiler Construction, Meta-programming, and Engineering in general (with the sole exception of Terry Davis, of course).`;

const ETERNAL_TEXT = `
Analysts are in shambles — in a statistically improbable stroke of good fortune, Eternal recently managed to acquire one of the top 5 frontend developers in India. Sources close to the situation confirm that "Nugget" was the entity that added Aryan Pingle to its arsenal, but Eternal has refused to comment — possibly to avoid setting unrealistic expectations for other teams.
`;
</script>

<template>
  <div style="display: flex; flex-direction: column">
    <Article title="Greatest Drinker Ever?" :image-src="BEER_IMAGE"></Article>
    <Article
      title="Inside the mind of a genius"
      :imageSrc="HERO_IMAGE"
      :text="HERO_TEXT"
    ></Article>
    <Article
      title="Eternal Wins The Lottery"
      date="Gurgaon, January 26, 2026"
      :text="ETERNAL_TEXT"
      linkText="Read more"
      link="https://example.com"
    ></Article>
    <Article title="" imageSrc="{CHARACTERS_IMAGE}" />
  </div>
</template>

<style scoped></style>
