Page({
    data:{
        arr:[],
        carColor:'白',
    },
    // 生命周期函数，就是page的一生
    // 当页面就绪之后
    onReady(){
        // 发出Ajax
        wx.request({
            url: 'http://www.aiqianduan.com:7897/cars',
            success: (data) =>{
                console.log(data.data);    
                this.setData({
                    arr:data.data
                });            
            }
        });
    },
    // 改变筛选的事件
    changeOption(e){
        this.setData({
            carColor:e.detail.value
        });
    }
});