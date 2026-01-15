<template>
  <UHeader title="TUIT Archive">
    <template #right>
      <UDashboardSearch
        v-model:search-term="searchTerm"
        loading
        shortcut="meta_k"
        :groups="books"
        :fuse="{ resultLimit: 42 }"
        @update:search-term="setBooks($event)"
      />
      <UColorModeSwitch />
    </template>
    <UNavigationMenu :items="items" variant="pill" />

    <template #body>
      <UNavigationMenu
        orientation="vertical"
        tooltip
        :items="items"
        variant="pill"
      />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const books = ref([
  {
    id: "books",
    label: "Books",
    items: [],
  },
]);
const searchTerm = ref("");

const setBooks = async (name: string) => {
  const {
    data: booksData,
    pending,
    error,
  } = await useFetch(`/api/unilibrary/search`, {
    query: { name: name },
  });
  books.value[0].items = [];
  booksData.value.result.data.forEach((book) => {
    books.value[0]?.items.push({
      label: book.name,
      suffix: book.authors,
      to: `/catalog/unilibrary/${book.id}`,
    });
  });
};

const items: NavigationMenuItem[] = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Navigate",
      type: "label",
    },
    {
      label: "Catalog",
      to: "/catalog",
    },
  ],
]);
</script>
