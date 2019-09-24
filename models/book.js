import {
  Http
} from "../utils/http-p";

class BookModel extends Http {
  // 获取热门书籍(概要)
  getHotList() {
    return this.request({
      url: `/book/hot_list`,
    })
  }
  // 获取搜索书籍
  search(start, q) {
    return this.request({
      url: '/book/search',
      data: {
        summary: 1,
        q,
        start
      }
    })
  }

  // 获取喜欢书籍数量
  getMyBookCount() {
    return this.request({
      url: `/book/favor/count`
    })
  }
  // 获取书籍详细信息
  getDetail(bid) {
    return this.request({
      url: `/book/${bid}/detail`
    })
  }
  // 获取当前书籍的点赞状态
  getLikeStatus(bid) {
    return this.request({
      url: `/book/${bid}/favor`
    })
  }
  // 获取当前书籍的短评信息
  getComments(bid) {
    return this.request({
      url: `/book/${bid}/short_comment`
    })
  }
  postComments(book_id,content) {
    return this.request({
      url: `/book/add/short_comment`,
      method: 'POST',
      data: {
        book_id,
        content
      }
    })
  }
}

export { BookModel }