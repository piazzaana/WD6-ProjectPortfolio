var AllenSports = AllenSports || {};

AllenSports.Order = (function() {

    var submitOrderDetailsRoster = function(evt) {
        evt.preventDefault();
        var form = evt.target;
        var arr = jQuery(form).serializeArray();
        var data = new FormData();

        arr.forEach(function(item) {
            data.append(item.name, item.value);
        });

        data.append('action', 'submit_order_details_roster');
        
        jQuery.ajax({
            url: asw.ajax_url,
            type: 'POST',
            contentType: false,
            processData: false,
            data: data,
            success: function(resp) {
                try {
                    form.classList.add('roster-form--submitted');
                    var table = form.querySelector('.order-detail__roster-table');
                    var tbody = table.querySelector('tbody');
                    
                    table.querySelectorAll('select').forEach(function(node) {
                        node.setAttribute('disabled', 'disabled');
                    });

                    table.querySelectorAll('input').forEach(function(node) {
                        node.setAttribute('readonly', 'readonly');
                    });
                   

                } catch (err) {
                    console.error('error in parse', err);
                }
            },
            error: function(err) {
                console.log('err', err);
            }
        });
    };

    var createFormListener = function(forms) {
        for (var i = 0; i < forms.length; i++) {
            forms[i].addEventListener('submit', submitOrderDetailsRoster);
        }
    };

    var hideRawRosterData = function() {
        var metaLists = document.querySelectorAll('.wc-item-meta .wc-item-meta-label');
        console.log(metaLists);
        metaLists.forEach(function(node) { 
            if (node.innerHTML ==='roster:') {
                node.parentNode.style.display = 'none';
            }
        });
    }

    var init = function() {
        var forms = document.querySelectorAll('.order-details__roster-form');
        if (forms.length) {
            createFormListener(forms);
        }

        if (document.body.classList.contains('woocommerce-order-received') || document.body.classList.contains('woocommerce-view-order')) {
            hideRawRosterData();
        }
        
    };

    return {
        init: init
    };
})();

window.onload = AllenSports.Order.init();