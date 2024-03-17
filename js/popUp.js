let popUpInner = document.getElementById('popUpInner');
let addBtn = document.getElementById('add-btn');
let closeBtn = document.getElementById('close');

addBtn.addEventListener('click',()=>{
  popUpInner.style.display='flex';
})
closeBtn.addEventListener('click',()=>{
  popUpInner.style.display='none';
})
