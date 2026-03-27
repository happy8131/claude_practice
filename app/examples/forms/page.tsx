import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function FormsExamplePage() {
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

        <h1 className="text-4xl font-bold text-foreground mb-2">폼 예제</h1>
        <p className="text-lg text-muted-foreground mb-12">
          입력 필드, 체크박스, 텍스트 영역 등 다양한 폼 요소들입니다.
        </p>

        {/* 기본 입력 필드 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">입력 필드</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                이름
              </label>
              <input
                id="name"
                type="text"
                placeholder="이름을 입력하세요"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                이메일
              </label>
              <input
                id="email"
                type="email"
                placeholder="이메일을 입력하세요"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                비밀번호
              </label>
              <input
                id="password"
                type="password"
                placeholder="비밀번호를 입력하세요"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* 텍스트 영역 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            텍스트 영역
          </h2>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              메시지
            </label>
            <textarea
              id="message"
              placeholder="메시지를 입력하세요"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </section>

        {/* 체크박스 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            체크박스
          </h2>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded border-border bg-background text-primary focus:ring-2 focus:ring-primary"
              />
              <span className="text-foreground">이용약관에 동의합니다</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-border bg-background text-primary focus:ring-2 focus:ring-primary"
              />
              <span className="text-foreground">개인정보 수집에 동의합니다</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-border bg-background text-primary focus:ring-2 focus:ring-primary"
              />
              <span className="text-foreground">뉴스레터 구독</span>
            </label>
          </div>
        </section>

        {/* 라디오 버튼 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            라디오 버튼
          </h2>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="option"
                defaultChecked
                className="w-4 h-4 text-primary focus:ring-2 focus:ring-primary"
              />
              <span className="text-foreground">옵션 1</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="option"
                className="w-4 h-4 text-primary focus:ring-2 focus:ring-primary"
              />
              <span className="text-foreground">옵션 2</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="option"
                className="w-4 h-4 text-primary focus:ring-2 focus:ring-primary"
              />
              <span className="text-foreground">옵션 3</span>
            </label>
          </div>
        </section>

        {/* 셀렉트 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            셀렉트 드롭다운
          </h2>
          <div>
            <label htmlFor="select-option" className="block text-sm font-medium text-foreground mb-2">
              옵션 선택
            </label>
            <select id="select-option" className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
              <option value="">선택하세요</option>
              <option value="option1">옵션 1</option>
              <option value="option2">옵션 2</option>
              <option value="option3">옵션 3</option>
            </select>
          </div>
        </section>

        {/* 코드 예제 */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            코드 예제
          </h2>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm text-foreground border border-border">
            <code>{`export default function FormExample() {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium">이름</label>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          className="w-full px-4 py-2 rounded-lg border border-border"
        />
      </div>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        <span>동의합니다</span>
      </label>
    </div>
  )
}`}</code>
          </pre>
        </section>
      </div>
    </div>
  );
}
