<template>
  <!-- Scroll to Top Button -->
  <div v-show="showScrollTopBtn" class="scroll-to-top position-fixed">
    <a v-scroll-to="'#page-top'" href="#" class="js-scroll-trigger d-block text-center text-white rounded">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="fab fa-fw fa-chevron-up">
        <!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->
        <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"/>
      </svg>
    </a>
  </div>

  <!-- Navigation-->
  <transition name="navbar">
    <div id="navContainer" class="fixed-top" v-if="showNavBar">
      <svg xmlns:xlink="http://www.w3.org/1999/xlink" id="wave" preserveAspectRatio="none" viewBox="0 0 1440 380" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(243, 106, 62, 1)" offset="0%"/>
            <stop stop-color="rgba(255, 179, 11, 1)" offset="100%"/>
          </linearGradient>
        </defs>
        <path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,190L60,164.7C120,139,240,89,360,101.3C480,114,600,190,720,209C840,228,960,190,1080,164.7C1200,139,1320,127,1440,126.7C1560,127,1680,139,1800,171C1920,203,2040,253,2160,278.7C2280,304,2400,304,2520,253.3C2640,203,2760,101,2880,88.7C3000,76,3120,152,3240,202.7C3360,253,3480,279,3600,278.7C3720,279,3840,253,3960,202.7C4080,152,4200,76,4320,50.7C4440,25,4560,51,4680,101.3C4800,152,4920,228,5040,228C5160,228,5280,152,5400,139.3C5520,127,5640,177,5760,164.7C5880,152,6000,76,6120,95C6240,114,6360,228,6480,259.7C6600,291,6720,241,6840,240.7C6960,241,7080,291,7200,272.3C7320,253,7440,165,7560,145.7C7680,127,7800,177,7920,190C8040,203,8160,177,8280,177.3C8400,177,8520,203,8580,215.3L8640,228L8640,380L8580,380C8520,380,8400,380,8280,380C8160,380,8040,380,7920,380C7800,380,7680,380,7560,380C7440,380,7320,380,7200,380C7080,380,6960,380,6840,380C6720,380,6600,380,6480,380C6360,380,6240,380,6120,380C6000,380,5880,380,5760,380C5640,380,5520,380,5400,380C5280,380,5160,380,5040,380C4920,380,4800,380,4680,380C4560,380,4440,380,4320,380C4200,380,4080,380,3960,380C3840,380,3720,380,3600,380C3480,380,3360,380,3240,380C3120,380,3000,380,2880,380C2760,380,2640,380,2520,380C2400,380,2280,380,2160,380C2040,380,1920,380,1800,380C1680,380,1560,380,1440,380C1320,380,1200,380,1080,380C960,380,840,380,720,380C600,380,480,380,360,380C240,380,120,380,60,380L0,380Z"/>
        <defs>
          <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(243, 106, 62, 1)" offset="0%"/>
            <stop stop-color="rgba(255, 179, 11, 1)" offset="100%"/>
          </linearGradient>
        </defs>
        <path style="transform:translate(0, 50px); opacity:0.9" fill="url(#sw-gradient-1)" d="M0,228L60,215.3C120,203,240,177,360,183.7C480,190,600,228,720,240.7C840,253,960,241,1080,247C1200,253,1320,279,1440,259.7C1560,241,1680,177,1800,139.3C1920,101,2040,89,2160,114C2280,139,2400,203,2520,247C2640,291,2760,317,2880,304C3000,291,3120,241,3240,228C3360,215,3480,241,3600,215.3C3720,190,3840,114,3960,88.7C4080,63,4200,89,4320,139.3C4440,190,4560,266,4680,259.7C4800,253,4920,165,5040,158.3C5160,152,5280,228,5400,247C5520,266,5640,228,5760,177.3C5880,127,6000,63,6120,57C6240,51,6360,101,6480,152C6600,203,6720,253,6840,285C6960,317,7080,329,7200,297.7C7320,266,7440,190,7560,171C7680,152,7800,190,7920,202.7C8040,215,8160,203,8280,190C8400,177,8520,165,8580,158.3L8640,152L8640,380L8580,380C8520,380,8400,380,8280,380C8160,380,8040,380,7920,380C7800,380,7680,380,7560,380C7440,380,7320,380,7200,380C7080,380,6960,380,6840,380C6720,380,6600,380,6480,380C6360,380,6240,380,6120,380C6000,380,5880,380,5760,380C5640,380,5520,380,5400,380C5280,380,5160,380,5040,380C4920,380,4800,380,4680,380C4560,380,4440,380,4320,380C4200,380,4080,380,3960,380C3840,380,3720,380,3600,380C3480,380,3360,380,3240,380C3120,380,3000,380,2880,380C2760,380,2640,380,2520,380C2400,380,2280,380,2160,380C2040,380,1920,380,1800,380C1680,380,1560,380,1440,380C1320,380,1200,380,1080,380C960,380,840,380,720,380C600,380,480,380,360,380C240,380,120,380,60,380L0,380Z"/>
        <defs>
          <linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(243, 106, 62, 1)" offset="0%"/>
            <stop stop-color="rgba(255, 179, 11, 1)" offset="100%"/>
          </linearGradient>
        </defs>
        <path style="transform:translate(0, 100px); opacity:0.8" fill="url(#sw-gradient-2)" d="M0,190L60,158.3C120,127,240,63,360,31.7C480,0,600,0,720,44.3C840,89,960,177,1080,202.7C1200,228,1320,190,1440,164.7C1560,139,1680,127,1800,120.3C1920,114,2040,114,2160,133C2280,152,2400,190,2520,202.7C2640,215,2760,203,2880,177.3C3000,152,3120,114,3240,95C3360,76,3480,76,3600,82.3C3720,89,3840,101,3960,120.3C4080,139,4200,165,4320,183.7C4440,203,4560,215,4680,183.7C4800,152,4920,76,5040,82.3C5160,89,5280,177,5400,221.7C5520,266,5640,266,5760,247C5880,228,6000,190,6120,171C6240,152,6360,152,6480,133C6600,114,6720,76,6840,50.7C6960,25,7080,13,7200,12.7C7320,13,7440,25,7560,69.7C7680,114,7800,190,7920,190C8040,190,8160,114,8280,120.3C8400,127,8520,215,8580,259.7L8640,304L8640,380L8580,380C8520,380,8400,380,8280,380C8160,380,8040,380,7920,380C7800,380,7680,380,7560,380C7440,380,7320,380,7200,380C7080,380,6960,380,6840,380C6720,380,6600,380,6480,380C6360,380,6240,380,6120,380C6000,380,5880,380,5760,380C5640,380,5520,380,5400,380C5280,380,5160,380,5040,380C4920,380,4800,380,4680,380C4560,380,4440,380,4320,380C4200,380,4080,380,3960,380C3840,380,3720,380,3600,380C3480,380,3360,380,3240,380C3120,380,3000,380,2880,380C2760,380,2640,380,2520,380C2400,380,2280,380,2160,380C2040,380,1920,380,1800,380C1680,380,1560,380,1440,380C1320,380,1200,380,1080,380C960,380,840,380,720,380C600,380,480,380,360,380C240,380,120,380,60,380L0,380Z"/>
        <defs>
          <linearGradient id="sw-gradient-3" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(243, 106, 62, 1)" offset="0%"/>
            <stop stop-color="rgba(255, 179, 11, 1)" offset="100%"/>
          </linearGradient>
        </defs>
        <path style="transform:translate(0, 150px); opacity:0.7" fill="url(#sw-gradient-3)" d="M0,152L60,152C120,152,240,152,360,139.3C480,127,600,101,720,133C840,165,960,253,1080,259.7C1200,266,1320,190,1440,183.7C1560,177,1680,241,1800,234.3C1920,228,2040,152,2160,114C2280,76,2400,76,2520,69.7C2640,63,2760,51,2880,63.3C3000,76,3120,114,3240,152C3360,190,3480,228,3600,247C3720,266,3840,266,3960,234.3C4080,203,4200,139,4320,95C4440,51,4560,25,4680,38C4800,51,4920,101,5040,152C5160,203,5280,253,5400,266C5520,279,5640,253,5760,253.3C5880,253,6000,279,6120,253.3C6240,228,6360,152,6480,120.3C6600,89,6720,101,6840,107.7C6960,114,7080,114,7200,145.7C7320,177,7440,241,7560,247C7680,253,7800,203,7920,158.3C8040,114,8160,76,8280,69.7C8400,63,8520,89,8580,101.3L8640,114L8640,380L8580,380C8520,380,8400,380,8280,380C8160,380,8040,380,7920,380C7800,380,7680,380,7560,380C7440,380,7320,380,7200,380C7080,380,6960,380,6840,380C6720,380,6600,380,6480,380C6360,380,6240,380,6120,380C6000,380,5880,380,5760,380C5640,380,5520,380,5400,380C5280,380,5160,380,5040,380C4920,380,4800,380,4680,380C4560,380,4440,380,4320,380C4200,380,4080,380,3960,380C3840,380,3720,380,3600,380C3480,380,3360,380,3240,380C3120,380,3000,380,2880,380C2760,380,2640,380,2520,380C2400,380,2280,380,2160,380C2040,380,1920,380,1800,380C1680,380,1560,380,1440,380C1320,380,1200,380,1080,380C960,380,840,380,720,380C600,380,480,380,360,380C240,380,120,380,60,380L0,380Z"/>
      </svg>
      <div class="nav-bg"></div>
      <nav class="navbar navbar-expand-lg text-uppercase" id="mainNav" style="max-width:2048px;">
        <div class="container" style="justify-content: center;text-align: center;flex-wrap:wrap;">
          <span class="row text-white nav-subtitle">オレンジぷらねっと劇場版公開記念 非公式アンソロジー</span>
          <a v-scroll-to="'#page-top'" href="#" style="display: block;">
            <img class="nav-logo" :src="`${getPublicImagePath()}logo.webp`" />
          </a>
        </div>
      </nav>
    </div>
  </transition>

  <!-- Menu Button -->
  <button @click="toggleMenu" id="open-menu" class="font-weight-bold bg-primary text-white rounded" type="button">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="fab fa-bars">
      <!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->
      <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/>
    </svg>
  </button>
  <transition name="menu">
    <div v-if="showMenu" id="overlay-menu-wrap">
      <div id="overlay-menu" role="navigation">
        <transition-group name="menu-items" tag="ul" @enter="menuItemsEnter" appear>
          <template v-for="(item, idx) in menuItems" :key="item.name">
            <li @click="toggleMenu" :class="{'nav-item-even': idx % 2 == 0, 'nav-item-odd': idx % 2 != 0, 'bg-primary': idx % 2 != 0}" :data-index="idx">
              <a v-scroll-to="item.scrollTo" href="#" :data-content="item.name"><span>{{ item.name }}</span></a>
            </li>
          </template>
        </transition-group>
      </div>
    </div>
  </transition>

  <!-- Masthead-->
  <header class="masthead">
    <div class="header-bg header-bg-r" :style="`background:#fff url(${getPublicImagePath()}header.webp) bottom/cover no-repeat;`"></div>
  </header>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'PageHeader',
  data() {
    return {
      showNavBar: false,
      showMenu: false,
      showScrollTopBtn: false,
      menuItems: [
        {name: 'Home', scrollTo: '#page-top'},
        {name: 'About', scrollTo: '#about'},
        {name: 'Book', scrollTo: '#book'},
        {name: 'Members', scrollTo: '#members'}
      ]
    }
  },
  created() {
    window.addEventListener('scroll', this.onScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    getPublicImagePath() {
      return process.env.VUE_APP_PUBLIC_IMAGE_PATH
    },
    onScroll() {
      // ナビゲーションメニューの表示
      this.showNavBar = window.scrollY > 100
      // TOP遷移ボタンの表示
      this.showScrollTopBtn = window.scrollY > 200
    },
    toggleMenu() {
      this.showMenu = !this.showMenu
      if (this.showMenu) {
        // TOP遷移ボタンを非表示
        this.showScrollTopBtn = false
        // スクロールバーを非表示
        document.getElementsByTagName('body')[0].style.overflow = 'hidden'
      } else {
        this.onScroll()
        // スクロールバーを表示
        document.getElementsByTagName('body')[0].style.overflow = 'visible'
      }
    },
    menuItemsEnter(el, done) {
      gsap.to(el, {
        y: 0,
        duration: 0.3,
        delay: (parseInt(el.dataset.index) + 1) * 0.2,
        ease: 'none',
        onComplete: done
      })
    }
  }
}
</script>

<style scoped>
/* navbar transition */
.navbar-enter-from, .navbar-leave-to {
  transform: translateY(-120%);
}
.navbar-enter-to, .navbar-leave-from {
  transform: translateY(0);
}
.navbar-enter-active {
  transition: all .4s ease-in-out;
}
.navbar-leave-active {
  transition: all .8s ease-in-out;
}

/* menu transition */
.menu-enter-from, .menu-leave-to {
  transform: translateY(-100%);
}
.menu-enter-to, .menu-leave-from {
  transform: translateY(0);
}
.menu-enter-active {
  transition: all .4s ease-in-out;
}
.menu-leave-active {
  transition: all .8s ease-in-out;
}
@media (max-width: 640px) {
  .menu-enter-from, .menu-leave-to {
    transform: translateX(-100%);
  }
  .menu-enter-to, .menu-leave-from {
    transform: translateX(0);
  }
}
</style>
