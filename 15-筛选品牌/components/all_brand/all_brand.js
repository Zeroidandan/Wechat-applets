// components/all_brand/all_brand.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    windowHeight:0,
     // 用户现在在列表中点击的那个品牌
     nowChoose: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击
    clickcell(e){
      var pinpai = e.target.dataset.pinpai;
      // console.log(pinpai);   
      this.setData({
        nowChoose:pinpai
      }); 
    },
    // 确定按钮的事件
    okHan(){
      this.triggerEvent('ok', {'pinpai': this.data.nowChoose});
    }
  },
   // 组件的生命周期
   lifetimes: {
    attached() {
      // 得到屏幕高度
      wx.getSystemInfo({
        success: (res) => {
          this.setData({
            windowHeight:res.windowHeight
          });
        },
      });
       // Ajax，拉取所有品牌数据
       wx.request({
        url: 'http://www.aiqianduan.com:7897/allbs',
        success: (data) => {
          // 写形式转换程序，因为wxs文件中不能使用for var k in这样的语法
          // 这里就是一个thunk程序，形式转换程序
          var o = {};
          for(let zimu in data.data) {
            // 给每个字母设置一个数字
            o[zimu] = [];
            // 再次遍历
            for (let pinpai in data.data[zimu]) {
                // console.log(pinpai);
                o[zimu].push(pinpai);
            }
          }
            this.setData({
                allbs: data.data,
                all_zimu: Object.keys(data.data),
                // 全部车辆数据的数组版本，外层还是对象
                allbs_array: o
            });
        }
      });
    },
  },
  
})
