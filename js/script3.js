let age = prompt();
// console.log("hello");

if(age<3){
    if(age==1){
        console.log("korpe");
    }
    else{
        console.log('balaca usaq');
    }
}
else if(age>=3 && age<=5){
    console.log('baxcaya geden usaq');
}
else if(age>5 && age<17){
    if(age>5 && age<=9){
        console.log('ibtidai sinif sagirdi');
    }    
    else if(age>9 && age<14){
        console.log('orta sinif sagirdi');
    }
    else{
        console.log('abituriyent');
        console.log('hazirliqlara gedir');
    }
}
else if(age>=17 && age<20){
    console.log("telebe");
    console.log("cavan genc");
    console.log('ders oxuyur');
    console.log('imtahan kesr 51');
}
else if(age>=20 && age<22){
    console.log('magistr telebesi');
    console.log('ya esger');
    console.log('ya da isci');
    console.log("cavan genc");

}
else if(age>=22 && age<35){
    console.log('helede cavan amm isleyir');
}
else if(age>=35 && age<55){
    console.log('orta yasli');
}
else if(age>=55 && age<75){
    console.log('yasli');
    console.log('teqaudcu');
}
