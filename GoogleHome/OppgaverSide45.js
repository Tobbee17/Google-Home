var Høyde = 130;
var MinimumHøyde = 100;
var Maxhøyde = 180;
if (Høyde > MinimumHøyde && Høyde < Maxhøyde) {
    console.log("Høy nok");
} 
else if (Høyde < MinimumHøyde) {
    console.log("Du er for lav");
}
else if (Høyde > Maxhøyde) {
    console.log("Du er for høy");
}