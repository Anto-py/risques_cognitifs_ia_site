---
date_created: 2026-08-30
date_modified: 2026-08-30
---

# Cartes rédigées, appareil critique

Matière première du site, avec sa traçabilité phrase par phrase. `data/contenu.json` en est la version publiée, débarrassée des marqueurs.

Tous les marqueurs entre crochets renvoient à `2.recherches/ia/risques_cognitifs_ia/carte.md`. Aucune affirmation du site ne repose sur un passage absent de cette base : les onze qui l'étaient y ont été inscrites le 2026-08-30 sous les identifiants S43 à S53.

## Carte 1, la pensée critique

**Énoncé** : L'IA détruit la pensée critique

**Verdict** : Les deux études les plus citées par la presse sur ce sujet ne mesurent pas la pensée critique : elles demandent aux gens de juger eux-mêmes leur propre esprit critique. L'une des deux donne en plus deux chiffres différents pour son résultat principal, sans explication. [S01, S07, S42a, S42b]

**Développement** : Deux études portent l'essentiel des articles de presse sur ce thème. La première, de chercheurs de Microsoft Research et de Carnegie Mellon, interroge 319 travailleurs du savoir : elle relie la confiance qu'ils accordent à l'IA au fait de dire eux-mêmes moins recourir à la pensée critique [S01], sans établir de cause à effet selon les auteurs eux-mêmes [S02], sur un échantillon qu'ils reconnaissent penché vers des participants jeunes et technophiles [S03]. La seconde, d'un chercheur unique d'une école de commerce suisse, interroge 669 personnes recrutées sur les réseaux sociaux au Royaume-Uni [S05b] et affiche une forte baisse de pensée critique liée à l'usage de l'IA [S05a]. Mais son questionnaire ne teste rien : il demande aux répondants d'évaluer eux-mêmes leur esprit critique, sans reprendre le test validé qu'il annonce utiliser [S07]. Une psychologue rappelle que l'étude ne montre aucune causalité [S09a] et la distingue des travaux qui mesurent une performance réelle [S09b]. Une relecture indépendante confirme qu'aucune question ne porte sur une capacité réelle [S37a], et relève que l'article donne deux chiffres différents pour ce même résultat selon le tableau consulté, moins 0,68 dans l'un et moins 0,49 dans l'autre, sans que l'auteur explique l'écart [S42a, S42b, S37b]. C'est pourtant cette seconde étude qu'ont reprise Forbes, Big Think et phys.org pour affirmer que l'IA fait reculer la pensée critique [S50].

**Ancrage** : les trois titres de presse sont désormais portés par S50, vérifiés sur pièce.

## Carte 2, le cerveau en vacances

**Énoncé** : Les scanners montrent un cerveau en vacances quand on écrit avec ChatGPT

**Verdict** : L'autrice de l'étude dément elle-même cette lecture : son travail, dit-elle, ne peut pas montrer et n'a pas montré de bêtise dans le cerveau, pas de stupidité, pas de cerveau en vacances. [S23]

**Développement** : L'étude du MIT Media Lab mesure, chez 54 personnes rédigeant un essai, la connectivité de leur cerveau, c'est-à-dire le nombre de connexions actives repérées entre ses différentes zones ; les participants sont répartis en trois groupes de 18 selon l'outil autorisé [S20a, S20b]. C'est un texte mis en ligne par ses auteurs, que d'autres chercheurs n'ont pas encore contrôlé. Le résultat le plus net porte sur la mémoire immédiate du texte écrit : aucun des 18 participants ayant utilisé un assistant conversationnel n'a produit de citation correcte de son propre essai [S21b]. L'autre résultat, celui qui alimente l'idée d'un cerveau à l'arrêt, montre cette connectivité diminuer à mesure que le soutien extérieur augmente, du groupe sans outil au groupe moteur de recherche puis au groupe assistant, mais il est disputé [S22]. Des chercheurs extérieurs calculent qu'il aurait fallu environ 159 personnes, et non 54, pour être sûrs que cette baisse n'est pas due au hasard [S24], et relèvent que l'écart entre le groupe moteur de recherche et le groupe sans outil n'est pas net, à la différence du groupe assistant [S25]. L'autrice ajoute qu'une connectivité plus forte n'est en soi ni bonne ni mauvaise [S52]. Une seconde étude indépendante, sur la programmation assistée, retrouve un signal comparable mais faible, non confirmé sur une seconde tâche [S26].

