 function slider({
   sliderContainerSelector,
   sliderItemsSelector,
   sliderInnerSelector,
   sliderWrapperSelector,
   dotsSelector,
   sliderAutomation
 }) {
   /// SLIDER
   const sliderContainer = document.querySelector(sliderContainerSelector),
     sliderItems = sliderContainer.querySelectorAll(sliderItemsSelector),
     sliderInner = sliderContainer.querySelector(sliderInnerSelector),
     sliderWrapper = sliderContainer.querySelector(sliderWrapperSelector),
     dots = sliderContainer.querySelectorAll(dotsSelector),
     wrapperWidth = window.getComputedStyle(sliderWrapper).width;
   let offset = 0;

   sliderInner.style.width = 100 * sliderItems.length + `%`;

   function setDots(arr, i) {
     arr.forEach(dot => dot.style.opacity = '0.5');
     arr[i].style.opacity = 0.8;
   };

   dots.forEach((dot, i) => {
     dot.addEventListener('click', (event) => {
       const target = event.target;
       offset = +wrapperWidth.slice(0, 3) * i;

       if (target && target == dot) {
         sliderInner.style.transform = `translateX(-${offset}px)`;
       }
       setDots(dots, i);
     });
   });


   // SLIDER AUTOMATION
   if (sliderAutomation) {
     const slider = document.querySelector(sliderContainerSelector),
       sliderHeight = wrapperWidth.getComputedStyle(slider).height.slice(0, 3),
       sliderYoffset = slider.getBoundingClientRect().top,
       sliderHeightFull = +sliderHeight + sliderYoffset;

     const interval = setInterval(() => {
       if (window.pageYOffset + document.documentElement.clientHeight >= sliderHeightFull) {
         setTimeout(dots[1].click(), 1500);
         clearInterval(interval);
       }
     }, 1000);
   }
 }

 export default slider;