import { create } from 'zustand';
import { devtools } from 'zustand/middleware'
import {memoize} from 'proxy-memoize';

interface IMode {
    mode:Record<string, string>;
    selected:boolean;
    disabled:boolean;
    onSetSelect:()=>void;
    // compute
    compute1:1,
    compute2:2,
    onChangeCompute1:()=>void;
}

const useModeStore=create<IMode>()(devtools((set, get, storeApi)=>{
    return {
        mode:{a:'chen'},
        selected:true,
        disabled:false,
        onSetSelect:()=>{
            console.log('修改了select')
            set({
                selected:!get().selected
            },false,'修改了select')
        },
        compute1:1,
        compute2:2,
        onChangeCompute1:()=>{
            set({
                compute1:5
            })
        }
    }
},{
    name:'useModeStore'
}))

// const onCompute = (state) => {
//     const {compute1,compute2}=state
//     const res=compute1+compute2
//     console.log('入参的值没有改变时，是否缓存了计算结果',res,'str32')
//     return res
// }

// 声明时不会计算结果，只有使用时才会
const onCompute = memoize((state) => {
    const {compute1,compute2}=state
    const res=compute1+compute2
    console.log('入参的值没有改变时，是否缓存了计算结果',res,'str32')
    return res
})


export {useModeStore,onCompute}
