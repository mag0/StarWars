let nave = document.getElementById("naves");
let naves = [
  "Halcón Milenario",
  "Caza estelar Ala-X",
  "Caza estelar TIE",
  "Silenciador TIE de Kylo Ren",
  "Súper Destructor Estelar",
  "Tantive IV",
  "Razor Crets",
  "Y-Wing",
];
naves = naves.sort();
let imagenes = [
  "halcon-milenario",
  "caza-estelar-Ala-X",
  "caza-estelar-TIE",
  "silenciador-TIE-de-Kylo-Ren",
  "súper-Destructor-Estelar",
  "tantive-IV",
  "razor-Crets",
  "y-Wing",
];
imagenes = imagenes.sort();
let descripcion = [
  "Empezamos la lista con mi nave favorita, un carguero YT-1300 surgido de los astilleros del planeta Corellia, el Halcón milenario, sin duda la nave estelar más icónica de toda la saga. En el centro de toda la trilogía Original y la trilogía secuela (también hace un cameo en las Precuelas). El Halcón abarca gran parte de la saga de películas, y si profundizas en el Universo Expandido, tiene bastante historia de nombres, trabajos de pintura y propietarios. La más famosa es que Lando Calrissian perdió el barco ante Han Solo en un juego de cartas, tal y como pudimos ver en la película de Han Solo, en la que además pudimos ver la Halcón en todo su esplendor antes de que se convirtiera en un montón de chatarra. Y aunque a veces te preguntarás por qué tanta gente aprecia esta nave, como bien dice Rey tan elocuentemente en El despertar de la fuerza, el Halcón siempre tiene algunas sorpresas, incluidos compartimentos de almacenamiento secretos debajo de los paneles del suelo y cañones láser cuádruples AG-2G. Y no olvidemos que esta chatarra fue capa de recorrer el Corredor de Kessel en solo 12 pársecs; lo que la convierte en una de las naves más",
  "Dado que las batallas de naves estelares en Una nueva esperanza se inspiraron en las batallas aereas del mundo real, los X-wings encajan en el papel de los rápidos y veloces aviones de combate que lucharon en ellas. Su maniobrabilidad y las alas divididas que combinan con la X en su nombre los convierten en uno de los diseños de naves espaciales más geniales de Star Wars, utilizado por los héroes de la Trilogía Original y de la trilogía secuela. El T-70 negro y naranja de Poe Dameron es la evolución del clásico T-65, con la misma ferocidad aguda. El X-wing es el barco de los héroes, y se ve bien.",
  "Pocos pueden olvidar sonido de un caza TIE, cuando se acerca sobre sus cabezas o directamente hacia ellos a velocidades peligrosas. Aunque es absolutamente la nave estelar más prescindible del Imperio, también es la más icónica. Los cazas TIE originales de Una nueva esperanza eran de color blanco, mientras que los de El imperio contraataca y El retorno del Jedi eran un poco más grises, con tonos azulados, para pasar a un color negro en la trilogía secuela a las ordenes de la primera orden. El chillido característico del TIE se creó combinando el grito de un elefante con el sonido de un automóvil conduciendo por una carretera mojada. De esta nave hay distinto modelos y variaciones, desde el avanzado que pilotaba Darth Vader, a los cazas bombarderos o los interceptores.",
  "Al igual que con otras naves TIE/vn, la nave se destacó por su velocidad y ferocidad, así como por sus cañones láser y lanzadores de misiles. El TIE Silenciador era una reminiscencia del Interceptor TIE/IN, el TIE Avanzado x1 y Defensor TIE/D del Imperio Galáctico. El TIE/vn de Kylo presenta controles de vuelo personalizados específicamente para él. En El ascenso de Skywalker Rey derriba a Kylo con su espada láser y más tarde viaja Rey viaja a Exegol en otro TIE que le roba al nieto de Darth Vader.",
  "Te acuerdas absolutamente de la nave insignia de Darth Vader, el Executor, de El imperio contraataca y El retorno del Jedi. La nave que cazó a Luke Skywalker y la Rebelión fue la misma que más tarde se estrelló contra la superficie de la segunda Estrella de la Muerte durante la Batalla de Endor. Es bastante poético que sea un A-wing, uno de los cazas más pequeños de la flota, el que finalmente asestase el golpe mortal. Aún así, el Super Destructor Estelar (o Acorazado Estelar clase Ejecutor) es un espectáculo digno de contemplar, ya que eclipsa a los Destructores Estelares que una vez asomaron sobre nuestras cabezas en la escena inicial de Una nueva esperanza. Sorprendentemente conocer que el Ejecutor tuvo una vida útil bastante corta de casi cuatro años antes de su destrucción final. Otro Super Destructor Estelar, el Devastador, se convirtió en la posesión preciada del Imperio en la novela Consecuencias antes de que también fuese destruido en la Batalla de Jakku. El mismo Destructor Estelar que vemos en El despertar de la fuerza.",
  "Como olvidarnos de la Tantive IV, la nave “en misión diplomática” que escapaba de un crucero imperial con los planos robados de la estrella de la muerte en la batalla de Scarif. El Tantive IV fue una corbeta CR90 al servicio de la Casa de Organa. La nave fue una pieza clave en los acontecimientos tras el final de las Guerras Clon y el comienzo de la Guerra Civil Galáctica.La nave fue utilizada por Bail Organa como cuartel general móvil durante sus funciones como Senador Imperial de Alderaan. Brevemente se rompió en dos ocasiones por Ahsoka Tano en su búsqueda para hablar con Organa. Asistió con la evacuación de Raada y fue capitaneado por Raymus Antilles.Cinco años antes de la Batalla de Yavin, el destino quiso que C-3PO y R2-D2 regresaran a bordo de la Tantive IV.La Princesa Leia Organa viajó a bordo del Tantive IV durante la Batalla de Scarif. Hacia el final de la batalla, el Tantive IV fue acoplado dentro de la dañada nave insignia Rebelde Profundidad, y apenas logró iniciar y escapar de la batalla con los planos robados de la Estrella de la Muerte antes de que Darth Vader pudiera abordar para recuperarlos. El Tantive IV se dirigía a Tatooine, pero fue perseguido e interceptado por el Destructor Estelar Imperial Devastador. En la siguiente batalla, el reactor principal del Tantive IV fue cerrado, y los soldados de asalto Imperiales abordaron la nave. Poco después, los Imperiales destruyeron el Tantive IV. El Tantive IV fue equipado con al menos dos cápsulas de escape, uno de los cuales llevó a los droides C-3PO y R2-D2 a Tatooine.",
  "La Razor Crest era una cañonera utilizada por el cazarrecompensas mandaloriano Din Djarin, y que hemos podido ver en las dos primeras temporadas de la serie de Disney +, The mandalaroian. Alguna vez fue una nave militar utilizada para patrullar territorios locales antes de la creación del Imperio Galáctico. Djarin vivió y trabajó desde la nave mientras cazaba fugitivos en los Territorios del Borde Exterior. La nave pudo sobrevivir a ser desmantelada por un grupo Jawas, de haberse estrellado en un inhóspito planeta, pero finalmente sucumbió a un grupo de soldados del imperio remanentes que trataban de capturar a Grogu, más conocido por el fandom como Baby Yoda.",
  "Casi todas las naves estelares de la Trilogía Original son icónicas, y eso es cierto para el Ala-Y, una de las naver favoritas de los fans y coleccionistas de la Trilogía Original. Usados a menudo como bombarderos, los Alas-Y estuvieron en servicio durante las Guerras Clon y la Guerra Civil Galáctica. No tan maniobrables como los X-Wings, los Y-Wings podían, sin embargo, esquivar con los mejores, mientras transportaban a dos miembros de la tripulación y una artillería pesada. Su forma distintiva de diapasón evoca instantáneamente la guerra contra el Imperio.",
];

for (let i = 0; i < naves.length; i++) {
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const img = document.createElement("img");
  const p = document.createElement("p");
  const texto_imagen = "../img/naves/" + imagenes[i] + ".jpeg";
  h3.textContent = naves[i];
  img.src = texto_imagen;
  img.alt = imagenes[i];
  p.textContent = descripcion[i];
  div.appendChild(h3);
  div.appendChild(img);
  div.appendChild(p);
  nave.appendChild(div);
}
