import React,{ Component } from 'react'
import { connect } from "react-redux"
import { addNum, subNum, addAsync } from "./redux/redux"

import Aa from "./components/aa"

// 将state映射到props中 将redux中reducer返回的新的状态映射到react中的props中去
// const mapStateToProps = (state) => {
//   return { newState: state }
// } 

// // 将各种dispatch也变成props 让你能够通过this.props使用
// const mapDispatchToProps = { addNum, subNum, addAsync }

// App = connect( mapStateToProps, mapDispatchToProps)(App,)

@connect(
  state => ({ newState: state}),
  { addNum, subNum, addAsync}
)

// 构造函数只执行一次
class App extends Component {
  render() {
    const { addNum, newState, subNum, addAsync} = this.props
    return (
      <div className='app'>
        <h1>{ newState }</h1>
        <input 
          type="button"
          defaultValue='数量增加'
          onClick={()=>{
            addNum()
          }}
        />
        <input 
          type="button"
          defaultValue='数量减少'
          onClick={()=>{
            subNum()
          }}
        />
        <input 
          type="button"
          defaultValue='数量增加(异步)'
          onClick={()=>{
            addAsync()
          }}
        />
        <Aa />
      </div>
    )
  }
}

export default App