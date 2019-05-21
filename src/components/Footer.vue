<template>
  <footer class="section is-medium">
    <div class="columns">

    </div>
    <div id="cta-background" class="columns">
      <div class="column is-one-third">
        <h1>Let's build awesome code together!</h1>
      </div>
      <div class="column is-one-third">
        <h2>Interested in working together? You can contact me via social media below. I'm always open to chat.</h2>
      </div>
      <div class="buttons column is-one-third">
        <a
          href="mailto:akshdeep.sharma1@gmail.com"
          class="button is-medium is-rounded is-black is-outlined"
        >
          <span>Email now!</span>
        </a>
      </div>
    </div>
    <div id="ebc" class="columns">
      <h1 class="column">Eat, breathe, code.</h1>
    </div>
    <div class="row buttons are-medium is-centered">
      <a href="https://github.com/AkshdeepSharma" 
      target="_blank" 
      class="button" 
      id="sm-icons">
        <i class="fab fa-github"/>
      </a>
      <a
        href="https://linkedin.com/in/akshdeep-sharma"
        target="_blank"
        class="button"
        id="sm-icons">
        <i class="fab fa-linkedin-in"/>
      </a>
      <a href="mailto:akshdeep.sharma1@gmail.com" 
      class="button" 
      id="sm-icons">
        <i class="far fa-envelope"/>
      </a>
      <a href="https://medium.com/@akshdeep.sharma1" 
      target="_blank" 
      class="button"
      id="sm-icons">
        <i class="fab fa-medium-m"/>
      </a>
    </div>
  </footer>
</template> 

<style lang="scss">
@import "@/assets/styles.scss";
footer {
  background-color: $primary;
  color: white;
  height: 25rem;
}

#cta-background {
  background-color: $secondary;
  margin: auto;
  width: 70%;
  text-align: center;
  align-items: center;
  padding-top: 1rem;
  margin-top: -100px;
  border-radius: 10px;
  max-width: 60%;
  box-shadow: 1px 1px 1px black;
  h1 {
    font-size: 2rem;
    line-height: 2rem;
  }
  h2 {
    font-size: 1.15rem;
    line-height: 1.5rem;
  }
  .button {
    background-color: $transparent;
    color: white;
    border: 2px solid $primary;
  }
  .button:hover {
    background-color: $primary;
    border: 2px solid $primary;
  }
}
#ebc {
  text-align: center;
  padding-top: 3rem;
  font-size: 2rem;
  opacity: 0.8;
}
#sm-icons {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 100%;
  height: 48px;
  width: 48px;
  border: 2px solid white 0.9;
  color:white;
  background-color: $primary;
}
#sm-icons:hover {
  color: $primary;
  opacity: 1;
  background-color: white;
  border: 2px solid white 1;
}
</style>