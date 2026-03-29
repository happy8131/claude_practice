import LoginForm from "@/components/sections/login-form"

export const metadata = {
  title: "로그인 - 모던 웹 스타터킷",
  description: "계정에 로그인하세요.",
}

export default function LoginPage() {
  return (
    // main이 flex-1이므로 flex로 수직·수평 중앙 정렬
    <div className="flex flex-1 items-center justify-center px-4 py-12">
      <LoginForm />
    </div>
  )
}
