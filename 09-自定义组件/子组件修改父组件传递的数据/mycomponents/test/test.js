// mycomponents/test/test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 接收一个自定义属性
    info:{
      type:'String',
      value:''
    },
    m:{
      type:'Number',
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    a:20
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 子组件向父亲通信，改变父组件的properties，需要触发自定义事件，使用triggerEvent()进行自定义事件的发放。
    // 父组件用bind:addM来接收这个自定义事件
    addM(){
      this.triggerEvent('addM',{n:5});
    },
    addA(){
      this.setData({
        a:this.data.a + 10
      })
    }
  }
})
