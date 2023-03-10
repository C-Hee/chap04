/*boot 사용 - 커스텀 적음
이번에 소개할 프레임워크 koa는 커스텀많고 바닥부터 쌓아나가는 경량 프레임워크
기본설계(틀)및 라이브러리 제공
프레임워크마다 학습 필요, 종속적


nodemon: 서버 개발 시 쉬운 재시작

inspect="0.0.0.0" > 웹서버에 모든 Ip 대역 접속허용

devDependencies로 받은 프레임워크는 서버에 올리지 않음(개발용)

배포하는 패키지에서는 사용한 프레임워크를 포함하지 않고, 알아서 받을 수 있도록 이름/버전을 적은 package.json만 포함


쿼리방식을 사용할 때 - 주소에 정보가 포함되어야 할 때
ex) 검색결과를 전달할 때 정보가 query에 포함





기능을 서버에 어떻게 넣을지 고민해야 할 것
최대한 CRUD에 기초한 기본적 기능을 구현하는 것을 목포로 할 것



0116 6일차

설정파일의 분리 ex - db idpw
하는 이유
1. 보안성
2. 버전관리 X 보호
3. 다른파일에서 공통으로 참조할수 있음

0117 
db를 구축하고 통신하는 방법

쿼리문을 동적 데이터를 받아 쿼리를 받을 때
적절한 처리 없이 받을 경우 (검증)
injection: 쿼리 조작, 특수문자 에러 등 문제


statement에 비해 prepared statement의 장점
statement는분석 - 실행 - 결과
이미 분석되었으면 실행 - 결과

connection pool  - statement방식은 쿼리마다 콘솔창 사용
- 과부하 문제

미리 정의된 connection에서 분배-회수 / 동접 폭주시 db문제 해결

대부분 db에서는 TIMESTAMP type으로 타임스탬프 기록
file은 용량 크므로 별도테이블에 저장 후 다른 테이블에서 join참조

파일이 저장될 때는 난수명으로 저장되고, 파일 이름은 별도 필드로 저장
이유: 공격 방지, 파일명 중복 피함.
사용자가 db파일에 직접참조하지 못하게 막음

/file/upload
/file/:id 순서로 적어야 하는 이유
순서 반대일 경우 업로드 파일도 쿼리로 인식.

0118
피드의 파일업로드
파일은 피드와 동시에 업로드되는 것이 아니라.
filecontroller를 통해 업로드 된 후 fileId받아옴
fileId와 userId로 피드 전송
let item = await query.show(id);
token('abc', id: item.id)


/**
     * get방식 쿼리 값을 가져오는 방법
     * let query =ctx.query;
     * query.color
     * query.size
     * query.count
     * (브라우저에서 ?color=red&size=XL&count2 입력한 경우)
     */

