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
      <ULocaleSelect
        :model-value="locale"
        :locales="[en, ru, uz]"
        @update:model-value="setLocale($event)"
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
import { en, ru, uz } from "@nuxt/ui/locale";
import type { NavigationMenuItem } from "@nuxt/ui";

const books = ref([
  {
    id: "books",
    label: "Books",
    items: [],
  },
]);
const searchTerm = ref("");
const { searchLib } = await useSearch();

const setBooks = async (name: string) => {
  const data = await searchLib(name);
  books.value[0].items = [];
  data.result.data.forEach((book) => {
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

const { locale, setLocale } = useI18n();
</script>
