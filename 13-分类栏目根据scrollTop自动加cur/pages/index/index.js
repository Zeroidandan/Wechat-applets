// 所有栏目的scrollTop的分档点，它没有写到data中，因为这个值的变化不引发视图变化
var allTypeTops = [0];

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
        // Ajax数据请求返回
        // console.log(data.data.products); 
        const products = data.data.products;
        var sum = 0;
        for (let k in products) {
          // 计算栏目的高度
          sum += 120 * products[k].length + 40;
          allTypeTops.push(sum);
        }
        console.log(allTypeTops);

        this.setData({
          products:products,
          // 提取对象的键名
          products_keys:Object.keys(products)
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

       const scrollTop = e.detail.scrollTop;
       for (let i = 0; i < allTypeTops.length; i++) {
         if (scrollTop >= allTypeTops[i] && scrollTop < allTypeTops[i+1]) {
          //  console.log(i);
           this.setData({
             nowtype:this.data.products_keys[i]
           });
         }
       }
  },

});