**Correction appliquée** : le corpus porte deux chiffres sur la citation du texte, 15 sur 18 qui échouent [S21a] et aucun sur 18 qui réussit [S21b], deux questions distinctes que `carte.md` interdit de fusionner. Seul le second est retenu pour ne pas afficher deux nombres qui se contredisent en apparence.

## Carte 3, l'atrophie

**Énoncé** : À force de déléguer à l'IA, la pensée critique s'atrophie comme un muscle qu'on n'utilise plus

**Verdict** : Des chercheurs appuient cette image sur un texte de 1983 traitant de l'automatisation ; une psychologue la refuse, un esprit et un muscle différant selon elle à bien des égards. Ce qui manque aux deux camps n'est pas une preuve contraire, c'est de l'avoir observé. [S44, S46, S02]

**Développement** : Lee et ses collègues, chercheurs de Microsoft Research et de Carnegie Mellon, prennent cette crainte au sérieux : l'inquiétude envers les nouvelles technologies n'est pas sans fondement, utilisées sans précaution, elles détériorent bel et bien des facultés qu'il faudrait préserver [S43]. Ils s'appuient sur un texte de 1983 signé Lisanne Bainbridge : mécaniser les tâches routinières et laisser à l'humain la seule gestion des exceptions le prive de l'entraînement régulier de son jugement, et le laisse atrophié, mal préparé quand l'exception survient [S44]. Michelle Miller, professeure de psychologie, refuse cette image : un esprit et un muscle diffèrent de bien des façons selon elle [S46]. Le point qui tranche vraiment n'est dans aucun des deux camps. Ni l'un ni l'autre n'a observé ce processus se produire sur une personne réelle, dans la durée. L'équipe qui invoque l'atrophie le reconnaît à sa manière, puisqu'elle précise que son analyse n'établit aucun lien de cause à effet [S02]. Reste un critère qui aide à trancher au cas par cas : ce qui compte n'est pas la délégation en elle-même mais son objet, l'effort confié à l'outil était-il celui qu'il fallait fournir pour apprendre ce qu'on visait ? [S49]

**Verbatim, `_sources/d003-lee-2025-chi.txt`, introduction** : « Such consternation is not unfounded. Used improperly, technologies can and do result in the deterioration of cognitive faculties that ought to be preserved. As Bainbridge [7] noted, a key irony of automation is that by mechanising routine tasks and leaving exception-handling to the human user, you deprive the user of the routine opportunities to practice their judgement and strengthen their cognitive musculature, leaving them atrophied and unprepared when the exceptions do arise. »

**Verbatim, même fichier, section 4.3.2** : « This phenomenon is well-documented, as in Bainbridge's "Ironies of Automation" [7], and has been recently revisited in the context of GenAI by Simkute et al. [122] as the "Ironies of Generative AI". »

**Référence citée par d003, non présente au corpus** : Lisanne Bainbridge, 1983, « Ironies of automation », dans *Analysis, design and evaluation of man-machine systems*, Elsevier, 129-135. À citer toujours comme référence invoquée par Lee et ses collègues, jamais comme source du site.

**Ancrage** : les phrases de Miller sont désormais portées par S46, S47 et S48, celle de Risko et Gilbert par S49. Le rapprochement entre l'argument d'introduction de d003 et son auto-limitation de section 5 est éditorial : les deux faits sont attestés séparément, leur mise en regard ne l'est pas.

## Carte 4, la littératie

**Énoncé** : Quand on comprend techniquement comment marche l'IA, on juge mieux sa propre performance

**Verdict** : Chez les utilisateurs d'IA, ceux qui disent le mieux comprendre sa technique s'auto-évaluent le plus mal. L'écart habituel entre les moins et les plus compétents pour juger leur propre travail s'efface sous IA, sans qu'on sache s'il a vraiment disparu. [S32a, S32b]

