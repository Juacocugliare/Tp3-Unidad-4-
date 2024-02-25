d1 = prompt('Cuanto vas a recorrer?');

if(d1 <= 1000){
    alert("Te conviene ir a pie")    
} 

else if (d1 >= 1000 && d1 < 10000){
    alert("Te conviene ir en bicicleta")
}

else if (d1 >= 10000 && d1 < 30000){
    alert ("Te conviene ir en colectivo")
}

else if (d1 >= 30000 && d1 < 100000){
    alert("Te conviene ir en auto")
}

else if(d1 >= 100000){
    alert ("Tenes que ir en avion")
}