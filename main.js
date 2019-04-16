var chilometri = prompt('quanti chilometri?');
var eta = prompt('quanti anni hai?');
var prezzo_chilometro;
prezzo_chilometro = 0.21;
var prezzo_biglietto = chilometri * prezzo_chilometro;

if (eta < 18)
{alert (prezzo_biglietto / 100 * 80 );
}

 else if (eta > 65)
{alert (prezzo_biglietto /100 * 60);
}

else
{alert (prezzo_biglietto);
}
