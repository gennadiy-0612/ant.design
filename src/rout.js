import "./index";

let routLocal = {
    route: {
        links: document.querySelectorAll('.main-top-nav-anchor')
    },
    links: [
        '/onep',
        '/towp',
        '/threep',
        '/fourp'
    ],
    hrefs: {
        '/': 'main-page',
        '/onep': 'page2 twofixed',
        '/towp': 'page3 twofixed',
        '/threep': 'page4 twofixed',
        '/fourp': 'page5 twofixed'
    },
    initPage: function () {
        let allPages = document.querySelectorAll('#root > div');
        for (const pages of allPages) {
            if (pages.getAttribute('class') === this.hrefs[window.location.pathname]) {
                pages.setAttribute('style', 'display:block;');
            } else {
                pages.setAttribute('style', 'display:none;');
            }
        }
    },
    setPage: function () {
        let i;
        let l;
        let all = document.querySelectorAll('.main-top-nav-anchor');
        let maxData = all.length;
        for (i = 0, l = 0; i < maxData; i++, l++) {
            if (!this.links[l]) l = 0;
            all[i].setAttribute('href', this.links[l]);
        }
    },
    makePageChanger: function () {
        routLocal.initPage();
        routLocal.setPage();
    }
}

export default routLocal;
