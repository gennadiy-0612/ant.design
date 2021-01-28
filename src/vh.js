import "./index"

let vhSHCH = {
    height: '',
    firstScreen: '#top + .Screen2',
    setVh: function () {
        if (1024 > window.innerWidth && window.innerWidth > 320) {
            vhSHCH.height = window.innerHeight / 100;
            vhSHCH.wholeHeight = Math.ceil(vhSHCH.height * 100);
            document.querySelector(vhSHCH.firstScreen).setAttribute('style', 'height:' + vhSHCH.wholeHeight + 'px;');
        }
    }
}
window.addEventListener('orientationchange', vhSHCH.setVh);
window.addEventListener('load', vhSHCH.setVh);
export default vhSHCH;
