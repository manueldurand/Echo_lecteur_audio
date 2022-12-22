const titrePlayer = document.querySelector(".titre_player");
const back = document.querySelector(".btn_skip_back");
const forward = document.querySelector(".btn_skip_forw");
const play = document.querySelector(".btn_play_pause");
let play_icon = document.querySelector(".play_icon");
const pause = document.querySelector(".btn_pause");
const stop = document.querySelector(".btn_stop");
const audio = document.querySelector("audio");
const volume_slider = document.querySelector("#volume_slider");
const seek = document.querySelector("#seek_slider");
const liste_lecture = document.querySelector(".liste_lecture");
const nomArtiste = document.querySelector(".artiste");
const nomAlbum = document.querySelector(".album");
const container = document.querySelector(".container");
const root = document.querySelector(":root");
let theme_coul = document.getElementById("theme_couleur");
let theme_gris = document.getElementById("theme_gris");
const btn_control = document.querySelectorAll(".btn_control");
const control_icon = document.querySelectorAll(".control_icon");
const temps_restant = document.getElementById("duration");
const tempsEcoule = document.getElementById("current_time");
const thumnails = document.querySelectorAll(".thumbnails");
const alb_1 = document.querySelector(".alb_1");
const alb_2 = document.querySelector(".alb_2");
const alb_3 = document.querySelector(".alb_3");
const alb_4 = document.querySelector(".alb_4");
const alb_5 = document.querySelector(".alb_5");
const alb_6 = document.querySelector(".alb_6");
const ondes = document.querySelectorAll(".ondes");
const onde1 = document.querySelector(".onde1");
const onde2 = document.querySelector(".onde2");
const onde3 = document.querySelector(".onde3");
let compteur = 0;
let min = 0;
let sec = 0;
let t;
let min_rest = 0;
let sec_rest = 0;
let duree_titre;
let temps_passe;
let currentList;

const liste_2222 = [
  {
    src: "./USP_test_2022/01_test_2222.mp3",
    artiste: "Manuel Durand",
    album: "JEK",
    nom: "1. test 2222",
    duration: 299,
  },
  {
    src: "./USP_test_2022/02_une_couche_dessous_dessus.mp3",
    artiste: "Manuel Durand",
    album: "JEK",
    nom: "2. une couche dessous dessus",
    duration: 193,
  },
  {
    src: "./USP_test_2022/03_dialogue_de_sourds.mp3",
    artiste: "Manuel Durand",
    album: "JEK",
    nom: "3. dialogue de sourds",
    duration: 178,
  },
  {
    src: "./USP_test_2022/04_3012.mp3",
    artiste: "Manuel Durand",
    album: "JEK",
    nom: "4. 3012",
    duration: 152,
  },
];
const liste_jabulani = [
  {
    src: "./Jabulani_trio/01_Chat.mp3",
    artiste: "Jabulani Trio",
    album: "For Ibrahim",
    nom: "1. Chat",
    duration: 433,
  },
  {
    src: "./Jabulani_trio/02_Salut.mp3",
    artiste: "Jabulani Trio",
    album: "For Ibrahim",
    nom: "2. Salut !",
    duration: 455,
  },
  {
    src: "./Jabulani_trio/03_Virgin_Jungle.mp3",
    artiste: "Jabulani Trio",
    album: "For Ibrahim",
    nom: "3. Virgin Jungle",
    duration: 344,
  },
  {
    src: "./Jabulani_trio/04_Thaba_Bosigo.mp3",
    artiste: "Jabulani Trio",
    album: "For Ibrahim",
    nom: "4. Thaba Bosigo",
    duration: 409,
  },
  {
    src: "./Jabulani_trio/05_En_Allant.mp3",
    artiste: "Jabulani Trio",
    album: "For Ibrahim",
    nom: "5. En Allant",
    duration: 629,
  },
];

