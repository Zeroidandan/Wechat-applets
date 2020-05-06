Page({
    data: {
       nowred:[5,16,27,32]
    },
    // 点击小球
   clickOn(e){
       const n =e.target.dataset.n;
        //console.log('当前点击的是'+n);
        // 如果小球在数组中删除
        if (this.data.nowred.includes(n)) {
            this.setData({
                nowred:this.data.nowred.filter(item => item !=n)
            })
        }else{
        // 不在数组中加入
            //判断是否已经够6个
            if (this.data.nowred.length < 6) {
                this.setData({
                    nowred:[...this.data.nowred,n]
                   });
            }else{
                wx.showToast({
                  title: '最多只能选6个',
                  icon:'none',
                });
            }
        }
   },
    // 随机选出6个球   
   sj(){
        var arr = [];
        while(arr.length < 6){
            let n = parseInt(Math.random() * 33 +1);
            if (!arr.includes(n)) {
                arr.push(n);
            }
        }
        this.setData({
            nowred:arr
        });
   }
});