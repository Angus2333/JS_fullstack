//拿到要操作的元素
//在这个dom上滑动鼠标能控制滑块的位置
//能控制他的高度发生的变化
//根据该Dom高度的值来调整视频播放的速度
console.log(document.querySelector('.speed'));
var speed = document.querySelector('.speed')
var bar = document.querySelector('.speed-bar')
var video = document.querySelector('.flex')
speed.addEventListener('mousemove', function(e) {
    //控制滑块的位置
    //offsetTop是获取某个dom元素到浏览器顶端的距离 offsetHeight 是获取某个dom元素的高度
    var y = e.pageY - speed.offsetTop
    var percent = y / speed.offsetHeight
    var min = 0.4
    var max = 4
    var height = Math.round(percent * 100) + '%'
    bar.style.height = height
    var playbackRate = percent * (max - min) + min
    video.playbackRate = playbackRate
    bar.textContent = playbackRate.toFixed(2) + 'x'
})