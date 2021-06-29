<template>
  <header>
    <div class="h-hero w-screen relative">
      <img
        class="w-full h-full object-cover absolute top-0"
        src="https://images.pexels.com/photos/4403924/pexels-photo-4403924.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.65&amp;h=500&amp;sharp=10&amp;w=1400"
        srcset="
          https://images.pexels.com/photos/4403924/pexels-photo-4403924.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.65&amp;h=500&amp;sharp=10&amp;w=350   350w,
          https://images.pexels.com/photos/4403924/pexels-photo-4403924.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.65&amp;h=500&amp;sharp=10&amp;w=500   500w,
          https://images.pexels.com/photos/4403924/pexels-photo-4403924.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.65&amp;h=500&amp;sharp=10&amp;w=1000 1000w,
          https://images.pexels.com/photos/4403924/pexels-photo-4403924.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.65&amp;h=500&amp;sharp=10&amp;w=1500 1500w,
          https://images.pexels.com/photos/4403924/pexels-photo-4403924.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.65&amp;h=500&amp;sharp=10&amp;w=2000 2000w,
          https://images.pexels.com/photos/4403924/pexels-photo-4403924.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.65&amp;h=500&amp;sharp=10&amp;w=2500 2500w,
          https://images.pexels.com/photos/4403924/pexels-photo-4403924.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.65&amp;h=500&amp;sharp=10&amp;w=3000 3000w,
          https://images.pexels.com/photos/4403924/pexels-photo-4403924.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.65&amp;h=500&amp;sharp=10&amp;w=3500 3500w,
          https://images.pexels.com/photos/4403924/pexels-photo-4403924.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.65&amp;h=500&amp;sharp=10&amp;w=4000 4000w,
          https://images.pexels.com/photos/4403924/pexels-photo-4403924.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.65&amp;h=500&amp;sharp=10&amp;w=5000 5000w
        "
      />

      <div class="bg-sec h-full w-full absolute top-0 opacity-50"></div>

      <div class="w-483 absolute transform center px-16 mt-10">
        <h1 class="text-priWhite text-lg font-bold mb-5">
          The best free stock photos & videos shared by talented creators.
        </h1>
        <div class="relative">
          <form
            class="w-full flex bg-priWhite md:rounded-md rounded-tr-md rounded-tl-md h-12 pl-6"
            action=""
          >
            <input
              @focus="showTopics = true"
              @blur="showTopics = false"
              placeholder="Search for free photos and videos"
              class="md:rounded-md rounded-tr-md rounded-tl-md pl-11 w-full h-full text-sm placeholder-gray-600 focus:outline-none z-30"
            />
            <button class="px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#232a34"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class=""
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </form>
          <div
            v-if="showTopics"
            class="h-153 w-full bg-priWhite shadow-lg pl-6 absolute z-20 -mt-1 pt-5"
          >
            <h3>Trending Topics</h3>

            <div
              v-for="topic in topics"
              :key="topic.topic"
              class="inline-block shadow-lg rounded-full pl-1 pt-1 pr-5 pb-1 mr-4 mt-3 hover:bg-gray-200 cursor-pointer"
            >
              <img
                class="inline-block rounded-full w-12 h-12"
                :src="topic.src"
                :srcset="topic.srcset"
                :alt="topic.topic"
              />
              <span class="ml-3">
                {{ topic.topic }}
              </span>
            </div>
          </div>
        </div>

        <p class="text-priWhite pt-5">
          Suggested:
          <span
            v-for="suggested in suggestions"
            :key="suggested"
            class="opacity-75 hover:opacity-100 cursor-pointer"
            >{{ suggested }},
          </span>

          <span class="opacity-75 hover:opacity-100 cursor-pointer">
            more
          </span>
        </p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  mounted() {},
  data() {
    return {
      showTopics: false,
      suggestions: ["earth", "sunset", "stars", "landscape", "love", "nature"],
      topics: [
        {
          src:
            "https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&amp;crop=entropy&amp;cs=tinysrgb&amp;dpr=1&amp;fit=crop&amp;h=50&amp;w=50",
          srcset:
            "https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&amp;crop=entropy&amp;cs=tinysrgb&amp;dpr=1&amp;fit=crop&amp;h=50&amp;w=50 1x, https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&amp;crop=entropy&amp;cs=tinysrgb&amp;dpr=2&amp;fit=crop&amp;h=50&amp;w=50 2x",
          topic: "Plane"
        },
        {
          src:
            "https://images.pexels.com/photos/2087954/pexels-photo-2087954.png?auto=compress&amp;crop=entropy&amp;cs=tinysrgb&amp;dpr=1&amp;fit=crop&amp;h=50&amp;w=50",
          srcset:
            "https://images.pexels.com/photos/2087954/pexels-photo-2087954.png?auto=compress&amp;crop=entropy&amp;cs=tinysrgb&amp;dpr=1&amp;fit=crop&amp;h=50&amp;w=50 1x, https://images.pexels.com/photos/2087954/pexels-photo-2087954.png?auto=compress&amp;crop=entropy&amp;cs=tinysrgb&amp;dpr=2&amp;fit=crop&amp;h=50&amp;w=50 2x",
          topic: "Life"
        },
        {
          src:
            "https://images.pexels.com/photos/917076/pexels-photo-917076.jpeg?auto=compress&amp;crop=entropy&amp;cs=tinysrgb&amp;dpr=1&amp;fit=crop&amp;h=50&amp;w=50",
          srcset:
            "https://images.pexels.com/photos/917076/pexels-photo-917076.jpeg?auto=compress&amp;crop=entropy&amp;cs=tinysrgb&amp;dpr=1&amp;fit=crop&amp;h=50&amp;w=50 1x, https://images.pexels.com/photos/917076/pexels-photo-917076.jpeg?auto=compress&amp;crop=entropy&amp;cs=tinysrgb&amp;dpr=2&amp;fit=crop&amp;h=50&amp;w=50 2x",
          topic: "Sunshine"
        },
        {
          src:
            "https://images.pexels.com/photos/1147124/pexels-photo-1147124.jpeg?auto=compress&amp;crop=entropy&amp;cs=tinysrgb&amp;dpr=1&amp;fit=crop&amp;h=50&amp;w=50",
          srcset:
            "https://images.pexels.com/photos/1147124/pexels-photo-1147124.jpeg?auto=compress&amp;crop=entropy&amp;cs=tinysrgb&amp;dpr=1&amp;fit=crop&amp;h=50&amp;w=50 1x, https://images.pexels.com/photos/1147124/pexels-photo-1147124.jpeg?auto=compress&amp;crop=entropy&amp;cs=tinysrgb&amp;dpr=2&amp;fit=crop&amp;h=50&amp;w=50 2x",
          topic: "Pool"
        },
        {
          src:
            "https://images.pexels.com/photos/34092/pexels-photo.jpg?auto=compress&amp;crop=entropy&amp;cs=tinysrgb&amp;dpr=1&amp;fit=crop&amp;h=50&amp;w=50",
          srcset:
            "https://images.pexels.com/photos/34092/pexels-photo.jpg?auto=compress&amp;crop=entropy&amp;cs=tinysrgb&amp;dpr=1&amp;fit=crop&amp;h=50&amp;w=50 1x, https://images.pexels.com/photos/34092/pexels-photo.jpg?auto=compress&amp;crop=entropy&amp;cs=tinysrgb&amp;dpr=2&amp;fit=crop&amp;h=50&amp;w=50 2x",
          topic: "Corporate"
        },
        {
          src:
            "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&amp;crop=entropy&amp;cs=tinysrgb&amp;dpr=1&amp;fit=crop&amp;h=50&amp;w=50",
          srcset:
            "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&amp;crop=entropy&amp;cs=tinysrgb&amp;dpr=1&amp;fit=crop&amp;h=50&amp;w=50 1x, https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&amp;crop=entropy&amp;cs=tinysrgb&amp;dpr=2&amp;fit=crop&amp;h=50&amp;w=50 2x",
          topic: "Houses"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
