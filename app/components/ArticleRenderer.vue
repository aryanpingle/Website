<script setup lang="ts">
import BEER_IMAGE from "~/assets/frontpage/beer.jpg";
import HERO_IMAGE from "~/assets/frontpage/hero.jpg";
import ISLAND_IMAGE from "~/assets/frontpage/island.jpg";
import XKCD_IMAGE from "~/assets/frontpage/xkcd.png";

const HERO_TEXT = `
Gongs of the _Gion Shoja_ bells echo the impermanence of all things. The color of the sala flowers reveals the truth that the prosperous must decline. But he is the exception — in this exclusive issue of The Daily Pingle, we explore the psyche of our editor-in-chief, 24 year old Aryan Pingle.

While others coward behind platitudes of fake humility, he boldly proclaims himself to be a 'Web Developer Extraordinaire'. But don't be fooled by the sheer magnificence of his aptitude in making stunning websites, for his peers deem him a master of adaptability; he makes container management scripts as skillfully as he prototypes in Figma. A "Jack of all trades" in the truest sense. This charismatic prodigy is the single greatest asset to the fields of Compiler Construction, Meta-programming, and Engineering in general. With the sole exception of Terry Davis, of course.`;

const ZOMATO_TEXT = `
After a legendary 1 year run at _Zomato_, senior executives at _Eternal_ have decided to leverage Pingle's talents to the fullest at _Temple_ — a health-oriented smart-wearable company. During his tenure at Zomato, he made a name for himself as a full-stack developer, contributing to the user interface as well as to the overall code infrastructure. It's no surprise that these qualities are sought after by an early stage startup infamous for an extremely rapid pace. Sources close to him claim, "If he was content with all we could offer him, then he would have ceased to be my best friend" and "Maybe the real engineering was the friends we made along the way".
`;

const CONTACT_TEXT = `
But you can get in touch with the newspaper representatives on Instagram by sending us cool reels: [@aryan.pingle](https://www.instagram.com/aryan.pingle/). Hot, tall brunettes can reach out to our editor-in-chief on GitHub: [github/aryanpingle](https://github.com/aryanpingle/). Middle-aged, balding men can feel free to e-mail us at [realaryanpingle@gmail.com](mailto://realaryanpingle@gmail.com). If you're a recruiter, we assure you that we here at _The Daily Pingle_ don't mean any of the ridiculous stuff we've written. And you may connect with us on LinkedIn: [linkedin/aryan-pingle](https://www.linkedin.com/in/aryan-pingle/).
`;

const WEBSITE_TEXT = `
A bold claim by our editor-in-chief. But is there any truth to this statement? A closer look at the state of the web reveals that most websites prefer to have generic user interfaces that emphasize comfort over uniqueness. Think of the thousand [shadcn-inspired](https://ui.shadcn.com/) black and white _clean_ pages you have seen. A more appropriate adjective would be _sterilized_. Think of the brand logos that have been neutered in the recent past in the name of _minimalism_.

But what is art, if not an expression to comfort the disturbed and disturb the comfortable? There's no sex appeal to something that's mass-produced — this holds as true for websites as it does for everything in nature. By definition, it's not sexy.

We here at _The Daily Pingle_... we're bringing sexy back.
`;

const BLOG_TEXT = `
That one scene from _The Social Network_ where Mark is downing a beer and writing a blog with _In Motion_ playing in the background — it has left a strong impression on neurodivergent young adults who fancy themselves the next Zuckerberg. But not the lame, real-life billionaire; just the cool in-movie counterpart.

If you were to replace the beer with Soju, you'd find an accurate depiction of how it felt to write these blogs.
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
    byline="Aoi Todo / Gurgaon / March 1, 2026"
    :text="ZOMATO_TEXT"
  ></Article>

  <Article
    v-if="$props.articleId === 'island'"
    :image-src="ISLAND_IMAGE"
  ></Article>

  <Article v-if="$props.articleId === 'xkcd'" :image-src="XKCD_IMAGE"></Article>

  <Article
    v-if="$props.articleId === 'contact'"
    title="You're out of touch"
    :text="CONTACT_TEXT"
  ></Article>

  <Article
    v-if="$props.articleId === 'website'"
    title='"Websites aren&apos;t sexy anymore"'
    byline="Jogoat / Shibuya / March 14, 2026"
    :text="WEBSITE_TEXT"
  ></Article>

  <Article
    v-if="$props.articleId === 'blogs'"
    title="From The Editor's Desk"
    :text="BLOG_TEXT"
    link="/blogs"
    link-text="View Blogs"
  ></Article>
</template>

<style scoped></style>
