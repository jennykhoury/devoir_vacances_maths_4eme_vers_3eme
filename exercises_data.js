const EXERCISES_DATA = {
    "w1": {
        title: "Semaine 1 : Algèbre, Solides & Proportionnalité",
        exercises: [
            {
                id: "w1-ex1",
                num: "N°1",
                title: "Calculs numériques (Fractions & Puissances)",
                image: "image1.png",
                statement: `<p>On donne les nombres suivants :</p>
                <div class="math-formula">
                    \\[ D = \\frac{-25}{35} \\times \\frac{14}{-15} - \\frac{-33}{-9} + \\frac{1}{9} \\]
                    \\[ E = \\frac{\\frac{2}{3} + \\frac{4}{6}}{\\frac{9}{9} - \\frac{1}{2}} \\]
                    \\[ F = \\frac{1 - \\frac{1}{3}}{3 - \\frac{1}{1 - \\frac{3}{4} + \\frac{2}{8}}} \\]
                    \\[ G = \\frac{0,11 \\times (-10^2) \\times 0,18 \\times (-10)^3}{6 \\times (-10)^6} \\]
                </div>
                <p>1) Calculer \\(D\\), \\(E\\) et \\(F\\), de la façon la plus simple, et donner le résultat sous la forme d'une fraction irréductible.</p>
                <p>2) Donner l'écriture décimale de \\(G\\) puis exprimer \\(G\\) en écriture scientifique.</p>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Addition/Soustraction de fractions</strong> : Il faut réduire au même dénominateur commun avant d'additionner les numérateurs : \\(\\frac{a}{d} + \\frac{b}{d} = \\frac{a+b}{d}\\).</li>
                    <li><strong>Multiplication</strong> : Multiplier les numérateurs entre eux et les dénominateurs entre eux : \\(\\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd}\\). Il est recommandé de simplifier avant de calculer.</li>
                    <li><strong>Division</strong> : Diviser par une fraction revient à multiplier par son inverse : \\(\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}\\).</li>
                    <li><strong>Puissances de 10</strong> : \\(10^a \\times 10^b = 10^{a+b}\\) ; \\(\\frac{10^a}{10^b} = 10^{a-b}\\) ; \\((10^a)^b = 10^{a \\times b}\\).</li>
                    <li><strong>Écriture scientifique</strong> : Écriture de la forme \\(a \\times 10^n\\) où \\(1 \\le |a| < 10\\) (un seul chiffre non nul avant la virgule).</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>Pour D</strong> : Simplifiez d'abord \\(\\frac{-25}{35} = -\\frac{5}{7}\\) et \\(\\frac{14}{-15} = -\\frac{14}{15}\\). Le produit de deux nombres négatifs est positif !</li>
                    <li><strong>Pour E</strong> : Simplifiez \\(\\frac{4}{6} = \\frac{2}{3}\\) et \\(\\frac{9}{9} = 1\\). Le calcul devient beaucoup plus simple.</li>
                    <li><strong>Pour F</strong> : Résolvez par le bas. Simplifiez d'abord la somme du bas : \\(1 - \\frac{3}{4} + \\frac{2}{8} = 1 - \\frac{3}{4} + \\frac{1}{4} = \\frac{1}{2}\\). Ensuite, calculez \\(\\frac{1}{1/2} = 2\\).</li>
                    <li><strong>Pour G</strong> : Calculez d'abord le produit des nombres décimaux, puis utilisez les règles sur les puissances de 10. Attention, \\(-10^2 = -100\\) mais \\((-10)^3 = -1000\\).</li>
                </ul>`,
                inputs: [
                    { id: "w1-ex1-D", label: "Valeur de D", placeholder: "Ex: -26/9" },
                    { id: "w1-ex1-E", label: "Valeur de E", placeholder: "Ex: 8/3" },
                    { id: "w1-ex1-F", label: "Valeur de F", placeholder: "Ex: 2/3" },
                    { id: "w1-ex1-G1", label: "G (décimale)", placeholder: "Ex: 0.00033" },
                    { id: "w1-ex1-G2", label: "G (scientifique)", placeholder: "Ex: 3.3*10^-4" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>Calcul de D :</strong>
                        \\[ D = \\left(-\\frac{5}{7}\\right) \\times \\left(-\\frac{14}{15}\\right) - \\frac{11}{3} + \\frac{1}{9} \\]
                        \\[ D = \\frac{5 \\times 14}{7 \\times 15} - \\frac{11}{3} + \\frac{1}{9} = \\frac{5 \\times 7 \\times 2}{7 \\times 5 \\times 3} - \\frac{11}{3} + \\frac{1}{9} \\]
                        \\[ D = \\frac{2}{3} - \\frac{11}{3} + \\frac{1}{9} = -\\frac{9}{3} + \\frac{1}{9} = -3 + \\frac{1}{9} = -\\frac{27}{9} + \\frac{1}{9} = -\\frac{26}{9} \\]
                    </div>
                    <div class="correction-step">
                        <strong>Calcul de E :</strong>
                        Le numérateur est : \\(\\frac{2}{3} + \\frac{2}{3} = \\frac{4}{3}\\).<br>
                        Le dénominateur est : \\(1 - \\frac{1}{2} = \\frac{1}{2}\\).<br>
                        \\[ E = \\frac{\\frac{4}{3}}{\\frac{1}{2}} = \\frac{4}{3} \\times \\frac{2}{1} = \\frac{8}{3} \\]
                    </div>
                    <div class="correction-step">
                        <strong>Calcul de F :</strong>
                        Étape 1 : \\(1 - \\frac{3}{4} + \\frac{2}{8} = 1 - \\frac{3}{4} + \\frac{1}{4} = 1 - \\frac{2}{4} = 1 - \\frac{1}{2} = \\frac{1}{2}\\).<br>
                        Étape 2 : Le terme devient \\(\\frac{1}{1/2} = 2\\).<br>
                        Étape 3 : Le dénominateur de la fraction principale est : \\(3 - 2 = 1\\).<br>
                        Étape 4 : \\(F = \\frac{1 - 1/3}{1} = \\frac{2}{3}\\).
                    </div>
                    <div class="correction-step">
                        <strong>Calcul de G :</strong>
                        \\[ G = \\frac{0,11 \\times (-100) \\times 0,18 \\times (-1000)}{6 \\times 1\\,000\\,000} \\]
                        \\[ G = \\frac{-11 \\times (-180)}{6\\,000\\,000} = \\frac{1980}{6\\,000\\,000} = \\frac{198}{600\\,000} = \\frac{33}{100\\,000} = 0,00033 \\]
                        Écriture scientifique : \\(G = 3,3 \\times 10^{-4}\\).
                    </div>
                </div>`
            },
            {
                id: "w1-ex2",
                num: "N°2",
                title: "Développement et réduction d'expressions algébriques",
                image: "image2.png",
                statement: `<p>Développer et réduire les expressions suivantes :</p>
                <div class="math-formula">
                    \\[ A = \\frac{5}{3} \\left(\\frac{9}{5}x - 3\\right) - 2(3x - 4)(x + 7) \\]
                    \\[ B = 3x(x - 5) - 4(x + 1)(2x - 3) \\]
                </div>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Simple distributivité</strong> : \\(k(a + b) = ka + kb\\).</li>
                    <li><strong>Double distributivité</strong> : \\((a + b)(c + d) = ac + ad + bc + bd\\).</li>
                    <li><strong>Règle des signes</strong> : Soyez extrêmement vigilant avec les signes moins devant une parenthèse ou un facteur. Il est souvent plus sûr de développer d'abord dans une grande parenthèse, puis d'appliquer le signe moins ou le facteur externe.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>Pour A</strong> : Distribuez \\(\\frac{5}{3}\\) sur la première parenthèse : \\(\\frac{5}{3} \\times \\frac{9}{5}x = 3x\\) et \\(\\frac{5}{3} \\times (-3) = -5\\). Pour la seconde partie, développez d'abord \\((3x - 4)(x + 7)\\) et gardez le résultat dans une grande parenthèse multipliée par -2.</li>
                    <li><strong>Pour B</strong> : Développez \\(3x(x-5) = 3x^2 - 15x\\). Développez ensuite \\((x+1)(2x-3)\\) et multipliez chaque terme par -4.</li>
                </ul>`,
                inputs: [
                    { id: "w1-ex2-A", label: "Expression A développée", placeholder: "Ex: -6x^2 - 31x + 51" },
                    { id: "w1-ex2-B", label: "Expression B développée", placeholder: "Ex: -5x^2 - 11x + 12" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>Développement de A :</strong>
                        \\[ A = \\left(3x - 5\\right) - 2[3x^2 + 21x - 4x - 28] \\]
                        \\[ A = 3x - 5 - 2[3x^2 + 17x - 28] \\]
                        \\[ A = 3x - 5 - 6x^2 - 34x + 56 \\]
                        \\[ A = -6x^2 - 31x + 51 \\]
                    </div>
                    <div class="correction-step">
                        <strong>Développement de B :</strong>
                        \\[ B = (3x^2 - 15x) - 4[2x^2 - 3x + 2x - 3] \\]
                        \\[ B = 3x^2 - 15x - 4[2x^2 - x - 3] \\]
                        \\[ B = 3x^2 - 15x - 8x^2 + 4x + 12 \\]
                        \\[ B = -5x^2 - 11x + 12 \\]
                    </div>
                </div>`
            },
            {
                id: "w1-ex3",
                num: "N°3",
                title: "Géométrie plane (Cercle, médiatrice & triangles semblables)",
                image: "image3.png",
                statement: `<p>Soit \\((C)\\) un cercle de centre \\(O\\) et de diamètre \\([AB]\\) tel que \\(AB = 8\\) cm. La médiatrice de \\([OA]\\) coupe \\((C)\\) en \\(I\\) et \\(J\\), et \\([OA]\\) en \\(N\\).</p>
                <ol>
                    <li>Faire une figure soignée en vraies grandeurs.</li>
                    <li>Trouver la nature du quadrilatère \\(AIOJ\\) et justifier.</li>
                    <li>\\((OJ)\\) coupe \\((C)\\) en \\(L\\). Soit \\(M\\) le milieu de \\([IL]\\). La droite \\((OM)\\) coupe \\((C)\\) en \\(E\\) et \\(F\\).
                        <ol type="a">
                            <li>Montrer que \\((OM)\\) est la médiatrice de \\([IL]\\).</li>
                            <li>Trouver la nature du quadrilatère \\(OMIN\\).</li>
                            <li>Trouver la nature du quadrilatère \\(AEBF\\).</li>
                        </ol>
                    </li>
                </ol>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Médiatrice d'un segment</strong> : Droite perpendiculaire à ce segment en son milieu. Tout point de la médiatrice est équidistant des extrémités du segment : \\(MA = MB\\). Réciproquement, si un point est équidistant des extrémités d'un segment, il appartient à sa médiatrice.</li>
                    <li><strong>Losange</strong> : Quadrilatère ayant ses quatre côtés de même longueur. Ses diagonales se coupent en leur milieu et sont perpendiculaires.</li>
                    <li><strong>Triangle inscrit dans un demi-cercle</strong> : Si un triangle est inscrit dans un cercle ayant pour diamètre l'un de ses côtés, alors ce triangle est rectangle et ce diamètre est son hypoténuse.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>Pour la question 2</strong> : Observez les longueurs \\(OI\\), \\(OJ\\), \\(OA\\). Ce sont tous des rayons du cercle, donc égaux. Comme \\((IJ)\\) est la médiatrice de \\([OA]\\), les points \\(I\\) et \\(J\\) sont à égale distance de \\(O\\) et de \\(A\\). Donc \\(IA=IO\\) et \\(JA=JO\\).</li>
                    <li><strong>Pour la question 3.a</strong> : Le point \\(M\\) est le milieu de \\([IL]\\) par énoncé. Que peut-on dire des longueurs \\(OI\\) et \\(OL\\) ? Ce sont des rayons du cercle, donc \\(OI = OL\\). Ainsi, \\(O\\) et \\(M\\) sont équidistants de \\(I\\) et \\(L\\).</li>
                </ul>`,
                inputs: [], // Question géométrique descriptive, pas de vérification automatique simple requise
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>1) Figure :</strong><br>
                        Le cercle a un rayon de 4 cm. \\(OA = 4\\) cm. \\(N\\) est le milieu de \\([OA]\\) donc \\(ON = NA = 2\\) cm. La médiatrice de \\([OA]\\) est la perpendiculaire à \\((OA)\\) passant par \\(N\\).
                    </div>
                    <div class="correction-step">
                        <strong>2) Nature de AIOJ :</strong><br>
                        \\(I\\) et \\(J\\) sont sur le cercle de centre \\(O\\), donc \\(OI = OJ = \\text{rayon}\\).<br>
                        De plus, \\((IJ)\\) est la médiatrice du segment \\([OA]\\). Par propriété de la médiatrice, tout point sur celle-ci est équidistant des extrémités du segment. Ainsi :<br>
                        \\(IA = IO\\) et \\(JA = JO\\).<br>
                        Comme \\(OI = OJ = OA = \\text{rayon}\\), on en déduit que :<br>
                        \\(OI = IA = AJ = JO = \\text{rayon}\\).<br>
                        Le quadrilatère \\(AIOJ\\) a ses quatre côtés de même longueur, c'est donc un <strong>losange</strong>.
                    </div>
                    <div class="correction-step">
                        <strong>3.a) Médiatrice de [IL] :</strong><br>
                        Le point \\(M\\) est le milieu du segment \\([IL]\\) par énoncé, donc \\(MI = ML\\).<br>
                        De plus, \\(O\\) est le centre du cercle et \\(I\\) et \\(L\\) sont deux points du cercle, donc \\(OI = OL = \\text{rayon}\\).<br>
                        Le point \\(O\\) et le point \\(M\\) sont tous deux équidistants des extrémités \\(I\\) et \\(L\\). La droite \\((OM)\\) est donc la <strong>médiatrice</strong> du segment \\([IL]\\).
                    </div>
                    <div class="correction-step">
                        <strong>3.b) Nature de OMIN :</strong><br>
                        Les droites \\((IJ)\\) (qui est aussi la droite \\((IN)\\)) et \\((OM)\\) sont toutes deux perpendiculaires à d'autres droites. En effet, \\((IJ) \\perp (OA)\\) (par définition de la médiatrice) et \\((OM) \\perp (IL)\\) (car \\((OM)\\) est la médiatrice de \\([IL]\\)).<br>
                        Dans le triangle JIL, on a O est le milieu de [JL] et N est le milieu de [IJ], d'après le théorème des milieux (ON)//(IL)<br>
                        On déduit que (OM) est perpendiculaire à (AB) <br>
                        Un quadrilatère ayant trois angles droits est un rectangle <br>
                        Donc: OMIN est un rectangle</div>
                    <div class="correction-step">
                        <strong>3.c) Nature de AEBF :</strong><br>
                        \\([AB]\\) et \\([EF]\\) sont deux diamètres du cercle \\((C)\\). Leurs milieux respectifs coïncident avec le centre \\(O\\) du cercle. Un quadrilatère dont les diagonales se coupent en leur milieu est un parallélogramme. Comme ces diagonales sont de même longueur (ce sont des diamètres de longueur 8 cm), c'est un <strong>rectangle</strong>.
                    </div>
                </div>`
            },
            {
                id: "w1-ex4",
                num: "N°4",
                title: "Factorisation d'expressions algébriques",
                image: "image4.png",
                statement: `<p>Factoriser les expressions suivantes :</p>
                <div class="math-formula">
                    \\[ A = 4x^2y - 28xy^2 - 12x^2y^2 \\]
                    \\[ C = (3x + 1)(7x - 1) - (7x - 1)^2 \\]
                    \\[ E = (7x - 3)^2 - (5x - 1)(3 - 7x) \\]
                    \\[ G = (2x + 5)(2x - 5) - (6x - 7)(4x + 10) + (-2x - 5)^2 \\]
                </div>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Définition</strong> : Factoriser consiste à transformer une somme en produit.</li>
                    <li><strong>Facteur commun</strong> : Identifier un élément commun à tous les termes et utiliser la distributivité inverse : \\(ab + ac = a(b + c)\\).</li>
                    <li><strong>Astuce des signes</strong> : \\(3 - 7x = -(7x - 3)\\) et \\((-2x - 5)^2 = [-(2x + 5)]^2 = (2x + 5)^2\\). C'est indispensable pour faire apparaître des facteurs communs masqués.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>Pour A</strong> : Cherchez le plus grand facteur commun numérique et algébrique. Ici, \\(4xy\\) divise chaque terme.</li>
                    <li><strong>Pour C</strong> : Écrivez \\((7x - 1)^2\\) comme \\((7x - 1)(7x - 1)\\). Le facteur commun est visiblement \\((7x - 1)\\).</li>
                    <li><strong>Pour E</strong> : Remarquez que \\((3 - 7x) = -(7x - 3)\\). Le terme \\(-(5x - 1)(3 - 7x)\\) se transforme en \\(+(5x - 1)(7x - 3)\\). Le facteur commun devient \\((7x - 3)\\).</li>
                    <li><strong>Pour G</strong> : Remarquez que \\(4x + 10 = 2(2x + 5)\\) et que \\((-2x - 5)^2 = (2x + 5)^2\\). Le facteur commun est \\((2x + 5)\\).</li>
                </ul>`,
                inputs: [], // Expressions factorisées complexes, correction détaillée fournie
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>Factorisation de A :</strong>
                        On identifie \\(4xy\\) comme facteur commun :
                        \\[ A = 4xy \\times x - 4xy \\times 7y - 4xy \\times 3xy \\]
                        \\[ A = 4xy(x - 7y - 3xy) \\]
                    </div>
                    <div class="correction-step">
                        <strong>Factorisation de C :</strong>
                        \\[ C = (3x + 1)(7x - 1) - (7x - 1)(7x - 1) \\]
                        \\[ C = (7x - 1)[(3x + 1) - (7x - 1)] \\]
                        \\[ C = (7x - 1)(3x + 1 - 7x + 1) \\]
                        \\[ C = (7x - 1)(-4x + 2) = 2(7x - 1)(1 - 2x) \\]
                    </div>
                    <div class="correction-step">
                        <strong>Factorisation de E :</strong>
                        On utilise l'identité \\((3 - 7x) = -(7x - 3)\\) :
                        \\[ E = (7x - 3)^2 + (5x - 1)(7x - 3) \\]
                        \\[ E = (7x - 3)[(7x - 3) + (5x - 1)] \\]
                        \\[ E = (7x - 3)(12x - 4) \\]
                        On peut encore factoriser \\(12x - 4 = 4(3x - 1)\\) :
                        \\[ E = 4(7x - 3)(3x - 1) \\]
                    </div>
                    <div class="correction-step">
                        <strong>Factorisation de G :</strong>
                        On simplifie les termes : \\(4x + 10 = 2(2x + 5)\\) et \\((-2x - 5)^2 = (2x + 5)^2\\) :
                        \\[ G = (2x + 5)(2x - 5) - 2(6x - 7)(2x + 5) + (2x + 5)^2 \\]
                        \\[ G = (2x + 5)[(2x - 5) - 2(6x - 7) + (2x + 5)] \\]
                        \\[ G = (2x + 5)[2x - 5 - 12x + 14 + 2x + 5] \\]
                        \\[ G = (2x + 5)(-8x + 14) \\]
                        On factorise \\(-8x + 14 = 2(-4x + 7) = 2(7 - 4x)\\) :
                        \\[ G = 2(2x + 5)(7 - 4x) \\]
                    </div>
                </div>`
            },
            {
                id: "w1-ex5",
                num: "N°5",
                title: "Géométrie dans l'espace (Volume d'une maquette)",
                image: "image5.png",
                statement: `<p>La maquette de maison représentée ci-dessous est composée d'un pavé droit de dimensions : \\(AB = 30\\) cm, \\(AE = 20\\) cm et \\(AD = 5\\) cm.</p>
                <p>Ce pavé est surmonté d'une pyramide de hauteur \\(6\\) cm.</p>
                <p><strong>Calculer le volume de cette maquette.</strong></p>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Volume d'un pavé droit (parallélépipède rectangle)</strong> : \\(V = Longueur \\times largeur \\times hauteur = L \\times l \\times h\\).</li>
                    <li><strong>Volume d'une pyramide</strong> : \\(V = \\frac{1}{3} \\times Aire\\_de\\_la\\_base \\times hauteur\\_pyramide\\).</li>
                    <li>La base de la pyramide est ici un rectangle identique à la face supérieure du pavé droit, de dimensions \\(AB \\times AD\\).</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Calculez d'abord le volume du pavé droit : \\(V_{pave} = 30 \\times 5 \\times 20\\) cm³.</li>
                    <li>Calculez ensuite l'aire de la base de la pyramide (rectangle de côtés 30 cm et 5 cm) : \\(Aire = 30 \\times 5 = 150\\) cm².</li>
                    <li>Calculez le volume de la pyramide : \\(V_{pyramide} = \\frac{1}{3} \\times 150 \\times 6\\).</li>
                    <li>Le volume total est la somme des deux volumes.</li>
                </ul>`,
                inputs: [
                    { id: "w1-ex5", label: "Volume de la maquette (en cm³)", placeholder: "Ex: 3300" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>Étape 1 : Volume du pavé droit :</strong><br>
                        Le pavé droit a pour dimensions : \\(L = AB = 30\\) cm, \\(l = AD = 5\\) cm, \\(h = AE = 20\\) cm.<br>
                        \\[ V_{pave} = L \\times l \\times h = 30 \\times 5 \\times 20 = 3000\\text{ cm}^3 \\]
                    </div>
                    <div class="correction-step">
                        <strong>Étape 2 : Volume de la pyramide :</strong><br>
                        La base de la pyramide est un rectangle de dimensions \\(30\\text{ cm} \\times 20\\text{ cm}\\).<br>
                        \\[ Aire\\_base = 30 \\times 20 = 600\\text{ cm}^2 \\]
                        La hauteur de la pyramide est \\(h_{pyr} = 6\\) cm. Le volume est donc :<br>
                        \\[ V_{pyr} = \\frac{1}{3} \\times Aire\\_base \\times h_{pyr} = \\frac{1}{3} \\times 600 \\times 6 = 1200\\text{ cm}^3 \\]
                    </div>
                    <div class="correction-step">
                        <strong>Étape 3 : Volume total :</strong><br>
                        \\[ V_{total} = V_{pave} + V_{pyr} = 3000 + 1200 = 4200\\text{ cm}^3 \\]
                    </div>
                </div>`
            },
            {
                id: "w1-ex6",
                num: "N°6",
                title: "Proportionnalité (Pourcentages & Remises)",
                image: "image6.png",
                statement: `<p>Un antiquaire souhaite vendre une armoire au prix initial de \\(380\\) euros (\\(380\\) €).</p>
                <ol>
                    <li>Ne parvenant pas à la vendre, il décide d'accorder une remise de \\(20\\) % sur son prix initial. Calculer le nouveau prix de l'armoire.</li>
                    <li>La vente ne se faisant pas, il décide d'accorder une remise de \\(114\\) € sur le prix initial de \\(380\\) €. Calculer le pourcentage de la réduction faite sur le prix initial.</li>
                </ol>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Appliquer un pourcentage de réduction</strong> : Diminuer une valeur de \\(p\\) % revient à la multiplier par \\((1 - \\frac{p}{100})\\). Une baisse de 20% revient à multiplier par \\(1 - 0,20 = 0,80\\).</li>
                    <li><strong>Déterminer un pourcentage d'évolution</strong> : \\(\\text{Pourcentage} = \\frac{\\text{Valeur de la réduction}}{\\text{Valeur initiale}} \\times 100\\).</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>Pour la question 1</strong> : Calculez d'abord le montant de la remise : \\(380 \\times \\frac{20}{100} = 76\\) €. Soustrayez ensuite ce montant du prix initial.</li>
                    <li><strong>Pour la question 2</strong> : Divisez le montant de la remise (114 €) par le prix d'origine (380 €) et multipliez le résultat par 100 pour obtenir le pourcentage.</li>
                </ul>`,
                inputs: [
                    { id: "w1-ex6-1", label: "Prix après remise de 20% (€)", placeholder: "Ex: 304" },
                    { id: "w1-ex6-2", label: "Pourcentage pour 114 € de réduction (%)", placeholder: "Ex: 30" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>1) Calcul du nouveau prix :</strong><br>
                        Montant de la remise de 20% :<br>
                        \\[ Remise = 380 \\times 0,20 = 76\\text{ €} \\]
                        Nouveau prix :<br>
                        \\[ Prix\\_final = 380 - 76 = 304\\text{ €} \\]
                        <em>Méthode directe : \\(380 \\times (1 - 0,20) = 380 \\times 0,80 = 304\\) €.</em>
                    </div>
                    <div class="correction-step">
                        <strong>2) Calcul du pourcentage de réduction :</strong><br>
                        Rapport de la réduction sur le prix initial :<br>
                        \\[ Rapport = \\frac{114}{380} = 0,3 \\]
                        Pourcentage :<br>
                        \\[ Pourcentage = 0,3 \\times 100 = 30\\% \\]
                    </div>
                </div>`
            },
            {
                id: "w1-ex7",
                num: "N°7",
                title: "Algorithmique (Variables Scratch & Équations)",
                image: "image7.png",
                statement: `<p>La figure ci-après est la copie d'écran d'un programme réalisé avec le logiciel « Scratch ».</p>
                <div class="scratch-container">
                    <div class="scratch-block scratch-event">quand <span class="scratch-input">drapeau vert</span> est cliqué</div><br>
                    <div class="scratch-block scratch-looks">montrer</div><br>
                    <div class="scratch-block scratch-motion">aller à x: <span class="scratch-input">0</span> y: <span class="scratch-input">0</span></div><br>
                    <div class="scratch-block scratch-sensing">demander <span class="scratch-input">Choisis un nombre :</span> et attendre</div><br>
                    <div class="scratch-block scratch-data">mettre <span class="scratch-input">x</span> à <span class="scratch-input oval">réponse</span></div><br>
                    <div class="scratch-block scratch-data">mettre <span class="scratch-input">y</span> à <span class="scratch-input oval">x * x - 9</span></div><br>
                    <div class="scratch-block scratch-looks">dire <span class="scratch-input">En choisissant</span> pendant <span class="scratch-input">1</span> secondes</div><br>
                    <div class="scratch-block scratch-looks">dire <span class="scratch-input oval">x</span> pendant <span class="scratch-input">1</span> secondes</div><br>
                    <div class="scratch-block scratch-looks">dire <span class="scratch-input">On obtient :</span> pendant <span class="scratch-input">1</span> secondes</div><br>
                    <div class="scratch-block scratch-looks">dire <span class="scratch-input oval">y</span></div>
                </div>
                <ol>
                    <li>Montrer que si on choisit \\(2\\) comme nombre de départ, alors le programme renvoie \\(-5\\).</li>
                    <li>Que renvoie le programme si on choisit au départ :
                        <ol type="a">
                            <li>le nombre \\(5\\) ?</li>
                            <li>le nombre \\(-4\\) ?</li>
                        </ol>
                    </li>
                    <li>Déterminer les nombres qu'il faut choisir au départ pour que le programme renvoie \\(0\\).</li>
                </ol>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Algorithme et Variables</strong> : La variable \\(x\\) stocke la réponse de l'utilisateur (le nombre choisi). La variable \\(y\\) effectue le calcul mathématique \\(x \\times x - 9\\), soit \\(x^2 - 9\\).</li>
                    <li><strong>Résolution de l'équation \\(x^2 - a = 0\\)</strong> :
                        \\[ x^2 - 9 = 0 \\iff (x-3)(x+3) = 0 \\]
                        Un produit de facteurs est nul si et seulement si l'un des facteurs est nul. Les solutions de \\(x^2 = 9\\) sont \\(3\\) et \\(-3\\).
                    </li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>Question 1</strong> : Remplacez \\(x\\) par 2 dans la formule \\(y = x^2 - 9\\) : \\(y = 2^2 - 9 = 4 - 9 = -5\\).</li>
                    <li><strong>Question 2.a</strong> : Calculez \\(5^2 - 9\\).</li>
                    <li><strong>Question 2.b</strong> : Calculez \\((-4)^2 - 9\\). Attention, un nombre négatif élevé au carré devient positif : \\((-4) \\times (-4) = 16\\).</li>
                    <li><strong>Question 3</strong> : Il faut résoudre l'équation \\(x^2 - 9 = 0\\), c'est-à-dire \\(x^2 = 9\\). N'oubliez pas qu'un nombre positif possède deux racines carrées : une positive et une négative !</li>
                </ul>`,
                inputs: [
                    { id: "w1-ex7-2a", label: "Résultat pour 5", placeholder: "Ex: 16" },
                    { id: "w1-ex7-2b", label: "Résultat pour -4", placeholder: "Ex: 7" },
                    { id: "w1-ex7-3", label: "Nombres de départ pour obtenir 0", placeholder: "Ex: 3 et -3" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>1) Vérification pour le nombre 2 :</strong><br>
                        Le programme effectue la formule : \\(y = x^2 - 9\\).<br>
                        Pour \\(x = 2\\) :<br>
                        \\[ y = 2^2 - 9 = 4 - 9 = -5 \\]
                        Le programme renvoie bien \\(-5\\).
                    </div>
                    <div class="correction-step">
                        <strong>2) Calculs de sortie :</strong><br>
                        a) Pour \\(x = 5\\) : \\(y = 5^2 - 9 = 25 - 9 = 16\\). Le programme renvoie 16.<br>
                        b) Pour \\(x = -4\\) : \\(y = (-4)^2 - 9 = 16 - 9 = 7\\). Le programme renvoie 7.
                    </div>
                    <div class="correction-step">
                        <strong>3) Détermination des nombres de départ pour obtenir 0 :</strong><br>
                        On cherche \\(x\\) tel que \\(y = 0\\), soit :<br>
                        \\[ x^2 - 9 = 0 \\iff x^2 = 9 \\]
                        Cette équation possède deux solutions :<br>
                        \\[ x = \\sqrt{9} = 3 \\quad \\text{ou} \\quad x = -\\sqrt{9} = -3 \\]
                        Il faut choisir \\(3\\) ou \\(-3\\) au départ pour obtenir 0.
                    </div>
                </div>`
            },
            {
                id: "w1-ex8",
                num: "N°8",
                title: "Grandeurs et Mesures (Volumes & Débits - Fuite d'eau)",
                image: "image8.png",
                statement: `<p>Dans une habitation, la consommation d'eau peut être anormalement élevée lorsqu'il y a une fuite d'eau.</p>
                <p>On considère la situation suivante :</p>
                <ul>
                    <li>Une salle de bain est équipée d'une vasque de forme cylindrique (diamètre intérieur : \\(40\\) cm, hauteur intérieure : \\(15\\) cm, masse : \\(25\\) kg).</li>
                    <li>Le robinet fuit à raison d'une goutte par seconde.</li>
                    <li>En moyenne, \\(20\\) gouttes d'eau correspondent à un millilitre (\\(1\\) ml).</li>
                </ul>
                <p>Rappels : \\(\\text{Volume du cylindre} = \\pi \\times \\text{rayon}^2 \\times \\text{hauteur}\\) et \\(1\\text{ dm}^3 = 1\\text{ litre}\\).</p>
                <ol>
                    <li>En raison de la fuite, montrer qu'il tombe \\(86\\,400\\) gouttes dans la vasque en une journée complète.</li>
                    <li>Calculer, en litres, le volume d'eau qui tombe dans la vasque en une semaine en raison de la fuite.</li>
                    <li>Montrer que la vasque a un volume de \\(18,85\\) litres, arrondi au centilitre près.</li>
                    <li>L'évacuation de la vasque est fermée et le logement inoccupé pendant une semaine. L'eau va-t-elle déborder de la vasque ? Justifier la réponse.</li>
                </ol>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Temps</strong> : 1 minute = 60 secondes ; 1 heure = 60 minutes = 3600 secondes ; 1 jour = 24 heures = 86 400 secondes.</li>
                    <li><strong>Conversion de volumes/capacités</strong> :
                        <ul>
                            <li>\\(1\\text{ l} = 1\\text{ dm}^3 = 1000\\text{ cm}^3 = 1000\\text{ ml}\\).</li>
                            <li>\\(1\\text{ ml} = 1\\text{ cm}^3\\).</li>
                        </ul>
                    </li>
                    <li><strong>Volume du cylindre</strong> : Attention de bien exprimer le rayon et la hauteur dans la même unité avant de calculer. Si on exprime en décimètres (dm), le volume calculé sera directement en litres.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>Question 1</strong> : Calculez le nombre de secondes dans une journée : \\(24 \\times 60 \\times 60\\). Comme il y a 1 goutte par seconde, le nombre de gouttes est égal au nombre de secondes.</li>
                    <li><strong>Question 2</strong> : Multipliez les gouttes journalières par 7. Convertissez ces gouttes en ml (diviser par 20), puis en litres (diviser par 1000).</li>
                    <li><strong>Question 3</strong> : Diamètre = 40 cm donc Rayon = 20 cm = 2 dm. Hauteur = 15 cm = 1,5 dm. Calculez \\(\\pi \\times 2^2 \\times 1,5\\).</li>
                    <li><strong>Question 4</strong> : Comparez le volume d'eau fuyant en une semaine au volume maximal de la vasque. Si le volume de fuite est supérieur, l'eau débordera !</li>
                </ul>`,
                inputs: [
                    { id: "w1-ex8-2", label: "Volume de fuite en une semaine (L)", placeholder: "Ex: 30.24" },
                    { id: "w1-ex8-4", label: "Est-ce que ça va déborder ? (Oui/Non)", placeholder: "Ex: Oui" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>1) Nombre de gouttes en une journée :</strong><br>
                        Il y a 60 secondes par minute, 60 minutes par heure et 24 heures par jour :<br>
                        \\[ 1\\text{ jour} = 24 \\times 3600 = 86\\,400\\text{ secondes} \\]
                        Avec un rythme d'une goutte par seconde, il tombe bien <strong>86 400 gouttes</strong> en une journée.
                    </div>
                    <div class="correction-step">
                        <strong>2) Volume fuyant en une semaine :</strong><br>
                        Nombre de gouttes en 7 jours :<br>
                        \\[ \\text{Gouttes} = 86\\,400 \\times 7 = 604\\,800\\text{ gouttes} \\]
                        Volume en millilitres (20 gouttes = 1 ml) :<br>
                        \\[ V_{ml} = \\frac{604\\,800}{20} = 30\\,240\\text{ ml} \\]
                        Volume en litres (1 l = 1000 ml) :<br>
                        \\[ V_{litres} = \\frac{30\\,240}{1000} = 30,24\\text{ L} \\]
                    </div>
                    <div class="correction-step">
                        <strong>3) Volume de la vasque :</strong><br>
                        La vasque est un cylindre de diamètre \\(40\\) cm (soit un rayon \\(R = 20\\) cm) et de hauteur \\(h = 15\\) cm.<br>
                        Exprimons en décimètres (dm) pour obtenir le volume directement en litres :<br>
                        \\(R = 2\\) dm et \\(h = 1,5\\) dm.<br>
                        \\[ V_{vasque} = \\pi \\times R^2 \\times h = \\pi \\times 2^2 \\times 1,5 = 6\\pi\\text{ dm}^3 \\]
                        \\[ V_{vasque} \\approx 6 \\times 3,14159 \\approx 18,8495\\text{ dm}^3 \\approx 18,85\\text{ L} \\]
                    </div>
                    <div class="correction-step">
                        <strong>4) Risque de débordement :</strong><br>
                        En une semaine, le volume d'eau fuyant est de \\(30,24\\) L. La capacité maximale de la vasque est de \\(18,85\\) L.<br>
                        Comme \\(30,24\\text{ L} > 18,85\\text{ L}\\), l'eau va <strong>déborder</strong> de la vasque.
                    </div>
                </div>`
            }
        ]
    },
    "w2": {
        title: "Semaine 2 : Calculs, QCM, Équations & Géométrie du Cercle",
        exercises: [
            {
                id: "w2-ex1",
                num: "N°1",
                title: "Calculs numériques fractionnaires complexes",
                image: "image11.png",
                statement: `<p>Calculer de la façon la plus simple (calcul simple - sans calculatrice) :</p>
                <div class="math-formula">
                    \\[ A = \\frac{-9}{4} + \\frac{-0,1}{-0,4} \\quad;\\quad B = \\frac{-14}{14} + \\frac{25}{50} - \\frac{-24}{-16} \\]
                    \\[ C = \\frac{7}{6} \\times \\frac{-36}{-25} \\times \\frac{-20}{56} \\quad;\\quad D = \\frac{-24}{21} \\div \\frac{48}{-49} \\]
                    \\[ E = \\left(\\frac{7}{3} - \\frac{16}{12}\\right) - \\left(\\frac{15}{45} - \\frac{-35}{21}\\right) \\]
                    \\[ F = \\frac{7}{12} + \\frac{-15}{-25} - \\frac{11}{12} \\times \\frac{-9}{33} \\]
                    \\[ G = \\frac{5}{16} - \\frac{-1,4}{-5,6} - \\frac{16}{26} \\times \\frac{-13}{64} \\quad;\\quad H = \\frac{13 \\times (-6) - (-7) \\times (-6)}{15 \\times (-12) \\times (-2)} \\]
                </div>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Simplification de fractions</strong> : Simplifiez toujours les fractions individuelles au maximum avant de commencer les additions ou les multiplications. Cela réduit considérablement la taille des nombres manipulés.</li>
                    <li><strong>Signes des nombres relatifs</strong> : Deux signes moins s'annulent : \\(\\frac{-a}{-b} = \\frac{a}{b}\\). Un seul signe moins rend la fraction négative : \\(\\frac{-a}{b} = -\\frac{a}{b}\\).</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>Pour A</strong> : \\(\\frac{-0,1}{-0,4} = \\frac{1}{4}\\). Le calcul devient \\(\\frac{-9}{4} + \\frac{1}{4}\\).</li>
                    <li><strong>Pour B</strong> : Simplifiez : \\(\\frac{-14}{14} = -1\\), \\(\\frac{25}{50} = \\frac{1}{2}\\) et \\(\\frac{-24}{-16} = \\frac{3}{2}\\).</li>
                    <li><strong>Pour C</strong> : Multipliez les signes d'abord (il y a trois signes moins en tout, donc le résultat est négatif). Simplifiez en décomposant les nombres en facteurs communs.</li>
                    <li><strong>Pour E</strong> : Simplifiez les fractions dans les parenthèses : \\(\\frac{16}{12} = \\frac{4}{3}\\), \\(\\frac{15}{45} = \\frac{1}{3}\\) et \\(\\frac{-35}{21} = -\\frac{5}{3}\\).</li>
                </ul>`,
                inputs: [
                    { id: "w2-ex1-A", label: "A =", placeholder: "Ex: -2" },
                    { id: "w2-ex1-B", label: "B =", placeholder: "Ex: -2" },
                    { id: "w2-ex1-C", label: "C =", placeholder: "Ex: -3/5" },
                    { id: "w2-ex1-D", label: "D =", placeholder: "Ex: 7/6" },
                    { id: "w2-ex1-E", label: "E =", placeholder: "Ex: -1" },
                    { id: "w2-ex1-F", label: "F =", placeholder: "Ex: 67/45" },
                    { id: "w2-ex1-G", label: "G =", placeholder: "Ex: 3/16" },
                    { id: "w2-ex1-H", label: "H =", placeholder: "Ex: -1/3" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>Calcul de A :</strong> \\(A = -\\frac{9}{4} + \\frac{1}{4} = -\\frac{8}{4} = -2\\).
                    </div>
                    <div class="correction-step">
                        <strong>Calcul de B :</strong> \\(B = -1 + \\frac{1}{2} - \\frac{3}{2} = -1 - \\frac{2}{2} = -1 - 1 = -2\\).
                    </div>
                    <div class="correction-step">
                        <strong>Calcul de C :</strong> Les signes moins sont au nombre de trois : le produit est négatif.<br>
                        \\[ C = -\\frac{7 \\times 36 \\times 20}{6 \\times 25 \\times 56} = -\\frac{7 \\times (6 \\times 6) \\times (5 \\times 4)}{6 \\times (5 \\times 5) \\times (7 \\times 8)} = -\\frac{6 \\times 4}{5 \\times 8} = -\\frac{24}{40} = -\\frac{3}{5} \\]
                    </div>
                    <div class="correction-step">
                        <strong>Calcul de D :</strong> \\(D = -\\frac{24}{21} \\times \\left(-\\frac{49}{48}\\right) = +\\frac{24 \\times 49}{21 \\times 48} = \\frac{1 \\times 7}{3 \\times 2} = \\frac{7}{6}\\) (après simplifications par 24 et par 7).
                    </div>
                    <div class="correction-step">
                        <strong>Calcul de E :</strong><br>
                        Parenthèse 1 : \\(\\frac{7}{3} - \\frac{4}{3} = \\frac{3}{3} = 1\\).<br>
                        Parenthèse 2 : \\(\\frac{1}{3} - (-\\frac{5}{3}) = \\frac{1}{3} + \\frac{5}{3} = \\frac{6}{3} = 2\\).<br>
                        Donc \\(E = 1 - 2 = -1\\).
                    </div>
                    <div class="correction-step">
                        <strong>Calcul de F :</strong><br>
                        Simplification : \\(\\frac{-15}{-25} = \\frac{3}{5}\\) et le produit \\(\\frac{11}{12} \\times \\frac{-9}{33} = \\frac{11}{12} \\times \\frac{-3}{11} = -\\frac{3}{12} = -\\frac{1}{4}\\).<br>
                        \\[ F = \\frac{7}{12} + \\frac{3}{5} - \\left(-\\frac{1}{4}\\right) = \\frac{7}{12} + \\frac{3}{5} + \\frac{3}{12} = \\frac{10}{12} + \\frac{3}{5} = \\frac{5}{6} + \\frac{3}{5} = \\frac{25 + 18}{30} = \\frac{43}{30} \\]
                      </div>
                    <div class="correction-step">
                        <strong>Calcul de G :</strong><br>
                        \\(G = \\frac{5}{16} - \\frac{1}{4} - \\frac{16}{26} \\times \\frac{-13}{64} = \\frac{5}{16} - \\frac{4}{16} - \\left(\\frac{16 \\times (-13)}{26 \\times 64}\\right) = \\frac{1}{16} - \\left(\\frac{16 \\times (-1)}{2 \\times 64}\\right) = \\frac{1}{16} - \\left(-\\frac{16}{128}\\right) = \\frac{1}{16} + \\frac{1}{8} = \\frac{1}{16} + \\frac{2}{16} = \\frac{3}{16}\\).
                    </div>
                    <div class="correction-step">
                        <strong>Calcul de H :</strong><br>
                        \\[ H = \\frac{-78 - 42}{15 \\times 24} = \\frac{-120}{360} = -\\frac{1}{3} \\]
                    </div>
                </div>`
            },
            {
                id: "w2-ex2",
                num: "N°2",
                title: "QCM d'auto-évaluation (Puissances & Notation scientifique)",
                image: "image10.png",
                statement: `<p>Dans le tableau suivant, une seule des réponses proposées à chaque question est correcte. Écrire le numéro de chaque question et donner, en justifiant, la réponse qui lui correspond.</p>
                <table class="math-table">
                    <thead>
                        <tr>
                            <th>Énoncé</th>
                            <th>Réponse A</th>
                            <th>Réponse B</th>
                            <th>Réponse C</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>1) </strong> \\(6^8 - 6^6\\)</td>
                            <td>\\(6^2\\)</td>
                            <td>\\(12\\)</td>
                            <td>\\(6^6 \\times 5 \\times 7\\)</td>
                        </tr>
                        <tr>
                            <td><strong>2) </strong> \\(\\frac{(10^2)^3 \\times 10^{-2}}{10^{-4}}\\)</td>
                            <td>\\(10^8\\)</td>
                            <td>\\(1\\)</td>
                            <td>\\(10^7\\)</td>
                        </tr>
                        <tr>
                            <td><strong>3) </strong> L'écriture scientifique de \\(0,000923\\)</td>
                            <td>\\(823 \\times 10^{-6}\\)</td>
                            <td>\\(9,23 \\times 10^{-4}\\)</td>
                            <td>\\(9,23 \\times 10^4\\)</td>
                        </tr>
                        <tr>
                            <td><strong>4) </strong> \\(\\frac{5x-7}{x-5}\\)</td>
                            <td>est nulle quand \\(x=5\\)</td>
                            <td>est nulle quand \\(x=\\frac{7}{5}\\)</td>
                            <td>existe quand \\(x \\neq \\frac{7}{5}\\)</td>
                        </tr>
                    </tbody>
                </table>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Factorisation avec puissances</strong> : \\(a^n - a^m = a^m (a^{n-m} - 1)\\).</li>
                    <li><strong>Existence d'une fraction</strong> : Une fraction \\(\\frac{A}{B}\\) existe ssi son dénominateur \\(B \\neq 0\\). Elle est nulle ssi son numérateur \\(A = 0\\) ET \\(B \\neq 0\\).</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>Pour la ligne 1</strong> : Factorisez par \\(6^6\\). Vous obtenez \\(6^6 \\times (6^2 - 1)\\). Calculez \\(6^2 - 1 = 35\\). Comment s'écrit 35 sous forme de produit de facteurs premiers ?</li>
                    <li><strong>Pour la ligne 2</strong> : Utilisez la règle des puissances : \\((10^2)^3 = 10^{2 \\times 3} = 10^6\\). Simplifiez ensuite le numérateur puis divisez.</li>
                    <li><strong>Pour la ligne 3</strong> : Décalez la virgule vers la droite de 4 crans pour avoir un seul chiffre non nul avant la virgule (9,23). L'exposant sera donc négatif (-4).</li>
                    <li><strong>Pour la ligne 4</strong> : La fraction s'annule quand son numérateur est nul, c'est-à-dire quand \\(5x - 7 = 0\\).</li>
                </ul>`,
                inputs: [
                    { id: "w2-ex2-1", label: "Réponse Question 1 (A, B ou C)", placeholder: "Ex: C" },
                    { id: "w2-ex2-2", label: "Réponse Question 2 (A, B ou C)", placeholder: "Ex: A" },
                    { id: "w2-ex2-3", label: "Réponse Question 3 (A, B ou C)", placeholder: "Ex: B" },
                    { id: "w2-ex2-4", label: "Réponse Question 4 (A, B ou C)", placeholder: "Ex: B" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>1) Réponse C :</strong><br>
                        \\[ 6^8 - 6^6 = 6^6(6^2 - 1) = 6^6(36 - 1) = 6^6 \\times 35 \\]
                        Comme \\(35 = 5 \\times 7\\), on a :<br>
                        \\[ 6^8 - 6^6 = 6^6 \\times 5 \\times 7 \\]
                    </div>
                    <div class="correction-step">
                        <strong>2) Réponse A :</strong><br>
                        \\[ \\frac{(10^2)^3 \\times 10^{-2}}{10^{-4}} = \\frac{10^6 \\times 10^{-2}}{10^{-4}} = \\frac{10^4}{10^{-4}} = 10^{4 - (-4)} = 10^8 \\]
                    </div>
                    <div class="correction-step">
                        <strong>3) Réponse B :</strong><br>
                        Pour écrire \\(0,000923\\) en notation scientifique, on décale la virgule de 4 positions vers la droite :<br>
                        \\[ 0,000923 = 9,23 \\times 10^{-4} \\]
                    </div>
                    <div class="correction-step">
                        <strong>4) Réponse B :</strong><br>
                        La fraction existe si et seulement si \\(x - 5 \\neq 0 \\iff x \\neq 5\\) (ce qui contredit la réponse C).<br>
                        La fraction est nulle si son numérateur est nul, soit :<br>
                        \\[ 5x - 7 = 0 \\iff 5x = 7 \\iff x = \\frac{7}{5} \\]
                    </div>
                </div>`
            },
            {
                id: "w2-ex3",
                num: "N°3",
                title: "Factorisation d'expressions (Niveau 2)",
                image: "image12.png",
                statement: `<p>Factoriser les expressions suivantes :</p>
                <div class="math-formula">
                    \\[ B = (2x - 5)(x + 3) - (2x - 5)(2x + 1) + (2x - 5) \\]
                    \\[ D = (5x - 3)(2x + 3) - 2(3 - 5x) \\]
                    \\[ F = (-4x - 1)^2 - (x + 6)(4 + 16x) \\]
                </div>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li>Le terme seul \\((2x - 5)\\) doit être pensé comme \\((2x - 5) \\times 1\\) pour ne pas l'oublier lors de la factorisation.</li>
                    <li><strong>Changement de signe</strong> : \\(3 - 5x = -(5x - 3)\\), donc \\(-2(3 - 5x) = +2(5x - 3)\\).</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>Pour B</strong> : Le facteur commun est \\((2x - 5)\\). Écrivez bien \\((2x - 5) = (2x - 5) \\times 1\\).</li>
                    <li><strong>Pour D</strong> : Modifiez la deuxième partie de l'expression : \\(-2(3 - 5x) = +2(5x - 3)\\). Le facteur commun \\((5x - 3)\\) apparaît alors.</li>
                    <li><strong>Pour F</strong> : Remarquez que \\(4 + 16x = 4(1 + 4x) = 4(4x + 1)\\). Remarquez également que \\((-4x - 1)^2 = (4x + 1)^2\\). Le facteur commun est \\((4x + 1)\\).</li>
                </ul>`,
                inputs: [],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>Factorisation de B :</strong>
                        \\[ B = (2x - 5)[(x + 3) - (2x + 1) + 1] \\]
                        \\[ B = (2x - 5)(x + 3 - 2x - 1 + 1) \\]
                        \\[ B = (2x - 5)(-x + 3) \\]
                    </div>
                    <div class="correction-step">
                        <strong>Factorisation de D :</strong>
                        \\[ D = (5x - 3)(2x + 3) + 2(5x - 3) \\]
                        \\[ D = (5x - 3)[(2x + 3) + 2] \\]
                        \\[ D = (5x - 3)(2x + 5) \\]
                    </div>
                    <div class="correction-step">
                        <strong>Factorisation de F :</strong>
                        \\[ F = (4x + 1)^2 - 4(x + 6)(4x + 1) \\]
                        \\[ F = (4x + 1)[(4x + 1) - 4(x + 6)] \\]
                        \\[ F = (4x + 1)(4x + 1 - 4x - 24) \\]
                        \\[ F = (4x + 1)(-23) = -23(4x + 1) \\]
                    </div>
                </div>`
            },
            {
                id: "w2-ex4",
                num: "N°4",
                title: "Résolution d'équations (Linéaires & Carrées)",
                image: "image13.png",
                statement: `<p>Résoudre les équations suivantes :</p>
                <ol type="a">
                    <li>
                        <div class="math-formula">
                            \\[ \\frac{8x + 1}{21} - \\frac{2x}{7} = \\frac{x - 1}{3} - \\frac{3x - 2}{7} \\]
                        </div>
                    </li>
                    <li>\\(x^2 + 4 = 40\\)</li>
                    <li>\\(x^2 = \\frac{16}{49}\\)</li>
                </ol>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Équations rationnelles</strong> : Pour se débarrasser des fractions, réduisez tous les termes de l'équation au même dénominateur (ici 21) et multipliez les deux membres par ce dénominateur.</li>
                    <li><strong>Équations de la forme \\(x^2 = a\\)</strong> :
                        <ul>
                            <li>Si \\(a > 0\\), il y a deux solutions : \\(x = \\sqrt{a}\\) et \\(x = -\\sqrt{a}\\).</li>
                            <li>Si \\(a = 0\\), une seule solution : \\(x = 0\\).</li>
                            <li>Si \\(a < 0\\), aucune solution réelle.</li>
                        </ul>
                    </li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>Pour a</strong> : Mettez toutes les fractions sous le dénominateur 21. Par exemple : \\(\\frac{2x}{7} = \\frac{6x}{21}\\), \\(\\frac{x-1}{3} = \\frac{7(x-1)}{21}\\) et \\(\\frac{3x-2}{7} = \\frac{3(3x-2)}{21}\\). Supprimez ensuite les dénominateurs.</li>
                    <li><strong>Pour b</strong> : Isolez \\(x^2\\) : \\(x^2 = 40 - 4 = 36\\). Quelles sont les deux solutions ?</li>
                    <li><strong>Pour c</strong> : Équation sous la forme \\(x^2 = a\\). Les solutions sont \\(\\sqrt{16/49}\\) et \\(-\\sqrt{16/49}\\).</li>
                </ul>`,
                inputs: [
                    { id: "w2-ex4-a", label: "Solution de a)", placeholder: "Ex: -1/2" },
                    { id: "w2-ex4-b", label: "Solutions de b)", placeholder: "Ex: 6 et -6" },
                    { id: "w2-ex4-c", label: "Solutions de c)", placeholder: "Ex: 4/7 et -4/7" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>Résolution de a) :</strong><br>
                        Multiplions toute l'équation par le dénominateur commun \\(21\\) :
                        \\[ (8x + 1) - 3 \\times (2x) = 7 \\times (x - 1) - 3 \\times (3x - 2) \\]
                        \\[ 8x + 1 - 6x = 7x - 7 - 9x + 6  \\]
                        \\[ 2x + 1 = -2x - 1 \\]
                        \\[ 4x = -2 \\iff x = -\\frac{2}{4} = -\\frac{1}{2} \\]
                        La solution est \\(-\\frac{1}{2}\\) (ou \\(-0,5\\)).
                    </div>
                    <div class="correction-step">
                        <strong>Résolution de b) :</strong>
                        \\[ x^2 + 4 = 40 \\iff x^2 = 36 \\]
                        L'équation possède deux solutions :
                        \\[ x = \\sqrt{36} = 6 \\quad \\text{ou} \\quad x = -\\sqrt{36} = -6 \\]
                    </div>
                    <div class="correction-step">
                        <strong>Résolution de c) :</strong>
                        \\[ x^2 = \\frac{16}{49} \\]
                        L'équation possède deux solutions :
                        \\[ x = \\sqrt{\\frac{16}{49}} = \\frac{4}{7} \\quad \\text{ou} \\quad x = -\\frac{4}{7} \\]
                    </div>
                </div>`
            },
            {
                id: "w2-ex5",
                num: "N°5",
                title: "Mise en équation d'un problème concret (Âges)",
                image: "image13.png", // shared image
                statement: `<p>L'âge d'un père est le triple de celui de son fils.</p>
                <p>Quel est l'âge actuel du père sachant que dans \\(15\\) ans, il sera le double de celui de son fils ?</p>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Méthode de résolution d'un problème par mise en équation</strong> :
                        <ol>
                            <li>Choix de l'inconnue (généralement ce que l'on cherche, ou la plus petite grandeur).</li>
                            <li>Mise en équation en traduisant les phrases de l'énoncé.</li>
                            <li>Résolution de l'équation.</li>
                            <li>Vérification et conclusion.</li>
                        </ol>
                    </li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Soit \\(x\\) l'âge actuel du fils.</li>
                    <li>Puisque le père a le triple de l'âge de son fils, l'âge actuel du père est \\(3x\\).</li>
                    <li>Dans 15 ans, l'âge du fils sera \\(x + 15\\) et celui du père sera \\(3x + 15\\).</li>
                    <li>Écrivez l'équation traduisant « l'âge du père sera le double de celui du fils » : \\(3x + 15 = 2(x + 15)\\). Résolvez pour \\(x\\), puis déduisez-en l'âge du père.</li>
                </ul>`,
                inputs: [
                    { id: "w2-ex5", label: "Âge actuel du père", placeholder: "Ex: 45" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>Étape 1 : Choix de l'inconnue :</strong><br>
                        Soit \\(x\\) l'âge actuel du fils (en années).
                    </div>
                    <div class="correction-step">
                        <strong>Étape 2 : Traduction en équations :</strong><br>
                        - Âge actuel du père : \\(3x\\).<br>
                        - Dans 15 ans : l'âge du fils sera \\(x + 15\\) et celui du père \\(3x + 15\\).<br>
                        L'énoncé dit qu'alors l'âge du père sera le double de celui du fils :<br>
                        \\[ 3x + 15 = 2(x + 15) \\]
                    </div>
                    <div class="correction-step">
                        <strong>Étape 3 : Résolution :</strong><br>
                        \\[ 3x + 15 = 2x + 30 \\]
                        \\[ 3x - 2x = 30 - 15 \\]
                        \\[ x = 15 \\]
                        Le fils a actuellement 15 ans.
                    </div>
                    <div class="correction-step">
                        <strong>Étape 4 : Conclusion :</strong><br>
                        L'âge actuel du père est : \\(3 \\times 15 = 45\\) ans.<br>
                        <em>Vérification : Dans 15 ans, le fils aura 30 ans et le père aura 60 ans. 60 est bien le double de 30.</em>
                    </div>
                </div>`
            },
            {
                id: "w2-ex6",
                num: "N°6",
                title: "Géométrie plane (Cercle, triangle rectangle & triangles semblables)",
                image: "image13.png", // shared image
                statement: `<p>On donne un cercle \\((C)\\) de diamètre \\([AB]\\) tel que \\(AB = 6\\) cm. \\((d)\\) est une droite perpendiculaire à \\((AB)\\) en \\(B\\).</p>
                <ol>
                    <li>Faire une figure en vraies grandeurs.</li>
                    <li>Marquer sur \\((d)\\) un point \\(E\\) tel que \\(BE = AB\\). Tracer le segment \\([AE]\\) qui coupe le cercle en \\(F\\).</li>
                    <li>Démontrer que \\(F\\) est le milieu de \\([AE]\\).</li>
                    <li>Calculer la longueur, arrondie au centième près, du segment \\([AE]\\).</li>
                    <li>Calculer le périmètre, arrondi au centième près, du triangle \\(AFB\\).</li>
                    <li>Démontrer que les triangles \\(AFB\\) et \\(ABE\\) sont semblables, puis écrire leur rapport de similitude.</li>
                </ol>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Triangle rectangle inscrit</strong> : Tout point \\(F\\) d'un cercle de diamètre \\([AB]\\) forme un triangle rectangle \\(AFB\\) d'hypoténuse \\([AB]\\).</li>
                    <li><strong>Théorème de Pythagore</strong> : Dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés.</li>
                    <li><strong>Triangles semblables</strong> : Triangles ayant leurs angles deux à deux égaux. Leurs côtés homologues sont alors proportionnels.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>Pour le 3</strong> : Remarquez que \\(ABE\\) est un triangle rectangle isocèle en \\(B\\) car \\(AB = BE = 6\\) cm. Comme \\(F\\) est sur le cercle de diamètre \\([AB]\\), le triangle \\(AFB\\) est rectangle en \\(F\\). La droite \\((BF)\\) est donc la hauteur du triangle isocèle \\(ABE\\) issue du sommet principal \\(B\\). Dans un triangle isocèle, la hauteur issue du sommet principal est aussi la médiane.</li>
                    <li><strong>Pour le 4</strong> : Utilisez le théorème de Pythagore dans le triangle \\(ABE\\) rectangle en \\(B\\).</li>
                    <li><strong>Pour le 5</strong> : Puisque \\(F\\) est le milieu de \\([AE]\\), \\(AF = AE / 2\\). De plus, dans le triangle rectangle \\(AFB\\), la médiane \\([BF]\\) vaut la moitié de l'hypoténuse \\(AE\\) (ou utilisez la trigonométrie / Pythagore).</li>
                    <li><strong>Pour le 6</strong> : Les deux triangles ont des angles identiques (un angle droit et l'angle en A en commun).</li>
                </ul>`,
                inputs: [
                    { id: "w2-ex6-4", label: "Longueur de AE (cm)", placeholder: "Ex: 8.49" },
                    { id: "w2-ex6-5", label: "Périmètre de AFB (cm)", placeholder: "Ex: 14.49" },
                    { id: "w2-ex6-6", label: "Rapport de similitude (AFB vers ABE)", placeholder: "Ex: 0.71" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>3) Preuve que F est le milieu de [AE] :</strong><br>
                        La droite \\((d)\\) est perpendiculaire au diamètre \\([AB]\\) en \\(B\\). Ainsi, le triangle \\(ABE\\) est rectangle en \\(B\\). Comme \\(BE = AB\\), \\(ABE\\) est un triangle <strong>rectangle et isocèle en B</strong>.<br>
                        Le point \\(F\\) appartient au cercle \\((C)\\) de diamètre \\([AB]\\). Le triangle \\(AFB\\) est donc rectangle en \\(F\\). La droite \\((BF)\\) est ainsi la hauteur issue de \\(B\\) dans le triangle \\(ABE\\).<br>
                        Puisque le triangle \\(ABE\\) est isocèle en \\(B\\), sa hauteur \\([BF]\\) issue du sommet principal \\(B\\) est également la médiane issue de \\(B\\). Par conséquent, \\(F\\) est le <strong>milieu</strong> du segment \\([AE]\\).
                    </div>
                    <div class="correction-step">
                        <strong>4) Calcul de AE :</strong><br>
                        Par le théorème de Pythagore dans le triangle \\(ABE\\) rectangle en \\(B\\) :<br>
                        \\[ AE^2 = AB^2 + BE^2 = 6^2 + 6^2 = 36 + 36 = 72 \\]
                        \\[ AE = \\sqrt{72} = 6\\sqrt{2} \\approx 8,49\\text{ cm} \\]
                    </div>
                    <div class="correction-step">
                        <strong>5) Calcul du périmètre de AFB :</strong><br>
                        - \\(F\\) est le milieu de \\([AE]\\), donc \\(AF = \\frac{AE}{2} = 3\\sqrt{2}\\) cm.<br>
                        - Dans le triangle rectangle \\(AFB\\) en \\(F\\), la médiane issue de l'angle droit \\([BF]\\) vaut la moitié de l'hypoténuse \\([AE]\\), donc \\(BF = 3\\sqrt{2}\\) cm.<br>
                        - \\(AB = 6\\) cm.<br>
                        \\[ Périmètre = AF + BF + AB = 3\\sqrt{2} + 3\\sqrt{2} + 6 = 6\\sqrt{2} + 6 \\approx 14,49\\text{ cm} \\]
                    </div>
                    <div class="correction-step">
                        <strong>6) Triangles semblables et rapport :</strong><br>
                        Les triangles \\(AFB\\) (rectangle en \\(F\\)) et \\(ABE\\) (rectangle en \\(B\\)) ont :<br>
                        - Un angle droit chacun : \\(\\widehat{AFB} = \\widehat{ABE} = 90^\\circ\\).<br>
                        - L'angle \\(\\widehat{FAB}\\) (ou \\(\\widehat{BAE}\\)) en commun.<br>
                        Ayant deux angles égaux, ils ont nécessairement leur troisième angle égal. Ils sont donc <strong>semblables</strong>.<br>
                        Rapport de similitude (côtés de AFB divisés par côtés correspondants de ABE) :<br>
                        \\[ k = \\frac{AB}{AE} = \\frac{6}{6\\sqrt{2}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2} \\approx 0,71 \\]
                    </div>
                </div>`
            },
            {
                id: "w2-ex7",
                num: "N°7",
                title: "Géométrie dans l'espace (Aire totale & Pourcentages - Boîtes de vin)",
                image: "image14.png",
                statement: `<p>Une cartonnerie fabrique des boîtes pour des bouteilles de vin. Chaque boîte a la forme d'un parallélépipède rectangle (longueur : \\(50\\) cm, largeur : \\(15\\) cm, hauteur : \\(30\\) cm). L'unité de longueur est le cm ; l'unité d'aire est le cm².</p>
                <ol>
                    <li>
                        <ol type="a">
                            <li>Préciser la nature des faces de ces boîtes et leurs dimensions.</li>
                            <li>Montrer que l'aire totale des faces de la boîte est \\(5\\,400\\) cm².</li>
                        </ol>
                    </li>
                    <li>Sachant que pour les découpes il faut prévoir \\(20\\) % de plus de carton, combien de m² de carton seront nécessaires pour fabriquer \\(100\\) boîtes ?</li>
                </ol>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Aire d'un parallélépipède rectangle</strong> : Somme des aires de ses 6 faces rectangulaires (2 de dimensions \\(L \\times l\\), 2 de \\(L \\times h\\), 2 de \\(l \\times h\\)).</li>
                    <li><strong>Conversion d'aires</strong> : \\(1\\text{ m}^2 = 10\\,000\\text{ cm}^2\\).</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>Question 1.b</strong> : Calculez l'aire : \\(2 \\times (50 \\times 15 + 50 \\times 30 + 15 \\times 30)\\).</li>
                    <li><strong>Question 2</strong> : Pour une boîte, il faut \\(5400 \\times 1,2 = 6480\\) cm² de carton. Multipliez par 100 pour obtenir l'aire de 100 boîtes en cm², puis convertissez en m² en divisant par 10 000.</li>
                </ul>`,
                inputs: [
                    { id: "w2-ex7-2", label: "Carton nécessaire pour 100 boîtes (m²)", placeholder: "Ex: 64.8" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>1.a) Nature des faces :</strong><br>
                        Les faces sont toutes des <strong>rectangles</strong>. Leurs dimensions sont :<br>
                        - 2 faces de \\(50\\text{ cm} \\times 15\\text{ cm}\\) (base et couvercle)<br>
                        - 2 faces de \\(50\\text{ cm} \\times 30\\text{ cm}\\) (côtés principaux)<br>
                        - 2 faces de \\(15\\text{ cm} \\times 30\\text{ cm}\\) (côtés latéraux)<br>
                        <strong>1.b) Aire totale :</strong><br>
                        \\[ A = 2 \\times (50 \\times 15 + 50 \\times 30 + 15 \\times 30) = 2 \\times (750 + 1500 + 450) = 2 \\times 2700 = 5400\\text{ cm}^2 \\]
                    </div>
                    <div class="correction-step">
                        <strong>Question 2 :</strong><br>
                        Carton pour 1 boîte (avec 20% de surplus) :<br>
                        \\[ A_{1} = 5400 \\times 1,2 = 6480\\text{ cm}^2 \\]
                        Pour 100 boîtes :<br>
                        \\[ A_{100} = 6480 \\times 100 = 648\\,000\\text{ cm}^2 \\]
                        Conversion en m² (1 m² = 10 000 cm²) :<br>
                        \\[ A_{100\\text{ m}^2} = \\frac{648\\,000}{10\\,000} = 64,8\\text{ m}^2 \\]
                    </div>
                </div>`
            },
            {
                id: "w2-ex8",
                num: "N°8",
                title: "Algorithmique (Scratch - Triangles équilatéraux imbriqués)",
                image: "image16.png",
                statement: `<p>On donne le programme Scratch suivant qui permet de tracer plusieurs triangles équilatéraux de tailles différentes. Ce programme comporte une variable nommée « côté ». Les longueurs sont données en pixels.</p>
                <div class="scratch-container" style="display:flex; gap:20px;">
                    <div>
                        <strong>Script Principal :</strong><br>
                        <div class="scratch-block scratch-event">quand <span class="scratch-input">drapeau vert</span> est cliqué</div><br>
                        <div class="scratch-block scratch-pen">effacer tout</div><br>
                        <div class="scratch-block scratch-motion">aller à x: <span class="scratch-input">-200</span> y: <span class="scratch-input">-100</span></div><br>
                        <div class="scratch-block scratch-motion">s'orienter à <span class="scratch-input">90</span></div><br>
                        <div class="scratch-block scratch-data">mettre <span class="scratch-input">côté</span> à <span class="scratch-input">100</span></div><br>
                        <div class="scratch-block scratch-control">répéter <span class="scratch-input">5</span> fois</div>
                        <div class="scratch-loop-body">
                            <div class="scratch-block scratch-control">triangle</div><br>
                            <div class="scratch-block scratch-motion">avancer de <span class="scratch-input oval">côté</span></div><br>
                            <div class="scratch-block scratch-data">ajouter à <span class="scratch-input">côté</span> <span class="scratch-input">-20</span></div>
                        </div>
                    </div>
                    <div>
                        <strong>Bloc « triangle » :</strong><br>
                        <div class="scratch-block scratch-control">définir <span class="scratch-input">triangle</span></div><br>
                        <div class="scratch-block scratch-pen">stylo en position d'écriture</div><br>
                        <div class="scratch-block scratch-control">répéter <span class="scratch-input">3</span> fois</div>
                        <div class="scratch-loop-body">
                            <div class="scratch-block scratch-motion">avancer de <span class="scratch-input oval">côté</span></div><br>
                            <div class="scratch-block scratch-motion">tourner gauche de <span class="scratch-input">120</span> degrés</div>
                        </div>
                        <div class="scratch-block scratch-pen">relever le stylo</div>
                    </div>
                </div>
                <ol>
                    <li>Quelles sont les coordonnées du point de départ du tracé ?</li>
                    <li>Combien de triangles sont dessinés par le script ?</li>
                    <li>
                        <ol type="a">
                            <li>Quelle est la longueur (en pixels) du côté du deuxième triangle tracé ?</li>
                            <li>Tracer à main levée l'allure de la figure obtenue quand on exécute ce script.</li>
                        </ol>
                    </li>
                    <li>On souhaite modifier le script pour obtenir une figure en forme de spirale triangulaire (voir image 16). Indiquer le numéro d'une instruction du script après laquelle on peut placer l'instruction <strong>tourner gauche de 60 degrés</strong> pour obtenir cette nouvelle figure.</li>
                </ol>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Somme des angles extérieurs</strong> : Pour tracer un polygone régulier fermé à \\(n\\) côtés, l'angle de rotation à effectuer est \\(\\frac{360^\\circ}{n}\\). Pour un triangle équilatéral (\\(n=3\\)), l'angle est de \\(120^\\circ\\).</li>
                    <li><strong>Variables dans les boucles</strong> : À chaque tour de la boucle principale (qui tourne 5 fois), la longueur « côté » diminue de 20.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>Question 1</strong> : Lisez simplement l'instruction de mouvement « aller à x: ... y: ... ».</li>
                    <li><strong>Question 2</strong> : Comptez combien de fois la boucle principale appelle le bloc « triangle ».</li>
                    <li><strong>Question 3.a</strong> : Le premier triangle a pour côté 100 pixels. À la fin de la première boucle, on retire 20 à la variable « côté ». Quel est le côté du 2ème triangle ?</li>
                    <li><strong>Question 4</strong> : Dans la figure de droite (spirale), le lutin tourne d'un angle fixe après avoir tracé chaque triangle et s'être déplacé. Identifiez où se situe ce déplacement dans la boucle.</li>
                </ul>`,
                inputs: [
                    { id: "w2-ex8-1", label: "Coordonnées de départ (x, y)", placeholder: "Ex: -200, -100" },
                    { id: "w2-ex8-2", label: "Nombre de triangles", placeholder: "Ex: 5" },
                    { id: "w2-ex8-3", label: "Côté du 2ème triangle (px)", placeholder: "Ex: 80" },
                    { id: "w2-ex8-4", label: "Numéro de la ligne d'insertion", placeholder: "Ex: 8" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>1) Coordonnées de départ :</strong><br>
                        Le tracé commence aux coordonnées \\(x = -200\\) et \\(y = -100\\).
                    </div>
                    <div class="correction-step">
                        <strong>2) Nombre de triangles :</strong><br>
                        La boucle principale est répétée 5 fois, et elle appelle le bloc « triangle » une fois par répétition. Il y aura donc <strong>5 triangles</strong> dessinés.
                    </div>
                    <div class="correction-step">
                        <strong>3) Longueur du côté du 2ème triangle :</strong><br>
                        - Triangle 1 : côté = 100 px.<br>
                        - On retire 20 px à « côté » : \\(100 - 20 = 80\\) px.<br>
                        Le deuxième triangle aura des côtés de <strong>80 pixels</strong>.
                    </div>
                    <div class="correction-step">
                        <strong>4) Modification pour obtenir la spirale :</strong><br>
                        Pour que les triangles ne soient pas simplement alignés horizontalement mais forment une spirale, il faut tourner de 60 degrés après avoir tracé un triangle et s'être déporté de sa longueur. Le déplacement est l'instruction de la <strong>ligne 8</strong> (« avancer de côté »). On peut placer l'instruction de rotation juste après, donc après l'instruction <strong>8</strong> (ou 9).
                    </div>
                </div>`
            }
        ]
    },
    "w3": {
        title: "Semaine 3 : Puissances, Identités, Équations & Pythagore",
        exercises: [
            {
                id: "w3-ex1",
                num: "N°1",
                title: "Calculs numériques, puissances & fractions existantes",
                image: "image17.png",
                statement: `<p><strong>A)</strong> Sachant que \\(a = -5,2\\) ; \\(b = 14\\) ; \\(c = -\\frac{9}{7}\\) et \\(d = \\frac{3}{5}\\) ; calculer les deux expressions suivantes :</p>
                <div class="math-formula">
                    \\[ a) \\quad bc - a \\quad\\text{et}\\quad b) \\quad \\frac{c}{3} + \\frac{1}{d} \\]
                </div>
                <p><strong>B)</strong> Écrire sous la forme d'une seule puissance :</p>
                <div class="math-formula">
                    \\[ 2^3 \\times 2^5 \\quad;\\quad (-3)^2 \\times 3^4 \\quad;\\quad 10^8 \\times 10^{-4} \\quad;\\quad \\frac{10^7}{10^3} \\quad;\\quad 10^3 \\times 10^4 \\times (10^2)^{-3} \\]
                </div>
                <p><strong>C)</strong> À quelle condition chacune des deux fractions suivantes existe-t-elle ?</p>
                <div class="math-formula">
                    \\[ A = \\frac{8x + 1}{2x^2 + 8} \\quad;\\quad B = \\frac{x - 3}{12 - 4x} \\]
                </div>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Substitution de valeurs</strong> : Remplacez chaque lettre par sa valeur entre parenthèses, en faisant attention aux doubles signes moins.</li>
                    <li><strong>Condition d'existence d'une fraction</strong> : Le dénominateur ne doit jamais être nul.</li>
                    <li>Un carré est toujours positif ou nul : \\(x^2 \\ge 0\\) pour tout nombre réel \\(x\\).</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>Pour A.a</strong> : Calculez d'abord \\(14 \\times (-\\frac{9}{7})\\). Simplifiez \\(\\frac{14}{7} = 2\\), le produit vaut \\(2 \\times (-9) = -18\\). N'oubliez pas que \\(- a = -(-5,2) = +5,2\\).</li>
                    <li><strong>Pour A.b</strong> : L'inverse de \\(d = \\frac{3}{5}\\) est \\(\\frac{1}{d} = \\frac{5}{3}\\).</li>
                    <li><strong>Pour C.A</strong> : Le dénominateur est \\(2x^2 + 8\\). Un carré étant toujours positif ou nul, \\(2x^2 \\ge 0\\), donc \\(2x^2 + 8 \\ge 8\\). Ce dénominateur peut-il s'annuler ?</li>
                    <li><strong>Pour C.B</strong> : Résolvez \\(12 - 4x = 0\\). Le nombre trouvé est la valeur interdite.</li>
                </ul>`,
                inputs: [
                    { id: "w3-ex1-Aa", label: "A.a) bc - a =", placeholder: "Ex: -12.8" },
                    { id: "w3-ex1-Ab", label: "A.b) c/3 + 1/d =", placeholder: "Ex: 26/21" },
                    { id: "w3-ex1-Cb", label: "Valeur interdite pour B (x ne doit pas être égal à)", placeholder: "Ex: 3" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>Calcul de A.a :</strong><br>
                        \\[ bc - a = 14 \\times \\left(-\\frac{9}{7}\\right) - (-5,2) \\]
                        \\[ bc - a = 2 \\times (-9) + 5,2 = -18 + 5,2 = -12,8 \\]
                    </div>
                    <div class="correction-step">
                        <strong>Calcul de A.b :</strong><br>
                        \\[ \\frac{c}{3} + \\frac{1}{d} = \\frac{-\\frac{9}{7}}{3} + \\frac{5}{3} = -\\frac{3}{7} + \\frac{5}{3} = -\\frac{9}{21} + \\frac{35}{21} = \\frac{26}{21} \\]
                    </div>
                    <div class="correction-step">
                        <strong>Fractions existantes (C) :</strong><br>
                        - Pour A : \\(2x^2 + 8 = 0 \\iff 2x^2 = -8 \\iff x^2 = -4\\). Un carré réel ne pouvant être négatif, cette équation n'a pas de solution. La fraction A existe donc <strong>pour tout nombre réel x</strong> (aucune valeur interdite).<br>
                        - Pour B : La fraction existe si \\(12 - 4x \\neq 0 \\iff 4x \\neq 12 \\iff x \\neq 3\\). La valeur interdite est <strong>3</strong>.
                    </div>
                </div>`
            },
            {
                id: "w3-ex2",
                num: "N°2",
                title: "Écriture scientifique de grands et petits nombres",
                image: "image17.png", // shared image
                statement: `<p>Écrire les nombres suivants en notation scientifique :</p>
                <ol type="a">
                    <li>\\(0,000168\\)</li>
                    <li>\\(569 \\times 10^2\\)</li>
                    <li>\\(68 \\times 10^{-5}\\)</li>
                    <li>\\(52,47 \\times 10^7\\)</li>
                </ol>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li>L'écriture scientifique est de la forme \\(a \\times 10^n\\) avec \\(1 \\le |a| < 10\\).</li>
                    <li>Pour ajuster la puissance de 10 lors d'un décalage de virgule :
                        <ul>
                            <li>Si on décale la virgule vers la gauche (on divise le nombre), on augmente l'exposant.</li>
                            <li>Si on décale vers la droite (on multiplie le nombre), on diminue l'exposant.</li>
                        </ul>
                    </li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>a</strong> : Décalez de 4 rangs vers la droite : \\(1,68 \\times 10^{-4}\\).</li>
                    <li><strong>b</strong> : Écrivez \\(569 = 5,69 \\times 10^2\\). Donc \\(5,69 \\times 10^2 \\times 10^2 = 5,69 \\times 10^4\\).</li>
                    <li><strong>c</strong> : Écrivez \\(68 = 6,8 \\times 10^1\\). Donc \\(6,8 \\times 10^1 \\times 10^{-5} = 6,8 \\times 10^{1-5}\\).</li>
                    <li><strong>d</strong> : Écrivez \\(52,47 = 5,247 \\times 10^1\\).</li>
                </ul>`,
                inputs: [
                    { id: "w3-ex2-a", label: "a) 0,000168", placeholder: "Ex: 1.68*10^-4" },
                    { id: "w3-ex2-b", label: "b) 569 * 10^2", placeholder: "Ex: 5.69*10^4" },
                    { id: "w3-ex2-c", label: "c) 68 * 10^-5", placeholder: "Ex: 6.8*10^-4" },
                    { id: "w3-ex2-d", label: "d) 52,47 * 10^7", placeholder: "Ex: 5.247*10^8" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        a) \\[ 0,000168 = 1,68 \\times 10^{-4} \\]
                    </div>
                    <div class="correction-step">
                        b) \\[ 569 \\times 10^2 = 5,69 \\times 10^2 \\times 10^2 = 5,69 \\times 10^4 \\]
                    </div>
                    <div class="correction-step">
                        c) \\[ 68 \\times 10^{-5} = 6,8 \\times 10^1 \\times 10^{-5} = 6,8 \\times 10^{-4} \\]
                    </div>
                    <div class="correction-step">
                        d) \\[ 52,47 \\times 10^7 = 5,247 \\times 10^1 \\times 10^7 = 5,247 \\times 10^8 \\]
                    </div>
                </div>`
            },
            {
                id: "w3-ex3",
                num: "N°3",
                title: "Développement, Factorisation & Équations produits nuls",
                image: "image18.png",
                statement: `<p>On donne les expressions suivantes :</p>
                <div class="math-formula">
                    \\[ C = (6x - 9)(4x - 1) - 3 + 2x \\quad\\text{et}\\quad D = (5x + 3)(x - 1) - (-5x - 3)^2 \\]
                </div>
                <ol>
                    <li>Développer, réduire et ordonner \\(C\\).</li>
                    <li>Calculer \\(C\\) pour \\(x = -\\frac{1}{2}\\).</li>
                    <li>Écrire \\(C\\) et \\(D\\) sous la forme d'un produit de facteurs du premier degré en \\(x\\).</li>
                    <li>Résoudre les équations suivantes :
                        <ol type="a">
                            <li>\\(D = 0\\)</li>
                            <li>\\(C = -40x\\)</li>
                        </ol>
                    </li>
                </ol>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Équation produit nul</strong> : \\(A \\times B = 0 \\iff A = 0 \\text{ ou } B = 0\\).</li>
                    <li><strong>Carré d'un opposé</strong> : \\((-5x - 3)^2 = [-(5x + 3)]^2 = (5x + 3)^2\\). Cela permet de faire apparaître le facteur commun dans D.</li>
                    <li><strong>Facteur commun caché dans C</strong> : Remarquez que \\(6x - 9 = 3(2x - 3)\\) et \\(-3 + 2x = (2x - 3)\\). Le facteur commun est \\((2x - 3)\\).</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>Question 1</strong> : Développez en utilisant la double distributivité : \\((6x-9)(4x-1) = 24x^2 - 6x - 36x + 9\\). Assemblez ensuite avec \\(- 3 + 2x\\).</li>
                    <li><strong>Question 2</strong> : Utilisez la forme développée de C pour remplacer \\(x\\) par -0,5.</li>
                    <li><strong>Question 3 (C)</strong> : Factorisez par \\((2x-3)\\) après avoir récrit l'expression : \\(3(2x-3)(4x-1) + (2x-3) \\times 1\\).</li>
                    <li><strong>Question 3 (D)</strong> : Remplacez \\((-5x-3)^2\\) par \\((5x+3)^2\\). Le facteur commun est alors \\((5x+3)\\).</li>
                    <li><strong>Question 4.b</strong> : Utilisez la forme développée de C. L'équation se simplifie en \\(24x^2 + 6 = 0\\). Un carré réel multiplié par 24 peut-il être égal à -6 ?</li>
                </ul>`,
                inputs: [
                    { id: "w3-ex3-1", label: "C développé", placeholder: "Ex: 24x^2 - 40x + 6" },
                    { id: "w3-ex3-2", label: "Valeur de C pour x = -1/2", placeholder: "Ex: 32" },
                    { id: "w3-ex3-4a", label: "Solutions de D = 0", placeholder: "Ex: -1 et -3/5" },
                    { id: "w3-ex3-4b", label: "Solutions de C = -40x", placeholder: "Ex: aucune solution" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>1) Développement de C :</strong><br>
                        \\[ C = (24x^2 - 6x - 36x + 9) - 3 + 2x \\]
                        \\[ C = 24x^2 - 42x + 9 - 3 + 2x = 24x^2 - 40x + 6 \\]
                    </div>
                    <div class="correction-step">
                        <strong>2) Calcul de C pour x = -1/2 :</strong><br>
                        En remplaçant dans la forme développée :<br>
                        \\[ C = 24\\left(-\\frac{1}{2}\\right)^2 - 40\\left(-\\frac{1}{2}\\right) + 6 \\]
                        \\[ C = 24 \\times \\frac{1}{4} + 20 + 6 = 6 + 20 + 6 = 32 \\]
                    </div>
                    <div class="correction-step">
                        <strong>3) Factorisation :</strong><br>
                        - Pour C :<br>
                        \\[ C = 3(2x - 3)(4x - 1) + (2x - 3) \\times 1 \\]
                        \\[ C = (2x - 3)[3(4x - 1) + 1] = (2x - 3)(12x - 3 + 1) = (2x - 3)(12x - 2) \\]
                        En factorisant 2 dans \\(12x - 2 = 2(6x - 1)\\) :<br>
                        \\[ C = 2(2x - 3)(6x - 1) \\]
                        - Pour D :<br>
                        Puisque \\((-5x - 3)^2 = (5x + 3)^2\\), on a :<br>
                        \\[ D = (5x + 3)(x - 1) - (5x + 3)^2 \\]
                        \\[ D = (5x + 3)[(x - 1) - (5x + 3)] \\]
                        \\[ D = (5x + 3)(x - 1 - 5x - 3) = (5x + 3)(-4x - 4) \\]
                        En factorisant -4 dans \\(-4x - 4 = -4(x + 1)\\) :<br>
                        \\[ D = -4(5x + 3)(x + 1) \\]
                    </div>
                    <div class="correction-step">
                        <strong>4) Résolution des équations :</strong><br>
                        a) \\(D = 0 \\iff -4(5x + 3)(x + 1) = 0\\) :<br>
                        \\[ 5x + 3 = 0 \\iff x = -\\frac{3}{5} = -0,6 \\quad\\text{ou}\\quad x + 1 = 0 \\iff x = -1 \\]
                        Les solutions sont \\(-1\\) et \\(-0,6\\).<br>
                        b) \\(C = -40x\\). Utilisons la forme développée :<br>
                        \\[ 24x^2 - 40x + 6 = -40x \\iff 24x^2 + 6 = 0 \\iff 24x^2 = -6 \\iff x^2 = -\\frac{6}{24} = -\\frac{1}{4} \\]
                        Un carré réel ne pouvant pas être négatif, cette équation n'admet <strong>aucune solution</strong>.
                    </div>
                </div>`
            },
            {
                id: "w3-ex4",
                num: "N°4",
                title: "Géométrie plane (Réciproque du théorème de Pythagore)",
                image: "image19.png",
                statement: `<p>\\(IJK\\) est un triangle rectangle en \\(I\\), tel que \\(IJ = 18\\) cm et \\(IK = 14\\) cm. \\(L\\) est un point tel que : \\(JL = 31\\) cm et \\(KL = 21\\) cm.</p>
                <p><strong>Démontrer que les droites \\((JK)\\) et \\((KL)\\) sont perpendiculaires.</strong></p>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Théorème de Pythagore</strong> : Si un triangle est rectangle, alors le carré de l'hypoténuse est égal à la somme des carrés des côtés de l'angle droit.</li>
                    <li><strong>Réciproque du théorème de Pythagore</strong> : Si dans un triangle, le carré du plus grand côté est égal à la somme des carrés des deux autres côtés, alors ce triangle est rectangle et son hypoténuse est ce plus grand côté.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Calculez d'abord la valeur de \\(JK^2\\) en utilisant le théorème de Pythagore dans le triangle \\(IJK\\) rectangle en \\(I\\) : \\(JK^2 = IJ^2 + IK^2\\). (Inutile de prendre la racine carrée de \\(JK^2\\), conservez la valeur brute).</li>
                    <li>Identifiez le plus long côté du triangle \\(JKL\\) (c'est \\(JL = 31\\) cm).</li>
                    <li>Calculez d'une part \\(JL^2\\) et d'autre part \\(JK^2 + KL^2\\). Comparez les deux résultats. S'ils sont égaux, alors \\(JKL\\) est rectangle en \\(K\\).</li>
                </ul>`,
                inputs: [], // Démonstration géométrique pure
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>Étape 1 : Calcul de JK² :</strong><br>
                        Le triangle \\(IJK\\) est rectangle en \\(I\\). D'après le théorème de Pythagore :<br>
                        \\[ JK^2 = IJ^2 + IK^2 = 18^2 + 14^2 = 324 + 196 = 520 \\]
                    </div>
                    <div class="correction-step">
                        <strong>Étape 2 : Réciproque dans JKL :</strong><br>
                        Dans le triangle \\(JKL\\), le plus grand côté est \\([JL]\\) de longueur \\(31\\) cm.<br>
                        Calculons séparément :<br>
                        - \\(JL^2 = 31^2 = 961\\)<br>
                        - \\(JK^2 + KL^2 = 520 + 21^2 = 520 + 441 = 961\\)<br>
                        Puisque \\(JL^2 = JK^2 + KL^2\\), d'après la réciproque du théorème de Pythagore, le triangle \\(JKL\\) est <strong>rectangle en K</strong>.<br>
                        Par conséquent, les droites \\((JK)\\) et \\((KL)\\) sont <strong>perpendiculaires</strong>.
                    </div>
                </div>`
            },
            {
                id: "w3-ex5",
                num: "N°5",
                title: "Géométrie plane (Triangle isocèle & Rectangle)",
                image: "image20.png",
                statement: `<p>\\(ABC\\) est un triangle isocèle en \\(A\\) tel que \\(AC = 5\\) cm et \\(BC = 6\\) cm. Le cercle \\((C)\\) de centre \\(O\\) et de diamètre \\([AC]\\) coupe \\([BC]\\) en \\(K\\).</p>
                <ol>
                    <li>Démontrer que \\(K\\) est le milieu de \\([BC]\\).</li>
                    <li>Calculer la valeur de \\(AK\\).</li>
                    <li>Calculer l'aire du triangle \\(ABC\\).</li>
                    <li>Soit \\([Ay)\\) la perpendiculaire menée de \\(A\\) à \\([AK]\\). Soit \\(D\\) le point d'intersection de \\([Ay)\\) et \\((C)\\). Quelle est la nature du quadrilatère \\(KADC\\) ?</li>
                    <li>Quelle est la nature du quadrilatère \\(ADKB\\) ?</li>
                </ol>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li>Dans un triangle isocèle, la hauteur issue du sommet principal est également la médiatrice, la bissectrice et la médiane.</li>
                    <li>Un angle inscrit dans un demi-cercle interceptant le diamètre est un angle droit.</li>
                    <li>Un quadrilatère possédant trois angles droits est un rectangle.</li>
                    <li>Un parallélogramme est un quadrilatère qui a ses côtés opposés parallèles et de même longueur.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>Question 1</strong> : Le point \\(K\\) est sur le cercle de diamètre \\([AC]\\), donc le triangle \\(AKC\\) est rectangle en \\(K\\). La droite \\((AK)\\) est donc la hauteur issue de \\(A\\) dans le triangle isocèle \\(ABC\\).</li>
                    <li><strong>Question 2</strong> : Puisque \\(K\\) est le milieu de \\([BC]\\), \\(KC = BC / 2 = 3\\) cm. Utilisez Pythagore dans \\(AKC\\).</li>
                    <li><strong>Question 4</strong> : Observez les angles droits : \\(\\widehat{AKC} = 90^circ\\), et par définition \\((AD) \\perp (AK)\\) donc \\(\\widehat{DAK} = 90^circ\\). \\(D\\) est sur le cercle de diamètre \\([AC]\\) donc \\(\\widehat{ADC} = 90^circ\\).</li>
                    <li><strong>Question 5</strong> : Comparez les vecteurs ou segments \\([AD]\\) et \\([KB]\\). Ils sont parallèles et ont la même longueur.</li>
                </ul>`,
                inputs: [
                    { id: "w3-ex5-2", label: "Longueur de AK (cm)", placeholder: "Ex: 4" },
                    { id: "w3-ex5-3", label: "Aire de ABC (cm²)", placeholder: "Ex: 12" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>1) Preuve que K est le milieu de [BC] :</strong><br>
                        Le triangle \\(AKC\\) est inscrit dans le cercle \\((C)\\) de diamètre \\([AC]\\). Il est donc rectangle en \\(K\\), ce qui signifie que \\((AK) \\perp (BC)\\).<br>
                        Dans le triangle \\(ABC\\) isocèle en \\(A\\), la hauteur issue de \\(A\\) (qui est la droite \\((AK)\\)) est aussi la médiane issue de \\(A\\). Donc \\(K\\) est le <strong>milieu</strong> du segment \\([BC]\\).
                    </div>
                    <div class="correction-step">
                        <strong>2) Calcul de AK :</strong><br>
                        Comme \\(K\\) est le milieu de \\([BC]\\), \\(KC = \\frac{BC}{2} = 3\\) cm.<br>
                        Dans le triangle \\(AKC\\) rectangle en \\(K\\), d'après le théorème de Pythagore :<br>
                        \\[ AK^2 + KC^2 = AC^2 \\iff AK^2 + 3^2 = 5^2 \\iff AK^2 = 25 - 9 = 16 \\iff AK = 4\\text{ cm} \\]
                    </div>
                    <div class="correction-step">
                        <strong>3) Aire de ABC :</strong><br>
                        \\[ Aire = \\frac{base \\times hauteur}{2} = \\frac{BC \\times AK}{2} = \\frac{6 \\times 4}{2} = 12\\text{ cm}^2 \\]
                    </div>
                    <div class="correction-step">
                        <strong>4) Nature de KADC :</strong><br>
                        - \\(K\\) est sur le cercle de diamètre \\([AC]\\), donc \\(\\widehat{AKC} = 90^\\circ\\).<br>
                        - \\((Ay)\\) (ou la droite \\((AD)\\)) est perpendiculaire à \\((AK)\\), donc \\(\\widehat{DAK} = 90^\\circ\\).<br>
                        - \\(D\\) est sur le cercle de diamètre \\([AC]\\), donc le triangle \\(ADC\\) est rectangle en \\(D\\), ce qui signifie que \\(\\widehat{ADC} = 90^\\circ\\).<br>
                        Possédant 3 angles droits, le quadrilatère \\(KADC\\) est un <strong>rectangle</strong>.
                    </div>
                    <div class="correction-step">
                        <strong>5) Nature de ADKB :</strong><br>
                        Puisque \\(KADC\\) est un rectangle, ses côtés opposés sont parallèles et de même longueur : \\(AD = KC\\) et \\((AD) // (KC)\\).<br>
                        Comme \\(K\\) est le milieu de \\([BC]\\), on a \\(KC = KB\\). De plus, les points \\(B\\), \\(K\\) et \\(C\\) sont alignés, donc la droite \\((KC)\\) est la même que la droite \\((KB)\\).<br>
                        On en déduit que \\(AD = KB\\) et \\((AD) // (KB)\\). Un quadrilatère non croisé qui a deux côtés opposés parallèles et de même longueur est un <strong>parallélogramme</strong>.
                    </div>
                </div>`
            },
            {
                id: "w3-ex6",
                num: "N°6",
                title: "Mise en équation d'un problème concret (Ages - Niveau 2)",
                image: "image21.png",
                statement: `<p>L'âge de Lama est le triple de l'âge de sa sœur. Il y a \\(2\\) ans, l'âge de Lama dépassait de \\(12\\) ans celui de sa sœur. Quel est l'âge de chacune ?</p>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Mise en équation</strong> : Définissez clairement l'âge de la sœur comme variable de base, puis exprimez l'âge de Lama en fonction d'elle.</li>
                    <li>Soustrayez 2 à chaque âge pour représenter la situation d'il y a 2 ans.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Soit \\(x\\) l'âge actuel de la sœur.</li>
                    <li>L'âge actuel de Lama est \\(3x\\).</li>
                    <li>Il y a 2 ans : l'âge de la sœur était \\(x - 2\\) et celui de Lama était \\(3x - 2\\).</li>
                    <li>Traduisez la phrase « l'âge de Lama dépassait de 12 ans celui de sa sœur » : \\(3x - 2 = (x - 2) + 12\\). Résolvez pour trouver \\(x\\).</li>
                </ul>`,
                inputs: [
                    { id: "w3-ex6", label: "Âges respectifs (Lama et soeur)", placeholder: "Ex: 18 et 6" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>Étape 1 : Choix des inconnues :</strong><br>
                        Soit \\(x\\) l'âge actuel de la sœur.<br>
                        L'âge actuel de Lama est alors \\(3x\\).
                    </div>
                    <div class="correction-step">
                        <strong>Étape 2 : Situation il y a 2 ans :</strong><br>
                        - Âge de la sœur : \\(x - 2\\).<br>
                        - Âge de Lama : \\(3x - 2\\).<br>
                        Lama avait 12 ans de plus que sa sœur :<br>
                        \\[ 3x - 2 = (x - 2) + 12 \\]
                    </div>
                    <div class="correction-step">
                        <strong>Étape 3 : Résolution :</strong><br>
                        \\[ 3x - 2 = x + 10 \\]
                        \\[ 3x - x = 10 + 2 \\]
                        \\[ 2x = 12 \\iff x = 6 \\]
                        La sœur a 6 ans.
                    </div>
                    <div class="correction-step">
                        <strong>Étape 4 : Conclusion :</strong><br>
                        - La sœur a actuellement <strong>6 ans</strong>.<br>
                        - Lama a actuellement \\(3 \\times 6 = \\) <strong>18 ans</strong>.
                    </div>
                </div>`
            },
            {
                id: "w3-ex7",
                num: "N°7",
                title: "Calcul littéral & Périmètres (Modélisation)",
                image: "image22.png",
                statement: `<p>\\(ABCD\\) est un rectangle : \\(DC = 5\\) cm et \\(BC = 2,5\\) cm. \\(N\\) est le point du segment \\([AD]\\) tel que \\(AN = 1,5\\) cm. \\(M\\) est un point du segment \\([AB]\\).</p>
                <p>On note \\(x\\) la longueur du segment \\([AM]\\) (\\(x\\) est compris entre 0 et 5).</p>
                <p>\\(AMPN\\) et \\(MBCR\\) sont des rectangles notés respectivement \\(R_1\\) et \\(R_2\\).</p>
                <ol>
                    <li>
                        <ol type="a">
                            <li>Exprimer, en fonction de \\(x\\), le périmètre de \\(R_1\\).</li>
                            <li>Exprimer, en fonction de \\(x\\), le périmètre de \\(R_2\\).</li>
                        </ol>
                    </li>
                    <li>Résoudre l'équation : \\(2x + 3 = -2x + 15\\).</li>
                    <li>Quelles sont les valeurs de \\(AM\\) pour lesquelles le périmètre de \\(R_2\\) est égal au périmètre de \\(R_1\\) ?</li>
                </ol>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Périmètre d'un rectangle</strong> : \\(P = 2 \\times (Longueur + largeur)\\).</li>
                    <li><strong>Dimensions de R2</strong> : Si \\(AB = 5\\) cm et \\(AM = x\\) cm, alors la longueur \\(MB = 5 - x\\) cm. La hauteur est \\(BC = 2,5\\) cm.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>Pour 1.a (R1)</strong> : Ses côtés sont \\(AM = x\\) et \\(AN = 1,5\\). Son périmètre est \\(2(x + 1,5) = 2x + 3\\).</li>
                    <li><strong>Pour 1.b (R2)</strong> : Ses côtés sont \\(MB = 5 - x\\) et \\(BC = 2,5\\). Son périmètre est \\(2((5-x) + 2,5) = 2(7,5 - x) = 15 - 2x\\).</li>
                    <li><strong>Pour 3</strong> : L'égalité des périmètres conduit directement à l'équation résolue à la question 2 : \\(2x + 3 = 15 - 2x\\).</li>
                </ul>`,
                inputs: [
                    { id: "w3-ex7-2", label: "Solution de l'équation x =", placeholder: "Ex: 3" },
                    { id: "w3-ex7-3", label: "Valeur de AM pour périmètres égaux (cm)", placeholder: "Ex: 3" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>1) Périmètres en fonction de x :</strong><br>
                        a) Le rectangle \\(R_1\\) (AMPN) a pour côtés \\(x\\) et \\(1,5\\) cm.<br>
                        \\[ P_1(x) = 2 \\times (x + 1,5) = 2x + 3 \\]<br>
                        b) Le rectangle \\(R_2\\) (MBCR) a pour côtés \\(MB = 5 - x\\) (car \\(AB = 5\\) et \\(AM = x\\)) et \\(BC = 2,5\\) cm.<br>
                        \\[ P_2(x) = 2 \\times (5 - x + 2,5) = 2 \\times (7,5 - x) = 15 - 2x \\]
                    </div>
                    <div class="correction-step">
                        <strong>2) Résolution de l'équation :</strong><br>
                        \\[ 2x + 3 = -2x + 15 \\]
                        \\[ 2x + 2x = 15 - 3 \\]
                        \\[ 4x = 12 \\iff x = 3 \\]
                    </div>
                    <div class="correction-step">
                        <strong>3) Valeur de AM pour périmètres égaux :</strong><br>
                        On cherche \\(x\\) tel que \\(P_1(x) = P_2(x)\\), ce qui donne :<br>
                        \\[ 2x + 3 = 15 - 2x \\]
                        Il s'agit de la même équation qu'à la question 2. La solution est donc \\(x = 3\\).<br>
                        Le périmètre de \\(R_2\\) est égal au périmètre de \\(R_1\\) pour \\(AM = 3\\) cm.
                    </div>
                </div>`
            },
            {
                id: "w3-ex8",
                num: "N°8",
                title: "Algorithmique & Probabilités (Jeu de hasard Scratch)",
                image: "image23.png",
                statement: `<p>On a créé un jeu de hasard à l'aide d'un logiciel de programmation. Le lutin dessine trois motifs côte à côte. Chaque motif est dessiné aléatoirement : soit une croix, soit un rectangle. Le joueur gagne s'il obtient trois motifs identiques. (Voir image pour les scripts complets).</p>
                <ol>
                    <li>En prenant pour échelle \\(1\\) cm pour \\(20\\) pas, représenter le motif obtenu par le bloc « rectangle » (côtés de 60 et 80 pas).</li>
                    <li>Quelle est la distance \\(d\\) entre les deux rectangles sur l'affichage, exprimée en pas ?</li>
                    <li>Quelle est la probabilité que le premier motif dessiné par le lutin soit une croix ?</li>
                    <li>Dessiner à main levée les \\(8\\) affichages différents que l'on pourrait obtenir.</li>
                    <li>Quelle est la probabilité que le joueur gagne ?</li>
                    <li>On souhaite désormais qu'il y ait deux fois plus de chances d'obtenir un rectangle qu'une croix. Recopier l'instruction de la ligne 5 en complétant : <strong>nombre aléatoire entre ... et ... = ...</strong>.</li>
                </ol>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Probabilités d'événements équiprobables</strong> : \\(P(A) = \\frac{\\text{Nombre de cas favorables}}{\\text{Nombre de cas possibles}}\\).</li>
                    <li><strong>Arbre de choix</strong> : Pour 3 choix binaires successifs (Croix/Rectangle), il y a \\(2 \\times 2 \\times 2 = 8\\) issues possibles.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>Question 2</strong> : La boucle avance de 100 pas à chaque motif (ligne 10). Le rectangle fait 60 pas de large (avancer de 60). Réfléchissez à la distance restante entre la fin du premier motif et le début du second.</li>
                    <li><strong>Question 3</strong> : La ligne 5 choisit au hasard entre 1 et 2. La croix est dessinée si le nombre vaut 1. Quelle est la probabilité d'obtenir 1 ?</li>
                    <li><strong>Question 5</strong> : Le joueur gagne s'il obtient [Croix, Croix, Croix] ou [Rectangle, Rectangle, Rectangle]. Cela fait 2 combinaisons gagnantes sur les 8 possibles.</li>
                    <li><strong>Question 6</strong> : Pour avoir 2 fois plus de chances d'avoir un rectangle (R) qu'une croix (C), il faut \\(P(R) = 2/3\\) et \\(P(C) = 1/3\\). On peut choisir un nombre entre 1 et 3 et associer 1 à la croix.</li>
                </ul>`,
                inputs: [
                    { id: "w3-ex8-2", label: "Distance d (en pas)", placeholder: "Ex: 40" },
                    { id: "w3-ex8-3", label: "Probabilité d'une croix au départ", placeholder: "Ex: 1/2" },
                    { id: "w3-ex8-5", label: "Probabilité que le joueur gagne", placeholder: "Ex: 1/4" },
                    { id: "w3-ex8-6", label: "Ligne 5 complétée (Ex: 1 et 3 = 1)", placeholder: "Ex: 1 et 3 = 1" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>1) Représentation du rectangle :</strong><br>
                        Le bloc « rectangle » dessine un rectangle de largeur 60 pas et de longueur 80 pas. À l'échelle 1 cm pour 20 pas, le dessin doit faire :<br>
                        - Largeur : \\(60 / 20 = 3\\) cm.<br>
                        - Longueur : \\(80 / 20 = 4\\) cm.
                    </div>
                    <div class="correction-step">
                        <strong>2) Calcul de la distance d :</strong><br>
                        À chaque itération de la boucle principale, le lutin commence à dessiner un motif, puis avance de \\(100\\) pas (ligne 10) avant le motif suivant. Comme la largeur du rectangle dessiné est de \\(60\\) pas, la distance entre la fin du premier rectangle et le début du second est :<br>
                        \\[ d = 100 - 60 = 40\\text{ pas} \\]
                    </div>
                    <div class="correction-step">
                        <strong>3) Probabilité de la croix en premier :</strong><br>
                        L'instruction génère aléatoirement soit 1 soit 2 (équiprobabilité). La croix est choisie si le résultat est 1. La probabilité est donc de :<br>
                        \\[ P = \\frac{1}{2} = 0,5 \\quad (50\\%) \\]
                    </div>
                    <div class="correction-step">
                        <strong>4) Les 8 affichages possibles :</strong><br>
                        En notant C pour Croix et R pour Rectangle :<br>
                        CCC, CCR, CRC, RCC, CRR, RCR, RRC, RRR.
                    </div>
                    <div class="correction-step">
                        <strong>5) Probabilité de gagner :</strong><br>
                        Les affichages gagnants sont CCC et RRR (2 cas favorables sur 8 cas possibles) :<br>
                        \\[ P_{gagner} = \\frac{2}{8} = \\frac{1}{4} = 0,25 \\quad (25\\%) \\]
                    </div>
                    <div class="correction-step">
                        <strong>6) Modification de la ligne 5 :</strong><br>
                        On veut que \\(P(R) = 2 \\times P(C)\\). Comme \\(P(R) + P(C) = 1\\), on obtient \\(P(C) = 1/3\\) et \\(P(R) = 2/3\\).<br>
                        On génère un nombre entier aléatoire entre 1 et 3. Si ce nombre vaut 1, on fait la croix (1 chance sur 3). Sinon (s'il vaut 2 ou 3), on fait le rectangle (2 chances sur 3).<br>
                        L'instruction est : <strong>nombre aléatoire entre 1 et 3 = 1</strong>.
                    </div>
                </div>`
            }
        ]
    },
    "w4": {
        title: "Semaine 4 : Arithmétique, Équations d'exposants & Géométrie du demi-cercle",
        exercises: [
            {
                id: "w4-ex1",
                num: "N°1",
                title: "QCM d'auto-évaluation (Calculs, décimaux & ensembles)",
                image: "image25.png",
                statement: `<p>Pour chaque ligne du tableau suivant, 4 réponses (A, B, C et D) sont proposées. Attribuer à chaque énoncé la (ou les) lettre(s) correspondant à la (ou les) bonne(s) réponse(s).</p>
                <table class="math-table">
                    <thead>
                        <tr>
                            <th>Énoncé</th>
                            <th>Réponse A</th>
                            <th>Réponse B</th>
                            <th>Réponse C</th>
                            <th>Réponse D</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>1) </strong> \\(\\frac{7+2}{8+2}\\)</td>
                            <td>\\(\\frac{7}{8}\\)</td>
                            <td>\\(0,9\\)</td>
                            <td>\\(\\frac{7}{8} + 1\\)</td>
                            <td>\\(\\frac{9}{10}\\)</td>
                        </tr>
                        <tr>
                            <td><strong>2) </strong> \\(1,\\overline{36}\\)</td>
                            <td>est un décimal non rationnel</td>
                            <td>est égale à \\(\\frac{15}{11}\\)</td>
                            <td>est un rationnel non décimal</td>
                            <td>est égale à \\(\\frac{4}{11}\\)</td>
                        </tr>
                        <tr>
                            <td><strong>3) </strong> \\(\\frac{x-3}{3x-5}\\)</td>
                            <td>existe quand \\(x \\neq \\frac{5}{3}\\)</td>
                            <td>est nulle quand \\(x=3\\)</td>
                            <td>existe quand \\(x \\neq 3\\)</td>
                            <td>existe quand \\(x \\neq \\frac{3}{5}\\)</td>
                        </tr>
                        <tr>
                            <td><strong>4) </strong> \\(\\frac{3}{5} - \\frac{3}{5} \\times \\frac{25}{15}\\)</td>
                            <td>\\(\\frac{25}{15}\\)</td>
                            <td>\\(-\\frac{2}{5}\\)</td>
                            <td>\\(\\frac{5}{3}\\)</td>
                            <td>\\(-\\frac{2}{10}\\)</td>
                        </tr>
                    </tbody>
                </table>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Nombre décimal</strong> : Nombre qui possède un nombre fini de chiffres après la virgule (sa fraction irréductible a un dénominateur composé uniquement de facteurs 2 et 5).</li>
                    <li><strong>Nombre rationnel</strong> : Nombre s'écrivant sous la forme d'un quotient \\(\\frac{a}{b}\\) d'entiers. Un nombre rationnel non décimal a un développement décimal périodique infini (ex: \\(1,\\overline{36}\\)).</li>
                    <li><strong>Priorité opératoire</strong> : La multiplication est prioritaire sur la soustraction.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>Ligne 1</strong> : Calculez d'abord le numérateur et le dénominateur : \\(7+2 = 9\\) et \\(8+2 = 10\\).</li>
                    <li><strong>Ligne 2</strong> : Calculez les divisions \\(15 \\div 11\\) et \\(4 \\div 11\\) pour vérifier. Une écriture avec une barre périodique n'est pas un nombre décimal car le nombre de décimales est infini.</li>
                    <li><strong>Ligne 3</strong> : La fraction existe si le dénominateur \\(3x - 5 \\neq 0\\). Elle s'annule si le numérateur \\(x - 3 = 0\\).</li>
                    <li><strong>Ligne 4</strong> : Effectuez d'abord la multiplication : \\(\\frac{3}{5} \\times \\frac{25}{15} = \\frac{3 \\times 25}{5 \\times 15} = 1\\). Le calcul devient \\(\\frac{3}{5} - 1\\).</li>
                </ul>`,
                inputs: [
                    { id: "w4-ex1-1", label: "Réponse Ligne 1", placeholder: "Ex: B et D" },
                    { id: "w4-ex1-2", label: "Réponse Ligne 2", placeholder: "Ex: B et C" },
                    { id: "w4-ex1-3", label: "Réponse Ligne 3", placeholder: "Ex: A et B" },
                    { id: "w4-ex1-4", label: "Réponse Ligne 4", placeholder: "Ex: B" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>1) Réponses B et D :</strong><br>
                        \\[ \\frac{7+2}{8+2} = \\frac{9}{10} = 0,9 \\]
                    </div>
                    <div class="correction-step">
                        <strong>2) Réponses B et C :</strong><br>
                        \\(1,\\overline{36}\\) possède une période infinie (1,363636...), ce n'est donc pas un nombre décimal, mais c'est un nombre rationnel (il s'écrit sous forme de fraction).<br>
                        Vérification : \\(\\frac{15}{11} = 1,363636... = 1,\\overline{36}\\).
                    </div>
                    <div class="correction-step">
                        <strong>3) Réponses A et B :</strong><br>
                        - La fraction existe si \\(3x - 5 \\neq 0 \\iff 3x \\neq 5 \\iff x \\neq 5/3\\) (Réponse A).<br>
                        - La fraction est nulle si \\(x - 3 = 0 \\iff x = 3\\) (Réponse B).
                    </div>
                    <div class="correction-step">
                        <strong>4) Réponse B :</strong><br>
                        \\[ \\frac{3}{5} - \\frac{3}{5} \\times \\frac{25}{15} = \\frac{3}{5} - \\frac{3 \\times 25}{5 \\times 15} = \\frac{3}{5} - 1 = \\frac{3}{5} - \\frac{5}{5} = -\\frac{2}{5} \\]
                    </div>
                </div>`
            },
            {
                id: "w4-ex2",
                num: "N°2",
                title: "Calculs numériques complexes avec priorités",
                image: "image25.png", // shared image
                statement: `<p>Calculez, de la façon la plus simple et montrer les étapes suivies :</p>
                <div class="math-formula">
                    \\[ A = -11,8 - 13,4 \\left[15,5 - (-4)^2 - 3,5 \\div (-7)\\right] - (-0,8) \\]
                    \\[ B = \\left(\\frac{7}{3} - \\frac{16}{12}\\right) - \\left(\\frac{15}{45} - \\frac{-35}{21}\\right) \\]
                    \\[ C = \\frac{1 - \\frac{3}{6} + \\frac{8}{16}}{4 - \\frac{1}{2}} \\]
                </div>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li>Respectez l'ordre de priorité des crochets et parenthèses : calculez toujours les expressions les plus internes en premier.</li>
                    <li>Un nombre négatif au carré est positif : \\((-4)^2 = 16\\).</li>
                    <li>Diviser par un nombre négatif : \\(3,5 \\div (-7) = -0,5\\).</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>Pour A</strong> : Commencez par l'intérieur du crochet : \\((-4)^2 = 16\\), et \\(3,5 \\div (-7) = -0,5\\). Le crochet devient \\([15,5 - 16 - (-0,5)]\\).</li>
                    <li><strong>Pour B</strong> : Simplifiez les fractions d'abord : \\(\\frac{16}{12} = \\frac{4}{3}\\), \\(\\frac{15}{45} = \\frac{1}{3}\\) et \\(\\frac{-35}{21} = -\\frac{5}{3}\\).</li>
                    <li><strong>Pour C</strong> : Au numérateur, remarquez que \\(\\frac{3}{6} = 0,5\\) et \\(\\frac{8}{16} = 0,5\\). Le numérateur vaut donc \\(1 - 0,5 + 0,5 = 1\\).</li>
                </ul>`,
                inputs: [
                    { id: "w4-ex2-A", label: "Valeur de A", placeholder: "Ex: -11" },
                    { id: "w4-ex2-B", label: "Valeur de B", placeholder: "Ex: -1" },
                    { id: "w4-ex2-C", label: "Valeur de C", placeholder: "Ex: 2/7" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>Calcul de A :</strong><br>
                        Calculons le crochet :<br>
                        \\[ 15,5 - (-4)^2 - 3,5 \\div (-7) = 15,5 - 16 - (-0,5) = -0,5 + 0,5 = 0 \\]
                        Ainsi :<br>
                        \\[ A = -11,8 - 13,4 \\times [0] + 0,8 = -11,8 + 0,8 = -11 \\]
                    </div>
                    <div class="correction-step">
                        <strong>Calcul de B :</strong><br>
                        \\[ B = \\left(\\frac{7}{3} - \\frac{4}{3}\\right) - \\left(\\frac{1}{3} + \\frac{5}{3}\\right) = \\frac{3}{3} - \\frac{6}{3} = 1 - 2 = -1 \\]
                    </div>
                    <div class="correction-step">
                        <strong>Calcul de C :</strong><br>
                        Numérateur : \\(1 - 0,5 + 0,5 = 1\\).<br>
                        Dénominateur : \\(4 - 0,5 = 3,5 = \\frac{7}{2}\\).<br>
                        \\[ C = \\frac{1}{\\frac{7}{2}} = \\frac{2}{7} \\]
                    </div>
                </div>`
            },
            {
                id: "w4-ex3",
                num: "N°3",
                title: "Équations d'exposants (Recherche de x)",
                image: "image26.png",
                statement: `<p>Dans les deux cas suivants, calculer \\(x\\) :</p>
                <ol type="a">
                    <li>\\((9^2)^4 = (3^x)^2\\)</li>
                    <li>\\(4526^{4-x} = 1\\)</li>
                </ol>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Relation entre bases</strong> : Écrivez les deux membres avec la même base (ici base 3 car \\(9 = 3^2\\)).</li>
                    <li><strong>Règles des exposants</strong> : \\((a^n)^m = a^{n \\times m}\\). Si \\(a^p = a^q\\), alors \\(p = q\\) (pour \\(a > 0\\) et \\(a \\neq 1\\)).</li>
                    <li><strong>Exposant nul</strong> : Tout nombre non nul élevé à la puissance 0 est égal à 1 : \\(a^0 = 1\\).</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>Pour a</strong> : Écrivez 9 comme \\(3^2\\). L'équation devient \\(((3^2)^2)^4 = (3^x)^2\\). Utilisez ensuite les puissances de puissances.</li>
                    <li><strong>Pour b</strong> : Pour que \\(4526^{4-x} = 1\\), il faut que l'exposant soit égal à 0. Résolvez \\(4-x = 0\\).</li>
                </ul>`,
                inputs: [
                    { id: "w4-ex3-a", label: "Valeur de x pour a)", placeholder: "Ex: 8" },
                    { id: "w4-ex3-b", label: "Valeur de x pour b)", placeholder: "Ex: 4" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>Résolution de a) :</strong><br>
                        Exprimons en base 3 (car \\(9 = 3^2\\)) :<br>
                        \\[ (9^2)^4 = ((3^2)^2)^4 = (3^4)^4 = 3^{16} \\]
                        Le membre de droite est : \\((3^x)^2 = 3^{2x}\\). L'équation devient :<br>
                        \\[ 3^{16} = 3^{2x} \\iff 2x = 16 \\iff x = 8 \\]
                    </div>
                    <div class="correction-step">
                        <strong>Résolution de b) :</strong><br>
                        Puisque \\(4526^0 = 1\\), on a :<br>
                        \\[ 4526^{4-x} = 4526^0 \\iff 4-x = 0 \\iff x = 4 \\]
                    </div>
                </div>`
            },
            {
                id: "w4-ex4",
                num: "N°4",
                title: "Problème de partage (Fractions - Voyage de Rami)",
                image: "image27.png",
                statement: `<p>Le premier jour, Rami a parcouru les \\(\\frac{3}{7}\\) de son voyage. Le lendemain, Rami parcourt les \\(\\frac{3}{4}\\) du reste, et enfin le troisième jour, il arrive après avoir parcouru la fraction qui reste.</p>
                <p><strong>Calculer la fraction du voyage parcourue par Rami le troisième jour.</strong></p>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Prendre une fraction d'un reste</strong> : Il faut d'abord calculer la fraction représentant le reste : \\(Reste = 1 - \\text{fraction}\\). Ensuite, multiplier la fraction donnée par ce reste : \\(\\text{Jour 2} = \\frac{a}{b} \\times Reste\\).</li>
                    <li>La somme des fractions parcourues sur les 3 jours doit être égale à 1 (le voyage complet).</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Après le premier jour, il reste à parcourir : \\(1 - \\frac{3}{7} = \\frac{4}{7}\\) du voyage.</li>
                    <li>Le deuxième jour, Rami parcourt \\(\\frac{3}{4}\\) de ce reste : calculez \\(\\frac{3}{4} \\times \\frac{4}{7}\\). (Remarquez que les 4 se simplifient).</li>
                    <li>Calculez la somme des fractions des deux premiers jours, puis soustrayez-la de 1 (le voyage total) pour trouver la part du 3ème jour.</li>
                </ul>`,
                inputs: [
                    { id: "w4-ex4", label: "Fraction parcourue le 3ème jour", placeholder: "Ex: 1/7" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>Étape 1 : Calcul du reste après le 1er jour :</strong><br>
                        Le premier jour, il fait \\(\\frac{3}{7}\\) du trajet. Il reste :<br>
                        \\[ Reste_1 = 1 - \\frac{3}{7} = \\frac{4}{7} \\]
                    </div>
                    <div class="correction-step">
                        <strong>Étape 2 : Fraction parcourue le 2ème jour :</strong><br>
                        Il parcourt \\(\\frac{3}{4}\\) de ce reste :<br>
                        \\[ Jour_2 = \\frac{3}{4} \\times \\frac{4}{7} = \\frac{3}{7} \\]
                    </div>
                    <div class="correction-step">
                        <strong>Étape 3 : Fraction du 3ème jour :</strong><br>
                        En deux jours, il a parcouru :<br>
                        \\[ Cumul = \\frac{3}{7} + \\frac{3}{7} = \\frac{6}{7} \\]
                        Le troisième jour, il parcourt le reste pour finir le voyage (1) :<br>
                        \\[ Jour_3 = 1 - \\frac{6}{7} = \\frac{1}{7} \\]
                        Rami parcourt <strong>\\(\\frac{1}{7}\\)</strong> de son voyage le troisième jour.
                    </div>
                </div>`
            },
            {
                id: "w4-ex5",
                num: "N°5",
                title: "Géométrie plane (Tangente, triangle rectangle & centre de gravité)",
                image: "image28.png",
                statement: `<p>On considère un cercle \\((C)\\) de centre \\(O\\) et de rayon \\(3\\) cm et soit \\(A\\) un point de ce cercle. Sur la perpendiculaire en \\(A\\) à \\((OA)\\), et de part et d'autre de \\(A\\), on prend deux points \\(B\\) et \\(D\\) tels que : \\(BA = AD = AO\\).</p>
                <ol>
                    <li>Faire une figure soignée.</li>
                    <li>Démontrer que \\(BOD\\) est un triangle rectangle isocèle, puis calculer l'aire de ce triangle.</li>
                    <li>Sur la demi-droite \\([AO)\\) placer le point \\(E\\) tel que \\(OE = 2\\,OA\\). Que représente \\(O\\) pour le triangle \\(BDE\\) ? Expliquer.</li>
                </ol>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Tangente en un point</strong> : La tangente à un cercle en un point est la droite perpendiculaire au rayon du cercle passant par ce point. Donc \\((xy) \\perp (OA)\\) en A.</li>
                    <li><strong>Médiane d'un triangle</strong> : Segment joignant un sommet au milieu du côté opposé. Les trois médianes se coupent au <strong>centre de gravité</strong> (centroid), qui est situé aux \\(2/3\\) de chaque médiane en partant du sommet.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>Question 2</strong> : Comme \\((xy)\\) est la tangente en \\(A\\), l'angle \\(\\widehat{OAB}\\) est droit. Donc \\(OAB\\) et \\(OAD\\) sont des triangles rectangles en \\(A\\). Utilisez Pythagore pour trouver \\(OB^2\\) et \\(OD^2\\). Comparez avec \\(BD^2 = (BA+AD)^2\\).</li>
                    <li><strong>Question 3</strong> : Le segment \\([EA]\\) est une médiane du triangle \\(BDE\\) car \\(A\\) est le milieu de \\([BD]\\). Le point \\(O\\) est situé sur ce segment. Calculez les rapports de longueurs : \\(EA = EO + OA = 6 + 3 = 9\\) cm, et \\(EO = 6\\) cm. Quelle est la proportion \\(EO / EA\\) ?</li>
                </ul>`,
                inputs: [
                    { id: "w4-ex5-2", label: "Aire du triangle BOD (cm²)", placeholder: "Ex: 9" },
                    { id: "w4-ex5-3", label: "Que représente O pour BDE ?", placeholder: "Ex: centre de gravité" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>2) Preuve que BOD est rectangle isocèle :</strong><br>
                        - La droite \\((xy)\\) est la tangente en \\(A\\), elle est donc perpendiculaire au rayon \\([OA]\\). Les triangles \\(OAB\\) et \\(OAD\\) sont rectangles en \\(A\\).<br>
                        - \\(BA = AD = AO = 3\\) cm. Par Pythagore :<br>
                        \\[ OB^2 = OA^2 + AB^2 = 3^2 + 3^2 = 18 \\implies OB = \\sqrt{18}\\text{ cm} \\]
                        \\[ OD^2 = OA^2 + AD^2 = 3^2 + 3^2 = 18 \\implies OD = \\sqrt{18}\\text{ cm} \\]
                        On a bien \\(OB = OD\\) (isocèle en O).<br>
                        - De plus, \\(BD = BA + AD = 3 + 3 = 6\\) cm, donc \\(BD^2 = 36\\).<br>
                        On constate que : \\(OB^2 + OD^2 = 18 + 18 = 36 = BD^2\\).<br>
                        D'après la réciproque du théorème de Pythagore, le triangle \\(BOD\\) est <strong>rectangle en O</strong>.<br>
                        - Aire de BOD :<br>
                        \\[ Aire = \\frac{base \\times hauteur}{2} = \\frac{BD \\times OA}{2} = \\frac{6 \\times 3}{2} = 9\\text{ cm}^2 \\]
                    </div>
                    <div class="correction-step">
                        <strong>3) Rôle du point O dans BDE :</strong><br>
                        - Le point \\(A\\) est le milieu de \\([BD]\\), donc \\([EA]\\) est la médiane issue de \\(E\\) dans le triangle \\(BDE\\).<br>
                        - Le point \\(O\\) appartient au segment \\([EA]\\) car \\(E\\), \\(O\\), \\(A\\) sont alignés dans cet ordre. Les longueurs sont \\(OA = 3\\) cm et \\(OE = 6\\) cm, d'où \\(EA = 9\\) cm.<br>
                        - Calculons le rapport : \\(\\frac{EO}{EA} = \\frac{6}{9} = \\frac{2}{3}\\).<br>
                        Le point \\(O\\) est situé aux deux tiers du segment de la médiane \\([EA]\\) à partir du sommet \\(E\\). C'est donc le <strong>centre de gravité</strong> du triangle \\(BDE\\).
                    </div>
                </div>`
            },
            {
                id: "w4-ex6",
                num: "N°6",
                title: "Mise en équation d'un système (Têtes et Bosses)",
                image: "image29.png",
                statement: `<p>Un troupeau est formé de chameaux et de dromadaires. Un chameau a deux bosses et un dromadaire en a une. On compte \\(55\\) têtes et \\(89\\) bosses.</p>
                <p><strong>Combien y a-t-il de chameaux ? de dromadaires ?</strong></p>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li>Chaque animal a exactement 1 tête.</li>
                    <li>Un chameau apporte 2 bosses, un dromadaire en apporte 1.</li>
                    <li>On peut résoudre ce problème par substitution ou par combinaison.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Soit \\(x\\) le nombre de chameaux et \\(y\\) le nombre de dromadaires.</li>
                    <li>L'équation des têtes est : \\(x + y = 55\\), ce qui donne \\(y = 55 - x\\).</li>
                    <li>L'équation des bosses est : \\(2x + y = 89\\). Remplacer \\(y\\) par \\(55 - x\\) dans cette équation.</li>
                </ul>`,
                inputs: [
                    { id: "w4-ex6", label: "Résultats (Chameaux et Dromadaires)", placeholder: "Ex: 34 et 21" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>Étape 1 : Système d'équations :</strong><br>
                        Soit \\(x\\) le nombre de chameaux (2 bosses) et \\(y\\) le nombre de dromadaires (1 bosse).<br>
                        \\[ \\begin{cases} x + y = 55 & \\text{(têtes)} \\\\ 2x + y = 89 & \\text{(bosses)} \\end{cases} \\]
                    </div>
                    <div class="correction-step">
                        <strong>Étape 2 : Résolution par substitution :</strong><br>
                        De la première équation : \\(y = 55 - x\\).<br>
                        Remplaçons dans la deuxième :<br>
                        \\[ 2x + (55 - x) = 89 \\]
                        \\[ x + 55 = 89 \\]
                        \\[ x = 89 - 55 = 34 \\]
                        Il y a 34 chameaux.
                    </div>
                    <div class="correction-step">
                        <strong>Étape 3 : Calcul de y :</strong><br>
                        \\[ y = 55 - 34 = 21 \\]
                        Il y a 21 dromadaires.
                        <em>Vérification : 34 + 21 = 55 têtes ; 34*2 + 21 = 68 + 21 = 89 bosses. Le compte est bon.</em>
                    </div>
                </div>`
            },
            {
                id: "w4-ex7",
                num: "N°7",
                title: "Géométrie plane (Demi-cercle & Triangles semblables)",
                image: "image30.png",
                statement: `<p>On considère un demi-cercle \\((C)\\) de diamètre \\([AB]\\), de centre \\(O\\) et de rayon \\(4\\) cm. Soit \\(E\\) le milieu du segment \\([OB]\\). La médiatrice de \\([OB]\\) coupe \\((C)\\) en \\(G\\). Soit \\(K\\) un point quelconque du segment \\([EG]\\). La droite \\((BK)\\) recoupe \\((C)\\) en \\(M\\).</p>
                <ol>
                    <li>Reproduire la figure en vraies grandeurs.</li>
                    <li>
                        <ol type="a">
                            <li>Démontrer que \\(OB = OG = GB\\).</li>
                            <li>En déduire la mesure de l'angle \\(\\widehat{BOG}\\).</li>
                        </ol>
                    </li>
                    <li>
                        <ol type="a">
                            <li>Déterminer la longueur de \\([GE]\\).</li>
                            <li>Calculer l'aire du triangle \\(AGB\\).</li>
                        </ol>
                    </li>
                    <li>
                        <ol type="a">
                            <li>Quelle est la nature du triangle \\(AMB\\) ?</li>
                            <li>Démontrer que les deux triangles \\(BEK\\) et \\(BMA\\) sont semblables.</li>
                            <li>En déduire que \\(BK \\times BM = BA \\times BE\\).</li>
                        </ol>
                    </li>
                    <li>On désigne par \\(N\\) le milieu de \\([AM]\\).
                        <ol type="a">
                            <li>Citer le théorème qui permet de dire que \\((ON)\\) est parallèle à \\((BM)\\).</li>
                            <li>Démontrer que \\((ON)\\) est perpendiculaire à \\((AM)\\).</li>
                        </ol>
                    </li>
                </ol>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Triangle équilatéral</strong> : Triangle ayant ses 3 côtés égaux. Ses angles mesurent tous 60°.</li>
                    <li><strong>Hauteur d'un triangle équilatéral</strong> de côté \\(c\\) : \\(h = \\frac{\\sqrt{3}}{2} c\\).</li>
                    <li><strong>Théorème des milieux</strong> : Dans un triangle, la droite passant par les milieux de deux côtés est parallèle au troisième côté.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>Question 2.a</strong> : \\(OB\\) et \\(OG\\) sont des rayons de \\((C)\\), donc égaux à 4 cm. Comme \\((GE)\\) est la médiatrice de \\([OB]\\), \\(GB = GO\\).</li>
                    <li><strong>Question 3.a</strong> : Dans le triangle rectangle \\(OEG\\), \\(OE = 2\\) cm, \\(OG = 4\\) cm. Utilisez Pythagore.</li>
                    <li><strong>Question 4.b</strong> : Les triangles \\(BEK\\) et \\(BMA\\) sont tous deux rectangles (en E et M respectivement) et ils partagent l'angle \\(\\widehat{EBK}\\) (ou \\(\\widehat{MBA}\\)).</li>
                    <li><strong>Question 5.a</strong> : Dans le triangle \\(ABM\\), \\(O\\) est le milieu de \\([AB]\\) et \\(N\\) est le milieu de \\([AM]\\).</li>
                </ul>`,
                inputs: [
                    { id: "w4-ex7-2b", label: "Mesure de l'angle BÔG (degrés)", placeholder: "Ex: 60" },
                    { id: "w4-ex7-3a", label: "Longueur de GE (cm)", placeholder: "Ex: 3.46" },
                    { id: "w4-ex7-3b", label: "Aire du triangle AGB (cm²)", placeholder: "Ex: 13.86" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>2.a) Preuve que OB = OG = GB :</strong><br>
                        - \\(O\\) est le centre du demi-cercle et \\(B\\) et \\(G\\) sont sur le cercle, donc \\(OB = OG = \\text{rayon} = 4\\) cm.<br>
                        - \\((GE)\\) est la médiatrice du segment \\([OB]\\). Par propriété de la médiatrice, \\(G\\) est équidistant de \\(O\\) et \\(B\\), donc \\(GB = GO = 4\\) cm.<br>
                        On a donc bien \\(OB = OG = GB = 4\\) cm. Le triangle \\(OBG\\) est équilatéral.<br>
                        <strong>2.b) Mesure de l'angle :</strong><br>
                        Le triangle \\(OBG\\) étant équilatéral, tous ses angles mesurent 60°. Ainsi, \\(\\widehat{BOG} = 60^\\circ\\).
                    </div>
                    <div class="correction-step">
                        <strong>3.a) Calcul de GE :</strong><br>
                        Dans le triangle \\(OEG\\) rectangle en \\(E\\) (car \\((GE)\\) est la médiatrice de \\([OB]\\)), par Pythagore :<br>
                        \\[ GE^2 + OE^2 = OG^2 \\iff GE^2 + 2^2 = 4^2 \\iff GE^2 = 16 - 4 = 12 \\implies GE = \\sqrt{12} = 2\\sqrt{3} \\approx 3,46\\text{ cm} \\]
                        <strong>3.b) Aire du triangle AGB :</strong><br>
                        Le triangle \\(AGB\\) a pour base \\(AB = 8\\) cm et la hauteur correspondante est \\([GE]\\).<br>
                        \\[ Aire = \\frac{AB \\times GE}{2} = \\frac{8 \\times 2\\sqrt{3}}{2} = 8\\sqrt{3} \\approx 13,86\\text{ cm}^2 \\]
                    </div>
                    <div class="correction-step">
                        <strong>4.a) Nature de AMB :</strong><br>
                        Le triangle \\(AMB\\) est inscrit dans le demi-cercle de diamètre \\([AB]\\), il est donc <strong>rectangle en M</strong>.<br>
                        <strong>4.b) Triangles semblables :</strong><br>
                        Les triangles \\(BEK\\) (rectangle en \\(E\\)) et \\(BMA\\) (rectangle en \\(M\\)) ont :<br>
                        - L'angle droit : \\(\\widehat{BEK} = \\widehat{BMA} = 90^\\circ\\).<br>
                        - L'angle \\(\\widehat{EBK}\\) en commun.<br>
                        Ils ont deux angles deux à deux égaux, ils sont donc <strong>semblables</strong>.<br>
                        <strong>4.c) Rapport de longueurs :</strong><br>
                        Par proportionnalité des côtés homologues :<br>
                        \\[ \\frac{BK}{BA} = \\frac{BE}{BM} \\iff BK \\times BM = BA \\times BE \\]
                    </div>
                    <div class="correction-step">
                        <strong>5.a) Théorème des milieux :</strong><br>
                        Dans le triangle \\(ABM\\), \\(O\\) est le milieu de \\([AB]\\) et \\(N\\) est le milieu de \\([AM]\\). D'après le théorème des milieux, la droite \\((ON)\\) qui relie ces milieux est parallèle au troisième côté \\((BM)\\).<br>
                        <strong>5.b) Perpendicularité :</strong><br>
                        Puisque \\(AMB\\) est rectangle en \\(M\\), \\((AM) \\perp (BM)\\).<br>
                        Comme \\((ON) // (BM)\\) et que \\((AM) \\perp (BM)\\), alors d'après la propriété des droites parallèles et perpendiculaires, \\((ON)\\) est également <strong>perpendiculaire</strong> à \\((AM)\\).
                    </div>
                </div>`
            },
            {
                id: "w4-ex8",
                num: "N°8",
                title: "Algorithmique & Modélisation (Boutique en ligne - Tarifs photo)",
                image: "image32.png",
                statement: `<p>Une boutique en ligne vend des photos et affiche les tarifs suivants :</p>
                <ul>
                    <li>De 1 à 100 photos : \\(0,17\\) € par photo</li>
                    <li>Plus de 100 photos : \\(17\\) € pour les 100 premières et \\(0,13\\) € par photo supplémentaire</li>
                </ul>
                <p>On modélise cela avec un programme Scratch (voir image).</p>
                <ol>
                    <li>
                        <ol type="a">
                            <li>Quel est le prix à payer pour \\(35\\) photos ?</li>
                            <li>Vérifier que le prix pour \\(150\\) photos est \\(23,50\\) €.</li>
                            <li>On dispose d'un budget de \\(10\\) €. Combien de photos peut-on commander au maximum ?</li>
                        </ol>
                    </li>
                    <li>Par quelles valeurs peut-on compléter les instructions des lignes 3, 4 et 7 du programme Scratch ? (Voir image).</li>
                    <li>En période de soldes, le site offre une réduction de \\(30\\) % pour toute commande supérieure à \\(20\\) €.
                       
                            Calculer le prix à payer pour \\(150\\) photos en période de soldes.
                          
                    </li>
                </ol>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Calcul de prix par tranche</strong> : Si la quantité dépasse le seuil (100), appliquez le tarif de base pour la tranche complète (100 * 0,17 = 17 €), et le tarif réduit uniquement pour les pièces supplémentaires.</li>
                    <li><strong>Application de remise</strong> : Faire une réduction de 30% revient à multiplier le prix par \\(1 - 0,30 = 0,70\\).</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>Question 1.c</strong> : Avec 10 €, on ne dépasse pas la tranche de 100 photos car \\(100 \\times 0,17 = 17\\) €. Faites simplement la division : \\(10 / 0,17\\) et prenez la partie entière.</li>
                    <li><strong>Question 2</strong> :
                        - Ligne 3 : On teste si le nombre est inférieur à 101 (car la tranche tarifaire va de 1 à 100).
                        - Ligne 4 : Le prix est Nb photos * 0,17.
                        - Ligne 7 : Le prix est 17 + Nb photos supplémentaires * 0,13.
                    </li>
                    <li><strong>Question 3.a</strong> : Le prix d'origine pour 150 photos est 23,50 €. C'est supérieur à 20 €, donc appliquez le coefficient multiplicateur 0,7.</li>
                    <li><strong>Question 3.b</strong> : Cherchez la proposition qui multiplie le prix par 0,7 ou qui calcule \\(prix - prix \\times 0,3\\).</li>
                </ul>`,
                inputs: [
                    { id: "w4-ex8-1a", label: "1.a) Prix pour 35 photos (€)", placeholder: "Ex: 5.95" },
                    { id: "w4-ex8-1c", label: "1.c) Maximum de photos pour 10 €", placeholder: "Ex: 58" },
                    { id: "w4-ex8-2", label: "2) Valeurs Lignes 3, 4 et 7", placeholder: "Ex: 101, 0.17, 17" },
                    { id: "w4-ex8-3a", label: "3.a) Prix solde pour 150 photos (€)", placeholder: "Ex: 16.45" },
                    { id: "w4-ex8-3b", label: "3.b) Propositions valides (Ex: 2 et 4)", placeholder: "Ex: 2 et 4" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>1.a) Prix pour 35 photos :</strong><br>
                        35 est inférieur à 100, donc :<br>
                        \\[ Prix = 35 \\times 0,17 = 5,95\\text{ €} \\]
                    </div>
                    <div class="correction-step">
                        <strong>1.b) Prix pour 150 photos :</strong><br>
                        150 est supérieur à 100. On paye 17 € pour les 100 premières photos, et \\(0,13\\) € pour les 50 supplémentaires :<br>
                        \\[ Prix = 17 + 50 \\times 0,13 = 17 + 6,5 = 23,50\\text{ €} \\]
                    </div>
                    <div class="correction-step">
                        <strong>1.c) Maximum de photos pour 10 € :</strong><br>
                        Avec 10 €, on ne peut pas dépasser 100 photos (qui coûtent 17 €).<br>
                        Le nombre de photos est : \\(10 \\div 0,17 \\approx 58,82\\). On peut donc commander au maximum <strong>58 photos</strong>.
                    </div>
                    <div class="correction-step">
                        <strong>2) Complétion du programme Scratch :</strong><br>
                        - Ligne 3 : si Nb photos < <span class="scratch-input">101</span> alors (pour inclure jusqu'à 100 photos).<br>
                        - Ligne 4 : mettre Prix à Nb photos * <span class="scratch-input">0.17</span><br>
                        - Ligne 7 : mettre Prix à <span class="scratch-input">17</span> + Nb photos supplémentaires * 0.13
                    </div>
                    <div class="correction-step">
                        <strong>3 Prix soldé pour 150 photos :</strong><br>
                        Le prix d'origine (23,50 €) est supérieur à 20 €. On applique la réduction de 30% :<br>
                        \\[ Prix\\_solde = 23,50 \\times (1 - 0,30) = 23,50 \\times 0,7 = 16,45\\text{ €} \\]
                        </div>
                </div>`
            }
        ]
    },
    "extra": {
        title: "Fiche Supplémentaire de Révision (sans aide ni correction)",
        exercises: [
            {
                id: "extra-ex1",
                num: "N°1",
                title: "Calcul fractionnaire & Priorités",
                statement: `<p>Calculer de la façon la plus simple possible et donner le résultat sous la forme d'une fraction irréductible :</p>
                <div class="math-formula">
                    \\[ A = \\frac{5}{6} - \\frac{7}{12} \\times \\frac{3}{14} \\]
                </div>`,
                inputs: [
                    { id: "extra-ex1", label: "Valeur de A", placeholder: "Ex: 17/24" }
                ]
            },
            {
                id: "extra-ex2",
                num: "N°2",
                title: "Puissances relatives et simplifications",
                statement: `<p>Simplifier et écrire le nombre suivant sous la forme d'une seule puissance :</p>
                <div class="math-formula">
                    \\[ B = \\frac{5^4 \\times (5^{-2})^3}{5^{-5}} \\]
                </div>`,
                inputs: [
                    { id: "extra-ex2", label: "Valeur de B", placeholder: "Ex: 5^3" }
                ]
            },
            {
                id: "extra-ex3",
                num: "N°3",
                title: "Calculs avec des puissances de 10 & Écriture scientifique",
                statement: `<p>Calculer et exprimer le résultat sous sa forme scientifique :</p>
                <div class="math-formula">
                    \\[ C = \\frac{3 \\times 10^2 \\times 1,2 \\times 10^{-5}}{15 \\times 10^{-2}} \\]
                </div>`,
                inputs: [
                    { id: "extra-ex3", label: "C (scientifique)", placeholder: "Ex: 2.4*10^-2" }
                ]
            },
            {
                id: "extra-ex4",
                num: "N°4",
                title: "Calcul littéral : Développement & Reduction",
                statement: `<p>Développer, réduire et ordonner l'expression algébrique suivante :</p>
                <div class="math-formula">
                    \\[ D = (3x - 2)^2 - (2x + 1)(x - 3) \\]
                </div>`,
                inputs: [
                    { id: "extra-ex4", label: "Expression développée D =", placeholder: "Ex: 7x^2 - 7x + 7" }
                ]
            },
            {
                id: "extra-ex5",
                num: "N°5",
                title: "Calcul littéral : Factorisation d'expression",
                statement: `<p>Factoriser l'expression algébrique suivante au maximum :</p>
                <div class="math-formula">
                    \\[ E = (2x - 3)^2 - (2x - 3)(5x + 4) \\]
                </div>`,
                inputs: [
                    { id: "extra-ex5", label: "Expression factorisée E =", placeholder: "Ex: (2x - 3)(-3x - 7)" }
                ]
            },
            {
                id: "extra-ex6",
                num: "N°6",
                title: "Algèbre : Équation produit nul",
                statement: `<p>Résoudre l'équation produit nul suivante. Indiquer les solutions trouvées séparées par le mot "et" :</p>
                <div class="math-formula">
                    \\[ (3x - 4)(2x + 5) = 0 \\]
                </div>`,
                inputs: [
                    { id: "extra-ex6", label: "Solutions de l'équation", placeholder: "Ex: 4/3 et -5/2" }
                ]
            },
            {
                id: "extra-ex7",
                num: "N°7",
                title: "Géométrie plane : Triangle rectangle inscrit dans un cercle",
                statement: `<p>Soit \\([AB]\\) un segment de longueur \\(10\\) cm et \\(O\\) son milieu. On trace le cercle \\((C)\\) de diamètre \\([AB]\\). Soit \\(M\\) un point de ce cercle tel que \\(AM = 6\\) cm.</p>
                <ol>
                    <li>Préciser, en justifiant, la nature du triangle \\(AMB\\).</li>
                    <li>Calculer la longueur \\(BM\\) en centimètres.</li>
                </ol>`,
                inputs: [
                    { id: "extra-ex7", label: "Longueur BM (cm)", placeholder: "Ex: 8" }
                ]
            },
            {
                id: "extra-ex8",
                num: "N°8",
                title: "Géométrie plane : Théorème des milieux dans un triangle",
                statement: `<p>Soit \\(ABC\\) un triangle. Le point \\(I\\) est le milieu de \\([AB]\\) et le point \\(J\\) est le milieu de \\([AC]\\). On donne \\(BC = 7,6\\) cm.</p>
                <ol>
                    <li>Démontrer que les droites \\((IJ)\\) et \\((BC)\\) sont parallèles.</li>
                    <li>Calculer la longueur du segment \\([IJ]\\) en centimètres.</li>
                </ol>`,
                inputs: [
                    { id: "extra-ex8", label: "Longueur IJ (cm)", placeholder: "Ex: 3.8" }
                ]
            },
            {
                id: "extra-ex9",
                num: "N°9",
                title: "Géométrie dans l'espace : Volume d'un cône de révolution",
                statement: `<p>Calculer le volume d'un cône de révolution dont la base a un rayon de \\(3\\) cm et la hauteur mesure \\(7\\) cm. Arrondir le résultat à l'unité près (en cm³, prendre \\(\\pi \\approx 3,14159\\)).</p>`,
                inputs: [
                    { id: "extra-ex9", label: "Volume du cône (cm³)", placeholder: "Ex: 66" }
                ]
            },
            {
                id: "extra-ex10",
                num: "N°10",
                title: "Probabilités & Algorithmique (Analyse de script)",
                statement: `<p>Dans un script Scratch, on définit un jeu où un joueur lance un dé classique à 6 faces. S'il obtient un nombre pair, son score augmente de 10 points, sinon rien ne se passe. On modélise ce jeu par :</p>
                <div class="scratch-container">
                    <div class="scratch-block scratch-event">quand <span class="scratch-input">drapeau vert</span> est cliqué</div><br>
                    <div class="scratch-block scratch-data">mettre <span class="scratch-input">dé</span> à <span class="scratch-input block">nombre aléatoire entre 1 et 6</span></div><br>
                    <div class="scratch-block scratch-control">si <span class="scratch-input block">(dé modulo 2) = 0</span> alors</div>
                    <div class="scratch-loop-body">
                        <div class="scratch-block scratch-looks">dire <span class="scratch-input">+10 points !</span> pendant <span class="scratch-input">2</span> secondes</div>
                    </div>
                </div>
                <p>Déterminer la probabilité que le joueur obtienne les +10 points lors d'un lancer de dé.</p>`,
                inputs: [
                    { id: "extra-ex10", label: "Probabilité d'obtenir +10 points", placeholder: "Ex: 1/2" }
                ]
            }
        ]
    }
};
