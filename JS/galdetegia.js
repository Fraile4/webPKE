//Lortu galdetegiaren erantzunak

let erantzunak = {
};

let galderak = document.querySelectorAll('#galdera');
let erantzunakLortu = () => {
    for (let i = 1; i <= galderak.length; i++) {
        let galdera = `q${i}`;
        if (document.querySelector(`input[name="q${i}"]:checked`) != null) {
            erantzunak[galdera] = document.querySelector(`input[name="q${i}"]:checked`).value; 
        }
    }
    return erantzunak
}
let kalifikatu = () => {
    //Erantzunak 
    erantzunakLortu();
    // Kalifikazioa lortu.
    let kalifikazioa = 0;
    for(let i = 1; i <= galderak.length; i++){
        let galdera = `q${i}`;
        if (erantzunak[galdera] == "correct") {
            kalifikazioa++; 
        }else if(document.querySelector(`ìnput[name="q${i}"]:checked`) != null) {
            document.querySelector(`ìnput[name="q${i}"]:checked`).nextSibling.style.backgroundColor = 'rgba(255, 66, 66, 0.808)'
        }
    }
    // Erantzuna argitaratu.
    kalifikazioa = (kalifikazioa * 10)/galderak.length;
    document.getElementById('kalifikazioa').innerHTML = 'Zure nota ' + kalifikazioa .toFixed(2)+ ' da';
}


let buttonSubmit = document.querySelector(".submit-button");


buttonSubmit.addEventListener('click', kalifikatu);