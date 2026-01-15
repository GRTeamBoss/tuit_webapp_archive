<template>
  <UPage>
    <UPageHero :title="data.result[0].resource_type_name" />
    <UPageSection>
      <UPageCard
        :title="data.result[0].name"
        :description="data.result[0].abstract_name"
        reverse
      >
        <template #leading>
          <img
            :src="dataImage"
            alt="Image"
            class="w-50"
            @click="downloadPDF($event)"
          />
        </template>
        <template #default>
          <p class="text-green-400">
            {{ data.result[0].authors }} - {{ data.result[0].publisher_name }} -
            {{ data.result[0].publisher_year }}
          </p>
          <UPageLinks :links="links" />
        </template>
      </UPageCard>
    </UPageSection>
  </UPage>
</template>

<script setup lang="ts">
const data = ref({});
const links = ref([{}]);

const { getByID } = await useUnilibrary();
const route = useRoute();

data.value = await getByID(parseInt(route.path.split("/")[3]));
const dataImage = ref("");
const dataFile = ref("");
if (data.value.result[0].icon_file !== null) {
  dataImage.value = `https://api.unilibrary.uz/storage/PublisherResourceImage/${data.value.result[0].id}/images/${data.value.result[0].media[0].filename}.png`;
  if (data.value.result[0].publisher_file !== null) {
    dataFile.value = `https://api.unilibrary.uz/storage/PublisherResourceFile/${data.value.result[0].id}/images/${data.value.result[0].media[1].filename}.pdf`;
  }
} else {
  if (data.value.result[0].publisher_file !== null) {
    dataFile.value = `https://api.unilibrary.uz/storage/PublisherResourceFile/${data.value.result[0].id}/images/${data.value.result[0].media[0].filename}.pdf`;
  }
}

if (dataFile.value === "") {
  links.value = [
    {
      label: "No resource",
    },
  ];
} else {
  links.value = [
    {
      label: "Download",
      to: dataFile,
      target: "_blank",
    },
  ];
}

const downloadPDF = () => {
  window.open(
    `https://api.unilibrary.uz/storage/PublisherResourceFile/${data.value.result[0].id}/images/${data.value.result[0].media[1].filename}.pdf`,
    "_blank"
  );
};
</script>
