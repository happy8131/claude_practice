// 네비게이션 링크 타입
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

// 기능 소개 카드 타입
export interface Feature {
  icon: string; // lucide-react 아이콘 이름
  title: string;
  description: string;
}

// 테마 타입
export type Theme = "light" | "dark" | "system";

// ThemeContext 타입
export interface ThemeContextType {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}
