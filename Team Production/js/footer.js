jQuery(".loadDraftboard").click(function () {


    var url = jQuery(this).attr('href');


    win = window.open(url, 'draftboard', 'width=950,height=675');


    var pollTimer = window.setInterval(function () {

        if (win.closed !== false) { // !== is required for compatibility with Opera


            window.clearInterval(pollTimer);


            var lastSddid = parseInt(getCookie('lastSddid'));

            var draftboardCompleted = getCookie('draftboardCompleted');

            window._gaq = window._gaq || [];


            if (draftboardCompleted == "true" && typeof(lastSddid) == 'number') {

                _gaq.push(['_trackEvent', 'DraftBoard', 'Completed', 'Draftboard ID' + lastSddid]);


                reportDraftAdWordsConversion();

                var img = new Image();

                if (typeof(img.onload) === 'function') {

                    img.onload = function () {

                        window.location.replace('https://my.allensportswear.com/auth/draftboard_user');

                    };

                    img.src = '//www.googleadservices.com/pagead/conversion/1071060912/?value=0.00&amp;label=g4lRCLTvzx8QsK_c_gM&amp;guid=ON&amp;script=1&amp;format=3&amp;language=en';

                } else {

                    img.src = '//www.googleadservices.com/pagead/conversion/1071060912/?value=0.00&amp;label=g4lRCLTvzx8QsK_c_gM&amp;guid=ON&amp;script=1&amp;format=3&amp;language=en';

                    setTimeout(function () {

                        window.location.replace('http://my.allensportswear.com/auth/draftboard_user');

                    }, 500);

                }

            } else {

                _gaq.push(['_trackEvent', 'DraftBoard', 'Not saved']);

            }


        }

    }, 200);


    return false;

});

goog_snippet_vars = function () {

    var w = window;

    w.google_conversion_id = 1071060912;

    w.google_conversion_label = "SJGnCKy9-R8QsK_c_gM";

    w.google_remarketing_only = false;

}

// DO NOT CHANGE THE CODE BELOW.

goog_report_conversion = function (url) {

    goog_snippet_vars();

    window.google_conversion_format = "3";

    window.google_is_call = true;

    var opt = new Object();

    opt.onload_callback = function () {

        if (typeof(url) != 'undefined') {

            window.location = url;

        }

    }

    var conv_handler = window['google_trackConversion'];

    if (typeof(conv_handler) == 'function') {

        conv_handler(opt);

    }

}


function getCookie(name) {

    var nameEQ = name + "=";

    var ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {

        var c = ca[i];

        while (c.charAt(0) == ' ') c = c.substring(1, c.length);

        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);

    }

    return null;

}


function reportDraftAdWordsConversion() {

    var img = document.createElement("img");

    var trackingUrl = "http://www.googleadservices.com/pagead/conversion/1071060912";

    trackingUrl += "/?random=" + new Date().getMilliseconds();

    trackingUrl += "&value=1";

    trackingUrl += "&label= axiWCLiVuloQsK_c_gM";

    trackingUrl += "&guid=ON&script=0&url=" + encodeURI('http://allensportswear.com');

    img.src = trackingUrl;

    document.body.appendChild(img);

    img.style = "display: none;";

}

function captchaCompleted(e) {
    var elements = document.querySelectorAll('.quote__modal-form-submit, .quick-quote__cta');

    for (var i = 0; i < elements.length; i++) {
        elements[i].removeAttribute('disabled');
    }
}

function renderCaptchas() {
    var siteKey = '6LdPcx4UAAAAAMvg4SMwyqJdjQM7bNAbiBj1EZNt';
    grecaptcha.render('quick-quote-modal-captcha', {
        'sitekey': siteKey, //Replace this with your Site key
        'theme': 'light',
        'callback': 'captchaCompleted'
    });

    if (document.querySelectorAll('#quick-quote-form-inline').length > 0) {
        grecaptcha.render('quick-quote-form-inline', {
            'sitekey': siteKey, //Replace this with your Site key
            'theme': 'light',
            'callback': 'captchaCompleted'
        });
    }
}

function timestamp() {
    var response = document.getElementById("g-recaptcha-response");
    if (response == null || response.value.trim() == "") {
        var elems = document.getElementsByName("captcha_settings");
        for (var i = 0; i < elems.length; i++) {
            var elem = JSON.parse(elems[i].value);
            elem.ts = JSON.stringify(new Date().getTime());
            elems[i].value = JSON.stringify(elem);
        }
    }
}
timestamp();
setInterval(timestamp, 250);

jQuery('form[action*="salesforce"]').submit(function () {

    ga(function (tracker) {

        window.linkerParam = tracker.get('linkerParam');

    });

    jQuery('[name="retURL"]').val(jQuery('[name="retURL"]').val() +"?"+ window.linkerParam);

});