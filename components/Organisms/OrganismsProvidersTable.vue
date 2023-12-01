<template>
  <section class="flex flex-col w-full h-fit border-inherit outline outline-1 outline-color_primary divide-y">
      <div class="grid place-items-center py-5 outline outline-1 outline-color_primary border-inherit divide-y">
        <a
          href="https://www.justwatch.com/us/JustWatch-Streaming-API"
          target="_blank"
        >
          <img
            class="w-[200px]"
            src="https://www.themoviedb.org/assets/2/v4/logos/justwatch-c2e58adf5809b6871db650fb74b43db2b8f3637fe3709262572553fa056d8d0a.svg"
            alt="JustWatch Logo"
          >
        </a>
      </div>
    <AtomsProviderRow v-if="props.ads !== undefined">
      <AtomsProviderHeader
        class="bg-color_primary"
        title="Free"
      />
      <AtomsProviderData
        v-for="provider in props.ads"
        :key="provider.provider_id"
        :title="provider.provider_name"
        :path="provider.logo_path"
      />
    </AtomsProviderRow>
    <AtomsProviderRow v-if="props.flatrate !== undefined">
      <AtomsProviderHeader
        class="bg-color_primary"
        title="Stream"
      />
      <AtomsProviderData
        v-for="provider in props.flatrate"
        :key="provider.provider_id"
        :title="provider.provider_name"
        :path="provider.logo_path"
      />
    </AtomsProviderRow>
    <AtomsProviderRow v-if="props.rent !== undefined">
      <AtomsProviderHeader
        class="bg-color_primary/30"
        title="Rent"
      />
      <AtomsProviderData
        v-for="provider in props.rent"
        :key="provider.provider_id"
        :title="provider.provider_name"
        :path="provider.logo_path"
      />
    </AtomsProviderRow>
    <AtomsProviderRow v-if="props.buy !== undefined">
      <AtomsProviderHeader
        class="bg-color_primary/10"
        title="Buy"
      />
      <AtomsProviderData
        v-for="provider in props.buy"
        :key="provider.provider_id"
        :title="provider.provider_name"
        :path="provider.logo_path"
      />
    </AtomsProviderRow>
  </section>
</template>

<script setup lang="ts">
interface Props {
  ads: Array<WatchProvidersRegionContent> | undefined;
  flatrate: Array<WatchProvidersRegionContent> | undefined;
  rent: Array<WatchProvidersRegionContent> | undefined;
  buy: Array<WatchProvidersRegionContent> | undefined;
}
const props = defineProps<Props>();
</script>
