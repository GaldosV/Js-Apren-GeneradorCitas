
// Array de objetos que contiene todas las citas,fuentes y años  
var quotes = [
	{
	quote: "Se quien eres y di lo que sientes, porque a los que les importa no importan y a los que importan no les importa.",
	source: "Dr. Seuss"
	},
	{
	quote: "Esto también, pasará.",
	source: "Anonimo"
	},
	{
	quote: "Mantén tus ojos en las estrellas y tus pies en el suelo.",
	source: "Theodore Roosevelt"
	},
	{
	quote: "La única persona que deberías tratar de ser mejor es la persona que fuiste ayer.Choca hermano",
	source: "Pablo Rivero"
	},
	{
	quote: "Nunca te dejes intimidar por el silencio. Nunca te permitas ser una víctima. No aceptes la definición de tu vida de nadie; definete a ti mismo.",
	source: "Harvey Fierstein"
	},
	{
	quote: "La fe es el arte de aferrarse a las cosas que tu razón una vez aceptó, a pesar de tus cambios de humor.",
	source: "C.S. Lewis"
	},
	{
	quote: "Un hombre que huye de su miedo puede encontrar que solo ha tomado un atajo para encontrarlo.",
	source: "Sador", 
	citation: "Hijos de Hurín" 
	},
	{
	quote:  "La vida es demasiado misteriosa para tomarla demasiado en serio.",
	source: "Mary Engelbreit"
	},
	{
	quote: "Si me llevo el dron a escalar, seguro que no pasa nada",
	source: "Pablo rivero"
	},
	{
	quote: "Cuando te juntas con tus brodas todas tus neuronas se reducen y chocan.",
	source: "Anonimo"
	},
	{
	quote: "No hay placer como tirar piedras grandes al agua o colina abajo ",
	source: "Anonimo"
	},
	{
	quote: "Nadie puede hacerte sentir inferior sin tu consentimiento.",
	source: "Eleanor Roosevelt"
	},
	{
	quote: " La mujer que sigue a la multitud normalmente no irá más allá de la multitud. Es probable que la mujer que camina sola se encuentre en lugares en los que nadie ha estado antes",
	source: "Albert Einstein"
	},
	{
	quote: "Bro si quieres conseguir algo aunque sea dedicale 30 minutos al dia ",
	source: "Pablo Big Brain Rivero"
	},
	{
	quote: "Si quieres ir rápido, ve solo. Si quieres llegar lejos, ve acompañado.",
	source: "Proverbio Africano"
	},
	{
	quote: "Está bien no estar bien, siempre y cuando no sigas así.",
	source: "Anonimo"
	},
	{
	quote: "Puedo ser cambiada por lo que me sucede pero me niego a ser reducido por ello",
	source: "Maya Angelou"
	},
	{
	quote: "Cree que puedes y estás a mitad de camino.",
	source: "T. Roosevelt"
	},
	{
	quote: "Nada en la vida hay que temer, sólo hay que comprender. Ahora es el momento de comprender más para temer menos",
	source: "Marie Curie"
	},
	{
	quote: "Se supone que tiene que ser difícil. Si fuera fácil, todo el mundo lo haría.",
	source: "Jimmy Dugan",
	citation: "A League of Their Own"
	}
];

//Function que elige selecciona da un valor aleatorio a una cita al azar y devuelve una cita del array
function getRandomQuote () {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	var randomQuote = quotes[randomNumber];
	return randomQuote;
}	

//Function que selecciona un color RGB aleatorio
function getRandomColor () {
	var red = Math.floor(Math.random() * 256 );
	var green = Math.floor(Math.random() * 256 );
	var blue = Math.floor(Math.random() * 256 );
	 var randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}

//Funcion que llama la funcion  getRandomQuote y guarda el obejto devuelto en una variable
//Construye un String que contiene las diferentes propiedades del objeto "quote " 
function printQuote () {
		var quotes = getRandomQuote ();
		var quoteContainer = document.getElementById("quote-box");
		var quoteString = `<p class="quote">${quotes.quote}</p><p class="source">${quotes.source}`;
				if (quotes.citation) {quoteString += `<span class="citation">${quotes.citation}</span>`}
				if (quotes.year) {quoteString += `<span class="year">${quotes.year}</span></p>`}
				else {quoteString += '</p>'};
					quoteContainer.innerHTML = quoteString;

					//asigna un color de fondo aleatorio 
					document.body.style.backgroundColor = getRandomColor ();
}

//La cita re refresca cada 15 segundos
window.setInterval(function(){
printQuote ();
}, 15000);

//Event listener en boton LoadQuote que genera una nueva cita		
document.getElementById("loadQuote").addEventListener("click", printQuote, false);






	
