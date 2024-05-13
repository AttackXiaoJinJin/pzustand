
// create((set,get)=>{
//     a:1,
//     b:2,
//     c:derived((state)=>state.a+state.b)
// })
//
// create((set,get)=>{
//     a:1,
//     b:2,
//     c:{
//         computeFunc:(state)=>state.a+state.b,
//         derived:true
//     }
// })

// 思路就是使用derived加上flag，然后使用cache缓存下计算的值，然后再将state下定义的derived值替换成cacheValue
// function derived<T,U>(computeFunc:(state:T)=>U,memoize=false):{computeFunc:(state:T)=>U;derived:boolean;memoize?:boolean} {
function derived<T,U>(computeFunc:(state:T)=>U,memoize=false){
    return {
        computeFunc,
        derived:true,
        memoize
    }
}

export default derived
