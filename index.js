import{a as f,i as p,S as d}from"./assets/vendor-DFCQGEf1.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function m(t){return f.get("https://pixabay.com/api/",{params:{key:"50844575-9e292bfe2a1d78c665340f91a",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(y)}function y(t){const n=t.data.hits;if(n.length===0){p.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});return}return n}const s={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},g=new d(".gallery a",{});function h(t){const n=t.map(({webformatURL:i,largeImageURL:a,tags:e,likes:r,views:o,comments:c,downloads:u})=>`<li class='gallery-item'>
         <a href='${a}'>
         <img src='${i}' alt='${e}' width='360'
         />
         </a>
      <ul class='info-list'>
      
      <li class='info-item'>
         <span>Likes</span>
         <span>${r}</span>
        </li>

        <li class='info-item'>
          <span>views</span>
         <span>${o}</span>
         </li>

         <li class='info-item'>
          <span>comments</span>
         <span>${c}</span>
         </li>

         <li class='info-item'>
          <span>downloads</span>
         <span>${u}</span>
         </li>
       </ul>
      </li>`).join("");s.gallery.insertAdjacentHTML("beforeend",n),g.refresh()}function l(){s.loader.style.display="none"}function L(){s.loader.style.display="block"}function b(){s.gallery.innerHTML=""}l();s.form.addEventListener("submit",S);function S(t){t.preventDefault();const n=t.currentTarget.elements.search.value.trim();if(n===""){t.currentTarget.reset();return}L(),b(),m(n).then(h).catch(console.log).finally(l),t.currentTarget.reset()}
//# sourceMappingURL=index.js.map
