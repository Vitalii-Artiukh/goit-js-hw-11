import{S as u,i as n}from"./assets/vendor-f33cd494.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="https://pixabay.com/api/",p="45488193-7ca777789e7fbcf45aeeb8195",d=s=>{const o=new URLSearchParams({key:p,q:s,image_type:"photo",safesearch:!0,orientation:"horizontal"});return fetch(`${m}?${o}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})},f=s=>`<li class="gallery-card">
            <a href="${s.largeImageURL}" class="gallery-link">
              <img class="image-normal" src="${s.webformatURL}" alt="${s.tags}"/>
              <ul class="image-text">
                <li class="image-text-item">
                  <p class="key key-likes">Likes</p>
                  <p class="value value-likes">${s.likes}</p>
                </li>
                <li class="image-text-item">
                  <p class="key key-views">Viwes</p>
                  <p class="value value-views">${s.views}</p>
                </li>
                <li class="image-text-item">
                  <p class="key key-comments">Comments</p>
                  <p class="value value-comments">${s.comments}</p>
                </li>
                <li class="image-text-item">
                  <p class="key key-downloads">Downloads</p>
                  <p class="value value-downloads">${s.downloads}</p>
                </li>
              </ul>
            </a>
          </li>`,c=document.querySelector(".js-search-form"),y=document.querySelector(".js-gallery"),i=document.querySelector(".preloader-wrap"),h=new u(".js-gallery a",{captionsData:"alt",captionDelay:150}),g=s=>{i.classList.remove("is-visible"),s.preventDefault();const o=c.elements.user_query.value;d(o).then(t=>{t.hits.length===0&&n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",maxWidth:"432px",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%"});const a=t.hits.map(e=>f(e)).join("");y.innerHTML=a,i.classList.add("is-visible"),h.refresh()}).catch(t=>{i.classList.add("is-visible"),n.info({title:`${t}`,position:"center",backgroundColor:"#ef4040"}),console.log(t)}),c.reset()};i.classList.add("is-visible");c.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
