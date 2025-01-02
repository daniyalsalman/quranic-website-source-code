function searchSurah() {
    const input = document.getElementById('searchInput').value.toLowerCase().trim(); 
    const parahContainer = document.getElementById('parahContainer');
    const items = surahContainer.getElementsByClassName('surah-item');

    for (let i = 0; i < items.length; i++) {
        const text = items[i].textContent || items[i].innerText; 
        if (text.toLowerCase().includes(input)) { 
            items[i].style.display = ''; 
        } else {
            items[i].style.display = 'none'; 
        }
    }
}
function toggleSurah(element) {
    const surahContent = element.querySelector('.surah-content');

    // If the content is not already visible, make it visible and hide all others
    if (surahContent.style.display === "none" || surahContent.style.display === "") {
        // First, hide all other Surah contents
        const allSurahContents = document.querySelectorAll('.surah-content');
        allSurahContents.forEach(content => {
            content.style.display = "none";  // Hide the other Surah content
        });

        // Then show the clicked Surah content
        surahContent.style.display = "block";
    } else {
        // If the content is already visible, hide it
        surahContent.style.display = "none";
    }
}


