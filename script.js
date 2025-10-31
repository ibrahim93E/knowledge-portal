function searchSite() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        const text = section.textContent.toLowerCase();
        section.style.display = text.includes(query) ? "block" : "none";
    });
}