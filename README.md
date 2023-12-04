# js-biglietto-treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


1) Chiedo Km all'utente
2) Chiedo l'età all'utente
3) Calcolo prezzo base biglietto
4) Verifico lo sconto da applicare
  - SE l'utente è minorene 
    -- Applico uno sconto del 20% sul prezzo base del biglietto
    -- Mostro il prezzo scontato
  
  - SE l'utente è over 65
    -- Applico uno sconto del 40%
    -- Mostro il prezzo scontato
  
  -ALTRIMENTI 
    -- Mostro il prezzo base