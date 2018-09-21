var AllenSports = AllenSports || {};

AllenSports.FastForms = (function() {
    var init = function() {
        if (window.fastFormsInit === true) {
            _getElements();
        }
        document.addEventListener('fastforms.loaded', _getElements);
    };

    var _getElements = function() {
        var fastFormInputs = document.querySelectorAll('.ff-textarea, .ff-type-text, .ff-select-type');

        for (var i = 0; i < fastFormInputs.length; i++) {
            _bindListener(fastFormInputs[i]);
        }
    };

    var _bindListener = function(element) {
        element.addEventListener('keyup', function (e) {
            if (e.target.value.length > 0) {
                e.target.parentNode.parentNode.querySelector('div').style.display = 'none';
                e.target.style.width = '100%';
            } else {
                e.target.parentNode.parentNode.querySelector('div').style.display = 'block';

            }
        });
    };

    return {
        init: init
    };

})();

window.onload = AllenSports.FastForms.init();