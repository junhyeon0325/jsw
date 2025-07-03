// 입력상자와 버튼에 접근
let chub = document.querySelector('#add');
let bookListd = document.querySelector('#bookList');
let texti = document.querySelector('#book');

// 도서 목록 저장 배열 생성
let bookarray = [];

// 추가 버튼에 클릭 이벤트 연결
chub.addEventListener('click', chu);

// 배열에 도서 목록 추가
function chu() {
  let textbook = document.querySelector('#book').value;
  if (textbook == "") {
    alert("책제목을 입력하세요");
  } else if (bookarray.indexOf(textbook) != -1) {
    alert("중복된 책제목입니다.")
  } else {
    bookarray.push(textbook);
    
    // 문서에 도서목록 출력(<ul><li>)
    bookListd.innerHTML += `<ul><li>${bookarray[bookarray.length - 1]}</li></ul>`;
    console.log(bookarray)
    texti.value = '';
    texti.focus();
  }
}

// 문서에 도서 목록 삭제


