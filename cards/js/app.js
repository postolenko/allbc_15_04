"use strict";

$(function () {
  $('.description__text span').on('click', function () {
    $(".description__text__invis").toggle('slow');
  });
  $('.center__features .learn-more').on('click', function () {
    $(".center__features__wrapper__invisible").toggle('slow').css('display', 'flex');
  });
  $('.free__offices__top__closed').on('click', function () {
    if (!$(this).hasClass('active')) {
      $(this).closest('.free__offices__inner').addClass('active').find('.free__offices__inner__content').slideDown();
      $(this).addClass('active');
    } else if ($(this).hasClass('active')) {
      $(this).closest('.free__offices__inner').removeClass('active').find('.free__offices__inner__content').slideUp();
      $(this).removeClass('active');
    }
  });
  $('.foto__gallery__title .learn-more').on('click', function () {
    $(".foto__gallery__inner__invis").toggle('slow').css('display', 'flex');
  });
});
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 5,
  loopedSlides: 5,
  watchSlidesVisibility: true,
  watchSlidesProgress: true
});
new Swiper('.gallery-top', {
  spaceBetween: 0,
  loopedSlides: 5,
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev'
  },
  thumbs: {
    swiper: galleryThumbs
  }
});

var initSliders = function initSliders() {
  var _iterator = _createForOfIteratorHelper(document.querySelectorAll('.free__offices__inner__content__slider')),
      _step;

  try {
    var _loop = function _loop() {
      var content = _step.value;
      // slider
      var slide = content.querySelector('.swiper-container.free__offices__slider__container'); // arrows

      var nextArrow = content.querySelector('.swiper-button-next');
      var prevArrow = content.querySelector('.swiper-button-prev'); // create slider

      var sliderItem = new Swiper(slide, {
        slidesPerView: 1,
        speed: 400,
        spaceBetween: 29,
        init: false,
        // noSwiping,
        loop: true,
        pagination: {
          el: '.swiper-pagination.free__offices__pagination',
          clickable: true
        } // breakpoints: {
        //     1200: {
        //       slidesPerView: 3,
        //     },
        //     992: {
        //       slidesPerView: 2,
        //     },
        //     768: {
        //       slidesPerView: 2,
        //     },
        //     568: {
        //         slidesPerView: 1,
        //     },
        //     320: {
        //         slidesPerView: 1,
        //     }
        // }

      });
      sliderItem.on('beforeInit', function () {
        content.closest('.free__offices__inner').classList.add('active');
      });
      sliderItem.on('afterInit', function () {
        content.closest('.free__offices__inner').classList.remove('active');
      });
      sliderItem.init(); // next slide

      nextArrow.addEventListener('click', function () {
        sliderItem.slideNext();
      }); // prev slide

      prevArrow.addEventListener('click', function () {
        sliderItem.slidePrev();
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    } // add active for first office wrapper

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = _createForOfIteratorHelper(document.querySelectorAll('.free__offices .free__offices__inner:first-child')),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var office = _step2.value;
      office.classList.add('active');
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};

initSliders();
new Swiper('.suggestions__slider__container', {
  slidesPerView: 4,
  speed: 400,
  spaceBetween: 29,
  // noSwiping,
  loop: true,
  navigation: {
    nextEl: '.suggestions__button-next',
    prevEl: '.suggestions__button-prev'
  } // breakpoints: {
  //     1200: {
  //       slidesPerView: 3,
  //     },
  //     992: {
  //       slidesPerView: 2,
  //     },
  //     768: {
  //       slidesPerView: 2,
  //     },
  //     568: {
  //         slidesPerView: 1,
  //     },
  //     320: {
  //         slidesPerView: 1,
  //     }
  // }

});
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInNsaWRlci5qcyIsInRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNJQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuJChmdW5jdGlvbiAoKSB7XG4gICQoJy5kZXNjcmlwdGlvbl9fdGV4dCBzcGFuJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICQoXCIuZGVzY3JpcHRpb25fX3RleHRfX2ludmlzXCIpLnRvZ2dsZSgnc2xvdycpO1xuICB9KTtcbiAgJCgnLmNlbnRlcl9fZmVhdHVyZXMgLmxlYXJuLW1vcmUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIi5jZW50ZXJfX2ZlYXR1cmVzX193cmFwcGVyX19pbnZpc2libGVcIikudG9nZ2xlKCdzbG93JykuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKTtcbiAgfSk7XG4gICQoJy5mcmVlX19vZmZpY2VzX190b3BfX2Nsb3NlZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5mcmVlX19vZmZpY2VzX19pbm5lcicpLmFkZENsYXNzKCdhY3RpdmUnKS5maW5kKCcuZnJlZV9fb2ZmaWNlc19faW5uZXJfX2NvbnRlbnQnKS5zbGlkZURvd24oKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICQodGhpcykuY2xvc2VzdCgnLmZyZWVfX29mZmljZXNfX2lubmVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmZpbmQoJy5mcmVlX19vZmZpY2VzX19pbm5lcl9fY29udGVudCcpLnNsaWRlVXAoKTtcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG4gICQoJy5mb3RvX19nYWxsZXJ5X190aXRsZSAubGVhcm4tbW9yZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiLmZvdG9fX2dhbGxlcnlfX2lubmVyX19pbnZpc1wiKS50b2dnbGUoJ3Nsb3cnKS5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpO1xuICB9KTtcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvLCBhbGxvd0FycmF5TGlrZSkgeyB2YXIgaXQ7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8IG9bU3ltYm9sLml0ZXJhdG9yXSA9PSBudWxsKSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChpdCA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkgfHwgYWxsb3dBcnJheUxpa2UgJiYgbyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHsgaWYgKGl0KSBvID0gaXQ7IHZhciBpID0gMDsgdmFyIEYgPSBmdW5jdGlvbiBGKCkge307IHJldHVybiB7IHM6IEYsIG46IGZ1bmN0aW9uIG4oKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH0sIGU6IGZ1bmN0aW9uIGUoX2UpIHsgdGhyb3cgX2U7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH0gdmFyIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IG9bU3ltYm9sLml0ZXJhdG9yXSgpOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0W1wicmV0dXJuXCJdICE9IG51bGwpIGl0W1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG52YXIgZ2FsbGVyeVRodW1icyA9IG5ldyBTd2lwZXIoJy5nYWxsZXJ5LXRodW1icycsIHtcbiAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgc2xpZGVzUGVyVmlldzogNSxcbiAgbG9vcGVkU2xpZGVzOiA1LFxuICB3YXRjaFNsaWRlc1Zpc2liaWxpdHk6IHRydWUsXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWVcbn0pO1xubmV3IFN3aXBlcignLmdhbGxlcnktdG9wJywge1xuICBzcGFjZUJldHdlZW46IDAsXG4gIGxvb3BlZFNsaWRlczogNSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5zbGlkZXItYnV0dG9uLW5leHQnLFxuICAgIHByZXZFbDogJy5zbGlkZXItYnV0dG9uLXByZXYnXG4gIH0sXG4gIHRodW1iczoge1xuICAgIHN3aXBlcjogZ2FsbGVyeVRodW1ic1xuICB9XG59KTtcblxudmFyIGluaXRTbGlkZXJzID0gZnVuY3Rpb24gaW5pdFNsaWRlcnMoKSB7XG4gIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZnJlZV9fb2ZmaWNlc19faW5uZXJfX2NvbnRlbnRfX3NsaWRlcicpKSxcbiAgICAgIF9zdGVwO1xuXG4gIHRyeSB7XG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoKSB7XG4gICAgICB2YXIgY29udGVudCA9IF9zdGVwLnZhbHVlO1xuICAgICAgLy8gc2xpZGVyXG4gICAgICB2YXIgc2xpZGUgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItY29udGFpbmVyLmZyZWVfX29mZmljZXNfX3NsaWRlcl9fY29udGFpbmVyJyk7IC8vIGFycm93c1xuXG4gICAgICB2YXIgbmV4dEFycm93ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLWJ1dHRvbi1uZXh0Jyk7XG4gICAgICB2YXIgcHJldkFycm93ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLWJ1dHRvbi1wcmV2Jyk7IC8vIGNyZWF0ZSBzbGlkZXJcblxuICAgICAgdmFyIHNsaWRlckl0ZW0gPSBuZXcgU3dpcGVyKHNsaWRlLCB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgIHNwZWVkOiA0MDAsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjksXG4gICAgICAgIGluaXQ6IGZhbHNlLFxuICAgICAgICAvLyBub1N3aXBpbmcsXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbi5mcmVlX19vZmZpY2VzX19wYWdpbmF0aW9uJyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgfSAvLyBicmVha3BvaW50czoge1xuICAgICAgICAvLyAgICAgMTIwMDoge1xuICAgICAgICAvLyAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIDk5Mjoge1xuICAgICAgICAvLyAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIDc2ODoge1xuICAgICAgICAvLyAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIDU2ODoge1xuICAgICAgICAvLyAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgMzIwOiB7XG4gICAgICAgIC8vICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICB9KTtcbiAgICAgIHNsaWRlckl0ZW0ub24oJ2JlZm9yZUluaXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQuY2xvc2VzdCgnLmZyZWVfX29mZmljZXNfX2lubmVyJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICB9KTtcbiAgICAgIHNsaWRlckl0ZW0ub24oJ2FmdGVySW5pdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudC5jbG9zZXN0KCcuZnJlZV9fb2ZmaWNlc19faW5uZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgICAgc2xpZGVySXRlbS5pbml0KCk7IC8vIG5leHQgc2xpZGVcblxuICAgICAgbmV4dEFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzbGlkZXJJdGVtLnNsaWRlTmV4dCgpO1xuICAgICAgfSk7IC8vIHByZXYgc2xpZGVcblxuICAgICAgcHJldkFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzbGlkZXJJdGVtLnNsaWRlUHJldigpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICBfbG9vcCgpO1xuICAgIH0gLy8gYWRkIGFjdGl2ZSBmb3IgZmlyc3Qgb2ZmaWNlIHdyYXBwZXJcblxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfaXRlcmF0b3IuZShlcnIpO1xuICB9IGZpbmFsbHkge1xuICAgIF9pdGVyYXRvci5mKCk7XG4gIH1cblxuICB2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mcmVlX19vZmZpY2VzIC5mcmVlX19vZmZpY2VzX19pbm5lcjpmaXJzdC1jaGlsZCcpKSxcbiAgICAgIF9zdGVwMjtcblxuICB0cnkge1xuICAgIGZvciAoX2l0ZXJhdG9yMi5zKCk7ICEoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uKCkpLmRvbmU7KSB7XG4gICAgICB2YXIgb2ZmaWNlID0gX3N0ZXAyLnZhbHVlO1xuICAgICAgb2ZmaWNlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2l0ZXJhdG9yMi5lKGVycik7XG4gIH0gZmluYWxseSB7XG4gICAgX2l0ZXJhdG9yMi5mKCk7XG4gIH1cbn07XG5cbmluaXRTbGlkZXJzKCk7XG5uZXcgU3dpcGVyKCcuc3VnZ2VzdGlvbnNfX3NsaWRlcl9fY29udGFpbmVyJywge1xuICBzbGlkZXNQZXJWaWV3OiA0LFxuICBzcGVlZDogNDAwLFxuICBzcGFjZUJldHdlZW46IDI5LFxuICAvLyBub1N3aXBpbmcsXG4gIGxvb3A6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuc3VnZ2VzdGlvbnNfX2J1dHRvbi1uZXh0JyxcbiAgICBwcmV2RWw6ICcuc3VnZ2VzdGlvbnNfX2J1dHRvbi1wcmV2J1xuICB9IC8vIGJyZWFrcG9pbnRzOiB7XG4gIC8vICAgICAxMjAwOiB7XG4gIC8vICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gIC8vICAgICB9LFxuICAvLyAgICAgOTkyOiB7XG4gIC8vICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gIC8vICAgICB9LFxuICAvLyAgICAgNzY4OiB7XG4gIC8vICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gIC8vICAgICB9LFxuICAvLyAgICAgNTY4OiB7XG4gIC8vICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgLy8gICAgIH0sXG4gIC8vICAgICAzMjA6IHtcbiAgLy8gICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAvLyAgICAgfVxuICAvLyB9XG5cbn0pOyIsIlwidXNlIHN0cmljdFwiOyJdfQ==
