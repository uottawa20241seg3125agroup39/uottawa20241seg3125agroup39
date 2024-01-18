window.onload = function() {
    setTimeout(function() {
        document.getElementById('genshin').style.opacity = "1";
        var links = document.getElementsByTagName('a');
        for (var i = 0; i < links.length; i++) {
            links[i].target = '_blank';
        }
    } );
};