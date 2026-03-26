import Link from "next/link";
import { ArrowLeft, Star, TrendingUp, Users } from "lucide-react";

export default function CardsExamplePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* 뒤로가기 링크 */}
        <Link
          href="/examples"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          예제 목록으로 돌아가기
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-2">카드 예제</h1>
        <p className="text-lg text-muted-foreground mb-12">
          다양한 레이아웃의 카드 컴포넌트 예제들입니다.
        </p>

        {/* 기본 카드 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">기본 카드</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                카드 제목
              </h3>
              <p className="text-muted-foreground">
                이것은 기본적인 카드 컴포넌트입니다. 제목과 설명 텍스트가 포함되어 있습니다.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                다른 카드
              </h3>
              <p className="text-muted-foreground">
                여러 개의 카드를 그리드로 배치할 수 있습니다. 반응형 레이아웃도 지원합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 아이콘이 있는 카드 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            아이콘이 있는 카드
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg border border-border bg-card p-6 hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                기능 1
              </h3>
              <p className="text-sm text-muted-foreground">
                이 카드는 아이콘과 함께 기능을 설명합니다.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                기능 2
              </h3>
              <p className="text-sm text-muted-foreground">
                이 카드는 트렌드를 보여주는 통계 정보를 담을 수 있습니다.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                기능 3
              </h3>
              <p className="text-sm text-muted-foreground">
                이 카드는 팀이나 그룹 관련 정보를 표시합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 프로필 카드 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            프로필 카드
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-32 bg-gradient-to-r from-primary to-primary/50" />
              <div className="p-6 -mt-12 relative">
                <div className="w-24 h-24 rounded-full border-4 border-card bg-muted mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Kim John
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Product Designer
                </p>
                <p className="text-sm text-muted-foreground">
                  현대적이고 깔끔한 디자인을 선호합니다.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-32 bg-gradient-to-r from-blue-500 to-blue-400" />
              <div className="p-6 -mt-12 relative">
                <div className="w-24 h-24 rounded-full border-4 border-card bg-muted mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Park Lee
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Frontend Developer
                </p>
                <p className="text-sm text-muted-foreground">
                  React와 TypeScript를 좋아합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 통계 카드 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            통계 카드
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <p className="text-sm text-muted-foreground mb-2">총 사용자</p>
              <p className="text-3xl font-bold text-foreground">12,345</p>
              <p className="text-xs text-green-600 mt-2">↑ 12% 증가</p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <p className="text-sm text-muted-foreground mb-2">활성 세션</p>
              <p className="text-3xl font-bold text-foreground">8,234</p>
              <p className="text-xs text-green-600 mt-2">↑ 5% 증가</p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <p className="text-sm text-muted-foreground mb-2">전환율</p>
              <p className="text-3xl font-bold text-foreground">3.24%</p>
              <p className="text-xs text-red-600 mt-2">↓ 2% 감소</p>
            </div>
          </div>
        </section>

        {/* 코드 예제 */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            코드 예제
          </h2>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm text-foreground border border-border">
            <code>{`export default function CardExample() {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="text-lg font-semibold text-foreground mb-2">
        카드 제목
      </h3>
      <p className="text-muted-foreground">
        카드 설명이 여기에 나타납니다.
      </p>
    </div>
  )
}`}</code>
          </pre>
        </section>
      </div>
    </div>
  );
}
