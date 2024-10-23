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

            <h5>A. Data Assembly and Management/Shapefiles</h5>
            <h3 style="color: #47B5FF;">Shapefiles</h3>
         
            <p>Administrative Units represent different levels of geographic division within a country. These units are typically organized hierarchically:</p>
        
            <p>(i).Admin 1: Refers to a primary division, such as states or provinces</p>
            <p>(ii).Admin 2: Refers to a subdivision of Admin 1, such as districts or counties.</p>
            <p>(iii).Admin 3: Refers to smaller divisions, such as municipalities or wards.</p>
            <p>  </p>
            <h5>Overlaying Shapefiles:</h5>   
            <p>This allows you to visualize relationships between these different administrative layers, such as overlaying administrative boundaries of districts (Admin 2) with those of provinces (Admin 1). This is useful for visual analysis, spatial operations, and understanding how different areas relate geographically.</p>
            <div class="round-buttons">
                <button class="rect-button" onclick="window.location.href='https://example.com/button1';">View R EN</button>
                <button class="rect-button" onclick="window.location.href='https://example.com/button2';">View R FR</button>
                <button class="rect-button" onclick="window.location.href='https://example.com/button3';">View py EN</button>
                <button class="rect-button" onclick="window.location.href='https://example.com/button2';">View py FR</button>
                <button class="rect-button" onclick="window.location.href='https://example.com/button3';">View St FR</button>
            </div>
            
            <h4 id="stepByStep">Step-by-step guide</h4>
            <h5 style="color: #ADD8E6;">Step 1: Install Required Packages</h5>
            
            <p>To work with shapefiles in Stata, you need to use the spmap command. This requires a package called spmap. You also need to install shp2dta to convert shapefiles into Stata data files.</p>
            <p>This can be done using the following code:</p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>
// Install required packages for working with shapefiles
ssc install shp2dta
ssc install spmap
            </code></pre>          
            <h5 style="color: #ADD8E6;">Step 2: Load Shapefiles (Admin 1 and Admin 2)</h5>
            <p>Convert the shapefiles (admin1.shp and admin2.shp) to .dta files using shp2dta.</p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>            
// Convert Admin 1 shapefile to Stata data files
shp2dta using "path/to/admin1.shp", database(admin1_data) coordinates(admin1_coords) genid(id1)

// Convert Admin 2 shapefile to Stata data files
shp2dta using "path/to/admin2.shp", database(admin2_data) coordinates(admin2_coords) genid(id2)

            </code></pre>
            <p> (i). shp2dta using "path/to/admin1.shp": Converts the shapefile into .dta files.</p> 
            <p> (ii). database(admin1_data) and coordinates(admin1_coords): Specify names for the output database and coordinates.</p>
            <p> (iii). genid(id1): Generates a unique ID for each feature.</p>
            
            <h5 style="color: #ADD8E6;">Step 3: Merge Coordinates with Attributes</h5>
            <p>To work with spatial data in Stata, you need to merge the coordinate data with the database that contains attributes.</p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>
// Merge coordinates with attributes for Admin 1
use admin1_data, clear
merge 1:1 id1 using admin1_coords

// Merge coordinates with attributes for Admin 2
use admin2_data, clear
merge 1:1 id2 using admin2_coords
            </code></pre>
                
            <h5 style="color: #ADD8E6;">Step 4: Plot Admin 1 and Admin 2 Overlays</h5>
            <p>Now that the shapefiles have been converted and merged, you can use spmap to plot them.</p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>
// Load Admin 1 and Admin 2 data files
use admin1_data, clear

// Plot Admin 2 (red) first, and then overlay Admin 1 (blue)
spmap using admin2_coords, id(id2) color(red*0.4) || ///
spmap using admin1_coords, id(id1) color(blue*1.2) ///
title("Overlay of Admin 1 and Admin 2 Units") subtitle("Admin 1 (blue) and Admin 2 (red)") ///
legend(off)

            </code></pre>
            <p>(i). spmap using admin2_coords: Plots Admin 2 with the specified coordinate file.</p>
            <p>(ii). id(id2): Uses the unique ID to connect the attributes with the coordinates.</p>
            <p>(iii). color(red*0.4): Specifies a red color for Admin 2 with a line thickness of 0.4.</p>
            <p>(iv). || is used to overlay a second map (Admin 1).</p>
            <p>(v). The second spmap command overlays Admin 1 with a blue color (color(blue*1.2)).</p>
            <p>(vi). title() and subtitle() add a title and subtitle to the plot.</p>
            <p>(vii). legend(off): Removes the legend for a cleaner plot.</p>

            <h3 id="fullCode">Full code</h3>
          
            <pre id="codeBlock">
                <code>
// Install required packages for working with shapefiles
ssc install shp2dta
ssc install spmap

// Convert Admin 1 shapefile to Stata data files
shp2dta using "path/to/admin1.shp", database(admin1_data) coordinates(admin1_coords) genid(id1)

// Convert Admin 2 shapefile to Stata data files
shp2dta using "path/to/admin2.shp", database(admin2_data) coordinates(admin2_coords) genid(id2)

// Merge coordinates with attributes for Admin 1
use admin1_data, clear
merge 1:1 id1 using admin1_coords

// Merge coordinates with attributes for Admin 2
use admin2_data, clear
merge 1:1 id2 using admin2_coords

// Load Admin 1 and Admin 2 data files
use admin1_data, clear

// Plot Admin 2 (red) first, and then overlay Admin 1 (blue)
spmap using admin2_coords, id(id2) color(red*0.4) || ///
spmap using admin1_coords, id(id1) color(blue*1.2) ///
title("Overlay of Admin 1 and Admin 2 Units") subtitle("Admin 1 (blue) and Admin 2 (red)") ///
legend(off)

                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>

            <h3 id="sampleR">Sample results</h3>
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
