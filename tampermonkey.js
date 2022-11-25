// ==UserScript==
// @name         Servo <> NR
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://**/*
// @icon         https://consumer-tools.dowjones.net/assets/img/favicon.png
// @grant        GM_registerMenuCommand

// ==/UserScript==
function c() {
    console.log('works');
}
GM_registerMenuCommand('GB', c, 'G');
