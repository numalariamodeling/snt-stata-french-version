function toggleMenu(menuHeader) {
    const submenu = menuHeader.nextElementSibling;
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}

function loadContent(page) {
    const content = {
        overview: `
            <h3 class="sidebar-title">Version : 3 octobre 2024 </h3>
            <h3 class="sidebar-title">Auteurs : Mohamed Sillah Kanu, Sammy Oppong, Jaline Gerardin </h3>
            <h2>Aperçu</h2>
            <h3>Motivation</h3>
            <p>SNT est là pour rester : de nombreux NMCP ont trouvé cela utile et continuent à l'adopter et à le développer davantage pour leurs besoins analytiques. Depuis 2019, plusieurs personnes ont soutenu les parties d'analyse de SNT. Dans la plupart des cas, les individus ont construit leur propre code dans une variété de langages (Stata, R et Python), construisant parfois sur le code précédent d'autres et parfois redéveloppant de manière indépendante.
            À mesure que SNT mûrit, davantage d'assurance qualité est nécessaire pour que les NMCP puissent être confiants que l'analyse qu'ils utilisent pour éclairer leurs décisions est de haute qualité, quel que soit l'analyste qui les soutient. Le déploiement continu de SNT signifie également que l'analyse peut devenir plus efficace si les analystes sont mieux en mesure de s'appuyer sur le travail des autres plutôt que d'être tentés de réinventer ce qui a déjà été développé. Enfin, l'analyse SNT peut devenir beaucoup plus accessible s'il existe une ressource commune disponible pour aider ceux qui ont des compétences en codage intermédiaires à accéder rapidement aux connaissances collectives de la communauté des analystes SNT.</p>

            <h3>Objectifs</h3>
            <p>Nous allons construire une bibliothèque de code pour l'analyse SNT afin de :
            <p>1. Améliorer la qualité et la reproductibilité de l'analyse SNT en veillant à ce que les analystes utilisent des approches similaires et correctes.</p>
            <p>2. Améliorer l'efficacité de l'analyse SNT en minimisant la duplication des efforts.</p>
            <p>3. Promouvoir l'accessibilité de l'analyse SNT en abaissant les barrières à l'entrée.</p>

            <h3>Public cible</h3>
            <p>Quiconque effectuant ce type de travail. Nous supposons une certaine connaissance de base de R, une certaine compréhension des données et un lien solide avec le NMCP.</p>

            <h3>Portée</h3>
            <p>Toutes les étapes d'analyse de SNT jusqu'à, mais n'incluant pas, la modélisation mathématique ; certaines analyses connexes.</p>

        `,


        shapefiles: `
                    <div class="fixed-buttons">
                        
                        <button class="text-button">Sur cette page:</button>
                        <button class="text-button" onclick="scrollToSection('stepByStep')">Étape par étape</button>
                        <button class="text-button" onclick="scrollToSection('sampleR')">Exemple de sortie</button>
                        <button class="text-button" onclick="scrollToSection('fullCode')">Code complet</button>
                       
                    </div>

        
                    <h5>Assemblage et gestion des données/fichiers de forme</h5>
                    <h3 style="color: #47B5FF;">Approche étape par étape</h3>
                    <p><em>Cette section explique le flux de travail pour importer et gérer des shapefiles en utilisant R.</em></p>


                    <div class="round-buttons">
                        <button class="rect-button" onclick="window.location.href='https://numalariamodeling.github.io/snt-code-library-english-version/#shapefiles';">Vue R En</button>
                        <button class="rect-button" onclick="window.location.href='https://numalariamodeling.github.io/snt-python-english-version/#shapefiles';">Vue py En</button>
                        <button class="rect-button" onclick="window.location.href='https://numalariamodeling.github.io/snt-python-french-version/#shapefiles';">Vue py FR</button>
                        <button class="rect-button" onclick="window.location.href='https://numalariamodeling.github.io/snt-python-english-version/#shapefiles';">Vue St En</button>
                        <button class="rect-button" onclick="window.location.href='https://numalariamodeling.github.io/snt-python-french-version/#shapefiles';">Vue St FR</button>
                        

                    </div>
                    
                    <h4 id="stepByStep">Étape par étape</h4>

                    <h5 style="color: #ADD8E6;">Étape 1 : Installer les bibliothèques nécessaires</h5>
                    <p>Avant de commencer, assurez-vous d'avoir installé les packages R requis. Cela peut être fait en utilisant le code suivant :</p>
                    <pre><code>
# Installer les bibliothèques nécessaires
install.packages(c("sf", "ggplot2", "dplyr"))
                    </code><button class="copy-button" onclick="copyCode()">Copier le code</button> <!-- Le bouton de copie est positionné ici --></pre>
                    <p>Ce code installe le package <code>sf</code> pour manipuler des données spatiales, <code>ggplot2</code> pour la visualisation des données et <code>dplyr</code> pour la manipulation des données.</p>

                     <h5 style="color: #ADD8E6;">Étape 2 : Charger les bibliothèques nécessaires</h5>
                    
                    <p>Après avoir installé les bibliothèques, vous devez les charger dans votre environnement R :</p>
                    <pre><button class="copy-button" onclick="copyCode()">Copier le code</button> <!-- Le bouton de copie est positionné ici --><code>
# Charger les bibliothèques nécessaires
library(sf)
library(dplyr)
library(ggplot2)
                    </code></pre>
                    <p>Cette étape rend les fonctions de ces bibliothèques disponibles pour utilisation dans votre script.</p>

                    <h5 style="color: #ADD8E6;">Étape 3 : Importer des Shapefiles</h5>
                    <p>Vous pouvez importer des shapefiles en utilisant la fonction <code>st_read</code> du package <code>sf</code>. Voici une fonction pour le faire :</p>
                    <pre><button class="copy-button" onclick="copyCode()">Copier le code</button> <!-- Le bouton de copie est positionné ici --><code>
# Importer des Shapefiles
import_shapefile <- function(filepath) {
    shapefile <- st_read(filepath)  # Lire le shapefile
    return(shapefile)  # Retourner le shapefile chargé
}
                    </code></pre>
                    <p>Cette fonction prend un chemin de fichier en entrée, lit le shapefile et le renvoie en tant qu'objet spatial.</p>

                    <h5 style="color: #ADD8E6;">Étape 4 : Renommer et faire correspondre les noms</h5>
                    <p>Parfois, les colonnes de votre shapefile doivent être renommées pour plus de clarté ou pour correspondre à d'autres ensembles de données. Vous pouvez le faire comme suit :</p>
                    <pre><button class="copy-button" onclick="copyCode()">Copier le code</button> <!-- Le bouton de copie est positionné ici --><code>
# Renommer et faire correspondre les noms
rename_shapefile_columns <- function(shapefile, new_names) {
    colnames(shapefile) <- new_names  # Renommer les colonnes
    return(shapefile)  # Retourner le shapefile renommé
}
                    </code><button class="copy-button" onclick="copyCode()">Copier le code</button> <!-- Le bouton de copie est positionné ici --></pre>
                    <p>Cette fonction prend un shapefile et un vecteur de nouveaux noms, renommant les colonnes en conséquence.</p>

                    <h5 style="color: #ADD8E6;">Étape 5 : Lier les Shapefiles aux Échelles Pertinentes</h5>
                    <p>Liez votre shapefile à des échelles ou des métadonnées pertinentes en le fusionnant avec un autre cadre de données :</p>
                    <pre><button class="copy-button" onclick="copyCode()">Copier le code</button> <!-- Le bouton de copie est positionné ici --><code>
# Lier les Shapefiles aux Échelles Pertinentes
link_shapefiles_to_scales <- function(shapefile, scales_df, link_col) {
    linked_shapefile <- shapefile %>%
        left_join(scales_df, by = link_col)  # Fusionner le shapefile avec les échelles
    return(linked_shapefile)  # Retourner le shapefile lié
}
                    </code></pre>
                    <p>Cette fonction effectue une jointure à gauche entre le shapefile et un cadre de données contenant des informations sur les échelles, en fonction d'une colonne de liaison spécifiée.</p>

                    <h5 style="color: #ADD8E6;">Étape 6 : Visualiser les Shapefiles et Créer des Cartes de Base</h5>
                    <p>Enfin, vous pouvez visualiser le shapefile en utilisant <code>ggplot2</code>. Voici une fonction pour cela :</p>
                    <pre><button class="copy-button" onclick="copyCode()">Copier le code</button> <!-- Le bouton de copie est positionné ici --><code>
# Visualiser les Shapefiles et Créer des Cartes de Base
visualize_shapefile <- function(shapefile) {
    ggplot(data = shapefile) +
        geom_sf(aes(fill = some_variable)) +  # Visualiser le shapefile
        theme_minimal() +
        labs(title = "Visualisation du Shapefile", fill = "Variable")  # Définir le titre et la légende
}
                    </code><button class="copy-button" onclick="copyCode()">Copier le code</button> <!-- Le bouton de copie est positionné ici --></pre>
                    <p>Cette fonction crée une simple visualisation cartographique en utilisant les données spatiales. Remplacez <code>some_variable</code> par le nom de la variable que vous souhaitez visualiser dans l'esthétique de remplissage.</p>

                    <h3 id="fullCode">Code complet</h3>
                    <pre id="codeBlock">
                    <code>

# Installer les bibliothèques nécessaires
install.packages(c("sf", "ggplot2", "dplyr"))

# Charger les bibliothèques nécessaires
library(sf)
library(dplyr)
library(ggplot2)

# Importer des Shapefiles
import_shapefile <- function(filepath) {
    shapefile <- st_read(filepath)  # Lire le shapefile
    return(shapefile)  # Retourner le shapefile chargé
}

# Renommer et faire correspondre les noms
rename_shapefile_columns <- function(shapefile, new_names) {
    colnames(shapefile) <- new_names  # Renommer les colonnes
    return(shapefile)  # Retourner le shapefile renommé
}

# Lier les Shapefiles aux Échelles Pertinentes
link_shapefiles_to_scales <- function(shapefile, scales_df, link_col) {
    linked_shapefile <- shapefile %>%
        left_join(scales_df, by = link_col)  # Fusionner le shapefile avec les échelles
    return(linked_shapefile)  # Retourner le shapefile lié
}

# Visualiser les Shapefiles et Créer des Cartes de Base
visualize_shapefile <- function(shapefile) {
    ggplot(data = shapefile) +
        geom_sf(aes(fill = some_variable)) +  # Visualiser le shapefile
        theme_minimal() +
        labs(title = "Visualisation du Shapefile", fill = "Variable")  # Définir le titre et la légende
}


                    </code>
                <button class="copy-button" onclick="copyCode()">Copier le code</button> <!-- Le bouton de copie est positionné ici -->
            </pre>

            <h3 id="sampleR">Exemple de sortie</h3>
            <img src="https://raw.githubusercontent.com/numalariamodeling/snt-code-library-english-version/a204dc53be5209fc170acbfbb5db8900930a80fa/MAP_PYTHON.png" alt="Sample Results">;
           
        `,

      
    };

    document.getElementById('content').innerHTML = content[page];
}

