var button= document.getElementById('button');
    photoshop= document.getElementsByClassName('photoshop')[0,1,2];
    counter = 0;
    stope = document.getElementById('stop');
    stopvisi = window.getComputedStyle(stope);
    stophidden = stopvisi.getPropertyValue('visibility');
    prevention = document.getElementsByClassName('vis')[0];
    testas =    document.getElementsByClassName('vis')[1];

function forclick(){
    var button= document.getElementById('button'); 
    button.onclick = click;
}

function click(){
        counter = counter + 1;
        console.log(counter);
        if(counter == 2){
            prevention.style.visibility="hidden";
            testas.style.visibility="hidden";
            stope.style.visibility="visible";
        }
        if(counter == 4){
            alert(" Je vous ai demandé d'arreter ");
        }
        if(counter == 5){
            alert("Va falloir m'écouté ca va mal finir...");
        }
        if(counter == 6){
            stope.style.visibility="hidden";
            document.getElementById('modif1').innerHTML = 'JNORBUO';
            document.getElementById('modif2').innerHTML = 'MTAOIRFON';
            document.getElementById('modif3').innerHTML = 'NCRTAIEO';
            document.getElementById('modif4').innerHTML = 'M APOSDI EO POR';
            document.getElementById('modif5').innerHTML = 'ECXIPERENE PLRSSOLFNENEIOE';
        }
        if(counter == 7){
            testas.style.visibility="visible";
            testas.innerHTML ='Content?';
        }
        if(counter == 8){
            prevention.style.visibility="visible";
            testas.style.visibility="hidden";
            prevention.innerHTML='Très bien.';
        }
        if(counter == 9){
            document.getElementsByClassName('button')[0].style.display ="none"; 
        }
    }


const creatmove = document.querySelector('.creat');
const propmove = document.querySelector('.prop');
const expemove = document.querySelector('.expe');

window.addEventListener('scroll', () => {
    const {scrollTop, clientHeight} = document.documentElement;

    const topEltoTop = creatmove.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topEltoTop).toFixed() - clientHeight * 0.95){
        creatmove.classList.add('active');
    }
    if(scrollTop > (scrollTop + topEltoTop).toFixed() - clientHeight * 0.5){
        propmove.classList.add('active');
    }
    if(scrollTop > (scrollTop + topEltoTop).toFixed() - clientHeight * -0.3){
        expemove.classList.add('active');
    }
})