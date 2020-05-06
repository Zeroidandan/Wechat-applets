//
Page({
  // 定义数据，定义的数据就可以在wxml中用双大括号进行插入
  data:{
    a:15,
  },
  add(){
    this.setData({
      a:this.data.a+1,
    });
  },
  cut(){
    this.setData({
      a:this.data.a-1,
    });
  }
});
