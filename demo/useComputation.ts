import {useWhyDidYouUpdate,useTimeout} from 'ahooks'

import {useModeStore,getSelectDisable} from "./modeStore";


function useComputation() {
    const str=useModeStore(getSelectDisable)
    const onSetSelect=(useModeStore((state)=>state.onSetSelect))

    useTimeout(()=>{
        onSetSelect()
    },3000)

    console.log(str,'str14')

    useWhyDidYouUpdate('测试派生状态',{
        str
    })


    return str
}

export default useComputation
