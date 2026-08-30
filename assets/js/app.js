/* ============================================================
   Ce qu'on entend sur l'IA, ce que les études disent
   Trois responsabilités et pas une de plus : lire le fichier de
   contenu, construire les cartes, ouvrir la bonne carte quand
   l'adresse porte une ancre. L'état ouvert/fermé des balises
   details est natif, ce script ne le gère jamais directement.
   ============================================================ */

'use strict';

const CONTENU = 'data/contenu.json';
const SUR_TITRE = 'On entend souvent';
const LIBELLES_ETAT = {
  corrige: 'Corrigée',
  retracte: 'Rétractée',
  non_valide: 'Non validée par des pairs'
};
const LIBELLES_ACCES = {
  bloque: 'Accès bloqué',
  payant: 'Accès payant'
};

/* ---------- Petits constructeurs (textContent partout, jamais innerHTML pour le fond) ---------- */

function el(tag, classe, texte) {
  const n = document.createElement(tag);
  if (classe) n.className = classe;
  if (texte !== undefined) n.textContent = texte;
  return n;
}

/* Ornements de coin, variante C (entrelac géométrique), sur la seule carte finale */
const SVG_ORNEMENT =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" aria-hidden="true">' +
  '<path d="M5 5 Q15 5, 15 15 Q15 25, 5 25 M5 5 Q5 15, 15 15 Q25 15, 25 5"' +
  ' fill="none" stroke="currentColor" stroke-width="2"/>' +
  '<circle cx="8" cy="8" r="3"/>' +
  '<path d="M20 3 Q30 8, 25 20 Q35 15, 45 8" fill="none" stroke="currentColor" stroke-width="1.5"/>' +
  '<circle cx="25" cy="20" r="2"/></svg>';

function ajouterOrnements(carte) {
  const positions = ['coin-haut-gauche', 'coin-haut-droit', 'coin-bas-gauche', 'coin-bas-droit'];
  for (const p of positions) {
    const o = el('span', 'ornement ' + p);
    o.setAttribute('aria-hidden', 'true');
    o.innerHTML = SVG_ORNEMENT;
    carte.appendChild(o);
  }
}

/* ---------- En-tête, depuis le champ meta ---------- */

function rendreEntete(meta) {
  const entete = document.querySelector('.entete');
  entete.append(
    el('h1', null, meta.titre),
    el('p', 'cadrage', meta.cadrage),
    el('p', 'provenance', meta.recherche_source)
  );
}

/* ---------- Une source ---------- */

function rendreSource(s) {
  const li = el('li', 'source');

  const titre = el('p', 'source-titre');
  const a = el('a', null, s.titre);
  a.href = s.url;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  titre.append(a);
  li.append(titre);

  li.append(el('p', 'source-meta', s.auteur + ' — ' + s.annee + ', ' + s.publie_dans));

  if (s.etat !== 'publie') {
    const p = el('p', 'avertissement');
    p.append(el('strong', null, LIBELLES_ETAT[s.etat] || s.etat), s.etat_detail);
    li.append(p);
  }
  if (s.acces !== 'libre') {
    const p = el('p', 'avertissement');
    p.append(el('strong', null, LIBELLES_ACCES[s.acces] || s.acces), s.acces_detail);
    li.append(p);
  }

  li.append(el('p', 'limite', s.limite));
  return li;
}

/* ---------- Une carte ---------- */

function rendreCarte(c) {
  const carte = el('details', 'carte ' + c.type);
  carte.id = c.id;
  carte.name = 'cartes';                    // accordéon exclusif natif

  const summary = el('summary');
  if (c.type === 'lieu_commun') {
    summary.append(
      el('span', 'sur-titre', SUR_TITRE),
      el('span', 'enonce', '« ' + c.enonce + ' »'),
      el('span', 'appel', 'Ce qu’on en sait')
    );
  } else {
    summary.append(
      el('span', 'enonce', c.enonce),
      el('span', 'appel', 'Ce qu’on en sait')
    );
  }
  carte.append(summary);

  const corps = el('div', 'carte-corps');
  corps.append(el('p', 'verdict', c.verdict));

  const profondeur = el('details', 'profondeur');
  profondeur.name = 'profondeur';
  profondeur.append(el('summary', null, 'Le développement et les sources'));

  const pCorps = el('div', 'profondeur-corps');
  const dev = el('div', 'developpement');
  for (const paragraphe of c.developpement.split('\n\n')) {
    if (paragraphe.trim()) dev.append(el('p', null, paragraphe.trim()));
  }
  pCorps.append(dev);

  if (c.sources.length > 0) {
    const ul = el('ul', 'sources');
    for (const s of c.sources) ul.append(rendreSource(s));
    pCorps.append(ul);
  }
  profondeur.append(pCorps);
  corps.append(profondeur);
  carte.append(corps);

  if (c.type === 'resultat') ajouterOrnements(carte);

  /* Une carte refermée repart de l'état « verdict ouvert », pas « tout ouvert » */
  carte.addEventListener('toggle', () => {
    if (!carte.open) profondeur.open = false;
  });

  return carte;
}

