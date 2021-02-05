const vhSHCH = {
    setVh: function () {
        vhSHCH.w = window.innerWidth;
        vhSHCH.h = window.innerHeight;
        if (1000 > vhSHCH.w || 1000 > vhSHCH.h) {
            if (vhSHCH.h > vhSHCH.w) {
                vhSHCH.height = window.innerHeight / 100;
                vhSHCH.wholeHeight = Math.ceil(vhSHCH.height * 100);
            }
            if (vhSHCH.h < vhSHCH.w) {
                vhSHCH.wholeHeight = 'auto';
            }
        }
        window.addEventListener('orientationchange', vhSHCH.g);
        return vhSHCH.wholeHeight;
    },
    g: function () {
        vhSHCH.setVh();
        if (1000 > vhSHCH.w || 1000 > vhSHCH.h) {
            document.querySelector('.First_Screen')?.setAttribute('style', '');
        }
    }
}

window.addEventListener('loadstart', vhSHCH.setVh);
window.addEventListener('orientationchange', vhSHCH.g);

export default vhSHCH
