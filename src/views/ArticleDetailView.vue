<script setup>
// Vue router will automatically fill this prop with the value from the URL thanks to "props: true" in the router
defineProps({
  id: {
    type: String,
    required: true
  }
});
import ArticleHero from '@/components/article-components/article-hero.vue';
import ArticleContent from '@/components/article-components/article-content.vue';
import RelatedActorSection from '@/components/article-components/relatedActor-section.vue';
import RelatedArticles from '@/components/article-components/relatedArticles.vue';
import ExploreMoreSection from '@/components/article-components/exploreMore-section.vue';
import ArticleSubscribe from '@/components/article-components/articleSubscribe.vue';
</script>

<template>
  <ArticleHero :id="id" />
  <ArticleContent />
  <RelatedActorSection />
  <RelatedArticles />
  <ExploreMoreSection />
  <ArticleSubscribe />
</template>
