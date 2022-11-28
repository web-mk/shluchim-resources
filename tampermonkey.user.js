
// ==UserScript==
// @name         Dow Jones Bookmarklets
// @namespace    https://consumer-tools.dowjones.net
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://**/*
// @icon         https://consumer-tools.dowjones.net/assets/img/favicon.png
// @grant        GM_registerMenuCommand
// @downloadURL  https://consumer-tools.dowjones.net/bookmarklets.user.js
// @run-at       document-start

// @match        https://www.wsj.com/*
// @match        https://www.barrons.com/*
// @match        https://www.fnlondon.com/*
// @match        https://www.penews.com/*
// @match        https://www.marketwatch.com/*
// @match        https://www.mansionglobal.com/*
// @match        https://cn.wsj.com/*
// @match        https://jp.wsj.com/*
// @match        https://newrelic.com/*
// @match        https://next.onservo.com/*
// @match        https://www.s.dev.wsj.com/*
// @match        https://www.s.dev.barrons.com/*
// @match        https://www.s.dev.fnlondon.com/*
// @match        https://www.s.dev.penews.com/*
// @match        https://www.s.dev.marketwatch.com/*
// @match        https://www.s.dev.mansionglobal.com/*
// @match        https://cn.s.dev.wsj.com/*
// @match        https://jp.s.dev.wsj.com/*
if (["https://www.wsj.com","https://www.barrons.com","https://www.fnlondon.com","https://www.penews.com","https://www.marketwatch.com","https://www.mansionglobal.com","https://cn.wsj.com","https://jp.wsj.com"].some(d => window.location.href.startsWith(d))) {
  GM.registerMenuCommand('SBID Getter', !function(){const e=document.createRange(),c=Array.from(document.querySelectorAll("meta")),p=c.find(e=>"article.id"===e.name)?.content;var t=!!document.getElementById("__next");const l="https://consumer-tools.dowjones.net/publishing/";let m="";var t=t?(t=document.location.host.startsWith("www.wsj.com")||document.location.host.startsWith("next.wsj.com"),o=document.location.host.startsWith("dev.next.wsj.com"),i=t?"https://shared-data.dowjones.io/gateway/graphql":"https://dev.shared-data.dowjones.io/gateway/graphql",a=`{"id": "${p}${t?"":"_PROD_"}", "idType": "originid"}`,i=`<a href="#" onclick="window.open('${encodeURI(i+"?query=query getCapiArticle($id:ID!,$idType:ContentIdType!){article:getCapiArticle(id:$id,idType:$idType){meta{properties{...on code{type symbol seoname codeType properties}...on djii{type dJII}...on subject{type value properties}}type,metrics codes{code code_with_significance}}data{id type attributes{alt_summaries authors{id text type configuration{seoname emailaddress facebookaccount twitterhandle hedcutimage}}availability_flags article_type{name seoName parameters{page section displayName hedcut}link svg{lightSvg darkSvg aspectRatio}}body byline column_name flashline keywords live_datetime_utc print_headline print_publication_date product published_datetime_utc updated_datetime_utc relay_codes{type item_id properties{code codetype}}seo_id source_url headline sub_headline original_headline page section_name section_type sidecar_config{properties}standfirst template type_display_name type upstream_origin upstream_origin_id}}ribbon_data{properties}links{self,related{...on author{type id name}...on company{type id name significance}...on image{type id media_type reuse_type slug name width height size_code alternate_text credit caption link_ref hed alt_images{name link_ref width height size_code url}properties src{image_id path base_url params}}...on inset{type id inset_type properties}...on instrument{type id name significance instrument_type}...on investor{type id name significance}...on link{type id uri variant}...on media{id media_type name reuse_type slug properties type size_code caption width height alt_images{name link_ref width height size_code url}}...on person{type id name first_name last_name display_name significance seo_name confidence name_format}...on video{type id media_type slug name width height size_code alternate_text credit caption link_ref hed alt_images{name link_ref width height size_code url}title api preloaded properties video_service_props{format atmospheric caption name}}...on videobyguid_inset{type id inset_type video_service_props{format atmospheric caption name}}...on dynamic_inset{type id dynamic_inset_properties{resolvedInset{strippedHTML scripts}}}}}}}&variables="+a)}', '_blank');">Data Layer</a>`,a=` <a target="_blank" href="${l+"pubedit_proxy?url="+encodeURIComponent(`https://article-${t?"i.prod":"e.int"}.pubedit.dowjones.io/article/Djml/by/sbId/`+p)}">DJML</a>`,n=t?`<a target="_blank" href="https://dev.next.wsj.com/articles/${p}_PROD_">SAT</a>`:"",o=o?"":`<a target="_blank" href="https://local.wsj.com:3000/articles/${p}${t?"_PROD_":""}">Local</a>`,{stack:"Article Generator",dataSources:i+" "+a,envs:p?n+" "+o:"Not available on non article pages yet."}):function(){(d="prod"===document.documentElement.dataset.env)&&(m="_PROD_");var e="development"===document.documentElement.dataset.env;const t=c.find(e=>"servo-context"===e.name)?.content;var[,i,a,n,o]=(t||"").split(":"),i=`https://next.onservo.com/orgs/${i}/regions/${a}/apps/${n}/stacks/${o}/deploys`,a=`https://allesseh-api.${d?"":"dev."}content.dowjones.io`,o=`<a target="_blank" href="${n=l+"allesseh_proxy?url="+encodeURIComponent(a+"/api/Articles/v1/wsj/originid/"+p)}">Allesseh/CAPI</a>`,a=`<a target="_blank" href="${n+"&convertCapi=true"}">CAPI Converter</a>`,n=` <a target="_blank" href="${l+"pubedit_proxy?url="+encodeURIComponent(`https://article-${d?"i.prod":"e.int"}.pubedit.dowjones.io/article/Djml/by/sbId/`+p)}">DJML</a>`,r=d?`<a target="_blank" href="https://www.s.dev.wsj.com/articles/${p}_PROD_">SAT</a>`:"",e=e?"":`<a target="_blank" href="https://local.wsj.com:8888/articles/${p}${d?"_PROD_":""}">Local</a>`,s='<a id="pr-stack">PR Stack</a>',d=`<a target="_blank" href="${d?`https://www.wsj.com/articles/${p}?next_redirect=true`:"https://dev.next.wsj.com/articles/"+p}">NEXT</a>`;return{stack:`<a target="_blank" href="${i}">${t}</a>`,dataSources:o+` ${a} `+n,envs:p?r+` ${e} ${s} `+d:s}}(),i=`
<style>
  #sb-getter-contain {
    width: 100vw;
    height: 100vh;
    background: rgb(232 232 232 / 0.6);
    position: fixed;
    top: 0; left: 0;
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #sb-getter {
    padding: 30px 20px;
    font-family: "Inter UI", -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    background: white;
    box-shadow: rgba(0,0,0,0.10) 0 1px 3px 0;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 4px;
    width: 600px;
    margin: auto;
    position: relative;
  }
  #sb-getter a {
    font-weight: 500;
    padding: 4px;
    margin: 0 3px;
    font-size: 16px;
    border-radius: 2px;
    text-decoration: none;
    display: inline-block;
    color: #5755d9;
    cursor: pointer;
  }
  #sb-getter a:after {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%235755d9' viewBox='0 0 16 16'%3E%3Cpath d='M11.057 7.333l-3.529-3.529c-0.26-0.26-0.26-0.682 0-0.943s0.682-0.26 0.943 0l4.667 4.667c0.26 0.26 0.26 0.682 0 0.943l-4.667 4.667c-0.26 0.26-0.682 0.26-0.943 0s-0.26-0.682 0-0.943l3.529-3.529h-7.724c-0.368 0-0.667-0.298-0.667-0.667s0.298-0.667 0.667-0.667z'%3E%3C/path%3E%3C/svg%3E");
    content: '';
    width: 18px;
    height: 15px;
    margin-left: 8px;
    position: relative;
    top: 2px;
    background-repeat: no-repeat;
    display: inline-block;
  }
  #sb-getter a:hover {
    background: #eeeefb;
  }
  #sb-getter #id-container {
    margin-bottom: 10px;
    font-size: 13px;
    border: 1px solid #dfe6e9;
    border-width: 0 0 1px 0;
    color: #636e72;
    padding: 12px 0 12px 24px;
  }
  #stack-container {
    font-size: 12px;
    color: #636e72;
    margin-top: 5px;
  }
  #stack-container a {
    color: inherit;
    font-size: inherit;
    font-weight: normal;
    padding: 0;
  }
  #stack-container a:after {
    display: none;
  }
  #stack-container a:hover {
    text-decoration: underline;
    background: no-repeat;
  }
  .sb-getter-topright {
    position: absolute;
    top: 20px;
    right: 30px;
  }
  #sb-getter-close {
    border: none;
    background: transparent;
    font-size: 40px;
    color: #666;
  }
  .sb-links {
    padding: 16px 24px 24px 24px;
  }
  .sb-links h3 {
    font-weight: 600;
    margin-bottom: 10px;
  }
  .sb-links h3:not(:first-child) {
    margin-top: 20px;
  }
  </style>`,a=`
