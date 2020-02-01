// miniprogram/pages/goods_detail/goos_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      goods:{
        headimg:"../../images/dianfanbao.png",
        name:"无印良品电饭煲",
        price:200,
        dec: "搬家的时候朋友送的，不会做饭平时用的不多，不过感觉光摆着也挺好看的~欢迎喜欢的人来买走呀！",
        lable:['仅使用3次','极简style'],
        others:{
          pinpai:"MUJI",
          gongneng:"煮粥、饭",
          waiguan:"基本无划痕",
          yuanjia:"399",
          time:"半年"
        },
        serve:"必定回收 · 上门取货 · 商品维护 ",
        xiaci:"内胆有轻微划痕，锅盖打开时有时候会卡住",
        detailimg:["../../images/detail1.png","../../images/detail2.png"]
      },
    currentMenuItem:0,
    showAdd:false
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
  changeHistoryTitle: function (ev) {
    this.setData({
      currentMenuItem: ev.currentTarget.dataset.index
    });
  },
  addToCart(){
    let that = this;
    this.setData({
      showAdd:true
    });
    setTimeout(function(){
      that.setData({
        showAdd:false
      })
    },1000);
  }
})