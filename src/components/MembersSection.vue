<template>
  <!-- 参加者・サンプル Section-->
  <section class="page-section" id="members">
    <div class="container">
      <!-- 参加者・サンプル Section Heading-->
      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">参加者・サンプル</h2>

      <!-- Icon Divider-->
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon">
          <icon-base viewBox="0 0 47.5 47.5" addClass="fab"><icon-orange /></icon-base>
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
                <a :href="sampleImage($IMAGE_CDN_URL, member.twitter, false)">
                  <img class="img-fluid" :src="sampleImage($IMAGE_CDN_URL, member.twitter, true)" :title="`『${member.title}』 by ${member.name }`" width="420" height="226" />
                </a>
                <p class="lead text-center">
                  {{ member.name }}<br />
                  <a class="btn btn-social btn-twitter-outline mx-1 my-2" :href="`https://twitter.com/${member.twitter}`" target="_blank">
                    <icon-base viewBox="0 0 512 512" addClass="fab fa-fw fa-twitter"><icon-twitter /></icon-base>
                  </a>
                  <a v-if="member.pixiv" class="btn btn-social btn-pixiv-outline mx-1 my-2" :style="pixivIconStyles" :href="`https://www.pixiv.net/users/${member.pixiv}`" target="_blank"></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { inject } from 'vue'
import IconBase from './IconBase.vue'
import IconOrange from './icons/IconOrange.vue'
import IconTwitter from './icons/IconTwitter.vue'
import { getImageSource } from '@/assets/js/ac18'

export default {
  components: {
    IconBase,
    IconOrange,
    IconTwitter
  },
  data() {
    return {
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
  computed: {
    pixivIconStyles() {
      const $IMAGE_CDN_URL = inject('$IMAGE_CDN_URL')
      if ($IMAGE_CDN_URL.startsWith('http')) {
        return {
          '--url': `url("${$IMAGE_CDN_URL}pixiv_icon.png")`
        }
      } else {
        return {}
      }
    }
  },
  methods: {
    sampleImage(image_cdn_url, twitter, thumb) {
      if (thumb) {
        return getImageSource(image_cdn_url, `samples/${twitter}_thumb.webp`)
      } else {
        return getImageSource(image_cdn_url, `samples/${twitter}.webp`)
      }
    }
  }
}
</script>

<style scoped>
.btn-pixiv-outline {
  --url: url('@/assets/img/pixiv_icon.png');

  background: var(--url) no-repeat;
  background-size: 1.5rem 1.5rem;
  background-position: center;
  border-color: #0096fa;
}
.btn-pixiv-outline:hover {
  background-color: #0096fa;
}
</style>
