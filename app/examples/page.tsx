import Link from "next/link";
import { Code, FileText, LayoutGrid } from "lucide-react";

export default function ExamplesPage() {
  const examples = [
    {
      title: "버튼 예제",
      description: "다양한 스타일의 버튼 컴포넌트들을 확인할 수 있습니다.",
      href: "/examples/buttons",
      icon: Code,
    },
    {
      title: "폼 예제",
      description: "입력 필드, 체크박스, 텍스트 영역 등의 폼 요소들입니다.",
      href: "/examples/forms",
      icon: FileText,
    },
    {
      title: "카드 예제",
      description: "다양한 레이아웃의 카드 컴포넌트들을 보여줍니다.",
      href: "/examples/cards",
      icon: LayoutGrid,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* 헤더 */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">컴포넌트 예제</h1>
          <p className="text-lg text-muted-foreground">
            다양한 UI 컴포넌트와 패턴들을 확인하고 어떻게 사용하는지 배워보세요.
          </p>
        </div>

        {/* 예제 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {examples.map((example) => {
            const IconComponent = example.icon;
            return (
              <Link
                key={example.href}
                href={example.href}
                className="group block p-6 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors hover:border-primary"
              >
                <div className="mb-4">
                  <IconComponent className="h-8 w-8 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  {example.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {example.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
