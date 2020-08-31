Page({
    data: {
       arr:['AA','BB','CC','DD'],
       content:''
    },
    // 文本框的双向绑定
    changeCon(e){
        this.setData({
            content:e.detail.value
        });
    },
    // 插入按钮事件监听
    insert(){
        // 改变数组
        this.setData({
            // ...实现数组的插入，push没有返回值
            // this.data.content：新值
            arr:[this.data.content,...this.data.arr]
        });
    },
    // 删除
    del(e) {
        // e.target表示你点击的元素，dataset表示身上的data-数据集合
        const n = e.target.dataset.n;
         // console.log(e.target.dataset.n);

        // 问一下用户是不是真的要删除
        wx.showModal({
            title: '动作危险！',
            content: '真的要删除' + this.data.arr[n + 1] + '么？',
            // 箭头函数，使上下文不在变化
            success: (o) => {
                // 如果用户点击的是确定
                if(o.confirm) {
                    // 删filter改map,不能用splice()实现删除
                    this.setData({
                        arr: this.data.arr.filter((item, index) => index != n)
                    });

                    // 调用微信的API，提示
                    wx.showToast({
                        title: '成功删除'
                    });
                }
                // 不用else，因为用户点击了取消什么都不做
            }
        });
    }
});