var changevar=0, g, k, f=0, r=1, l=0, d=document, prentje1, prentbr1, prentje2, prentbr2, stop=false,plaatjesmatrix = new Array();
	
for (j=1; j < 17; j++) {
    k=0;
    while (k == 0)
    {
        g = Math.round(Math.random()*15) + 1;
        if (plaatjesmatrix[g] == null)
        {
            k=1;
            plaatjesmatrix[g] = "'"+ j + ".jpg'";
        }
    }
}

function waarde1kar(plaatje) {
    return plaatje.src.charAt(plaatje.src.length - 5);
}

function waarde2kar(plaatje) {
    return plaatje.src.substring(plaatje.src.length - 6, plaatje.src.length - 4);
}

function checkforwin() {
    if (
        (waarde1kar(plaatje1) == 1)&&
        (waarde1kar(plaatje2) == 2)&&
        (waarde1kar(plaatje3) == 3)&&
        (waarde1kar(plaatje4) == 4)&&
        (waarde1kar(plaatje5) == 5)&&
        (waarde1kar(plaatje6) == 6)&&
        (waarde1kar(plaatje7) == 7)&&
        (waarde1kar(plaatje8) == 8)&&
        (waarde1kar(plaatje9) == 9)&&
        (waarde2kar(plaatje10) == 10)&&
        (waarde2kar(plaatje11) == 11)&&
        (waarde2kar(plaatje12) == 12)&&
        (waarde2kar(plaatje13) == 13)&&
        (waarde2kar(plaatje14) == 14)&&
        (waarde2kar(plaatje15) == 15)&&
        (waarde2kar(plaatje16) == 16)){
        if (confirm("Proficiat, u heeft gewonnen.\nWenst u een nieuw spelletje te spelen?")) {
            location.reload();
        }else{
            stop=true;
        }
    }

}

function changer(a) {
    if (! stop) {
        if (changevar == 0){
            changevar = a;
            eval("d.images.plaatje"+changevar+".className = 'speciaalvakske'")
        } else if (changevar == a) {
            eval("d.images.plaatje"+changevar+".className = 'vakske'");
            changevar = 0;
        } else {
            prentje1 = "d.images.plaatje" + changevar;
            prentbr1 = "\"" + eval(prentje1+".src") + "\"";
            prentje2 = "d.images.plaatje" + a;
            eval(prentje2+".className = 'speciaalvakske'")
            prentbr2 = "\"" + eval(prentje2+".src") + "\"";
            anim();
            setTimeout('varreset()',450);
        }
    }
}

function varreset () {
    checkforwin();
    f = 0;
    eval(prentje1+".className = 'vakske';"+prentje2+".className = 'vakske';");
    changevar = 0
}

function anim() {
    if(f < 9) {
        f+=1;
    }
    if((f == 2)||(f == 8)){
        eval(prentje1+".width = 20;" + prentje2+".width = 30")
    }
    else if((f == 3)||(f == 7)){
        eval(prentje1+".width = 10;" + prentje2+".width = 15")
    }
    else if((f == 4)||(f == 6)){
        eval(prentje1+".width = 5;" + prentje2+".width = 8")
    }
    else if(f == 5){
        eval(prentje1+".width = 1;" + prentje2+".width = 1;" + prentje1+".src ="+prentbr2+";" + prentje2+".src ="+prentbr1)
    }
    else {
        eval(prentje1+".width = 40;" + prentje2+".width = 40")
    }
    if(f < 9) {
        setTimeout('anim()',15);
    }
}
for (j=1; j < 17; j++){eval("d.images.plaatje"+j+".src ="+plaatjesmatrix[j])}