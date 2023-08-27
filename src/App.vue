<template>
  <div id="app">
    <NavBar />
    <ArticlesList />
    <MyFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ArticlesList from './components/ArticlesList.vue';
import NavBar from './components/NavBar.vue';
import MyFooter from './components/MyFooter.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    ArticlesList,
    MyFooter
},
});
</script>
