var time=prompt();

if(time>=9 && time<11){
    console.log('Yuxudan dur');
}
else if (time>=11 && time <=12) {
    if (time==11) {
        console.log('el uzunu yu');
    }
    else if (time==12) {
        console.log('evden cix uniye get');
    }
}
else if(time>12 && time<=18){
    console.log('derse qulaq as :D');
}
else if(time>18 && time<20){
    console.log('yoldayam eve gedirem');
}
else if(time==20){
    console.log('eve catdim');
}
else{

    console.log('plana baxir');
}
