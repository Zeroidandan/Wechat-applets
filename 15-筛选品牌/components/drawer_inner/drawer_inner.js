// components/drawer_inner/drawer_inner.js
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
    // 当前是什么界面，main表示主界面，allbrand表示全部品牌
    nowshow: 'main',
    // 当前选择的品牌
    brand: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showallbrand() {
      this.setData({
          nowshow: 'allbrand'
      });
    },
    all_brand_okHan(e) {
      // 收到了全部汽车品牌子组件的ok
      // console.log('儿子组件来信了')
      // console.log(e.detail.pinpai);
      this.setData({
          nowshow: 'main',
          brand: e.detail.pinpai
      });
  },
  // 确定按钮的事情
    okHan() {
        this.triggerEvent('ok', {
            brand: this.data.brand
        });
    },
    pphan(e) {
        this.setData({
            brand: e.target.dataset.brand
        });
    }
  },
  // 组件的生命周期
  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
      // 得到屏幕高度
      wx.getSystemInfo({
        success: (res) => {
          this.setData({
            windowHeight:res.windowHeight
          });
        },
      });
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  showallbrand(){

  }
})
