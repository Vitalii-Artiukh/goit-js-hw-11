import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as f}from"./assets/vendor-f85f36e1.js";const r=document.querySelector(".form");console.dir(r);function i(e,t){return new Promise((s,o)=>{e<0?f.show({message:"❌ Enter a positive number",messageColor:"#ffffff",backgroundColor:"#ff4a4a",position:"topRight"}):setTimeout(()=>{t==="fulfilled"?s(e):o(e)},e)})}function n(e){e.preventDefault();const{delay:t,state:s}=e.currentTarget.elements;i(t.value,s.value).then(o=>{f.show({message:`✅ Fulfilled promise in ${o} ms`,messageColor:"#ffffff",backgroundColor:"#4fc04f",position:"topRight"})}).catch(o=>{f.show({message:`❌ Rejected promise in ${o}ms           `,messageColor:"#ffffff",backgroundColor:"#ff4a4a",position:"topRight"})}),r.reset()}r.addEventListener("submit",n);
//# sourceMappingURL=commonHelpers2.js.map
