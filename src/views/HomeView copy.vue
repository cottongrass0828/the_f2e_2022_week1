<template>
  <div class="h-full">
    <HeaderComponent></HeaderComponent>
    <div class="bg-primary relative -mt-[1px] rounded-b-[10%] z-20">
      <img
        class="w-full pt-[12%]"
        src="../assets/Banner/Background_pattern.png"
        alt="Background_pattern"
      />
      <img
        class="absolute w-[41%] top-[18%]"
        src="../assets/Banner/potato.png"
        alt="potato"
      />
      <img
        class="absolute w-[6%] top-[13%] left-[40%]"
        src="../assets/Banner/heart.png"
        alt="heart"
      />
      <div
        class="
          absolute
          top-[29%]
          left-[45%]
          text-h2
          sm:text-[50px]
          md:text-[65px]
          lg:text-[80px]
          xl:text-[100px]
          2xl:text-[128px]
          text-gray-50
        "
      >
        <div class="mb-[8px]">The F2E 4th</div>
        <button>
          <div
            class="
              text-title
              md:text-h3
              py-[15px]
              px-[42px]
              bg-[#212FB2]
              text-gray-100
              radius-[4px]
              call-to-action
            "
          >
            互動式網頁設計
          </div>
        </button>
      </div>
      <div class="w-full h-full absolute -bottom-[80%] z-20 overflow-x-hidden">
        <img
          class="absolute w-[60%] -left-[20%]"
          src="../assets/Block01/cloudLeft.png"
          alt="cloudLeft"
        />
        <img
          class="absolute w-[60%] -right-[20%]"
          src="../assets/Block01/cloudRight.png"
          alt="cloudRight"
        />
      </div>
    </div>

    <div class="bg-secondary-light relative -mt-[8%] pt-[8%] z-10">
      <div class="text-primary-dark md:text-h1 text-h4">
        你是否也有以下困擾？
      </div>
      <div class="flex flex-wrap items-end my-[11%]">
        <div class="mx-auto mb-[37px]">
          <img
            class="mx-auto mb-[38px]"
            src="../assets/Block01/Q01.png"
            alt="Q01"
          />
          <div
            class="
              w-[292px]
              text-center
              bg-gray-50
              rounded-[50px]
              text-h4
              py-[17px]
              px-[22px]
              border-[4px] border-gray-900
            "
          >
            羨慕別人的酷酷網頁動畫？
          </div>
        </div>
        <div class="mx-auto mb-[37px]">
          <img
            class="mx-auto mb-[38px]"
            src="../assets/Block01/Q02.png"
            alt="Q02"
          />
          <div
            class="
              w-[292px]
              text-center
              bg-gray-50
              rounded-[50px]
              text-h4
              py-[17px]
              px-[22px]
              border-[4px] border-gray-900
            "
          >
            滿足不了同事的許願？
          </div>
        </div>
        <div class="mx-auto mb-[37px]">
          <img
            class="mx-auto mb-[38px]"
            src="../assets/Block01/Q03.png"
            alt="Q03"
          />
          <div
            class="
              w-[292px]
              text-center
              bg-gray-50
              rounded-[50px]
              text-h4
              py-[17px]
              px-[22px]
              border-[4px] border-gray-900
            "
          >
            動畫技能樹太雜無從下手？
          </div>
        </div>
      </div>
      <div class="relative">
        <div class="text-h1 mb-2 text-black">互動式網頁設計</div>
        <div class="text-h4 text-gray-800 mb-[31px]">
          以下兩個角色進行攜手合作
        </div>
        <div
          class="
            px-[22px]
            flex flex-wrap
            justify-center
            items-start
            mx-auto
            relative
          "
        >
          <div
            class="
              w-full
              max-w-[590px]
              py-[8%]
              bg-gray-50
              border-dashed border-gray-900 border-[4px]
              rounded-[100px]
              md:rounded-[200px]
              mb-[12%]
              mr-[20px]
            "
          >
            <img
              class="
                w-full
                max-w-[205.43px]
                md:max-w-[365.21px]
                mx-auto
                mb-[5%]
              "
              src="../assets/Block01/UI.png"
              alt="UI"
            />
            <div
              class="
                w-[164px]
                md:w-[292px]
                mx-auto
                text-center
                bg-secondary-light
                rounded-[50px]
                text-h4
                py-[3px]
                md:py-[17px]
                px-[22px]
                border-[4px] border-gray-900
              "
            >
              UI設計師
            </div>
          </div>
          <div class="absolute top-[41%] w-full">
            <img
              class="w-[79px] mx-auto"
              src="../assets/Block01/Union.png"
              alt="Union"
            />
          </div>
          <div
            class="
              w-full
              max-w-[590px]
              py-[8%]
              bg-gray-50
              border-dashed border-gray-900 border-[4px]
              rounded-[100px]
              md:rounded-[200px]
              mb-[12%]
            "
          >
            <img
              class="
                w-full
                max-w-[205.43px]
                md:max-w-[365.21px]
                mx-auto
                mb-[5%]
              "
              src="../assets/Block01/engineer.png"
              alt="engineer"
            />
            <div
              class="
                w-[164px]
                md:w-[292px]
                mx-auto
                text-center
                bg-secondary-light
                rounded-[50px]
                text-h4
                py-[3px]
                md:py-[17px]
                px-[22px]
                border-[4px] border-gray-900
              "
            >
              前端工程師
            </div>
          </div>
        </div>
        <!-- <div class="absolute top-[95%] w-full">
          <div
            class="
              inline-block
              bg-secondary-light
              w-[33%]
              h-[64px]
              md:h-[380.82px]
              rounded-[50%]
            "
          ></div>
          <div
            class="
              inline-block
              bg-secondary-light
              w-[33%]
              h-[64px]
              md:h-[380.82px]
              rounded-[50%]
            "
          ></div>
          <div
            class="
              inline-block
              bg-secondary-light
              w-[33%]
              h-[64px]
              md:h-[380.82px]
              rounded-[50%]
            "
          ></div>
        </div> -->
      </div>
    </div>

    <div class="bg-primary relative -mt-[8%] pt-[8%] pt-[19%] px-[8%]">
      <div
        class="
          text-h3
          md:text-[64px]
          text-start
          leading-normal
          font-bold
          text-white
          mb-[8px]
        "
      >
        年度最強合作，三大主題來襲
      </div>
      <div class="text-body2 md:text-h3 text-start">
        各路廠商強強聯手，共同設計出接地氣的網頁互動挑戰關卡
      </div>
      <div class="flex flex-wrap items-end my-[11%]">
        <div class="relative mx-auto mb-[71px]">
          <img
            class="mx-auto mb-[38px]"
            src="../assets/Block02/round.png"
            alt="round"
          />
          <div class="absolute top-[30%] w-full">
            <div class="text-h4 text-secondary-dark text-center">
              WEEK <span class="text-[36px] text-secondary-dark">1</span>
            </div>
            <div class="text-h3 text-center">The F2E 活動網站設計</div>
            <div class="text-title text-center">視差滾動</div>
          </div>
          <div
            class="
              absolute
              bottom-0
              right-0
              z-10
              bg-secondary-light
              w-[138px]
              h-[138px]
              rounded-[50%]
              text-h4 text-gray-50
              border-[4px] border-gray-50
              flex
              justify-center
              items-center
            "
          >
            板塊設計
          </div>
        </div>
        <div class="relative mx-auto mb-[71px]">
          <img
            class="mx-auto mb-[38px]"
            src="../assets/Block02/round.png"
            alt="round"
          />
          <div class="absolute top-[30%] w-full">
            <div class="text-h4 text-secondary-dark text-center">
              WEEK <span class="text-[36px] text-secondary-dark">2</span>
            </div>
            <div class="text-h3 text-center">今晚，我想來點點簽</div>
            <div class="text-title text-center">Canvas</div>
          </div>
          <div
            class="
              absolute
              bottom-0
              right-0
              z-10
              bg-secondary-light
              w-[138px]
              h-[138px]
              rounded-[50%]
              text-h4 text-gray-50
              border-[4px] border-gray-50
              flex
              justify-center
              items-center
            "
          >
            凱鈿行動科技
          </div>
        </div>
        <div class="relative mx-auto mb-[71px]">
          <img
            class="mx-auto mb-[38px]"
            src="../assets/Block02/round.png"
            alt="round"
          />
          <div class="absolute top-[30%] w-full">
            <div class="text-h4 text-secondary-dark text-center">
              WEEK <span class="text-[36px] text-secondary-dark">3</span>
            </div>
            <div class="text-h3 text-center">Scrum 新手村</div>
            <div class="text-title text-center">JS draggable</div>
          </div>
          <div
            class="
              absolute
              bottom-0
              right-0
              z-10
              bg-secondary-light
              w-[138px]
              h-[138px]
              rounded-[50%]
              text-h4 text-gray-50
              border-[4px] border-gray-50
              flex
              justify-center
              items-center
            "
          >
            鈦坦科技
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComponent
  }
}
</script>
<style lang="scss" scoped>
.text-h2 {
  text-shadow: -2px 0 #202020, 0 2px #202020, 2px 0 #202020, 0 -2px #202020;
}

.call-to-action {
  filter: drop-shadow(5px 5px 0 #4444dd);
}
</style>
