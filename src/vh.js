const vhSHCH = {
    style: '',
    setVh: function () {
        vhSHCH.height = window.innerHeight / 100;
        vhSHCH.wholeHeight = Math.ceil(vhSHCH.height * 100);
        vhSHCH.w = window.innerWidth;
        vhSHCH.h = window.innerHeight;
        if (600 > vhSHCH.w && vhSHCH.w > 359) {
            if (vhSHCH.h > vhSHCH.w) {
                return vhSHCH.wholeHeight;
            }
        }
    },
    g: function () {
        document.querySelector('.First_Screen')?.setAttribute('style', '');
    }
}

window.addEventListener('load', vhSHCH.setVh);
window.addEventListener('orientationchange', vhSHCH.g);

export default vhSHCH;
