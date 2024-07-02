document.addEventListener('DOMContentLoaded',()=>{
    //DOM요소 가져오기
    const txt1 = document.querySelector('#txt1') ;
    const txt2 = document.querySelector('#txt2') ;

    const bt1 = document.querySelector('#bt1') ;
    const bt2 = document.querySelector('#bt2') ;

    //회문 확인
    bt1.addEventListener('click', (e)=>{
        e.preventDefault();

        console.log(txt1.value) ;
        console.log(txt1.value.length) ; //글자수확인
        console.log(txt1.value.charAt(0)) ; //첫번째글자확인
        for(let c of txt1.value) {  //전체글자확인
            console.log(c) ;
        }

        //거꾸로 읽기
        let tm = '' ;
        for(let i=txt1.value.length -1 ; i >=0 ; i--) {
            tm = tm + txt1.value[i] ;
        }

        console.log(tm) ;

        tm = txt1.value.split('').reverse().join('')
        console.log(tm) ;
    }); 

});