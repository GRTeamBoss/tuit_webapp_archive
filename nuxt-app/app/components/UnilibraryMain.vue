<template>
  <UPage>
    <UPageHero title="UNILibrary" />
    <UPageSection>
      <UNavigationMenu :items="items" class="mx-auto" />
    </UPageSection>
    <UPageSection title="Books" id="books">
      <UPageGrid>
        <UPageCard
          v-for="(book, index) in booksData"
          :key="index"
          v-bind="book"
          :title="book.name"
          :description="book.abstract_name"
        >
          <template #footer>
            <p class="text-green-400">
              {{ book.authors }} - {{ book.publisher_name }} -
              {{ book.publisher_year }}
            </p>
            <p><b>Category</b>: {{ book.resource_category_name }}</p>
            <p><b>Language</b>: {{ book.resource_language_name }}</p>
            <p><b>Type</b>: {{ book.resource_type_name }}</p>
            <p><b>Country</b>: {{ book.country_name }}</p>
          </template>
        </UPageCard>
      </UPageGrid>
    </UPageSection>
    <UPageSection title="Posts" id="posts">
      <UPageGrid>
        <UPageCard
          v-for="(book, index) in postsData"
          :key="index"
          v-bind="book"
          :title="book.name"
          :description="book.abstract_name"
        >
          <template #footer>
            <p class="text-green-400">
              {{ book.authors }} - {{ book.publisher_name }} -
              {{ book.publisher_year }}
            </p>
            <p><b>Category</b>: {{ book.resource_category_name }}</p>
            <p><b>Language</b>: {{ book.resource_language_name }}</p>
            <p><b>Type</b>: {{ book.resource_type_name }}</p>
            <p><b>Country</b>: {{ book.country_name }}</p>
          </template>
        </UPageCard>
      </UPageGrid>
    </UPageSection>
    <UPageSection title="Dissertations" id="dissertations">
      <UPageGrid>
        <UPageCard
          v-for="(book, index) in dissertationsData"
          :key="index"
          v-bind="book"
          :title="book.name"
          :description="book.abstract_name"
        >
          <template #footer>
            <p class="text-green-400">
              {{ book.authors }} - {{ book.publisher_name }} -
              {{ book.publisher_year }}
            </p>
            <p><b>Category</b>: {{ book.resource_category_name }}</p>
            <p><b>Language</b>: {{ book.resource_language_name }}</p>
            <p><b>Type</b>: {{ book.resource_type_name }}</p>
            <p><b>Country</b>: {{ book.country_name }}</p>
          </template>
        </UPageCard>
      </UPageGrid>
    </UPageSection>
  </UPage>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
const { getBooks, getPosts, getDissertations } = await useUnilibrary();
const books = await getBooks(1);
const booksData = books.result.data;
const posts = await getPosts(1);
const postsData = posts.result.data;
const dissertations = await getDissertations(1);
const dissertationsData = dissertations.result.data;
const items: NavigationMenuItem[] = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Books",
      to: "#books",
    },
    {
      label: "Posts",
      to: "#posts",
    },
    {
      label: "Dissertations",
      to: "#dissertations",
    },
  ],
]);
</script>
