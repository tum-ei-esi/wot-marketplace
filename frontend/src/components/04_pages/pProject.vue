<template>
  <div class="project-content">
    <div>
      <h1>{{ project.title }}</h1>
      <hr />
      <h4>{{ project.summary }}</h4>
    </div>
    <div>
      <div class="project-content-left">
        <div class="project-navigation-bar">
          <aNavLink
            :to="{ path: `/library/${project.title}/general` }"
            addClass="project-page"
            activeClass="active"
          >General</aNavLink>
          <aNavLink
            :to="{ path: `/library/${project.title}/thingdescription`}"
            addClass="project-page"
            activeClass="active"
          >Thing Description</aNavLink>
        </div>
        <router-view :content="getContent()" class="project-content-view" />
      </div>
      <div class="project-content-right">
        <aInfoBox
          v-for="element in sidebar"
          :key="element.id"
          :title="element.title"
          :content="element.categories"
        />
        <aInfoBox
          v-model="rating"
          title="Rate this project"
          :content="[{
            type: 'rating',
            content: {
              raters: Object.keys(project.raters).length,
              avg_rating: project.avg_rating,
              rating
            }
          }]"
          :ratingHandler="onRatingChanged"
        />
      </div>
    </div>
    <div v-if="username === project.author.username" class="project-buttons">
      <aNavLink
        :to="{ name: 'Project Edit', params: { name: project.title } }"
        addClass="project-button"
      >EDIT</aNavLink>
      <aButton
        v-if="!deleteClicked"
        btnEvent="delete-btn-clicked"
        @delete-btn-clicked="e => deleteClicked = true"
        addClass="project-button"
      >DELETE</aButton>
      <aButton
        v-else
        btnEvent="confirm-delete-btn-clicked"
        @confirm-delete-btn-clicked="removeProject"
        addClass="project-button"
      >CONFIRM</aButton>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";

import aButton from "@/components/01_atoms/aButton.vue";
import aNavLink from "@/components/01_atoms/aNavLink.vue";
import aInfoBox from "@/components/01_atoms/aInfoBox.vue";

import { getProject, deleteProject, rateProject } from "@/api";

const authModule = namespace("authentication");

@Component({
  components: {
    aNavLink,
    aInfoBox,
    aButton
  }
})
export default class pProject extends Vue {
  @authModule.Getter("getToken") authToken!: string;
  @authModule.Getter("getUsername") username!: string;

  private rating: number = 0;
  private deleteClicked: boolean = false;

  private project: {
    [key: string]: any;
  } = {
    title: "",
    author: {},
    update: Date.now,
    summary: "",
    repoUrl: null,
    description: "",
    thingDesc: {},
    topic: [],
    platform: [],
    type: "",
    complexity: "",
    avg_rating: 0,
    raters: {},
    tags: []
  };

  get sidebar() {
    let sidebar = [
      {
        title: "General Information",
        categories: [
          {
            label: "Type : ",
            type: "text",
            content: this.project.type
          },
          {
            label: "Platform : ",
            type: "text",
            content: this.project.platform
          },
          {
            label: "Complexity : ",
            type: "text",
            content: this.project.complexity
          },
          {
            label: "Topics : ",
            type: "list",
            content: this.project.topic
          }
        ]
      },
      {
        title: "Keywords",
        categories: [
          {
            type: "list",
            content: this.project.tags
          }
        ]
      },
      {
        title: "Author",
        categories: [
          {
            type: "text",
            content: this.project.author.username
          }
        ]
      }
    ];

    if (this.project.repoUrl) {
      sidebar.push({
        title: "Repository",
        categories: [
          {
            type: "link",
            content: {
              label: "View on repository",
              url: this.project.repoUrl
            }
          }
        ]
      });
    }

    return sidebar;
  }

  getContent() {
    if (this.$route.name === "Project General") {
      return this.project.description;
    }
    return this.project.thingDesc;
  }

  async onRatingChanged() {
    let response = await rateProject(
      this.project.title,
      this.rating,
      this.authToken
    );
    if (response.status === 200) {
      this.project.avg_rating = response.data.rating;
      this.project.raters = response.data.raters
    } else {
      //TODO: error handling
    }
  }

  async removeProject() {
    let response = await deleteProject(this.project.title, this.authToken);
    if (response.status === 204) {
      this.$router.push({ name: "Profile" });
    } else {
      //TODO: error handling
    }
  }

  async created() {
    let response = await getProject(this.$route.params.name);
    if (response.status === 200) {
      this.project = response.data;
      this.rating = response.data.raters[this.username];
    } else if (response.status === 404) {
      this.$router.push({ name: "404" });
    }
  }
}
</script>

<style scoped>
div.project-content {
  margin: 0 5%;
}

div.project-navigation-bar {
  background: black;
  border: 2px solid black;
  border-bottom: none;
  border-radius: 10px 10px 0 0;
}

div.project-content-left {
  display: inline-block;
  width: 75%;
}

div.project-content-right {
  float: right;
  display: grid;
  grid-auto-flow: row;
  gap: 0.5vw;
  width: calc(25%-0.5vw);
  margin-left: 0.5vw;
}

.project-content-view {
  height: 60vh;
  overflow-y: auto;
}

.active {
  background: #fff;
  color: black;
  border: none;
  border-bottom: none;
  border-radius: 10px 10px 0 0;
}

div.project-buttons {
  position: absolute;
  top: 0;
  right: 0;
  margin: 1vw;
}
</style>