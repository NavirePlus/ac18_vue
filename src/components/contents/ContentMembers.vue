<template>
  <section class="page-section" id="members">
    <div class="container">
      <!-- 参加者・サンプル Section Heading-->
      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">参加者・サンプル</h2>

      <!-- Icon Divider-->
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.5 47.5" class="fab">
            <!-- Twitter Emoji - https://github.com/twitter/twemoji/tree/gh-pages -->
            <defs id="defs6"><clipPath id="clipPath16" clipPathUnits="userSpaceOnUse"><path id="path18" d="M 0,38 38,38 38,0 0,0 0,38 Z"/></clipPath></defs><g transform="matrix(1.25,0,0,-1.25,0,47.5)" id="g10"><g id="g12"><g clip-path="url(#clipPath16)" id="g14"><g transform="translate(3.9995,17.5)" id="g20"><path id="path22" style="fill:#f4900c;fill-opacity:1;fill-rule:nonzero;stroke:none" d="M 0,0 C 0,9.112 7.387,16.5 16.5,16.5 25.613,16.5 33,9.112 33,0 33,-9.113 25.613,-16.5 16.5,-16.5 7.387,-16.5 0,-9.113 0,0"/></g><g transform="translate(12.4136,29.4146)" id="g24"><path id="path26" style="fill:#662113;fill-opacity:1;fill-rule:nonzero;stroke:none" d="m 0,0 c -0.267,0.267 -0.797,0.197 -1.355,-0.12 -3.3,2.732 -8.653,3.652 -8.895,3.692 -0.546,0.09 -1.059,-0.277 -1.15,-0.821 -0.091,-0.544 0.276,-1.06 0.821,-1.151 0.053,-0.01 4.933,-0.854 7.821,-3.16 -0.275,-0.525 -0.324,-1.015 -0.07,-1.268 0.39,-0.391 1.34,-0.074 2.121,0.707 C 0.074,-1.34 0.391,-0.39 0,0"/></g><g transform="translate(22,36.0005)" id="g28"><path id="path30" style="fill:#5c913b;fill-opacity:1;fill-rule:nonzero;stroke:none" d="M 0,0 C 0,0 -3.106,-4.318 -7.021,-5.273 -10,-6 -13.959,-6.07 -14.354,-5.151 c -0.394,0.919 1.572,3.937 4.969,5.393 C -5.988,1.698 0,0 0,0"/></g></g></g></g>
          </svg>
        </div>
        <div class="divider-custom-line"></div>
      </div>

      <!-- 参加者・サンプル Section Content-->
      <div class="row justify-content-center">
        <div class="col-lg-10 mx-auto">
          <div class="row">
            <p class="col-lg-10 mx-auto lead text-center">（敬称略）</p>
          </div>
          <div class="row">
            <div v-for="member in members" :key="member.name" class="col-lg-6 my-2" style="border-bottom: 1px dashed #888;">
              <div class="portfolio-item mx-auto text-center">
                <img @click="openModal(member.twitter)" class="img-fluid" :src="`${getPublicImagePath()}samples/${member.twitter}_thumb.webp`" :title="`『${member.title}』 by ${member.name }`" width="420" height="226" />
                <p class="lead text-center">
                  {{ member.name }}<br />
                  <a class="btn btn-social btn-twitter-outline mx-1 my-2" :href="`https://twitter.com/${member.twitter}`" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fab fa-fw fa-twitter">
                      <!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                    </svg>
                  </a>
                  <a v-if="member.pixiv" class="btn btn-social btn-pixiv-outline mx-1 my-2" :href="`https://www.pixiv.net/users/${member.pixiv}`" target="_blank" :style="`background: url(${getPublicImagePath()}pixiv_icon.png) center/1.5rem 1.5rem no-repeat;`"></a>
                </p>
              </div>
              <image-modal :img_src="postImageItem" v-show="showImageModal" @close="closeModal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImageModal from './ImageModal.vue'

export default {
  name: 'ContentMembers',
  components: {
    ImageModal
  },
  data() {
    return {
      showImageModal: false,
      postImageItem: '',
      members: [
        {
          name: "アヤ",
          twitter: "aya5413",
          pixiv: "71167",
          title: "アーニャのひみつのキモチとかくしごと"
        },
        {
          name: "雨之炎",
          twitter: "rainazel",
          pixiv: "8375",
          title: "その オレンジづくしは…"
        },
        {
          name: "おいつき",
          twitter: "getsu_men",
          pixiv: "86873",
          title: "天才の先輩"
        },
        {
          name: "神楽",
          twitter: "aanima",
          pixiv: "191902",
          title: "arancia amico"
        },
        {
          name: "河原水面",
          twitter: "nyamo_no_hashi",
          pixiv: "",
          title: "ARIA The ABBREVIARE"
        },
        {
          name: "きょう",
          twitter: "kyou_watanuki",
          pixiv: "3659790",
          title: "あの丘で』『少女と魔女ベファーナ"
        },
        {
          name: "コオロギ",
          twitter: "rogi_rk",
          pixiv: "911373",
          title: "特訓"
        },
        {
          name: "ごえたむ",
          twitter: "goetamu",
          pixiv: "5194824",
          title: "でっかいドジっ子です"
        },
        {
          name: "しのざきあきら",
          twitter: "sinozaki_",
          pixiv: "13217",
          title: "不機嫌姫とでっかいおしおき"
        },
        {
          name: "世良ユッカ",
          twitter: "yucca24",
          pixiv: "141726",
          title: "旋律の赤い糸"
        },
        {
          name: "立花なつき",
          twitter: "bananatsukis",
          pixiv: "5472647",
          title: "オレぷらてぇてぇ"
        },
        {
          name: "七氏の権米",
          twitter: "nana4_san",
          pixiv: "12396262",
          title: "その オレンジな朝の後は…"
        },
        {
          name: "菜花ゆな",
          twitter: "nabayuna",
          pixiv: "573574",
          title: "side A"
        },
        {
          name: "ひなた",
          twitter: "kiri_meee",
          pixiv: "402754",
          title: "秘密の花園"
        },
        {
          name: "フジヒロミト",
          twitter: "fujihiro_mito",
          pixiv: "162541",
          title: "わたしだけの一番星"
        },
        {
          name: "まき",
          twitter: "makiyan_24",
          pixiv: "664711",
          title: "朝日をむかえて"
        },
        {
          name: "みやの",
          twitter: "yomuyom",
          pixiv: "",
          title: "いつも となりに"
        },
        {
          name: "モチオ",
          twitter: "mochio0000",
          pixiv: "634813",
          title: "先輩ちゃんと後輩ちゃん0"
        },
        {
          name: "よーねひさぎ",
          twitter: "yohne_hisagi",
          pixiv: "108973",
          title: "愛のシュプリーム！"
        },
        {
          name: "cielo（主宰）",
          twitter: "cielo_fox",
          pixiv: "",
          title: "-MUKKUN-"
        }
      ]
    }
  },
  methods: {
    getPublicImagePath() {
      return process.env.VUE_APP_PUBLIC_IMAGE_PATH
    },
    openModal(twitter) {
      this.showImageModal = true
      this.postImageItem = `${this.getPublicImagePath()}samples/${twitter}.webp`
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    },
    closeModal() {
      this.showImageModal = false
      document.getElementsByTagName('body')[0].style.overflow = 'visible'
    }
  }
}
</script>
