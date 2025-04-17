   const burger = document.getElementById('burger');
   const menu = document.getElementById('header_menu');
   
   function toggleMenu() {
      menu.classList.toggle('show');
      burger.classList.toggle('active');
   }
   
   if (burger) {
      burger.addEventListener('click', function(event) {
         event.stopPropagation();
         toggleMenu();
      });
   }
   
   document.addEventListener('click', function(event) {
      if (menu && menu.classList.contains('show') && !menu.contains(event.target) && !burger.contains(event.target)) {
         menu.classList.remove('show');
         burger.classList.remove('active');
      }
   });


const collectionButton = document.getElementById('more-btn');
const collectionMore = document.querySelector('.Goods-card-down');
const goodsSection = document.querySelector('#Goods');

collectionButton.addEventListener('click', () => {
   collectionMore.classList.toggle('open');
   goodsSection.classList.toggle('open');
   collectionButton.style.display = "none";
});

