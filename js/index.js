$(function(){
    let ww=$(window).width();
        
    function fnSlider(item){
        var swiper = new Swiper('.swiper',{                                   
            effect:item,
            loop:true,            
            autoplay:{
                delay:3000,
            },
            pagination:{
                el:'.swiper-pagination',
                clickable:true,
            }, 
        });
    }
    

    if(ww>=768){
        fnSlider('fade');
    }else{
        fnSlider('slide');
    }
    
    function fnPopOpen(item){
        $('.popup').eq(item).show();
    }

    $('.top03 .item').click(function(){
        fnPopOpen($(this).index()-1);
    })
    $('.btn-close').click(function(){
        $('.popup').hide();
    })


    noticeList.click(function(e){
        let listNum = noticeList.index(this);
        location.href=`./notice-view.html#${listNum}`;
        e.preventDefault();
    });

})