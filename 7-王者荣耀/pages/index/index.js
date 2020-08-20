Page({
  data:{
    arr:[],
    nowType:'射手'
  },
//生命周期函数，就是Page的一生
//当页面就绪之后
  onReady(){
    wx.request({
      url: 'http://www.aiqianduan.com:56506/wzry',
      success:(data) => {
        this.setData({
          arr:data.data
        });
      } 
    })
  },
  changeType(e){
    this.setData({
      nowType:e.detail.value
    })
  }
});