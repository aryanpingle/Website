<script setup lang="ts">
import throttle from "throttleit";

useSeoMeta({
  title: "Aryan Pingle",
});

const applyDeviceBreakpointClass = () => {
  if (window.innerWidth <= SMALL_DEVICE_BREAKPOINT)
    document.body.className = "device-sm";
  else if (window.innerWidth <= MEDIUM_DEVICE_BREAKPOINT)
    document.body.className = "device-md";
  else document.body.className = "device-lg";
};

const throttled_applyDeviceBreakpointClass = throttle(
  applyDeviceBreakpointClass,
  100,
);

// Apply device breakpoint class once + every time window is resized
onMounted(() => {
  applyDeviceBreakpointClass();
  window.addEventListener("resize", throttled_applyDeviceBreakpointClass);
});
// Remove event listeners
onUnmounted(() => {
  window.removeEventListener("resize", throttled_applyDeviceBreakpointClass);
});
</script>

<template>
  <Masthead />
  <NuxtPage />
  <Divider
    style="margin: 0.2rem 0; margin-top: 0; border-width: 0.075rem"
    border-style="dashed"
  />
  <Divider style="margin: 0.2rem 0; margin-top: 0; border-width: 0.075rem" />
</template>

<style>
/* Titles */
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");
/* Text */
@import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap");

*::selection {
  background-color: hsl(34, 57%, 50%);
}

:root {
  font-family: "Merriweather", serif;
  font-weight: 400;

  color-scheme: light dark;
  color: hsl(35, 50%, 13%);
  background-color: hsl(35, 63%, 75%);

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  box-sizing: border-box;
  margin: 0;
  padding: 1rem;
  min-height: 100vh;
  width: 100%;

  background-image: url(assets/paper-texture.jpg);
}

@media (min-width: 720px) {
  body {
    padding: 2rem;
  }
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Playfair Display", serif;
  font-weight: 700;
  text-transform: uppercase;
  text-wrap: balance;
  line-height: 1;
}

p {
  margin: 0.5rem 0;
}

h1 {
  text-align: center;
  line-height: 1.1;
  margin: 2rem 0;
}

@media (min-width: 720px) {
  h1 {
    font-size: 3.2rem;
  }
}
</style>
