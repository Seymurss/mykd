
const cursor = document.querySelector('.cursor');
const photo = document.querySelector('.photo');


document.addEventListener("mousemove", e => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  cursor.style.top = mouseY + 'px';
  cursor.style.left = mouseX + 'px';
  cursor.classList.add('cursor-move');
  setTimeout(() => {
    cursor.classList.remove('cursor-move');
  }, 1000);

  const photoWidth = photo.offsetWidth;
  const photoHeight = photo.offsetHeight;
  const photoRect = photo.getBoundingClientRect();
  const photoX = photoRect.left;
  const photoY = photoRect.top;

  const offsetX = mouseX - photoX;
  const offsetY = mouseY - photoY;

  const moveX = (offsetX / photoWidth - 0.5) * 10;
  const moveY = (offsetY / photoHeight - 0.5) * 10;

  photo.style.transform = `translate(${moveX}px, ${moveY}px)`;
});



document.addEventListener('click', () => {
  cursor.classList.add('cursor-click');
  setTimeout(() => {
    cursor.classList.remove('cursor-click');
  }, 800);  
});


