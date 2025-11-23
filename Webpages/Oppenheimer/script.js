function toggleDropdown() {
    const list = document.getElementById("websiteList");
    
    // Check if it is currently visible
    if (list.style.display === "block") {
        list.style.display = "none";
    } else {
        list.style.display = "block";
    }
}
 
