<template>
  <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://akshdeep.me">
        <img src="@/assets/logo.png" width="28" height="28">
      </a>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a
            href="https://github.com/AkshdeepSharma/portfolio-website/blob/master/src/static/resume.pdf"
            target="_blank"
            class="button is-rounded is-primary is-outlined"
          >
            <p id="button-font">
              <strong>Resume</strong>
            </p>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";

@media screen and (max-width: 769px) {
  .navbar-brand {
    margin-left: -50px;
  }
  .navbar-end {
    margin-right: -50px;
  }
}
</style>
