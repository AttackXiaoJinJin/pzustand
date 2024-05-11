import {useWhyDidYouUpdate,useTimeout} from 'ahooks'

import {useModeStore,onCompute} from "./modeStore";
import {useEffect, useMemo} from "react";


function useComputation() {
    const res=useModeStore(onCompute)

    const onChangeCompute1=(useModeStore((state)=>state.onChangeCompute1))

    // const onSetSelect=(useModeStore((state)=>state.onSetSelect))

    useTimeout(()=>{
        onChangeCompute1()
    },3000)


    return res
}

export default useComputation
