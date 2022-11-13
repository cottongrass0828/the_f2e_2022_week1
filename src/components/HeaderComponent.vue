<template>
  <div class="bg-primary flex">
    <a class="py-[17px] px-[19px] mr-auto" href="/">
      <img class="w-[169px]" src="../assets/F2Elogo.png" alt="F2Elogo" />
    </a>
    <div class="block md:hidden">
      <div class="h-full flex items-center px-[17px]" @click="isOpen = !isOpen">
        <img
          class=""
          src="../assets/icon/icon_hamburger.svg"
          alt="icon_hamburger"
        />
      </div>
    </div>
    <div class="absolute w-full z-30" v-if="isOpen">
      <div class="bg-black/[.2] pt-[70px]" @click="isOpen = !isOpen"></div>
      <ul class="rounded-b-[10px] text-title bg-primary py-1.5">
        <li>
          <div class="text-white py-3" href="">關卡資訊</div>
        </li>
        <li>
          <div class="text-white py-3" href="">活動說明</div>
        </li>
        <li>
          <div class="text-white py-3" href="">評審機制</div>
        </li>
        <li>
          <div class="text-white py-3" href="">我要報名</div>
        </li>
      </ul>
    </div>

    <div class="hidden md:block pr-[26px]">
      <ul class="flex text-white h-full">
        <li>
          <a class="px-[20px] py-[24px] block text-title" href="">關卡資訊</a>
        </li>
        <li>
          <a class="px-[20px] py-[24px] block text-title" href="">活動說明</a>
        </li>
        <li>
          <a class="px-[20px] py-[24px] block text-title" href="">評審機制</a>
        </li>
        <li>
          <a class="mx-[2px] my-[11px] px-[18px] py-[8px] block text-title text-black bg-secondary-light border-[4px] border-gray-900 rounded-[4px]" href=""
            >我要報名</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    isOpen: false
  }),
  methods: {}
}
</script>
