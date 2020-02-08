//index.js
const app = getApp()

Page({
  data: {
    // 推荐项
    categoryTitle:["推荐","烹饪能手","家居必备","音乐摄影","游戏电子"],
    currentIndex:0
  },

  onLoad: function() {
  },
  changeCategoryTitle:function(ev){
    this.setData({
      currentIndex:ev.target.dataset.index
    });
  },
  toGoodsDetail:function(){
    wx.navigateTo({
      url: '../goods_detail/goods_detail'
    })
  },
  // 跳转到求闲若渴
  toQiuxian(){
    wx.navigateTo({
      url: '../qiuxianruoke/qiuxianruoke'
    })
  }
})
