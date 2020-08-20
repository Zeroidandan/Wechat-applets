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
      var brand = e.target.dataset.brand;
      // console.log(brand);   
      this.setData({
        nowChoose:brand
      }); 
    },
    // 确定按钮的事件
    okHan(){
      this.triggerEvent('ok', {'brand': this.data.nowChoose});
    },    
    onChange(event) {
      console.log(event.detail, 'click right menu callback data')
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
          var arr = [];
          for(let zimu in data.data) {
            // 给每个字母设置一个数字
            var thenewitem = {
              key:zimu,
              list:[]
            };
            arr.push(thenewitem);
            // 再次遍历
            for (let pinpai in data.data[zimu]) {
                // console.log(pinpai);
                thenewitem.list.push(pinpai);
            }
          }
          // console.log(arr);
          
            this.setData({
                allbs: data.data,
                all_zimu: Object.keys(data.data),
                // 全部车辆数据的数组版本，外层还是对象
                allbs_array: arr
            });
        }
      });
    },
  },
  
})
