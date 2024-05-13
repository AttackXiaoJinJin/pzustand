import { pcreate
    ,derived
} from '../src/index';

interface IMode {
    mode:Record<string, string>;
    selected:boolean;
    disabled:boolean;
    onSetSelect:()=>void;
    // derived
    compute1:number;
    compute2:number;
    compute3:number;
    onChangeCompute1:()=>void;

}

const useModePerformanceStore=pcreate<IMode>((set, get, storeApi)=>{
    console.log('useModePerformanceStore','useModePerformanceStore19')
    return {
        mode:{a:'chen'},
        selected:true,
        disabled:false,
        onSetSelect:()=>{
            set({
                selected:!get().selected
            })
        },
        // compute
        compute1:1,
        compute2:2,
        onChangeCompute1:()=>{
            set({
                compute1:5
            })
        },
        /* 派生值直接定义在store中，且当依赖项变化时立即更新 */
        compute3:derived((state:IMode)=>state.compute1+state.compute2,true),

    }
})

export {useModePerformanceStore}
