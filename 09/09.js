document.addEventListener('DOMContentLoaded', ()=>{
    //DOM요소 가져오기
    const lotto = document.querySelector('#lotto');
    const bt = document.querySelector('#bt');

    //로또번호를 저장하는 배열이 필요
    let arr = [] ;

    bt.addEventListener('click', ()=>{
        //배열 초기화
        // arr = [] ;
        arr.length = 0 ;
        //로또 번호 생성
        while(arr.length < 7) {
            const n = Math.floor(Math.random() * 45) + 1 ;

            if (!arr.includes(n)) arr.push(n) ; // 중복숫자없도록 
            console.log(arr)
        }

        //로또 번호 숫자 정렬
        arr.sort((a,b)=>a-b)
        console.log(arr)

        let tm = arr.map(item => 
                    '<span class="sp${Math.floor(item / 10)}">
                        ${item}
                    </span>') ;

        tm.splice(6,0, '<span>+</span>')

        lotto.innerHTML = tm.join('');
    });
});