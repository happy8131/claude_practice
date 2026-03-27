import Link from "next/link";
import { Zap } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";
import MobileMenu from "@/components/mobile-menu";
import type { NavLink } from "@/types";

// 네비게이션 링크 목록
const navLinks: NavLink[] = [
  { label: "홈", href: "/" },
  { label: "기능", href: "#features" },
  { label: "예제", href: "/examples" },
  { label: "문서", href: "#docs" },
  { label: "연락처", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* 로고 */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg text-foreground hover:text-primary transition-colors"
          >
            <Zap className="h-6 w-6" />
            <span>StarterKit</span>
          </Link>

          {/* 데스크탑 네비게이션 */}
          <div className="hidden md:flex items-center gap-8">
            <nav aria-label="주요 내비게이션" className="flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* 테마 토글 */}
            <ThemeToggle />
          </div>

          {/* 모바일 메뉴 */}
          <MobileMenu links={navLinks} />
        </div>
      </div>
    </header>
  );
}
