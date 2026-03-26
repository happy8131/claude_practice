import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* 배경 그라디언트 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* 배지 */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-border rounded-full text-sm text-foreground mb-6">
          <span className="flex h-2 w-2 rounded-full bg-green-500" />
          새로운 스타터킷 출시
        </div>

        {/* 메인 헤드라인 */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
          현대적인 웹 개발을
          <br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            빠르게 시작하세요
          </span>
        </h1>

        {/* 서브타이틀 */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Next.js 16, TypeScript, Tailwind CSS, shadcn/ui로 구성된 프로덕션 레벨의
          스타터킷. 보일러플레이트 코드는 이미 준비되어 있습니다.
        </p>

        {/* CTA 버튼 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="gap-2"
            asChild
          >
            <Link href="#features">
              시작하기
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
          >
            <Link href="#docs">문서 보기</Link>
          </Button>
        </div>

        {/* 하단 통계 */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-foreground">100%</div>
            <p className="text-sm text-muted-foreground">TypeScript</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground">0ms</div>
            <p className="text-sm text-muted-foreground">초기 설정</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground">∞</div>
            <p className="text-sm text-muted-foreground">확장성</p>
          </div>
        </div>
      </div>
    </section>
  );
}
