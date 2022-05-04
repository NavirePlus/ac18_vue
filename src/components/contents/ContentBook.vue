<template>
  <section class="page-section mb-0 bg-light" id="book">
    <div class="container">
      <!-- 頒布情報 Section Heading-->
      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">頒布情報</h2>

      <!-- Icon Divider-->
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="fab fa-star text-warning">
            <!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->
            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
          </svg>
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
              <img class="img-fluid" :src="`${getPublicImagePath()}main_visual.webp`" width="420" height="593" />
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="fab fa-exclamation-triangle text-warning mr-1">
                  <!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->
                  <path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/>
                </svg>
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
export default {
  name: 'ContentBook',
  methods: {
    getPublicImagePath() {
      return process.env.VUE_APP_PUBLIC_IMAGE_PATH
    }
  }
}
</script>
