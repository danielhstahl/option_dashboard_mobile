//https://coderwall.com/p/_g3x9q/how-to-check-if-javascript-object-is-empty
export const isEmpty=obj=>{
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false
    }
    return true
}