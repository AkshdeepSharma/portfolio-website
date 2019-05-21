<template>
  <div>
    <div class="project-section-titles">
      <h1>My Recent Projects</h1>
      <h2>Here are a few of my recent projects!</h2>
    </div>
    <div class="columns is-multiline">
      <div class="tile column is-4 " v-for="project in projects" :key="project.id">
        <project-card
          :title="project.title"
          :description="project.description"
          :language="project.language"
          :url="project.url"
        />
      </div>
    </div>
    <div id="github-button" class="buttons is-centered">
      <a
        href="https://github.com/AkshdeepSharma"
        target="_blank"
        class="button is-medium is-rounded is-primary is-outlined"
      >
        <span class="icon">
          <i class="fab fa-github"></i>
        </span>
        <span>See more on GitHub</span>
      </a>
    </div>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";
export default {
  name: "project-section",
  components: {
    ProjectCard
  },

  data() {
    return {
      projects: [
        {
          id: 1,
          title: "portfolio-website",
          description: "My portfolio website that you're viewing right now",
          language: "Vue.js",
          url: "https://github.com/AkshdeepSharma/website"
        },
        {
          id: 2,
          title: "todo-api",
          description:
            "An API where users can use CRUD operations on todo notes",
          language: "Node.js",
          url: "https://github.com/AkshdeepSharma/node-mongo-todo-api"
        },
        {
          id: 3,
          title: "mewsick-bot",
          description: "Discord bot that plays music in voice channels",
          language: "Python 3",
          url: "https://github.com/AkshdeepSharma/MewSick"
        },
        {
          id: 4,
          title: "doomsday-buddy",
          description:
            "Twitter bot that tweets the probability of WW3 based on Twitter sentiment analysis",
          language: "Python 3",
          url: "https://github.com/AkshdeepSharma/Doomsday_Buddy"
        },
        {
          id: 5,
          title: "subreddit-manager",
          description:
            "Reddit bot that crossposts hot posts to a private subreddit",
          language: "Python 3",
          url: "https://github.com/AkshdeepSharma/Reddit_Bot"
        },
        {
          id: 6,
          title: "WTSIL",
          description:
            "Texts me every morning with weather conditions and ETD to get to school on time",
          language: "Python 3",
          url: "https://github.com/AkshdeepSharma/Reddit_Bot"
        }

      ]
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";
.project-section-titles {
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  h1 {
    font-size: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  h2 {
    font-size: 1.25rem;
    padding-bottom: 1rem;
  }
}
#github-button {
  margin-top: 4rem;
  margin-bottom: 8rem;
}

.columns {
  background-color: $transparent;
  .column {
    padding-bottom: 1.75rem;
  }
}
</style>