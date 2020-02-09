//index.js
const app = getApp()

Page({
  data: {
    // 推荐项
    categoryTitle:["推荐","烹饪能手","家居必备","音乐摄影","游戏电子"],
    currentIndex:0,
    inputVal:""
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
  },
  // 跳转到搜索页
  toSearch(){
    console.log("aa");
    if(this.data.inputVal == ""){
      wx.showToast({
        title: '搜索值不能为空!',
      })
    }else{
      wx.navigateTo({
        url: `../search/search?inputVal=${this.data.inputVal}`
      })
    }
  },
  bindinput(e){
    this.setData({
      inputVal:e.detail.value
    });
  }
})
