let symbol = "x";
let timerdisplay = document.createElement("p");
let ai = true;
// det meste af min aflevering her handler om mig som prøver at få området til at fungere, efter jeg skal få ændret hele koden for "checkWinner"
// Derfor er alt kode udenfor "rows" og "checkwinner" ikke særligt vigtigt i hvad jeg har lavet
let rows = [// jeg har udvidet spille området til et til et 7x6 grid, hvilket jeg gætter på er standart 4 på stribe længde
  ["b", "b", "b", "b", "b", "b", "b"],
  ["b", "b", "b", "b", "b", "b", "b"],
  ["b", "b", "b", "b", "b", "b", "b"],
  ["b", "b", "b", "b", "b", "b", "b"],
  ["b", "b", "b", "b", "b", "b", "b"],
  ["b", "b", "b", "b", "b", "b", "b"],
];
// her i starten har jeg prøvet at få det til at virke og i starten fik jeg det til at virke på et 3x6 område. Men da jeg skulle begynde med at øge x retningen så blev det svært.
function checkWinner() {
  for (let i = 0; i < 4; i++) { // ændret til at der skal være 4 i før den declarer en vinder i spillet. Selvom det ikke virker ordenligt efter mine ændinger længere nede i coden.
    if(rows[i][0].innerHTML === rows[i][1].innerHTML && rows[i][1].innerHTML === rows[i][2].innerHTML && rows[i][0].innerHTML != "b")
      return "winner: " + rows[i][0].innerHTML;

    if(rows[0][i].innerHTML === rows[1][i].innerHTML && rows[1][i].innerHTML === rows[2][i].innerHTML && rows[0][i].innerHTML != "b")
      return "winner: " + rows[0][i].innerHTML;

      if(rows[1][i].innerHTML === rows[2][i].innerHTML && rows[2][i].innerHTML === rows[3][i].innerHTML && rows[1][i].innerHTML != "b")
        return "winner: " + rows[1][i].innerHTML;

        if(rows[i][1].innerHTML === rows[i][2].innerHTML && rows[i][2].innerHTML === rows[i][3].innerHTML && rows[i][1].innerHTML != "b")
          return "winner: " + rows[i][1].innerHTML;

        if(rows[2][i].innerHTML === rows[3][i].innerHTML && rows[3][i].innerHTML === rows[4][i].innerHTML && rows[2][i].innerHTML != "b")
          return "winner: " + rows[2][i].innerHTML;

          if(rows[i][2].innerHTML === rows[i][3].innerHTML && rows[i][3].innerHTML === rows[i][4].innerHTML && rows[i][2].innerHTML != "b")
            return "winner: " + rows[i][2].innerHTML;

          if(rows[3][i].innerHTML === rows[4][i].innerHTML && rows[4][i].innerHTML === rows[5][i].innerHTML && rows[3][i].innerHTML != "b")
            return "winner: " + rows[3][i].innerHTML;

            if(rows[i][3].innerHTML === rows[i][4].innerHTML && rows[i][4].innerHTML === rows[i][5].innerHTML && rows[i][3].innerHTML != "b")
              return "winner: " + rows[i][3].innerHTML;

            if(rows[4][i].innerHTML === rows[5][i].innerHTML && rows[5][i].innerHTML === rows[6][i].innerHTML && rows[4][i].innerHTML != "b")
              return "winner: " + rows[4][i].innerHTML;

              if(rows[i][4].innerHTML === rows[i][5].innerHTML && rows[i][5].innerHTML === rows[i][6].innerHTML && rows[i][4].innerHTML != "b")
                return "winner: " + rows[i][4].innerHTML;
// Jeg fik mit 3x6 område til at fungere her ved at kopiere den tidligere kode ovenfor også skifte rundt på i og tallet ved siden af.
// fik det nemlig til at virke ved at bytte rundt på tallet og i på coden, også +1 på alle talne i den næste længde.
  }
// her kommer delen som fik hele mit spil til at bryde sammen, siden der ikke er noget i og ellers bare en masse tal, så kunne jeg ikke lige finde systemet til at få det hele til at passe
// På en måde fik jeg det til at virke, men ikke på den måde jeg havde ønsket, først og fremmest SKAL man sætte noget i venstre bund før det virker, så vinder man på 3 selvom den er sat til 4.
  if(rows[0][0].innerHTML === rows[1][1].innerHTML && rows[1][1].innerHTML === rows[2][2].innerHTML && rows[0][0].innerHTML != "b")
    return "winner: " + rows[0][0].innerHTML;

  if(rows[2][0].innerHTML === rows[1][1].innerHTML && rows[1][1].innerHTML === rows[0][2].innerHTML && rows[2][0].innerHTML != "b")
    return "winner: " + rows[2][0].innerHTML;
// what in the goddamn, på det her tidspunkt mistede jeg overblikket, da jeg ikke længere synes at det gav mening, Fandt flere bugs da jeg begyndte på delen nedenunder.
// Bugs såsom at man kan vinde ved at have 2 på linje, hvis du bare ligger noget nede i venstre bund.(nogle gange virker det andre gange ik afhængig af position)
// Det store problem jeg har er at jeg ikke ved hvordan jeg kan få resten af området til at virke som et tic tac toe spil.
if(rows[0][2].innerHTML === rows[1][1].innerHTML && rows[1][1].innerHTML === rows[2][0].innerHTML && rows[0][2].innerHTML != "b")
  return "winner: " + rows[0][2].innerHTML;

    if(rows[2][0].innerHTML === rows[2][2].innerHTML && rows[2][2].innerHTML === rows[1][3].innerHTML && rows[3][1].innerHTML != "b")
      return "winner: " + rows[3][1].innerHTML;

      if(rows[3][0].innerHTML === rows[3][3].innerHTML && rows[2][2].innerHTML === rows[1][3].innerHTML && rows[3][1].innerHTML != "b")
        return "winner: " + rows[3][1].innerHTML;

        if(rows[4][0].innerHTML === rows[3][3].innerHTML && rows[2][2].innerHTML === rows[1][3].innerHTML && rows[3][1].innerHTML != "b")
          return "winner: " + rows[3][1].innerHTML;

          if(rows[5][0].innerHTML === rows[0][3].innerHTML && rows[3][0].innerHTML === rows[0][3].innerHTML && rows[3][0].innerHTML != "b")
            return "winner: " + rows[3][0].innerHTML;

            if(rows[0][5].innerHTML === rows[3][0].innerHTML && rows[0][3].innerHTML === rows[3][0].innerHTML && rows[0][3].innerHTML != "b")
              return "winner: " + rows[0][3].innerHTML;

              if(rows[0][1].innerHTML === rows[1][0].innerHTML && rows[1][0].innerHTML === rows[1][0].innerHTML && rows[1][0].innerHTML != "b")
                return "winner: " + rows[1][0].innerHTML;

                if(rows[1][0].innerHTML === rows[0][1].innerHTML && rows[0][1].innerHTML === rows[0][1].innerHTML && rows[0][1].innerHTML != "b")
                  return "winner: " + rows[0][1].innerHTML;

                  if(rows[5][4].innerHTML === rows[4][5].innerHTML && rows[4][5].innerHTML === rows[5][4].innerHTML && rows[5][4].innerHTML != "b")
                    return "winner: " + rows[5][4].innerHTML;
// Kunne godt mærke jeg blev overwhelmed med coden her i slutningen, og derfor kunne ikke få mit spil til at virke helt ordenligt.
// nu jeg ser tilbage på ogaven(desværre for sendt i forhold til aflveringstid) kan jeg okay nok se min store fejl, efter alt arbejdet hernede er stor set oppe i det orginalle 3x3 område, da jeg ikke har fået addet flere høje tal i denne del
// en anden plan jeg havde var at ændre alle rowsne til at være tomme plader som ville få en farve isteden for "x" og "o". Hvilket ville gøre det bedre
// alt kode nedenfor stammer fra tictactoe filen jeg har bassede mit 4 på stribe på.
  for (let row of rows)
    for(let column of row)
      if(column.innerHTML === "b")
        return "winner: none"

  return "winner: tie";
}

