function changeMode(size, weight, transform, background, color) {
    return function(){
    document.body.style.fontSize = size + "px";
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
    }
}
function main() {
    var spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green')
    var darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white')
    var screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black')
    
    var p = document.createElement('p');
    p.textContent = 'Welcome Holberton!';
    document.body.appendChild(p);
    
    var spookyButton = document.createElement('button');
    spookyButton.textContent = 'Spooky';
    spookyButton.onclick = spooky;
    document.body.appendChild(spookyButton);
    
    var darkButton = document.createElement('button');
    darkButton.textContent = 'Dark mode';
    darkButton.onclick = darkMode;
    document.body.appendChild(darkButton);
    
    var screamButton = document.createElement('button');
    screamButton.textContent = 'Scream mode';
    screamButton.onclick = screamMode;
    document.body.appendChild(screamButton);
}
main()
