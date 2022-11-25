// ==UserScript==
// @name         Servo <> NR
// @namespace    https://web-mk.github.io/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://**/*
// @icon         https://consumer-tools.dowjones.net/assets/img/favicon.png
// @grant        GM_registerMenuCommand
// @downloadURL  https://web-mk.github.io/shluchim-resources/tampermonkey.js

// ==/UserScript==
function c() {
    console.log('works');
}
GM_registerMenuCommand('GB', c, 'G');
