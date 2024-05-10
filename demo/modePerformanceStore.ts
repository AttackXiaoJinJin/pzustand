import { pcreate } from '../src/index';

interface IMode {
    mode:Record<string, string>;
    selected:boolean;
    disabled:boolean;
    onSetSelect:()=>void;
}

const useModePerformanceStore=pcreate<IMode>((set, get, storeApi)=>{
    return {
        mode:{a:'chen'},
        selected:true,
        disabled:false,
        onSetSelect:()=>{
            set({
                selected:!get().selected
            })
        }
    }
})

export {useModePerformanceStore}
