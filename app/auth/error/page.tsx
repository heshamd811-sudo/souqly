export default function AuthErrorPage() {
  return <main dir="rtl" className="flex min-h-screen items-center justify-center bg-[#f7f6f5] p-6"><div className="max-w-md rounded-3xl bg-white p-8 text-center shadow-sm"><h1 className="text-2xl font-semibold text-[#29245c]">تعذر إكمال تسجيل الدخول</h1><p className="mt-3 text-sm leading-7 text-[#77717a]">انتهت صلاحية الرابط أو لا تملك صلاحية الوصول. حاول مرة أخرى.</p><a href="/auth/login" className="mt-6 inline-flex rounded-xl bg-[#29245c] px-5 py-3 text-sm font-semibold text-white">العودة لتسجيل الدخول</a></div></main>
}
