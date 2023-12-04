
/* RICHIESTA */
const richiestaKm = prompt('Quanti KM dovrai percorrere?')
const kmInNumber = parseInt(richiestaKm)

console.log('richiestaKm', richiestaKm, typeof richiestaKm)
console.log('kmInNumber', kmInNumber, typeof kmInNumber)

/* RICHIESTA ETA' */
const richiestaEta = prompt('Quanti anni hai?')
const EtaInNumber = parseInt(richiestaEta)

console.log('richiestaEta', richiestaEta, typeof richiestaEta)
console.log('EtaInNumber', EtaInNumber, typeof EtaInNumber)




/* VERIFICO SCONTO DA APPLICARE */
 if (EtaInNumber < 18){
    /* CALCOLO PREZZO BASE */
    const prezzo = (kmInNumber * 0.21)

    const scontoPrezzo = prezzo - ((prezzo / 100) * 20)
    console.log('scontoPrezzo' , scontoPrezzo, typeof scontoPrezzo)
    document.querySelector('#result-container').innerHTML = 'Il prezzo del biglietto è €' + scontoPrezzo.toFixed(2);
 }

else if (EtaInNumber > 65){
    /* CALCOLO PREZZO BASE */
    const prezzo = (kmInNumber * 0.21)

    const scontoPrezzo = prezzo - ((prezzo / 100) * 40)
    console.log('scontoPrezzo' , scontoPrezzo, typeof scontoPrezzo)
    document.querySelector('#result-container').innerHTML = 'Il prezzo del biglietto è €' + scontoPrezzo.toFixed(2);
 }
 
/* ALTRIMENTI */
 else{
    const prezzo = (kmInNumber * 0.21)
    console.log('prezzo', prezzo, typeof prezzo)
    document.querySelector('#result-container').innerHTML = 'Il prezzo del biglietto è €' + prezzo.toFixed(2);
 }
 