// miniprogram/pages/duansheli_video/duansheli_video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentVideoTip:"请录制工作状态",
    currentCenterText1:"拍摄物品的工作状态",
    currentCenterText2: "将帮助我们为您的物品定价",
    currentCenterNav:"视频教程",
    meidalist:["../../images/duansheli_video2.png","../../images/duansheli_video3.png"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  saveMedia:function(){
    wx.showModal({
      title: '草稿将保存3天',
      content: '我们将在两天内发送报价',
      cancelText:"保存",
      confirmText:'发送',
      confirmColor:"#007AFF",
      cancelColor:"#007AFF",
      success(res){
        if(res.confirm){
          wx.showLoading({
            title: '发送中...',
          })
          setTimeout(function () {
            wx.hideLoading();
            wx.showToast({
              title: '发送成功！',
              duration:2000
            });
          }, 2000)
        }else if(res.cancel){
          wx.showLoading({
            title: '保存中...',
          })
          setTimeout(function () {
            wx.hideLoading();
            wx.showToast({
              title: '保存成功！',
              duration: 2000
            });
          }, 2000)
        }
      }
    })
  }
})