function reload() {
  location.reload();
}
function countDown() {
  let text = timerdisplay.innerHTML;
  let time = parseInt(text[text.length-1])-1;
  timerdisplay.innerHTML = "time to reset: " + time;

}

function update () {

  if(this.innerHTML === "b") {
    this.innerHTML = symbol;

    if(symbol === "x")
      symbol = "o";
    else
      symbol = "x";

    playerdisplay.innerHTML = "current player: " + symbol;
  }

  winnerdisplay.innerHTML = checkWinner();

  if (winnerdisplay.innerHTML != "winner: none") {
    setInterval(reload, 4000)
    setInterval(countDown, 1000);
    timerdisplay.innerHTML = "time to reset: " + 4;
    timerdisplay = document.body.appendChild(timerdisplay);
  }

  if(ai) {

  }
}

for (let row = 0; row < rows.length; row++) {
  for (let column = 0; column < rows[row].length; column++) {
    let obj = document.createElement("BUTTON");
    obj.innerHTML = "b";
    obj.onclick = update;
    rows[row][column] = document.body.appendChild(obj);
  }
  document.write("<br>");
}

let winnerdisplay = document.createElement("p");
winnerdisplay.innerHTML = "winner: none";
winnerdisplay = document.body.appendChild(winnerdisplay);
let playerdisplay = document.createElement("p");
playerdisplay.innerHTML = "current player: " + symbol;
playerdisplay = document.body.appendChild(playerdisplay);

console.log(rows);
