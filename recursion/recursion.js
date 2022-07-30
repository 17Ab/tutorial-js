let num = 1;

function show(){
    console.log("Hii", num);
    num++;
    if(num<=10228)
    show();
}


show()