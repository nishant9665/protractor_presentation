function test(x){
new Promise((resolve,reject)=>{

    if(x>10){
resolve('success....')
    }else{
        reject('error....')
    }

})
}

test(9).then(x=>{console.log(x)},y=>{console.log(y)})