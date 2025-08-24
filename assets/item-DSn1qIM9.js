import"./main-CmrZKIVw.js";import"./menu-D5qI5szB.js";document.addEventListener("DOMContentLoaded",()=>{const r=localStorage.getItem("selectedItem"),f=document.querySelectorAll(".bun-options"),h=document.querySelectorAll(".salad-options"),x=document.querySelectorAll(".test-options"),l=document.querySelector(".cart-actions input[type='number']"),v=document.getElementById("iproduct-total"),b=document.getElementById("options-total"),C=document.getElementById("grand-total"),d=document.querySelector(".cart-panel"),s=document.querySelector(".cart-toggle"),p=document.getElementById("cart-items");let m=0,o=JSON.parse(localStorage.getItem("cart"))||[],a=JSON.parse(localStorage.getItem("isCartOpen"))||!1;function y(){localStorage.setItem("cart",JSON.stringify(o))}function i(){p.innerHTML="";let t=0;if(o.length===0){document.getElementById("cart-subtotal").textContent="00tk",y();return}o.forEach(e=>{const n=(e.price*e.qty).toFixed(2);t+=parseFloat(n),p.innerHTML+=`
        <div class="flex flex-col sm:flex-row sm:items-start gap-3 border-b pb-3">
          <img src="${e.image}" class="w-16 h-16 object-cover rounded-md" />
          <div class="flex-1">
            <div class="flex sm:flex-row justify-between items-center">
              <div>
                <p class="font-medium">${e.name}</p>
                <p class="text-sm text-gray-500">${e.qty} × ${e.price.toFixed(2)}tk</p>
              </div>
              <p class="font-semibold">${n}tk</p>
            </div>
            <div class="flex flex-row justify-between mt-2">
              <div class="flex justify-center items-center space-x-2">
                <button onclick="updateCartQty('${e.name}', -1)" class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
                <span>${e.qty}</span>
                <button onclick="updateCartQty('${e.name}', 1)" class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
              </div>
              <button onclick="removeFromCartItem('${e.name}')" class="text-gray-400 hover:text-red-500">✖</button>
            </div>
          </div>
        </div>
      `}),document.getElementById("cart-subtotal").textContent=`${t.toFixed(2)}tk`,y()}if(r){const t=JSON.parse(r),e=t.name.toLowerCase().replace(/\s+/g,"-");document.getElementById("item-name").textContent=t.name,document.getElementById("item-description").textContent=t.description,document.getElementById("item-price").textContent=`${t.price.toFixed(2)}tk`,document.getElementById("item-image").src=`./images/items/${e}.png`,m=t.price,f.forEach(n=>n.classList.toggle("hidden",!(t.category==="burger"||t.category==="sandwich"))),h.forEach(n=>n.classList.toggle("hidden",t.category!=="salad")),x.forEach(n=>n.classList.toggle("hidden",t.category!=="fries"))}function u(){let t=0;document.querySelectorAll('input[type="radio"]:checked, input[type="checkbox"]:checked').forEach(c=>{t+=parseFloat(c.dataset.price||0)});const e=parseInt(l.value)||1,n=(m+t)*e;v.textContent=m.toFixed(2),b.textContent=t.toFixed(2),C.textContent=n.toFixed(2)}document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(t=>t.addEventListener("change",u)),l.addEventListener("input",u),u(),document.querySelectorAll(".logo-item").forEach(t=>{t.addEventListener("click",()=>{window.location.href="Order_Online.html"})});function g(){a=!a,localStorage.setItem("isCartOpen",JSON.stringify(a)),d.classList.toggle("show",a),s.classList.toggle("hidden",!a)}function E(){a=!a,localStorage.setItem("isCartOpen",JSON.stringify(a)),d.classList.toggle("show",a)}s.addEventListener("click",E),o.length>0&&s.classList.remove("hidden"),window.removeFromCartItem=function(t){o=o.filter(e=>e.name!==t),i(),o.length===0&&a&&g()},window.updateCartQty=function(t,e){const n=o.find(c=>c.name===t);n&&(n.qty+=e,n.qty<=0&&(o=o.filter(c=>c.name!==t)),i(),o.length===0&&a&&g())},window.addToCartItem=function(){if(!r)return;const t=JSON.parse(r),e=parseInt(l.value)||1;let n=o.find(c=>c.name===t.name);n?n.qty+=e:o.push({name:t.name,price:t.price,qty:e,image:`./images/items/${t.name.toLowerCase().replace(/\s+/g,"-")}.png`}),i(),a||g()},i(),a&&(d.classList.add("show"),s.classList.remove("hidden"))});
