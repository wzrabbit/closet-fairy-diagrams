// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import plantuml from "astro-plantuml";
import { ion } from "starlight-ion-theme";

// https://astro.build/config
export default defineConfig({
  // GitHub Pages 배포: 프로젝트 페이지라 base에 레포명을 둔다.
  // 주소 → https://wzrabbit.github.io/closet-fairy-diagrams
  site: "https://wzrabbit.github.io",
  base: "/closet-fairy-diagrams",
  // 임시 Cloudflare 터널 공유용: trycloudflare 호스트 허용 (공유가 끝나면 제거)
  vite: { server: { allowedHosts: [".trycloudflare.com"] } },
  integrations: [
    plantuml({
      // astro-plantuml 0.1.4는 출력 mime를 PNG로 고정합니다(svg 미지원).
      // ⚠️ 공개 서버라 빌드/개발 시 다이어그램 소스가 외부로 전송됩니다.
      serverUrl: "https://www.plantuml.com/plantuml/png/",
      // 비공개 내용이면 로컬 서버로 교체(택1):
      //   1) Docker:  docker run -d -p 8080:8080 plantuml/plantuml-server:jetty
      //   2) Java(설치됨): java -jar plantuml.jar -picoweb -port 8080
      //   → serverUrl: 'http://localhost:8080/png/',
    }),
    starlight({
      title: "옷장요정 다이어그램",
      description: "옷장요정 유스케이스 다이어그램 문서 모음",
      plugins: [ion()],
      // 폰트: Wanted Sans 하나로 고정(한국어/영어 모두 커버). head에 직접 주입.
      head: [
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.3/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css",
          },
        },
      ],
      locales: {
        root: {
          label: "한국어",
          lang: "ko",
        },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/wzrabbit/closet-fairy-diagrams",
        },
      ],
      // 수동 구성: 기능명을 카테고리로, 각 상위 페이지는 "개요"로, 숫자 라벨/유스케이스 래퍼 없음.
      // (페이지를 추가/삭제하면 이 목록도 함께 갱신해야 한다.)
      sidebar: [
        { label: "전체 시스템", slug: "use-cases/system" },
        {
          label: "사용자 관리 시스템",
          items: [
            { label: "개요", slug: "use-cases/2" },
            { label: "회원가입 기능", slug: "use-cases/2/2-1" },
            { label: "로그인 기능", slug: "use-cases/2/2-2" },
            { label: "로그아웃 기능", slug: "use-cases/2/2-3" },
            { label: "사용자 정보 조회", slug: "use-cases/2/2-5" },
            { label: "사용자 정보 수정", slug: "use-cases/2/2-6" },
          ],
        },
        {
          label: "개인 설정",
          items: [{ label: "개요", slug: "use-cases/3" }],
        },
        {
          label: "의류 관리",
          items: [
            { label: "개요", slug: "use-cases/5" },
            { label: "의류 등록", slug: "use-cases/5/5-1" },
            { label: "의류 수정", slug: "use-cases/5/5-2" },
            { label: "의류 삭제", slug: "use-cases/5/5-3" },
            { label: "의류 목록 조회", slug: "use-cases/5/5-4" },
          ],
        },
        // 6·7을 "코디 추천" 한 영역으로 통합(원칙 기반 리팩터링). 유스케이스 2개.
        {
          label: "코디 추천",
          items: [
            { label: "개요", slug: "use-cases/6" },
            { label: "코디 추천 받기", slug: "use-cases/6/6-1" },
            { label: "피드백 재추천 받기", slug: "use-cases/6/6-2" },
          ],
        },
        // 아래는 팀원 원본을 기계적으로 옮긴 구버전(리팩터링 전). 보존용이며 outdated/ 경로로 이동했다.
        {
          label: "(Outdated) 코디 추천 시스템",
          items: [
            { label: "사용자 조건 처리", slug: "use-cases/outdated/6/6-1" },
            {
              label: "룰 기반 필터링",
              items: [
                { label: "개요", slug: "use-cases/outdated/6/6-2" },
                {
                  label: "날씨 기반 착용 판단",
                  slug: "use-cases/outdated/6/6-2/6-2-1",
                },
                {
                  label: "계절 기반 착용 판단",
                  slug: "use-cases/outdated/6/6-2/6-2-2",
                },
              ],
            },
            {
              label: "LLM 기반 코디 생성",
              items: [
                { label: "개요", slug: "use-cases/outdated/6/6-3" },
                {
                  label: "옷장 데이터 기반 생성",
                  slug: "use-cases/outdated/6/6-3/6-3-1",
                },
                {
                  label: "코디 다양성 확보",
                  slug: "use-cases/outdated/6/6-3/6-3-2",
                },
              ],
            },
            {
              label: "코디 검증 및 후처리",
              items: [
                { label: "개요", slug: "use-cases/outdated/6/6-4" },
                {
                  label: "옷장 내 존재 검증",
                  slug: "use-cases/outdated/6/6-4/6-4-1",
                },
                {
                  label: "날씨/조건 재검증",
                  slug: "use-cases/outdated/6/6-4/6-4-2",
                },
                {
                  label: "부적합 코디 제거",
                  slug: "use-cases/outdated/6/6-4/6-4-3",
                },
              ],
            },
            { label: "리스크 분석", slug: "use-cases/outdated/6/6-5" },
            {
              label: "상품 연동",
              items: [
                { label: "개요", slug: "use-cases/outdated/6/6-6" },
                {
                  label: "부족 의류 분석",
                  slug: "use-cases/outdated/6/6-6/6-6-1",
                },
                {
                  label: "상품 추천 연결",
                  slug: "use-cases/outdated/6/6-6/6-6-2",
                },
              ],
            },
          ],
        },
        {
          label: "(Outdated) AI 기능 시스템",
          items: [
            {
              label: "추천 설명 생성",
              items: [
                { label: "개요", slug: "use-cases/outdated/7/7-1" },
                {
                  label: "추천 이유 생성",
                  slug: "use-cases/outdated/7/7-1/7-1-1",
                },
                {
                  label: "자연어 문장 구성",
                  slug: "use-cases/outdated/7/7-1/7-1-2",
                },
              ],
            },
            {
              label: "리스크 안내 생성",
              items: [
                { label: "개요", slug: "use-cases/outdated/7/7-2" },
                {
                  label: "주의사항 문장 생성",
                  slug: "use-cases/outdated/7/7-2/7-2-1",
                },
                {
                  label: "날씨 기반 경고 메시지",
                  slug: "use-cases/outdated/7/7-2/7-2-2",
                },
              ],
            },
            {
              label: "피드백 기반 재추천",
              items: [
                { label: "개요", slug: "use-cases/outdated/7/7-3" },
                {
                  label: "피드백 입력 기능",
                  slug: "use-cases/outdated/7/7-3/7-3-1",
                },
                {
                  label: "피드백 문장 분석",
                  slug: "use-cases/outdated/7/7-3/7-3-2",
                },
                {
                  label: "조건 재구성",
                  slug: "use-cases/outdated/7/7-3/7-3-3",
                },
                {
                  label: "코디 재추천 생성",
                  slug: "use-cases/outdated/7/7-3/7-3-4",
                },
              ],
            },
          ],
        },
      ],
      customCss: ["./src/styles/custom.css"],
      lastUpdated: true,
    }),
  ],
});
