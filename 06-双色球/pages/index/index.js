Page({
  data:{
      nowsred:[],
      nowsblue:[]
  },
  clickreds(e){
      const n = e.target.dataset.n;
      if (this.data.nowsred.includes(n)) {
          this.setData({
              nowsred:this.data.nowsred.filter(item => item != n )
          })
      }else{
        if (this.data.nowsred.length < 6) {
            this.setData({
                nowsred:[...this.data.nowsred,n]
            })
        }else{
            wx.showToast({
              title: '最多选6个',
              icon:'none'
            })
        }
      }
  },
//   随机
  sjred(){
      var arr1 = [];
      while(arr1.length < 6){
          let n1 = parseInt((Math.random() * 33) + 1);          
          if (!arr1.includes(n1)) {
            arr1.push(n1);
          }
      }
      this.setData({
          nowsred:arr1
      })
  },
  // 蓝色球
  clickblues(e){
    const n = e.target.dataset.n;
    if (this.data.nowsblue.includes(n)) {
      this.setData({
        nowsblue:this.data.nowsblue.filter(item => item != n )
      })
  }else{
    if (this.data.nowsblue.length < 1) {
        this.setData({
          nowsblue:[...this.data.nowsblue,n]
        })
    }else{
        wx.showToast({
          title: '最多选1个',
          icon:'none'
        })
    }
  }
  },
  sjblue(){
    var arr2 = [];
    while(arr2.length < 1){
        let n2 = parseInt((Math.random() * 16) + 1);          
        if (!arr2.includes(n2)) {
          arr2.push(n2);
        }
    }
    this.setData({
        nowsblue:arr2
    })
},
});