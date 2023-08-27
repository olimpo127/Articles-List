<template>
  <div class="articles">
    <h1 class="title">Top 10 artículos de esta semana</h1>
    <input v-model="searchInput" placeholder="Búsqueda por título" class="search" />
    <ul>
      <li v-for="article in filteredArticles" :key="article.id" class="article">
        <h2>{{ article.title }}</h2>
        <p>{{ article.body }}</p>
        <button @click="toggleDetails(article)" class="detailsButton">Ver más detalles</button>
        <p>{{ getArticleDetailsStatusMessage(article.id) }}</p>
      </li>
    </ul>
    <div class="pagination">
      <button @click="changePage(-1)" :disabled="currentPage === 1">Anterior</button>
      <span class="currentPage">{{ currentPage }}</span>
      <button @click="changePage(1)" :disabled="currentPage === Math.ceil(articles.length / articlesPerPage)">Siguiente</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import { useArticleStore } from '@/stores/articleStore';
import "./ArticlesList.css";

export default defineComponent({
  name: 'ArticlesList',
  data() {
    return {
      articles: [] as Article[],
      searchInput: '',
      currentPage: 1,
      articlesPerPage: 5,
    };
  },
  created() {
    this.fetchArticles();
  },
  computed: {
    filteredArticles(): Article[] {
      const searchTerm = this.searchInput.toLowerCase();
      const startIndex = (this.currentPage - 1) * this.articlesPerPage;
      const endIndex = startIndex + this.articlesPerPage;
      return this.articles
        .filter((article: Article) => article.title.toLowerCase().includes(searchTerm))
        .slice(startIndex, endIndex);
    },
  },
  methods: {
    async fetchArticles() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        this.articles = response.data.slice(0, 10).map((article: Article) => ({
          ...article,
        }));
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    },
    toggleDetails(article: Article) {
      useArticleStore().toggleDetailsForArticle(article.id);
    },
    getArticleDetailsStatusMessage(articleId: number) {
      const isDetailsVisible = useArticleStore().showDetailsForArticle(articleId);
      return isDetailsVisible ? `Estos son los detalles del artículo ${articleId}, y este es un texto adicional que estoy agregando para que el artículo tenga un diseño más ordenado y se vea un poco mejor. Último spam innecesario.` : '';
    },
    changePage(pageChange: number) {
      this.currentPage += pageChange;
    },
  },
});

interface Article {
  id: number;
  title: string;
  body: string;
}
</script>
