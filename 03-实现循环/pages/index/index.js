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
            arr:[...this.data.arr,this.data.content]
        });
    },
});