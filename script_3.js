let nb_floors = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

function pyramid (nb_floors) {
	var count = 1;
		while (count <= nb_floors) {
			console.log(" ".repeat([nb_floors-count]) + "#".repeat([count]));
			count++;
		}
}
pyramid(nb_floors);
 