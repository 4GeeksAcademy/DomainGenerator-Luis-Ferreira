/*Generador de Dominios*/
let candidates=["Biden","Kamalla","Trump", "Clinton"];
let positions=["President","Governs","Senator","lobyst"];
let domains=[".com",".net",".org", ".gub"];

for(let candidate of candidates){
    for(let position of positions ){
        for(let domain of domains){
            console.log("www."+candidate+position+domain);
        }
    }
}

