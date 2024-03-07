export interface Expression {
  text: string;
  tags: string[];
}

export const expressions: Expression[] = [
  {
    text: "Si c'est pas le roi des cons, c'est qu'ils sont en démocratie.",
    tags: ["cons"],
  },
  {
    text: "C'est pas le roi des cons, mais il a les clés du palais !",
    tags: ["cons"],
  },
  {
    text: "Dans une boîte de cons, il fera pas le couvercle.",
    tags: ["cons"],
  },
  {
    text: "Il est con à bêcher de la flotte.",
    tags: ["cons"],
  },
  {
    text: "Si on mettait tous les idiots du village dans un village, il serait quand même l'idiot du village.",
    tags: ["idiots"],
  },
  {
    text: "Il a été bercé trop près du mur.",
    tags: ["enfance"],
  },
  {
    text: "Il a été fini à la pisse.",
    tags: ["enfance"],
  },
  {
    text: "Son berceau a pris feu et son père l'a éteint à coups de pelle.",
    tags: ["enfance"],
  },
  {
    text: "Ce n'est pas le pingouin qui glisse le plus loin !",
    tags: ["animaux"],
  },
  {
    text: "C'est un bien bel immeuble mais le dernier étage est vacant !",
    tags: ["bâtiments"],
  },
  {
    text: "Le jour où il pleuvra de la soupe, ce sera le seul avec une fourchette.",
    tags: ["inadapté"],
  },
  {
    text: "Il est du genre à remuer la tête si on lui offre un éventail.",
    tags: ["inadapté"],
  },
  {
    text: "Il a deux neurones et ils se battent pour la troisième place.",
    tags: ["idiots"],
  },
  {
    text: "Il a pas inventé la poudre, mais il était pas loin quand ça a pété.",
    tags: ["inventions"],
  },
  {
    text: "Il lui manque deux minutes de cuisson.",
    tags: ["enfance"],
  },
  {
    text: "Il a été sorti trop tôt du four.",
    tags: ["enfance"],
  },
  {
    text: "Il comprend vite mais faut lui expliquer longtemps.",
    tags: ["idiots"],
  },
  {
    text: "Les barrières sont baissées, les lumières clignotent mais le train passe pas.",
    tags: ["trains", "lumière", "machines"],
  },
  {
    text: "Il a pas inventé l'enclume mais il s'en ait pris une grosse dans la tronche.",
    tags: ["inventions"],
  },
  {
    text: "C'est pas la tomate la plus mûre du jardin.",
    tags: ["fruits", "légumes"],
  },
  {
    text: "C'est pas la carpe la plus fraîche de l'étang.",
    tags: ["animaux"],
  },
  {
    text: "Il a le pâté qui touche le bocal.",
    tags: ["nourriture"],
  },
  {
    text: "Au bal des cons, il est dans l'orchestre.",
    tags: ["cons", "musique"],
  },
  {
    text: "Il pourrait cacher ses propres œufs de pâques. ",
    tags: ["nourriture", "inadapté"],
  },
  {
    text: "Les idées intelligentes vous ont toujours suivi, mais vous êtes plus rapide.",
    tags: ["inadapté"],
  },
  {
    text: "Vous êtes tellement loin derrière que vous êtes persuadé d'être le premier.",
    tags: ["idiots"],
  },
  {
    text: "La roue tourne, mais le hamster est mort.",
    tags: ["animaux"],
  },
  {
    text: "Il con comme une valise sans poignée !",
    tags: ["cons"],
  },
  {
    text: "Il est con comme une table sans pieds.",
    tags: ["cons"],
  },
  {
    text: "Il est con comme un balai sans manche.",
    tags: ["cons"],
  },
  {
    text: "C'est pas le fromage le plus affiné du terroir.",
    tags: ["nourriture"],
  },
  {
    text: "C'est pas la truite la plus oxygénée de la rivière.",
    tags: ["animaux"],
  },
  {
    text: "Il n'a pas la lumière à tous les étages.",
    tags: ["lumière"],
  },
  {
    text: "C'est pas la bière la plus fraîche de la caisse.",
    tags: ["nourriture"],
  },
  {
    text: "C'est pas la capote la plus étanche du paquet.",
    tags: ["ustensiles"],
  },
  {
    text: "C'est pas celui qui a allumé le cul des lucioles.",
    tags: ["inventions", "lumière"],
  },
  {
    text: "Il a pas inventé la machine à courber les bananes.",
    tags: ["inventions"],
  },
  {
    text: "C'est pas le vacciné le mieux relié à la 5G.",
    tags: ["idiots"],
  },
  {
    text: "Ce n'est pas la plus fine fleur des jardins d'Arabie.",
    tags: ["fleur"],
  },
  {
    text: "Il y en un comme lui dans chaque village.",
    tags: ["idiots", "village"],
  },
  {
    text: "On l'aime bien au village, depuis que le chien est mort !",
    tags: ["idiots", "village"],
  },
  {
    text: "Il a le regard tellement vitreux qu'on dirait une église.",
    tags: ["idiots"],
  },
  {
    text: "Il est aussi confus qu'un pet dans une usine de ventilateurs.",
    tags: ["idiots"],
  },
  {
    text: "Si ce garçon avait une idée, elle mourrait de solitude.",
    tags: ["idiots"],
  },
  {
    text: "Il n'a qu'une rame à l'eau.",
    tags: ["idiots", "sport"],
  },
  {
    text: "Il est si bête qu'il pourrait se jeter par terre et rater.",
    tags: ["idiots"],
  },
  {
    text: "C'est pas le couteau le plus aiguisé du tiroir.",
    tags: ["ustensiles"],
  },
  {
    text: "C'est pas le morpion le plus chatouilleux de la place.",
    tags: ["village"],
  },
  {
    text: "C'est pas le crayon le plus pointu de la boîte.",
    tags: ["ustensiles"],
  },
  {
    text: "Sa mère l'a accouché dans un escalier.",
    tags: ["idiots"],
  },
  {
    text: "C'est pas la guirlande la plus brillante du sapin.",
    tags: ["lumière"],
  },
  {
    text: "C'est pas la flèche la plus piquante du carquois.",
    tags: ["ustensiles"],
  },
  {
    text: "C'est pas la flèche la plus rapide du carquois.",
    tags: ["ustensiles"],
  },
  {
    text: "Il saurait pas trouver son cul avec une carte.",
    tags: ["idiots"],
  },
  {
    text: "Il n'encombrera pas les bancs de polytechnique.",
    tags: ["idiots"],
  },
  {
    text: "Il a pas inventé la pelle mais il en a pris un bon coup !",
    tags: ["inventions"],
  },
  {
    text: "Le jour où les cons seront en orbite, il aura pas fini de tourner !",
    tags: ["cons"],
  },
  {
    text: "C'est le genre de personne à regarder en haut et en bas avant de traverser.",
    tags: ["inadapté"],
  },
  {
    text: "Si l'homme descend du singe, il a dû se payer quelques branches au passage.",
    tags: ["enfance"],
  },
  {
    text: "Il a pas toutes ses frites dans le même sachet.",
    tags: ["nourriture"],
  },
  {
    text: "Il n'arriverait pas à vider l'eau d'une botte avec les instructions sur le talon.",
    tags: ["inadapté"],
  },
  {
    text: "C'est pas lui qui a mis les pattes aux mouches.",
    tags: ["inventions", "animaux"],
  },
  {
    text: "On lui donnerait de l'eau chaude et du temps, il n'inventerait pas l'eau tiède.",
    tags: ["inventions"],
  },
  {
    text: "Il voulu être con mais le joua si mal, qu'au théâtre des cons, il resta dans la malle.",
    tags: ["cons", "théâtre"],
  },
  {
    text: "Si le TGV roule à 300, il y est pour rien.",
    tags: ["machines", "inventions"],
  },
  {
    text: "Si les cons savaient voler, il serait chef d'escadrille !",
    tags: ["cons"],
  },
  {
    text: "Il a l'esprit aussi affûté qu'une bille",
    tags: ["idiots"],
  },
  {
    text: "Si tous les cons du monde se donnaient la main, il donnerait ses pieds.",
    tags: ["cons"],
  },
  {
    text: "Il croiserait plus con qu'lui, il taperait d'sus pour prendre sa place !",
    tags: ["cons"],
  },
  {
    text: "Il est du genre à s'engueuler avec son écho.",
    tags: ["idiots"],
  },
  {
    text: "Il est un peu haut de plancher et un peu bas de plafond !",
    tags: ["bâtiments"],
  },
  {
    text: "C'est pas un 100 watts.",
    tags: ["québec", "ustensiles", "lumière"],
  },
  {
    text: "Joue pas au con, t'es sûr de gagner !",
    tags: ["cons"],
  },
  {
    text: "J'en ai connu des cons. Mais lui, c'est une synthèse.",
    tags: ["cons"],
  },
  {
    text: "C'est pas le fruit le plus mûr du potager.",
    tags: ["fruits", "légumes"],
  },
  {
    text: "Dieu l'a pas rempli jusqu'en haut.",
    tags: ["enfance"],
  },
  {
    text: "T'es pas le roi des cons mais t'es premier dans l'ordre de succession.",
    tags: ["cons"],
  },
  {
    text: "Tu lui lances un caillou il le rapporte.",
    tags: ["idiots"],
  },
  {
    text: "Ce n'est pas la belette la plus vive du sous-bois.",
    tags: ["animaux"],
  },
  {
    text: "Il garde bien les moutons.",
    tags: ["animaux"],
  },
  {
    text: "Le jour ou les cons voleront il nous cachera le Soleil.",
    tags: ["cons"],
  },
  {
    text: "Le jour ou les cons voleront il aura une belle vue.",
    tags: ["cons"],
  },
  {
    text: "C'est pas la vache à qui on met la cloche.",
    tags: ["animaux"],
  },
  {
    text: "Il manque quelques pages à son livre.",
    tags: ["ustensiles"],
  },
  {
    text: "C'est pas la tondeuse qui part du premier coup.",
    tags: ["machines"],
  },
  {
    text: "Il n'a pas inventé le fil à couper le beurre.",
    tags: ["machines"],
  },
  {
    text: "C'est pas la pomme la plus sucrée du verger.",
    tags: ["fruits"],
  },
  {
    text: "Il a bu l'eau des pâtes.",
    tags: ["nourriture"],
  },
  {
    text: "Il aime bien voir passer les trains.",
    tags: ["machines"],
  },
];
