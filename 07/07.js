document.addEventListener('DOMContentLoaded',()=>{
    //DOM요소 가져오기
    const txt1 = document.querySelector('#txt1') ;
    const txt2 = document.querySelector('#txt2') ;

    const bt1 = document.querySelector('#bt1') ;
    const bt2 = document.querySelector('#bt2') ;

    //회문 확인
    bt1.addEventListener('click', (e)=>{
        e.preventDefault();

        if (txt1.value == '') return ;

        console.log(txt1.value) ; //text 내용 가져오기
        console.log(txt1.value.length) ; //글자수확인
        console.log(txt1.value[1]) ; //문자열 접근 (2번째 글자)
        console.log(txt1.value.charAt(0)) ; //첫번째글자확인
        for(let c of txt1.value) {  //전체글자확인
            console.log(c) ;
        }

        //문자열 뒤집기1 : 반복문으로
        let tm = '' ;
        for(let i=txt1.value.length -1 ; i >=0 ; i--) {
            tm = tm + txt1.value[i] ;
        }

        console.log(tm) ;

        //문자열 변경 -> 공백 제거로 사용
        let txt = txt1.value.replaceAll(' ', '') ;

        //문자열 뒤집기2 : 함수로
        tm = txt1.value.split('').reverse().join('')
        console.log(tm) ;

        //회문인지 확인
        if (txt1.value == tm) {
            txt2.value = '회문입니다' ;
        }
        else {
            txt2.value = '회문이 아닙니다' ;
        }
    }); 

    //숫자 합계
    bt2.addEventListener('click', (e)=>{
        e.preventDefault() ;

        if (txt1.value == '') {
            alert('글자를 입력하세요.') ;
            txt1.focus();
            return ;
        }

        let sum = 0;
        for(let c of txt1.value) {
            if(!isNaN(c)) {    //숫자인지 확인 : 숫자이면 isNaN()결과는 false, 그래서 느낌표를 쓴거임
                sum = sum + parseInt(c) ;
            }
        }

        txt2.value = sum ;
    });
});