// ==UserScript==
// @name         YtNote by YuipApps

// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/watch*

// @require      https://unpkg.com/url-parse@1.5.1/dist/url-parse.js

// @run-at       document-idle
// @noframes
// ==/UserScript==


(async () => {
    await import("https://cdn.jsdelivr.net/gh/yuis-ice/ytnote/bundle.js");
})();

