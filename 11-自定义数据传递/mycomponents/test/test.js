// mycomponents/test/test.js
Component({
  /**
   * 组件的属性列表
   */
  // proerties接收自定义属性
  properties: {
    // 自定义属性info
    info:{
      // 类型是string
      type:'String',
      // 初始值是空
      value:''
    },
    m:{
      type:'number',
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    a:5
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addA(){
      this.setData({
        a:this.data.a +1
      });
    },
    addM(){
      // 触发一个自定义事件
      this.triggerEvent('addM',{
        n:3
      });
    }
  }
})
