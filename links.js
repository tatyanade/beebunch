
$( "#accordion" ).accordion();











$(document).ready(function(){
	$("hiddenIcon").hide();
  });













var availableTags = [
	"ActionScript",
	"AppleScript",
	"Asp",
	"BASIC",
	"C",
	"C++",
	"Clojure",
	"COBOL",
	"ColdFusion",
	"Erlang",
	"Fortran",
	"Groovy",
	"Haskell",
	"Java",
	"JavaScript",
	"Lisp",
	"Perl",
	"PHP",
	"Python",
	"Ruby",
	"Scala",
	"Scheme"
];
$( "#autocomplete" ).autocomplete({
	source: availableTags
});



$( "#button" ).button();
$( "#button-icon" ).button({
	icon: "ui-icon-gear",
	showLabel: false
});



$( "#radioset" ).buttonset();



$( "#controlgroup" ).controlgroup();



$( "#tabs" ).tabs();



$( "#research-folder" ).dialog({
	autoOpen: false,
	width: 400,
});

// Link to open the dialog
$( "#research-folder-button" ).click(function( event ) {
	$("hiddenIcon").show();
	$( "#research-folder" ).dialog( "open" );
	event.preventDefault();


});



$( "#pesticides" ).dialog({
	autoOpen: false,
	width: 600,
});


$( "#pesticides-button" ).click(function( event ) {
	$( "#pesticides" ).dialog( "open" );
	event.preventDefault();
});


$( "#jobApp" ).dialog({
	autoOpen: false,
	width: 600,
	height: 500,
});


$( "#jobApp-button" ).click(function( event ) {
	$( "#jobApp" ).dialog( "open" );
	event.preventDefault();
});

$( "#beesWhere" ).dialog({
	autoOpen: false,
	width: 600,
});


$( "#beesWhere-button" ).click(function( event ) {
	$( "#beesWhere" ).dialog( "open" );
	event.preventDefault();
});


$( "#graph" ).dialog({
	autoOpen: false,
	width: 600,
	height: 500,
});


$( "#graph-button" ).click(function( event ) {
	$( "#graph" ).dialog( "open" );
	event.preventDefault();
});


$( "#howToBe" ).dialog({
	autoOpen: false,
	width: 600,
	height: 500,
});


$( "#howToBe-button" ).click(function( event ) {
	$( "#howToBe" ).dialog( "open" );
	event.preventDefault();
});

$( "#developments" ).dialog({
	autoOpen: false,
	width: 600,
	height: 500,
});


$( "#developments-button" ).click(function( event ) {
	$( "#developments" ).dialog( "open" );
	event.preventDefault();
});

// // Link to open the dialog
// $( "#dialog-link" ).click(function( event ) {
// 	$( "#dialog" ).dialog( "open" );
// 	event.preventDefault();
// });












$( "#bills-folder" ).dialog({
	autoOpen: false,
	width: 400,
});



$( "#bills-folder-button" ).click(function( event ) {
	$( "#bills-folder" ).dialog( "open" );
	event.preventDefault();
});



$( "#1folder" ).dialog({
	autoOpen: false,
	width: 359,
});



$( "#1folder-button" ).click(function( event ) {
	$( "#1folder" ).dialog( "open" );
	event.preventDefault();
});


$( "#2folder" ).dialog({
	autoOpen: false,
	width: 340,
});


$( "#2folder-button" ).click(function( event ) {
	$( "#2folder" ).dialog( "open" );
	event.preventDefault();
});


$( "#3folder" ).dialog({
	autoOpen: false,
	width: 300,
});


$( "#3folder-button" ).click(function( event ) {
	$( "#3folder" ).dialog( "open" );
	event.preventDefault();
});

$( "#4folder" ).dialog({
	autoOpen: false,
	width: 455,
	height: 615,
});

$( "#4folder-button" ).click(function( event ) {
	$( "#4folder" ).dialog( "open" );
	event.preventDefault();
});




$( "#img1" ).dialog({
	autoOpen: false,
	width: 230,
	height: 330,
});

$( "#img1-button" ).click(function( event ) {
	$( "#img1" ).dialog( "open" );
	event.preventDefault();
});

