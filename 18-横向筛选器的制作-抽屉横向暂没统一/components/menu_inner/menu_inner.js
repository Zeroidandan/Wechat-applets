// components/menu_inner/menu_inner.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    nowmenu:{
      type:String,
      value:''
    },
    nowo:{
      type:Object,
      value:{}
    },
    nowv:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    current:[]
  },
  // 组件的生命周期
  lifetimes: {
    attached() {
        // 设置properties为data，进行数据的统一
        this.setData({
          current:this.properties.nowv
        });
    }
  },
  methods:{
    handleFruitChange({ detail = {} }) {
      // 抄的API
      const index = this.data.current.indexOf(detail.value);
      index === -1 ? this.data.current.push(detail.value) : this.data.current.splice(index, 1);
      
      this.setData({
          current: this.data.current
      });
    },
    // 取消按钮
    cancelHan(){
      this.triggerEvent('cancel');
    },
    // 确认按钮
    okHan(){
      this.triggerEvent('ok', {
        'current': this.data.current
       });
    }
  }
})
