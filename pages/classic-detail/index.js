// pages/classic-detail/index.js
import { ClassicModel } from '../../models/classic.js'
import { LikeModel } from '../../models/like.js'
let classicModel = new ClassicModel()
let likeModel = new LikeModel()

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
    classic: null,
    latest: true,
    first: false,
    likeStatus: false,
    likeCount: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad: async function (options) {
      let {cid,type} = options
      // console.log({cid,type});  
      let classic = await classicModel.getById(cid, type)
      // console.log(classic);
      if(classic) {
        this._getLikeStatus(classic.id,classic.type)
        this.setData({classic})
      }
    },
    async _getLikeStatus(cid,type) {
      let data = await likeModel.getClassicLikeStatus(cid, type)
      this.setData({
        likeStatus: data.like_status,
        likeCount: data.fav_nums
      })
    }
  }
})
