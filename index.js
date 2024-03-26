// let karan={
//     firstname:'karanbaba',
//     lastname:'malviya',
//     age:21,
//     Email_Id:"malviyakaran13@gmail.com",
//     Address_Id:'sanatanpur Distric raisen madhyapradesh',


// };

// for(kd in karan){
//     document.write(kd +' :' + karan[kd] + '<br>');
// };

const karan=document.querySelector('#counter');

let increment=()=>{

    let kannu=parseInt(karan.innerText);

    kannu=kannu+1;
    karan.innerText=kannu;
};

let Decrement=()=>{

    let kannu=parseInt(karan.innerText);
    kannu=kannu-1;
    karan.innerText=kannu;
};
