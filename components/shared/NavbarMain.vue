<template>
  <div>
    <nav class="text-priWhite fixed z-50 w-full" :class="{ sticky: isSticky }">
      <div class="flex items-center justify-between px-4 py-3">
        <Logo />

        <ul>
          <li>
            <div>
              <span class="text-sm hover:opacity-75 cursor-pointer"
                >Explore</span
              ><span class="ml-5 text-sm hover:opacity-75 cursor-pointer"
                >License</span
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="inline-block ml-5 cursor-pointer"
              >
                <path
                  d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"
                ></path>
              </svg>
              <div class="inline-block relative">
                <div
                  @mouseenter="showDropdown = true"
                  @mouseleave="showDropdown = false"
                  class="ml-5 cursor-pointer"
                >
                  <img
                    alt="avatar"
                    class="inline-block rounded-full"
                    src="https://images.pexels.com/users/avatars/74908630/ken-jimmy-856.jpeg?auto=compress&amp;fit=crop&amp;h=60&amp;w=60"
                    height="30px"
                    width="30px"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="inline-block"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
                <div
                  v-if="showDropdown"
                  @mouseenter="showDropdown = true"
                  class="bg-priWhite shadow-lg p-6 mt-5 absolute right-0 z-20 w-222 text-sec rounded"
                >
                  <div
                    id="triangle-up"
                    class="absolute right-0 -mt-10 mr-3"
                  ></div>
                  <div>
                    <ul>
                      <li>your profile</li>
                      <li>your collections</li>
                      <li>settings</li>
                      <li>change language</li>
                      <li>logout</li>
                    </ul>
                  </div>

                  <div>
                    <ul>
                      <li>Image & Video API</li>
                      <li>Apps & Plugins</li>
                      <li>FAQ</li>
                      <li>Partnerships</li>
                      <li>Imprint & Terms</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="inline-block ml-5">
                <ButtonPrime />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false,
      isSticky: false,
      lastScrollPosition: 0,
      user: {
        isLoggedin: true,
        fullName: "Kenneth Jimmy",
        avatar:
          "https://images.pexels.com/users/avatars/74908630/ken-jimmy-856.jpeg?auto=compress&amp;fit=crop&amp;h=60&amp;w=60"
      }
    };
  },
  methods: {
    onScroll() {
      const windowScroll = window.pageYOffset;
      if (windowScroll > 100) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>

<style scoped>
.sticky {
  background-color: #232a34;
  position: fixed;
  width: 100%;
  z-index: 50;
  transition: all 0.2s;
}

@media only screen and (max-width: 600px) {
  .sticky {
    padding-top: 1.2rem;
    padding-bottom: 1.3rem;
  }
}

#triangle-up {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 17px solid #ffffff;
}
</style>
