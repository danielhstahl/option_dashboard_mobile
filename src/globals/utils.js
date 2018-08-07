//https://coderwall.com/p/_g3x9q/how-to-check-if-javascript-object-is-empty
export const isEmpty=obj=>{
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false
    }
    return true
}

export const getAboveEpsilon=epsilon=>(arr, key)=>arr.filter(v=>v[key]>epsilon)

export const progressStyleGenerator=progressSize=>({
    marginTop:-progressSize/2,
    marginLeft:-progressSize/2,
    top:'50%',
    left:'50%',
    position:'absolute'
})