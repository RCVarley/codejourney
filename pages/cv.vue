<template>
<div class="page page--cv">
  <div class="sheet">
    <cv-summary v-model="summary"/>
    <cv-experience v-model="experience"/>
    <cv-highlights v-model="highlights"/>
    <cv-skills v-model="skills"/>
    <cv-key-words v-model="keyWords"/>
  </div>
  <div class="sheet">
    <cv-education v-model="education"/>
    <cv-highlights v-model="traits" title="Traits"/>
  </div>
</div>
</template>

<script lang="ts">
import CvExperience from "components/CvExperience.vue";
import CvSummary from "components/CvSummary.vue";
import CvHighlights from "../components/CvHighlights.vue";
import CvSkills from "../components/CvSkills.vue"; 
import CvKeyWords from "../components/CvKeyWords.vue";
import CvEducation from "../components/CvEducation.vue";
import {defineComponent} from "vue";
import type {Position, Highlight, Tags, Course} from "../types/types";

interface Data {
  summary: string[],
  experience: Position[],
  highlights: Highlight[],
  skills: Tags[],
  keyWords: Tags[],
  education: Course[],
  traits: Highlight[],
}

export default defineComponent({
  name: 'cv',
  layout: "cv-layout",
  components: {
    CvEducation,
    CvExperience,
    CvSummary,
    CvHighlights,
    CvSkills,
    CvKeyWords,
  },
  data: () : Data => ({
    summary: [
      'A full stack web developer with a diverse background and 5 years experience working in .Net and VueJS, undertaking projects such as e-commerce and brochure sites,  a social network and a form/landing page builder.',
      'Graduated from Oxford Brookes with a 2:2 in Computer Science and Japanese Studies, worked/trained as a Computing Teacher before ultimately making the move to development.',
      'Passionate about problem solving through tooling and application & feature design.',
    ],
    experience: [
      {
        title: 'Full Stack Web Developer',
        company: 'The Education Company',
        start: new Date( '2020/03/01' ),
        current: true,
        feats: [
          'One part of a two person team who planned and developed a package based architecture for creating Umbraco sites.', 
          'Wrote the bulk of our modular, extensible checkout that\'s used across all of our e-commerce sites.',
          'Deconstructed existing mockups in order to create prototypes for features and pages using Figma, enabling me to identify features missing from the API as well as ambiguous UI requirements.',
          'Overhauled the error handling system, resulting in a single generic implementation that\'s used across all of our sites.',
        ],
      },
      {
        title: 'Junior Web Developer',
        company: 'The Education Company',
        start: new Date( '2017/11/01' ),
        end: new Date( '2020/03/01' ),
        current: false,
      },
      {
        title: 'Junior Web Developer',
        company: 'Vital Software',
        start: new Date( '2016/10/01' ),
        end: new Date( '2017/10/01' ),
        current: false,
        role: [
          'Creating web reports by writing dynamically generated SQL queries.',
          'Writing asp.net pages to display report data using the Telerik UI component library.',
        ],
      },
    ],
    highlights: [
      {
        icon: 'seedling',
        hook: 'Eager to grow',
        caption: 'Be it through skills, processes or technologies, I\'m always looking for a better way.',
      },
      {
        icon: 'orii-gate',
        hook: 'Living in Japan',
        caption: 'I studied Japanese at the University of Kitakyushu.',
      },
      {
        icon: 'graduation-cap',
        hook: 'Teaching computing',
        caption: 'Ask me about my switch from teaching!',
      },
      {
        icon: 'firefox',
        hook: 'Circus Skills',
        caption: 'I\'ve performed for live audiences in two countries!',
      },
    ],
    skills: [
      {
        title: 'High Competency',
        tags: [
          'C#',
          'JavaScript',
          'VueJS',
        ],
      },
      {
        title: 'Confident',
        tags: [
          'CSS/SCSS',
          'TypeScript',
          'Figma',
        ],
      },
      {
        title: 'Working Knowledge',
        tags: [
          'Nuxt',
          'Azure Pipelines',
          'StoryBook',
        ],
      },
    ],
    keyWords: [
      {
        title: 'Styling',
        tags: [
          'BEM', 'CSS', 'SCSS', 'LESS', 'Flexbox', 'Grid, Every', 'Layout',
        ],
      },
      {
        title: 'Languages',
        tags: [
          'C#', 'JavaScript', 'TypeScript', 'Python',
        ],
      },
      {
        title: 'Design',
        tags: [
          'Figma', 'Affinity Designer', 'Photoshop',
        ],
      },
      {
        title: 'DevOps',
        tags: [
          `Azure Pipelines`, `DevOps for Azure`, `Git`,
        ],
      },
      {
        title: 'Tech',
        tags: [
          'VueJS', 'AngularJS', 'Umbraco', 'StoryBook', 'Node', 'Nuxt', 'StoryBook',
        ],
      }
    ],
    education: [
      {
        title: 'BSc Computer Science & Japanese Studies',
        institution: 'Oxford Brookes University',
        start: new Date( '2009-09-01' ),
        end: new Date( '2015-12-01' ),
        current: false,
        achieved: '2:2 with honours',
      },
      {
        title: 'Qualified Teacher Status',
        institution: 'Cherwell OTSA SCITT',
        start: new Date( '2015-07-01' ),
        end: new Date( '2016-07-01' ),
        current: false,
        achieved: 'Pass',
      },
      {
        title: 'BTEC National Diploma for IT Practitioners',
        institution: 'Chesterfield College',
        start: new Date( '2006-09-01' ),
        end: new Date( '2008-07-01' ),
        current: false,
        achieved: 'Distinction, Distinction, Merit',
      },
    ],
    traits: [
      {
        icon: 'books',
        hook: 'Lifetime Learner',
        caption: 'Always moving forwards. Ask me about my recent endeavours!',
      },
      {
        icon: 'dumbbell',
        hook: 'Resilience',
        caption: 'A good problem enlightens you. A great problem exhausts you first!',
      },
      {
        icon: 'yin-yang',
        hook: 'Introspective',
        caption: 'Always open to feedback and constructive criticism; whatever it takes to keep growing!',
      },
    ],
  }),
});
</script>

<script lang="ts" setup></script>

<style scoped>

</style>