// pages/search_result/search_result.js
// 当前页码，这个页码不会引发更新
var page = 1;
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
    // Ajax拉取数据
    wx.request({
      url: 'http://www.aiqianduan.com:7897/cars?page=1',
      success:(data) => {
        // console.log(data.data);   
        this.setData({
          results:data.data.results
        });     
      }
    });
  },
  // 滚动到底部时触发
  lowerHandler(){
    // console.log('到底了');
    // 加载更多页面
    page++;
    // 显示加载中
    wx.showLoading({
      title: '加载中',
    });
    // Ajax拉取数据
    wx.request({
      url: 'http://www.aiqianduan.com:7897/cars?page=' + page + '&brand=' + this.data.brand + '&color=' + this.data.color.join('v') + '&fuel=' + this.data.fuel.join('v') + this.data.exhaust.join('v') + this.data.engine.join('v'),
      success:(data) => {
        this.setData({
          results:[...this.data.results,...data.data.results]
        }); 
        //隐藏加载中
        wx.hideLoading();
      }
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
  drawer_inner_han(e){
    // console.log('抽屉发来的消息');
    console.log(e.detail.brand);
    this.setData({
      show:false
    });
    // 拉取品牌
    // 显示加载中
    wx.showLoading({
      title: '加载中',
    });
    page = 1,
    // Ajax拉取数据
    wx.request({
      url: 'http://www.aiqianduan.com:7897/cars?page=1&brand=' + e.detail.brand + '&color=' + e.detail.color.join('v') + '&fuel=' + e.detail.fuel.join('v') + e.detail.exhaust.join('v') + e.detail.engine.join('v'),
      success:(data) => {
        this.setData({
          results:data.data.results,
          brand: e.detail.brand,
          color: e.detailcolor,
          fuel: e.detail.fuel,
          exhaust: e.detail.exhaust,
          engine: e.detail.engine
        }); 
        //隐藏加载中
        wx.hideLoading();
      }
    });
  },
  draw_inner_closeHan(){
    // console.log('儿子drawinner发来了关闭');
    this.setData({
      show:false
    })    
  }
})