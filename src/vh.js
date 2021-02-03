const vhSHCH = {
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
    // g: function () {
    //     if (window.screen.orientation.type === 'landscape-primary' && 600 > vhSHCH.w && vhSHCH.w > 359) {
    //         document.querySelector('.First_Screen')?.setAttribute('style', 'height:auto;');
    //     }
    //     if (window.screen.orientation.type === 'portrait-primary' && 600 > vhSHCH.w && vhSHCH.w > 359) {
    //         document.querySelector('.First_Screen')?.setAttribute('style', 'height:' + vhSHCH.wholeHeight + 'px');
    //     }
    // }
}

window.addEventListener('load', vhSHCH.setVh);
window.addEventListener('orientationchange', vhSHCH.g);

export default vhSHCH;
