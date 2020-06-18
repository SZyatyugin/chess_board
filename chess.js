window.onload=function(){


let canvas=document.querySelector('#canvas');
let ctx=canvas.getContext('2d');
let letters=' abcdefgh';
let numbers=' 12345678';
let letters_x=75;
let numbers_y=75;
ctx.strokeRect(50,50,400,400);
for(i=1;i<=9;i++){
    for (j=1;j<=8;j++){
        if(j==1){
            ctx.strokeText(numbers.charAt(i),20,numbers_y);
           
            }
        if(j==8){
            
            ctx.strokeText(numbers.charAt(i),470,numbers_y);
            numbers_y+=50;
        }
        if(i==1){
            if(j>8)continue
        ctx.strokeText(letters.charAt(j),letters_x,40);
        letters_x+=50;
        }
        if(i==9){
            if(j>8)continue
            letters_x-=50;
        ctx.strokeText(letters.charAt(9-j),letters_x,470);
        
        }else{
            if(i%2==0){
                if(j%2==1){
                    ctx.fillRect(50*i,50*j,50,50);
                }
            }
            else{
                if(j%2==0){
                    ctx.fillRect(50*i,50*j,50,50);
                }
            }
        }
        
    }

}

}

