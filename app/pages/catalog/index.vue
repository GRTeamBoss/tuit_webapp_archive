<template>
  <UPage>
    <UPageHero
      title="Catalog"
      description="You might find in this page items from UNILibrary and also uploaded items"
    />
    <UPageSection class="text-center">
      <UNavigationMenu :items="items" class="mx-auto" />
    </UPageSection>
  </UPage>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items: NavigationMenuItem[] = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Links",
      type: "label",
    },
    {
      label: "UNILibrary",
      to: "/catalog/unilibrary/",
      target: "_blank",
    },
  ],
]);
</script>
