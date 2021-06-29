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

      <div
        class="w-483 absolute top-0 transform translate-x-1/2 translate-y-1/2 px-16 mt-24"
      >
        <p class="text-priWhite text-lg font-bold mb-5">
          The best free stock photos & videos shared by talented creators.
        </p>
        <form
          class="w-full flex bg-priWhite md:rounded-md rounded-tr-md rounded-tl-md h-12 pl-6"
          action=""
        >
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for free photos and videos"
            class="md:rounded-md rounded-tr-md rounded-tl-md pl-11 w-full h-full text-sm placeholder-sec focus:outline-none"
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
  data() {
    return {
      suggestions: ["earth", "sunset", "stars", "landscape", "love", "nature"]
    };
  }
};
</script>
