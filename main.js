var bio={
    name:'Mohammed Asif',
    age:21,
    mobile:8943921209,
    email:'mohdasif6227@gmail.com',
    address:{
        state:'KERALA',
        city:'Malappuram',
        pin:676504,
    },
    hobbies:['photography','travel','painting','football']
}
console.log(bio);
console.log(bio.hobbies[0]);
for (i=0;i<=bio.hobbies.length-1;i++){
    console.log([bio.hobbies[i]]);
}