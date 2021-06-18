// Reqemlerinin cemi 10 dan kicin olan funksiya

let arr=[1,4,56,23,67,89,145,89,200,35]


function cem() {
    for(i=0;i<arr.length;i++){
        let a=arr.filter((n,m)=> n+m<10)
        return a
    }

}
console.log(cem())