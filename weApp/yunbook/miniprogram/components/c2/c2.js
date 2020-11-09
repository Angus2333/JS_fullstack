// components/c2/c2.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    test2method() {
      //触发父级(index.js里的)test2method方法
      this.triggerEvent('test2method', {
        passValue: "组件之间传的值"
      })
    }
  }
})
