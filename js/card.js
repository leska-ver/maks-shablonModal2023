document.addEventListener('DOMContentLoaded', function() {
  // console.log(); находит в js-ce ошибку. Deftools

  
  
  //- Модалки -//
  let $window = window,
      $modalOpenButton = document.querySelectorAll('.modal-btn'),
      $modals = document.querySelector('.modals'),
      $modalClose = document.querySelectorAll('.modal__close'),
      $modal = document.querySelectorAll('.modal'),
      $modalOverlay = document.querySelector('.modal__overlay'),
      $mobileOverlay = document.querySelector('.mobile--overlay');   

  // отключить включение прокрутки BODY
  let disableScroll = function disableScroll() {
    document.body.classList.add('disable--scroll');
  };

  let enableScroll = function enableScroll() {
    document.body.classList.remove('disable--scroll');
  }; 
  
  // Открывашка модалки(modal) //
  $modalOpenButton.forEach(function (el) {
    el.addEventListener('click', function (e) {
      disableScroll();
      let modalTarget = e.currentTarget.getAttribute('data-modal');

      if (modalTarget == 'order') {
        var bilette = e.currentTarget.closest('.cost__item').querySelector('h3').textContent;

        if ($window.innerWidth > 768) {
          let cost = e.currentTarget.parentElement.innerHTML;
          document.querySelector('[data-modal-open="' + modalTarget + '"]').querySelector('.modal__ord').innerHTML = cost;
          $modals.style.display = 'flex';
          setTimeout(function () {
            $modals.classList.add('modal--visible');
          }, 100);
          document.querySelector('[data-modal-open="' + modalTarget + '"]').style.display = 'flex';
        } else {
          let _cost = e.currentTarget.closest('.cost__item').querySelector('h3').textContent;
          console.log(_cost);
          document.querySelector('[data-modal-open="' + modalTarget + '"]').querySelector('.tariff').innerHTML = "\u0411\u0438\u043B\u0435\u0442: \"".concat(_cost, "\"");
          $modals.style.display = 'flex';
          setTimeout(function () {
            $modals.classList.add('modal--visible');
          }, 100);
          document.querySelector('[data-modal-open="' + modalTarget + '"]').style.display = 'block';
          setTimeout(function () {
            document.querySelector('[data-modal-open="' + modalTarget + '"]').classList.add('mobile--open');
          }, 300);
        }
      } else {
        if ($window.innerWidth > 768) {
          $modals.style.display = 'flex';
          setTimeout(function () {
            $modals.classList.add('modal--visible');
          }, 100);
          document.querySelector('[data-modal-open="' + modalTarget + '"]').style.display = 'block';
        } else {
          $modals.style.display = 'flex';
          setTimeout(function () {
            $modals.classList.add('modal--visible');
          }, 100);
          document.querySelector('[data-modal-open="' + modalTarget + '"]').style.display = 'block';
          setTimeout(function () {
            document.querySelector('[data-modal-open="' + modalTarget + '"]').classList.add('mobile--open');
          }, 300);
        }
      }
    });
  }); 
  
  
  // Закрывашка в декстопной версии модалки(modal) //
  let closeModal = function closeModal() {
    $modals.classList.remove('modal--visible');
    enableScroll();

    if ($window.innerWidth > 768) {
      setTimeout(function () {
        $modal.forEach(function (el) {
          el.style.display = 'none';
        });
        $modals.style.display = 'none';
      }, 400);
    } else {
      $modal.forEach(function (el) {
        el.classList.remove('mobile--open');
      });
      setTimeout(function () {
        $modals.classList.remove('modal--visible');
      }, 300);
      setTimeout(function () {
        $modal.forEach(function (el) {
          el.style.display = 'none';
        });
        $modals.style.display = 'none';
      }, 400);
    }
  };

  $modalClose.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      closeModal();
    });
  });
  $modalOverlay.addEventListener('click', function (e) {
    e.preventDefault();
    closeModal();
  });  



  // Закрывашка в мобильной версии //
  var closeMobile = document.querySelectorAll('.close__mobile');
  closeMobile.forEach(function (el) {
    el.addEventListener('click', function (e) {
      console.log('Down!');
      enableScroll();
      $modal.forEach(function (el) {
        el.classList.remove('mobile--open');
      });
      setTimeout(function () {
        $modals.classList.remove('modal--visible');
      }, 300);
      setTimeout(function () {
        $modal.forEach(function (el) {
          el.style.display = 'none';
        });
        $modals.style.display = 'none';
      }, 400);
    });
  });






  
});




