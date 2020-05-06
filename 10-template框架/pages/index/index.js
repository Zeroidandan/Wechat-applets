Page({
  data: {
      mydata: {
          a: 10,
          b: 20
      }
  },
  addA(){
    this.setData({
      mydata:{
        ...this.data.mydata,
        a: this.data.mydata.a + 1
      }
    })
  }
});