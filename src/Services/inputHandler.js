export const handleIV=results=>{
    if(results.length===0){
        return false
    }
    if(results[0].iv){
        return true
    }
    return false
}