$(function(){
    let loHref = location.href;
    let startIdx = loHref.indexOf('#')+1;        
    let endIdx = loHref.length;
    let listNum = loHref.substring(startIdx,endIdx);

    $.ajax({
        type:'GET',
        url:`./json/notice-list.json`,
        dataType:'json',

        // 성공
        success:function(data){ 
            let noticeView = data[listNum];
            $('#notice-tit').html(noticeView.noticeTitle);
            $('#notice-date').html(`작성일 : ${noticeView.noticeDate}`);
            $('#notice-hit').html(`조회수 : ${noticeView.noticeHit}`);
            $('#notice-txt').html(noticeView.noticeTxt);
        },

        // 살패
        error:function(){
            alert('죄송합니다. ㅠㅠ');                        
        },
    })
        
    $('#btn-list').click(function(){
        location.href=`./notice.html`;
    })
})