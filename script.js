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
            
            <div class="fixed-buttons id="fixedButtons">
                <button class="text-button">On this page:</button>
                <button class="text-button" data-section="stepByStep" onclick="scrollToSection('stepByStep')">Step-by-step</button>
                <button class="text-button" data-section="fullCode" onclick="scrollToSection('fullCode')">Full code</button>
                <button class="text-button" data-section="sampleR" onclick="scrollToSection('sampleR')">Sample results</button>
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
                <button class="rect-button" onclick="window.location.href='https://numalariamodeling.github.io/snt-code-library-english-version/#shapefiles';">Voir R EN</button>
                <button class="rect-button" onclick="window.location.href='https://numalariamodeling.github.io/snt-code-library-french-version/#shapefiles';">Voir R FR</button>
                <button class="rect-button" onclick="window.location.href='https://numalariamodeling.github.io/snt-python-english-version/#shapefiles';">Voir py EN</button>
                <button class="rect-button" onclick="window.location.href='https://numalariamodeling.github.io/snt-python-french-version/#shapefiles';">Voir py FR</button>
                <button class="rect-button" onclick="window.location.href='https://numalariamodeling.github.io/snt-stata-french-version/#shapefiles';">Voir St FR</button>
            </div>
            
            <h4 id="stepByStep">Guide étape par étape</h4>
            <h5 style="color: #ADD8E6;">Étape 1 : </h5>
            
            <p></p>
            <p></p>
            <pre><button class="copy-button" onclick="copierCode()">Copier le code</button> <!-- Bouton de copie placé ici --><code>





            </code></pre>          
            <h5 style="color: #ADD8E6;">Étape 2 : Charger les shapefiles (Admin 1 et Admin 2)</h5>
            <p>Convertir les shapefiles (admin1.shp et admin2.shp) en fichiers .dta en utilisant shp2dta.</p>
            <pre><button class="copy-button" onclick="copierCode()">Copier le code</button> <!-- Bouton de copie placé ici --><code>            

            
            
            
            
            
            
            </code></pre>
            <p> </p> 
            <p> </p>
            <p> </p>
            
            <h5 style="color: #ADD8E6;">Étape 3 : Fusionner les coordonnées avec les attributs</h5>
            <p> </p>
            <pre><button class="copy-button" onclick="copierCode()">Copier le code</button> <!-- Bouton de copie placé ici --><code>





            </code></pre>
                
            <h5 style="color: #ADD8E6;">Étape 4 : </h5>
            <p>   </p>
            <pre><button class="copy-button" onclick="copierCode()">Copier le code</button> <!-- Bouton de copie placé ici --><code>








            </code></pre>
            <p> </p>
            <p> </p>
            <p></p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>

            <h3 id="fullCode">Code complet</h3>
          
            <pre id="codeBlock">
                <code>














                </code>
                <button class="copy-button" onclick="copierCode()">Copier le code</button> <!-- Bouton de copie placé ici -->
            </pre>

            <h3 id="sampleR">Résultats d'exemple</h3>
            <img src="https://raw.githubusercontent.com/numalariamodeling/snt-code-library-english-version/a204dc53be5209fc170acbfbb5db8900930a80fa/MAP_PYTHON.png" alt="Résultats d'exemple">;
            

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



// Function to scroll to the section when the button is clicked
function scrollToSection(sectionId) {
    // Scroll to the specific section smoothly
    document.getElementById(sectionId).scrollIntoView({ behavior: 'auto' });
    
    // Remove the 'active' class from all buttons
    document.querySelectorAll('.text-button').forEach(button => button.classList.remove('active'));
    
    // Add the 'active' class to the clicked button
    document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
}

// Function to check which section is at the top and update the active button
function handleScroll() {
    const sections = ['stepByStep', 'sampleR', 'fullCode'];
    let activeSection = null;

    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        const rect = section.getBoundingClientRect();
        
        // Check if the section is exactly at the top of the viewport
        if (rect.top <= 0 && rect.bottom >= 0) {
            activeSection = sectionId;
        }
    });

    // Remove the 'active' class from all buttons
    document.querySelectorAll('.text-button').forEach(button => button.classList.remove('active'));

    // Add the 'active' class to the button corresponding to the section at the top
    if (activeSection) {
        document.querySelector(`[data-section="${activeSection}"]`).classList.add('active');
    }
}

// Attach the scroll event listener to update the active button based on scroll position
window.addEventListener('scroll', handleScroll);


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





document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('.fixed-buttons');

    function changeButtonColorOnScroll() {
        if (window.scrollY > 50) { // Change '100' to the scroll distance you want
            button.classList.add('scrolled');
        } else {
            button.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', changeButtonColorOnScroll);
});
















document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.text-button');
    const headings = document.querySelectorAll('h3'); // All headings to track

    function updateButtonState() {
        // Get the current scroll position
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        // Loop through all headings
        headings.forEach((heading) => {
            const headingTop = heading.offsetTop;

            if (scrollPosition >= headingTop) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    // Add scroll event listener
    window.addEventListener('scroll', updateButtonState);
    updateButtonState(); // Initial call in case already scrolled
});