const liste_esperanza = [
  {
    src: "./Esperanza/01_Te_recuerdo_Amanda.mp3",
    artiste: "Flor de Canela",
    album: "Esperanza",
    nom: "1. Te recuerdo Amanda",
    duration: 243,
  },
  {
    src: "./Esperanza/02_Si_se_calla _el_cantor.mp3",
    artiste: "Flor de Canela",
    album: "Esperanza",
    nom: "2. Si se calla el Cantor",
    duration: 285,
  },
  {
    src: "./Esperanza/03_Duerme_negrito.mp3",
    artiste: "Flor de Canela",
    album: "Esperanza",
    nom: "3. Duerme negrito",
    duration: 304,
  },
  {
    src: "./Esperanza/04_Cardo_o_ceniza.mp3",
    artiste: "Flor de Canela",
    album: "Esperanza",
    nom: "4. Cardo o ceniza",
    duration: 358,
  },
  {
    src: "./Esperanza/05_Luna_tucumana.mp3",
    artiste: "Flor de Canela",
    album: "Esperanza",
    nom: "5. Luna tucumana",
    duration: 187,
  },
  {
    src: "./Esperanza/06_Todo_cambia.mp3",
    artiste: "Flor de Canela",
    album: "Esperanza",
    nom: "6. Todo cambia",
    duration: 329,
  },
  
]

const liste_FlorDeCanela = [
  {
    src: "./La_flor_de_la_canela/01_laFlorDeCanela.mp3",
    artiste: "Flor de Canela",
    nom: "1. La Flor de la Canela",
    duration: 175,
  },
  {
    src: "./La_flor_de_la_canela/02_Alfonsina_Y_el_Mar.mp3",
    artiste: "Flor de Canela",
    nom: "2. Alfonsina Y el Mar",
    duration: 313,
  },
  {
    src: "./La_flor_de_la_canela/03_La _Bien_Paga.mp3",
    artiste: "Flor de Canela",
    nom: "3. La Bien Paga",
    duration: 403,
  },
  {
    src: "./La_flor_de_la_canela/04_Como_la_Cigarra.mp3",
    artiste: "Flor de Canela",
    nom: "4. Como la cigarra",
    duration: 203,
  },
  {
    src: "./La_flor_de_la_canela/05 Maria_de_la_O.mp3",
    artiste: "Flor de Canela",
    nom: "5. Maria de la O",
    duration: 210,
  },
  {
    src: "./La_flor_de_la_canela/06_Se_me_Olvido_que_te_Olvide.mp3",
    artiste: "Flor de Canela",
    nom: "6. Se me olvido que te olvide",
    duration: 189,
  },
  {
    src: "./La_flor_de_la_canela/07_Luna_Tucumana.mp3",
    artiste: "Flor de Canela",
    nom: "7. Luna Tucumana",
    duration: 113,
  },
]

const liste_instants = [
  {
    src: "./Instants/01_Sourires.mp3",
    artiste: "Manuel Durand",
    nom: "1. Sourires",
    duration: 267,
  },
  {
    src: "./Instants/02_Pour_Simon.mp3",
    artiste: "Manuel Durand",
    nom: "2. Pour Simon",
    duration: 354,
  },
  {
    src: "./Instants/03_For_Abdullah.mp3",
    artiste: "Manuel Durand",
    nom: "3. For Abdullah",
    duration: 275,
  },
  {
    src: "./Instants/04_8_avril_ 2013_17h22.mp3",
    artiste: "Manuel Durand",
    nom: "4. 8 avril 2013 17h22",
    duration: 467,
  },
  {
    src: "./Instants/05_8_avril_2013_17h39.mp3",
    artiste: "Manuel Durand",
    nom: "5. 8 avril 2013 17h39",
    duration: 311,
  },
  {
    src: "./Instants/06_Grincements-automne.mp3",
    artiste: "Manuel Durand",
    nom: "6. Grincements / Feuille d'automne",
    duration: 614,
  },
  {
    src: "./Instants/07_en_Mib.mp3",
    artiste: "Manuel Durand",
    nom: "7. en Mib",
    duration: 468,
  },
  {
    src: "./Instants/08_Piano_Balafon.mp3",
    artiste: "Manuel Durand",
    nom: "8. Piano Balafon",
    duration: 138,
  },
  
]

