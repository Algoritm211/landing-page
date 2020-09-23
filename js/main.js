function popupOpen() {
  document.querySelector(".popup").classList.add("popup__active");
  document.body.style.overflow = "hidden";
}

const buttonBuyNow = document.querySelector(".promo__btn_black");
const buttonClosePopup = document.querySelector(".popup__close");
const anchors = document.querySelectorAll('.scroll-to')

window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabs__item");
  const playBtn= document.querySelector('#playVideo')
  const video = document.querySelector('#video')

  playBtn.addEventListener('click', () => {
    video.play()
    video.setAttribute('controls', 'controls')
    playBtn.style.display = 'none'
  })

  video.addEventListener('ended', function() {
    this.src = this.src
    playBtn.style.display = 'block'
    video.removeAttribute('controls')
  }) 

  tabs.forEach((tab) => {
    if (!tab.classList.contains("tabs__item_active")) {
      tab.addEventListener("click", () => {
        tabs.forEach((otherItem) => {
          if (otherItem.classList.contains("tabs__item_active")) {
            otherItem.classList.remove("tabs__item_active");
          }
        });
        tab.classList.add("tabs__item_active");
      });
    }
  });
  $(".carousel").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow:
      '<div class="carousel__arrow carousel_prev"><i class="fas fa-chevron-left"></i></div>',
    nextArrow:
      '<div class="carousel__arrow carousel_next"><i class="fas fa-chevron-right"></i></div>',
  });
  buttonBuyNow.addEventListener("click", popupOpen);
  buttonClosePopup.addEventListener(
    "click", () => {
        document.querySelector(".popup").classList.remove("popup__active");
        document.body.style.overflow = "visible";
    }
  );
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href')
      
      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

});


