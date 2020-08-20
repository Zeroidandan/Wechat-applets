// pages/search_result/search_result.js
// 当前页码，这个页码不会引发更新
var page = 1;
Page({
  data:{
    windowHeight:0,
    // 存放结果
    results:[],
    // 弹出层，测试方便改为true
    show: false
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
      url: 'http://www.aiqianduan.com:7897/cars?page=' + page,
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
      url: 'http://www.aiqianduan.com:7897/cars?page=' + page,
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
      url: 'http://www.aiqianduan.com:7897/cars?page=1&brand=' + e.detail.brand,
      success:(data) => {
        this.setData({
          results:data.data.results
        }); 
        //隐藏加载中
        wx.hideLoading();
      }
    });
  }
})