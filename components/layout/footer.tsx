import Link from "next/link";
import { Zap } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* 브랜드 */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 font-bold text-lg text-foreground mb-2">
              <Zap className="h-5 w-5" />
              <span>StarterKit</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Next.js 16으로 만든 모던 웹 스타터킷
            </p>
          </div>

          {/* 제품 */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-foreground">제품</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  홈
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  기능
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  가격
                </Link>
              </li>
            </ul>
          </div>

          {/* 리소스 */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-foreground">
              리소스
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#docs"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  문서
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  블로그
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* 회사 */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-foreground">회사</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  소개
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  연락처
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  개인정보
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} StarterKit. 모든 권리 보유.
          </p>
        </div>
      </div>
    </footer>
  );
}
