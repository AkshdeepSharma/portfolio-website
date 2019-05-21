<template>
  <div class="column is-half">
    <h1>{{ this.title }}</h1>
    <h2>Languages I use:</h2>
    <h2>{{ this.languages }}</h2>
    <h2>Technologies:</h2>
    <ul>
      <li v-for="technology in this.technologies" v-bind:key="technology">{{technology}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "skill-card",
  props: {
    title: String,
    languages: String,
    technologies: Array
  }
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";
</style>