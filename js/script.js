 // Aquí tu código
const lista = document.getElementById('lista');
const agregar = document.getElementById('agregar');
let topFive = 0;

agregar.addEventListener('click', function() {
    
    if (topFive < 5) {
        const destino = prompt('Tu top 5 para las vacaciones 2025:');
        
        if(destino) {
            const nuevoLugar = document.createElement('li');
            nuevoLugar.innerText = destino;

            lista.appendChild(nuevoLugar);
            contador++;
    }else {
            console.log('Necesitas vacaciones!');
      
    } 
}
  
});
