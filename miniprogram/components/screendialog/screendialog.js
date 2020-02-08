// components/screendialog/screendialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    goods:{
      price:200,
      name:"无印良品电饭煲",
      address:"",
      phone:"请输入",
      code:"请输入"
    },
    region:[],
    customItem:"全部",
    hasDetailAddress:false,
    codeText:"获取验证码",
    codeTime:60,
    hasGetCode:false
  },
  lifetimes:{
    attached:function(){
      if(this.data.region.length == 0){
        this.setData({
          'goods.address':"请输入"
        });
      }else{
        let temp = "";
        let that = this;
        this.data.region.forEach((value,index)=>{
          if(index != that.data.region.length-1){
            value = value + "/";
            temp += value;
          } else {
            temp += value;
          }
        });
        this.setData({
          "goods.address": temp
        });
      }
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    cancelbuy(){
      this.triggerEvent("cancelbuy",{},{});
    },
    addAddress(){
      console.log("");
    },
    bindRegionChange(e){
      this.setData({
        region : e.detail.value
      });
      let temp = "";
      let that = this;
      this.data.region.forEach((value, index) => {
        if (index != that.data.region.length - 1) {
          value = value + "/";
          temp += value;
        }else{
          temp += value;
        }
      });
      this.setData({
        "goods.address":temp,
        hasDetailAddress:true
      });
    },
    getCode(){
      this.setData({
        hasGetCode:true
      });
      this.tiemr();
    },
    // 验证码间隔器
    tiemr(){
      let that = this;
      let promise = new Promise((resolve,reject)=>{
        that.setData({
          codeText: that.data.codeTime + "秒后获取"
        });
        let secodeTimer = setInterval(function(){
          if(that.data.codeTime > 0){
            let text = (that.data.codeTime - 1)+"秒后获取"
            that.setData({
              codeText: text,
              codeTime: that.data.codeTime - 1
            });
          }else{
            that.setData({
              codeText: "获取验证码",
              codeTime: 60,
              hasGetCode:false
            });
            resolve(secodeTimer);
          }
        },1000);
      });
      promise.then(secodeTimer=>{
        clearInterval(secodeTimer);
      });
    },
    // 支付
    pay(){
      wx.requestPayment(
        {
          'timeStamp': '',
          'nonceStr': '',
          'package': '',
          'signType': 'MD5',
          'paySign': '',
          'success': function (res) {
            console.log("调用支付接口成功!");
            wx.showToast({
              title: '支付接口成功',
              icon:"loading",
              duration: 2000
            })
           },
          'fail': function (res) {
            console.log("调用支付接口失败!");
            wx.showToast({
              title: '支付接口失败',
              icon: "loading",
              duration:3000,
              success:function(){
                setTimeout(function(){
                  wx.navigateTo({
                    url: '../../pages/payed/payed',
                  })
                },2000);
              }
            })
           },
          'complete': function (res) {
            console.log("完成调用接口");
          
           }
        })
    }
  }
})
