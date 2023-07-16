let peliculas = document.getElementById("peliculas");
let pelis = [
  "Episodio 1: La amenaza fantasma",
  "Episodio 2: La guerra de los clones",
  "Episodio 3: La venganza de los Sith",
  "Rogue One: Una historia de Star Wars",
  "Episodio 4: Una nueva esperanza",
  "Episodio 5: El imperio contrataca",
  "Episodio 6: El retorno del yedi",
  "Star Wars: Episodio VII - El despertar de la Fuerza",
  "Star Wars: Episodio VIII - Los últimos Jedi",
  "Star Wars: Episodio IX - El ascenso de Skywalker",
];
let imagenes = [
  "episodio1",
  "episodio2",
  "episodio3",
  "rogue-one",
  "episodio4",
  "episodio5",
  "episodio6",
  "episodio7",
  "episodio8",
  "episodio9",
];
let descripcion = [
  "Dos Jedis, Qui-Gon Jinn y su Padawan Obi-Wan Kenobi deben proteger a la reina Amidala. En medio de la misión conocen a un niño llamado Anakin Skywalker quien forma parte de una antigua profecía Jedi pues es el elegido que traerá equilibrio a la galaxia. Los enemigos de esta saga son los Sith. Un aprendiz de esta raza malvado, Darth Maul y su maestro Darth Sidious (quien se hace pasar por un senador de la República Galáctica llamado Palpatine). Al final Darth Maul asesina a Qui-Gon Jinn. Obi-Wan asesina a Darth Maul y Anakin se convierte en Padawan de Obi-Wan. Mientras, la Guerra entre la República y los Separatistas continúa.",
  "10 años después, se produce un intento de asesinato hacia Padmé, quien ahora se desempeña como senadora de Naboo después de terminar su mandato como reina. El ahora Caballero Jedi Obi-Wan y su joven aprendiz, Anakin, son asignados para protegerla; Obi-Wan rastrea al asesino y descubre una conspiración, mientras que Anakin y Padmé se enamoran en secreto. Mientras tanto, el Canciller Palpatine planea atraer a la galaxia a las Guerras Clon entre el ejército de soldados clon de la República liderado por los Jedi y la Confederación de Sistemas Independientes liderada por el nuevo aprendiz Sith de Sidious y antiguo maestro Jedi, Conde Dooku.",
  "Palpatine es secuestrado por los separatistas. Anakin y Obi-Wan van a su rescate y el joven Jedi decide asesinar a Dooku a sangre fría. Anakin se Vuelve cercano a Palpatine, quien lo tienta de unirse al lado Oscuro. Al revelarse como Darth Sidious, los Jedi intentan destruirlo, pero Anakin los traiciona y se une al Lado Oscuro. Palpatine ordena al ejército de clones a asesinar a todos los Jedi (incluyendo niños padawans). Joda se enfrenta a Yoda, quien pierde y se va al exilio. Obi-Wan y Anakin se enfrentan, Obi-Wan lo derrota y lo da por muerto, pero Palpatine reaparece para salvarlo y convertirlo en Darth Vader. Padmé muere dando a luz a sus dos hijos con Anakin, los gemelos Leia y Luke, quienes son separados. Los Sith triunfan y así nace el Imperio Galáctico.",
  "La película se centra en el robo de los planos de la Estrella de la Muerte (sobre los que gira el plot del Episodio IV). Galen Erso es un científico secuestrado por el Imperio para construir esta poderosa arma, su pequeña hija se convierte en una delincuente, y es capturada por la Alianza Rebelde con el fin de develar la ubicación de su padre, para ser asesinado (sin que ella lo sepa). Tras la muerte de su padre, que no fue a manos de los Rebeldes, Erso y Cassian deciden unirse a un reducido grupo de rebeldes para robar los planos de esta arma y así encontrar su punto débil. La película termina con una batalla épica en la que Darth Vader decide destruir el planeta entero y todos los héroes mueren, pero los planos son enviados a tiempo para que los Rebeldes puedan usarlos. El final de Rogue One son los minutos previos al inicio del Episodio IV, con una Princesa Leia reconstruída en GCI recibiendo los planos.",
  "La primera película de Star Wars. La Alianza Rebelde se enfrenta contra el Imperio. En ese contexto, Luke conoce a Obi-Wan quien debe salvar a la Princesa Leia retenida por el Imperio tras robar los planos de la Estrella de la Muerte, un arma del Imperio capaz de destruir planetas enteros. Ellos se unen a Han Solo, un contrabandista, y su inseparable amigo Chewbacca, con el fin de rescatar a Leia. Obi-Wan es asesinado por Darth Vader. Tras escapar nuestros héroes se unen a la Alianza Rebelde y comienza una épica batalla interestelar en la que Luke a bordo de una nave, destruye la Estrella de la Muerte.",
  "El Imperio ataca la base principal de la Alianza Rebelde, dividiendo a los héroes. Leia y Han huyen en busca de un viejo aliado, llamado Lando Calrissian. Luke busca a Yoda para que lo forme como Jedi, y completa su entrenamiento. Han es traicionado por su amigo, y el Imperio lo encierra en Carbonita. Luke enfrenta a Darth Vader pero es superado y él le corta una mano. Además, le hace la mayor revelación de su vida: 'Yo soy tu padre'. Luke escapa, se reúne con Leia y Han es entregado al criminal Jabba The Hutt.",
  "Con la Alianza en peligro, Leia y Luke rescatan a Han Solo ahora que el joven ya es todo un Jedi. Mientras, la Alianza Rebelde descubre que el Imperio está construyendo una segunda Estrella de la Muerte, que está protegida por un campo de fuerza que se genera en un planeta llamado Endor. Luke se rinde ante el Imperio para poder enfrentar más adelante a Vader. Mientras, los Rebeldes destruyen el generador del escudo. Luke tiene su batalla y derrota a Vader. Darth Sirius le pide que se úna al Lado Oscuro, pero Luke se niega, entonces Sidious intenta matarlo, pero Vader se redime destruyendo a su Maestro. Darth Vader muere y Luke se lleva su cuerpo de la Estrella de la Muerte para velarlo. La saga termina con una gran celebración.",
  "Todos buscan a Luke Skywalker. Los nuevos malos en esta película son la Orden de los Ren, una especie de fanáticos de Darth Vader. Poe Dameron es un piloto que consigue a los planos para encontrar a Luke pero es asaltado por los villanos, liderados por Kylo Ren, hijo de Han Solo y la Princesa Leia. Antes de que lo secuestren, entrega los planos a su droide BB-8, quien es encontrado más adelante por Rei y se acopla a Finn, un Stormtrooper desertor. Ellos se unen a Han Solo y Chewbacca quienes buscan a Leia, quien ahora es General de los Rebeldes. Descubren que la otra parte de los planos los tiene R2-D2. Rei es secuestrada por los Ren. Han, Poe, Chewbacca y Finn van a salvar a la joven, pero el excontrabandista se reencuentra con su hijo y cuando trata de hacerlo recapacitar es asesinado por él. En la batalla final, Rei descubre que tiene La Fuerza y humilla a Kylo Ren en un duelo de sables. Finalmente, la joven toma los planos y van en busca de Luke Skywalker, a quien encuentra.",
  "Resumen",
  "Ya sabemos qué significa el título del Episodio 9 de Star Wars. Al final, El ascenso de Skywalker hace referencia a un doble ascenso. Por un lado, al ascenso de Ben Solo (el personaje de Adam Driver), que lleva sangre Skywalker corriendo por sus venas, que al final se pasa al lado (asciende) luminoso de la Fuerza y consigue la redención que esperábamos del personaje (básicamente la que necesitaba para tener sentido) sacrificándose para resucitar a Rey. Por otro lado es el ascenso de Rey (el personaje de Daisy Ridley), que trasciende su origen vinculado al linaje Palpatine y se convierte en una Skywalker por méritos propios, porque así lo elige esa familia de la que no quedan (al menos en la versión cinematográfica) más descendientes que no sean fantasmas de la Fuerza. Al final de la película los Skywalker adoptan a Rey: Rey se convierte en una Skywalker, encuentra finalmente su lugar. Y es un ascenso también de Rey porque resucita, asciende de entre los muertos. Y de paso Ben Solo y Rey Skywalker devuelven el equilibrio a la Fuerza. Es Rey, no Anakin Skywalker, ni Luke Skywalker quien cumple la profecía, la que hace desaparecer a los Sith.",
];

for (let i = 0; i < pelis.length; i++) {
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const img = document.createElement("img");
  const p = document.createElement("p");
  const texto_imagen = "../img/peliculas/" + imagenes[i] + ".jpg";
  h3.textContent = pelis[i];
  img.src = texto_imagen;
  img.alt = imagenes[i];
  p.textContent = descripcion[i];
  div.appendChild(h3);
  div.appendChild(img);
  div.appendChild(p);
  peliculas.appendChild(div);
}
