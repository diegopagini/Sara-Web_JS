let arrayDeFotos = [
    {
        url: ("../ASSETS/IMG/1.jpg"),
        descripcion: "cuando tenia 1 mes"
    },
    {
        url: ("../ASSETS/IMG/2.jpg"),
        descripcion: "cuando tenia 2 meses"
    },
    {
        url: ("../ASSETS/IMG/3.jpg"),
        descripcion: "cuando tenia 3 meses"
    },
    {
        url: ("../ASSETS/IMG/4.jpg"),
        descripcion: "cuando tenia 4 meses"
    },
    {
        url: ("../ASSETS/IMG/5.jpg"),
        descripcion: "cuando tenia 5 meses"
    },
    {
        url: ("../ASSETS/IMG/6.jpg"),
        descripcion: "cuando tenia 6 meses"
    },
    {
        url: ("../ASSETS/IMG/7.jpg"),
        descripcion: "cuando tenia 7 meses"
    },
    {
        url: ("../ASSETS/IMG/8.jpg"),
        descripcion: "cuando tenia 8 meses"
    },
    {
        url: ("../ASSETS/IMG/9.jpg"),
        descripcion: "cuando tenia 9 meses"
    },
    {
        url: ("../ASSETS/IMG/10.jpg"),
        descripcion: "cuando tenia 10 meses"
    },
    {
        url: ("../ASSETS/IMG/11.jpg"),
        descripcion: "cuando tenia 11 meses"
    },
    {
        url: ("../ASSETS/IMG/12.jpg"),
        descripcion: "cuando tenia 12 meses"
    },
];

let arrayDeFrases = [
    {
        frase: 'A veces me dicen "Puchi", o "Piccolina", de vez en cuando "Sarita" o "Bambina".'
    },
    {
        frase: 'Nací el 15 de Septiembre, del 2019. A las 9:08 am. Pesé 3kg, y medí 48cm de largo. Era tan chiquita, ahora ya soy más grande!😊'
    },
    {
        frase: 'Me gusta mucho jugar, juego casi todo el dia, bailo, canto, gateo, camino, salto, muerdo, hago de todo. Me encanta jugar en la bañera con el agua y mi papá, la tiro para todos lados. Tambien juego a veces con la comida y mi mamá me reta.'
    },
    {
        frase: '>Me despierto temprano, a veces hago un poco de fiaca en la cama, pero generalmente me despierto lista para jugar. A la tarde hago una siestita, y me vuelvo a despertar para jugar. A la noche si duermo bastante, esta todo apagado y no puedo jugar.😅'
    },
    {
        frase: '>Como de todo, 🍞🥩🍕🥟🥛, pero me gusta lo que puedo morder y hace "crunch", mucho más si puedo hacer muchas miguitas por todos lados.😬'
    },
    {
        frase: 'La primer palabra que dije fué "Mamá", pero ahora digo todo el dia "papá", o "papapapa".'
    },
    {
        frase: 'Ya puedo caminar solita, pero doy 3 o 4 pasos y me aburro, por eso me siento de vuelta, ademas gateando soy rapidisima.🏃‍♀️ Me gusta agarrar todo lo que tenga a mano y tirarlo, done sea, lejos o cera, y si despues no encuentran algo que agarre mejor! 🤣'
    },
    {
        frase: 'En las otras secciones hay fotos y videos! Pasen a verlos!'
    },
    
]

function imprimirFrases() {
    frase = "";
    arrayDeFrases.forEach(el => {
        frase += `<article class="presentation-main__text">
        <p>${el.frase}</p>
        </article>`
    })
    
    document.getElementById('article-container').innerHTML = frase;
}

imprimirFrases();


function pasarArrayDeFotosAlHtml(){
    html = '';
    arrayDeFotos.forEach(el => {
        html += `<li>
                    <img src="${el.url}" class="img-carousel">
                    <p class="p-carousel">${el.descripcion}</p>
                </li>
        `
    });

    document.getElementById('carousel').innerHTML = html;
}

pasarArrayDeFotosAlHtml();

