
// for loop
// for(i=1;i<=10;i++){
//     if(i%2===0){
//         console.log("even number"+i);
//     }else{
//         console.log("odd number" +i)
//     }
// }

// while loop
// let i=1;
// while(i<=10){
//     console.log(i);
//     i = i+1;
// }


// Do while loop 
// value = 5;
// let table= 1;
// do{
//   console.log(`${value} x ${table} = ${table*value}`);
//   table++;
// }while(table<=10);

// for in 
// let monthss = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
// for (const key in monthss) {
     
//         const element = monthss[key];
        
//     console.log(element);
// }



// for off 
let months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
for (const iterator of months) {
    console.log(iterator)
}