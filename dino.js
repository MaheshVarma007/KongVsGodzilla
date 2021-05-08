audio=new Audio('bgm.mp3');
ag=new Audio('roar.mp3');
setTimeout(() => {
    audio.play();
}, 100);
document.onkeydown = function (e) {
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if(e.keyCode== 37){
        dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dx-122+'px';
    }
    if(e.keyCode== 39){
        dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dx+122+'px';
    }
   
}

scr=0;
cross=true;

setInterval(() => {
    dino=document.querySelector('.dino');
    go=document.querySelector('.kg');
    go1=document.querySelector('.kg1');
    enemy=document.querySelector('.enemy');
    lost=document.querySelector('.lost');

    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

    ox=parseInt(window.getComputedStyle(enemy,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(enemy,null).getPropertyValue('top'));
    animdr=parseFloat(window.getComputedStyle(enemy,null).getPropertyValue('animation-duration'));

    abx=Math.abs(dx-ox);
    aby=Math.abs(dy-oy);
    if(ox<0){
        ndr=animdr - 0.02;
        enemy.style.animationDuration=ndr +'s';
        console.log("Duration = ",animdr);
    }
    if(abx<115 && aby<33){
        go.style.visibility='visible';
        go1.style.visibility='visible';
        enemy.classList.remove('animateEnemy');
        enemy.style.visibility='hidden';
        lost.style.visibility='visible';
        cross=false
        ag.play();
        audio.pause();
        setTimeout(() => {
            ag.pause();
        }, 8000);
    }
    else if(abx<60 && cross){
        scr+=1;
        score=document.querySelector('.stroke');
        score.innerHTML="SCORE: "+scr;
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 100);
    }
}, 100);