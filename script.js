
function searchFunction() {
   
    var searchTerm = document.getElementById('searchInput').value;

    if (searchTerm.trim() !== '') { 
        var searchQuery = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(searchTerm);
        window.open(searchQuery, '_blank');
        document.getElementById('searchInput').value = '';
    }
}

function showInstructions(emergencyType) {
    var instructionsDiv = document.getElementById('instructions');
    instructionsDiv.innerHTML = '';

    if (emergencyType === 'infract') {
        instructionsDiv.innerHTML = '<h2>Infrakt Instructions</h2><p><ul><li>Call for help and place the person in a comfortable position.</li><li>Make sure there is enough air and keep the person warm .</li><li>Give aspirin if the person is not allergic to it .</li></ul></p>';
        var infractImage=document.createElement("img");
        infractImage.src = "f1.jpg";
        infractImage.alt = "Infract Icon";
        infractImage.style.maxWidth = "300px";  
        infractImage.style.maxHeight = "300px";
        instructionsDiv.appendChild(infractImage);
    } 
    else if (emergencyType === 'breach') {
        instructionsDiv.innerHTML = '<h2>Breach Instructions</h2><p><ul><li>Apply immobilization to the fracture area to prevent movement..</li><li>Apply ice to the fracture area to reduce pain and inflammation .</li><li> Call for medical help.</li></ul></p>';
        var breachImage=document.createElement("img");
        breachImage.src = "f2.jpg";
        breachImage.alt = "Breach Icon";
        breachImage.style.maxWidth = "300px";  
        breachImage.style.maxHeight = "300px";
        instructionsDiv.appendChild(breachImage);
    }
    else if (emergencyType === 'wound') {
        instructionsDiv.innerHTML = '<h2>Wound Instructions</h2><p><ul><li>Alert them and keep the person calm.</li><li>Wash the wound with clean water and soap .</li><li> Apply an antiseptic compound and apply a sterile dressing to protect the wound.</li></ul></p>';
        var woundImage=document.createElement("img");
        woundImage.src = "f3.jpg";
        woundImage.alt = "Wound Icon";
        woundImage.style.maxWidth = "300px"; 
        woundImage.style.maxHeight = "300px";
        instructionsDiv.appendChild(woundImage);
    } 
    else if (emergencyType === 'hypoglycemia') {
        instructionsDiv.innerHTML = '<h2>Hypoglycemia Instructions</h2><p><ul><li>Give the person with hypoglycemia fast sugary food or drink.</li><li>Call for medical help if the person does not improve within a few minutes .</li></ul></p>';
        var hypoglycemiaImage=document.createElement("img");
        hypoglycemiaImage.src = "f4.jpg";
        hypoglycemiaImage.alt = "Hypoglycemia Icon";
        hypoglycemiaImage.style.maxWidth = "300px";  
        hypoglycemiaImage.style.maxHeight = "300px";
        instructionsDiv.appendChild(hypoglycemiaImage);
    } 
    else if (emergencyType === 'accidents') {
        instructionsDiv.innerHTML = '<h2>Accidents Instructions</h2><p><ul><li>Notify and secure the scene of the accident.</li><li>Check the health of the persons involved and provide first aid for wounds and injuries .</li></ul></p>';
        var accidentsImage=document.createElement("img");
        accidentsImage.src = "f5.jpg";
        accidentsImage.alt = "Accidents Icon";
        accidentsImage.style.maxWidth = "300px";  
        accidentsImage.style.maxHeight = "300px";
        instructionsDiv.appendChild(accidentsImage);
    } 
    else if (emergencyType === 'drowing') {
        instructionsDiv.innerHTML = '<h2>Drowing Instructions</h2><p><ul><li>Remove the person from the water safely and start CPR (Cardiopulmonary Resuscitation) if the person is unconscious and not breathing.</li><li> Call for medical help immediately.</li></ul></p>';
       var drowingImage=document.createElement("img");
       drowingImage.src = "f6.jpg";
       drowingImage.alt = "Drowing Icon";
       drowingImage.style.maxWidth = "300px"; 
       drowingImage.style.maxHeight = "300px";
       instructionsDiv.appendChild(drowingImage);
    } 
    else if (emergencyType === 'insects') {
        instructionsDiv.innerHTML = '<h2>Insects Instructions</h2><p><ul><li>Alert them and clean the area around the wound.</li><li>Apply an anti-inflammatory substance and keep the wound moving to prevent the venom from spreading .</li></ul></p>';
        var insectsImage = document.createElement("img");
        insectsImage.src = "f7.jpg";
        insectsImage.alt = "Insects Icon";
        insectsImage.style.maxWidth = "300px"; 
        insectsImage.style.maxHeight = "300px";
        instructionsDiv.appendChild(insectsImage);
    }

    else if (emergencyType === 'fire') {
        instructionsDiv.innerHTML = '<h2>Fire Instructions</h2><p><ul><li>Get away safely and call the fire department.</li><li>Use the help to cover your mouth and nose when you go outside .</li></ul></p>';
        var fireImage = document.createElement("img");
        fireImage.src = "f8.jpg";
        fireImage.alt = "Fire Icon";
        instructionsDiv.appendChild(fireImage);
    
    }
    else if (emergencyType === 'earthquake') {
        instructionsDiv.innerHTML = '<h2>Earthquake Instructions</h2><ul>\
            <li>If you are not convinced that your home is designed to withstand an earthquake, then with the help of a specialist you can reinforce the bearing walls and the connections between the walls and the roof.</li>\
            <li>Try to avoid placing heavy furniture. Secure well on walls, shelves, bookcases, paintings and mirrors. Always place the heaviest objects on the lower shelves.</li>\
            <li>In the kitchen, ensure that the doors of the shelves or drawers where you keep plates, glasses, cups and knives do not open in case of earthquake shaking.</li>\
            <li>Learn where and how to turn off the gas, water and mains water taps.</li>\
            <li>Determine the safest points in the apartment, where to take shelter in case of an earthquake: under the door frames, in the corners of the walls or under the table and the bed.</li>\
            <li>Always keep a first aid kit at home. A flashlight, a battery powered radio. For these, make sure that every member of the family knows where they are.</li>\
            <li>Eliminate any situation that could pose a risk to you and your family in the event of an earthquake.</li>\
            <li><strong>WHAT SHOULD WE DO DURING AN EARTHQUAKE?</strong></li>\
            <li>If you are in a closed place, go immediately under the beam of the apartment, in the door frame or next to a retaining wall.</li>\
            <li>You must be careful of things that can hit you, such as glass, furniture, etc.</li>\
            <li>Be careful when using stairs. They are often a little resistant and can be damaged.</li>\
            <li>It is best to avoid using the elevator. It may be blocked or damaged.</li>\
            <li>Beware of other earthquake consequences, such as bridge collapses, landslides, and gas leaks. If you are outdoors, stay away from tall buildings, trees, electric poles as you can be hit by various materials.</li>\
            <li><strong>WHAT SHOULD WE DO AFTER THE EARTHQUAKE?</strong></li>\
            <li>Make sure the people around you are in good health. Carefully exit the flats.</li>\
        </ul>';
        
        var earthquakeImage = document.createElement("img");
        earthquakeImage.src = "f9.jpg";
        earthquakeImage.alt = "Earthquake Icon";
        instructionsDiv.appendChild(earthquakeImage);
    }
    else if (emergencyType === 'poisoning') {
        instructionsDiv.innerHTML = '<h2>Poisoning Instructions</h2><p><ul><li>Contact your local poison control center or emergency medical services immediately.</li><li>If the person is unconscious, not breathing, or having seizures, call emergency services right away.</li><li>If the person is conscious and alert, try to identify the poison and provide information to the emergency services.</li><li>Do not give the person anything to eat or drink unless instructed by medical professionals.</li></ul></p>';
        var poisoningImage = document.createElement("img");
        poisoningImage.src = "f10.jpg";
        poisoningImage.alt = "Poisoning Icon";
        instructionsDiv.appendChild(poisoningImage);
    }
    else if (emergencyType === 'electric-shock') {
        instructionsDiv.innerHTML = '<h2>Electric Shock Instructions</h2><p><ul><li>Ensure your safety first, do not touch the person without taking precautions.</li><li>Turn off the power source if possible, or move the person away from the source using a non-conductive object.</li><li>Check for breathing and provide CPR if necessary.</li></ul></p>';
        var electricShockImage = document.createElement("img");
        electricShockImage.src = "f11.jpg"; // Replace with the actual image source
        electricShockImage.alt = "Electric Shock Icon";
        electricShockImage.style.maxWidth = "300px";
        electricShockImage.style.maxHeight = "300px";
        instructionsDiv.appendChild(electricShockImage);
    }
    else if (emergencyType === 'heat-stroke') {
        instructionsDiv.innerHTML = '<h2>Heat Stroke Instructions</h2><p><ul><li>Move the person to a cool place and remove excess clothing.</li><li>Apply cool compresses to the person\'s body or immerse them in cool water.</li><li>Provide fluids and monitor their condition.</li></ul></p>';
        var heatStrokeImage = document.createElement("img");
        heatStrokeImage.src = "f12.jpg"; // Replace with the actual image source
        heatStrokeImage.alt = "Heat Stroke Icon";
        heatStrokeImage.style.maxWidth = "300px";
        heatStrokeImage.style.maxHeight = "300px";
        instructionsDiv.appendChild(heatStrokeImage);
    }
    else if (emergencyType === 'snake-bite') {
        instructionsDiv.innerHTML = '<h2>Snake Bite Instructions</h2><p><ul><li>Keep the bitten limb immobilized and at or below heart level.</li><li>Remove tight clothing and jewelry near the bite site.</li><li>Do not try to suck out the venom or make any incisions.</li></ul></p>';
        var snakeBiteImage = document.createElement("img");
        snakeBiteImage.src = "f13.jpg"; // Replace with the actual image source
        snakeBiteImage.alt = "Snake Bite Icon";
        snakeBiteImage.style.maxWidth = "300px";
        snakeBiteImage.style.maxHeight = "300px";
        instructionsDiv.appendChild(snakeBiteImage);
    }

}


// Map
document.addEventListener("DOMContentLoaded", function() {
    var map = document.getElementById("map");
    var mapToggle = document.getElementById("mapToggle");
    map.style.display = "none";

    function toggleMap() {
        if (map.style.display === "none") {
            map.style.display = "block";
        } else {
            map.style.display = "none";
        }
    }
    mapToggle.addEventListener("click", toggleMap);
});


// Footer

function callNumber(number) {
    window.location.href = 'tel:' + number;
}

function handleFileSelect() {
    const input = document.getElementById('cameraInput');
    const image = document.getElementById('selectedImage');

    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            image.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
}