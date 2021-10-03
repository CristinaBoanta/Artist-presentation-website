var slideIndex = 0;
// afisarea primei imagini
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	// se calculeaza pozitia imaginilor care se vor afisa
	// daca se da next si adauga 1 la valoarea indexului
	// daca se da prev se scade 1 din valoarea indexului
	
  showSlides(slideIndex = slideIndex + n);
}


function showSlides(n) {
    var i;
	// array care salveaza cele 3 imagini - pe pozitia 0, 1 , 2
    var slides = document.getElementsByClassName("mySlides");
	
	// daca se ajunge cu indexul la pozitia 3 care este undifiend in Array
	// atunci se va reseta indexul cu pozitia 0 pentru a afisa din nou prima imagine
	if (n > slides.length-1) {
	  slideIndex = 0;
    }
	// daca se ajunge la pozitia -1 din array, se recalculeaza pozitia
	// cu 3 - 1
    if (n < 0) {
	  slideIndex = slides.length-1;
    }
	// se acund toate imaginile ca apoi sa se afiseze doar cea curenta
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

	// afisam imaginea curenta cu diplay block
    slides[slideIndex].style.display = "block";

}