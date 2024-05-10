import {useWhyDidYouUpdate,useTimeout} from 'ahooks'
import { useState } from 'react'
import {useModeStore} from "./modeStore";
import {useModePerformanceStore} from './modePerformanceStore'

function useArrayRerender() {
    // /* 返回单个值，修改state时不会触发rerender */
    // const mode=useModeStore((state)=>state.mode)
    // const disabled=useModeStore((state)=>state.disabled)
    /* 返回拼写的 */
    const arr=useModeStore((state)=>[state.mode,state.disabled])
    const onSetSelect=useModeStore((state)=>state.onSetSelect)

    /* performance 返回拼写的 */
    // const arr=useModePerformanceStore((state)=>[state.mode,state.disabled])
    // const onSetSelect=useModePerformanceStore((state)=>state.onSetSelect)


    useTimeout(()=>{
        onSetSelect()
    },3000)

    useWhyDidYouUpdate('测试store返回单个和使用数组返回批量，在store.selected值改变时是否会重渲染',{
        // mode,
        // disabled,
        arr,
    })

}

export default useArrayRerender
