<template>
  <article class="tile is-child box notification is-secondary">
    <div id="text">
      <h1 class="title">{{ this.title }}</h1>
      <h2 class="subtitle">{{ this.description }}</h2>
      <h2 class="subtitle">Language: {{ this.language }}</h2>
      <div class="github-url">
        <a :href="this.url" target="_blank">
          <span class="icon">
            <i class="fas fa-code"/>
            <p>View Source Code</p>
          </span>
        </a>
      </div>
    </div>
  </article>
</template>

<!--

-->



<script>
export default {
  name: "project-card",
  props: {
    title: String,
    description: String,
    language: String,
    url: String
  }
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";
.project {
  text-align: center;
  #text {
    color: white;
  }
  .github-url {
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
</style>
