var AllenSports = AllenSports || {};

// AllenSports.Comm100 = (function () {
//     var comm100Triggers = document.querySelectorAll('.header-contact__item--chat, .home__help-box--chat');
//     var url = 'https://chatserver.comm100.com/chatwindow.aspx?planId=535&siteId=65128&pageUrl=http%3A%2F%2Fwww.allensportswear.com%2F&newurl=1&r=5';
//     var windowName = 'Chat';
//     var codePlan = 535;

//     var init = function () {
//         for (var i = 0; i < comm100Triggers.length; i++) {
//             comm100Triggers[i].addEventListener('click', function (e) {
//                 e.preventDefault();
//                 Comm100API.open_chat_window(null, codePlan);
//             });
//         }

//         document.getElementById('comm100-button-535').style.display = 'none';
//         let comm100Button = document.getElementById('comm100-float-button-2');
//         if (comm100Button) {
//           comm100Button.style.display = 'none';
//         }
//     };

//     return {
//         init: init,
//         codePlan: codePlan
//     };
// })();

var Comm100API = Comm100API || {};

(function (t) {
    function e(e) {
        var a = document.createElement("script"), c = document.getElementsByTagName("script")[0];
        a.type = "text/javascript", a.async = !0, a.src = e + t.site_id, c.parentNode.insertBefore(a, c)
    }

    t.chat_buttons = t.chat_buttons || [], t.chat_buttons.push({
        code_plan: AllenSports.Comm100.codePlan,
        div_id: "comm100-button-535"
    }), t.site_id = 65128, t.main_code_plan = AllenSports.Comm100.codePlan, e("https://chatserver.comm100.com/livechat.ashx?siteId="), setTimeout(function () {
        t.loaded || e("https://hostedmax.comm100.com/chatserver/livechat.ashx?siteId=")
    }, 5e3)
})(Comm100API || {});

AllenSports.Comm100.init();
