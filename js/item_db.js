const ITEM_INFO = [
    {item_code: 'XP9167F', cate: 'women', cate_detail: 'bottom', title: '블랙라벨 시그니처 380N 레깅스 1+1', o_price: 52800, s_price : 118000, review: 54957, desc: '디스패치 선정 셀럽 선호 레깅스 1위 #누적판매 100만', ec_desc: '', item_info_1: 5, item_info_2: 2, item_info_3: '', item_hot: '주문폭주', color: ''}, 
    {item_code: 'XP9157T', cate: 'women', cate_detail: 'bottom', title: '블랙라벨 시그니처 360N 레깅스 1+1', o_price: 98000, s_price : 49800, review: 58105, desc: '누적판매 230만 #360N 시리즈 #쫀득 텍스처', ec_desc: '', item_info_1: 5, item_info_2: 2, item_info_3: '', item_hot: '주문폭주', color: ''}, 
    {item_code: 'XP9156T', cate: 'women', cate_detail: 'bottom', title: 'V업 3D 플러스 레깅스 1+1', o_price: 78000, s_price : 29800, review: 192649, desc: '[20컬러] 누적판매 500만 #국민레깅스 1위', ec_desc: '', item_info_1: 5, item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: ''}, 
    {item_code: 'XP9181F', cate: 'women', cate_detail: 'bottom', title: '스트레치 밴딩 9부 슬랙스 1+1', o_price: 98000, s_price : 59800, review: 6151, desc: ' 레깅스의 편안함과 슬랙스의 핏을 그대로!', ec_desc: '', item_info_1: 5, item_info_2: '', item_info_3: '', item_hot: '', color: ''}, 
    {item_code: 'XA5380G', cate: 'women', cate_detail: 'bottom', title: '퍼포먼스 조거팬츠 1+1', o_price: 104000, s_price : 64800, review: 8289, desc: ' 무릎 나오지 않는 편안한 조거팬츠 #주문폭주', ec_desc: '', item_info_1: 5, item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: ''}, 
    {item_code: 'XT4108E', cate: 'women', cate_detail: 'top', title: '아이스페더 숏슬리브 1+1 ', o_price: 56000, s_price : 30800, review: 129273, desc: ' 우먼즈 상의 1위 #누적판매 275만', ec_desc: '', item_info_1: 5, item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: ''}, 
    {item_code: 'XP9168F', cate: 'women', cate_detail: 'bottom', title: '블랙라벨 시그니처 360N 부츠컷 팬츠 1+1', o_price: 88000, s_price : 56800, review: 14579, desc: ' 일상부터 운동까지 모든 순간 함께 하는 #착붙팬츠', ec_desc: '', item_info_1: 5, item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: ''}, 
    {item_code: 'XWFST03H2', cate: 'women', cate_detail: 'top', title: '아이스페더 크롭 숏슬리브 1+1', o_price: 58000, s_price : 29800, review: 3264, desc: '크롭 기장으로 더 산뜻한 상의 No.1 아이스페더', ec_desc: '', item_info_1: 5, item_info_2: '', item_info_3: '', item_hot: '', color: ''}, 
    {item_code: 'XWFSG01H2', cate: 'women', cate_detail: 'bottom', title: '젤라 인텐션 바이커 쇼츠 5부 1+1', o_price: 72000, s_price : 34800, review: 8765, desc: '', ec_desc: '', item_info_1: 5, item_info_2: 1, item_info_3: '', item_hot: '주문폭주', color: ''}, 
    {item_code: 'XWFLT04H3', cate: 'women', cate_detail: 'top', title: '아이스페더 롱슬리브 2.0 1+1', o_price: 78000, s_price : 49800, review: 0, desc: '상의 판매 1위 아이스페더, 롱슬리브로도 즐겨요!', ec_desc: '[9/22(금) 2PM까지 5% 신상할인]', item_info_1: 5, item_info_2: 0, item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XWFHZ01H3', cate: 'women', cate_detail: 'top', title: '포인트 하프집업 아노락 얼쓰그린', o_price: 79000, s_price : 69000, review: 308, desc: '', ec_desc: '', item_info_1: 0, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XWFSK03H3', cate: 'women', cate_detail: 'bottom', title: '배색 라인 플레어 스커트 얼쓰그린', o_price: 56000, s_price : 43700, review: 0, desc: '이너 쇼츠 내장 투인원 디자인으로 더욱 자유롭게!', ec_desc: '[9/22(금) 2PM까지 5% 신상할인]', item_info_1: 0, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XXURF01H1', cate: 'shoes', cate_detail: 'shoes', title: 'X-1 라이트핏 크림네이비', o_price: 109000, s_price : 89000, review: 770, desc: '', ec_desc: '', item_info_1: 3, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XXURF01H1_white', cate: 'shoes', cate_detail: 'shoes', title: 'X-1 라이트핏 오프화이트', o_price: 109000, s_price : 89000, review: 770, desc: '', ec_desc: '', item_info_1: 3, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XED200R', cate: 'shoes', cate_detail: 'shoes', title: '젝시 크롭삭스 블랙', o_price: 4900, s_price : 4900, review: 3450, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XT2223H', cate: 'mens', cate_detail: 'mens', title: '프렌치 테리 오버핏 숏슬리브', o_price: 52000, s_price : 42000, review: 563, desc: "운동과 일상의 경계를 허무는 캐주얼한 디자인", ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: 3},
    {item_code: 'XP2224H', cate: 'mens', cate_detail: 'mens', title: '프렌치 테리 자수로고 스웨트 쇼츠', o_price: 52000, s_price : 42000, review: 488, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: 3}, 
    {item_code: 'XE1101H', cate: 'shoes', cate_detail: 'shoes', title: 'XXMX 크루삭스', o_price: 6900, s_price : 6900, review: 1429, desc: '', ec_desc: '', item_info_1: 3, item_info_2: '', item_info_3: '', item_hot: '', color: 4}, 
    {item_code: 'XS0202H', cate: 'shoes', cate_detail: 'shoes', title: 'X-핏 러너 1+1', o_price: 218000, s_price : 139800, review: 2685, desc: '[new color 추가] 슈즈 역대 최단기간 판매 1위', ec_desc: '', item_info_1: 5, item_info_2: 3, item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XS0202H_white', cate: 'shoes', cate_detail: 'shoes', title: 'X-핏 러너 퓨어화이트', o_price: 109000, s_price : 89000, review: 2685, desc: '[new color 추가] 슈즈 역대 최단기간 판매 1위', ec_desc: '', item_info_1: 5, item_info_2: 3, item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XT4205F', cate: 'women', cate_detail: 'top', title: '블랙라벨 시그니처 380N 서포트탑', o_price: 78000, s_price : 52800, review: 13004, desc: '', ec_desc: '', item_info_1: 5, item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XT8102E', cate: 'women', cate_detail: 'top', title: '하이디 베이직 브라탑 1+1', o_price: 58000, s_price : 49800, review: 37210, desc: '브라탑 판매 1위 #누적판매 52만', ec_desc: '', item_info_1: 5, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XA5203T', cate: 'women', cate_detail: 'top', title: '헤바 크롭탑 1+1', o_price: 42000, s_price : 34800, review: 25690, desc: '젝시믹스 No.1 크롭탑 #국민크롭탑', ec_desc: '', item_info_1: 5, item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XGFJK01H2', cate: 'golf', cate_detail: 'golf', title: '하이넥 돌먼슬리브 윈드자켓 블랙', o_price: 98000, s_price : 98000, review: 531, desc: '필드 위 바람을 가르는 여유로운 라운딩, 스타일까지 겸비한 활용 만점 필드 웨어', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'GT3002G', cate: 'golf', cate_detail: 'golf', title: '메쉬 패디드 볼레로 아이보리', o_price: 59000, s_price : 59000, review: 1761, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XGFSK01H2', cate: 'golf', cate_detail: 'golf', title: '백 플리츠 스트레치 스커트 블랙', o_price: 128000, s_price : 128000, review: 399, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XS0101G', cate: 'shoes', cate_detail: 'shoes', title: '데이라이트 코트 하프블랙', o_price: 99000, s_price : 79000, review: 1427, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XGFCP01H2', cate: 'golf', cate_detail: 'golf', title: '필드 슬라이드 바이저', o_price: 62000, s_price : 62000, review: 402, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: 4},
    {item_code: 'KA1008G_KA1009G', cate: 'kids', cate_detail: 'kids', title: '액티브 키즈 SET', o_price: 148000, s_price : 99800, review: 143, desc: '', ec_desc: '', item_info_1: 5, item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'KA1018G_KA1019G', cate: 'kids', cate_detail: 'kids', title: '젤리 키즈 SET', o_price: 111000, s_price : 79800, review: 159, desc: '', ec_desc: '', item_info_1: 5, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'KP1502G', cate: 'kids', cate_detail: 'kids', title: '젤라 키즈 7부 레깅스 1+1', o_price: 38000, s_price : 27800, review: 460, desc: '', ec_desc: '', item_info_1: 5, item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'KA1016G_KA1017G', cate: 'kids', cate_detail: 'kids', title: '시티워커 키즈 SET', o_price: 126000, s_price : 89800, review: 30, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'KA1031G_KA1032G', cate: 'kids', cate_detail: 'kids', title: '믹스 키즈 SET', o_price: 118000, s_price : 89800, review: 377, desc: '', ec_desc: '', item_info_1: 5, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XWFTP05H3', cate: 'women', cate_detail: 'bottom', title: '하타 홀 하렘팬츠 화이트스완', o_price: 54000, s_price : 41800, review: 0, desc: '', ec_desc: '[9/25(월) 2PM까지 5% 신상할인]', item_info_1: 0, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XED190B', cate: 'shoes', cate_detail: 'shoes', title: '요가삭스', o_price: 12000, s_price : 8000, review: 63721, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: 8},
    {item_code: 'XED190B_XED190A', cate: 'shoes', cate_detail: 'shoes', title: '요가삭스 1+1', o_price: 24000, s_price : 11800, review: 76820, desc: '[요가삭스+유발삭스 교차구매 가능] 양말 판매 1위', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XWFLT05H3', cate: 'women', cate_detail: 'top', title: '멜팅 터치 스트링 볼레로 화이트스완', o_price: 49000, s_price : 37000, review: 0, desc: '레이어드 코디에 제격 #스트링으로 다양한 연출 가능!', ec_desc: '[9/25(월) 2PM까지 5% 신상할인]', item_info_1: 0, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XE1702G', cate: 'shoes', cate_detail: 'shoes', title: '블랙라벨 요가삭스 1+1', o_price: 28000, s_price : 24800, review: 987, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XUMUP01H0', cate: 'mens', cate_detail: 'mens', title: '엑스모노그램 에어드로즈 1+1', o_price: 26000, s_price : 22800, review: 2805, desc: '초경량 메쉬 쿨링 드로즈 #뛰어난 통기성', ec_desc: '', item_info_1: 1, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XT2209G_XP2210G', cate: 'mens', cate_detail: 'mens', title: '플래쉬로고 SET', o_price: 173000, s_price : 129800, review: 1700, desc: '', ec_desc: '', item_info_1: 1, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XO2225H_XP2229H', cate: 'mens', cate_detail: 'mens', title: '액티브 플레이어 조거팬츠 SET', o_price: 185000, s_price : 129800, review: 334, desc: '', ec_desc: '', item_info_1: '1', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XP2169G', cate: 'mens', cate_detail: 'mens', title: '하디 스트레치 카고 쇼츠 1+1', o_price: 128000, s_price : 74800, review: 2154, desc: '', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 5, item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XMMST01H2', cate: 'mens', cate_detail: 'mens', title: '머슬핏 듀얼라이트 숏슬리브 1+1', o_price: 78000, s_price : 39800, review: 1382, desc: "윤성빈's PICK!", ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 5, item_info_2: 2, item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XT2218G', cate: 'mens', cate_detail: 'mens', title: '머슬핏 듀얼 롱슬리브 1+1', o_price: 88000, s_price : 59800, review: 1276, desc: '', ec_desc: '', item_info_1: 2, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XT2217G', cate: 'mens', cate_detail: 'mens', title: '퓨어코튼 아치로고 슬리브리스 1+1', o_price: 84000, s_price : 44800, review: 812, desc: `윤성빈's PICK!<br>운동하는 남자의 리얼 짐웨어`, ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XT2145F', cate: 'mens', cate_detail: 'mens', title: '윈드 테크 롱슬리브', o_price: 59000, s_price : 59000, review: 1849, desc: '', ec_desc: '', item_info_1: 1, item_info_2: '', item_info_3: '', item_hot: '', color: 5},
    {item_code: 'XP2159F', cate: 'mens', cate_detail: 'mens', title: '컴포터블 카고 조거팬츠', o_price: 54000, s_price : 62000, review: 7217, desc: '맨즈 조거팬츠 판매 1위', ec_desc: '', item_info_1: 1, item_info_2: '', item_info_3: '', item_hot: '', color: 6},
    {item_code: 'XP2124F', cate: 'mens', cate_detail: 'mens', title: '베이스 레이어 레깅스', o_price: 36000, s_price : 24000, review: 7684, desc: '', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 5, item_info_2: 1, item_info_3: '', item_hot: '', color: 2},
    {item_code: 'XP0107T', cate: 'mens', cate_detail: 'mens', title: '엑시드 쿨링 5인치 쇼츠', o_price: 34000, s_price : 34000, review: 3590, desc: '', ec_desc: '', item_info_1: 1, item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: 4},
    {item_code: 'XP2113F', cate: 'mens', cate_detail: 'mens', title: '멀티플 액션 6인치 쇼츠 1+1', o_price: 88000, s_price : 68800, review: 6412, desc: '', ec_desc: '', item_info_1: 1, item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XT2223H_XP2224H', cate: 'mens', cate_detail: 'mens', title: '프렌치 테리 SET', o_price: 104000, s_price : 79800, review: 869, desc: "[숏슬리브+쇼츠 셋업] 윤성빈's PICK!", ec_desc: '', item_info_1: 2, item_info_2: 0, item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XMMHZ40H3', cate: 'mens', cate_detail: 'mens', title: '프렌치 테리 하프집업 스웨트셔츠 네이비', o_price: 82000, s_price : 72000, review: 21, desc: "편안한 루즈 핏 #셋업 스타일링<br>윤성빈's PICK!", ec_desc: '', item_info_1: 2, item_info_2: 0, item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XO2227H', cate: 'mens', cate_detail: 'mens', title: '컬러블록 라이트 윈드자켓 에픽네이비', o_price: 88000, s_price : 78000, review: 211, desc: '', ec_desc: '', item_info_1: 1, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XMMHZ01H2', cate: 'mens', cate_detail: 'mens', title: '스트레치 트레이닝 아노락 블랙', o_price: 79000, s_price : 69000, review: 212, desc: '', ec_desc: '', item_info_1: 1, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XP2226H', cate: 'mens', cate_detail: 'mens', title: '액티브 플레이어 6인치 쇼츠 블랙', o_price: 52000, s_price : 42000, review: 343, desc: '', ec_desc: '', item_info_1: 1, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XP2186G', cate: 'mens', cate_detail: 'mens', title: '플렉스 라운지 쇼츠 블랙', o_price: 42000, s_price : 52000, review: 640, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XP2122F_XP2123F', cate: 'mens', cate_detail: 'mens', title: '탄성팬츠 테이퍼드핏 9.0&9.5 블랙', o_price: 62000, s_price : 59800, review: 3858, desc: '입는 순간 탄성! #맨즈 하의 누적판매 1위 #데일리팬츠', ec_desc: '', item_info_1: 1, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XMMTP40H3', cate: 'mens', cate_detail: 'mens', title: '프렌치 테리 루즈핏 조거팬츠 블랙', o_price: 79000, s_price : 69000, review: 35, desc: '편안함은 기본, 탄탄한 아웃핏까지!', ec_desc: '', item_info_1: 2, item_info_2: 0, item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XP2133F', cate: 'mens', cate_detail: 'mens', title: '탄성 조거팬츠', o_price: 59000, s_price : 49000, review: 1796, desc: '', ec_desc: '', item_info_1: 1, item_info_2: '', item_info_3: '', item_hot: '', color: 3},
    {item_code: 'XMMTP02H2', cate: 'mens', cate_detail: 'mens', title: '컴포터블 카고 조깅스 블랙', o_price: 74000, s_price : 64000, review: 600, desc: '', ec_desc: '', item_info_1: 1, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XMMTP01H2', cate: 'mens', cate_detail: 'mens', title: '데일리 라이트 조깅스 블랙', o_price: 62000, s_price : 52000, review: 369, desc: '', ec_desc: '', item_info_1: 1, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XP2200G', cate: 'mens', cate_detail: 'mens', title: '사이드라인 조깅스 블랙', o_price: 59000, s_price : 29000, review: 734, desc: '', ec_desc: '', item_info_1: 6, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XT2192G', cate: 'mens', cate_detail: 'mens', title: '데일리 에코티브 롱슬리브', o_price: 40000, s_price : 30000, review: 994, desc: '', ec_desc: '', item_info_1: 4, item_info_2: 1, item_info_3: '', item_hot: '', color: 5},
    {item_code: 'XT2219G', cate: 'mens', cate_detail: 'mens', title: '머슬핏 듀얼 슬리브리스 1+1', o_price: 72000, s_price : 42800, review: 1424, desc: '', ec_desc: '', item_info_1: 2, item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XT0105T', cate: 'mens', cate_detail: 'mens', title: '러닝 플레이어 숏슬리브 1+1', o_price: 54000, s_price : 39800, review: 8073, desc: '', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 6, item_info_2: 5, item_info_3: 2, item_hot: '주문폭주', color: ''},
    {item_code: 'XT2130F', cate: 'mens', cate_detail: 'mens', title: '트리플 포인트 숏슬리브 1+1', o_price: 78000, s_price : 39800, review: 3037, desc: '', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 6, item_info_2: 5, item_info_3: 2, item_hot: '주문폭주', color: ''},
    {item_code: 'XA5467H', cate: 'women', cate_detail: 'top', title: 'XXMX 세미 루즈핏 티셔츠 1+1', o_price: 78000, s_price : 42800, review: 3629, desc: '', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 5, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XA5392G', cate: 'women', cate_detail: 'top', title: '아이스페더 오버핏 티셔츠 1+1', o_price: 68000, s_price : 34800, review: 9972, desc: '상의 No.1 아이스페더 오버핏 버전', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 5, item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XA5353F', cate: 'women', cate_detail: 'top', title: '베이직 롱슬리브 티셔츠 1+1', o_price: 88000, s_price : 64800, review: 1243, desc: 'new color<br>여유로운 루즈핏 티셔츠 #힙 라인 완벽 커버', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XA5298T', cate: 'women', cate_detail: 'top', title: '아이스페더 컴포트 숏슬리브 1+1', o_price: 58000, s_price : 29800, review: 43027, desc: '레귤러핏 아이스페더 #누적판매 275만', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 5, item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XWFST08H2', cate: 'women', cate_detail: 'top', title: '소프트 텐션 라운드 크롭탑 1+1', o_price: 62000, s_price : 34800, review: 141, desc: '', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 5, item_info_2: 0, item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XT4355G', cate: 'women', cate_detail: 'top', title: '젤라라이트 라운드 크롭탑 1+1', o_price: 58000, s_price : 29800, review: 15615, desc: '', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 5, item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XWFST01H2', cate: 'women', cate_detail: 'top', title: '아이스페더 숏슬리브 2.0 1+1', o_price: 58000, s_price : 32800, review: 2422, desc: '한 번 더 진화한 아이스페더 #누적판매 275만', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 5, item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XT4316F', cate: 'women', cate_detail: 'top', title: '프레쉬페더 트위스트 크롭 숏슬리브 1+1', o_price: 56000, s_price : 29800, review: 14164, desc: '', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 5, item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XA5299T', cate: 'women', cate_detail: 'top', title: '올데이페더 크롭탑 1+1', o_price: 58000, s_price : 36800, review: 127335, desc: '상의 No.1 아이스페더 긴팔 크롭 버전', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XT4372G', cate: 'women', cate_detail: 'top', title: '모크넥 슬림핏 롱슬리브 1+1', o_price: 84000, s_price : 56800, review: 3584, desc: '', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XTFLT02H3', cate: 'women', cate_detail: 'top', title: '실키 모크넥 크롭 롱슬리브 블랙', o_price: 39000, s_price : 27500, review: 7, desc: '', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 0, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XTFMT02H3', cate: 'women', cate_detail: 'top', title: '소프트 코튼 데일리 크롭 맨투맨 백아이보리', o_price: 48000, s_price : 38000, review: 48, desc: '', ec_desc: '', item_info_1: 0, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XWFGJ01H3', cate: 'women', cate_detail: 'outer', title: '슬림핏 라운드넥 집업 자켓 백아이보리', o_price: 64000, s_price : 51300, review: 18, desc: '', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 0, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XTFHD01H3', cate: 'women', cate_detail: 'top', title: '코튼 쿠션 스트링 크롭 후드 블랙', o_price: 66000, s_price : 56000, review: 31, desc: '', ec_desc: '', item_info_1: 0, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XWFST09H2', cate: 'women', cate_detail: 'top', title: '사이드 셔링 언밸런스 숏슬리브 백아이보리', o_price: 36000, s_price : 24700, review: 1, desc: '', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 0, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XA5453H', cate: 'women', cate_detail: 'top', title: 'XXMX 데일리 코튼 맨투맨', o_price: 48000, s_price : 38000, review: 661, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: 5},
    {item_code: 'XT4331F', cate: 'women', cate_detail: 'top', title: '코튼라이크 퍼펙트핏 숏슬리브 1+1', o_price: 68000, s_price : 32800, review: 6763, desc: '', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 5, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XT4368G', cate: 'women', cate_detail: 'top', title: '코튼라이크 핑거홀 롱슬리브 1+1', o_price: 78000, s_price : 44800, review: 2693, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XT4367G', cate: 'women', cate_detail: 'top', title: '모크넥 핑거홀 베이직 티셔츠 1+1', o_price: 78000, s_price : 53800, review: 3935, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XT4371G', cate: 'women', cate_detail: 'top', title: '언밸런스 트임 숏슬리브 1+1', o_price: 78000, s_price : 39800, review: 1459, desc: '', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 6, item_info_2: 5, item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XT4311F', cate: 'women', cate_detail: 'top', title: '젤라 인텐션 스퀘어 브라탑 1+1', o_price: 74000, s_price : 47800, review: 9250, desc: '#미디엄서포트 #셋업브라탑', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XT4188T_XT4195T', cate: 'women', cate_detail: 'top', title: '베이직 플레인 요가탑/크롭탑 1+1', o_price: 60000, s_price : 46800, review: 9968, desc: '요가탑 & 크롭탑 교차구매 가능', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 5, item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XT1132N', cate: 'women', cate_detail: 'top', title: '에어센트 숏슬리브 1+1', o_price: 52000, s_price : 27800, review: 30235, desc: '누적판매 44만 #흡한속건 #쿨링', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 5, item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XA5444G', cate: 'women', cate_detail: 'top', title: 'XXMX 크롭 숏슬리브 1+1', o_price: 68000, s_price : 44800, review: 2640, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XP9170F', cate: 'women', cate_detail: 'bottom', title: '블랙라벨 시그니처 360N 8.5부 레깅스 1+1', o_price: 98000, s_price : 46800, review: 25050, desc: '크롭레깅스 판매 1위 #놀라운 쫀득 텍스처', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 5, item_info_2: 1, item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XP9208G', cate: 'women', cate_detail: 'bottom', title: '미디움페더 인밴드 조거팬츠 1+1', o_price: 96000, s_price : 68800, review: 15605, desc: '[new color 추가] 조거팬츠 판매 1위<br>#아이스페더의 시원함을 그대로!', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 5, item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XA5370G_XA5375G', cate: 'women', cate_detail: 'bottom', title: '핀턱&아웃포켓 조거팬츠 1+1', o_price: 98000, s_price : 72800, review: 78001, desc: '[new color 추가] 조거팬츠 2종 교차구매 가능', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XA5468H', cate: 'women', cate_detail: 'bottom', title: '베이직 우븐 하프 쇼츠 1+1', o_price: 84000, s_price : 49800, review: 1005, desc: '', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 5, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XWFLG02H3_XWFLG03H3', cate: 'women', cate_detail: 'bottom', title: '젤라 인텐션 부츠컷 팬츠 1+1', o_price: 88000, s_price : 57800, review: 356, desc: '기본+트임 디자인 교차구매 가능', ec_desc: '', item_info_1: 2, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XP9141T', cate: 'women', cate_detail: 'bottom', title: '업텐션 레깅스 1+1', o_price: 78000, s_price : 39800, review: 58687, desc: '누적판매 500만 #퍼펙트핏 퍼포먼스 레깅스', ec_desc: '', item_info_1: 2, item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XA5343F', cate: 'women', cate_detail: 'bottom', title: '소프트쿠션 조거팬츠 1+1', o_price: 118000, s_price : 74800, review: 3408, desc: '', ec_desc: '', item_info_1: 6, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XP9222G', cate: 'women', cate_detail: 'bottom', title: '블랙라벨 시그니처 360N 하이레이어 레깅스 1+1', o_price: 98000, s_price : 59800, review: 3985, desc: '[2023 신상] 360N과 380N의 장점만 쏙! #하이웨이스트', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XWFSG03H2', cate: 'women', cate_detail: 'bottom', title: '블랙라벨 시그니처 360N 레깅스 4.5부 1+1', o_price: 84000, s_price : 47800, review: 5026, desc: '', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 5, item_info_2: 1, item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XP9216G', cate: 'women', cate_detail: 'bottom', title: '블랙라벨 시그니처 라이프 플레어 스커트 1+1', o_price: 96000, s_price : 54800, review: 3496, desc: '활동성과 스타일을 한 번에! #이너쇼츠 내장', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 5, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XP9223H', cate: 'women', cate_detail: 'bottom', title: '라인 포인트 테니스 스커트', o_price: 56000, s_price : 39000, review: 2322, desc: '이너 쇼츠로 그 어떤 동작도 자유롭게!', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 5, item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: 4},
    {item_code: 'XWFLG01H3', cate: 'women', cate_detail: 'bottom', title: '블랙라벨 시그니처 360N 아웃포켓 레깅스 블랙', o_price: 62000, s_price : 52000, review: 295, desc: '입체 포켓으로 볼륨 있는 골반 라인 연출 #하이웨이스트', ec_desc: '', item_info_1: 0, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XP9172F', cate: 'women', cate_detail: 'bottom', title: '젤라 인텐션 바이커 쇼츠 3부 1+1', o_price: 52000, s_price : 26800, review: 11731, desc: '', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 6, item_info_2: 5, item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XT4205F_XP9167F', cate: 'women', cate_detail: 'bottom', title: '[전문가용] 블랙라벨 380N SET', o_price: 98000, s_price : 58800, review: 64488, desc: '[브라탑+레깅스 셋업] 고강도 퍼포먼스 최적화', ec_desc: '', item_info_1: 1, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XA5416G_XA5417G', cate: 'women', cate_detail: 'bottom', title: '에어 마일드 SET', o_price: 163000, s_price : 119800, review: 1531, desc: '무릎 늘어남 없는 최고급 소재 #하이엔드 애슬레저 셋업', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XWFSG02H2', cate: 'women', cate_detail: 'bottom', title: '블랙라벨 시그니처 360N 레깅스 3.5부 1+1', o_price: 84000, s_price : 46800, review: 2978, desc: '', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 5, item_info_2: 1, item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XP9192F', cate: 'women', cate_detail: 'bottom', title: '블랙라벨 시그니처 300N 수퍼라이트 레깅스 1+1', o_price: 104000, s_price : 49800, review: 12029, desc: '입고 있던 것도 잊을 만큼 편안한 #초경량 레깅스', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 5, item_info_2: 2, item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XA5446G', cate: 'women', cate_detail: 'bottom', title: '소프트터치 이지 조거팬츠 1+1', o_price: 110000, s_price : 65800, review: 480, desc: '', ec_desc: '', item_info_1: 6, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XWFTP04H3', cate: 'women', cate_detail: 'bottom', title: '스모크 밴딩 하렘팬츠 다크슬레이트', o_price: 59000, s_price : 46500, review: 0, desc: '', ec_desc: '[9/25(월) 2PM까지 5% 신상할인!]', item_info_1: 0, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XWFTP07H3', cate: 'women', cate_detail: 'bottom', title: '릴랙스 워싱 조거팬츠 헌터그린', o_price: 49000, s_price : 37000, review: 0, desc: '입는 순간 느껴지는 부드러움<br>#빈티지한 색감으로 더욱 세련되게!', ec_desc: '[9/25(월) 2PM까지 5% 신상할인]', item_info_1: 0, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XWFTP06H3', cate: 'women', cate_detail: 'bottom', title: '빈야사 하렘팬츠 블랙', o_price: 49000, s_price : 37000, review: 0, desc: '턱 주름 디테일로 자연스럽게 떨어지는 릴랙스 핏!', ec_desc: '[9/25(월) 2PM까지 5% 신상할인]', item_info_1: 0, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XP9169F', cate: 'women', cate_detail: 'bottom', title: '젤라 인텐션 레깅스 1+1', o_price: 78000, s_price : 37800, review: 27899, desc: '젝시믹스 누적판매 1위 젤라 시리즈', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 5, item_info_2: 2, item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XWFMG01H2', cate: 'women', cate_detail: 'bottom', title: '블랙라벨 시그니처 300N 레깅스 6.5부 1+1', o_price: 88000, s_price : 44800, review: 759, desc: '', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 6, item_info_2: 5, item_info_3: 1, item_hot: '주문폭주', color: ''},
    {item_code: 'XP9198G', cate: 'women', cate_detail: 'bottom', title: '블랙라벨 시그니처 330N 레깅스 1+1', o_price: 96000, s_price : 58800, review: 5509, desc: '#파운데이션핏 #허리말림없이_초밀착', ec_desc: '', item_info_1: 2, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XA5379G', cate: 'women', cate_detail: 'bottom', title: '릴랙스페더 조거핏 하렘팬츠 1+1', o_price: 92000, s_price : 58800, review: 1913, desc: '[new color 추가] 내 몸의 순환을 도와줄 릴랙스 핏', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XJ0115F', cate: 'women', cate_detail: 'outer', title: '젤라 인텐션 슬림핏 집업자켓 1+1', o_price: 128000, s_price : 98800, review: 5332, desc: 'new color 추가', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XJ0114F', cate: 'women', cate_detail: 'outer', title: '슬림핏 크롭 집업자켓 1+1', o_price: 108000, s_price : 89800, review: 3910, desc: 'new color 추가', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XTFCD01H3', cate: 'women', cate_detail: 'outer', title: '소프트 코튼 벌룬 볼레로 바로크로즈', o_price: 49000, s_price : 39000, review: 401, desc: '가볍게 걸치기만 해도 스타일 지수 UP #벌룬핏', ec_desc: '', item_info_1: 0, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XA5374G', cate: 'women', cate_detail: 'outer', title: '우븐 믹스 후드 집업 블랙', o_price: 79000, s_price : 69000, review: 2873, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XA5448H', cate: 'women', cate_detail: 'outer', title: '쿨링 라이트 후드 바람막이 오프화이트', o_price: 79000, s_price : 69000, review: 440, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XA5449H', cate: 'women', cate_detail: 'outer', title: 'XXMX 크롭 바람막이 아이비그린', o_price: 79000, s_price : 69000, review: 1435, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XGFVT01H2', cate: 'women', cate_detail: 'outer', title: '드롭숄더 집업 베스트 블랙', o_price: 89000, s_price : 89000, review: 507, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XA5359G', cate: 'women', cate_detail: 'outer', title: '핫버닝슈트 후드 롱자켓 아쿠아릴리', o_price: 73000, s_price : 63000, review: 4102, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XA5422G', cate: 'women', cate_detail: 'outer', title: '배색 하이넥 바람막이 2.0 블랙블럭', o_price: 92000, s_price : 82000, review: 1844, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XA5127N', cate: 'women', cate_detail: 'outer', title: '내핑 후드 집업 카페오레', o_price: 79000, s_price : 63000, review: 20373, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XA5416G', cate: 'women', cate_detail: 'outer', title: '에어 마일드 후드집업', o_price: 89000, s_price : 79000, review: 1167, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: 7},
    {item_code: 'XA5421G', cate: 'women', cate_detail: 'outer', title: '아노락 후드 투웨이 바람막이 2.0 브루네라블루', o_price: 92000, s_price : 82000, review: 2047, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XA5358G', cate: 'women', cate_detail: 'outer', title: '하이넥 아웃스트링 바람막이 애쉬카멜', o_price: 86000, s_price : 76000, review: 3976, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XA5447H', cate: 'women', cate_detail: 'outer', title: '슬래시 컬러블럭 바람막이 푸딩베이지', o_price: 92000, s_price : 82000, review: 843, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XA5399G', cate: 'women', cate_detail: 'outer', title: '바시티 윈드 자켓', o_price: 92000, s_price : 82000, review: 732, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: 5},
    {item_code: 'XA5452H', cate: 'women', cate_detail: 'outer', title: 'XXMX 데일리 코튼 크롭 가디건', o_price: 47000, s_price : 37000, review: 732, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: 4},
    {item_code: 'XA5451H', cate: 'women', cate_detail: 'outer', title: 'XXMX 라인 포인트 니트 베스트 블랙', o_price: 69000, s_price : 590000, review: 238, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XJ0117H', cate: 'women', cate_detail: 'outer', title: '슬림핏 크롭 반팔 집업자켓', o_price: 57000, s_price : 39000, review: 338, desc: '', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 5, item_info_2: '', item_info_3: '', item_hot: '', color: 4},
    {item_code: 'XGFST04H3', cate: 'golf', cate_detail: 'golf', title: '우븐 스트링 카라 숏슬리브 블랙', o_price: 79000, s_price : 75000, review: 3, desc: '', ec_desc: '[9/25(월) 2PM까지 5% 신상할인]', item_info_1: 0, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XGFSP04H3', cate: 'golf', cate_detail: 'golf', title: '소매 배색 카라 숏슬리브 그린', o_price: 82000, s_price : 77900, review: 1, desc: '유니크한 골지 패턴으로 더 슬림해 보이게!', ec_desc: '[9/25(월) 2PM까지 5% 신상할인]', item_info_1: 0, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'GP7006H', cate: 'golf', cate_detail: 'golf', title: '스트레치 카고 조거팬츠 화이트', o_price: 99000, s_price : 99000, review: 667, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'GT7004H', cate: 'golf', cate_detail: 'golf', title: '슬림 하프넥 집업 롱슬리브 그린', o_price: 59000, s_price : 59000, review: 550, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XGFUY01H3', cate: 'golf', cate_detail: 'golf', title: '우먼즈 라운드 하이쿨링 베이스레이어 아이보리', o_price: 49000, s_price : 37000, review: 2, desc: '어떤 날씨에도 쾌적한 #퍼포먼스 최적화 레이어', ec_desc: '[9/25(월) 2PM까지 5% 신상할인]', item_info_1: 0, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XGFSK04H2', cate: 'golf', cate_detail: 'golf', title: 'XXMX 플리츠 큐롯 스커트 블랙', o_price: 128000, s_price : 128000, review: 200, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XGFGS03H0', cate: 'golf', cate_detail: 'golf', title: '논슬립 필드 프릴 골지 삭스', o_price: 14000, s_price : 13300, review: 2, desc: '이중 논슬립 디테일로 미끄러짐 없는 완벽 서포트!', ec_desc: '[9/25(월) 2PM까지 5% 신상할인]', item_info_1: 0, item_info_2: '', item_info_3: '', item_hot: '', color: 5},
    {item_code: 'XGFNS04H0', cate: 'golf', cate_detail: 'golf', title: '필드 백 라인 심플 니삭스', o_price: 19000, s_price : 18000, review: 0, desc: '', ec_desc: '[9/25(월) 2PM까지 5% 신상할인]', item_info_1: 0, item_info_2: '', item_info_3: '', item_hot: '', color: 4},
    {item_code: 'XGFGS02H0', cate: 'golf', cate_detail: 'golf', title: '필드 리본 크루삭스', o_price: 14000, s_price : 14000, review: 829, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: 4},
    {item_code: 'GA2701H', cate: 'golf', cate_detail: 'golf', title: '필드 보스턴백', o_price: 129000, s_price : 129000, review: 108, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: 2},
    {item_code: 'XGUBG06H3', cate: 'golf', cate_detail: 'golf', title: '필드 3단 토트백', o_price: 74000, s_price : 74000, review: 3, desc: '경량 패딩 소재로 가볍고 트렌디하게! #3단 수납공간', ec_desc: '', item_info_1: 0, item_info_2: '', item_info_3: '', item_hot: '', color: 3},
    {item_code: 'XGMSP01H3', cate: 'golf', cate_detail: 'golf', title: '테리 카라 숏슬리브 블랙', o_price: 62000, s_price : 58900, review: 0, desc: '', ec_desc: '[9/25(월) 2PM까지 5% 신상할인]', item_info_1: 2, item_info_2: 0, item_info_3: '', item_hot: '', color: ''},
    {item_code: 'GT2248H', cate: 'golf', cate_detail: 'golf', title: '윈드테크 필드 숏슬리브 스카이블루', o_price: 82000, s_price : 82000, review: 263, desc: '', ec_desc: '', item_info_1: 1, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XKFTP01H3', cate: 'kids', cate_detail: 'kids', title: '키즈 핀턱 루즈핏 조거팬츠 드레스블루스', o_price: 49000, s_price : 37000, review: 0, desc: '', ec_desc: '[9/25(월) 2PM까지 5% 신상할인]', item_info_1: 0, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XKFLG02H3', cate: 'kids', cate_detail: 'kids', title: '젤라 키즈 라인 부츠컷 팬츠 제트차콜', o_price: 39000, s_price : 29000, review: 13, desc: '', ec_desc: '', item_info_1: 0, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XKFTP02H3', cate: 'kids', cate_detail: 'kids', title: '데일리 키즈 슬림핏 조거팬츠 린넨아이보리', o_price: 46000, s_price : 36000, review: 7, desc: '', ec_desc: '', item_info_1: 0, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XKFLG01H3', cate: 'kids', cate_detail: 'kids', title: '젤라 키즈 플레어 스커트 레깅스 샤크그레이', o_price: 46000, s_price : 36000, review: 7, desc: '', ec_desc: '', item_info_1: 0, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XKFLT03H4', cate: 'kids', cate_detail: 'kids', title: '라이트 웜 티셔츠 소프트바이올렛', o_price: 34000, s_price : 22800, review: 0, desc: '포근한 기모 안감에 발열 소재로 더욱 따뜻하게!', ec_desc: '[9/25(월) 2PM까지 5% 신상할인]', item_info_1: 0, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XKFLT01H3', cate: 'kids', cate_detail: 'kids', title: '아이스페더 키즈 롱슬리브 크림아이보리', o_price: 31000, s_price : 21000, review: 8, desc: '상의 No.1 아이스페더 키즈 버전', ec_desc: '', item_info_1: 0, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'KT4552H', cate: 'kids', cate_detail: 'kids', title: '프린세스 액티브 티셔츠', o_price: 32000, s_price : 32000, review: 6, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: 4},
    {item_code: 'KT4551H', cate: 'kids', cate_detail: 'kids', title: '언밸런스 슬래시 반팔 티셔츠', o_price: 26000, s_price : 26000, review: 188, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: 4},
    {item_code: 'KP4612H', cate: 'kids', cate_detail: 'kids', title: '무브 포켓 레깅스', o_price: 32000, s_price : 32000, review: 11, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: 3},
    {item_code: 'KA4813H', cate: 'kids', cate_detail: 'kids', title: '세미 슬림 스트레치 팬츠', o_price: 49000, s_price : 49000, review: 74, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: 3},
    {item_code: 'KP1505G', cate: 'kids', cate_detail: 'kids', title: '젤라 키즈 9부 레깅스 1+1', o_price: 48000, s_price : 34800, review: 1226, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'KA4911H', cate: 'kids', cate_detail: 'kids', title: '에센셜 스트레치 후드 집업 점퍼', o_price: 79000, s_price : 79000, review: 36, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: 3},
    {item_code: 'XS1202G', cate: 'kids', cate_detail: 'kids', title: '키즈 데이라이트 플로우 퓨어화이트', o_price: 89000, s_price : 69000, review: 99, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'KE1200G', cate: 'kids', cate_detail: 'kids', title: '베이직 로고 삭스 2+1', o_price: 14700, s_price : 8800, review: 1154, desc: '', ec_desc: '', item_info_1: 6, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'KE1100G_KE1101G', cate: 'kids', cate_detail: 'kids', title: '젝시 키즈 삭스 1+1', o_price: 11000, s_price : 8800, review: 1214, desc: '양말 2종 교차구매 가능', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XT2142F', cate: 'mens', cate_detail: 'mens', title: '머슬핏 숏슬리브 1+1', o_price: 78000, s_price : 48800, review: 6251, desc: '', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 5, item_info_2: 2, item_info_3: '', item_hot: '주문폭주', color: ''},
    {item_code: 'XMMST06H2', cate: 'mens', cate_detail: 'mens', title: '맨즈 아이스페더 오버핏 숏슬리브 블랙', o_price: 36000, s_price : 24700, review: 9, desc: "상의 판매 1위 아이스페더 #맨즈 버전<br>윤성빈's PICK!", ec_desc: '[9/25(월) 2PM까지 5% 신상할인]', item_info_1: 2, item_info_2: 0, item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XO2225H_XP2226H', cate: 'mens', cate_detail: 'mens', title: '액티브 플레이어 쇼츠 SET', o_price: 140000, s_price : 109800, review: 510, desc: '', ec_desc: '', item_info_1: 1, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XT4354G', cate: 'women', cate_detail: 'top', title: '젤라라이트 라운드 슬리브리스 1+1', o_price: 56000, s_price : 27800, review: 8373, desc: '', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 5, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XWFLT01H3', cate: 'women', cate_detail: 'top', title: '로고 밴딩 크롭 롱슬리브 블랙', o_price: 42000, s_price : 32000, review: 62, desc: '', ec_desc: '', item_info_1: 0, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XWFBR03H2', cate: 'women', cate_detail: 'top', title: '인패드 와이드넥 5부 숏슬리브 블랙', o_price: 44000, s_price : 34000, review: 41, desc: '패드 내장 디자인으로 더욱 간편해진 운동 준비!', ec_desc: '', item_info_1: 0, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XT4312F', cate: 'women', cate_detail: 'top', title: '젤라 인텐션 스퀘어 크롭탑 1+1', o_price: 54000, s_price : 26800, review: 8277, desc: '일상을 채우는 파워풀한 에너지 #셋업크롭탑', ec_desc: '[9/22(금) 2PM까지 오늘의특가!]', item_info_1: 5, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XWFTP03H3', cate: 'women', cate_detail: 'bottom', title: '스트레치 포멀 부츠컷 트임 팬츠 블랙', o_price: 49000, s_price : 37000, review: 7, desc: '슬랙스의 포멀함을 입은 애슬레저 #몸매보정 슬랙스', ec_desc: '[9/25(월) 2PM까지 5% 신상할인]', item_info_1: 0, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XGFVT02H2', cate: 'golf', cate_detail: 'golf', title: '브이넥 우븐 베스트 블랙', o_price: 99000, s_price : 99000, review: 182, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'KP4634H', cate: 'kids', cate_detail: 'kids', title: '하이라이즈 볼륨 팬츠', o_price: 39000, s_price : 39000, review: 137, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: 3},
    {item_code: 'KA4751H_KA4812H', cate: 'kids', cate_detail: 'kids', title: '백스쿨 이지 SET', o_price: 77000, s_price : 72800, review: 91, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    {item_code: 'XTFJK06H4', cate: 'women', cate_detail: 'outer', title: '라이트 플리스 하이넥 집업 블랙', o_price: 82000, s_price : 68400, review: 0, desc: '', ec_desc: '[10/4(수) 2PM까지 5% 신상할인]', item_info_1: 0, item_info_2: '', item_info_3: '', item_hot: '', color: ''},
    // {item_code: '', cate: '', cate_detail: '', title: '', o_price: 0, s_price : 0, review: 0, desc: '', ec_desc: '', item_info_1: '', item_info_2: '', item_info_3: '', item_hot: '', color: ''},
];

const ITEM_IMG = [
    {item_code: 'XP9167F', main_src: '0330040012943.jpg', hover_src: '0330040012947.jpg', detail_src: 'XP9167F'},
    {item_code: 'XTFJK06H4', main_src: '0330030006563.jpg', hover_src: '0330030006567.jpg', detail_src: 'XTFJK06H4'},
    {item_code: 'XP9157T', main_src: '0330040012423.jpg', hover_src: '0330040012427.jpg', detail_src: 'XP9157T'},
    {item_code: 'XP9156T', main_src: '0330040009973.jpg', hover_src: '0330040009977.jpg', detail_src: 'XP9156T'},
    {item_code: 'XP9181F', main_src: '0330040002773.jpg', hover_src: '0330040002777.jpg', detail_src: 'XP9181F'},
    {item_code: 'XA5380G', main_src: '0330040001773.jpg', hover_src: '0330040001777.jpg', detail_src: 'XA5380G'},
    {item_code: 'XT4108E', main_src: '0330010011963.jpg', hover_src: '0330010011967.jpg', detail_src: 'XT4108E'},
    {item_code: 'XP9168F', main_src: '0330040015253.jpg', hover_src: '0330040015257.jpg', detail_src: 'XP9168F'},
    {item_code: 'XWFST03H2', main_src: '0330010016493.jpg', hover_src: '0330010016497.jpg', detail_src: 'XWFST03H2'},
    {item_code: 'XWFSG01H2', main_src: '0330040007123.jpg', hover_src: '0330040007127.jpg', detail_src: 'XWFSG01H2'},
    {item_code: 'XWFLT04H3', main_src: '0330010018103.jpg', hover_src: '0330010018107.jpg', detail_src: 'XWFLT04H3'},
    {item_code: 'XWFHZ01H3', main_src: '0330010016632.jpg', hover_src: '0330010016637.jpg', detail_src: 'XWFHZ01H3'},
    {item_code: 'XWFSK03H3', main_src: '0330040017192.jpg', hover_src: '0330040017197.jpg', detail_src: 'XWFSK03H3'},
    {item_code: 'XXURF01H1', main_src: '0350010000552.jpg', hover_src: '0350010000557.jpg', detail_src: 'XXURF01H1'},
    {item_code: 'XXURF01H1_white', main_src: '0350010000542.jpg', hover_src: '0350010000547.jpg', detail_src: 'XXURF01H1'},
    {item_code: 'XED200R', main_src: '0350020004772.jpg', hover_src: '0350020004777.jpg', detail_src: 'XED200R'},
    {item_code: 'XT2223H', main_src: '0110100004533.jpg', hover_src: '0110100004537.jpg', detail_src: 'XT2223H'},
    {item_code: 'XP2224H', main_src: '0110120003097.jpg', hover_src:'0110120001857.jpg', detail_src: 'XP2224H'},
    {item_code: 'XE1101H', main_src: '0350020003493.gif', hover_src: '0350020003497.jpg', detail_src: 'XE1101H'},
    {item_code: 'XS0202H', main_src: '0350010000953.jpg', hover_src: '0350010000957.jpg', detail_src: 'XS0202H'},
    {item_code: 'XS0202H_white', main_src: '0350010001013.jpg', hover_src: '0350010001017.jpg', detail_src: 'XS0202H'},
    {item_code: 'XT4205F', main_src: '0330020006063.jpg', hover_src: '0330020006067.jpg', detail_src: 'XT4205F'},
    {item_code: 'XT8102E', main_src: '0330020001853.jpg', hover_src: '0330020001857.jpg', detail_src: 'XT8102E'},
    {item_code: 'XA5203T', main_src: '0330010008483.gif', hover_src: '0330010008487.jpg', detail_src: 'XA5203T'},
    {item_code: 'XGFJK01H2', main_src: '0330030002093.jpg', hover_src: '0330030002097.jpg', detail_src: 'XGFJK01H2'},
    {item_code: 'GT3002G', main_src: '0330020002193.jpg', hover_src: '0330020002197.jpg', detail_src: 'GT3002G'},
    {item_code: 'XGFSK01H2', main_src: '0330040003573.jpg', hover_src: '0330040003577.jpg', detail_src: 'XGFSK01H2'},
    {item_code: 'XS0101G', main_src: '0350010000497.jpg', hover_src: '0350010000493.jpg', detail_src: 'XS0101G'},
    {item_code: 'XGFCP01H2', main_src: '0350020003773.gif', hover_src: '0350020003777.jpg', detail_src: 'XGFCP01H2'},
    {item_code: 'KA1008G_KA1009G', main_src: '0010090001403.jpg', hover_src: '0010090001407.jpg', detail_src: 'KA1008G_KA1009G'},
    {item_code: 'KA1018G_KA1019G', main_src: '0010090000553.jpg', hover_src: '0010090000557.jpg', detail_src: 'KA1018G_KA1019G'},
    {item_code: 'KP1502G', main_src: '0010090000063.jpg', hover_src: '0010090000067.jpg', detail_src: 'KP1502G'},
    {item_code: 'KA1016G_KA1017G', main_src: '0010090001173.jpg', hover_src: '0010090001177.jpg', detail_src: 'KA1016G_KA1017G'},
    {item_code: 'KA1031G_KA1032G', main_src: '0010090000813.jpg', hover_src: '0010090000817.jpg', detail_src: 'KA1031G_KA1032G'},
    {item_code: 'XWFTP05H3', main_src: '0330040017583.jpg', hover_src: '0330040017587.jpg', detail_src: 'XWFTP05H3'},
    {item_code: 'XED190B', main_src: '0350020002753.jpg', hover_src: '0350020002757.jpg', detail_src: 'XED190B'},
    {item_code: 'XED190B_XED190A', main_src: '0350020003093.jpg', hover_src: '0350020003097.jpg', detail_src: 'XED190B'},
    {item_code: 'XWFLT05H3', main_src: '0330030006813.jpg', hover_src: '0330030006817.jpg', detail_src: 'XWFLT05H3'},
    {item_code: 'XE1702G', main_src: '0350020002233.jpg', hover_src: '0350020002237.jpg', detail_src: 'XE1702G'},
    {item_code: 'XUMUP01H0', main_src: '0110130000113.gif', hover_src: '0110130000117.jpg', detail_src: 'XUMUP01H0'},
    {item_code: 'XT2209G_XP2210G', main_src: '0110120003043.jpg', hover_src: '0110120003047.jpg', detail_src: 'XT2209G_XP2210G'},  
    {item_code: 'XO2225H_XP2229H', main_src: '0110120003063.jpg', hover_src: '0110120003067.jpg', detail_src: 'XO2225H_XP2229H'},  
    {item_code: 'XP2169G', main_src: '0110120003053.gif', hover_src: '0110120003057.jpg', detail_src: 'XP2169G'},
    {item_code: 'XMMST01H2', main_src: '0110100002063.jpg', hover_src: '0110100002067.jpg', detail_src: 'XMMST01H2'},
    {item_code: 'XT2218G', main_src: '0110100001583.jpg', hover_src: '0110100001587.jpg', detail_src: 'XT2218G'},
    {item_code: 'XT2142F', main_src: '0110100003683.jpg', hover_src: '0110100003687.jpg', detail_src: 'XT2142F'},
    {item_code: 'XMMST06H2', main_src: '0110100005733.jpg', hover_src: '0110100005737.jpg', detail_src: 'XMMST06H2'},
    {item_code: 'XT2217G', main_src: '0110100005463.jpg', hover_src: '0110100005467.jpg', detail_src: 'XT2217G'},
    {item_code: 'XT2145F', main_src: '0110100000913.jpg', hover_src: '0110100000917.jpg', detail_src: 'XT2145F'},
    {item_code: 'XP2159F', main_src: '0110120002683.jpg', hover_src: '0110120002687.jpg', detail_src: 'XP2159F'},
    {item_code: 'XP2124F', main_src: '0110120000313.jpg', hover_src: '0110120000317.jpg', detail_src: 'XP2124F'},
    {item_code: 'XP0107T', main_src: '0110120000873.jpg', hover_src: '0110120000877.jpg', detail_src: 'XP0107T'},
    {item_code: 'XP2113F', main_src: '0110120001383.jpg', hover_src: '0110120001387.jpg', detail_src: 'XP2113F'},
    {item_code: 'XT2223H_XP2224H', main_src: '0110120003093.jpg', hover_src: '0110120003097.jpg', detail_src: 'XT2223H_XP2224H'},
    {item_code: 'XO2225H_XP2226H', main_src: '0110120003083.jpg', hover_src: '0110120003087.jpg', detail_src: 'XO2225H_XP2229H'},
    {item_code: 'XMMHZ40H3', main_src: '0110100005663.jpg', hover_src: '0110100005667.jpg', detail_src: 'XMMHZ40H3'},
    {item_code: 'XO2227H', main_src: '0110110000303.jpg', hover_src: '0110110000307.jpg', detail_src: 'XO2227H'},
    {item_code: 'XMMHZ01H2', main_src: '0110100000423.jpg', hover_src: '0110100000427.jpg', detail_src: 'XMMHZ01H2'},
    {item_code: 'XP2226H', main_src: '0110120001863.jpg', hover_src: '0110120001867.jpg', detail_src: 'XP2226H'},
    {item_code: 'XP2186G', main_src: '0110120001843.jpg', hover_src: '0110120001847.jpg', detail_src: 'XP2186G'},
    {item_code: 'XP2122F_XP2123F', main_src: '0110120002123.jpg', hover_src: '0110120002127.jpg', detail_src: 'XP2122F_XP2123F'},
    {item_code: 'XMMTP40H3', main_src: '0110120003193.jpg', hover_src: '0110120003197.jpg', detail_src: 'XMMTP40H3'},
    {item_code: 'XP2133F', main_src: '0110120002603.jpg', hover_src: '0110120002607.jpg', detail_src: 'XP2133F'},
    {item_code: 'XMMTP02H2', main_src: '0110120000053.jpg', hover_src: '0110120000057.jpg', detail_src: 'XMMTP02H2'},
    {item_code: 'XMMTP01H2', main_src: '0110120002973.jpeg', hover_src: '0110120002977.jpeg', detail_src: 'XMMTP01H2'},
    {item_code: 'XP2200G', main_src: '0110120000513.jpg', hover_src: '0110120000517.jpg', detail_src: 'XP2200G'},
    {item_code: 'XT2192G', main_src: '0110100001253.jpg', hover_src: '0110100001257.jpg', detail_src: 'XT2192G'},
    {item_code: 'XT2219G', main_src: '0110100005453.jpg', hover_src: '0110100005457.jpg', detail_src: 'XT2219G'},
    {item_code: 'XT0105T', main_src: '0110100002233.jpg', hover_src: '0110100002237.jpg', detail_src: 'XT0105T'},
    {item_code: 'XT2130F', main_src: '0110100003453.gif', hover_src: '0110100003457.jpg', detail_src: 'XT2130F'},
    {item_code: 'XA5467H', main_src: '0330010011223.jpg', hover_src: '0330010011227.jpg', detail_src: 'XA5467H'},
    {item_code: 'XA5392G', main_src: '0330010012123.jpg', hover_src: '0330010012127.jpg', detail_src: 'XA5392G'},
    {item_code: 'XA5353F', main_src: '0330010017683.jpg', hover_src: '0330010017687.jpg', detail_src: 'XA5353F'},
    {item_code: 'XA5298T', main_src: '0330010009723.jpg', hover_src: '0330010009727.jpg', detail_src: 'XA5298T'},
    {item_code: 'XWFST08H2', main_src: '0330010017693.jpg', hover_src: '0330010017697.jpg', detail_src: 'XWFST08H2'},
    {item_code: 'XT4355G', main_src: '0330010013123.jpg', hover_src: '0330010013127.jpg', detail_src: 'XT4355G'},
    {item_code: 'XWFST01H2', main_src: '0330010011983.jpg', hover_src: '0330010011987.jpg', detail_src: 'XWFST01H2'},
    {item_code: 'XT4316F', main_src: '0330010012463.jpg', hover_src: '0330010012467.jpg', detail_src: 'XT4316F'},
    {item_code: 'XA5299T', main_src: '0330010003123.jpg', hover_src: '0330010003127.jpg', detail_src: 'XA5299T'},
    {item_code: 'XT4354G', main_src: '0330010015233.jpg', hover_src: '0330010015237.jpg', detail_src: 'XT4354G'},
    {item_code: 'XT4372G', main_src: '0330010006413.jpg', hover_src: '0330010006417.jpg', detail_src: 'XT4372G'},
    {item_code: 'XTFLT02H3', main_src: '0330010017263.jpg', hover_src: '0330010017267.jpg', detail_src: 'XTFLT02H3'},
    {item_code: 'XTFMT02H3', main_src: '0330010017363.jpg', hover_src: '0330010017367.jpg', detail_src: 'XTFMT02H3'},
    {item_code: 'XWFLT01H3', main_src: '0330010016813.jpg', hover_src: '0330010016817.jpg', detail_src: 'XWFLT01H3'},
    {item_code: 'XWFBR03H2', main_src: '0330020010303.jpg', hover_src: '0330020010307.jpg', detail_src: 'XWFBR03H2'},
    {item_code: 'XWFGJ01H3', main_src: '0330030005803.jpg', hover_src: '0330030005807.jpg', detail_src: 'XWFGJ01H3'},
    {item_code: 'XTFHD01H3', main_src: '0330010017303.jpg', hover_src: '0330010017307.jpg', detail_src: 'XTFHD01H3'},
    {item_code: 'XWFST09H2', main_src: '0330010017843.jpg', hover_src: '0330010017847.jpg', detail_src: 'XWFST09H2'},
    {item_code: 'XA5453H', main_src: '0330010004903.jpg', hover_src: '0330010004907.jpg', detail_src: 'XA5453H'},
    {item_code: 'XT4331F', main_src: '0330010013003.jpg', hover_src: '0330010013007.jpg', detail_src: 'XT4331F'},
    {item_code: 'XT4368G', main_src: '0330010006173.jpg', hover_src: '0330010006177.jpg', detail_src: 'XT4368G'},
    {item_code: 'XT4367G', main_src: '0330010005943.jpg', hover_src: '0330010005947.jpg', detail_src: 'XT4367G'},
    {item_code: 'XT4371G', main_src: '0330010013523.jpg', hover_src: '0330010013527.jpg', detail_src: 'XT4371G'},
    {item_code: 'XT4312F', main_src: '0330010012283.jpg', hover_src: '0330010012287.jpg', detail_src: 'XT4312F'},
    {item_code: 'XT4311F', main_src: '0330020006353.jpg', hover_src: '0330020006357.jpg', detail_src: 'XT4311F'},
    {item_code: 'XA5397G', main_src: '0330030001363.jpg', hover_src: '0330030001367.jpg', detail_src: 'XA5397G'},
    {item_code: 'XT4188T_XT4195T', main_src: '0330020008973.jpg', hover_src: '0330020008977.jpg', detail_src: 'XT4188T_XT4195T'},
    {item_code: 'XT1132N', main_src: '0330010011623.jpg', hover_src: '0330010011627.jpg', detail_src: 'XT1132N'},
    {item_code: 'XA5444G', main_src: '0330010011093.jpg', hover_src: '0330010011097.jpg', detail_src: 'XA5444G'},
    {item_code: 'XP9170F', main_src: '0330040007953.jpg', hover_src: '0330040007957.jpg', detail_src: 'XP9170F'},
    {item_code: 'XP9208G', main_src: '0330040002523.jpg', hover_src: '0330040002527.jpg', detail_src: 'XP9208G'},
    {item_code: 'XA5370G_XA5375G', main_src: '0330040001723.jpg', hover_src: '0330040001727.jpg', detail_src: 'XA5370G_XA5375G'},
    {item_code: 'XA5468H', main_src: '0330040016193.jpg', hover_src: '0330040016197.jpg', detail_src: 'XA5468H'},
    {item_code: 'XWFLG02H3_XWFLG03H3', main_src: '0330040017163.jpg', hover_src: '0330040017167.jpg', detail_src: 'XWFLG02H3_XWFLG03H3'},
    {item_code: 'XP9141T', main_src: '0330040011823.jpg', hover_src: '0330040011827.jpg', detail_src: 'XP9141T'},
    {item_code: 'XA5343F', main_src: '0330040002323.jpg', hover_src: '0330040002327.jpg', detail_src: 'XA5343F'},
    {item_code: 'XP9222G', main_src: '0330040014193.jpg', hover_src: '0330040014197.jpg', detail_src: 'XP9222G'},
    {item_code: 'XWFSG03H2', main_src: '0330040007263.jpg', hover_src: '0330040007267.jpg', detail_src: 'XWFSG03H2'},
    {item_code: 'XWFTP03H3', main_src: '0330040017723.jpg', hover_src: '0330040017727.jpg', detail_src: 'XWFTP03H3'},
    {item_code: 'XP9216G', main_src: '0330040016763.jpg', hover_src: '0330040016767.jpg', detail_src: 'XP9216G'},
    {item_code: 'XP9223H', main_src: '0330040003853.jpg', hover_src: '0330040003857.jpg', detail_src: 'XP9223H'},
    {item_code: 'XWFLG01H3', main_src: '0330040016853.jpg', hover_src: '0330040016857.jpg', detail_src: 'XWFLG01H3'},
    {item_code: 'XP9172F', main_src: '0330040006723.jpg', hover_src: '0330040006727.jpg', detail_src: 'XP9172F'},
    {item_code: 'XT4205F_XP9167F', main_src: '0330040014633.jpg', hover_src: '0330040014637.jpg', detail_src: 'XT4205F'},
    {item_code: 'XA5416G_XA5417G', main_src: '0330040002413.jpg', hover_src: '0330040002417.jpg', detail_src: 'XA5416G_XA5417G'},
    {item_code: 'XWFSG02H2', main_src: '0330040007193.jpg', hover_src: '0330040007197.jpg', detail_src: 'XWFSG02H2'},
    {item_code: 'XP9192F', main_src: '0330040013543.jpg', hover_src: '0330040013547.jpg', detail_src: 'XP9192F'},
    {item_code: 'XA5446G', main_src: '0330040002513.jpg', hover_src: '0330040002517.jpg', detail_src: 'XA5446G'},
    {item_code: 'XWFTP04H3', main_src: '0330040017643.jpg', hover_src: '0330040017647.jpg', detail_src: 'XWFTP04H3'},
    {item_code: 'XWFTP07H3', main_src: '0330040017693.jpg', hover_src: '0330040017697.jpg', detail_src: 'XWFTP07H3'},
    {item_code: 'XWFTP06H3', main_src: '0330040017463.jpg', hover_src: '0330040017467.jpg', detail_src: 'XWFTP06H3'},
    {item_code: 'XP9169F', main_src: '0330040013393.jpg', hover_src: '0330040013397.jpg', detail_src: 'XP9169F'},
    {item_code: 'XWFMG01H2', main_src: '0330040008653.jpg', hover_src: '0330040008657.jpg', detail_src: 'XWFMG01H2'},
    {item_code: 'XP9198G', main_src: '0330040013953.jpg', hover_src: '0330040013957.jpg', detail_src: 'XP9198G'},
    {item_code: 'XA5379G', main_src: '0330040016933.jpg', hover_src: '0330040016937.jpg', detail_src: 'XA5379G'},
    {item_code: 'XJ0115F', main_src: '0330030003853.jpg', hover_src: '0330030003857.jpg', detail_src: 'XJ0115F'},
    {item_code: 'XJ0114F', main_src: '0330030003673.jpg', hover_src: '0330030003677.jpg', detail_src: 'XJ0114F'},
    {item_code: 'XTFCD01H3', main_src: '0330030006093.jpg', hover_src: '0330030006097.jpg', detail_src: 'XTFCD01H3'},
    {item_code: 'XA5374G', main_src: '0330030003273.jpg', hover_src: '0330030003277.jpg', detail_src: 'XA5374G'},
    {item_code: 'XA5448H', main_src: '0330030001973.jpg', hover_src: '0330030001977.jpg', detail_src: 'XA5448H'},
    {item_code: 'XA5449H', main_src: '0330030002023.jpg', hover_src: '0330030002027.jpg', detail_src: 'XA5449H'},
    {item_code: 'XGFVT01H2', main_src: '0330030005683.jpg', hover_src: '0330030005687.jpg', detail_src: 'XGFVT01H2'},
    {item_code: 'XA5359G', main_src: '0330030001213.jpg', hover_src: '0330030001217.jpg', detail_src: 'XA5359G'},
    {item_code: 'XA5422G', main_src: '0330030001843.jpg', hover_src: '0330030001847.jpg', detail_src: 'XA5422G'},
    {item_code: 'XA5127N', main_src: '0330030002623.jpg', hover_src: '0330030002627.jpg', detail_src: 'XA5127N'},
    {item_code: 'XA5416G', main_src: '0330030003293.gif', hover_src: '0330030003297.jpg', detail_src: 'XA5416G'},
    {item_code: 'XA5421G', main_src: '0330030001733.jpg', hover_src: '0330030001737.jpg', detail_src: 'XA5421G'},
    {item_code: 'XA5358G', main_src: '0330030001043.jpg', hover_src: '0330030001047.jpg', detail_src: 'XA5358G'},
    {item_code: 'XA5447H', main_src: '0330030001943.jpg', hover_src: '0330030001947.jpg', detail_src: 'XA5447H'},
    {item_code: 'XA5399G', main_src: '0330030001483.jpg', hover_src: '0330030001487.jpg', detail_src: 'XA5399G'},
    {item_code: 'XA5452H', main_src: '0330030000353.jpg', hover_src: '0330030000357.jpg', detail_src: 'XA5452H'},
    {item_code: 'XA5451H', main_src: '0330030000333.jpg', hover_src: '0330030000337.jpg', detail_src: 'XA5451H'},
    {item_code: 'XJ0117H', main_src: '0330030003663.jpg', hover_src: '0330030003667.jpg', detail_src: 'XJ0117H'},
    {item_code: 'XGFST04H3', main_src: '0330010018073.jpg', hover_src: '0330010018073.jpg', detail_src: 'XGFST04H3'},
    {item_code: 'XGFSP04H3', main_src: '0330010018013.jpg', hover_src: '0330010018017.jpg', detail_src: 'XGFSP04H3'},
    {item_code: 'GP7006H', main_src: '0330040016003.jpg', hover_src: '0330040016007.jpg', detail_src: 'GP7006H'},
    {item_code: 'GT7004H', main_src: '0330010000343.jpg', hover_src: '0330010000347.jpg', detail_src: 'GT7004H'},
    {item_code: 'XGFVT02H2', main_src: '0330030002163.jpg', hover_src: '0330030002167.jpg', detail_src: 'XGFVT02H2'},
    {item_code: 'XGFUY01H3', main_src: '0330010018033.jpg', hover_src: '0330010018037.jpg', detail_src: 'XGFUY01H3'},
    {item_code: 'XGFSK04H2', main_src: '0330040016203.jpg', hover_src: '0330040016207.jpg', detail_src: 'XGFSK04H2'},
    {item_code: 'XGFGS03H0', main_src: '0350020005133.gif', hover_src: '0350020005137.jpg', detail_src: 'XGFGS03H0'},
    {item_code: 'XGFNS04H0', main_src: '0350020005253.gif', hover_src: '0350020005257.jpg', detail_src: 'XGFNS04H0'},
    {item_code: 'XGFGS02H0', main_src: '0350020004893.gif', hover_src: '0350020004897.jpg', detail_src: 'XGFGS02H0'},
    {item_code: 'GA2701H', main_src: '0350020000053.gif', hover_src: '0350020000057.jpg', detail_src: 'GA2701H'},
    {item_code: 'XGUBG06H3', main_src: '0350020005163.gif', hover_src: '0350020005167.jpg', detail_src: 'XGUBG06H3'},
    {item_code: 'XGMSP01H3', main_src: '0110100005803.jpg', hover_src: '0110100005807.jpg', detail_src: 'XGMSP01H3'},
    {item_code: 'GT2248H', main_src: '0110100001983.jpg', hover_src: '0110100001987.jpg', detail_src: 'GT2248H'},
    {item_code: 'XKFTP01H3', main_src: '0010090001613.jpg', hover_src: '0010090001617.jpg', detail_src: 'XKFTP01H3'},
    {item_code: 'XKFLG02H3', main_src: '0010090001483.jpg', hover_src: '0010090001487.jpg', detail_src: 'XKFLG02H3'},
    {item_code: 'XKFTP02H3', main_src: '0010090001443.jpg', hover_src: '0010090001447.jpg', detail_src: 'XKFTP02H3'},
    {item_code: 'XKFLG01H3', main_src: '0010090001463.jpg', hover_src: '0010090001467.jpg', detail_src: 'XKFLG01H3'},
    {item_code: 'XKFLT03H4', main_src: '0010070001223.jpg', hover_src: '0010070001227.jpg', detail_src: 'XKFLT03H4'},
    {item_code: 'XKFLT01H3', main_src: '0010070001173.jpg', hover_src: '0010070001177.jpg', detail_src: 'XKFLT01H3'},
    {item_code: 'KT4552H', main_src: '0010070000733.jpg', hover_src: '0010070000737.jpg', detail_src: 'KT4552H'},
    {item_code: 'KT4551H', main_src: '0010070000043.jpg', hover_src: '0010070000047.jpg', detail_src: 'KT4551H'},
    {item_code: 'KP4634H', main_src: '0010090001353.jpg', hover_src: '0010090001357.jpg', detail_src: 'KP4634H'},
    {item_code: 'KA4751H_KA4812H', main_src: '0010090000963.jpg', hover_src: '0010090000967.jpg', detail_src: 'KA4751H_KA4812H'},
    {item_code: 'KP4612H', main_src: '0010090000343.jpg', hover_src: '0010090000347.jpg', detail_src: 'KP4612H'},
    {item_code: 'KA4813H', main_src: '0010090001313.jpg', hover_src: '0010090001317.jpg', detail_src: 'KA4813H'},
    {item_code: 'KP1505G', main_src: '0010090000133.jpg', hover_src: '0010090000137.jpg', detail_src: 'KP1505G'},
    {item_code: 'KA4911H', main_src: '0010080000123.jpg', hover_src: '0010080000127.jpg', detail_src: 'KA4911H'},
    {item_code: 'XS1202G', main_src: '0010100000503.jpg', hover_src: '0010100000507.jpg', detail_src: 'XS1202G'},
    {item_code: 'KE1200G', main_src: '0010100000123.jpg', hover_src: '0010100000127.jpg', detail_src: 'KE1200G'},
    {item_code: 'KE1100G_KE1101G', main_src: '0010100000073.jpg', hover_src: '0010100000077.jpg', detail_src: 'KE1100G_KE1101G'},
    // {item_code: '', main_src: '', hover_src: '', detail_src_1: '', detail_src_2: '', detail_src: '','},
];
const CATE_FIXED = [
    ['mens', 'top', 'bottom', 'outer', 'golf', 'kids'],
    ['맨즈', '상의', '하의', '아우터', '골프', '키즈'],
    [7, 7, 7, 5, 4, 4], //m_item_box에 보여줄 라인 수
    ['title_img_mens.jpg', 'title_img_top.jpg', 'title_img_bottom.jpg', 'title_img_outer.jpg', 'title_img_golf.jpg', 'title_img_kids.jpg'],
    ['xt2219g_mv.mp4', '19Yk8GBJP8U_mv.mp4', 'fZb8dZmdYQd_mv.mp4', '7h9M4m6F2aE_mv.mp4', 'go5006_mv.mp4', 'kids_230703_mv.mp4'],
];
const CATE = ['women', 'mens', 'golf', 'kids', 'shoes'];
const CATE_NAV = [
    /*women*/['레깅스', '조거팬츠', '상의', '패드탑', '아우터', '하의', '이너웨어', '블랙라벨', '스윔웨어', '바람막이', '테니스룩'],
    /*mens*/['신상', '상의', '아우터', '하의', '슬랙스', '조거팬츠', '탄성팬츠', '이너웨어', '블랙라벨', '스윔웨어'],
    /*golf*/['우먼즈', '맨즈', '용품'], 
    /*kids*/['상의', '아우터', '하의', '슈즈&용품', '스윔웨어' ], 
    /*shoes*/['슈즈', '용품', '코스메틱']
];
const BEST_ITEM = [
    'XP9167F', 
    'XP9157T', 
    'XP9156T', 
    'XP9181F', 
    'XA5380G', 
    'XT4108E', 
    'XP9168F', 
    'XWFST03H2', 
    'XWFSG01H2', 
    'XWFLT04H3'
];

const MDPICK = [//main_item, sub_item_1, sub_item_2, sub_item_3, sub_item_4
    ['XWFHZ01H3', 'XWFSK03H3', 'XXURF01H1', 'XXURF01H1_white', 'XED200R'], 
    ['XT2223H', 'XP2224H', 'XE1101H', 'XS0202H', 'XS0202H_white'], 
    ['XP9167F', 'XT4205F', 'XT8102E', 'XA5203T', 'XT4108E'], 
    ['XGFJK01H2', 'GT3002G', 'XGFSK01H2', 'XS0101G', 'XGFCP01H2'], 
    ['KA1008G_KA1009G', 'KA1018G_KA1019G', 'KP1502G', 'KA1016G_KA1017G', 'KA1031G_KA1032G'],
    ['XWFTP05H3', 'XWFLT05H3', 'XED190B_XED190A', 'XED190B', 'XE1702G']
    // ['', '', '', '', '']
];

const ICON_IMG = [ 
    /*
    [9/22(금) 2PM까지 오늘의특가!]
    [9/25(월) 2PM까지 5% 신상할인]
    */
    [//item_info
        '3322.gif', '3372.gif', '3370.gif', '3468.gif', '3489.gif', '3525.gif', '3561.gif'
    ],[//item_info설명
        //0       1       2         3         4          5           6
        '신상', '~2XL', '~3XL', '남여공용', '친환경', '이벤트특가', '시즌오프'
    ],[//item_hot
        '3442.gif', '주문폭주'
    ],[//color
        '', '', '3575.gif', '3563.gif', '3564.gif', '3565.gif', '3566.gif', '3567.gif', '3574.gif'
    ],[//color설명
        '', '', '2컬러', '3컬러', '4컬러', '5컬러', '6컬러', '7컬러', '21컬러'
    ]
];



///////////////////////////////////////////
////////////////find_item/////////////////
//////////////////////////////////////////
function find_item(item_arr, item){
    for(let i = 0; i<item_arr.length; i++){
        if(item_arr[i].item_code == item){
            return item_arr[i];
        }
    }
}

///////////////////////////////////////////
////////////////add_img_box///////////////
//////////////////////////////////////////
function add_img_box(parents, item, i, j){ // 추가할 section, item_code, section몇번째에 추가할건지
    let item_img = find_item(ITEM_IMG, item);
    let item_info = find_item(ITEM_INFO, item);
    let item_cate;
    for(let j=0; j<CATE.length; j++){
        if(CATE[j] == item_info.cate){
            item_cate = j;
            break;
        }
    }
    let a = `<a href="./item.html?cate_no=${item_cate}&item_no=${item}"></a>`
    let div = '<div class="imgbox"></div>';
    let div_desc = '<div class="item_desc"></div>';
    j = j == null? 0: j;
    parents.eq(i).append(a);
    parents.eq(i).children('a').eq(j).append(div);
    parents.eq(i).children('a').eq(j).append(div_desc);

    let img_hover = `<img src="./img/item_list/hover/${item_img?.hover_src}" alt="${item_info?.title}" class="img_hover">`;
    let img_orig = `<img src="./img/item_list/${item_img?.main_src}" alt="${item_info?.title}" class="img_orig">`;
    parents.eq(i).find('.imgbox').eq(j).append(img_hover);
    parents.eq(i).find('.imgbox').eq(j).append(img_orig);

    let code = `<div class="item_code_box"><span class = "item_code">${item}</span><span class="item_review">${item_info.review > 0?"리뷰 <b>"+item_info?.review.toLocaleString('ko'):""}</b></span></div>`;

    parents.eq(i).find('.item_desc').eq(j).append(code);
    let title = `<div class="item_title">${item_info?.title}</div>`;
    parents.eq(i).find('.item_desc').eq(j).append(title);
    let price;
    if(item_info?.o_price == item_info?.s_price){
        price = `<div class="item_price">${item_info?.s_price.toLocaleString('ko')}</div>`;
    }else{
        price = `<div class="item_price">${item_info?.o_price.toLocaleString('ko')}&nbsp;&nbsp;<span class="item_orig_price">${item_info?.s_price.toLocaleString('ko')}</span></div>`;
    }
    parents.eq(i).find('.item_desc').eq(j).append(price);
    let item_info_box='<div class="item_info_box">';
    if(item_info?.color+"" != ""){
        item_info_box += `<img src = "./img/icon/${ICON_IMG[3][item_info?.color]}" alt="${ICON_IMG[4][item_info?.color]}">`;
    }
    if(item_info.item_info_1+"" != ""){
        item_info_box += `<img src = "./img/icon/${ICON_IMG[0][item_info?.item_info_1]}" alt="${ICON_IMG[1][item_info?.item_info_1]}">`;
    }
    if(item_info?.item_info_2+"" != ""){
        item_info_box += `<img src = "./img/icon/${ICON_IMG[0][item_info?.item_info_2]}" alt="${ICON_IMG[1][item_info?.item_info_2]}">`;
    }
    if(item_info?.item_info_3+"" != ""){
        item_info_box += `<img src = "./img/icon/${ICON_IMG[0][item_info?.item_info_3]}" alt="${ICON_IMG[1][item_info?.item_info_3]}">`;
    }
    if(item_info?.item_hot+"" != ""){
        item_info_box += `<img src = "./img/icon/${ICON_IMG[2][0]}" alt="${ICON_IMG[2][1]}">`;
    }
    item_info_box += '</div>';
    parents.eq(i).find('.item_desc').eq(j).append(item_info_box);
    if(item_info?.desc+"" != "" || item_info?.ec_desc+"" != ""){
    let item_text = '<div class="item_txt">'
        if(item_info?.ec_desc+"" != ""){
            item_text += `<span class="item_txt_event">${item_info?.ec_desc}</span><br>`;
        }
        item_text += item_info?.desc + '</div>';
        parents.eq(i).find('.item_desc').eq(j).append(item_text);
    }
}

/////////////////////////////////////
/////////// 링크로 값 인식 ///////////
/////////////////////////////////////
function get_url_info(key) {
    let url =location.href; // list.html?cate_no=0&item_no=8#with_item
    url = url.split("?")[1] // cate_no=0&item_no=8#with_item
    if(url.length > 1) {
        url = url.split("&") // [cateNo=0  ,  item_no=8#with_item]
        for(let i=0; i<url.length; i++) {
            let tmp_url = url[i].split("="); // 0-> cateNo=0 => [cateNo  ,  0#with_item]
                                            // 1-> item_no=8#with_item => [itemNo  ,  8#with_item]
            if(tmp_url[0] == key) {
                return tmp_url[1].split("#")[0]; // [0  ,  with_item]
            }
        }
    }
    else {
        console.log("없어")
        alert("잘못된 접근입니다.");
        location.replace('index.html')
    }
} 