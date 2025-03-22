$(document).ready(function(){
    $(' .menuToggle').click(function () {
        $(' .navegation').toggleClass('active');
    
    });
    $(' .list').click(function (){
        $(' .list').removeClass(' active');
        $(this).addClass(' active');
    });
});