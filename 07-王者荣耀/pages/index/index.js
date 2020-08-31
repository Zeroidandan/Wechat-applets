Page({
  data:{
    arr:[],
    nowType:'射手'
  },
  // 生命周期
  onReady(){
    wx.request({
      url: 'http://www.aiqianduan.com:56506/wzry',
      success:(data) => {
        this.setData({
          arr:data.data
        })
      }
    })
  },
  changeHero(e){
    this.setData({
      nowType:e.detail.value
    })
  }
});