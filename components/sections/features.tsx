import {
  Zap,
  Palette,
  Code2,
  Smartphone,
  Shield,
  Rocket,
} from "lucide-react";
import type { Feature } from "@/types";

const features: Feature[] = [
  {
    icon: Zap,
    title: "번개 같은 속도",
    description:
      "Next.js 16의 최신 성능 최적화로 빠른 페이지 로드와 부드러운 사용자 경험을 제공합니다.",
  },
  {
    icon: Palette,
    title: "다크모드 지원",
    description:
      "내장된 다크모드 시스템으로 라이트/다크 테마를 자유롭게 전환할 수 있습니다.",
  },
  {
    icon: Code2,
    title: "TypeScript",
    description:
      "타입 안전성으로 버그를 조기에 발견하고 더 나은 개발 경험을 누리세요.",
  },
  {
    icon: Smartphone,
    title: "반응형 디자인",
    description:
      "모바일부터 데스크탑까지 모든 기기에서 완벽하게 작동하는 디자인입니다.",
  },
  {
    icon: Shield,
    title: "보안 최우선",
    description:
      "OWASP 가이드라인을 따른 보안 모범 사례가 이미 적용되어 있습니다.",
  },
  {
    icon: Rocket,
    title: "프로덕션 준비 완료",
    description:
      "배포 최적화, 성능 모니터링, 에러 추적이 모두 설정되어 있습니다.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-20 sm:py-32 bg-muted/30"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            강력한 기능들
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            현대적인 웹 개발에 필요한 모든 것이 준비되어 있습니다.
          </p>
        </div>

        {/* 기능 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow hover:border-primary/50"
              >
                {/* 아이콘 */}
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>

                {/* 제목 */}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>

                {/* 설명 */}
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
