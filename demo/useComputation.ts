import {useWhyDidYouUpdate,useTimeout} from 'ahooks'

import {useModeStore,onCompute} from "./modeStore";
import {useModePerformanceStore} from "./modePerformanceStore";
import {useEffect, useMemo} from "react";


function useComputation() {
    // const res=useModeStore(onCompute)
    // const onChangeCompute1=(useModeStore((state)=>state.onChangeCompute1))

    const res=useModePerformanceStore((state)=>state.compute3)
    const onChangeCompute1=useModePerformanceStore((state)=>state.onChangeCompute1)
    const compute1=useModePerformanceStore((state)=>state.compute1)
    console.log(res,compute1,'res14')

    useTimeout(()=>{
        onChangeCompute1()
    },3000)


    return res
}

export default useComputation