<div class="sb-getter-topright">
  <button id="sb-getter-close">&times;</button>
</div>`,n=`
<div id="sb-getter-outer">
  ${i}
  <div id="sb-getter-contain">
    ${a}
    <div id="sb-getter">
      <div>
        <div id="id-container">
          <div><strong>ID:</strong> ${p}</div>
          <div id="stack-container">
            <strong>Stack:</strong>
            ${t.stack}
          </div>
        </div>
        <div class="sb-links">
          <h3>Article Data Sources</h3>
          ${t.dataSources}
          <h3>View Article in Other Environments</h3>
          ${t.envs}
        </div>
      </div>
    </div>
  </div>
</div>
`,o=`
<div id="sb-getter-outer">
  ${i}
  <div id="sb-getter-contain">
    ${a}
    <div id="sb-getter">
      <div id="id-container">
      <div id="stack-container">
      <strong>Stack:</strong>
      ${t.stack}
    </div>
      </div>
      <div class="sb-links">
        <h3>View on PR Stack</h3>
        ${t.envs}
      </div>
    </div>
  </div>
</div>
`,t=e.createContextualFragment(p?n:o),r=e=>{"sb-getter-contain"!==e.target.id&&"sb-getter-close"!==e.target.id||document.querySelector("#sb-getter-outer").remove()};document.body.insertBefore(t,document.body.firstChild),document.querySelector("#sb-getter-close").addEventListener("click",r),document.querySelector("#sb-getter-contain").addEventListener("click",r);document.getElementById("pr-stack").addEventListener("click",()=>{var e=p?"article":"grandcanyon",t=p?"article":"grand-canyon",e=`x-akanode-override-${e}-origin`,t=`int-pr${window.prompt("Enter PR number")}-${t}.ore-dev.onservo.com`,i=window.location.search.includes(e)?"":window.location.search,e=(i?"&":"?")+e+"="+t,t=window.location.host.split("."),t=t[t.length-2];let a=`https://www.s.dev.${t}.com/articles/`+p+m;p||(a=`https://www.s.dev.${t}.com`+window.location.pathname),window.open(""+a+i+e,"_blank")})}();, 'S');
}
if (["https://www.wsj.com","https://www.barrons.com","https://www.fnlondon.com","https://www.penews.com","https://www.marketwatch.com","https://www.mansionglobal.com","https://cn.wsj.com","https://jp.wsj.com"].some(d => window.location.href.startsWith(d))) {
  GM.registerMenuCommand('Paywall Override', fetch("https://github.dowjones.net/api/v3/repos/revenue-dev/cxense-paywall-rules/contents/rules.json").then(e=>e.json()).then(e=>{let n=JSON.parse(atob(e.content)).innerSettings.branches,t=window.location,o;for(let e=0;e<n.length;e++)if(0===n[e].comment.indexOf("Development Override")){o=n[e].condition.categories[0];break}const i=t.search.split(/[?&]/).filter(e=>e&&0!==e.indexOf("mod="));i.push("mod="+o);e="?"+i.join("&");window.location=t.protocol+"//"+t.host+t.pathname+e});, 'P');
}
if (["https://www.wsj.com","https://www.barrons.com","https://www.fnlondon.com","https://www.penews.com","https://www.marketwatch.com","https://www.mansionglobal.com","https://cn.wsj.com","https://jp.wsj.com"].some(d => window.location.href.startsWith(d))) {
  GM.registerMenuCommand('GC Article Data', !function(){const r=()=>{let t=document.getElementById("gc-data-scrim");t?.parentNode&&t.parentNode.removeChild(t)};window.addEventListener("click",t=>{(t=>{const e=document.getElementById("gc-data-scrim");return t.some(t=>t.isEqualNode?.(e))})(t.path)||t.preventDefault();t=t.target.closest("article"),t=i(t);if(t){r();var e=s(t);{var[{article:t,collection:e},a]=[t,e];const o=document.createRange();t=o.createContextualFragment(`
    <div id="gc-data-scrim">
      <button id="scrim-close">×</button>
      <div class="scrim-container">
        <div>
          <h3>Article Data</h3>
          <div class="gc-details"><strong>Article ID:</strong> ${t.data.articleId}</div>
          <div class="gc-details"><strong>Timestamp:</strong> ${new Date(t.data.timestamp).toLocaleString()}</div>
          <div class="data-sources">
            <a class="data-source" target="_blank" href="${a.article.dp}">Data Provider</a>
            <a class="data-source" target="_blank" href="${a.article.more}">More Sources</a>
          </div>
        </div>
        <div>
          <h3>Collection Data</h3>
          <div class="gc-details"><strong>ID:</strong> ${e.id}</div>
          <div class="gc-details"><strong>Type:</strong> ${e.type}</div>
          <div class="data-sources">
            <a class="data-source" target="_blank" href="${a.collection.dp}">Data Provider</a>
            ${a.collection.fpList?`<a class="data-source" target="_blank" href="${a.collection.fpList}">Frontpage API List</a>`:""}
            ${a.collection.more?`<a class="data-source" target="_blank" href="${a.collection.more}">More Sources</a>`:""}
          </div>
        </div>
      </div>
    </div>
  `),document.body.insertBefore(t,document.body.firstChild),document.querySelector("#scrim-close").addEventListener("click",r)}}});const i=t=>{t=(t=>{for(var e in t)if(e.startsWith("__reactInternalInstance$"))return t[e].return.stateNode.props.content;return null})(t);if(t)return{article:t,collection:function(a){let o;return Object.keys(grandcanyon.state.data).forEach(e=>{Array.isArray(grandcanyon.state.data[e].data.collection)&&grandcanyon.state.data[e].data.collection.forEach(t=>{t.type+"_"+t.id===a&&(o=grandcanyon.state.data[e])})}),o}(t.type+"_"+t.id).data}},n=(t,e)=>""+window.location?.origin+window.location?.pathname+`?id=${encodeURIComponent(t)}&type=`+encodeURIComponent(e),c=t=>"https://consumer-tools.dowjones.net/data_sources?id="+t,s=({article:t,collection:e})=>{console.log(e);let a="",o="";var r,i;return"collection_frontpage_full"===e.type&&({name:r,collectionType:i}=JSON.parse(e.id)||{},a=r,"multi"===i&&(o="https://int-prod-frontpage-api.vir.onservo.com/collectionlist/"+r)),{article:{dp:n(t.id,t.type),more:c(t.id)},collection:{dp:n(e.id,e.type),more:a&&!o&&c(a),fpList:o}}};{const e=document.createRange();var t=e.createContextualFragment(`
  <style>
      article:hover, article:hover a {
        cursor: crosshair !important;
      }
      #gc-data-scrim {
        position: fixed;
        width: 100vw;
        height: 220px;
        bottom: 0;
        left: 0;
        background: white;
        z-index: 9999;
        font-family: system-ui;
        border: 1px solid rgba(0,0,0,.1);
        padding: 30px;
        box-sizing: border-box;
        color: #2d3436;
        overflow-y: scroll;
      }
      .scrim-container {
        max-width: 1260px;
        margin: auto;
        display: flex;
      }
      .scrim-container div {
        flex: 1;
      }
      #gc-data-scrim h3 {
        font-weight: 400;
        margin-bottom: 10px;
        font-size: 20px;
      }
      #gc-data-scrim h3:not(:first-child) {
        margin-top: 20px;
      }
      #scrim-close {
        position: absolute;
        right: 20px;
        background: none;
        border: 0;
        font-size: 25px;
        top: 20px;
        cursor: pointer;
        color: #636e72;
      }
      .gc-details {
        line-height: 1.4;
        font-family: monospace;
      }
      .gc-details strong {
        font-family: system-ui;
      }
      a.data-source {
        font-weight: 500;
        padding: 4px;
        margin: 0 3px;
        font-size: 16px;
        border-radius: 2px;
        text-decoration: none;
        display: inline-block;
        color: #5755d9;
        cursor: pointer;
      }
      a.data-source:after {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%235755d9' viewBox='0 0 16 16'%3E%3Cpath d='M11.057 7.333l-3.529-3.529c-0.26-0.26-0.26-0.682 0-0.943s0.682-0.26 0.943 0l4.667 4.667c0.26 0.26 0.26 0.682 0 0.943l-4.667 4.667c-0.26 0.26-0.682 0.26-0.943 0s-0.26-0.682 0-0.943l3.529-3.529h-7.724c-0.368 0-0.667-0.298-0.667-0.667s0.298-0.667 0.667-0.667z'%3E%3C/path%3E%3C/svg%3E");
        content: '';
        width: 18px;
        height: 15px;
        margin-left: 8px;
        position: relative;
        top: 2px;
        background-repeat: no-repeat;
        display: inline-block;
      }
      a.data-source:hover {
        background: #eeeefb;
      }
      a.data-source:first-of-type {
        margin-left: 0;
      }
      .data-sources {
        margin-top: 10px;
      }
    </style>
  `);document.body.insertBefore(t,document.body.firstChild)}}();, 'G');
}
if (["https://newrelic.com","https://next.onservo.com"].some(d => window.location.href.startsWith(d))) {
  GM.registerMenuCommand('Servo ↔ New Relic', !function(){if(window.location.href.includes("newrelic")){const[t]=document.title.split("<");var[,o,n,e,i]=t.trim().split(":");window.open(`https://next.onservo.com/orgs/${o}/regions/${n}/apps/${e}/stacks/${i}/deploys`)}else window.location.href.includes("next.onservo.com")&&([,,,,o,,n,,e,,i]=window.location.href.split("/"),o=`https://one.newrelic.com/nr1-core?duration=1800000&filters=%28name%20LIKE%20%27${encodeURIComponent(`servo:${o}:${n}:${e}:`+i)}%27%29`,window.open(o))}();, 'N');
}
if (["https://www.wsj.com","https://www.barrons.com","https://www.fnlondon.com","https://www.penews.com","https://www.marketwatch.com","https://www.mansionglobal.com","https://cn.wsj.com","https://jp.wsj.com"].some(d => window.location.href.startsWith(d))) {
  GM.registerMenuCommand('Paywall Information', !function(){var a=utag_data.cx_shield;let t;if(a){var a=JSON.parse(a),n=document.querySelector('meta[name="article.access"]');let e="None";try{var o=JSON.parse(atob(decodeURIComponent(document.cookie.match(/usr_prof_v2=([^;]+)/)[1])));o&&o.p&&(e=parseInt(10*o.p.ps,10))}catch{e="Unknown"}t=`
    Campaign: ${a.campaign}<br>
    Placement: ${a.placement}<br>
    Tag: ${a.tag}<br>
    PaywallType: ${a.paywallType}<br>
    A/B Bucket: ${utag_data.ab_bucket||"Unknown"}<br>
    Acquisition Propensity: ${e}
  `,n&&"freeforever"===n.content&&(t+="<br><br><strong>Free Forever</strong>")}else t="Dynamic paywall not detected. You are either logged in as a subscriber or not on an article page.";const e=document.createElement("div");e.innerHTML=`
  <style>
    .cxShieldInfo {
      position: absolute;
      border:2px;
      top: 0vw;
      left: 0vw;
      width: 100%;
      background-color: #383838;
      color: #fff;
      z-index: 999999;
      padding: 10px;
    }
  </style>
  ${t}
`,e.classList.add("cxShieldInfo"),document.body.appendChild(e)}();, 'I');
}
if (["https://next.onservo.com"].some(d => window.location.href.startsWith(d))) {
  GM.registerMenuCommand('Deploy ↔ Main', !function(){if(window.location.pathname.includes("/deploys")){var a=document.querySelector('svg[aria-label="Github"]');if(a){let e=a.parentElement.href;e=e.replace(/commit/,"compare"),e+="...main",window.open(e)}else window.alert("Markup on servo-next page changed. Please alert bookmarklet creator")}else window.alert("Not on deploys page")}();, 'D');
}
if (["https://www.s.dev.wsj.com","https://www.s.dev.barrons.com","https://www.s.dev.fnlondon.com","https://www.s.dev.penews.com","https://www.s.dev.marketwatch.com","https://www.s.dev.mansionglobal.com","https://cn.s.dev.wsj.com","https://jp.s.dev.wsj.com"].some(d => window.location.href.startsWith(d))) {
  GM.registerMenuCommand('Akanode Override', !function(){let o="x-akanode-override-grandcanyon-origin",n="grand-canyon";"article"===document.documentElement.dataset?.layouttype&&(o="x-akanode-override-article-origin",n="article");var e=`int-pr${window.prompt("Enter PR number")}-${n}.ore-dev.onservo.com`,r=window.location.search?"&":"?";window.location.href=window.location.href+r+o+"="+e}();, 'A');
}
if (["https://www.s.dev.wsj.com","https://www.s.dev.barrons.com","https://www.s.dev.fnlondon.com","https://www.s.dev.penews.com","https://www.s.dev.marketwatch.com","https://www.s.dev.mansionglobal.com","https://cn.s.dev.wsj.com","https://jp.s.dev.wsj.com"].some(d => window.location.href.startsWith(d))) {
  GM.registerMenuCommand('Next Redirect', !function(){const a=new URLSearchParams(location.search);a.append("next_redirect",!0),location.assign(location.pathname+"?"+a)}();, 'N');
}
if (["https://www.wsj.com","https://www.barrons.com","https://www.fnlondon.com","https://www.penews.com","https://www.marketwatch.com","https://www.mansionglobal.com","https://cn.wsj.com","https://jp.wsj.com"].some(d => window.location.href.startsWith(d))) {
  GM.registerMenuCommand('Parse.ly Overlay', !function(){var t=document.createElement("script");t.setAttribute("src","https://dash.parsely.com/static/build/overlay.js?v="+Date.now()),document.body.appendChild(t)}();, 'L');
}
if (["https://www.wsj.com","https://www.barrons.com","https://www.fnlondon.com","https://www.penews.com","https://www.marketwatch.com","https://www.mansionglobal.com","https://cn.wsj.com","https://jp.wsj.com"].some(d => window.location.href.startsWith(d))) {
  GM.registerMenuCommand('Set AB Bucket', !function(){var x=parseInt(prompt("Please enter a bucket value in the range 0 to 99"));if(isNaN(x)||x<0||99<x)alert("Invalid bucket value provided");else{let e;for(;!e;){const n="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;const x="x"==e?t:3&t|8;return x.toString(16)});let t=0;for(let e=0;e<n.length;e++)t=(t<<5)-t+n.charCodeAt(e),t|=0;Math.abs(t)%100===x&&(e=n)}var t="."+document.domain.match(/[^\.]*\.[^\.]*$/)[0];const a=new Date;a.setTime(a.getTime()+31536e6),document.cookie=`ab_uuid=${e}; domain=${t}; path=/; expires=${a.toUTCString()};`,alert("AB Bucket Value Set to "+x)}}();, 'A');
}
if (["https://www.wsj.com","https://www.barrons.com","https://www.fnlondon.com","https://www.penews.com","https://www.marketwatch.com","https://www.mansionglobal.com","https://cn.wsj.com","https://jp.wsj.com"].some(d => window.location.href.startsWith(d))) {
  GM.registerMenuCommand('Set Propensity Score', !function(){var e=parseInt(prompt("Please enter propensity value in the range 1 to 10"));if(isNaN(e)||e<1||10<e)return alert("Invalid propensity value provided");var t=document.cookie.match(/usr_prof_v2=([^;]+)/)?.[1];if(!t)return alert("No profile cookie set, refresh page and try again");var t=JSON.parse(atob(decodeURIComponent(t)))["ic"],t=encodeURIComponent(btoa(JSON.stringify({p:{ps:e/10,q:1},ic:t}))),o="."+document.domain.match(/[^\.]*\.[^\.]*$/)[0];const r=new Date;r.setTime(r.getTime()+36e5),document.cookie=`usr_prof_v2=${t}; domain=${o}; path=/; expires=${r.toUTCString()};`,alert("Propensity Score Set to "+e)}();, 'R');
}
