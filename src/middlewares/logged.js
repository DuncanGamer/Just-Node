

const isLogged = (req, res, nex)=>{
    let isLogged = false
    if(isLogged == true){
        nex()
 }
 else{
     res.send('no estas logueado')
 }}

 exports.isLogged = isLogged