import "./index"

let vhSHCH = {
    height: '',
    firstScreen: '.First_Screen',
    update: function () {
        vhSHCH.height = window.innerHeight / 100;
        vhSHCH.wholeHeight = Math.ceil(vhSHCH.height * 100);
        document.querySelector(vhSHCH.firstScreen)?.setAttribute('style', 'height:' + vhSHCH.h + 'px;');
    },
    setVh: function () {
        vhSHCH.w = window.innerWidth;
        vhSHCH.h = window.innerHeight;
        if (600 > vhSHCH.w && vhSHCH.w > 359 && vhSHCH.h > vhSHCH.w) {
            vhSHCH.update();
            return true;
        }
        if (1024 > vhSHCH.w && vhSHCH.h < vhSHCH.w) {
            document.querySelector(vhSHCH.firstScreen)?.setAttribute('style', 'height: auto;');
            return true;
        } else document.querySelector(vhSHCH.firstScreen)?.setAttribute('style', '');
    },
}

window.addEventListener('load', vhSHCH.setVh);
window.addEventListener('orientationchange', vhSHCH.setVh);
window.addEventListener('resize', vhSHCH.setVh);

export default vhSHCH;
