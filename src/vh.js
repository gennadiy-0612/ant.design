const vhSHCH = {
    land: 0,
    portrait: 0,
    setVh: function () {
        vhSHCH.w = window.innerWidth;
        vhSHCH.h = window.innerHeight;
        if (601 > vhSHCH.w && vhSHCH.w > 359) {
            if (vhSHCH.h > vhSHCH.w) {
                vhSHCH.height = window.innerHeight / 100;
                vhSHCH.wholeHeight = Math.ceil(vhSHCH.height * 100);
                return vhSHCH.wholeHeight;
            }
        }
    },
    g: function () {
        if ((!vhSHCH.land && window.screen.orientation.type === 'landscape-primary') && (vhSHCH.h < 1023)) {
            document.querySelector('.First_Screen')?.setAttribute('style', '');
            vhSHCH.land = 1;
        }
        if ((!vhSHCH.portrait && window.screen.orientation.type === 'portrait-primary') && (vhSHCH.h < 1023)) {
            document.querySelector('.First_Screen')?.setAttribute('style', '');
            vhSHCH.portrait = 1;
        }
    }
}

window.addEventListener('loadstart', vhSHCH.setVh);
window.addEventListener('orientationchange', vhSHCH.g);

export default vhSHCH
















