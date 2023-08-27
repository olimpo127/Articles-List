import { defineStore } from 'pinia';

export const useArticleStore = defineStore('article', {
  state: () => ({
    articlesDetails: {} as Record<number, boolean>,
  }),
  actions: {
    toggleDetailsForArticle(articleId: number) {
      this.articlesDetails[articleId] = !this.articlesDetails[articleId];
    },
  },
  getters: {
    showDetailsForArticle: (state) => (articleId: number) => {
      return state.articlesDetails[articleId] || false;
    },
  },
});
