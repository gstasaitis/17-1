
var car = "bmw"

if (car == "bmw" || car == "mini" || car == "rolls-royce"){
    
    console.log(car + " Auomobilis priklauso BMW grupei")
} 
else if(car  == "vw" || car == "audi" || car == "bentley" || car == "bugatti" || car == "lamborghini" || car == "porsche") {
        console.log(car + " Automobilis priklauso VW grupei")
} 
else {
        console.log("Nerasta")
    }


var userInput = "obuolys"
switch (userInput.toLowerCase()) {
    case "obuolys":
        console.log(userInput + " yra vaisius.");
        break;
    case "kriause":
        console.log(userInput + " yra vaisius.");
        break;
    case "bananas":
        console.log(userInput + " yra vaisius.");
        break;
    case "ananasas":
        console.log(userInput + " yra vaisius.");
        break;
    case "melionas":
        console.log(userInput + " yra vaisius.");
        break;
    case "pomidoras":
        console.log(userInput + " yra daržovė.");
        break;
    case "kopustas":
        console.log(userInput + " yra daržovė.");
        break;
    case "agurkas":
        console.log(userInput + " yra daržovė.");
        break;
    case "bulve":
        console.log(userInput + "yra daržovė.");
        break;
    case "brokolis":
        console.log(userInput + " yra daržovė.");
        break;
    default:
        console.log(userInput + " nėra nei vaisius nei daržovė.");
}

var weekDay = prompt("Įveskite skaičių nuo 0-6")
switch (weekDay){
    case "0":
        document.write("Pirmadienis");
        break;
    case "1":
        document.write("Antradienis");
        break;
    case "2":
        document.write("Trečiadienis");
        break;
    case "3":
        document.write("Ketvirtadienis");
        break;
    case "4":
        document.write("Penktadienis");
        break;
    case "5":
        document.write("Šeštadienis");
        break;
    case "6":
        document.write("Sekmadienis");
        break;
    default:
        document.write("Skaičius nerastas");
}
