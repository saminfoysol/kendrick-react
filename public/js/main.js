//define your functions then make them appear on hover
var imageFile = ["url(tpab.jpg)","url(good.png)", "url(damn.jpg)"];
var imageFile2 = ["kendrick_tpab.png","kendrick_gkmc3.png", "kendrick_damn.png"];
var switcher = false;
$("#home").css('background-image', imageFile[1]);

img1 = new Image();
                img2 = new Image();
                img3 = new Image();

                img1.src = "tpab.jpg";
                img2.src = "good.png";
                img3.src = "damn.jpg";

document.getElementById("tpab").addEventListener("mouseover", function(){
    //document.getElementById("home").style.backgroundImage = '-webkit-linear-gradient(top, #eef2f3,#8e9eab)';
    $("#home").css('background-image', imageFile[0]).fadeIn(3000);
    $("#kendrick").fadeIn(3000).attr("src",imageFile2[0]);
    document.getElementById("lyrics-content").innerHTML = "Every nigga is a star When I get signed, homie, I'ma act a fool my name is Uncle Sam, I'm your dog I'm mad but I ain't stressin' I remember you was conflicted, misusing your influence N-E-G-U-S Socks and skinny jeans Sometimes, I did the same	Loving you is complicated The caterpillar is a prisoner to the streets that conceived itWings begin to emerge, breaking the cycle of feeling stagnant What’s your perspective on that? Pac? Pac? Pac?! we gon' be alright and we hate po-po My rights, my wrongs; I write 'til I'm right with God The evils of Lucy was all around me The day I came home No socks and skinny jeans Obama say, 'What it do?'' He said, 'My son, temptation is one thing that I've defeated' embrace your loss. I am God I'm the biggest hypocrite of 2015 The blacker the berry, the sweeter the juice Trial, tribulation, but I know God i Love myself! Walkin around like you God's gift to Earth Make room for mistakes and depression";


    //document.getElementById("main-title").innerHTML = "ok";



   	
});

$("#gkmc").click(function() {
    $('html,body').animate({
        scrollTop: $("#main-gkmc").offset().top + (window.innerHeight / 6)},
        'slow');
});

$("#tpab").click(function() {
    $('html,body').animate({
        scrollTop: $("#main-tpab").offset().top},
        'slow');
});

$("#damn").click(function() {
    $('html,body').animate({
        scrollTop: $("#damn-hero").offset().top},
        'slow');
});

document.getElementById("gkmc").addEventListener("mouseover", function(){

    $("#home").css('background-image', imageFile[1]).fadeIn(3000);
    $("#kendrick").fadeIn(3000).attr("src",imageFile2[1]);
    document.getElementById("lyrics-content").innerHTML = "Lord, forgive me Sometimes I need to be alone C-O-M-P-T-O-N, my city, mobbin' in the street Usually I’m drug-free, but, shit, I’m with the homies Me and the homies  Man down, where you from m.A.A.d city If Pirus and Crips all got along Pour up (drank) All I have in life is my new appetite for failure Halle Berry or hallelujah These bitch-ass niggas killed my brother!  This Piru shit been in me forever And every day that glass mirror get tougher to watch Am I worth it? Did I put enough work in? The good kid, m.A.A.d city Tired of runnin', tired of huntin' the reaper callin, I'm cotton mouth Dyin' of thirst How many sins? I lost count My best days, I stress days your REAL life What love got to do with it when you don't love yourself? Ya bish This is King Kendrick Lamar Lord God, I come to you a sinner All my life I want money and power Poetic justice, poetic justice If I told you that a flower bloomed in a dark room would you trust it? But I could never right my wrongs 'less I write it down for real I can feel the changes Look inside of my soul And you can find gold and maybe get rich Really I'm a sober soul But I'm with the homies right now";
});

document.getElementById("damn").addEventListener("mouseover", function(){
    $("#home").css('background-image', imageFile[2]).fadeIn(3000);
    $("#kendrick").fadeIn(3000).attr("src",imageFile2[2]);
    document.getElementById("lyrics-content").innerHTML = "Is it wickedness? Is it weakness? I seen a woman—a blind woman You've lost… your life. Loyalty, got royalty inside my DNA I got, I got, I got, I got— I know murder, conviction Burners, boosters, burglars, ballers, dead, redemption My DNA not for imitation Mama told me that I'ma work myself to death I'm a Israelite, don't call me Black no mo' Ain't nobody prayin' for me WI can feel it, the dream is more than process What happens on Earth stays on Earth  Why God, why God do I gotta suffer? I beat yo ass, keep talkin' back I do it for Compton go to Cuba, that's the only option Difference between black artists and wack artists I'm a savage, I'm a asshole, I'm a king Sit down be humble (hol up hol up hol up hol up All this money, is God playin' a joke on me? I need some water Damn, love or lust Walk myself to the court like, 'Bitch, I did that!'' X-rated If somebody kill my son, that mean somebody gettin' killed. (Pray for me) Damn! America's reflections of me, that's what a mirror does";
});


