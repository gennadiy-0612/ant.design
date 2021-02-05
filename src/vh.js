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
                vhSHCH.wholeHeight = '';
            }
        }
        window.addEventListener('orientationchange', vhSHCH.g);
        return vhSHCH.wholeHeight;
    },
    g: function () {
        if (1000 > window.innerWidth || 1000 > window.innerHeight) {
            if (window.innerHeight > window.innerWidth) {
                document.querySelector('.First_Screen')?.setAttribute('style', '');
                console.log('Height < Width')
            }
            if (window.innerHeight < window.innerWidth) {
                vhSHCH.height = window.innerHeight / 100;
                vhSHCH.wholeHeight = Math.ceil(vhSHCH.height * 100);
                document.querySelector('.First_Screen')?.setAttribute('style', 'height:' + vhSHCH.wholeHeight + 'px');
                console.log('Height > Width')
            }
        }
    },
}

window.addEventListener('loadstart', vhSHCH.setVh);
window.addEventListener('orientationchange', vhSHCH.g);

export default vhSHCH
















