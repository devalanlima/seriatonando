<template>
  <ul
    class="flex gap-2 justify-start w-full overflow-hidden min-w-[100px]  relative"
    ref="el"
  >
    <template v-for="(item, index) in providers">
      <li
        class="aspect-square w-8 h-8 rounded-lg overflow-hidden relative"
        v-if="index < Number(providersNumber) && providers.length != 0"
      >
        <span
          class="absolute bg-black/70 top-0 w-full text-xs h-6 flex justify-center items-center p-0 -mt-2 pt-2 "
          v-if="flatrate?.length ? false : rent?.length ? true : buy?.length ? true : false"
        > {{ rent?.length ? 'Rent' : 'Buy' }} </span>
        <img
          :title="item.provider_name"
          :src="`https://image.tmdb.org/t/p/w500/${item.logo_path}`"
          :alt="item.provider_name"
        >
      </li>
    </template>
    <li
      class="w-4 -ml-2"
      v-if="providers.length > Number(providersNumber)"
    >
      <div class="text-2xl leading-none absolute bottom-0">...</div>
    </li>
  </ul>
</template>

<script setup lang="ts">
const el = ref(null)
const region = 'BR'
const { width } = useElementSize(el)

const providersNumber = computed(() => {
  return (Math.floor((width.value) / 44))
})

const response: WatchProviders = {
  "id": 40096,
  "results": {
    "AD": {
      "link": "https://www.themoviedb.org/movie/238-the-godfather/watch?locale=AD",
      "flatrate": [
        {
          "logo_path": "/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg",
          "provider_id": 8,
          "provider_name": "Netflix",
          "display_priority": 0
        },
        {
          "logo_path": "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
          "provider_id": 119,
          "provider_name": "Amazon Prime Video",
          "display_priority": 1
        },
        {
          "logo_path": "/oBoWstXQFHAlPApyxIQ31CIbNQk.jpg",
          "provider_id": 307,
          "provider_name": "Globoplay",
          "display_priority": 10
        },
        {
          "logo_path": "/cQQYtdaCg7vDo28JPru4v8Ypi8x.jpg",
          "provider_id": 484,
          "provider_name": "NOW",
          "display_priority": 27
        },
      ]
    },
    "BR": {
      "link": "https://www.themoviedb.org/movie/40096-o-auto-da-compadecida/watch?locale=BR",
      "flatrate": [
        {
          "logo_path": "/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg",
          "provider_id": 8,
          "provider_name": "Netflix",
          "display_priority": 0
        },
        {
          "logo_path": "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
          "provider_id": 119,
          "provider_name": "Amazon Prime Video",
          "display_priority": 1
        },
        {
          "logo_path": "/oBoWstXQFHAlPApyxIQ31CIbNQk.jpg",
          "provider_id": 307,
          "provider_name": "Globoplay",
          "display_priority": 10
        },
        {
          "logo_path": "/cQQYtdaCg7vDo28JPru4v8Ypi8x.jpg",
          "provider_id": 484,
          "provider_name": "NOW",
          "display_priority": 27
        },
        {
          "logo_path": "/5jdN9E9Ftxxbg711crjOyCagTy8.jpg",
          "provider_id": 227,
          "provider_name": "Telecine Play",
          "display_priority": 1000
        },
        {
          "logo_path": "/cQQYtdaCg7vDo28JPru4v8Ypi8x.jpg",
          "provider_id": 484,
          "provider_name": "NOW",
          "display_priority": 27
        },
        {
          "logo_path": "/5jdN9E9Ftxxbg711crjOyCagTy8.jpg",
          "provider_id": 227,
          "provider_name": "Telecine Play",
          "display_priority": 1000
        },
        {
          "logo_path": "/cQQYtdaCg7vDo28JPru4v8Ypi8x.jpg",
          "provider_id": 484,
          "provider_name": "NOW",
          "display_priority": 27
        },
        {
          "logo_path": "/5jdN9E9Ftxxbg711crjOyCagTy8.jpg",
          "provider_id": 227,
          "provider_name": "Telecine Play",
          "display_priority": 1000
        }
      ],
      "buy": [
        {
          "logo_path": "/peURlLlr8jggOwK53fJ5wdQl05y.jpg",
          "provider_id": 2,
          "provider_name": "Apple TV",
          "display_priority": 8
        }
      ],
      "rent": [
        {
          "logo_path": "/5jdN9E9Ftxxbg711crjOyCagTy8.jpg",
          "provider_id": 227,
          "provider_name": "Telecine Play",
          "display_priority": 1000
        }
      ]
    }
  }
}

const flatrate = ref<Array<WatchProvidersRegionContent> | undefined>([])
const buy = ref<Array<WatchProvidersRegionContent> | undefined>([])
const rent = ref<Array<WatchProvidersRegionContent> | undefined>([])

for (const key in response?.results) {
  if (Object.prototype.hasOwnProperty.call(response.results, key)) {
    const element = response.results[key];
    if (key === region) {
      flatrate.value = element?.flatrate
      buy.value = element?.buy
      rent.value = element?.rent
    }
  }
}

const providers = computed(() => flatrate.value?.length ? flatrate.value : rent.value?.length ? rent.value : buy.value?.length ? buy.value : []);

</script>