<template>
  <AtomsBaseCard class="flex relative overflow-hidden h-full flex-col justify-between gap-3">
    <div class="flex flex-col justify-between h-full">
      <a
        title="A fantástica fábrica de chocolate"
        href="#"
        class="relative text-xl whitespace-nowrap text-ellipsis overflow-hidden leading-none cursor-pointer w-fit max-w-[194px] after:content-[''] after:block after:w-0 hover:after:w-full after:h-[2px] after:bg-color_light after:absolute after:bottom-0 pb-[2px] after:rounded-full after:transition-all after:duration-300 after:ease-in-out after:-translate-x-1/2 hover:after:translate-x-0"
      >Lorem ipsum dolor sit</a>
      <p
        class="whitespace-nowrap text-ellipsis overflow-hidden text-color_secondary text-opacity-80 text-sm relative before:absolute before:content-[''] before:bg-gradient-to-r before:-right-3 before:from-transparent before:to-80% before:to-color_terciary before:block before:w-[80px] before:h-5 before:pointer-events-none">
        Lorem / Ipsum / Dolor / Sit / Amet</p>
      <p
        class="truncate-text text-sm pr-0  before:content-[''] before:bg-gradient-to-r before:from-transparent before:to-90% before:to-color_terciary before:block before:w-[100px] before:h-5 before:pointer-events-none">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam provident, nobis culpa corporis veritatis
        explicabo nam dolore id, nesciunt placeat similique eaque temporibus rem? Sapiente repellendus impedit fuga nulla
        itaque!
      </p>
    </div>
    <div class="flex justify-start">
      <MoleculesMovieProviders />
      <MoleculesAvaliationButtons />
    </div>
  </AtomsBaseCard>
</template>

<script setup lang="ts">

</script>

<style scoped></style>