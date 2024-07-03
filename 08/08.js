document.addEventListener('DOMContentLoaded', ()=>{
    //DOM요소 가져오기
    const txt1 = document.querySelector('#txt1') ;
    const btAdds = document.querySelectorAll('.btAdd') ;  //버튼 4개 다 가져오기
    const btDels = document.querySelectorAll('.btDel') ;

    // 배열 만들기
    let arr = [] ;

    //오브젝트 만들기
    let obj = {
        '사과' : '🍎',
        '바나나' : '🍌',
        '오렌지' : '🍊',
        '수박' : '🍉',
    }

    for(let bt of btAdds) {
        bt.addEventListener('click', ()=>{
            console.log(bt.textContent);

            // if (bt.textContent == '사과') {
            //     arr.push('🍎');
            // }
            // else if (bt.textContent == '바나나') {
            //     arr.push('🍌');
            // }
            // else if (bt.textContent == '오렌지') {
            //     arr.push('🍊');
            // }  
            // else if (bt.textContent == '수박') {
            //     arr.push('🍉');
            // } 
            // console.log(arr)

            arr.push(obj[bt.textContent]);   //if문장일때와 동일하지만, obj 한줄로 가능

            txt1.value = arr.join(' ');
        }) ;
    }

    for(let bt of btDels) {
        bt.addEventListener('click', ()=>{
        
        const btkey = bt.textContent.replace('삭제', '');
        console.log(btkey)

        // arr = arr.filter((item)=>{return item != obj[btkey]}) ;
        arr = arr.filter(item => item != obj[btkey]) ;  //콜백함수쓰는규칙 , return문 하나만있을때는 중괄호 생략 가능
        txt1.value = arr.join(' ');
        console.log(arr)

        });
    }

});