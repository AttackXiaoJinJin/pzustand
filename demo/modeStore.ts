import { create } from 'zustand';
import { devtools } from 'zustand/middleware'

interface IMode {
    mode:Record<string, string>;
    selected:boolean;
    disabled:boolean;
    onSetSelect:()=>void;
}

const useModeStore=create<IMode>()(devtools((set, get, storeApi)=>{
    return {
        mode:{a:'chen'},
        selected:true,
        disabled:false,
        onSetSelect:()=>{
            set({
                selected:!get().selected
            },false,'修改了select')
        }
    }
},{
    name:'useModeStore'
}))

export {useModeStore}
