export const loginUser = (username , password)=>{
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
            if(username === 'admin' && password ==='admin'){
                resolve({
                    success : true , 
                    data : {
                        username : 'bsingh' ,
                        email:'admin@ex'
                    }
                
                })
            }else reject({
                success : false ,
                error : 'invalid credentails'
            })
        } , 600)
    })
}