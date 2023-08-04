var swiper = new Swiper(".projectcontainer", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    centerSlide:'true',
    fade:'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var tablinks = document.getElementsByClassName("tab");
  var content = document.getElementsByClassName("content");
  function opentab(el) {
    for (tablink of tablinks) tablink.classList.remove("active");
    for (cnt of content) cnt.classList.remove("activecn");
    event.currentTarget.classList.add("active");
    document.getElementById(el).classList.add("activecn");
  }
