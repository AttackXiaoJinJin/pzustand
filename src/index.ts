import {create} from 'zustand'
import {shallow} from 'zustand/shallow'
import type {StateCreator} from 'zustand'
import {memoize} from 'proxy-memoize';
import setMiddleware from "./middlewares/setMiddleware.ts";
import derived from './derived.ts'

const pcreate=<T>(_createStore:StateCreator<T>)=>{
    /* 派生缓存 */
    // Map性能更好，但object更直观
    const derivedCache:Record<string, <T,U>(state:T)=>U>={}

    const createStore:StateCreator<T>=(set, get, storeApi)=>{
        const store=_createStore(set, get, storeApi)
        /* 篡改derived对象 */
        Object.entries(store).forEach(([key,value])=>{
            if(value.derived){
                /* 开放option，由开发者自己判断是否需要使用proxy-memoize */
                if(value.memoize){
                    derivedCache[key]=memoize(value.computeFunc)
                }else{
                    derivedCache[key]=value.computeFunc
                }
            }
        })
        Object.entries(derivedCache).forEach(([key,computeFunc])=>{
            store[key]=computeFunc(store)
        })
        return store
    }


    const useStore=create<T>(
        /* 修改set第二个参数 */
        setMiddleware(createStore)
    )

    /* 订阅派生func，以让派生计算值依赖变化时立即计算最新值 */
    // todo：只订阅一个事件，是否会触发不相关的value计算？,不会，因为memoize了
    useStore.subscribe((store, prevStore)=>{
        Object.entries(derivedCache).forEach(([key,computeFunc])=>{
            store[key]=computeFunc(store)
        })
    })

    const puseStore=<U>(selector:(state: T) => U)=>{
        /* 默认使用浅比较 */
        return useStore(selector,shallow)
    }
    return puseStore
}

export {pcreate,derived}
