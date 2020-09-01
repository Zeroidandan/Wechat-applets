Page({
  data:{
    m:10
  },
  addM(e){
    // console.log('被刺激了'),
    this.setData({
      m:this.data.m + e.detail.n,        
    });
  }
});