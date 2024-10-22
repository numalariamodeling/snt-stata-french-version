function basculerMenu(enteteMenu) {
    const sousMenu = enteteMenu.nextElementSibling;
    sousMenu.style.display = sousMenu.style.display === 'block' ? 'none' : 'block';
}

function chargerContenu(page) {
    const contenu = {
        apercu: `
            <h3 class="sidebar-title">Version : 3 octobre 2024 </h3>
            <h3 class="sidebar-title">Auteurs : Mohamed Sillah Kanu, Sammy Oppong, Jaline Gerardin </h3>
            <h2>Aperçu</h2>
            <h3>Motivation</h3>
            <p>SNT est là pour rester : de nombreux NMCP l'ont trouvé utile et continuent de l'adopter et de le développer pour leurs besoins analytiques. Depuis 2019, plusieurs personnes ont soutenu les parties analytiques de SNT. Dans la plupart des cas, les individus ont construit leur propre code dans une variété de langages (Stata, R et Python), parfois en se basant sur le code précédent des autres et parfois en le redéveloppant de manière indépendante.
           
Au fur et à mesure que SNT se développe, une plus grande assurance qualité est nécessaire afin que les NMCP puissent être assurés que les analyses qu'ils utilisent pour informer leurs décisions sont de haute qualité, quel que soit l'analyste qui les soutient. Le déploiement continu de SNT signifie également que l'analyse peut devenir plus efficace si les analystes sont mieux en mesure de se baser sur le travail des autres plutôt que de se sentir tentés de réinventer ce qui a déjà été développé. Enfin, l'analyse SNT peut devenir beaucoup plus accessible s'il existe une ressource commune permettant aux personnes ayant des compétences en codage intermédiaire d'accéder rapidement aux connaissances collectives de la communauté des analystes SNT.
.</p>

            <h3>Objectifs</h3>
            <p>Nous allons construire une bibliothèque de code pour l'analyse SNT afin de :
            <p>1. Améliorer la qualité et la reproductibilité de l'analyse SNT en s'assurant que les analystes utilisent des approches similaires et correctes.</p>
            <p>2. Améliorer l'efficacité de l'analyse SNT en minimisant la duplication des efforts.</p>
            <p>3. Promouvoir l'accessibilité de l'analyse SNT en réduisant les barrières à l'entrée.</p>

            <h3>Public cible</h3>
            <p>Tout le monde faisant ce type de travail. Nous présumons une certaine connaissance de base de R, une certaine compréhension des données, et un lien étroit avec le NMCP.</p>

            <h3>Périmètre</h3>
            <p>Toutes les étapes d'analyse de SNT jusqu'à, mais sans inclure, la modélisation mathématique; certaines analyses connexes.</p>
        `,

        shapefiles: `
            
            <div class="fixed-buttons" id="fixedButtons">
                <button class="text-button">Sur cette page :</button>
                <button class="text-button" data-section="etapeParEtape" onclick="defilerVersSection('etapeParEtape')">Étape par étape</button>
                <button class="text-button" data-section="codeComplet" onclick="defilerVersSection('codeComplet')">Code complet</button>
                <button class="text-button" data-section="exempleR" onclick="defilerVersSection('exempleR')">Résultats d'exemple</button>
            </div>

            <h5>A. Assemblage et gestion des données/Shapefiles</h5>
            <h3 style="color: #47B5FF;">Shapefiles</h3>
         
            <p>Les unités administratives représentent différents niveaux de division géographique au sein d'un pays. Ces unités sont généralement organisées de manière hiérarchique :</p>
        
            <p>(i). Admin 1 : Fait référence à une division primaire, telle que les états ou les provinces</p>
            <p>(ii). Admin 2 : Fait référence à une subdivision de l'Admin 1, comme les districts ou les comtés.</p>
            <p>(iii). Admin 3 : Fait référence à des divisions plus petites, telles que les municipalités ou les quartiers.</p>
            <p>  </p>
            <h5><em>Superposition des shapefiles :</em></h5>   
            <p>Cela vous permet de visualiser les relations entre ces différents niveaux administratifs, tels que la superposition des limites administratives des districts (Admin 2) avec celles des provinces (Admin 1). Ceci est utile pour l'analyse visuelle, les opérations spatiales, et la compréhension de la relation géographique entre différentes zones.</p>
            <div class="round-buttons">
                <button class="rect-button" onclick="window.location.href='https://example.com/button1';">Voir R EN</button>
                <button class="rect-button" onclick="window.location.href='https://example.com/button2';">Voir R FR</button>
                <button class="rect-button" onclick="window.location.href='https://example.com/button3';">Voir py EN</button>
                <button class="rect-button" onclick="window.location.href='https://example.com/button2';">Voir py FR</button>
                <button class="rect-button" onclick="window.location.href='https://example.com/button3';">Voir St FR</button>
            </div>
            
            <h4 id="etapeParEtape">Guide étape par étape</h4>
            <h5 style="color: #ADD8E6;">Étape 1 : Installer les packages requis</h5>
            
            <p>Pour travailler avec des shapefiles dans Stata, vous devez utiliser la commande spmap. Cela nécessite un package appelé spmap. Vous devez également installer shp2dta pour convertir les shapefiles en fichiers de données Stata.</p>
            <p>Cela peut être fait en utilisant le code suivant :</p>
            <pre><button class="copy-button" onclick="copierCode()">Copier le code</button> <!-- Bouton de copie placé ici --><code>
// Installer les packages requis pour travailler avec des shapefiles
ssc install shp2dta
ssc install spmap
            </code></pre>          
            <h5 style="color: #ADD8E6;">Étape 2 : Charger les shapefiles (Admin 1 et Admin 2)</h5>
            <p>Convertir les shapefiles (admin1.shp et admin2.shp) en fichiers .dta en utilisant shp2dta.</p>
            <pre><button class="copy-button" onclick="copierCode()">Copier le code</button> <!-- Bouton de copie placé ici --><code>            
// Convertir le shapefile Admin 1 en fichiers de données Stata
shp2dta using "path/to/admin1.shp", database(admin1_data) coordinates(admin1_coords) genid(id1)

// Convertir le shapefile Admin 2 en fichiers de données Stata
shp2dta using "path/to/admin2.shp", database(admin2_data) coordinates(admin2_coords) genid(id2)

            </code></pre>
            <p> (i). shp2dta using "path/to/admin1.shp" : Convertit le shapefile en fichiers .dta.</p> 
            <p> (ii). database(admin1_data) et coordinates(admin1_coords) : Spécifie les noms pour la base de données et les coordonnées de sortie.</p>
            <p> (iii). genid(id1) : Génère un identifiant unique pour chaque entité.</p>
            
            <h5 style="color: #ADD8E6;">Étape 3 : Fusionner les coordonnées avec les attributs</h5>
            <p>Pour travailler avec des données spatiales dans Stata, vous devez fusionner les coordonnées avec la base de données contenant les attributs.</p>
            <pre><button class="copy-button" onclick="copierCode()">Copier le code</button> <!-- Bouton de copie placé ici --><code>
// Fusionner les coordonnées avec les attributs pour Admin 1
use admin1_data, clear
merge 1:1 id1 using admin1_coords

// Fusionner les coordonnées avec les attributs pour Admin 2
use admin2_data, clear
merge 1:1 id2 using admin2_coords
            </code></pre>
                
            <h5 style="color: #ADD8E6;">Étape 4 : Tracer les superpositions Admin 1 et Admin 2</h5>
            <p>Maintenant que les shapefiles ont été convertis et fusionnés, vous pouvez utiliser spmap pour les tracer.</p>
            <pre><button class="copy-button" onclick="copierCode()">Copier le code</button> <!-- Bouton de copie placé ici --><code>
// Charger les fichiers de données Admin 1 et Admin 2
use admin1_data, clear

// Tracer Admin 2 (rouge) en premier, puis superposer Admin 1 (bleu)
spmap using admin2_coords, id(id2) color(red*0.4) || ///
spmap using admin1_coords, id(id1) color(blue*1.2) ///
title("Superposition des unités Admin 1 et Admin 2") subtitle("Admin 1 (bleu) et Admin 2 (rouge)") ///
legend(off)

            </code></pre>
            <p>(i). spmap using admin2_coords : Trace Admin 2 avec le fichier de coordonnées spécifié.</p>
            <p>(ii). id(id2) : Utilise l'ID unique pour connecter les attributs aux coordonnées.</p>
            <p>(iii). color(red*0.4) : Spécifie une couleur rouge pour Admin 2 avec une épaisseur de ligne de 0,4.</p>
            <p>(iv). || est utilisé pour superposer une deuxième carte (Admin 1).</p>
            <p>(v). La deuxième commande spmap superpose Admin 1 avec une couleur bleue (color(blue*1.2)).</p>
            <p>(vi). title() et subtitle() ajoutent un titre et un sous-titre au graphique.</p>
            <p>(vii). legend(off) : Supprime la légende pour un graphique plus propre.</p>

            <h3 id="codeComplet">Code complet</h3>
          
            <pre id="codeBlock">
                <code>
// Installer les packages requis pour travailler avec des shapefiles
ssc install shp2dta
ssc install spmap

// Convertir le shapefile Admin 1 en fichiers de données Stata
shp2dta using "path/to/admin1.shp", database(admin1_data) coordinates(admin1_coords) genid(id1)

// Convertir le shapefile Admin 2 en fichiers de données Stata
shp2dta using "path/to/admin2.shp", database(admin2_data) coordinates(admin2_coords) genid(id2)

// Fusionner les coordonnées avec les attributs pour Admin 1
use admin1_data, clear
merge 1:1 id1 using admin1_coords

// Fusionner les coordonnées avec les attributs pour Admin 2
use admin2_data, clear
merge 1:1 id2 using admin2_coords

// Charger les fichiers de données Admin 1 et Admin 2
use admin1_data, clear

// Tracer Admin 2 (rouge) en premier, puis superposer Admin 1 (bleu)
spmap using admin2_coords, id(id2) color(red*0.4) || ///
spmap using admin1_coords, id(id1) color(blue*1.2) ///
title("Superposition des unités Admin 1 et Admin 2") subtitle("Admin 1 (bleu) et Admin 2 (rouge)") ///
legend(off)

                </code>
                <button class="copy-button" onclick="copierCode()">Copier le code</button> <!-- Bouton de copie placé ici -->
            </pre>

            <h3 id="exempleR">Résultats d'exemple</h3>
            <img src="https://raw.githubusercontent.com/numalariamodeling/snt-code-library-english-version/a204dc53be5209fc170acbfbb5db8900930a80fa/MAP_PYTHON.png" alt="Résultats d'exemple">;
            

        `,

    };

    document.getElementById('content').innerHTML = contenu[page];
}

