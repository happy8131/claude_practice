import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-32 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 text-center">
          {/* 헤드라인 */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            지금 바로 시작하세요
          </h2>

          {/* 부제 */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            이 스타터킷으로 당신의 다음 프로젝트를 빠르게 시작하세요. 모든 기초가
            이미 준비되어 있습니다.
          </p>

          {/* CTA 버튼 그룹 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="gap-2"
              asChild
            >
              <Link href="https://github.com" target="_blank">
                GitHub에서 보기
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <Link href="mailto:contact@example.com">
                문의하기
              </Link>
            </Button>
          </div>

          {/* 추가 정보 */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              모든 소스 코드는 MIT 라이선스로 제공됩니다.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="text-muted-foreground">✓ 무료</span>
              <span className="text-muted-foreground">✓ 오픈소스</span>
              <span className="text-muted-foreground">✓ 상업용 가능</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