**Développement** : Deux expériences réunissant 246 puis 452 utilisateurs d'IA leur ont fait résoudre des exercices de raisonnement logique [S32a]. Ceux qui déclarent la meilleure compréhension technique de l'IA sont aussi les moins précis pour juger leur propre performance, un lien que les auteurs qualifient eux-mêmes de faible et à interpréter avec prudence [S32b]. Sur cette même tâche, l'écart habituel entre les moins compétents, qui se surestiment, et les plus compétents, qui se sous-estiment, cesse de s'observer sous IA. Mais les auteurs précisent que cela peut vouloir dire que tout le monde est devenu également compétent tout en restant également incapable de se juger, plutôt que l'écart ait vraiment disparu [S32a]. Le communiqué de l'université titre pourtant sur le mode causal, « l'usage de l'IA nous fait surestimer notre performance », et évoque le risque que l'IA abêtisse notre capacité à trouver une information fiable, expression absente de l'article [S32c]. Ce mauvais jugement sur soi n'est pas un détail : c'est lui qui devrait guider le choix de faire une tâche seul ou de la confier à un outil, et il peut se tromper [S31a, S31b].

**Trouvaille du rédacteur, non retenue faute d'ancrage** : le durcissement commence à l'intérieur même de l'article, dont le résumé affirme le lien sans la précision « faible, à interpréter avec prudence » qu'on ne trouve que plus loin dans le corps du texte. Vérifié dans d027. Nuance l'opposition entre article prudent et communiqué qui durcit.

**Second point vérifié, non retenu** : le lien mesuré porte sur la seule compréhension technique, une des trois sous-échelles du questionnaire, quand le communiqué parle de littératie en IA sans cette restriction.

## Carte 5, l'imprimerie

**Énoncé** : On a dit pareil de l'écriture, de l'imprimerie et de la calculatrice

**Verdict** : C'est exact, et deux équipes de chercheurs le rappellent elles-mêmes. L'une ajoute aussitôt que cette inquiétude n'est pas sans fondement, l'autre explique en quoi ChatGPT diffère de ces outils. La comparaison est vraie et ne clôt pas la question. [S53, S43, S51]

**Développement** : Chez Lee et ses collègues, de Microsoft Research et Carnegie Mellon, l'introduction situe l'IA générative dans une lignée de techniques qui ont soulevé la même question sur la qualité de la pensée humaine : l'écriture, à laquelle Socrate objectait, l'imprimerie, à laquelle objectait Trithemius, la calculatrice, à laquelle objectaient les professeurs d'arithmétique, puis internet [S53]. La phrase suivante retourne l'argument : cette inquiétude n'est pas sans fondement, écrivent-ils, une technique mal employée peut abîmer des facultés qu'il faudrait préserver [S43]. Ils appuient ce constat sur un texte plus ancien qui décrit un mécanisme général, non sur un résultat mesuré sur l'IA, et précisent ailleurs que leur propre étude n'établit aucun lien de cause à effet [S02]. Chez Bastani et ses collègues, l'essai mené dans un lycée turc pose la même généalogie plus brièvement : la frappe au clavier a réduit le besoin d'écrire à la main, la calculatrice celui de calculer. Mais ils ajoutent deux différences : l'IA couvre un champ bien plus large et plus intellectuel que ces outils, et elle se trompe souvent sans que les élèves sachent le repérer [S51]. Leur propre essai le montre : l'accès à un assistant sans restriction a fait baisser de 17 % la performance à l'examen passé sans aide, un écart qui disparaît avec un assistant bridé [S10c, S11].

**Verbatim, `_sources/d001-bastani-2025-pnas.md`** : « In some ways, ChatGPT is not the first technology to exhibit this tradeoff—for instance, typing diminishes the need for handwriting, and calculators diminish the need for arithmetic, etc. However, we believe ChatGPT differs from prior technologies in two significant ways. First, the capabilities of ChatGPT are substantially broader and more intellectual compared to prior examples […] Second, unlike many prior technologies, ChatGPT is highly unreliable and often provides incorrect responses. Our results suggest that students are either unable to detect these failures or unwilling to spend the effort needed to check correctness. »

**Réserve du rédacteur** : les deux équipes ne répondent pas de la même façon. Lee et ses collègues par un principe général qui ne porte pas sur l'IA, Bastani et ses collègues par un résultat qui leur est propre. Cette asymétrie est laissée implicite plutôt que jugée.

**Point de méthode** : la source ne dit de Trithemius que son nom. Aucune biographie n'est ajoutée, faute d'appui dans le corpus. Noté en limite de S53.

## Carte 6, ce qui tient

**Énoncé** : Alors, qu'est-ce qui tient ?

