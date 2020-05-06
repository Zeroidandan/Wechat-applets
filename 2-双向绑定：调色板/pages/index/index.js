Page({
    data: {
        r: 125,
        g: 125,
        b: 125
    },
    // 当用户拖拽红色条的时候做的事情
    changeR(e){
        // console.log(e);
        this.setData({
            r:e.detail.value
        });
    },
    // 当用户拖拽绿色条的时候做的事情
    changeG(e) {
        this.setData({
            g: e.detail.value
        });
    },
    // 当用户拖拽蓝色条的时候做的事情
    changeB(e) {
        this.setData({
            b: e.detail.value
        });
    }
});