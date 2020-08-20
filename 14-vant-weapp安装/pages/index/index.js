Page({
  data:{
    windowHeight:0,
    products:{},
    products_keys:[],
    nowid:0,
    nowtype:'健康坚果'
  },
  // 页面加载完毕后执行
  onReady(){
    // 获取屏幕高度
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          windowHeight:res.windowHeight
        });
      },
    });
    // Ajax
    wx.request({
      url: 'http://www.aiqianduan.com:8922/product',
      success:(data) => {
        this.setData({
          products:data.data.products,
          products_keys:Object.keys(data.data.products)
        });
      },
    });
  },
  // 左边栏目的点击
  lmTap(e){
    const index = e.target.dataset.index;
    const name = e.target.dataset.name;
    // console.log(index);
        this.setData({
      nowid:index,
      nowtype:name
    });
  }
});