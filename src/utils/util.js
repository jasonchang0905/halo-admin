import moment from 'moment'
import 'moment/locale/zh-cn'
/**
 * 触发 window.resize
 */
export function triggerWindowResizeEvent() {
  const event = document.createEvent('HTMLEvents')
  event.initEvent('resize', true, true)
  event.eventType = 'message'
  window.dispatchEvent(event)
}

/**
 * Remove loading animate
 * @param id parent element id or class
 * @param timeout
 */
export function removeLoadingAnimate(id = '', timeout = 1500) {
  if (id === '') {
    return
  }
  setTimeout(() => {
    document.body.removeChild(document.getElementById(id))
  }, timeout)
}

export function timeAgo(time) {
  var currentTime = new Date().getTime()
  var between = currentTime - time
  var days = Math.floor(between / (24 * 3600 * 1000))
  if (days === 0) {
    var leave1 = between % (24 * 3600 * 1000)
    var hours = Math.floor(leave1 / (3600 * 1000))
    if (hours === 0) {
      var leave2 = leave1 % (3600 * 1000)
      var minutes = Math.floor(leave2 / (60 * 1000))
      if (minutes === 0) {
        var leave3 = leave2 % (60 * 1000)
        var seconds = Math.round(leave3 / 1000)
        return seconds + ' 秒前'
      }
      return minutes + ' 分钟前'
    }
    return hours + ' 小时前'
  }
  if (days < 0) return '刚刚'
  if (days < 5) {
    return days + ' 天前'
  } else {
    return moment(time).format('YYYY-MM-DD HH:mm')
  }
}
