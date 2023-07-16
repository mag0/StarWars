let planeta = document.getElementById("planetas");

let planetas = [
  "Tatooine",
  "Alderaan",
  "Yavin IV",
  "Hoth",
  "Dagobah",
  "Bespin",
  "Endor",
  "Naboo",
  "Coruscant",
  "Kamino",
  "Geonosis",
  "Kashyyyk",
  "Utapau",
  "Felucia",
  "Mygeeto",
  "Mustafar",
  "Jakku",
  "D'Qar.",
  "Ahch-To",
  "Cantonica",
  "Crait",
  "Exegol",
  "Ajan Kloss",
  "Pasaana",
];

let imagenes = [
  "tatooine",
  "alderaan",
  "yavin-iv",
  "hoth",
  "dagobah",
  "bespin",
  "endor",
  "naboo",
  "kamino",
  "coruscant",
  "Geonosis",
  "kashyyyk",
  "utapau",
  "felucia",
  "mygeeto",
  "mustafar",
  "jakku",
  "d'qar",
  "ahch-to",
  "cantonica",
  "crait",
  "exegol",
  "ajan-kloss",
  "pasaana",
];

let descripcion = [
  "Posiblemente uno de los planetas más conocidos del universo Star Wars. Hogar de Luke y de su padre antes que él, Tatooine es un lugar desértico donde menos del 1% de la superficie  está cubierto de agua, y ésta se consigue mediante las granjas de humedad como la de Owen Lars que la extraen de la atmósfera. Sus soles gemelos son un icono dentro de la saga.",
  "Planeta de origen de Leia y su familia, es el planeta que destruyen gracias al armamento de la primera estrella de la muerte.",
  "Cuarta luna del gigante gaseoso Yavin Prime, que oculta la base principal rebelde en la primera película. En sus cercanías toma lugar la primera gran victoria de los rebeldes contra el Imperio, usando esa batalla como año cero en la era de la rebelión dentro del Calendario Galáctico Estándar.",
  "Planeta helado que vemos al principio del episodio V y que oculta la nueva base de la resistencia después de su traslado desde Yavin 4.",
  "Planeta en los territorios del borde exterior y dentro de un sistema homónimo. Descrito como un enorme pantano maloliente, Dagobah era el refugio del maestro Yoda después de su exilio tras la disolución de la orden Jedi y es el planeta donde Luke recibiría su entrenamiento Jedi.",
  "Planeta gaseoso fuente de gas tibanna donde tiene su refinería Lando, La ciudad de las nubes.",
  "Es un gigante gaseoso, pero lo que vimos realmente en el Retorno del Jedi es una de sus nueve lunas, la más grande de ellas a la que nos solemos referir como la Luna Santuario o la luna de Endor. Un satélite boscoso que era el hogar de los Ewoks.",
  "Es el planeta en conflicto comercial durante el Episodio I. Lugar de origen de Padme Amidala y su pueblo, de los gungan y del insidioso Sheev Palpatine. Su capital Theed y en concreto su puerto espacial están basadas y filmadas en la ciudad española de Sevilla.",
  "Es el planeta que ejerce de centro del universo y de capital en la época de la república y más tarde durante el Imperio. La vemos brevemente en una de las ediciones del Retorno del Jedi, pero sería constantemente revisitada en la trilogía de precuelas ya que es donde se encuentra el Templo Jedi.",
  "Planeta oceánico donde se desarrolla la tecnología de clonación y se crea y entrena el ejército de clones de la República.",
  "Al contrario que Kamino, Geonosis es el lugar donde se fabrican los droides de la federación de comercio y el lugar de origen de las Guerras Clon.",
  "Planeta de origen de los wookies que pudimos ver en el Episodio III, aunque su primera aparición está en Star Wars Holiday Special.",
  "Lugar de los  Pau'anos y los Utai, que durante las Guerras Clon escondía una base separatista, fue el lugar donde murió el General Grievous.",
  "Planeta selvático donde fue asesinada Aayla Secura durante la Purga Jedi.",
  "Planeta helado donde fue asesinado Ki-Adi-Mundi durante la Purga Jedi.",
  "Planeta volcánico situado en el sistema homónimo, es el centro de operaciones separatistas al final de las Guerras Clon y lugar del duelo entre Obi-Wan y su aprendiz, también es el lugar en el que Vader recibiría sus heridas. Durante la era imperial sirvió como santuario de Lord Vader ya que era el sitio de su mayor derrota y también como bastión de los inquisidores.",
  "Planetoide del Borde Exterior dentro de un campo de asteroides. Es el lugar de nacimiento de Luke y Leia.",
  "Planeta desértico que nos recuerda a Tatooine, cuando lo vemos en el episodio VII es lo que resta del escenario de la Batalla de Jakku que puso fin a la guerra civil galáctica y es un cementerio de naves imperiales sobre todo. Es el lugar donde es abandonada Rei.",
  "Planeta con abundante vegetación que es la base principal rebelde en la época de la Primera Orden.",
  "Planeta boscoso y lugar donde se encuentra el castillo de Maz Kanata.",
  "Planeta oceánico donde Luke Skywalker se oculta durante seis años y donde se ubica el primer Templo Jedi.",
  "Planeta desértico en el que se encontraba la ciudad casino Canto Bight. Las similitudes de paraje desértico y casinos de gente opulenta guarda conexiones evidentes con Las Vegas.",
  "Planeta minero con una antigua base de la Resistencia. Su superficie rojiza está cubierto de mineral de sal que le da sus tonos característicos. Es el lugar del último duelo entre Luke y Kylo Ren.",
  "Planeta ubicado en las Regiones Desconocidas. Es el lugar donde el Emperador Palpatine se escondía después de su derrota en la segunda Estrella de la Muerte.",
  "Es una luna selvática que a su vez posee dos lunas. Es la base de la resistencia durante el Episodio IX.",
  "Planeta desértico donde Rei obtiene la daga en el Episodio IX y donde se esconde Lando.",
];

for (let i = 0; i < planetas.length; i++) {
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const img = document.createElement("img");
  const p = document.createElement("p");
  const texto_imagen = "../img/planetas/" + imagenes[i] + ".jpg";
  h3.textContent = planetas[i];
  img.src = texto_imagen;
  img.alt = imagenes[i];
  p.textContent = descripcion[i];
  div.appendChild(h3);
  div.appendChild(img);
  div.appendChild(p);
  planeta.appendChild(div);
}
