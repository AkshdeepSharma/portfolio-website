<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div id="ph" class="container">
        <h1>Software Developer</h1>
        <h2>I design and code things to make my life a smidge easier.</h2>
        <img src="@/assets/test.png">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "page-header"
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";
#ph {
  text-align: center;
  color: black;
  margin-top: -10rem;
  h1 {
    font-size: 3.5rem;
  }
  h2 {
    margin-top: 0.5rem;
    font-size: 1.5rem;
  }
  img {
    margin-top: 3.5rem;
    border-radius: 50%;
    height: 200px;
    width: 200px;
  }
}

@media screen and (max-width: 769px) {
  #ph {
    padding-top: 9rem;
  }
  h1 {
    line-height: 120%;
  }
}
</style>
