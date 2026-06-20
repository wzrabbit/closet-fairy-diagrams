---
title: "(Outdated) 7.1 추천 설명 생성 (개요)"
sidebar:
  order: 1
---

## 7.1 추천 설명 생성

### 개요
사용자가 도출된 스타일링에 심리적 만족감과 당위성을 느낄 수 있도록 코디 조합의 내부 가치와 논리적 연관성을 텍스트 아웃풋으로 구성하는 핵심 AI 기능이다.

### 요구사항

(Claude가 작성, 검토 필요)

1. 완성된 의류 컴포넌트들의 색상 조합(톤온톤 등)과 스타일적 지향점을 해석한다.
2. 유저 인터페이스에 부합하는 최적의 텍스트 토큰 구조로 변환을 명령한다.

---

### 유스케이스 다이어그램
```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
skinparam shadowing false

actor "사용자" as User

rectangle "추천 설명 생성" {
  usecase "추천 논리 텍스트 구성" as UC1
  usecase "텍스트 토큰 최적화" as UC2
  usecase "스타일/색상 조합 해석" as UC3
}

User --> UC1
UC1 ..> UC2 : <<include>>
UC1 ..> UC3 : <<include>>
@enduml
```