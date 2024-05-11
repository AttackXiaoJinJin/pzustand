
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
function derived<T,R>(computeFunc:(state:T)=>R) {
    return {
        computeFunc,
        derived:true
    }
}
// Map性能更好，但object更直观
const derivdCache={}

export {derivdCache}
export default derived
