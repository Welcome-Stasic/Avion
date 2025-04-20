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

// доплнительные элементы коллекции
const collectionButton = document.getElementById('more-btn');
const collectionMore = document.querySelector('.Goods-card-down');
const goodsSection = document.querySelector('#Goods');

collectionButton.addEventListener('click', () => {
   collectionMore.classList.toggle('open');
   goodsSection.classList.toggle('open');
   collectionButton.style.display = "none";
});
// модальное окно
const modalBtn = document.getElementById('studio-btn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
function toggleModal() {
   modal.classList.toggle('open');
}
if (modal) {
modalBtn.addEventListener('click', (e) => {
   e.preventDefault();
   toggleModal()
});
}
closeModal.addEventListener('click', (e) => {
   modal.classList.remove('open');
});
