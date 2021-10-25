var gratis = 0<=3;
var barn = 4<=15;
var gammel = 67<=67;

var alder = Number(prompt("Hvor gammel er du"));

if (gratis < alder) {
    console.log("Du kan kjøre gratis");
} 
else if (alder == barn) {
    console.log("Du får 50% rabbat siden du er mellom 4-15 år");
}
else if (alder > barn) {
    console.log("Du må betale full pris");
}
else if (alder <= gammel) {
    console.log("Du får 50% rabbat siden");
}