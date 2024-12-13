let modifAvatar = document.querySelector(".modif-avatar");
let chooseAvatar = document.querySelector(".chose-avatar");
let buttonSignIn = document.querySelector(".singIn button");
let pseudo = document.querySelector(".pseudo");
let signIn = document.querySelector(".singIn");
let titlename = document.querySelector("#titlename");
let userNameChanger = document.querySelector(".user");
let userAvatar = document.querySelector(".user-avatar");
let userScore = document.querySelector(".score-user");
let ordiScore = document.querySelector(".score-ordi");
let user = document.querySelector("span.score-user");
let ordi = document.querySelector("span.score-ordi");
let nbpartie = document.querySelector("span.nb-partie");
let partie = document.querySelector(".nb-partie");
let btnPlay = document.querySelector(".btn-play");
let infoImg = document.querySelector(".info-img");
let infoImg2 = document.querySelector(".info-img img");
let infoClass = document.querySelector(".info-window");
let gameTips = document.querySelector(".game-tips");
let chooseCutImg = document.querySelector(".choose-one div:nth-child(1) img");
let chooseVandalImg = document.querySelector(".choose-one div:nth-child(2) img");
let chooseOdinImg = document.querySelector(".choose-one div:nth-child(3) img ");
let userChoosed = document.querySelector(".user-choosed");
let ordiChoosed = document.querySelector(".ordi-choosed");
let validChoose = document.querySelector(".valid-choose");
let header = document.querySelector("header");
let main = document.querySelector("main");
let finisherWin = document.querySelector(".finisher-win");
let finisherLoose = document.querySelector(".finisher-loose");
let finisherEgal = document.querySelector(".finisher-egal");
let btnReplayLoose = document.querySelector(".finisher-loose .btn-replay");
let btnReplayEgal = document.querySelector(".finisher-egal .btn-replay");
let btnReplay = document.querySelector(".btn-replay");
let linkIcon = document.querySelector(".link-icon")
let rouletteContainer1 = document.querySelector(
  ".roulette-container p:first-child"
);
let rouletteContainer2 = document.querySelector(
  ".roulette-container p:last-child"
);
let saveAvatar = 0;

chooseAvatar.querySelectorAll("img").forEach((img) => {
  img.addEventListener("click", choosedAvatar);
});
buttonSignIn.disabled = true;
gameTips.style.display = "none";
header.style.display = "none";
main.style.display = "none";
finisherWin.style.display = "none";
finisherLoose.style.display = "none";
finisherEgal.style.display = "none";

modifAvatar.addEventListener("click", chooseOne);
function chooseOne() {
  chooseAvatar.style.display = "block";
  modifAvatar.style.display = "none";
}

function choosedAvatar(e) {
  modifAvatar.src = e.target.src;
  modifAvatar.alt = e.target.alt;
  chooseAvatar.style.display = "none";
  modifAvatar.style.display = "block";
  modifAvatar.classList.add("modif-ok");
  saveAvatar = modifAvatar.src;
  verifControl();
}

pseudo.addEventListener("input", verifPseudo);
function verifPseudo() {
  if (pseudo.value.length < 3) {
    titlename.textContent = "Le pseudo doit contenir au moins 3 caractères.";
    titlename.style.color = "red";
    pseudo.classList.remove("pseudo-ok");
  } else {
    titlename.textContent = "Pseudo valide.";
    titlename.style.color = "green";
    pseudo.classList.add("pseudo-ok");
  }
  verifControl();
}

function verifControl() {
  if (
    modifAvatar.classList.contains("modif-ok") &&
    pseudo.classList.contains("pseudo-ok")
  ) {
    buttonSignIn.disabled = false;
    buttonSignIn.classList.add("btn-active");
  } else {
    buttonSignIn.disabled = true;
    buttonSignIn.classList.remove("btn-active");
  }
}

