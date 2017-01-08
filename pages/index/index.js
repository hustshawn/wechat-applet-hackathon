//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Welcomet to hackathon!',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  gotoRundown: function() {
    wx.navigateTo({
      url: '../rundown/rundown',
    })
  },
  gotoQnA: function() {
    wx.navigateTo({
      url: '../qna/qna',
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
