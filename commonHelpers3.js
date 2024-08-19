import"./assets/styles-107c8cbc.js";import{i as l,S as r}from"./assets/vendor-e0a660ec.js";const c="https://pixabay.com/api/",n="45488193-7ca777789e7fbcf45aeeb8195",t=document.querySelector(".js-search-form"),m=document.querySelector(".js-gallery");console.dir(t);const p=e=>{const s=new URLSearchParams({key:n,q:e,image_type:"photo",safesearch:!0,orientation:"horizontal"});return fetch(`${c}?${s}`).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})},h=e=>`<li class="gallery-card">
            <a href="${e.largeImageURL}" class="gallery-link">
              <img class="image-normal" src="${e.webformatURL}" alt="${e.tags}" width="360" height="152" />
              <ul class="image-text">
                <li class="image-text-item">
                  <p class="key key-likes">Likes</p>
                  <p class="value value-likes">${e.likes}</p>
                </li>
                <li class="image-text-item">
                  <p class="key key-views">Viwes</p>
                  <p class="value value-views">${e.views}</p>
                </li>
                <li class="image-text-item">
                  <p class="key key-comments">Comments</p>
                  <p class="value value-comments">${e.comments}</p>
                </li>
                <li class="image-text-item">
                  <p class="key key-downloads">Downloads</p>
                  <p class="value value-downloads">${e.downloads}</p>
                </li>
              </ul>
            </a>
          </li>`,u=e=>{e.preventDefault();const s=t.elements.user_query.value;console.log(s),p(s).then(a=>{a.hits.length===0&&l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",maxWidth:"432px",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",timeout:"40000"});const o=a.hits.map(i=>h(i)).join("");m.innerHTML=o,new r(".js-gallery a",{captionsData:"alt",captionDelay:250})}).catch(a=>{l.info({title:"error"}),console.log(a)}),t.reset()};t.addEventListener("submit",u);
//# sourceMappingURL=commonHelpers3.js.map
