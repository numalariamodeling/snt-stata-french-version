body {
    font-family: 'Hubot Sans', sans-serif; /* Changed to Hubot Sans */
    margin: 0;
    display: flex;
    height: 100vh; /* Set the body to take up the full viewport height */
    overflow: hidden; /* Prevent scrolling on body */
}

.container {
    display: flex;
    width: 100vw; /* Full width of the viewport */
    height: 100vh; /* Full height of the viewport */
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

.sidebar {
    width: 25%; /* Sidebar takes 25% of the page */
    background-color: white; /* Sidebar color */
    padding: 20px;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start; 
    overflow-y: auto; /* Allow vertical scrolling */
    overflow-x: hidden; /* Prevent horizontal scrolling */
    box-sizing: border-box; /* Ensure padding is included in the width */
    scrollbar-width: none; /* Hide scrollbar in Firefox */
}

.sidebar::-webkit-scrollbar {
    display: none; /* Hide scrollbar in Chrome, Safari, and Edge */
}

/* Sidebar button grid (2x2) styling */
.sidebar-button-grid {
    display: grid;
    grid-template-columns: 1fr 1fr; /* 2 columns */
    grid-gap: 10px; /* Space between buttons */
    margin-bottom: 20px; /* Space below button grid */
}

.sidebar-button {
    background-color: #003366; /* Dark blue background */
    color: white; /* White text */
    border: none; /* Remove border */
    border-radius: 5px; /* Rounded corners */
    padding: 15px;
    cursor: pointer;
    text-align: center;
    font-size: 16px; /* Adjust font size */
    font-weight: bold;
    underline: none;
}



.sidebar-search-container {
    flex: 0 0 25%; /* Set to take 25% of sidebar */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px; /* Add spacing below the container */
}

.search-bar {
    width: 95%; /* Full width within the container */
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

/* Sidebar content styling */
.sidebar-content {
    flex: 0 0 75%; /* The rest of the sidebar (75%) is for other elements */
}

.ren-button {
    background-color: #47B5FF; /* Light blue background for R En button */
}


.menu {
    margin: 10px 0;
}

.submenu {
    list-style-type: none;
    padding: 0;
    display: none;
    padding-left: 20px; /* Indentation for submenu items */
}

.submenu li {
    margin: 10px 0;
}

.menu-header {
    cursor: pointer; /* Change cursor to pointer for better UX */
    display: flex;
    justify-content: space-between; /* This pushes the menu text to the left and the indicator to the right */
    align-items: center; /* Vertically aligns the text and the indicator */
    background-color: transparent;
}

.menu-indicator {
    font-size: 18px;
    margin-left: auto; /* Ensures that all indicators are aligned at the extreme right */
    color: black;
}

.menu-link {
    color: black;
    text-decoration: none; /* This removes the underline */
}

.menu-link.selected {
    color: #47B5FF; /* Color when selected */
}

.main-content-container {
    display: flex;
    flex-direction: row;
    width: 70%; /* This contains both the main content and the empty space on the right */
    box-sizing: border-box;
    padding-left: 0; /* No padding directly here to allow better control inside the main content */
    gap: 5%; /* Leave a 5% space between the sidebar and the main content */
}

.main-content {
    width: 60%; /* Main content takes up 60% of the total width */
    padding: 20px;
    overflow-y: scroll; /* Allow vertical scrolling for main content */
    overflow-x: hidden; /* Prevent horizontal scrolling */
    display: flex; /* Use flexbox */
    flex-direction: column; /* Stack content vertically */
    box-sizing: border-box; /* Ensure padding is included in the width */
    height: 100%;
    scrollbar-width: none; /* Hide scrollbar in Firefox */
    margin-left: 5%; /* Add 5% space between the sidebar and the main content */
}

.main-content::-webkit-scrollbar {
    display: none; /* Hide scrollbar in Chrome, Safari, and Edge */
}

/* Main content elements take 60% of the available space */
.main-content-block {
    flex: 0 0 60%;
    margin-bottom: 20px; /* Add spacing between elements */
}

.right-empty-space {
    width: 5%; /* Empty space on the right of the main content */
}

pre {
    background-color: #f0f0f0;
    padding: 10px;
    overflow: auto;
    position: relative; /* Add position relative for button positioning */
    width: 100%; /* Ensure pre elements take up the space as needed */
    color: black;    
}

.copy-button {
    position: absolute; /* Position button at the top right */
    top: 10px;
    right: 10px;
    padding: 5px 10px;
    background-color: #47B5FF;
    color: black;
    border-radius: 4px;
    cursor: pointer;
    border: 2px solid black;
}

.text-button {
    background: none;                /* Remove background */
    border: none;                    /* Remove border */
    color: black;                    /* Make the text black */
    cursor: pointer;                 /* Show pointer on hover */
    font-size: 16px;                 /* Adjust font size */
    padding: 0;                      /* Remove default padding */
    margin-right: 10px;              /* Space between buttons */
    text-align: left; 
}


.text-button.selected {
    color: #47B5FF; /* Color when selected */
}

.text-button:hover {
    color: #47B5FF; /* Color when selected */
}

.fixed-buttons {
    display: flex;         /* Use flexbox layout */
    flex-direction: column; /* Stack buttons vertically */
    gap: 10px;  
    position: fixed;                 /* Keep buttons fixed */
    top: 10px;                       /* Adjust as needed */
    right: 20px;                     /* Adjust as needed */
    z-index: 1000;                   /* Ensure buttons are on top */
}

/* Apply to all paragraphs before or after the <pre> block */
pre + p,
pre ~ p,
p + pre,
p ~ pre {
    width: 100%;
    margin: 20px 0;
}

/* Apply to all headings before or after the <pre> block */
pre + h1, pre + h2, pre + h3, pre + h4, pre + h5, pre + h6,
pre ~ h1, pre ~ h2, pre ~ h3, pre ~ h4, pre ~ h5, pre ~ h6,
h1 + pre, h2 + pre, h3 + pre, h4 + pre, h5 + pre, h6 + pre,
h1 ~ pre, h2 ~ pre, h3 ~ pre, h4 ~ pre, h5 ~ pre, h6 ~ pre {
    width: 100%;
    margin: 20px 0;
}

button {
    cursor: pointer;
    margin-top: 10px;
}

.parent {
    height: 100vh;
}

.sidebar, .main-content {
    height: 100%;
}

/* Add media queries for better responsiveness */
@media (min-width: 1024px) {
    .container {
        padding: 20px;
    }
    
    .sidebar {
        width: 25%;
    }
    
    .main-content {
        max-width: 1400px; /* Increase the maximum width on larger screens */
    }
}

@media (max-width: 768px) {
    .sidebar {
        width: 35%;
    }
    
    .main-content {
        padding: 10px;
    }
}