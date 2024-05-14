import {useWhyDidYouUpdate,useTimeout} from 'ahooks'

import {useModeStore,onCompute} from "./modeStore";
import {useModePerformanceStore} from "./modePerformanceStore";
import {useEffect, useMemo} from "react";


function useComputation() {
    // const res=useModeStore(onCompute)
    // const onChangeCompute3=(useModeStore((state)=>state.onChangeCompute3))
    // const compute3=(useModeStore((state)=>state.compute3))
    // const onChangeCompute1=(useModeStore((state)=>state.onChangeCompute1))

    // const res=useModePerformanceStore((state)=>state.compute3)
    const compute4=useModePerformanceStore((state)=>state.compute4)
    const onChangeCompute1=useModePerformanceStore((state)=>state.onChangeCompute1)
    console.log(compute4,'res14')

    useTimeout(()=>{
        onChangeCompute1()
    },3000)


    return 3
}

export default useComputation
