import type {StateCreator} from "zustand";

/** 修改set行为的中间件
 * 1.强制set第二个参数为false，避免replace掉整个store
 * 2.给开发者使用时将第二个参数替换为devTool log
 * */
const setMiddleware=(func)=>{
    /* 注意对set、get的middleware修改不会同步作用到源码中的setState、getState */
    return (set,get,storeApi)=>{
        const _setState=storeApi.setState
        // 篡改set第二个参数为devLog
        storeApi.setState=(selector,devLog:string)=>{
            // 强制是false
            return _setState(selector,devLog)
        }
        const states=func(storeApi.setState,get,storeApi)
        return states
    }
}

export default setMiddleware