$( "#img2" ).dialog({
	autoOpen: false,
	width: 460,
	height: 460,
});

$( "#img2-button" ).click(function( event ) {
	$( "#img2" ).dialog( "open" );
	event.preventDefault();
});

$( "#img3" ).dialog({
	autoOpen: false,
	width: 350,
	height: 430,
});

$( "#img3-button" ).click(function( event ) {
	$( "#img3" ).dialog( "open" );
	event.preventDefault();
});

$( "#img4" ).dialog({
	autoOpen: false,
	width: 330,
	height: 520,
});

$( "#img4-button" ).click(function( event ) {
	$( "#img4" ).dialog( "open" );
	event.preventDefault();
});

$( "#img5" ).dialog({
	autoOpen: false,
	width: 650,
	height: 450,
});

$( "#img5-button" ).click(function( event ) {
	$( "#img5" ).dialog( "open" );
	event.preventDefault();
});


$( "#img6" ).dialog({
	autoOpen: false,
	width: 750,
	height: 430,
});

$( "#img6-button" ).click(function( event ) {
	$( "#img6" ).dialog( "open" );
	event.preventDefault();
});

$( "#img7" ).dialog({
	autoOpen: false,
	width: 715,
	height: 450,
});

$( "#img7-button" ).click(function( event ) {
	$( "#img7" ).dialog( "open" );
	event.preventDefault();
});

$( "#img8" ).dialog({
	autoOpen: false,
	width: 340,
	height: 250,
});

$( "#img8-button" ).click(function( event ) {
	$( "#img8" ).dialog( "open" );
	event.preventDefault();
});

$( "#img9" ).dialog({
	autoOpen: false,
	width: 1050,
});

$( "#img9-button" ).click(function( event ) {
	$( "#img9" ).dialog( "open" );
	event.preventDefault();
});

$( "#img10" ).dialog({
	autoOpen: false,
	width: 520,
	height: 600,
});

$( "#img10-button" ).click(function( event ) {
	$( "#img10" ).dialog( "open" );
	event.preventDefault();
});

$( "#img11" ).dialog({
	autoOpen: false,
	width: 520,
	height: 580,
});

$( "#img11-button" ).click(function( event ) {
	$( "#img11" ).dialog( "open" );
	event.preventDefault();
});









$( "#beeChat" ).dialog({
	autoOpen: false,
	width: 400,
});

$( "#beeChat-button" ).click(function( event ) {
	$( "#beeChat" ).dialog( "open" );
	event.preventDefault();
});


$( "#bMail" ).dialog({
	autoOpen: false,
	width: 600,
});

$( "#bMail-button" ).click(function( event ) {
	$( "#bMail" ).dialog( "open" );
	event.preventDefault();
});


