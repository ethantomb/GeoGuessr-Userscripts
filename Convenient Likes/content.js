// ==UserScript==
// @name         Convenient Likes for GeoGuessr
// @version      0.1.0
// @author       Han75
// @license      MIT
// @description  Adds the Liked Maps button to the singleplayer page for easier access to your liked maps.
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @match        https://www.geoguessr.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geoguessr.com
// @namespace    https://greasyfork.org/en/users/973646
// ==/UserScript==

const element = `<div class="dynamic-layout_slotWrapper__QqM3S" data-rank="Secondary" data-primary-slots="1" data-secondary-slots="3" data-tertiary-slots="2" data-right-aligned-secondary-slots="true" style="max-height: 5rem"><div class="menu-item-animator_container__yUWp7 menu-item-animator_moveInScale__VPaFf" data-qa="menu-item-animator-Secondary-2" style="animation-duration: 220ms;"><a class="game-menu-button_link__08qnf" href="/me/likes"><div class="game-mode-card_container__bsswf" data-rank="Secondary"><div class="game-mode-card_logoWrapper__8CTWh" data-rank="Secondary"><picture class="logo_picture__D3DZb"><source srcset="https://i.ibb.co/2ZTwNFw/liked-Maps-Tab.png" type="image/png"><img width="720" height="320" src="https://i.ibb.co/2ZTwNFw/liked-Maps-Tab.png" alt="Streaks" class="logo_root__8odM2 logo_sizeMedium___Wdg2" https:="" i.ibb.co=""></picture></div><div class="singleplayer_cardBackground__ne75Z singleplayer_placeholderCardBackground__hvzvF"></div></div></a></div></div>`;
window.onload = function () {
    console.log("Testonload");
    // window.onhashchange = function() {
    //     console.log("test");
    //     if (window.location.href === "https://www.geoguessr.com/singleplayer") {
    //         console.log("on sngleplyr");
    //         document.querySelector(".dynamic-layout_container__jaxgg").firstChild.innerHTML += element;
    //         document.querySelector(".dynamic-layout_container__jaxgg").firstChild.style.flexDirection = "column";
    //     }
    // }

}
waitForKeyElements(".dynamic-layout_container__jaxgg", function(){
    console.log("Testwfke");
    if (window.location.href === "https://www.geoguessr.com/singleplayer") {
        console.log("TestSGNLP");
        document.querySelector(".dynamic-layout_container__jaxgg").firstChild.innerHTML += element;
        document.querySelector(".dynamic-layout_container__jaxgg").firstChild.style.flexDirection = "column";
    }
});