window.onload = function() {
    // Get the current URL
    const currentUrl = window.location.href;

    // Example 1: Load 'overview' if URL contains '#Overview'
    if (currentUrl.includes('#Overview')) {
        loadContent('overview');
    }

    // Example 2: Load 'shapefiles' if URL contains '#Shapefiles'
    if (currentUrl.includes('#shapefiles')) {
        loadContent('shapefiles');
    }

    // Example 3: Load 'data-management' if URL contains '#DataManagement'
    if (currentUrl.includes('#hf')) {
        loadContent('hf');
    }
};


// Scroll to the relevant section when buttons are clicked
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'auto' });
    }
}       


function copyCode() {
    const codeBlock = document.getElementById("codeBlock").innerText;
    navigator.clipboard.writeText(codeBlock).then(() => {
        alert("Code copied to clipboard!");
    }).catch(err => {
        console.error('Error copying text: ', err);
    });
}

document.querySelector('.search-bar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const menuItems = document.querySelectorAll('.menu-link, .menu-header');
    
    menuItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
            item.style.display = 'block'; // Show matching items
        } else {
            item.style.display = 'none'; // Hide non-matching items
        }
    });
});

// Function to handle link selection
function selectLink(selectedLink) {
    // Remove 'selected' class from all links
    var links = document.getElementsByClassName('menu-link');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('selected');
    }
    // Add 'selected' class to the clicked link
    selectedLink.classList.add('selected');
}

function toggleMenu(menuHeader) {
    var submenu = menuHeader.nextElementSibling; // Get the submenu
    if (submenu.style.display === "none" || submenu.style.display === "") {
        submenu.style.display = "block"; // Show the submenu
        menuHeader.querySelector('.menu-indicator').textContent = 'v'; // Change indicator to 'v'
    } else {
        submenu.style.display = "none"; // Hide the submenu
        menuHeader.querySelector('.menu-indicator').textContent = '>'; // Change indicator back to '>'
    }
}

// Add styles for rectangular buttons
const styles = `
    .rect-buttons {
        display: flex;
        gap: 10px; /* Adds space between the buttons */
        margin-top: 10px;
    }

    .rect-button {
        width: 100px;  /* Set width to make the button rectangular */
        height: 40px;  /* Set height for better visibility */
        border-radius: 5px; /* Small radius for slightly rounded corners, or set to 0 for sharp edges */
        border: none;
        background-color: #47B5FF;
        color: white;
        font-size: 14px;
        cursor: pointer;
    }
`;

// Inject styles into the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
