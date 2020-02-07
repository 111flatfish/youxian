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
    showAdd:false,
    scaleCart:false,
    hasCart:false,
    isBuy:false
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
  // 添加到购物车
  addToCart(){
    let that = this;
    this.setData({
      showAdd:true
    });
    this.animate(".cart_add",[
      {scale:[1.0,1.0],bottom:"40rpx",left:"300rpx"},
      { scale: [0.5, 0.5], bottom: "96rpx", left: "450rpx"},
      { scale: [0.1, 0.1], bottom: "152rpx", left: "600rpx"}
    ],300,function(){
      that.setData({
        showAdd:false
      });
      that.animate(".cart",[
        {scale:[1.0,1.0]},
        { scale: [1.2, 1.2]},
        { scale: [1.0, 1.0]},
      ],200,function(){
        that.setData({
          hasCart:true
        });
      });
    });
  },
  // 立即购买
  buy(){
    let that = this;
    this.setData({
      isBuy:true
    });
    console.log("buy");
    this.animate(".screendialog_content",[
      {height:"0"},
      { height: "500rpx" },
      { height: "1114rpx" }
    ],100,function(){
      console.log("11");
      that.animate(".screendialog_mask",[
        {backgroundColor:"#000",opacity:0},
        { backgroundColor: "#000", opacity: 0.5 },
      ],10,function(){
      }.bind(that));
    }.bind(this));
  },
  // 取消购买
  cancelBuy(){
    let that = this;
    console.log("cancel"
    )
    this.animate(".screendialog_content", [
      { height: "1114rpx" },
      { height: "500rpx" },
      { height: "0rpx" }
    ], 100, function () {
      console.log("this.buy" + that.data.isBuy);
      that.animate(".screendialog_mask", [
        { backgroundColor: "#000", opacity: 0.5 },
        { backgroundColor: "#000", opacity: 0 }
      ], 10, function () {
        that.setData({
          isBuy:false
        });
      }.bind(that));
    }.bind(this));
  }
})