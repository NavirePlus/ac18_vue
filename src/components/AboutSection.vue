<template>
  <!-- 概要 Section-->
  <section class="page-section" id="about">
    <div class="container">
      <!-- 概要 Section Heading-->
      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">アンソロ概要</h2>

      <!-- Icon Divider-->
      <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <icon-base viewBox="0 0 47.5 47.5" addClass="fab"><icon-orange /></icon-base>
          </div>
          <div class="divider-custom-line"></div>
      </div>

      <!-- 概要 Section Content-->
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <p class="col-lg-10 mx-auto lead">
            『ARIA The CREPUSCOLO』の公開をささやかながらお祝いしたく立ち上げた、オレぷらの<span style="text-decoration: line-through">オレぷらによる</span>オレぷらのための非公式アンソロジーです。<br />
            様々な絵師の方々のオレンジぷらねっとの妄想や好きなところなどの思いを詰め込んだ1冊となっています！
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 頒布情報 Section-->
  <section class="page-section mb-0 bg-light" id="book">
    <div class="container">
      <!-- 頒布情報 Section Heading-->
      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">頒布情報</h2>

      <!-- Icon Divider-->
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon">
          <icon-base viewBox="0 0 576 512" addClass="fab fa-star text-warning"><icon-star /></icon-base>
        </div>
        <div class="divider-custom-line"></div>
      </div>

      <!-- 頒布情報 Section Content-->
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div class="row">
            <p class="col-lg-10 mx-auto lead text-center">
              2021年10月23日（土）に開催される<a href="http://www.aria-carnival.sakura.ne.jp/" target="_blank">ARIA CARNIVAL 18</a>にて頒布します。
            </p>
          </div>
          <div class="row">
            <div class="col-md-6 text-center">
              <img class="img-fluid" :src="getImageSource($IMAGE_CDN_URL, 'main_visual.webp')" width="420" height="593" />
            </div>
            <div class="col-md-6" style="justify-content:center;">
              <div class="col-md-10 mx-auto">
                <h4 class="my-3">仕様</h4>
                <p class="lead">
                  B5サイズ 80ページ<br />
                  表紙・口絵フルカラー<br />
                  本文モノクロ
                </p>
              </div>
              <div class="col-md-10 mx-auto">
                <h4 class="my-3">価格</h4>
                <p class="lead">1,000円</p>
              </div>
              <div class="col-md-10 mx-auto">
                <h4 class="my-3">頒布スペース</h4>
                <p class="lead">A-01「Navire Plus」</p>
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <p class="col-lg-8 mx-auto lead text-center">
              メロンブックスの委託ページは<a href="https://www.melonbooks.co.jp/detail/detail.php?product_id=1097602" target="_blank">こちら</a>。<br />
              <span class="small">
                <icon-base viewBox="0 0 576 512" addClass="fab fa-exclamation-triangle text-warning mr-1"><icon-exclamation-triangle /></icon-base>
                委託は価格が少々高めになっています。
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IconBase from './IconBase.vue'
import IconExclamationTriangle from './icons/IconExclamationTriangle.vue'
import IconOrange from './icons/IconOrange.vue'
import IconStar from './icons/IconStar.vue'
import { getImageSource } from '@/assets/js/ac18'

export default {
  components: {
    IconBase,
    IconExclamationTriangle,
    IconOrange,
    IconStar
  },
  methods: {
    "getImageSource": getImageSource
  }
}
</script>
