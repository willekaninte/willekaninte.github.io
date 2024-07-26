// Vänta tills DOM är fullständigt laddad
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');

    // Funktion för att hälsa besökaren
    function greetVisitor() {
        const currentHour = new Date().getHours();
        let greeting;

        if (currentHour < 12) {
            greeting = 'God morgon';
        } else if (currentHour < 18) {
            greeting = 'God eftermiddag';
        } else {
            greeting = 'God kväll';
        }

        alert(`${greeting}, välkommen till vår webbplats!`);
    }

    // Anropa hälsningsfunktionen
    greetVisitor();

    // Exempel på en enkel toggle-funktion för en knapp
    const toggleButton = document.getElementById('toggleButton');
    const toggleContent = document.getElementById('toggleContent');

    if (toggleButton && toggleContent) {
        toggleButton.addEventListener('click', function() {
            if (toggleContent.style.display === 'none') {
                toggleContent.style.display = 'block';
                toggleButton.textContent = 'Dölj innehåll';
            } else {
                toggleContent.style.display = 'none';
                toggleButton.textContent = 'Visa innehåll';
            }
        });
    }
});