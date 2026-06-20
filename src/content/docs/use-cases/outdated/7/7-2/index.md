---
title: "(Outdated) 7.2 리스크 안내 생성 (개요)"
sidebar:
  order: 1
---

## 7.2 리스크 안내 생성

### 개요
유저의 안전하고 쾌적한 야외 활동을 위해 환경 위협 요소를 직관적으로 인지할 수 있는 가이드라인 및 위험 경고 컴포넌트를 텍스트 바디로 구축하는 기능이다.

### 요구사항

(Claude가 작성, 검토 필요)

1. 6.5절에서 연산 완료된 기온 급변동 수치 및 특수 기상 이변 로그 데이터를 수집한다.
2. 유저가 직관적으로 대처할 수 있는 실질적 행동 지침 형태의 자연어로 데이터를 정형화한다.

---

### 유스케이스 다이어그램
```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
skinparam shadowing false

actor "사용자" as User

rectangle "리스크 안내 생성" {
  usecase "패션 위험 가이드 빌드" as UC1
  usecase "실질 행동 지침 자연어화" as UC2
  usecase "위협 요인 로그 수집" as UC3
}

User --> UC1
UC1 ..> UC2 : <<include>>
UC1 ..> UC3 : <<include>>
@enduml
```