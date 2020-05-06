Page({
    data: {
        array: ['男', '女'],
        array2: ['大一', '大二','大三', '大四'],
        objectArray: [
          {
            id: 0,
            name: '男'
          },
          {
            id: 1,
            name: '女'
          }
        ],
        objectArray: [
            {
              id: 0,
              name: '大一'
            },
            {
              id: 1,
              name: '大二'
            },
            {
              id: 2,
              name: '大三'
            },
            {
              id: 3,
              name: '大四'
            }
          ],
        focus: false,
        inputValue: ''
      },
      bindSexChange: function(e) {
        console.log('性别选择为', e.detail.value)
        this.setData({
          index: e.detail.value
        })
      },
      bindClassChange: function(e) {
        console.log('年级选择为', e.detail.value)
        this.setData({
          index2: e.detail.value
        })
      },
      bindKeyInput: function (e) {
        this.setData({
          inputValue: e.detail.value
        })
      },
      bindReplaceInput: function (e) {
        var value = e.detail.value
        var pos = e.detail.cursor
        var left
        if (pos !== -1) {
          // 光标在中间
          left = e.detail.value.slice(0, pos)
          // 计算光标的位置
          pos = left.replace(/11/g, '2').length
        }
    
        // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
        return {
          value: value.replace(/11/g, '2'),
          cursor: pos
        }
    
        // 或者直接返回字符串,光标在最后边
        // return value.replace(/11/g,'2'),
      },
      bindHideKeyboard: function (e) {
        if (e.detail.value === '123') {
          // 收起键盘
          wx.hideKeyboard()
        }
      }
});