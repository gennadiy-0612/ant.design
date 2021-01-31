import "./index"

let vhSHCH = {
    height: '',
    firstScreen: '#top + .Screen2',
    update: function () {
        vhSHCH.height = window.innerHeight / 100;
        vhSHCH.wholeHeight = Math.ceil(vhSHCH.height * 100);
        document.querySelector(vhSHCH.firstScreen)?.setAttribute('style', 'height:' + vhSHCH.h + 'px;');
    },
    setVh: function () {
        vhSHCH.w = window.innerWidth;
        vhSHCH.h = window.innerHeight;
        if ((600 > vhSHCH.w && vhSHCH.w > 359) && (vhSHCH.h > vhSHCH.w)) vhSHCH.update();
        if (600 > window.innerWidth && window.innerWidth > 359) console.log('ok');
        else document.querySelector(vhSHCH.firstScreen)?.setAttribute('style', '');
    },
    changeClass: function () {
        let head = document.querySelector('.Header');
        console.log(this.id);
        if (this.id === '') {
            this.id = 'show-all-menu';
            head.id = 'show-back-shadow';
            return true;
        }
        if (this.id === 'hide-all-menu') {
            this.id = 'show-all-menu';
            head.id = 'show-back-shadow';
            return true;
        }
        if (this.id === 'show-all-menu') {
            this.id = 'hide-all-menu';
            head.id = 'hide-back-shadow';
            return true;
        }
    },
    burger: function () {
        document.querySelector('.burger-shower').addEventListener('click', vhSHCH.changeClass);
    },
    allInOne: function () {
        vhSHCH.setVh();
        document.querySelector('.main-top-nav-anchor').addEventListener('click', vhSHCH.burger);
        window.addEventListener('popstate', function (e) {
            console.log('url changed')
        });
        window.addEventListener('locationchange', function () {
            console.log('location changed!');
        });
    }
}

window.addEventListener('load', vhSHCH.allInOne);
window.addEventListener('resize', vhSHCH.allInOne);
window.addEventListener('orientationchange', vhSHCH.allInOne);

export default vhSHCH;
