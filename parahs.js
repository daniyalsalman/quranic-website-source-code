function searchSurah() {
    const input = document.getElementById('searchInput').value.toLowerCase().trim(); 
    const parahContainer = document.getElementById('parahContainer');
    const items = parahContainer.getElementsByClassName('parah-item');

    for (let i = 0; i < items.length; i++) {
        const text = items[i].textContent || items[i].innerText; 
        if (text.toLowerCase().includes(input)) { 
            items[i].style.display = ''; 
        } else {
            items[i].style.display = 'none'; 
        }
    }
}
function toggleAudio(parahNumber) {
    var extraInfo = document.getElementById("parah" + parahNumber + "-info");

    
    if (extraInfo.style.display === "none" || extraInfo.style.display === "") {


        var allExtraInfos = document.querySelectorAll('[id^="parah"][id$="-info"]');
        allExtraInfos.forEach(function(info) {
            info.style.display = "none";  
            info.scrollTop = 0;  
        });


        extraInfo.style.display = "block";

        
        extraInfo.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
        
        extraInfo.style.display = "none";
    }
}







