<template>
  <div class="columns">
    <div v-for="skill in skills" :key="skill.title">
      <skill-card
        :title="skill.title"
        :languages="skill.languages"
        :technologies="skill.technologies"
      />
    </div>
  </div>
</template>

<script>
import SkillCard from "@/components/SkillCard.vue";
export default {
  name: "skill-section",
  components: {
    SkillCard
  },
  data() {
    return {
      skills: [
        {
          title: "Front-end Skills",
          languages: "HTML, CSS, JavaScript, Sass",
          technologies: [
              "Vue.js", 
              "Bulma",
              "Buefy",
              "Webpack",
              "Babel",
              "Git", 
              "GitHub"
            ]
        },
        {
          title: "Back-end Skills",
          languages: "Python, JavaScript",
          technologies: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Firebase",
            "Route53",
            "S3 Buckets",
            "Netlify",
            "Digital Ocean",
            "RESTful APIs",
            "Cron Job",
            "Postman",
            "Git",
            "GitHub",
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";
</style>
