// mycomponents/test/test.js
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
    a:10,
    b:20,
    c:30
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addA(){
      this.setData({
        a:this.data.a + 1
      })
    },
    addB(){
      this.setData({
        b:this.data.b + 5,
      })
    }
  }
})
