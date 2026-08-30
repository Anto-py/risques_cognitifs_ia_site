# Ce qu'on entend sur l'IA, ce que les études disent

Site d'une page qui confronte cinq idées reçues sur les effets de l'IA générative sur notre pensée à ce que les études établissent, pour un profane éduqué. Chaque carte porte une croyance ; le clic ouvre ce qu'on en sait ; un second clic ouvre les sources, avec leur état (publiée, corrigée, non contrôlée par des pairs) et leur accès. Une sixième carte, de forme distincte, porte ce qui tient.

Double usage : lecture autonome par lien partagé, et support projeté en formation. Chaque carte a sa propre adresse, ce qui permet de pointer une carte précise depuis un support de cours.

## Comment ça marche

- HTML, CSS et JavaScript natifs, sans build ni dépendance.
- Tout le fond éditorial vit dans un seul fichier : `data/contenu.json` (six cartes, vingt sources). Le site l'affiche tel quel ; corriger le contenu ne touche jamais le code.
- Aucune requête vers un domaine tiers : polices, fond et images sont servies par le site.
- Le dépliage repose sur les balises `details` natives du HTML, donc accessible au clavier et aux lecteurs d'écran sans code supplémentaire.
- La page fonctionne hébergée en HTTP ; l'ouverture directe du fichier ne charge pas le contenu (limitation du `fetch` local).

## Voir le site en local

```bash
python3 -m http.server 8765
# puis ouvrir http://localhost:8765/
```

## D'où vient le contenu

Chaque affirmation du site s'appuie sur une enquête documentaire arrêtée au 10 août 2026. Le corpus compte vingt sources citées : onze publiées sans réserve, trois corrigées, six jamais contrôlées par des pairs ; quatre adresses étaient bloquées et deux payantes. Le site affiche ces états, parce qu'une URL n'est pas une preuve de fiabilité : une étude rétractée peut rester en ligne, une adresse peut servir une version différente de celle que la presse a reprise.

## Licence

Texte et contenu : [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Made by Antonin Bareau avec l'aide essentielle d'un ou plusieurs LLM.