/* ---------- Ancrage : l'adresse suit la carte ouverte ---------- */

function ouvrirDepuisAdresse() {
  const hash = decodeURIComponent(location.hash.slice(1));
  if (!hash) return;
  const cible = document.getElementById(hash);
  if (cible && cible.classList.contains('carte')) {
    cible.open = true;
    cible.scrollIntoView();
  }
}

function observerAncrage(conteneur) {
  for (const carte of conteneur.querySelectorAll('.carte')) {
    carte.addEventListener('toggle', () => {
      if (carte.open) {
        history.replaceState(null, '', '#' + carte.id);
      } else if (!conteneur.querySelector('.carte[open]')) {
        history.replaceState(null, '', location.pathname + location.search);
      }
    });
  }
  window.addEventListener('hashchange', ouvrirDepuisAdresse);
  ouvrirDepuisAdresse();
}

/* ---------- Stabilité visuelle à l'ouverture ---------- */
/* Ouvrir une carte referme celle qui l'était. Si la carte refermée
   était plus haut dans la page, la carte cliquée remonte et saute
   sous le curseur : on compense en gardant sa position à l'écran. */

function stabiliserOuverture(conteneur) {
  for (const carte of conteneur.querySelectorAll('.carte')) {
    const summary = carte.querySelector(':scope > summary');
    summary.addEventListener('click', () => {
      const avant = carte.getBoundingClientRect().top;
      requestAnimationFrame(() => {
        if (!carte.open) return;
        const apres = carte.getBoundingClientRect().top;
        const ecart = apres - avant;
        if (ecart !== 0) window.scrollBy(0, ecart);
      });
    });
  }
}

/* ---------- Impression : tout déplier, puis restaurer ---------- */

function gererImpression(conteneur) {
  let etats = null;
  window.addEventListener('beforeprint', () => {
    etats = new Map();
    /* L'exclusivité de l'accordéon refermerait chaque carte à l'ouverture
       de la suivante : on la retire le temps de l'impression, qui doit tout
       montrer, puis on la restaure. */
    for (const d of conteneur.querySelectorAll('details')) {
      etats.set(d, { ouvert: d.open, nom: d.getAttribute('name') });
      d.removeAttribute('name');
      d.open = true;
    }
  });
  window.addEventListener('afterprint', () => {
    if (!etats) return;
    /* Restaurer les états avant les noms : rendre son nom à une carte alors
       qu'une autre est ouverte la refermerait. */
    for (const [d, e] of etats) d.open = e.ouvert;
    for (const [d, e] of etats) {
      if (e.nom !== null) d.setAttribute('name', e.nom);
    }
    etats = null;
  });
}

/* ---------- Échec du chargement ---------- */

function afficherEchec(conteneur, erreur) {
  conteneur.textContent = '';
  const bloc = el('div', 'message-echec');
  bloc.append(el('h2', null, 'Le contenu n’a pas pu être chargé'));
  bloc.append(el('p', null, 'Le fichier des cartes est introuvable ou illisible. La page ne peut rien afficher sans lui.'));
  const bouton = el('button', null, 'Recharger la page');
  bouton.addEventListener('click', () => location.reload());
  bloc.append(bouton);
  conteneur.append(bloc);
  if (erreur) console.error('Échec du chargement du contenu :', erreur);
}

/* ---------- Point d'entrée ---------- */

async function main() {
  const conteneur = document.getElementById('cartes');
  try {
    const reponse = await fetch(CONTENU);
    if (!reponse.ok) throw new Error('HTTP ' + reponse.status);
    const data = await reponse.json();

    rendreEntete(data.meta);
    conteneur.textContent = '';
    for (const c of data.cartes) conteneur.append(rendreCarte(c));

    observerAncrage(conteneur);
    stabiliserOuverture(conteneur);
    gererImpression(conteneur);
  } catch (erreur) {
    afficherEchec(conteneur, erreur);
  }
}

main();