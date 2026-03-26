import HeroSection from "@/components/sections/hero";
import FeaturesSection from "@/components/sections/features";
import CTASection from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 히어로 섹션 */}
      <HeroSection />

      {/* 기능 섹션 */}
      <FeaturesSection />

      {/* CTA 섹션 */}
      <CTASection />
    </div>
  );
}
