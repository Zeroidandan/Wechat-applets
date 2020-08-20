// components/drawer_inner/drawer_inner.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    brand:{
      type:String,
      value:''
    },
    filters: {
        type: Array,
        value: []
    },
    exhaust: {
      type: Array,
      value: []
    },
    color: {
        type: Array,
        value: []
    },
    fuel: {
        type: Array,
        value: []
    },
    engine: {
        type: Array,
        value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    windowHeight:0,
    // 当前是什么界面，main表示主界面，allbrand表示全部品牌,showall除品牌外5个以上的全部选项
    nowshow: 'main',
    // 当前选择的品牌
    brand: '',
    now: {
      // 当前选择的颜色，由于可以多选，所以数组存放
      color: [],
      fuel: [],
      exhaust: [],
      engine: []
    },
      // 父亲传入的筛选器
      filters: [],
      // 当前正在点谁的“全部”
      nowc: '颜色',
      nowoptions: ['红', '黄', '蓝', '绿', '黑'],
      nowe: 'color'
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
      // console.log(e.detail.brand);
      this.setData({
          nowshow: 'main',
          brand: e.detail.brand
      });
  },
  // 确定按钮的事情
    okHan() {
        this.triggerEvent('ok', {
          brand: this.data.brand,
          color: this.data.now.color,
          fuel: this.data.now.fuel,
          exhaust: this.data.now.exhaust,
          engine: this.data.now.engine
        });
    },
    // 儿子showall传来的
    okHan2(e){
      // console.log(e.detail.current)
      // console.log(e.detail.e)
      this.setData({
        now: {
            ...this.data.now,
            [e.detail.e]: e.detail.current
        },
        nowshow: 'main'
       });
    },
    pphan(e) {
        this.setData({
            brand: e.target.dataset.brand
        });
    },
    // X按钮
    closeBtnHan(){
      this.triggerEvent('close')
    },
    // 重置按钮
    resetBtnHan(){
      this.setData({
        brand:'',
        now: {
          ...this.data.now,
          color: [],
          fuel: [],
          exhaust: [],
          engine: []
        },
      });
    },
    // 除品牌之外的筛选，双色球逻辑
    ppphan(e){
      var k = e.target.dataset.k;
      var v = e.target.dataset.v;

      if (this.data.now[k].includes(v)) {
        this.setData({
          now:{
            ...this.data.now,
            [k]:this.data.now[k].filter(item => item !=v)
          }
        });
      }else{
        this.setData({
         now:{
          ...this.data.now,
          [k]:[...this.data.now[k],v]
         }
        });
      }
    },
    // 查看全部选项（除品牌）
    showalloption(_e){
      var e = _e.target.dataset.e;
      var c = _e.target.dataset.c;
      var options = _e.target.dataset.options;

      this.setData({
          nowoptions: options,
          nowc: c,
          nowe: e,
          nowshow: 'showall'
      })
    },
     // 全部品牌的取消按钮
     all_brand_cancelHan(){
      this.setData({
        nowshow:'main'
      });
    },
     // 查看全部的取消按钮
     showall_cancelHan(){
      this.setData({
        nowshow:'main'
      });
    },
  },
  // 组件的生命周期
  lifetimes: {
    // 当组件加载好之后
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
      console.log(this.properties.brand);
      // 把properties设置为data
      this.setData({
        brand: this.properties.brand,
        filters: this.properties.filters,
        now:{
          ...this.data.now,
          color: this.properties.color,
          engine: this.properties.engine,
          exhaust: this.properties.exhaust,
          fuel: this.properties.fuel
        }
      });
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})