$( "#hiveNet" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
			{
			text: "Try Again Later",
			click: function() {
				$( this ).dialog( "close" );
			}
		},
		{
			text: "Ok",
			click: function() {
				$( this ).dialog( "close" );
			}
		},
		{
			text: "Cancel...   ",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

$( "#hiveNet-button" ).click(function( event ) {
	$( "#hiveNet" ).dialog( "open" );
	event.preventDefault();
});





















$( "#readme" ).dialog({
	autoOpen: false,
	width: 500,
	buttons: [
		{
		text: "Continue",
		click: function() {
			$( this ).dialog( "close" );
			$( "#bossCall" ).dialog( "open" );
		}
	}
	]
});

$( "#readme-button" ).click(function( event ) {
	$( "#readme" ).dialog( "open" );
	event.preventDefault();
});


$( "#bossCall" ).dialog({
	autoOpen: false,
	width: 760,
	height: 560,
	buttons: [
		{
		text: "Open the link",
		click: function() {
			$( this ).dialog( "close" );
			$( "#saveTheBees" ).dialog( "open" );
		}
	}
	]
});

$( "#saveTheBees" ).dialog({
	autoOpen: false,
	width: 600,
	buttons: [
		{
		text: "Email lovemesomebee@beemail.com",
		click: function() {
			$( this ).dialog( "close" );
			$( "#emailEvent1" ).dialog( "open" );
		}
	}
	]
});


$( "#emailEvent1" ).dialog({
	autoOpen: false,
	width: 600,
	buttons: [
		{
		text: "wait For reply",
		click: function() {
			$( this ).dialog( "close" );
			$( "#emailEvent2" ).dialog( "open" );
			$( "#govEmail1" ).dialog( "open" );

		}
	}
	]
});

$( "#emailEvent2" ).dialog({
	autoOpen: false,
	width: 600,
	buttons: [
		{
		text: "I understand",
		click: function() {
			$( this ).dialog( "close" );
			$( "#emailEvent3" ).dialog( "open" );
			$( "#govEmail2" ).dialog( "open" );

		}
	}
	]
});





$( "#emailEvent3" ).dialog({
	autoOpen: false,
	width: 600,
	buttons: [
		{
		text: "Click Link to Learn the Truth",
		click: function() {
			$( this ).dialog( "close" );
			$( "#truthOfHoneyman" ).dialog( "open" );
			$( "#govEmail3" ).dialog( "open" );

		}
	}
	]
});



$( "#truthOfHoneyman" ).dialog({
	autoOpen: false,
	width: 600,
	buttons: [
		{
		text: "Open Attachment",
		click: function() {
			$( this ).dialog( "close" );
			$( "#emailEvent4" ).dialog( "open" );
			$( "#govEmail4" ).dialog( "open" );

		}
	}
	]
});

$( "#emailEvent4" ).dialog({
	autoOpen: false,
	width: 600,
	buttons: [
		{
		text: "Call ILoveTheTruth",
		click: function() {
			$( this ).dialog( "close" );
			$( "#conspiracyCall" ).dialog( "open" );
		}
	}
	]
});


$( "#conspiracyCall" ).dialog({
	autoOpen: false,
	width: 760,
	height: 560,
	buttons: [
		{
		text: "this gives me a lot to think about...",
		click: function() {
			$( this ).dialog( "close" );
			$( "#govEmail5" ).dialog( "open" );
		}
	}
	]
});







$( "#govEmail5" ).dialog({
	autoOpen: false,
	width: 600,
	buttons: [
		{
		text: "hmm...",
		click: function() {
			$( this ).dialog( "close" );
			$( "#govCall" ).dialog( "open" );
		}
	}
	]
});


$( "#govCall" ).dialog({
	autoOpen: false,
	width: 760,
	height: 560,
	buttons: [
		{
		text: "Uh oh",
		click: function() {
			$( this ).dialog( "close" );
			$( "#end1" ).dialog( "open" );
		}
	}
	]
});


$( "#end1" ).dialog({
	autoOpen: false,
	width: 900,
	height: 700,
	buttons: [
		{
		text: "I know what i must do!",
		click: function() {
			$( this ).dialog( "close" );
			$( "#theEnd" ).dialog( "open" );
		}
	}
	]
});


$( "#theEnd" ).dialog({
	autoOpen: false,
	width: 300,
	height: 700,
	buttons: [
		{
		text: "Spread the Truth",
		click: function() {
			location.href = "end.html";
		}
	}
	]
});























$( "#govEmail1" ).dialog({
	autoOpen: false,
	width: 600,
});

$( "#govEmail2" ).dialog({
	autoOpen: false,
	width: 600,
});

$( "#govEmail3" ).dialog({
	autoOpen: false,
	width: 600,
});

$( "#govEmail4" ).dialog({
	autoOpen: false,
	width: 600,
});






















































































$( "#datepicker" ).datepicker({
	inline: true
});



$( "#slider" ).slider({
	range: true,
	values: [ 17, 67 ]
});



$( "#progressbar" ).progressbar({
	value: 20
});



$( "#spinner" ).spinner();



$( "#menu" ).menu();



$( "#tooltip" ).tooltip();



$( "#selectmenu" ).selectmenu();


// Hover states on the static widgets
$( "#dialog-link, #icons li" ).hover(
	function() {
		$( this ).addClass( "ui-state-hover" );
	},
	function() {
		$( this ).removeClass( "ui-state-hover" );
	}
);























