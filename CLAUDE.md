@AGENTS.md

## ⚠️ Version Gotchas — 코드 작성 전 반드시 확인

| 항목 | 잘못된 패턴 (학습 데이터) | 올바른 패턴 (이 프로젝트) |
|------|--------------------------|---------------------------|
| Radix UI import | `from "@radix-ui/react-slot"` | `from "radix-ui"` |
| Radix Slot 사용 | `<Slot>` | `<Slot.Root>` |
| Tailwind 설정 | `tailwind.config.js` 파일 | `app/globals.css`의 `@theme inline {}` 블록 |
| 다크모드 선언 | `darkMode: "class"` in config | `@custom-variant dark (&:is(.dark *))` in CSS |
| shadcn 스타일 | `"default"` / `"new-york"` | `"radix-nova"` (`components.json` 참조) |
| ESLint 설정 | `.eslintrc.json` | `eslint.config.mjs` (flat config) |
| Next.js 설정 | `next.config.js` | `next.config.ts` |

## 코딩 컨벤션

- 들여쓰기 2칸 / 변수·함수명 영어 / 주석·문서 한국어
- Server Component 기본 → `"use client"`는 이벤트·useState·브라우저 API 필요 시만
- `className`은 반드시 `cn()` 사용 (`lib/utils.ts`)
- 컴포넌트 변형은 CVA (`class-variance-authority`)
- 새 컴포넌트에 `data-slot` 속성 부착 (radix-nova 패턴)
- 새 타입은 `types/index.ts`에만 추가 및 export
- 경로 별칭: `@/*` → `./*`

## 프로젝트 구조

| 경로 | 역할 |
|------|------|
| `components/ui/` | shadcn 원자 컴포넌트 (shadcn CLI로만 추가) |
| `components/layout/` | Navbar, Footer (Server Component) |
| `components/sections/` | 페이지 섹션 (Server Component) |
| `hooks/` | "use client" 훅만 위치 |
| `types/index.ts` | 전역 타입 중앙 관리 |
| `app/globals.css` | Tailwind v4 테마 + CSS 변수 (tailwind.config 없음) |
| `app/providers.tsx` | ThemeContext (use client) |
| `lib/utils.ts` | `cn()` 유틸리티 |

## ⚠️ 다크모드 — 임의 수정 금지

구조: `layout.tsx` FOUC 스크립트 → `ThemeProvider` → `useTheme` 훅 (3-레이어)

- `html` 요소의 `.dark` 클래스로 제어
- `suppressHydrationWarning`은 `<html>` / `<body>` / `<script>` 세 곳 모두 필수 (제거 시 hydration 에러)
- 다크 색상: `globals.css`의 `.dark {}` 블록 CSS 변수로만 관리
- 컴포넌트 다크 스타일: `dark:*` Tailwind 클래스 사용

## MCP 도구

| 도구 | 언제 사용 |
|------|----------|
| `context7` | Next.js 16 / Tailwind v4 API 조회 시 필수 (학습 데이터로 직접 작성 금지) |
| `shadcn` | shadcn 컴포넌트 추가·검색 |
| `playwright` | 브라우저 자동화·UI 테스트 |
| `sequential-thinking` | 복잡한 구조 설계 |

## 참조 문서

Next.js 16 내장 문서: `node_modules/next/dist/docs/`
- `01-app/` → App Router
- `02-pages/` → Pages Router
- `03-architecture/` → 아키텍처
