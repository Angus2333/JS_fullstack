//在规定的时间内，只触发一次
function throttle(fn, delay) {
    let prev = Date.now() - delay //第一次点击就会出现
    return function() {
        let now = Date.now()
        let context = this
        let arg = arguments //让fn可以穿参数
        if (now - prev >= delay) {
            fn.apply(context, arg)
            prev = Date.now()
        }
    }
}