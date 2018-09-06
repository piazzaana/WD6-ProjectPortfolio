var AllenSports = AllenSports || {};

AllenSports.ImagePanel = (function() {
    var imagePanels = document.querySelectorAll('.image-panel_image-container');

    var _bindEvents = function() {
        for (var i = 0; i < imagePanels.length; i++) {
            if (imagePanels[i].dataset.videoId) {
                imagePanels[i].addEventListener('click', playVideo);
            }
        };
    };

    var playVideo = function(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        var el = getImagePanel(evt.target);
        var player = new YT.Player('yt-' + el.dataset.videoId, {
            events: {
                'onReady': onPlayerReady
            }
        })
    };

    var onPlayerReady = function(evt) {
        evt.target.a.classList.toggle('image-panel__video--active');
        evt.target.playVideo();
    };

    var getImagePanel = function(childElement) {

        return childElement;
        if (childElement.classList.contains('image-panel')) {
            return childElement;
        }

        return getImagePanel(childElement.parentElement);
    };

    _bindEvents();
})();

AllenSports.QuickQuoteModal = (function() {
    var modal = document.querySelector('.quote__modal');
    var modalClose = modal.querySelector('.quote__modal-close');
    var quoteBtn = document.querySelectorAll('.home__help-box--quote');
    var descriptionField = modal.querySelector('.quote__modal-form-field--description');

    for (var i = 0; i < quoteBtn.length; i++) {
        quoteBtn[i].addEventListener('click', function (e) {
            e.preventDefault();
            if (typeof _gaq !== 'undefined') {
                _gaq.push(['_trackEvent', 'Quick Quote', 'Quick Quote Opened']);
            }
            AllenSports.QuickQuoteModal.openModal(false);
        });
    }

    modalClose.addEventListener('click', function(e) {
        modal.classList.toggle('active');
    });

    var openModal = function(withDescription) {
      if (withDescription !== undefined && withDescription) {
          showDescription();
      } else {
          hideDescription();
      }
      modal.classList.add('active');
      AllenSports.Header.navMenu.classList.remove('nav__menu--active');
    };

    var showDescription = function() {
        descriptionField.style.display = 'block';
    };

    var hideDescription = function() {
        descriptionField.style.display = 'none';
    };

    return {
        openModal: openModal,
        showDescription: showDescription
    };

})();

function onYouTubeIframeAPIReady() {
    window.YTReady = true;
};