function searchSurah() {
    const input = document.getElementById('searchInput').value.toLowerCase().trim(); 
    const surahContainer = document.getElementById('surahContainer');
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

    if (surahContent.style.display === "none" || surahContent.style.display === "") {
        
        
        const allSurahContents = document.querySelectorAll('.surah-content');
        allSurahContents.forEach(content => {
            content.style.display = "none";
            content.scrollTop = 0;  
        });
        surahContent.style.display = "block";


        surahContent.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
    
        surahContent.style.display = "none";
    }
}