buttonSignIn.addEventListener("click", lancherGamePage);
function lancherGamePage(e) {
  e.preventDefault();
  signIn.style.display = "none";
  header.style.display = "block";
  main.style.display = "block";
  userNameChanger.textContent = pseudo.value;
  userAvatar.src = saveAvatar;
  setTimeout(() => {
    infoClass.style.display = "none";
  }, 5000);
}

userAvatar.addEventListener("click", lanchersignInPage);
function lanchersignInPage() {
  signIn.style.display = "flex";
}

infoImg.addEventListener("click", lanchInfo);
function lanchInfo() {
  if (!gameTips.classList.contains("info-container")) {
    gameTips.style.display = "flex";
    gameTips.classList.add("info-container");
  } else {
    gameTips.style.display = "none";
    gameTips.classList.remove("info-container");
  }
}

btnPlay.disabled = true;
btnPlay.classList.remove("btn-active");

chooseCutImg.addEventListener("click", lanchCut);
function lanchCut() {
  if (!chooseCutImg.classList.contains("chooseCutImg-size")) {
    chooseCutImg.classList.add("chooseCutImg-size");
    chooseVandalImg.classList.remove("chooseVandalImg-size");
    chooseOdinImg.classList.remove("chooseOdinImg-size");
  } else {
    chooseCutImg.classList.remove("chooseCutImg-size");
  }
  lanchUserCut();
}

let userSaveCut = userChoosed.src;

function lanchUserCut() {
  if (chooseCutImg.classList.contains("chooseCutImg-size")) {
    userChoosed.src = chooseCutImg.src;
    userChoosed.alt = chooseCutImg.alt;
    userChoosed.style.width = "110%";
    lancherGame();
  } else {
    userChoosed.src = userSaveCut;
    userChoosed.alt = userSaveCut;
    userChoosed.style.width = "70%";
    btnPlay.disabled = true;
  }
}

chooseVandalImg.addEventListener("click", lanchVandal);
function lanchVandal() {
  if (!chooseVandalImg.classList.contains("chooseVandalImg-size")) {
    chooseVandalImg.classList.add("chooseVandalImg-size");
    chooseCutImg.classList.remove("chooseCutImg-size");
    chooseOdinImg.classList.remove("chooseOdinImg-size");
  } else {
    chooseVandalImg.classList.remove("chooseVandalImg-size");
  }
  lanchUserVandal();
}

let userSaveVandal = userChoosed.src;

function lanchUserVandal() {
  if (chooseVandalImg.classList.contains("chooseVandalImg-size")) {
    userChoosed.src = chooseVandalImg.src;
    userChoosed.alt = chooseVandalImg.alt;
    userChoosed.style.width = "110%";
    lancherGame();
  } else {
    userChoosed.src = userSaveVandal;
    userChoosed.alt = userSaveVandal;
    userChoosed.style.width = "70%";
    btnPlay.disabled = true;
  }
}

chooseOdinImg.addEventListener("click", lanchOdin);
function lanchOdin() {
  if (!chooseOdinImg.classList.contains("chooseOdinImg-size")) {
    chooseOdinImg.classList.add("chooseOdinImg-size");
    chooseVandalImg.classList.remove("chooseVandalImg-size");
    chooseCutImg.classList.remove("chooseCutImg-size");
  } else {
    chooseOdinImg.classList.remove("chooseOdinImg-size");
  }
  lanchUserOdin();
}

let userSaveOdin = userChoosed.src;

function lanchUserOdin() {
  if (chooseOdinImg.classList.contains("chooseOdinImg-size")) {
    userChoosed.src = chooseOdinImg.src;
    userChoosed.alt = chooseOdinImg.alt;
    userChoosed.style.width = "110%";
    lancherGame();
  } else {
    userChoosed.src = userSaveOdin;
    userChoosed.alt = userSaveOdin;
    userChoosed.style.width = "70%";
    btnPlay.disabled = true;
  }
}

user = 0;
ordi = 0;
partie = 10;
userScore.textContent = user;
ordiScore.textContent = ordi;
nbpartie.textContent = partie;