const liste_works = [
  {
    src: "./works/01_Macron_Remix.mp3",
    artiste: "Manuel Durand",
    nom: "1. Macron Remix",
    duration: 390,
  },
  {
    src: "./works/SoundCheck.mp3",
    artiste: "Manuel Durand",
    nom: "2. SoundCheck",
    duration: 117,
  },

] 
// variation des couleurs en fonction du theme choisi

theme_coul.addEventListener("click", (e) => {
  root.style.setProperty("--main-border-color", " #2d91ee");
  root.style.setProperty("--main-nav-border-color", " #f5c92a");
  root.style.setProperty("--side-nav-border-color", "#69c76d");
  root.style.setProperty("--player-border-color", " #3063c5");
  root.style.setProperty("--main-font-color", " #3063c5");
  root.style.setProperty("--bleu-clair", "#94C8F7");

  theme_coul.checked = true;
  changeColor();
});
theme_gris.addEventListener("click", (e) => {
  root.style.setProperty("--main-border-color", "grey");
  root.style.setProperty("--main-nav-border-color", "grey");
  root.style.setProperty("--side-nav-border-color", "grey");
  root.style.setProperty("--player-border-color", "grey");
  root.style.setProperty("--main-font-color", "grey");
  root.style.setProperty("--bleu-clair", "grey");
  theme_gris.checked = true;
  changeColor();
});
/**
 * met à jour la couleur des boutons de contrôle en fonction du thème
 * @param {} 
 */
function changeColor() {
  if (theme_coul.checked) {
    btn_control.forEach((element, index) => {
      control_icon[index].style.setProperty("fill", "#3063c5");
    });
  } else {
    btn_control.forEach((element, index) => {
      control_icon[index].style.setProperty("fill", "grey");
    });
  }
}

// changement de couleur des boutons de contrôle de lecture au survol de la souris

btn_control.forEach((element, index) => {
  element.addEventListener("mouseover", (e) => {
    if (theme_coul.checked) {
      control_icon[index].style.setProperty("fill", "#f5c92a");
    } else {
      control_icon[index].style.setProperty("fill", "rgb(55, 55, 55)");
    }
  });
});
btn_control.forEach((element, index) => {
  element.addEventListener("mouseleave", (e) => {
    if (theme_coul.checked) {
      control_icon[index].style.setProperty("fill", "#3063c5");
    } else {
      control_icon[index].style.setProperty("fill", "grey");
    }
  });
});

/**
 * enlève la classe qui permet d'activer la bordure de l'image cliquée
 */
function removeClass() {
  thumnails.forEach((element) => {
    element.classList.remove("js-thumb-selected");
  });
}
// active la bordure d'une image cliquée, charge la bibliothèque correspondante dans la liste de lecture
alb_1.addEventListener("click", (e) => {
  currentList = liste_2222;
  resetAndLoad();
  alb_1.classList.add("js-thumb-selected");
});
alb_2.addEventListener("click", (e) => {
  currentList = liste_FlorDeCanela;
  resetAndLoad();
  alb_2.classList.add("js-thumb-selected");


});
alb_3.addEventListener("click", (e) => {
  currentList = liste_esperanza;
  resetAndLoad();
  alb_3.classList.add("js-thumb-selected");

});
alb_4.addEventListener("click", (e) => {
  currentList = liste_jabulani;
  resetAndLoad();
  alb_4.classList.add("js-thumb-selected");
});
alb_5.addEventListener("click", (e) => {
  currentList = liste_works;
  resetAndLoad();
  alb_5.classList.add("js-thumb-selected");
});
alb_6.addEventListener("click", (e) => {
  currentList = liste_instants;
  resetAndLoad();
  alb_6.classList.add("js-thumb-selected");
});

function resetAndLoad(){
  i = 0;
  loadMusic(currentList[i]);
  loadListeLecture();
  stopLoop();
  removeClass();
  pause.classList.remove("js-active");
  play.classList.remove("js-active");
}
/**
 * active la lecture du morceau chargé, déclenche le compteur du temps passé et restant
 */
