// miniprogram/pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      user:{
        username:"大白鹅",
        headimg:"../../images/headimg.png"
      },
      triggerText:"展开",
      triggerIcon:"∨",
      order:{
        name:"王二小",
        phone:"123 1234 1234",
        address:"广东省广州市越秀区环市东路463号广工大院"
      },
      goodslist:[
        {
          date:"2019-12-30",
          goods:[
            {
              src:"../../images/buy1.png",
              name:"无印良品电饭煲",
              price:200
            },
            {
              src: "../../images/buy2.png",
              name: "无印良品电饭煲",
              price: 200
            }
          ]
        }
      ],
      currentMenuItem:0
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
  // 转换按钮
  changeHistoryTitle:function(ev){
    this.setData({
      currentMenuItem:ev.currentTarget.dataset.index
    });
  },
  // 展开
  trigger:function(){
    let that = this;
    if (this.data.triggerText == "展开"){
      this.setData({
        triggerText : "收起",
        triggerIcon : "∧"
      });
      this.animate('.user_history_order_info', [
        {
          height: "0"
        },
        {
          height: "180rpx"
        }
      ], 100);
    } else if (this.data.triggerText == "收起"){
      this.setData({
        triggerText :"展开",
        triggerIcon : "∨"
      });
      this.animate('.user_history_order_info', [
        {
          height: "180rpx"
        },
        {
          height: "0"
        }
      ], 100);
    }
  }
})