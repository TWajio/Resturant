import"./main-CmrZKIVw.js";document.addEventListener("DOMContentLoaded",()=>{let a=JSON.parse(localStorage.getItem("cart"))||[];const e=document.getElementById("cart-page-items"),n=document.getElementById("cart-page-subtotal");function s(){e.innerHTML="";let o=0;if(a.length===0){e.innerHTML='<p class="text-gray-500">Your cart is empty.</p>',n.textContent="0tk";return}a.forEach(t=>{const r=t.price*t.qty;o+=r,e.innerHTML+=`
        <div class="flex items-center gap-4 border-b pb-4">
          <img src="${t.image}" alt="${t.name}" 
               class="w-20 h-20 object-cover rounded-md shadow" />
          <div class="flex-1">
            <p class="font-medium">${t.name}</p>
            <p class="text-sm text-gray-500">${t.qty} × ${t.price.toFixed(2)}tk</p>
          </div>
          <p class="font-semibold">${r.toFixed(2)}tk</p>
        </div>
      `}),n.textContent=`${o.toFixed(2)}tk`}s()});
