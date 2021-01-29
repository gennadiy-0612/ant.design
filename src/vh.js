import "./index"

let vhSHCH = {
    height: '',
    firstScreen: '#top + .Screen2',
    update: function () {
        if(location.href)
        vhSHCH.height = window.innerHeight / 100;
        vhSHCH.wholeHeight = Math.ceil(vhSHCH.height * 100);
        document.querySelector(vhSHCH.firstScreen)?.setAttribute('style', 'height:' + vhSHCH.h + 'px;');
    },
    setVh: function () {
        vhSHCH.w = window.innerWidth;
        vhSHCH.h = window.innerHeight;
        if ((600 > vhSHCH.w && vhSHCH.w > 359) || (vhSHCH.h > vhSHCH.w)) vhSHCH.update();
        else {
            document.querySelector(vhSHCH.firstScreen)?.setAttribute('style', 'height:100vh;');
        }
    }
}

window.addEventListener('load', vhSHCH.setVh);
window.addEventListener('resize', vhSHCH.setVh);
export default vhSHCH;