**Verdict** : L'IA générative améliore ce qu'on produit avec elle, mais pas ce qu'on retient une fois qu'elle est retirée : trois essais indépendants le montrent. Dans le plus solide, l'écart disparaît quand l'IA se limite à indiquer une piste plutôt qu'à donner la réponse. [S10c, S17, S19, S11]

**Développement** : Trois expériences indépendantes, dans trois pays et trois disciplines, montrent le même décalage : l'IA générative améliore ce qu'on produit avec elle, pas ce qu'on retient sans elle.

La plus solide s'est déroulée dans un grand lycée turc, auprès de près de mille élèves de la 9e à la 11e année [S10a, S10b]. Ceux qui avaient utilisé un assistant sans restriction obtiennent, à l'examen final passé sans aide, un score inférieur de 17 % à celui du groupe sans IA [S10c]. Avec la même IA réglée pour donner des indices au lieu de la réponse, la différence devient trop petite pour qu'on puisse la distinguer du hasard : ce n'est pas l'IA qui coûte cher, mais la réponse livrée sans détour [S11].

À Munich, ni l'assistant libre ni la version guidée n'améliorent la compréhension ou les connaissances acquises, mais les deux réduisent la frustration et l'effort mental ressenti : le confort est réel, l'apprentissage non [S17, S18]. Un test surprise passé 45 jours après l'apprentissage donne 57,5 % de bonnes réponses au groupe ayant travaillé avec ChatGPT, contre 68,5 % au groupe qui avait étudié sans IA [S19].

Le corpus porte aussi un contrepoint. À Harvard, un tuteur conçu selon des principes pédagogiques fait nettement mieux apprendre 194 étudiants en physique qu'une séance en classe active, avantage important même dans son estimation la plus prudente [S15]. Trois réserves : les auteurs sont concepteurs et évaluateurs du même tuteur, bien qu'ils déclarent n'avoir aucun conflit d'intérêts [S15] ; la comparaison n'incluait aucun assistant ordinaire, seulement une séance en classe [S16a] ; la maîtrise était mesurée juste après la leçon, sans retour à distance [S16b]. Le résultat dit qu'un tuteur bien conçu bat une heure de cours, pas qu'un assistant conversationnel ordinaire fait apprendre.

Trois limites, enfin. Aucune étude ne mesure d'effet au-delà de 45 jours. L'essai turc n'a été répliqué par aucune équipe indépendante. Et chaque essai a son point faible : un établissement et une matière pour le premier, quatre-vingt-dix minutes sur un seul concept pour le deuxième, une université et beaucoup d'abandons pour le troisième, dont l'auteur recrutait dans son propre cours.

**Corrections appliquées** : « statistiquement indiscernable de zéro » traduit en langage ordinaire ; « écart net », employé trois fois pour des grandeurs différentes, varié.

## Ancrage dans la recherche amont

Onze passages portaient des cartes sans avoir d'identifiant dans `carte.md`. Ils y ont été inscrits, vérifiés un à un sur pièce, sous le run `2026-08-30-ancrage-01`.

| Identifiant | Passage | Source |
|---|---|---|
| S43 | L'inquiétude envers ces technologies n'est pas sans fondement | d003, introduction |
| S44 | Le raisonnement de Bainbridge sur l'ironie de l'automatisation, et la musculature cognitive atrophiée | d003, introduction |
| S45 | Le même argument repris après les résultats, relié aux « Ironies of Generative AI » | d003, section 4.3.2 |
| S46 | Le « trope de l'atrophie cognitive » nommé et refusé | d011 |
| S47 | Cette recherche n'a jamais prétendu suivre le processus en temps réel | d011 |
| S48 | L'externalisation cognitive n'était pas vue comme un mal à sa formulation | d011 |
| S49 | Le critère de nécessité de l'effort délégué au regard de l'objectif d'apprentissage | d022 |
| S50 | Les trois titres de presse recensés | d028 |
| S51 | Les deux différences entre ChatGPT et les techniques antérieures | d001 |
| S52 | Une connectivité plus forte n'est en soi ni bonne ni mauvaise | d007 |
| S53 | La généalogie Socrate, Trithemius, calculatrices, internet | d003, introduction |

Deux d'entre eux valent au-delà du site. S44 et S46 établissent que le corpus se contredit sur la métaphore du muscle, une source savante l'employant et une autre la refusant. S52 interdit de lire la baisse de connectivité comme une dégradation, faute de valence intrinsèque.
