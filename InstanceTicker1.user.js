// ==UserScript==
// @name         #InstanceTicker (Type-1) user.js 
// @namespace    https://github.com/tmp/
// @version      201901292039
// @description  #InstanceTicker とは、Mastodon タイムライン上の投稿者のみなさんに所属インスタンス名を彩るカスタムCSSです。
// @author       kaias1jp
//
// @license      Original CSS © https://odakyu.app/@ars42525 and #InstanceTicker © 2018 https://weep.me/@weep Released under the MIT license https://opensource.org/licenses/MIT
//
// @match        https://mastodon.social/*
// @match        https://mastodon.cloud/*
// @match        https://mastodon.club/*
// @match        https://mastodon.host/*
// @match        https://mastodon.moe/*
// @match        https://mastodon.xyz/*
// @match        https://mastodon.art/*
// @match        https://masto.pt/*
// @match        https://ika.moe/*
// @match        https://switter.at/*
// @match        https://octodon.social/*

// @match        https://mstdn.jp/*
// @match        https://mstdn.cc/*
// @match        https://mstdn.fm/*
// @match        https://mstdn.tw/*
// @match        https://mstdn.io/*

// @match        https://mstdn.club/*
// @match        https://mstdn.blue/*
// @match        https://mstdn.beer/*
// @match        https://mstdn.guru/*
// @match        https://mstdn.love/*

// @match        https://pawoo.net/*
// @match        https://music.pawoo.net/*
// @match        https://friends.nico/*
// @match        https://mstdn.maud.io/*
// @match        https://*.theboss.tech/*
// @match        https://knzk.me/*

// @match        https://*.masto.host/*
// @match        https://*.m.to/*
// @match        https://*.hostdon.jp/*
// @match        https://*.mstdn.cloud/*
// @match        https://*.mastportal.info/*
// @match        https://*.chotto.moe/*

// @match        https://now.kibousoft.co.jp/*
// @match        https://mastodon.juggler.jp/*
// @match        https://alserver.jp/*
// @match        https://abyss.fun/*
// @match        https://mstdn.kemono-friends.info/*
// @match        https://mstdn.hokkaido.jp/*
// @match        https://iwatedon.net/*
// @match        https://tokamstdn.jp/*
// @match        https://ashikaga.link/*
// @match        https://odakyu.app/*
// @match        https://itabashi.0j0.jp/*
// @match        https://mstdn.tokyo/*
// @match        https://east.mstdn.tokyo/*
// @match        https://mstdn.ikebuku.ro/*
// @match        https://mstdn.msky.tokyo/*
// @match        https://mastodon.yokohama/*
// @match        https://tekkadon.manimani.cc/*
// @match        https://sukadon.cf/*
// @match        https://nagoyadon.jp/*
// @match        https://mstdn.osaka/*
// @match        https://minohdon.jp/*
// @match        https://ngndn.jp/*
// @match        https://biwakodon.com/*
// @match        https://mstdn-kanazawa.jp/*
// @match        https://mastodos.com/*
// @match        https://mastodon.wakayama.jp/*
// @match        https://mastodon.nara.jp/*
// @match        https://mstdn.hyogo.jp/*
// @match        https://mstdn.sanin.link/*
// @match        https://shikokudon.m.to/*
// @match        https://mstdn.fukuoka.jp/*
// @match        https://mastodon.oita.jp/*
// @match        https://mstdn.miyazaki.jp/*
// @match        https://tegedon.net/*

// @match        https://vocalodon.net/*
// @match        https://mikuspot.net/*
// @match        https://mikumikudance.cloud/*

// @match        https://mimumedon.com/*
// @match        https://kirakiratter.com/*
// @match        https://ro-mastodon.puyo.jp/*
// @match        https://qiitadon.com/*
// @match        https://hearthtodon.com/*
// @match        https://mathtod.online/*
// @match        https://imastodon.net/*
// @match        https://mstdn.tokyocameraclub.com/*
// @match        https://mstdn.poyo.me/*
// @match        https://hearthtodon.com/*
// @match        https://ffxiv-mastodon.com/*
// @match        https://ukadon.shillest.net/*
// @match        https://ro-mastodon.puyo.jp/*
// @match        https://ichiji.social/*
// @match        https://matchdon.com/*
// @match        https://otoya.space/*
// @match        https://mstdn.mimikun.jp/*
// @match        https://kirishima.cloud/*
// @match        https://doll.social/*
// @match        https://mastodoll.net/*
//
// @match        https://gorone.xyz/*
// @match        https://mstdn.inct-densan.club/*
// @match        https://fla.red/*
// @match        https://gingadon.com/*
// @match        https://pao.moe/*
// @match        https://dotdon.jp/*
// @match        https://misskey.xyz/*
//
// @resource     CCSS1 https://raw.githubusercontent.com/weepjp/InstanceTicker/master/InstanceTicker1.css
// @resource     CCSS2 https://socialapi.app/api/instanceticker/css/userjs/it.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
//
//
/****************************************************
 * InstanceTicker1.user.js                          *
 * https://github.com/weepjp/InstanceTicker         *
 ****************************************************/
//
//
/****************************************************
 * ようやく、Type-1 の user.js バージョンです。。。。。 *
 ****************************************************/
//
//
// ==/UserScript==

// ここに処理を記載する
(function(){
  if (location.href.match(/misskey.xyz/)) {
    GM_addStyle(GM_getResourceText('CCSS2'));
  } else {
    GM_addStyle(GM_getResourceText('CCSS1'));
  }
})();


