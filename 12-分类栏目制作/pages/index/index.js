Page({
  data:{
    windowHeight:0,
    products:{},
    products_keys:[],
    // 声明式，当前在哪个栏目
    nowtype:'健康坚果',
    // 跳转到哪个id
    nowid:0
  },
  // 页面加载完毕
  onReady(){
    // 调取微信API，可以调用系统信息，从而得到屏幕高度
    wx.getSystemInfo({
            success: (res) => {
              // console.log(res); 
              this.setData({
                windowHeight:res.windowHeight
              });     
            },
    });
    // Ajax
    wx.request({
      url: 'http://www.aiqianduan.com:8922/product',
      success: (data) => {
        // console.log(data.data.products);   
        this.setData({
          products:data.data.products,
          // 提取对象的键名
          products_keys:Object.keys(data.data.products)
        })     
      },
    });
  },
  // 左边栏目的点击事件
  lmTap(e){
    const index = e.target.dataset.index;
    const name = e.target.dataset.name;
    // console.log(index);
    this.setData({
      nowid:index,
      nowtype:name
    });
  },
  // 卷动事件
  scrollType(e){
    // console.log(e);//e.detail.deltaY的值可以判定向上滚动还是向下滚动
    // console.log(e.detail.deltaY);
    // console.log(e.detail.scrollTop);

    //如果向下滚动
    if (e.detail.deltaY < 0) {
      const query = wx.createSelectorQuery()
      query.select('#t' + (this.data.nowid + 1)).boundingClientRect()
      query.selectViewport().scrollOffset()
      query.exec( (res) => {
        // console.log(res[0].top);// #the-id节点的上边界坐标 
        // 超过之后
        if (res[0].top <= 0) {
          this.setData({
            nowid:this.data.nowid + 1,
            nowtype: this.data.products_keys[this.data.nowid + 1]
          });
        }
      });
    }    
  }
});