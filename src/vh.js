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
        if ((600 > vhSHCH.w && vhSHCH.w > 359) || (vhSHCH.h > vhSHCH.w)) vhSHCH.update();
        if ((1023 > vhSHCH.w && vhSHCH.w > 599) || (360 > vhSHCH.w && vhSHCH.w > 319)) document.querySelector(vhSHCH.firstScreen)?.setAttribute('style', 'height:100vh;');
    }
}

window.addEventListener('load', vhSHCH.setVh);
window.addEventListener('resize', vhSHCH.setVh);
export default vhSHCH;
