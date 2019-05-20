<template>
  <div id="app">
    <navbar/>
    <div>
      <page-header />
      <about-me/>
    </div>
    <div class="container">
      <project-section :projects="projects" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import AboutMe from "./components/AboutMe.vue";
import Footer from "./components/Footer.vue";
import PageHeader from "./components/PageHeader.vue";
import ProjectSection from "./components/ProjectSection.vue";

export default {
  name: "app",
  components: {
    Navbar,
    PageHeader,
    AboutMe,
    ProjectSection,
    Footer
  },
  props: {
    projects: Array,
  },
};
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