function playMusic() {
  lectureMusique = true;
  startLoop();
  play.classList.add("js-active");
  pause.classList.remove("js-active");
  audio.play();
  t = setInterval((e) => {
    compteur = Math.round(audio.currentTime);
    min = Math.floor(compteur / 60);
    sec = compteur % 60;
    if (sec < 10) {
      sec = `0${sec}`;
    }
    temps_passe = duree_titre - compteur;
    min_rest = Math.floor(temps_passe / 60);
    sec_rest = temps_passe % 60;
    seek.value = 100 - ((duree_titre - compteur) / duree_titre) * 100;
    if (sec_rest < 10) {
      sec_rest = `0${sec_rest}`;
    }
    // console.log(seek.value);
    temps_restant.textContent = `${min_rest}:${sec_rest}`;
    tempsEcoule.textContent = `${min}:${sec}`;
  }, 1000);
 audio.addEventListener('ended', e => {
  forwardMusic();
  playMusic();
});
}
// seek.addEventListener('click', e => {
//   ;
// } )
volume_slider.addEventListener("input", (e) => {
  audio.volume = volume_slider.value;
});
/**
 * met en pause la musique, arrête le défilement du temps
 */
function pauseMusic() {
  pause.classList.add("js-active");
  lectureMusique = false;
  audio.pause();
  clearInterval(t);
}


function loadMusic(currentList) {
  titrePlayer.textContent = currentList.nom;
  duree_titre = currentList.duration;
  min_rest = Math.floor(currentList.duration / 60);
  sec_rest = currentList.duration % 60;
  temps_restant.textContent = `${min_rest}:${sec_rest}`;
  audio.src = currentList.src;
  audio.volume = volume_slider.value;
}

function loadListeLecture() {
  liste_lecture.innerHTML = "";
  nomArtiste.textContent = currentList[0].artiste;
  nomAlbum.textContent = currentList[0].album;
  currentList.forEach((element) => {
    let li = document.createElement("li");
    li.innerText = element.nom;
    liste_lecture.appendChild(li);
  });
  let titres = document.querySelectorAll("ul li");
  // titre_lu.style.color = 'rgb(55, 55, 55)';
  titres.forEach((e) => {
    if (e.textContent == titrePlayer.textContent) {
      e.style.color = "rgb(80, 80, 80)";
    }
  });
}

function backMusic() {
  stopLoop();
  pause.classList.remove("js-active");
  play.classList.remove("js-active");
  i--;
  if (i < 0) {
    i = currentList.length - 1;
  }
  loadMusic(currentList[i]);
  clearInterval(t);
  audio.currentTime = 0;
  liste_lecture.innerHTML = "";
  loadListeLecture();
}

function forwardMusic() {
  stopLoop();
  pause.classList.remove("js-active");
  play.classList.remove("js-active");
  i++;
  if (i > currentList.length - 1) {
    i = 0;
  }
  loadMusic(currentList[i]);
  clearInterval(t);
  audio.currentTime = 0;
  liste_lecture.innerHTML = "";
  loadListeLecture();
}
/**
 * arrête la musique en lecture, remet le temps à zéro, stoppe la boucle d'affichage
 */
function stopMusic() {
  stopLoop();
  audio.pause();
  audio.currentTime = 0;
  pause.classList.remove("js-active");
  play.classList.remove("js-active");
  clearInterval(t);
  compteur = 0;
  min = 0;
  sec = 0;
  tempsEcoule.textContent = "0:00";
  seek.value = 0;
}


let interval;
/**
 * boucle d'affichage des ondes du logo
 */
function startLoop() {
 interval = setInterval(() => {
  ondes.forEach((element, index) => {
ondes[index].classList.toggle('displaySwitch');
  })
 }, 1500);
}

/**
 * arrêt de la boucle d'affichage
 */
function stopLoop() {
  clearInterval(interval);

}

// surveillance des boutons de contrôle et déclenchement des fonctions correspondantes
play.addEventListener("click", () => {
  playMusic();
});

pause.addEventListener("click", () => {
  if ((lectureMusique = true)) {
    pauseMusic();
    stopLoop();
  } else if(lectureMusique = false) {
    playMusic()
  };
});

back.addEventListener("click", backMusic);
forward.addEventListener("click", forwardMusic);
stop.addEventListener("click", stopMusic);

let lectureMusique = false;
let i = 0;

// loadMusic(currentList[i]);
// loadListeLecture();
