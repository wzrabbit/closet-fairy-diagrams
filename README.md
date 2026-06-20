# 옷장요정 다이어그램

옷장요정 프로젝트의 유스케이스 다이어그램을 모아 둔 문서 사이트입니다. [Astro Starlight](https://starlight.astro.build/)로 만들었고, 다이어그램은 [PlantUML](https://plantuml.com/ko/use-case-diagram)로 그립니다.

## 실행 방법

프론트엔드 개발이 처음이어도 따라 할 수 있도록 Node.js 설치부터 설명합니다.

### 1. Node.js 설치

이 사이트를 실행하려면 Node.js가 필요합니다. 자바스크립트로 만든 프로그램을 컴퓨터에서 돌려 주는 도구입니다.

1. [Node.js 공식 사이트](https://nodejs.org/ko)에 접속합니다.
2. **LTS**(장기 지원, 안정 버전)라고 적힌 쪽을 내려받아 설치합니다. 설치 중 나오는 선택지는 모두 기본값 그대로 두고 넘어가면 됩니다.
3. 설치가 끝나면 제대로 깔렸는지 확인합니다. 터미널(Windows는 PowerShell, macOS는 터미널 앱)을 열고 아래를 입력해 버전 숫자가 나오면 성공입니다.

   ```bash
   node -v
   npm -v
   ```

### 2. 프로젝트 내려받기

폴더가 이미 컴퓨터에 있다면 이 단계는 건너뜁니다. 없다면 Git으로 내려받습니다.

```bash
git clone https://github.com/wzrabbit/closet-fairy-diagrams.git
cd closet-fairy-diagrams
```

Git이 없다면 GitHub 저장소 페이지에서 초록색 **Code** 버튼을 누른 뒤 **Download ZIP**으로 받아 압축을 풀어도 됩니다.

### 3. 필요한 패키지 설치

프로젝트 폴더 안에서 한 번만 실행하면 됩니다.

```bash
npm install
```

### 4. 개발 서버 실행

```bash
npm run dev
```

실행한 뒤 브라우저에서 **http://localhost:4321** 에 접속하면 사이트가 보입니다. 끄려면 터미널에서 `Ctrl` + `C` 를 누릅니다.
