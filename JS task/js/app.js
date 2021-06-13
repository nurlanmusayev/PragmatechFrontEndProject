// // SUAL 1 Dəyərin tipini ekrana çap edin
let a=prompt("Bir deyer daxil edin :")
alert(typeof(a))





// SUAL 2 Deyerin bos olub olmadigini yoxlayan metod yazin
let b=prompt("Bir metin daxil edin:")

if(b===""){
    alert("Deyer bosdur")
}else{
    alert("Deyer doludur")
}




// SUAL 3 Dəyərin tipini rəqəmə çevirərək əldə olunan nəticənin 2 qatını ekrana yazdırın.Tip çevirmə uğursuz alınarsa ona uyğun olaraq error mesajı çap elətdirin
let c=prompt("Bir eded daxil edin")

let d=Number(c);
if(d==Number(c)){
    alert(d*2)
}else{
    alert("Deyer doludur")
}




// SUAL 4 ededler massivi daxilində olan ədədləri ayrı massiv halına gətirib ekrana çap elətdirən metod yazın
let Array=[1,3,5,6,undefined,null,true,{},34,'FrontEndMasters','BackEndMAsters']

let numbers=[]

for(let i=0;i < Array.length;i++){
    if(typeof(Array[i]) == "number"){
        numbers.push(arr[i])
    }
} 

console.log(numbers)




// SUAL 5 ededler massivinin bütün elementlərini tiplərini edede çevirin. Tip çevirmə uğurlu alınıbsa əldə olunan nəticələri ayrı massiv olaraq çap elətdirin
let Array=[1,3,5,6,undefined,null,true,{},34,'FrontEndMasters','BackEndMAsters']

let number=[]
let string=[]
let boolean=[]
let empty=[]
let object=[]

for(i=0;i<Array.length;i++){
    if(typeof(Array[i])=="number"){
        number.push(Array[i])
    }
    if(typeof(Array[i])=="string"){
        string.push(Array[i])
    }
    if(typeof(Array[i])=="boolean"){
        boolean.push(Array[i])
    }
    if(typeof(Array[i])=="object"){
        object.push(Array[i])
    }
    if(typeof(Array[i])=="undefined"){
        empty.push(Array[i])
    }
}

console.log(number)
console.log(string)
console.log(boolean)
console.log(empty)
console.log(object)


// SUAL 8 ededler massivi daxilində olan string tiplərini daxilində neçə sait və samit olduğunu ekrana çap elətdirən metod yazın
let Array=[1,3,5,6,undefined,null,true,{},34,'FrontEndMasters','BackEndMAsters']

let sait = ['a','ı','o','u','e','ə','i','ö','ü'];

let string = [];
for(let i=0;i < arr.length;i++){
    if(typeof(arr[i]) === "string"){
        string.push(arr[i])
    }
}

let t = 0;
let samitArr = [];
for(let a=0;a < string.length;a++){
    for(let b=0;b < string[a].length;b++){
        samitArr.push(string[a][b])
        for(let c=0;c < sait.length;c++){
            if(string[a][b].toLowerCase() === sait[c]){
                t++;
            }
        }
    }
}

let samitCount = samitArr.length - t;
console.log('Sait:' + t)
console.log('samitlerin sayi:' + samitCount)