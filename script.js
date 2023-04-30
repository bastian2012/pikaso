alert("\n\nchoizi yon nomb exza decimal sa vle di ki gn chif soti nan zero pou rive nn 9 epi karakte soti nan a rive nn f !!!")

let tb =['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f']
function nbre(i){
    let ite=i;
    function saisi(){
        let user;
            do {
                user  = prompt(" antre koule "+ite+" an ki dwe exadecimal !!!")
            //alert(user.length)
            } while (user.length<6||user.length>6);
            return user;
    }
    includes_=(tab,a)=>{
        let result=true;
        for (let i = 0; i < a.length; i++){
            if (!tab.includes(a[i])) {
                result=false;
            }
        }
        return result
    }
    
    let u;
    do {
        u =saisi();
        includes_(tb,u);
    } while (!includes_(tb,u));
    
    function opurcase(u){
        let maj='';
        for (let i = 0; i < u.length; i++){
            maj+=u[i].toUpperCase()
        }
        return maj;
    }
return("#"+opurcase(u));

}
let nbre1=nbre(1);
let nbre2=nbre(2);
alert("maryaj koule : "+ nbre1+nbre2);