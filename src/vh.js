const vhSHCH = {
    setVh: function () {
        vhSHCH.w = window.innerWidth;
        vhSHCH.h = window.innerHeight;
        if (1070 > vhSHCH.w || 1070 > vhSHCH.h) {
            if (vhSHCH.h > vhSHCH.w) {
                if (600 > window.innerWidth && window.innerWidth > 359) {
                    vhSHCH.height = window.innerHeight / 100;
                    vhSHCH.wholeHeight = Math.ceil(vhSHCH.height * 100);
                }
            }
            if (1070 > window.innerWidth) {
                if (vhSHCH.h < vhSHCH.w) {
                    vhSHCH.wholeHeight = 'auto';
                }
            }
        }
        window.addEventListener('orientationchange', vhSHCH.g);
        return vhSHCH.wholeHeight;
    },
    g: function () {
        vhSHCH.setVh();
        if (1070 > vhSHCH.w || 1070 > vhSHCH.h) {
            document.querySelector('.First_Screen')?.setAttribute('style', '');
        }
    }
}

window.addEventListener('loadstart', vhSHCH.setVh);
window.addEventListener('orientationchange', vhSHCH.g);

export default vhSHCH
