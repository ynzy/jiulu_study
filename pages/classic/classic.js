// pages/classic/classic.js
import { ClassicModel, } from "../../models/classic";
import { LikeModel } from "../../models/like";

let classicModel = new ClassicModel()
let likeModel = new LikeModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic: null, //期刊数据
    latest: true,
    first: false
  },

  onLike(event) {
    let { behavior } = event.detail
    let { id, type } = this.data.classic
    console.log(behavior);
    likeModel.like(behavior, id, type).then(res => {
      console.log(res);
    })
  },
  onNext() {

  },
  onPrevious() {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest()
      .then(classic => {
        console.log(classic);
        this.setData({
          classic
        })
      })
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

  }
})