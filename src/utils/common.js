// 公共方法
/**
 * python的range函数，根据条件生成范围的一个int整型数组（包含结束位置）
 * @param start 开始数字
 * @param end 结束数字
 * @param step 间隔
 * @returns {Array} int型数组
 */
export function range(start, end, step) {
  const arr = []
  for (let i = start; i <= end; i++) {
    if (i % step === 0) { arr.push(i) }
  }
  return arr
}

/**
 * 时间戳转换 格式:yyyy-mm-dd
 * @param v 时间戳
 * @returns {string} 时间串
 */
export function dateFormat(v) {
  if (v != null) {
    const date = new Date(v)
    const year = date.getFullYear()
    let month = date.getMonth() + 1
    month = month < 10 ? '0' + month : month
    let day = date.getDate()
    day = day < 10 ? ('0' + day) : day
    return `${year}-${month}-${day}`
  } else {
    return
  }
}

/**
 * 时间戳转换 格式：yyyy-mm-dd HH:MM:ss
 * @param v
 * @returns {string}
 */
export function dateTimeFormat(v) {
  if (v != null) {
    const date = new Date(v)
    const y = date.getFullYear()
    const m = (date.getMonth() + 1).toString().padStart(2, '0')
    const d = date.getDate().toString().padStart(2, '0')
    const h = date.getHours().toString().padStart(2, '0')
    const mm = date.getMinutes().toString().padStart(2, '0')
    const ss = date.getSeconds().toString().padStart(2, '0')
    return `${y}-${m}-${d} ${h}:${mm}:${ss}`
  }
}

Math.easeInOutQuad = function(t, b, c, d) {
  t /= d / 2
  if (t < 1) {
    return c / 2 * t * t + b
  }
  t--
  return -c / 2 * (t * (t - 2) - 1) + b
}

// 获取滚动条位置
var requestAnimFrame = (function() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) { window.setTimeout(callback, 1000 / 60) }
})()

/**
 * Because it's so fucking difficult to detect the scrolling element, just move them all
 * @param {number} amount
 */
function move(amount) {
  document.documentElement.scrollTop = amount
  document.body.parentNode.scrollTop = amount
  document.body.scrollTop = amount
}

function position() {
  return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop
}

/**
 * @param {number} to
 * @param {number} duration
 * @param {Function} callback
 */
export function scrollTo(to, duration, callback) {
  const start = position()
  const change = to - start
  const increment = 20
  let currentTime = 0
  duration = (typeof (duration) === 'undefined') ? 500 : duration
  var animateScroll = function() {
    // increment the time
    currentTime += increment
    // find the value with the quadratic in-out easing function
    var val = Math.easeInOutQuad(currentTime, start, change, duration)
    // move the document.body
    move(val)
    // do the animation unless its over
    if (currentTime < duration) {
      requestAnimFrame(animateScroll)
    } else {
      if (callback && typeof (callback) === 'function') {
        // the animation is done so lets callback
        callback()
      }
    }
  }
  animateScroll()
}

