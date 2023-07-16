let list = [
  "Aayla Secura",
  "Ackbar",
  "Adi Gallia",
  "Agen Kolar",
  "Agrippa Aldrete",
  "Ahsoka Tano",
  "Anakin Skywalkerh",
  "Leia",
  "Organa",
  "Anakin Solo",
  " Asajj Ventress",
  "Ask Aak",
  " Attichitcuk",
  "Atton Rand",
  " Aurra Sing",
  "Bail Prestor Organa",
  " Bastila Shan",
  "BB-8 Droide de Rey",
  "Ben Skywalker",
  "Bendu",
  "Jan Kong",
  "Bib Fortuna",
  "Biggs Darklighter",
  "Bo Keevil Bo-Katan",
  "Bo Keevil",
  " Boba Fett",
  "Boga",
  "Bossk",
  " Bulduga",
  "C-21 Highsinger",
  "C-3PO",
  "Cad Bane",
  "Chalmun",
  "Chewbacca",
  "Cincos (CT-27-5555)",
  "Clon 99",
  "Cody",
  "Daka",
  "Darth Bane",
  "Darth Caedus",
  "Darth Desolous",
  "Darth Maul",
  " Darth Malak",
  " Darth Phobos",
  "Darth Plagueis",
  "Darth Revan",
  " Darth Sidious",
  "Darth Tyranus",
  " Darth Vader",
  "Organa",
  "Darth Zannah",
  "Darts D'Nar",
  "Daultay Dofine",
  "Depa Billaba",
  "Dengar",
  "Depa Billaba",
  "Derrown",
  "Dogma",
  "Dooku",
  "Dr. Evazan",
  " Echuu-Shen Jon",
  "Embo",
  "Finis Valorum",
  "Finn",
  "Flix",
  "Freya Fenris",
  "Galen Marek",
  "Garven Dreis",
  "Ganodi",
  "Garnac",
  "Gasgano",
  "General Grievous",
  "Greedo",
  "Griff Halloran",
  "Gungi",
  "Gwarm",
  "Han Solo",
  "Hype Fazon",
  "IG-88",
  "Jabba el Hutt",
  "Jacen Solo",
  " Jace Rucklin",
  "Jaina Solo",
  " Jango Fett",
  "Jar Jar Binks",
  "Jarek Yeager",
  "Juno Eclipse",
  "Katuunko",
  // Kazdan Paratus
  // Kazuda Xiono
  // Ki-Adi-Mundi
  // Kit Fisto
  // Kylo Ren
  // Lando Calrissian
  // Lama Su
  // Leia Organa
  // Luke Skywalker
  // Lumiya
  // Lobot
  // Lorrino
  // Lott Dod
  // Luminara Unduli
  // Mace Windu
  // Major Vonreg
  // Mara Jade Skywalker
  // Maris Brood
  // Max Rebo
  // Rebelde
  // Mon Mothma
  // Naat Reath
  // Neeku Vozo
  // Nute Gunray: Virrey neimoidiano de la Federación de Comercio
  // Obi-Wan Kenobi: Legendario Caballero Jedi, maestro de Anakin y Luke
  // Orson Krennic
  // Orka
  // Padmé Amidala: Senadora de Naboo, esposa de Anakin Skywalker y madre de Luke Skywalker y Leia
  // Organa
  // Plo Koon: Caballero Jedi Kel Dor.
  // Po Nudo: Senador Aqualish del Planeta Ando
  // Poe Dameron
  // Poggle el Menor: Archiduque de Geonosis
  // PROXY: Robot de entrenamiento de Galen Marek.
  // Qui-Gon Jinn: Maestro de Obi-Wan
  // Rahm Kota: Jedi superviviente. Cofundador de la Alianza Rebelde
  // Rabé
  // R2-D2: Heroico droide astromecánico azul
  // Rex: Capitán Clon líder de la legión 501 que se retiró el chip de obediencia antes de la orden
  // 66.
  // Riff Tamson: Feroz embajador separatista
  // Riyo Chuchi: Política del planeta Pantora durante las guerras Clon.
  // Ruescott Melshi
  // Rune Haako: Asistente de Nute Gunray
  // Rey (Star Wars)
  // Sabine Wren
  // San Hill: Presidente muun del Clan Bancario Intergaláctico
  // Satine Kryze
  // Sei Taria: Humana ayudante del Canciller Valorum
  // Shaak Ti: Maestra Jedi Togruta
  // Shmi Skywalker: Madre de Anakin Skywalker
  // Sifo-Dyas: Misterioso Caballero Jedi
  // Siri Tachi: Padawan de la maestra Adi Gallia
  // Sev'rance Tann: Mujer de raza chiss
  // Sheev Palpatine: Canciller Supremo de la República y Lord Sith.
  // Stam Reath: Padawan de Echuu-Shen Jon
  // Sly Moore
  // Tam Ryvora
  // Tía Z Cantinera de Colossus
  // Torra Doza
  // Tenel Ka: Aprendiz de Luke Skywalker en Yavin IV
  // Snoke
  // Unkar Plutt
  // Visas Marr: Miraluka nativa del Planeta Katarr
  // Vergere: Caballero Jedi fosh
  // Wat Tambor: Emir y capataz skakoano de la Tecno Unión
  // Watto: Vendedor toydariano de Tatooine, amo de Anakin y su madre
  // Wedge Antilles: Heroico piloto de la Alianza Rebelde
  // Wicket W. Warrick: Ewok de la luna de Endor
  // Xizor: Líder de la organización criminal "Sol Negro"
  // Yarua: Senador wookiee
  // Yoda: Poderoso y sabio Maestro Jedi
];

let tabla = document.getElementById("tabla");
console.log(tabla);
for (let i = 0; i < list.length; i++) {
  const p = document.createElement("p");
  const text = document.createTextNode(list[i]).textContent;
  p.textContent = text;
  tabla.appendChild(p);
}
