<template>
  <MoleculesMenuFilter
    btn-title="Genres"
    width-card="w-[450px] -left-[350px] md:w-[600px] lg:w-[700px] lg:-left-[150px] xl:left-0"
  >
    <ul class="grid grid-cols-[repeat(auto-fit,_minmax(147px,_1fr))] place-items-center gap-6 w-full">
      <li class="w-[147px]">
        <label class="flex gap-2 items-center cursor-pointer w-fit">
          <AtomsCheckbox v-model="isAllChecked" />
          <p :class="['select-none underline underline-offset-4', isAllChecked ? 'text-color_primary font-semibold' : 'text-color_light']">{{
            isAllChecked ? 'Unselect All' : 'Select All' }}</p>
        </label>
      </li>
      <li
        v-for="genre in allGenres"
        :key="genre.id"
        class="w-[147px]"
      >
        <label class="flex gap-2 items-center cursor-pointer w-fit">
          <AtomsCheckbox
            v-model="genre.isChecked"
          />
          <p :class="['select-none', genre.isChecked ? 'text-color_primary font-semibold' : 'text-color_light']">{{
            genre.name }}</p>
        </label>
      </li>
    </ul>
  </MoleculesMenuFilter>
</template>

<script setup lang="ts">

const response = {
  "genres": [
    {
      "id": 28,
      "name": "Ação"
    },
    {
      "id": 12,
      "name": "Aventura"
    },
    {
      "id": 16,
      "name": "Animação"
    },
    {
      "id": 35,
      "name": "Comédia"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentário"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Família"
    },
    {
      "id": 14,
      "name": "Fantasia"
    },
    {
      "id": 36,
      "name": "História"
    },
    {
      "id": 27,
      "name": "Terror"
    },
    {
      "id": 10402,
      "name": "Música"
    },
    {
      "id": 9648,
      "name": "Mistério"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Ficção científica"
    },
    {
      "id": 10770,
      "name": "Cinema TV"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "Guerra"
    },
    {
      "id": 37,
      "name": "Faroeste"
    }
  ]
}

const isAllChecked = ref<boolean>(false)

watch(() => isAllChecked.value, (newValue) => {
  if (newValue) {
    for (const genre of allGenres.value) {
      genre.isChecked = true
    }
  } else {
    for (const genre of allGenres.value) {
      genre.isChecked = false
    }
  }
})

const allGenres = ref<Array<{
  id: number;
  name: string;
  isChecked: boolean;
}>>([])

for (const genre of response.genres) {
  allGenres.value.push({
    id: genre.id,
    name: genre.name,
    isChecked: false
  })
}

const checkedGenres = ref<Array<number>>([])

onMounted(() => {
  watch(allGenres.value, () => {
    let numberOfCheckedGenres = 0
    checkedGenres.value = []
    for (const genre of allGenres.value) {
      if (genre.isChecked) {
        checkedGenres.value.push(genre.id)
        numberOfCheckedGenres++
      }
    }
    if (numberOfCheckedGenres === allGenres.value.length) {
      isAllChecked.value = true
    }
    if (numberOfCheckedGenres === 0) {
      isAllChecked.value = false
    }
  })
})
</script>
