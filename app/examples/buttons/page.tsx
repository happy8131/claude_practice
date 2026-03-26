import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ButtonsExamplePage() {
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

        <h1 className="text-4xl font-bold text-foreground mb-2">버튼 예제</h1>
        <p className="text-lg text-muted-foreground mb-12">
          다양한 스타일과 크기의 버튼 컴포넌트들입니다.
        </p>

        {/* 기본 버튼 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">기본 버튼</h2>
          <div className="flex flex-wrap gap-4">
            <Button>기본 버튼</Button>
            <Button variant="secondary">보조 버튼</Button>
            <Button variant="outline">아웃라인</Button>
            <Button variant="ghost">고스트</Button>
            <Button variant="destructive">삭제</Button>
          </div>
        </section>

        {/* 크기별 버튼 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">크기별 버튼</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button size="sm">작은 버튼</Button>
            <Button>기본 크기</Button>
            <Button size="lg">큰 버튼</Button>
          </div>
        </section>

        {/* 비활성화 상태 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            비활성화 상태
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button disabled>비활성화</Button>
            <Button variant="secondary" disabled>
              보조 - 비활성화
            </Button>
            <Button variant="outline" disabled>
              아웃라인 - 비활성화
            </Button>
          </div>
        </section>

        {/* 코드 예제 */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            코드 예제
          </h2>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm text-foreground border border-border">
            <code>{`import { Button } from "@/components/ui/button"

export default function Example() {
  return (
    <>
      <Button>기본 버튼</Button>
      <Button variant="secondary">보조 버튼</Button>
      <Button variant="outline">아웃라인</Button>
      <Button variant="ghost">고스트</Button>
      <Button size="sm">작은 버튼</Button>
      <Button disabled>비활성화</Button>
    </>
  )
}`}</code>
          </pre>
        </section>
      </div>
    </div>
  );
}
