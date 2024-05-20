$(function(){
    let docHeight = $(document).height(); 
    let winHeight = $(window).height();
    
    $('button').click(function(){
        let thisText = $(this).text();
        let thisString = $(this).prev().children();
        if(thisText=='더보기'){
            $(this).text('접기');
            thisString.show();
        }else{
            $(this).text('더보기');
            thisString.hide();
        }
    })
    
    $(window).resize(function(){
        let ww = $(window).width();                
        if(ww<768){
            $('.col-all p span').show();
            $('button').text('접기');
        }else{
            $('.col-all p span').hide();
            $('button').text('더보기');
        } 
        docHeight = $(document).height();        
        winHeight = $(window).height();       
    })
    $(window).scroll(function(){    
        let scrTop = $(window).scrollTop();
        if(scrTop>=docHeight-winHeight-100){
            setTimeout(function(){
                $('#target-box').load('add-program.html #add-program');
            }, 1000);                
        }           
    })
})