$(window).scroll(function () {
    
    var topDivHeight = $("#home").height() + $("#about").height() + ($("#ting").height()*4);
    var viewPortSize = $(window).height();

    var triggerAt = 150;
    var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;

    if ($(window).scrollTop() - (viewPortSize / 2) >= triggerHeight) {
        if (switcher == false){
            switcher = true
        /*$('.home-about-info').slideDown(1000);
        $('.home-about-img').slideDown(1000);
        $(this).off('scroll');*/
        console.log($(window).scrollTop() - (viewPortSize / 2) - triggerHeight);
        //$("#city").css("bottom",(($(window).scrollTop() - (viewPortSize / 2) - triggerHeight)/10) +"px");
        $('#city').animate({
    right: [ "20vw", "linear" ],
    opacity: [1,"linear"],
    width:["150vw","linear"],
    height:["120vh","linear"],
    paddingTop:["10vh","linear"]
}, 900 );
        $('#trees').animate({
    left: [ "20vw", "linear" ]
}, 900 );
        $('#cars').animate({
    left: [ "1vw", "linear" ]
}, 900 );

        $('#gkmc-info').animate({
            opacity: ["0","linear"]
        },1200).animate({
            opacity: ["1","linear"]
        },200);
        //document.getElemenyById("main-tpab").style.webkitAnimationPlayState = "paused";
        //$(this).off('scroll');
    }
    }
    
});

$(window).scroll(function () {
    
    var topDivHeight = $("#home").height() + $("#about").height() + ($("#ting").height()*2.4) + $("#main-gkmc").height();
    var viewPortSize = $(window).height();

    var triggerAt = 150;
    var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;

    if ($(window).scrollTop() - (viewPortSize / 2) >= triggerHeight) {
        /*$('.home-about-info').slideDown(1000);
        $('.home-about-img').slideDown(1000);
        $(this).off('scroll');*/
        console.log($(window).scrollTop() - (viewPortSize / 2) - triggerHeight);
        console.log("anything?");

        //setTimeout(function(){ document.getElementById("main-tpab").style.webkitAnimationPlayState = 'paused'; },2000);
        setTimeout(function(){ document.getElementById("main-tpab").style.backgroundColor = "#87cefa"; },2000);
        setTimeout(function(){ document.getElementById("wings").style.opacity = 1; },2500);
        setTimeout(function(){ document.getElementById("flies1").style.opacity = 1; },2200);
        setTimeout(function(){ document.getElementById("flies2").style.opacity = 1; },2400);
        setTimeout(function(){ document.getElementById("flies3").style.opacity = 1; },2600);
        setTimeout(function(){ document.getElementById("flies4").style.opacity = 1; },2800);
        setTimeout(function(){ document.getElementById("flies5").style.opacity = 1; },3000);

        $("#main-tpab").removeClass("tpab_initial");
        $("#main-tpab").addClass("tpab_triggered");
        setTimeout(function(){ document.getElementById("tpab-info").style.opacity = 1; },3500);

        setTimeout(function(){ document.getElementById("main-tpab").style.animation = "slidedown 1500s infinite linear"; },2000);
        //setTimeout(function(){ document.getElementById("main-tpab").style.webkitAnimationPlayState = 'running'; },2100);
        //get the opacity of the butterflies to come one by one
        //get wings on my guys to show up

        
        //$(this).off('scroll');
    }
    
});

$(window).scroll(function () {
    
    var topDivHeight = $("#home").height() + $("#about").height() + ($("#ting").height()*2.4) + $("#main-gkmc").height() + ($("#tpab-hero").height()/2);
    var viewPortSize = $(window).height();

    var triggerAt = 150;
    var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;

    if ($(window).scrollTop() - (viewPortSize / 2) >= triggerHeight) {
        /*$('.home-about-info').slideDown(1000);
        $('.home-about-img').slideDown(1000);
        $(this).off('scroll');*/
        console.log($(window).scrollTop() - (viewPortSize / 2) - triggerHeight);
        console.log("anything?");

        //setTimeout(function(){ document.getElementById("main-tpab").style.webkitAnimationPlayState = 'paused'; },2000);
        //setTimeout(function(){ document.getElementById("damn-hero").style.backgroundColor = "red"; },2000);
        setTimeout(function(){ document.getElementById("damn-hero").style.background = "red url('pattern6.png')"; },2000);
        setTimeout(function(){ document.getElementById("damn-hero").style.animation = "slideleft 1500s infinite linear"; },2000);
        setTimeout(function(){ document.getElementById("kfk").style.height = "100vh"; },2000);
        setTimeout(function(){ document.getElementById("kfk").style.width = "60vw"; },2000);
        setTimeout(function(){ document.getElementById("kfktext").style.opacity = "1.0"; },2000);
        setTimeout(function(){ document.getElementById("damn-info").style.opacity = "1.0"; },3500);

        /*setTimeout(function(){ document.getElementById("wings").style.opacity = 1; },2500);
        setTimeout(function(){ document.getElementById("flies1").style.opacity = 1; },2200);
        setTimeout(function(){ document.getElementById("flies2").style.opacity = 1; },2400);
        setTimeout(function(){ document.getElementById("flies3").style.opacity = 1; },2600);
        setTimeout(function(){ document.getElementById("flies4").style.opacity = 1; },2800);
        setTimeout(function(){ document.getElementById("flies5").style.opacity = 1; },3000);

        $("#main-tpab").removeClass("tpab_initial");
        $("#main-tpab").addClass("tpab_triggered");
        setTimeout(function(){ document.getElementById("tpab-info").style.opacity = 1; },3500);

        setTimeout(function(){ document.getElementById("main-tpab").style.animation = "slidedown 1500s infinite linear"; },2000);*/
        //setTimeout(function(){ document.getElementById("main-tpab").style.webkitAnimationPlayState = 'running'; },2100);
        //get the opacity of the butterflies to come one by one
        //get wings on my guys to show up

        
        //$(this).off('scroll');
    }
    
});

