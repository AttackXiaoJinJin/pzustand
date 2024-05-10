import {create} from 'zustand'
import {shallow} from 'zustand/shallow'
import type {StateCreator} from 'zustand'
import setMiddleware from "./middlewares/setMiddleware.ts";

const pcreate=<T>(createStore:StateCreator<T>)=>{

    const useStore=create<T>(
        /* 修改set第二个参数 */
        setMiddleware(createStore)
    )

    const puseStore=<U>(selector:(state: T) => U)=>{

        /* 默认使用浅比较 */
        return useStore(selector,shallow)
    }
    return puseStore
}

export {pcreate}
