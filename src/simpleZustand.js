/* 声明
* const useStore = create((set, get) => ({
*   a:[],
*   setA:()=>{
*    set({
*     a:[1]
*    })
*   }
* }));
*
* 使用
* const a=useStore((state)=>state.a)
* const setA=useStore((state)=>state.setA)
* */

import { useSyncExternalStore } from 'react';


// createStore:(set,get,storeApi)=>{ return { 开发者写的state } }
// 也就是执行createStore()返回的才是开发者写的state
const create=(createStore)=>{
  // 状态
  let state={}
  // 监听器
  const listeners=new Set()
  // 订阅
  const subscribe=(listener)=>{
    listeners.add(listener)
    // 类似useEffect用法
    return ()=>{
      listeners.delete(listener)
    }
  }
  // get
  const getState=()=>{
    return state
  }
  // set
  const setState=(_newState)=>{
    let newState=_newState
    if(typeof _newState==='function'){
      newState=_newState(state)
    }
    const oldState=state
    state={
      ...state,
      ...newState
    }
    // 触发监听器
    listeners.forEach((listener)=>{
      listener(state,oldState)
    })
  }

  const destroy=()=>{
    listeners.clear()
  }

  const storeApi={
    setState,
    getState,
    subscribe,
    destroy
  }
  /* state就是开发者的全局变量 */
  // createStore:(set,get,storeApi)=>{ return { 开发者写的state } }
  state=createStore(setState,getState,storeApi)
  // const a=useStore((state)=>state.a)
  // 执行useStore的时候会传入一个func（selector），func参数是state
  const useStore=(selector,equalFunc=Object.is)=>{


    return selector(state)
  }

}

export default create
