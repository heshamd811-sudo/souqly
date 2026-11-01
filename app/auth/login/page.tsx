'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { LockKeyhole, Mail } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const router = useRouter()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const submit = async (event: FormEvent) => {
    event.preventDefault(); setLoading(true); setError('')
    const { error: signInError } = await createClient().auth.signInWithPassword(form)
    if (signInError) { setError('البريد الإلكتروني أو كلمة المرور غير صحيحة.'); setLoading(false); return }
    router.replace('/admin'); router.refresh()
  }
  return <main dir="rtl" className="flex min-h-screen items-center justify-center bg-[#f7f6f5] p-5"><div className="w-full max-w-md rounded-3xl border border-[#ebe6e3] bg-white p-7 shadow-sm"><div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[#eeecf7] text-[#29245c]"><LockKeyhole /></div><div className="mt-5 text-center"><h1 className="text-2xl font-semibold text-[#29245c]">دخول لوحة التحكم</h1><p className="mt-2 text-sm text-[#77717a]">استخدم حساب مدير المتجر للوصول إلى الإدارة.</p></div><form onSubmit={submit} className="mt-7 space-y-4"><label className="block text-sm font-medium">البريد الإلكتروني<div className="mt-2 flex items-center gap-2 rounded-xl border px-3"><Mail className="size-4 text-[#99939a]" /><input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="h-11 flex-1 bg-transparent text-sm outline-none" placeholder="admin@kledje.com" /></div></label><label className="block text-sm font-medium">كلمة المرور<div className="mt-2 flex items-center gap-2 rounded-xl border px-3"><LockKeyhole className="size-4 text-[#99939a]" /><input required type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="h-11 flex-1 bg-transparent text-sm outline-none" placeholder="••••••••" /></div></label>{error && <p role="alert" className="rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}<Button disabled={loading} className="h-11 w-full bg-[#29245c]">{loading ? 'جارٍ الدخول...' : 'دخول آمن'}</Button></form><a href="/" className="mt-5 block text-center text-sm text-[#77717a] hover:text-[#29245c]">العودة إلى المتجر</a></div></main>
}
