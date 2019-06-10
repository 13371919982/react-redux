const ADD_NUM = 'add'
const SUB_NUM = 'sub'

export function reducer( state=0, action) {
  switch( action.type) {
    case ADD_NUM:
      return state+1
    case SUB_NUM:
      return state-1
    default:
      return 10
  }
}

// action 返回一个对象
export function addNum() {
  return {
    type: ADD_NUM
  }
}

export function subNum() {
  return {
    type: SUB_NUM
  }
}

// 在redux里面做异步操作
export function addAsync() {
  return dispatch => {
    setTimeout(()=>{
      dispatch(addNum())
    },2500)
  }
}
