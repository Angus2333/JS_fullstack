// component/ratingStar/ratingStar.js
const STAR_ON = "/assets/img/rating_star_small_on.png"
const STAR_OFF = "/assets/img/rating_star_small_off.png"
const STAR_HALF = "/assets/img/rating_star_small_half.png"
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        score: {
            type: Number,
            //父组件传值时自动执行,newVal最新传过来的值
            observer: function(newVal, oldVal, path) {
                let stars = [STAR_OFF, STAR_OFF, STAR_OFF, STAR_OFF, STAR_OFF]
                if (newVal > 0) {
                    newVal = newVal / 10
                    let floor = Math.floor(newVal)
                    if (floor != newVal) {
                        stars[floor] = STAR_HALF
                    }
                    for (let i = 0; i < floor; i++) {
                        stars[i] = STAR_ON
                    }
                }
                this.setData({
                    stars
                })
            }
        },
        iconSize: {
            type: String,
            value: '26px'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        stars: [STAR_OFF, STAR_OFF, STAR_OFF, STAR_OFF, STAR_OFF]
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})