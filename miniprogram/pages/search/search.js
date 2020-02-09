// miniprogram/pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search:null,
    inputVal:"",
    inputShow:false,
    hasgoods:false,
    noGoodsTip:false,
    noExist:false,
    goods:{
      name:"kindle",
      lable:"消遣好物",
      num:"暂时缺货",
      img:"../../images/kindle.png"
    }
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
  toGoodsDetail(){
    if(this.data.goods.num == "暂时缺货"){
      this.setData({
        noGoodsTip:true
      });
    }
  },
  closeTip(){
    this.setData({
      noGoodsTip: false
    });
  }
})