function uppername(name){
    console.log(name.toUpperCase());
}

function fullName (first,callback){
    const fullName = first + " hasan";
    callback(fullName);
}

fullName("rokib",uppername);