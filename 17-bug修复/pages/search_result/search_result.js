// pages/search_result/search_result.js
// var brand = '奥迪';
Page({
  data:{
    windowHeight:0,
    // 存放结果
    results:[],
    // 弹出层，测试方便改为true
    show: false,
    brand:'',
    color: [],
    fuel: [],
    exhaust: [],
    engine: [],
    // 当前页码
    page: 1,
    // 筛选数组
    filters:[
      {
        'c': '颜色',
        'e': 'color',
        'options': ['红', '黄', '蓝', '绿', '黑', '白', '银灰', '咖啡', '香槟', '橙', '灰']
      },
     {
        'c': '燃料',
        'e': 'fuel',
        'options': ['汽油', '柴油', '油电混合', '纯电动']
      },
      {
        'c': '尾气标准',
        'e': 'exhaust',
        'options': ['国一', '国二', '国三', '国四', '国五']
      },
      {
        'c': '发动机排量',
        'e': 'engine',
        'options': ['1.0L', '1.2L', '1.4L', '1.4T', '1.6L', '1.6T', '1.8L', '1.8T', '2.0L', '2.0T', '2.2L', '2.2T', '3.0L', '3.0T', '4.0L', '4.0T', '5.0L', '5.0T']
      }
    ]
  },
  onReady(){
    // 得到屏幕高度
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          windowHeight:res.windowHeight
        });
      },
    });
    // 调用数据
    this.loadData();
  },
  // 封装拉取数据
  loadData(){
    // console.log('我是loadData');
    // 显示加载中
    wx.showLoading({
      title: '加载中',
    });
    // Ajax拉取数据
    wx.request({
      url: 'http://www.aiqianduan.com:56506/cars?' +
        'page=' + this.data.page + '&' +
        'color=' + this.data.color.join('v') + '&' +
        'fuel=' + this.data.fuel.join('v') + '&' +
        'exhaust=' + this.data.exhaust.join('v') + '&' +
        'engine=' + this.data.engine.join('v') + '&' +
        'brand=' + this.data.brand + '&'
      ,
      success:(data) => { 
        this.setData({
          results:[...this.data.results,...data.data.results]
        });     
        //隐藏加载中
        wx.hideLoading();
      }
    });
  },
  // 滚动到底部时触发
  lowerHandler(){
    // console.log('到底了');
    // 加载更多页面
    this.setData({
      page:this.data.page +1
    },function(){
      // 改完page之后做的事情
      this.loadData();    
    });
  },
  // 点击筛选按钮，弹出
  showPopup() {
    this.setData({ show: true });
  },
  // 点击黑色遮罩关闭
  onClose() {
    this.setData({ show: false });
  },
  // 当抽屉里面的确定按钮被点击
  drawer_inner_han(e){
    // console.log('抽屉发来的消息');
    // console.log(e.detail.brand);
    this.setData({
      show:false
    });
    this.setData({
      // 结果也清空
      results:[],
      page:1,
      brand:e.detail.brand,
      color:e.detail.color,
      fuel:e.detail.fuel,
      exhaust: e.detail.exhaust,
      engine: e.detail.engine,
    },function(){
      this.loadData();
    });
  },
  draw_inner_closeHan(){
    // console.log('儿子drawinner发来了关闭');
    this.setData({
      show:false
    })    
  }
})