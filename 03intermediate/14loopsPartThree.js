const names = ["youtube", "facebook", "netflix", "prime", "Instagram", "flipkart"];

//************************* FOR OF LOOP */
// for (const n of names){
//     console.log(n)
// }


const symbols = {
    yt: "youtube",
    ig: "instagram",
    fb: "facebook",
    wa: "whats app"
}
//in is used for objects

for (const n in symbols){
    console.log(symbols[n]);
}
//or 
for (const n in symbols){
    console.log(`key is ${n} and value is: ${symbols[n]}`);
}
