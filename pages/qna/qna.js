//qna.js
//获取应用实例
Page({
  data: {
    msgs: [],
    curmsg: ''
  },
  //事件处理函数
  bindconfirm: function(e) {
    console.log(e);
    let newmsgs = [...this.data.msgs];
    let newmsg = e.detail.value;
    newmsgs.push(newmsg);
    this.setData({
      msgs: newmsgs,
      curmsg: ''
    });
    document.getElementById('input').value = '';
  },
  onLoad: function() {
      wx.setNavigationBarTitle({
          title: 'Q & A'
      })
  }
})
