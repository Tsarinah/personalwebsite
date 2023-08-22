"use strict";

$(document).ready(function () {
	/* Video Lightbox */
	if (!!$.prototype.simpleLightboxVideo) {
		$('.video').simpleLightboxVideo();
	}

	/*ScrollUp*/
	if (!!$.prototype.scrollUp) {
		$.scrollUp();
	}

	/*Responsive Navigation*/
	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-trigger span").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$(this).removeClass("open");
		} else {
			$("nav#nav-mobile ul").addClass("expanded").slideDown(250);
			$(this).addClass("open");
		}
	});

	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-mobile ul a").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$("#nav-trigger span").removeClass("open");
		}
	});

	/* Sticky Navigation */
	if (!!$.prototype.stickyNavbar) {
		$('#header').stickyNavbar();
	}

	$('#content').waypoint(function (direction) {
		if (direction === 'down') {
			$('#header').addClass('nav-solid fadeInDown');
		}
		else {
			$('#header').removeClass('nav-solid fadeInDown');
		}
	});

});


/* Preloader and animations */
$(window).load(function () { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow-y': 'visible'});

	/* WOW Elements */
	if (typeof WOW == 'function') {
		new WOW().init();
	}

	/* Parallax Effects */
	if (!!$.prototype.enllax) {
		$(window).enllax();
	}

});



const facts = [
    "By 2023, it's estimated that the number of citizen data scientists will grow five times faster than professional data scientists.", "Augmented analytics utilizes machine learning and AI techniques for data sharing and preparation.", "Churn prediction in business analytics helps in understanding customer attrition.", "In sports analytics, data is used to evaluate player performance and strategize game plans.", "Graph analytics is becoming essential in social network analysis to identify influential nodes.", "Quantum computing is set to revolutionize data analytics with tremendous processing power.", "AI-driven development is predicted to be a key trend, with over 40% of new enterprise applications built with AI by 2025.", "Spatial analytics integrates geographical data, essential in urban planning and disaster management.", "Multivariate testing in e-commerce uses analytics to test multiple variables simultaneously.", "Self-service analytics tools are enabling non-experts to analyze and visualize data.", "The word 'photography' means 'writing with light.'", "Cubism, pioneered by Picasso and Braque, broke objects into geometric shapes.", "Impressionism aimed to capture a scene as if someone just glanced at it.", "Digital sculpting is a new art form where artists can create 3D models using digital tools.", "Origami, the Japanese art of paper folding, has inspired many modern engineering designs.", "Art Nouveau was a reaction against the academic art of the 19th century.", "Kinetic art includes moving parts or depends on motion for its effect.", "The Guerrilla Girls use art to address gender and racial inequality within the art world.", "Performance art involves live actions performed by the artist or approved performers.", "Earth art or Land art integrates physical landscapes into site-specific sculptures and performances.", "Art genome projects use data science to create a 'family tree' of art history.", "Artists like Ryoji Ikeda create artworks directly derived from data.", "The use of Virtual Reality in art education relies on data to create immersive learning experiences.", "Algorithms are used in film editing to analyze and predict audience reactions.", "Digital mapping in public art uses analytics to track art installations and engagement.", "AI-generated music compositions apply data algorithms for creativity in the music industry.", "Facial recognition in art galleries is being used to tailor visitor experiences.", "The conservation of digital art involves complex data management and preservation strategies.", "Blockchain technology is used to secure and verify the authenticity of digital art.", "Analyzing data from online art platforms helps artists to price and position their artworks competitively.", "Machine learning algorithms are being developed to detect art forgeries.", "Quantitative analysis of artistic trends helps in identifying emerging genres and styles.", "Data-driven curation in art galleries and museums enhances thematic exhibition planning.", "AI and analytics are used to recreate lost or damaged historical art pieces.", "Augmented reality tools are used in art restoration, supported by data analytics.", "Time-series analysis in art investment helps to predict the long-term value of artworks.", "Image recognition algorithms help in cataloging and managing large art collections.", "Crowdsourced data from social media is being used to explore public engagement with street art.", "Generative adversarial networks (GANs) are used to create new pieces of art.", "Quantitative aesthetic analysis applies data analytics to study and quantify the aesthetics of visual artworks."
];

let typingIndex = 0;
let currentFact = '';

function typeFact() {
    if (typingIndex < currentFact.length) {
        document.getElementById("random-fact").textContent += currentFact.charAt(typingIndex);
        typingIndex++;
        setTimeout(typeFact, 50); // You can adjust the typing speed here
    }
}

function generateRandomFact() {
    typingIndex = 0;
    currentFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("random-fact").textContent = '';
    typeFact();
}

// Generate a random fact immediately when the page loads
generateRandomFact();

// Generate a new random fact every 5 seconds (5000 milliseconds)
setInterval(generateRandomFact, 8000);

