// 리스트를 보여줄 임시 데이터
const list_items = [
  "ITEM 1",
  "ITEM 2",
  "ITEM 3",
  "ITEM 4",
  "ITEM 5",
  "ITEM 6",
  "ITEM 7",
  "ITEM 8",
  "ITEM 9",
  "ITEM 10",
  "ITEM 11",
  "ITEM 12",
  "ITEM 13",
  "ITEM 14",
  "ITEM 15",
  "ITEM 16",
  "ITEM 17",
  "ITEM 18",
  "ITEM 19",
  "ITEM 20",
  "ITEM 21",
  "ITEM 22",
];

// 리스트 엘리먼트
const list_element = document.getElementById('list'); 
// 페이지네이션 엘리먼트
const pagination_element = document.getElementById('pagination'); 

let current_page = 1;
let rows = 5;


// 리스트를 보여주는 함수
function DisplayList (items, wrapper, rows_per_page, page) {
  wrapper.innerHTML = "";
  page--;
  // page-1을 하는 이유는 1번 페이지에서 page: 0, start: 0으로 시작해야
  // start:0 부터 5개의 데이터를 가져오고 2번 페이지에서는 page:1, start:5가된다.
  let start = rows_per_page * page;
  // 전체 아이템에서 slice로 rows의 개수 만큼 잘라낸다.
  let paginatedItems = items.slice(start, start + rows_per_page);
  
  for (let i = 0; i < paginatedItems.length; i++){
    let item = paginatedItems[i];
    let item_element = document.createElement('div');
    item_element.classList.add('item');
    item_element.innerText = item;
    wrapper.appendChild(item_element);
  };
};

// 페이지 버튼 설정
function SetupPagination(items, wrapper, rows_per_page){
  wrapper.innerHTML = "";
  
  let page_count = Math.ceil(items.length / rows_per_page);
  for (let i = 1; i < page_count + 1; i++){
    let btn = PaginationButton(i, items);
    wrapper.appendChild(btn);
  }
}

// 페이지 버튼
function PaginationButton(page, items){
  let button = document.createElement('button');
  button.innerText = page;

  if (current_page === page) button.classList.add('active');
  
  // 버튼 클릭 시 이벤트
  button.addEventListener('click', () => {
    current_page = page;
    DisplayList(items, list_element, rows, current_page);

    // 이전 버튼 active 클래스 지우고
    let current_btn = document.querySelector('.pagenumbers button.active');
    current_btn.classList.remove('active');

    // 새로 클릭 된 버튼에 active 클래스 추가
    button.classList.add('active');
  });
  return button;
}

DisplayList(list_items, list_element, rows, current_page);
SetupPagination(list_items, pagination_element, rows);


