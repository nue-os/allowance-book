# 💸 용돈 기입장

"용돈 기입장"은 간단히 수입과 지출을 관리할 수 있는 React 기반 웹 어플리케이션입니다. <br/>
거래 내역 추가, 삭제 기능과 함께 잔액, 총 수입, 총 지출을 한눈에 확인할 수 있습니다.

<img alt="용돈 기입장" src="https://github.com/user-attachments/assets/7155e148-9511-4ce2-999b-3ba23f97cce3" />
<img width="333" alt="용돈 기입장 모바일 반응형" src="https://github.com/user-attachments/assets/c10684a3-c96d-4ade-9259-7e1c9f597ba7" />

https://nue-os.github.io/allowance-book/

<br/>

## ✨ 주요 기능

- 수입, 지출 항목 추가
- 거래 내역 삭제
- 입력한 금액 자동 ₩ 표시 및 천 단위 콤마(,) 포맷팅
- 실시간 잔액, 수입, 지출 합산 표시
- 데이터는 localStorage에 저장되어 새로고침해도 유지

<br/>

## 🖥️ 주요 화면

### 거래 내역 입력

- 텍스트, 수입/지출, 금액 입력 후 저장

  <img width="664" alt="입력 필드" src="https://github.com/user-attachments/assets/edc541a1-f29b-4306-8d21-69f6206f68d8" />

- 금액 입력 시 자동으로 ₩ + , 포맷 적용

  <img width="729" alt="금액 입력" src="https://github.com/user-attachments/assets/bd89acca-f37c-421d-81e7-f039de58103d" />

<br/>

### 거래 내역 리스트

- 수입은 초록색, 지출은 빨간색 테두리로 표시

  <img width="746" alt="거래 내역" src="https://github.com/user-attachments/assets/7fed5ae6-5e3f-47ce-bd12-dff30ec5c3f3" />

- 삭제 버튼 클릭 시 모달 팝업으로 삭제 확인

  <img width="1470" alt="삭제" src="https://github.com/user-attachments/assets/c336a1ea-cf66-446c-9c8d-0935f4afa3f6" />
  <img width="1470" alt="삭제 모달" src="https://github.com/user-attachments/assets/4525147e-4acd-4d99-a5a9-7b152b494e34" />

<br/>

### 요약 정보

현재 잔액, 총 수입, 총 지출이 상단에 표시

<img alt="요약 정보" src="https://github.com/user-attachments/assets/7155e148-9511-4ce2-999b-3ba23f97cce3" />

<br/>

## 🛠️ 사용 기술

- React v19 (Vite)
- Redux Toolkit (상태 관리)
- CSS Module (스타일 관리)
- localStorage (데이터 저장)
