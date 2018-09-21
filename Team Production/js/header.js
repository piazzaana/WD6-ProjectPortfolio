var AllenSports = AllenSports || {};

AllenSports.Header = (function() {

    var mobileTrigger = document.querySelector('.nav__menu-mobile');
    var navContent = document.querySelector('.nav-content');
    var navMenu = document.querySelector('.nav__menu');
    var navWithChildren = document.querySelectorAll('.menu-item-has-children');

    var _setupListeners = function() {
        for (var i = 0; i < navWithChildren.length; i++) {
            navWithChildren[i].addEventListener('click', function(e) {
                e.stopPropagation();
                e.currentTarget.classList.toggle('menu-item--active');
            });
        }

        mobileTrigger.addEventListener('click', function() {
            navMenu.classList.toggle('nav__menu--active');
        });

        window.addEventListener('scroll', function() {
            var top = window.pageYOffset || document.documentElement.scrollTop;
            if (top >= 41) {
                navContent.classList.add('nav-content--fixed');
            } else {
                navContent.classList.remove('nav-content--fixed');

            }
        });
    };

    var init = function() {
        _setupListeners();
    };

   return {
       init: init,
       navMenu: navMenu
   }
})();

window.onload = AllenSports.Header.init();

function checkFullScreen() {
    if (window.parent.opener) {
        window.opener.location = window.location
        window.close();
    }
}
function PopupCenter(pageURL, title, w, h) {
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    var targetWin = window.open(pageURL, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
}