const ADD_ITEMNUM='ADD_ITEMNUM'  //方便维护，便于修改方法
const REMEMBER_ANSWER='REMEMBER_ANSWER'
export default{
  //点击进入下一题
  [ADD_ITEMNUM](state,num){
    state.itemNum+=num
  },
  [REMEMBER_ANSWER](state,id){
    state.answerId.push(id)
  }
}