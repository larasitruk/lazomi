document.addEventListener('DOMContentLoaded', () => {
  const slideshows = document.querySelectorAll('.slideshow');
  if (slideshows.length === 0) return;

  slideshows.forEach(slideshow => {
    if (slideshow.parentElement.classList.contains('slideshow-wrapper')) return;

    slideshow.classList.add('hide-scrollbar');

    const wrapper = document.createElement('div');
    wrapper.className = 'slideshow-wrapper';

    slideshow.parentNode.insertBefore(wrapper, slideshow);
    wrapper.appendChild(slideshow);

    const prevBtn = document.createElement('button');
    prevBtn.className = 'slide-btn prev-btn';
    prevBtn.innerHTML = '&#10094;';

    const nextBtn = document.createElement('button');
    nextBtn.className = 'slide-btn next-btn';
    nextBtn.innerHTML = '&#10095;';

    wrapper.appendChild(prevBtn);
    wrapper.appendChild(nextBtn);

    nextBtn.addEventListener('click', () => {
      const slideWidth = slideshow.querySelector('p').clientWidth;
      slideshow.scrollBy({ left: slideWidth, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
      const slideWidth = slideshow.querySelector('p').clientWidth;
      slideshow.scrollBy({ left: -slideWidth, behavior: 'smooth' });
    });
  });
});
