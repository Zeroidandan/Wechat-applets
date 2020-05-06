Page({
  data:{
    m:88
  },
  addM(e){
    // console.log('被刺激了',e.detail.n);
      // 小叶总结的：儿子引发父亲对自己数据的更改
    this.setData({
      m:this.data.m + e.detail.n
    });
  }
});