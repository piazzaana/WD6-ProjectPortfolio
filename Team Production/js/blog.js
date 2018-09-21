var AllenSports = AllenSports || {};

AllenSports.Blog = (function() {

    var loadMoreButton = document.querySelector('.blog-articles_load-more > .btn');
    var articleContainer = document.querySelector('.blog-articles');
    var POST_API_URL = '/wp-json/wp/v2/posts';
    var MEDIA_API_URL = '/wp-json/wp/v2/media';
    var category;
    var page;
    var count;

    var getNextArticles = function(e) {
        var queryString = '?page=' + page + '&per_page=' + count;
        if (category != '') {
            queryString += '&categories=' + category;
        }
        e.preventDefault();
        jQuery.get(
            POST_API_URL + queryString,
            function(data) {
                var articles = '';
                if (data.length) {
                    for (var i = 0; i < data.length; i++) {
                        articles += renderNextArticle(data[i]);
                    }

                    articleContainer.innerHTML += articles;
                    page++;
                } else {
                    loadMoreButton.style.display = 'none';
                }
            }
        );
    };

    var renderNextArticle = function(article) {
        return '<div class="image-panel">' +
            '<a href="' + article.link + '" class="image-panel_link">' +
            '<div class="image-panel_image-container"><img class="image-panel_image" src="' + article.featured_image + '" scale="0"></div>    ' +
            '<div class="image-panel_content">        ' +
            '<div>' +
            '<div class="image-panel_title">' + article.title.rendered + '</div>' +
        '<div class="image-panel_description"></div>' +
            '<div class="image-panel_cta">    </div></div></div></a></div><div class="panel_divider"></div>';
    };

    var init = function() {
        if (loadMoreButton === null) {
            return false;
        }
        loadMoreButton.addEventListener('click', getNextArticles);
        category = loadMoreButton.dataset.category;
        page = loadMoreButton.dataset.page;
        count = loadMoreButton.dataset.count;
    };

    return {
        init: init,
        getNextArticles: getNextArticles
    }
})();

window.onload = AllenSports.Blog.init();