function lancherGame() {
  if ((btnPlay.disabled = false)) {
    btnPlay.classList.add("btn-active");
  }
  btnPlay.addEventListener("click", game);
  validChoose.textContent = "...";
  validChoose.style.color = "black";
  rouletteContainer1.style.boxShadow =
    "0px 5px 15px black, 0px -5px 15px black";
  rouletteContainer2.style.boxShadow =
    "0px 5px 15px black, 0px -5px 15px black";
  userChoosed.style.width = "70%";
}

function game() {

  validChoose.textContent = "...";
  validChoose.style.color = "black";
  rouletteContainer1.style.boxShadow =
    "0px 5px 15px black, 0px -5px 15px black";
  rouletteContainer2.style.boxShadow =
    "0px 5px 15px black, 0px -5px 15px black";
  userChoosed.style.width = "70%";
  btnPlay.disabled = true;

  setTimeout(() => {
    btnPlay.disabled = false;
  }, 1000);

  lanchCasino();
  function lanchCasino() {
    setTimeout(() => {
      ordiChoosed.src = chooseCutImg.src;
    }, 0);
    setTimeout(() => {
      ordiChoosed.src = chooseVandalImg.src;
    }, 100);
    setTimeout(() => {
      ordiChoosed.src = chooseOdinImg.src;
    }, 200);
    setTimeout(() => {
      ordiChoosed.src = chooseCutImg.src;
    }, 300);
    setTimeout(() => {
      ordiChoosed.src = chooseVandalImg.src;
    }, 400);
    setTimeout(() => {
      ordiChoosed.src = chooseOdinImg.src;
    }, 500);
    setTimeout(() => {
      ordiChoosed.src = chooseCutImg.src;
    }, 600);
    setTimeout(() => {
      ordiChoosed.src = chooseVandalImg.src;
    }, 700);
    setTimeout(() => {
      ordiChoosed.src = chooseOdinImg.src;
    }, 800);
  }

  setTimeout(gameDetails, 1000);
  function gameDetails() {
    function ordichoose() {
      return Math.floor(Math.random() * 3);
    }

    let ordiChoos = ordichoose();

    partie = partie - 1;
    nbpartie.textContent = partie;

    if (ordiChoos === 0) {
      ordiChoosed.src = chooseCutImg.src;
    }

    if (ordiChoos === 1) {
      ordiChoosed.src = chooseVandalImg.src;
    }

    if (ordiChoos === 2) {
      ordiChoosed.src = chooseOdinImg.src;
    }

    if (userChoosed.src == chooseCutImg.src) {
      cutVerif();
    }

    function cutVerif() {
      if (ordiChoosed.src == chooseCutImg.src) {
        validChoose.textContent = "Egalité";
        validChoose.style.color = "orange";
        rouletteContainer1.style.boxShadow =
          "0px 5px 15px orange, 0px -5px 15px orange";
        rouletteContainer2.style.boxShadow =
          "0px 5px 15px orange, 0px -5px 15px orange";
        userChoosed.style.width = "80%";
        ordiChoosed.style.width = "80%";
      }

      if (ordiChoosed.src == chooseVandalImg.src) {
        validChoose.textContent = "Perdu";
        validChoose.style.color = "red";
        rouletteContainer1.style.boxShadow =
          "0px 5px 15px red, 0px -5px 15px red";
        ordiChoosed.style.width = "100%";
      }

      if (ordiChoosed.src == chooseOdinImg.src) {
        validChoose.textContent = "Gagné";
        validChoose.style.color = "green";
        rouletteContainer1.style.boxShadow =
          "0px 5px 15px green, 0px -5px 15px green";
        userChoosed.style.width = "100%";
      }
    }

    if (userChoosed.src == chooseVandalImg.src) {
      vandalVerif();
    }

    function vandalVerif() {
      if (ordiChoosed.src == chooseCutImg.src) {
        validChoose.textContent = "Gagné";
        validChoose.style.color = "green";
        rouletteContainer1.style.boxShadow =
          "0px 5px 15px green, 0px -5px 15px green";
        userChoosed.style.width = "100%";
      }

      if (ordiChoosed.src == chooseVandalImg.src) {
        validChoose.textContent = "Egalité";
        validChoose.style.color = "orange";
        rouletteContainer1.style.boxShadow =
          "0px 5px 15px orange, 0px -5px 15px orange";
        rouletteContainer2.style.boxShadow =
          "0px 5px 15px orange, 0px -5px 15px orange";
        userChoosed.style.width = "80%";
        ordiChoosed.style.width = "80%";
      }

      if (ordiChoosed.src == chooseOdinImg.src) {
        validChoose.textContent = "Perdu";
        validChoose.style.color = "red";
        rouletteContainer1.style.boxShadow =
          "0px 5px 15px red, 0px -5px 15px red";
        ordiChoosed.style.width = "100%";
      }
    }

    if (userChoosed.src == chooseOdinImg.src) {
      odinVerif();
    }

    function odinVerif() {
      if (ordiChoosed.src == chooseCutImg.src) {
        validChoose.textContent = "Perdu";
        validChoose.style.color = "red";
        rouletteContainer1.style.boxShadow =
          "0px 5px 15px red, 0px -5px 15px red";
        ordiChoosed.style.width = "100%";
      }

      if (ordiChoosed.src == chooseVandalImg.src) {
        validChoose.textContent = "Gagné";
        validChoose.style.color = "green";
        rouletteContainer1.style.boxShadow =
          "0px 5px 15px green, 0px -5px 15px green";
        userChoosed.style.width = "100%";
      }

      if (ordiChoosed.src == chooseOdinImg.src) {
        validChoose.textContent = "Egalité";
        validChoose.style.color = "orange";
        rouletteContainer1.style.boxShadow =
          "0px 5px 15px orange, 0px -5px 15px orange";
        rouletteContainer2.style.boxShadow =
          "0px 5px 15px orange, 0px -5px 15px orange";
        userChoosed.style.width = "80%";
        ordiChoosed.style.width = "80%";
      }
    }

    if (validChoose.style.color == "green") {
      user = user + 1;
      userScore.textContent = user;
    }

    if (validChoose.style.color == "red") {
      ordi = ordi + 1;
      ordiScore.textContent = ordi;
    }

    if (validChoose.style.color == "orange") {
      partie = partie + 1;
      nbpartie.textContent = partie;
    }


    if (partie == 0) {
      btnPlay.disabled = true;
    }

    setTimeout(resetPage, 1000);
    function resetPage() {

      function restartGame() {
        user = 0
        ordi = 0
        partie = 10
        userScore.textContent = user;
        ordiScore.textContent = ordi;
        nbpartie.textContent = partie;
        header.style.display = "block";
        main.style.display = "block";
        finisherLoose.style.display = "none";
        finisherWin.style.display = "none";
        finisherEgal.style.display = "none";
      }

      if (partie == 0 && (user < ordi)) {
        lanchFinishLoose();
      }
      function lanchFinishLoose() {
        header.style.display = "none";
        main.style.display = "none";
        finisherLoose.style.display = "flex";
        btnReplayLoose.addEventListener("click", () => {
          restartGame()
          lancherGame()
        });
      }

      if (partie == 0 && (user > ordi)) {
        lanchFinishWin();
      }
      function lanchFinishWin() {
        header.style.display = "none";
        main.style.display = "none";
        finisherWin.style.display = "flex";
        btnReplay.addEventListener("click",  () => {
          restartGame()
          lancherGame()
        });
      }

      if (partie == 0 && (user == ordi)) {
        lanchFinishEgal();
      }
      function lanchFinishEgal() {
        header.style.display = "none";
        main.style.display = "none";
        finisherEgal.style.display = "flex";
        btnReplayEgal.addEventListener("click", () => {
          restartGame()
          lancherGame()
        });
      }
    }
  }
}
