//在一定时间内，如果持续请求，就会一直不执行，在规定的时间内没有第二次操作，才执行。
function debounce(fn, delay) {
    let timer = null;
    return function() { //debounce 的AO 不会回收，timer不会回收
        let arg = arguments
        clearTimeout(timer) //点第二次就消除第一次
        timer = setTimeout(() => {
            fn(arg)
        }, delay)
    }
}