$(document).ready(function() {

    var controller = new .Controller();
    
    var pinArc = new ScrollMagic.Scene({
        triggerElement: '.panel-one__image',
        triggerHook: 0
    })
    .setPin('.panel-one__image')
    .addTo(controller);
    
})