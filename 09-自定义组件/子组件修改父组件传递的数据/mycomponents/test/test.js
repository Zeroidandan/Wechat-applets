// mycomponents/test/test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    info:{
      type:'String',
      value:''
    },
    a:{
      type:'Number',
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    m:20
  },

  /**
   * 组件的方法列表
   */
  methods: {
   addA(e){
    this.triggerEvent('addA',{n:10})
   },
   addM(){
     this.setData({
       m:this.data.m + 5
     });
   }
  }
})
