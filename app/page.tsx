'use client'

import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bell,
  Check,
  ChevronDown,
  ClipboardList,
  Menu,
  Package,
  Plus,
  Search,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  TrendingUp,
  Users,
  X,
} from 'lucide-react'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-8xjxTPIdajfNYO1yGFUhUegAXDzpHt.jpg'

const products = [
  { id: 1, name: 'كريم ترطيب يومي', category: 'العناية بالبشرة', price: 129, oldPrice: 159, rating: 4.9, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=85', badge: 'الأكثر مبيعاً' },
  { id: 2, name: 'عطر أوركيد ناعم', category: 'العطور', price: 249, oldPrice: 299, rating: 4.8, image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=85', badge: 'جديد' },
  { id: 3, name: 'مجموعة العناية بالشعر', category: 'العناية بالشعر', price: 189, oldPrice: 229, rating: 4.7, image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=700&q=85', badge: 'عرض خاص' },
  { id: 4, name: 'زيت وجه فاخر', category: 'العناية بالبشرة', price: 159, oldPrice: 189, rating: 4.9, image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=700&q=85', badge: '' },
]

const categories = [
  { name: 'العناية بالبشرة', count: '24 منتج', icon: '✦', tone: 'bg-[#f6ede9]' },
  { name: 'العطور', count: '18 منتج', icon: '◌', tone: 'bg-[#e9edf8]' },
  { name: 'العناية بالشعر', count: '16 منتج', icon: '⌁', tone: 'bg-[#f1eaf7]' },
]

const orderRows = [
  { id: '#KL-1048', customer: 'سارة أحمد', product: 'مجموعة العناية بالشعر', amount: '189 ر.س', status: 'قيد المعالجة', date: 'اليوم، 10:42 ص' },
  { id: '#KL-1047', customer: 'نورة خالد', product: 'عطر أوركيد ناعم', amount: '249 ر.س', status: 'تم الشحن', date: 'أمس، 6:18 م' },
  { id: '#KL-1046', customer: 'ريم محمد', product: 'كريم ترطيب يومي', amount: '129 ر.س', status: 'تم التسليم', date: 'أمس، 1:30 م' },
  { id: '#KL-1045', customer: 'هدى علي', product: 'زيت وجه فاخر', amount: '159 ر.س', status: 'قيد المراجعة', date: 'الأحد، 9:12 ص' },
]

function Logo() {
  return <img src={logoUrl} alt="شعار Kledje" className="size-10 rounded-xl object-cover" />
}

function Storefront({ onAdmin }: { onAdmin: () => void }) {
  const [cart, setCart] = useState<number[]>([])
  const [category, setCategory] = useState('الكل')
  const [checkout, setCheckout] = useState(false)
  const [ordered, setOrdered] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const filtered = category === 'الكل' ? products : products.filter((product) => product.category === category)
  const total = cart.reduce((sum, id) => sum + (products.find((product) => product.id === id)?.price ?? 0), 0)

  return (
    <div className="min-h-screen bg-[#fbfaf9] text-[#242329]" dir="rtl">
      <div className="bg-[#29245c] px-5 py-2 text-center text-xs font-medium text-white">توصيل مجاني للطلبات فوق ٢٠٠ ر.س · الدفع عند الاستلام متاح</div>
      <header className="border-b border-[#ece8e5] bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <div className="flex items-center gap-3"><Logo /><div><div className="text-lg font-bold tracking-tight">Kledje</div><div className="text-[10px] tracking-[0.22em] text-[#8c8890]">BEAUTY ESSENTIALS</div></div></div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#6d6870] md:flex"><a href="#shop" className="text-[#29245c]">الرئيسية</a><a href="#shop">المنتجات</a><a href="#categories">التصنيفات</a><a href="#about">من نحن</a></nav>
          <div className="flex items-center gap-2"><Button aria-label="بحث" variant="ghost" size="icon" onClick={() => setSearchOpen(!searchOpen)}><Search /></Button><Button aria-label="السلة" variant="ghost" size="icon" className="relative" onClick={() => setCheckout(true)}><ShoppingCart />{cart.length > 0 && <span className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-[#29245c] text-[9px] text-white">{cart.length}</span>}</Button><Button variant="outline" className="hidden gap-2 sm:flex" onClick={onAdmin}><BarChart3 data-icon="inline-start" /> لوحة التحكم</Button><Button aria-label="القائمة" variant="ghost" size="icon" className="md:hidden"><Menu /></Button></div>
        </div>
        {searchOpen && <div className="mx-auto max-w-7xl px-5 pb-4"><div className="flex items-center gap-2 rounded-xl border border-[#e3dedd] bg-[#fbfaf9] px-3"><Search className="size-4 text-[#99939a]" /><input autoFocus placeholder="ابحثي عن منتج..." className="h-10 flex-1 bg-transparent text-sm outline-none" /></div></div>}
      </header>
      <main>
        <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-14 pt-8 lg:grid-cols-[1.07fr_.93fr] lg:px-8 lg:pt-12">
          <div className="flex flex-col justify-center rounded-[2rem] bg-[#eeecf7] px-7 py-12 lg:px-16 lg:py-20"><div className="mb-5 flex items-center gap-2 text-xs font-semibold text-[#6f68a3]"><Sparkles className="size-4" /> جمالك يبدأ من هنا</div><h1 className="max-w-xl text-4xl font-semibold leading-[1.25] tracking-tight text-[#29245c] sm:text-6xl">اختاري ما يناسب<br /><span className="text-[#8a6599]">جمالك الطبيعي</span></h1><p className="mt-6 max-w-md text-sm leading-7 text-[#716d77]">منتجات مختارة بعناية لتمنحك روتيناً بسيطاً، فعالاً، ومليئاً بالعناية.</p><div className="mt-8 flex flex-wrap gap-3"><Button size="lg" className="h-12 rounded-xl bg-[#29245c] px-7 hover:bg-[#383178]" onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}>تسوقي الآن <ArrowLeft data-icon="inline-end" /></Button><Button size="lg" variant="outline" className="h-12 rounded-xl border-[#d8d4e7] bg-transparent text-[#29245c]">اكتشفي مجموعتنا</Button></div></div>
          <div className="relative min-h-[350px] overflow-hidden rounded-[2rem] bg-[#dfd9d2]"><img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=90" alt="منتجات عناية وجمال مرتبة بألوان هادئة" className="absolute inset-0 size-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#29245c]/40 to-transparent" /><div className="absolute bottom-7 right-7 text-white"><div className="text-xs font-medium opacity-80">مجموعة الصيف</div><div className="mt-1 text-2xl font-semibold">Glow Edit</div></div></div>
        </section>
        <section id="categories" className="mx-auto max-w-7xl px-5 pb-14 lg:px-8"><div className="mb-6 flex items-end justify-between"><div><div className="text-xs font-semibold text-[#8a6599]">تسوقي حسب احتياجك</div><h2 className="mt-2 text-2xl font-semibold">التصنيفات المفضلة</h2></div><Button variant="link" className="text-[#29245c]">عرض الكل <ArrowLeft data-icon="inline-end" /></Button></div><div className="grid gap-4 sm:grid-cols-3">{categories.map((item) => <button key={item.name} className={`${item.tone} flex items-center justify-between rounded-2xl p-5 text-right transition-transform hover:-translate-y-1`} onClick={() => { setCategory(item.name); document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' }) }}><div><div className="text-3xl font-light text-[#29245c]">{item.icon}</div><div className="mt-4 font-semibold text-[#37313c]">{item.name}</div><div className="mt-1 text-xs text-[#827a82]">{item.count}</div></div><ArrowLeft className="size-5 text-[#827080]" /></button>)}</div></section>
        <section id="shop" className="bg-white py-14"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><div className="text-xs font-semibold text-[#8a6599]">مختارات لك</div><h2 className="mt-2 text-2xl font-semibold">الأكثر طلباً</h2></div><div className="flex gap-2 overflow-auto">{['الكل', 'العناية بالبشرة', 'العطور', 'العناية بالشعر'].map((item) => <Button key={item} size="sm" variant={category === item ? 'default' : 'outline'} className={category === item ? 'bg-[#29245c]' : ''} onClick={() => setCategory(item)}>{item}</Button>)}</div></div><div className="grid grid-cols-2 gap-4 md:grid-cols-4">{filtered.map((product) => <article key={product.id} className="group"><div className="relative aspect-[.88] overflow-hidden rounded-2xl bg-[#f3efed]"><img src={product.image} alt={product.name} className="size-full object-cover transition duration-500 group-hover:scale-105" />{product.badge && <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-[#29245c]">{product.badge}</span>}<Button size="icon" className="absolute bottom-3 left-3 size-9 rounded-full bg-[#29245c] opacity-0 transition group-hover:opacity-100" onClick={() => setCart([...cart, product.id])}><Plus /></Button></div><div className="mt-3 flex items-start justify-between gap-2"><div><h3 className="text-sm font-semibold">{product.name}</h3><p className="mt-1 text-xs text-[#969097]">{product.category}</p></div><div className="text-left"><div className="text-sm font-bold text-[#29245c]">{product.price} ر.س</div><div className="text-[10px] text-[#aaa4a8] line-through">{product.oldPrice} ر.س</div></div></div><div className="mt-2 text-xs text-[#b18b58]">★ {product.rating}</div></article>)}</div></div></section>
        <section id="about" className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-14 sm:flex-row sm:items-center sm:justify-between lg:px-8"><div><h2 className="text-2xl font-semibold">كل ما تحتاجينه لروتينك</h2><p className="mt-2 text-sm text-[#77717a]">منتجات أصلية، شحن سريع، وتجربة تسوق مصممة لك.</p></div><div className="grid grid-cols-3 gap-8 text-center text-xs text-[#77717a]"><div><div className="mx-auto mb-2 flex size-10 items-center justify-center rounded-full bg-[#eeecf7] text-[#29245c]"><Package /></div>شحن سريع</div><div><div className="mx-auto mb-2 flex size-10 items-center justify-center rounded-full bg-[#f6ede9] text-[#8a6599]"><Check /></div>منتجات أصلية</div><div><div className="mx-auto mb-2 flex size-10 items-center justify-center rounded-full bg-[#e9edf8] text-[#29245c]"><ShoppingBag /></div>دفع عند الاستلام</div></div></section>
      </main>
      {checkout && <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#29245c]/30 p-0 sm:items-center sm:p-5"><div className="w-full max-w-md rounded-t-3xl bg-white p-6 shadow-2xl sm:rounded-3xl">{ordered ? <div className="py-8 text-center"><div className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#e7f1e9] text-[#3d7a50]"><Check className="size-8" /></div><h2 className="mt-5 text-xl font-semibold">تم استلام طلبك بنجاح</h2><p className="mt-2 text-sm text-[#77717a]">سنتواصل معك لتأكيد تفاصيل التوصيل والدفع عند الاستلام.</p><Button className="mt-6 w-full bg-[#29245c]" onClick={() => { setOrdered(false); setCheckout(false); setCart([]) }}>العودة للمتجر</Button></div> : <><div className="flex items-center justify-between"><h2 className="text-xl font-semibold">إتمام الطلب</h2><Button variant="ghost" size="icon" onClick={() => setCheckout(false)}><X /></Button></div><div className="mt-5 rounded-2xl bg-[#fbfaf9] p-4"><div className="flex justify-between text-sm"><span>عدد المنتجات</span><b>{cart.length || 1}</b></div><div className="mt-3 flex justify-between border-t border-[#ebe6e3] pt-3 text-base font-bold"><span>الإجمالي</span><span className="text-[#29245c]">{total || 0} ر.س</span></div></div><div className="mt-5 flex flex-col gap-3"><input className="h-11 rounded-xl border border-[#e3dedd] px-4 text-sm outline-none focus:border-[#8a6599]" placeholder="الاسم الكامل" /><input className="h-11 rounded-xl border border-[#e3dedd] px-4 text-sm outline-none focus:border-[#8a6599]" placeholder="رقم الجوال" /><input className="h-11 rounded-xl border border-[#e3dedd] px-4 text-sm outline-none focus:border-[#8a6599]" placeholder="العنوان والمدينة" /></div><Button className="mt-5 h-11 w-full bg-[#29245c]" onClick={() => setOrdered(true)}>تأكيد الطلب — الدفع عند الاستلام</Button></>}</div></div>}
    </div>
  )
}

function Dashboard({ onStore }: { onStore: () => void }) {
  const [section, setSection] = useState('نظرة عامة')
  const [showProduct, setShowProduct] = useState(false)
  const nav = [{ label: 'نظرة عامة', icon: BarChart3 }, { label: 'الطلبات', icon: ClipboardList }, { label: 'المنتجات', icon: Package }, { label: 'العملاء', icon: Users }, { label: 'الإعدادات', icon: Settings }]
  return <div className="min-h-screen bg-[#f7f6f5] text-[#242329]" dir="rtl"><aside className="fixed inset-y-0 right-0 hidden w-64 border-l border-[#e8e4e2] bg-white p-5 lg:block"><div className="flex items-center gap-3 border-b border-[#eeeae8] pb-6"><Logo /><div><div className="font-bold">Kledje</div><div className="text-[10px] tracking-[.18em] text-[#99939a]">ADMIN PANEL</div></div></div><div className="mt-8 flex flex-col gap-2">{nav.map(({ label, icon: Icon }) => <button key={label} onClick={() => setSection(label)} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${section === label ? 'bg-[#eeecf7] text-[#29245c]' : 'text-[#77717a] hover:bg-[#faf8f7]'}`}><Icon className="size-4" />{label}</button>)}</div><div className="absolute bottom-5 left-5 right-5"><Button variant="outline" className="w-full" onClick={onStore}><ArrowRight data-icon="inline-start" /> عرض المتجر</Button></div></aside><main className="lg:mr-64"><header className="flex items-center justify-between border-b border-[#e8e4e2] bg-white px-5 py-4 lg:px-9"><div><div className="text-xs text-[#99939a]">الأحد، ١٢ مايو ٢٠٢٤</div><h1 className="mt-1 text-xl font-semibold">{section}</h1></div><div className="flex items-center gap-2"><Button size="icon" variant="ghost"><Bell /></Button><Button className="bg-[#29245c]" onClick={() => setShowProduct(true)}><Plus data-icon="inline-start" /> إضافة منتج</Button></div></header><div className="p-5 lg:p-9"><div className="mb-7 flex items-center justify-between"><div><h2 className="text-2xl font-semibold">صباح الخير، Kledje</h2><p className="mt-1 text-sm text-[#77717a]">إليك ملخص أداء متجرك اليوم.</p></div><Button variant="outline">آخر ٣٠ يوم <ChevronDown data-icon="inline-end" /></Button></div><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[{ label: 'إجمالي المبيعات', value: '12,840 ر.س', change: '+12.5%', icon: TrendingUp }, { label: 'الطلبات الجديدة', value: '48', change: '+8.2%', icon: ClipboardList }, { label: 'العملاء', value: '1,284', change: '+18.4%', icon: Users }, { label: 'المنتجات', value: '58', change: '+4.1%', icon: Package }].map(({ label, value, change, icon: Icon }) => <div key={label} className="rounded-2xl border border-[#e9e5e2] bg-white p-5"><div className="flex items-center justify-between"><span className="text-sm text-[#77717a]">{label}</span><div className="flex size-9 items-center justify-center rounded-xl bg-[#eeecf7] text-[#29245c]"><Icon className="size-4" /></div></div><div className="mt-4 text-2xl font-bold">{value}</div><div className="mt-2 text-xs font-medium text-[#4e8c62]">{change} <span className="font-normal text-[#99939a]">من الشهر الماضي</span></div></div>)}</div><div className="mt-7 grid gap-5 xl:grid-cols-[1.35fr_.65fr]"><div className="rounded-2xl border border-[#e9e5e2] bg-white p-5"><div className="flex items-center justify-between"><div><h3 className="font-semibold">آخر الطلبات</h3><p className="mt-1 text-xs text-[#99939a]">تابعي الطلبات الجديدة وحالتها</p></div><Button variant="link" className="text-[#29245c]" onClick={() => setSection('الطلبات')}>عرض الكل</Button></div><div className="mt-5 overflow-x-auto"><table className="w-full min-w-[620px] text-right text-sm"><thead><tr className="border-b border-[#eeeae8] text-xs text-[#99939a]"><th className="pb-3 font-medium">الطلب</th><th className="pb-3 font-medium">العميل</th><th className="pb-3 font-medium">المنتج</th><th className="pb-3 font-medium">المبلغ</th><th className="pb-3 font-medium">الحالة</th></tr></thead><tbody>{orderRows.map((row) => <tr key={row.id} className="border-b border-[#f2efed] last:border-0"><td className="py-4 font-semibold text-[#29245c]">{row.id}<div className="mt-1 text-[10px] font-normal text-[#99939a]">{row.date}</div></td><td className="py-4">{row.customer}</td><td className="py-4 text-[#77717a]">{row.product}</td><td className="py-4 font-semibold">{row.amount}</td><td className="py-4"><span className="rounded-full bg-[#f7eddc] px-2.5 py-1 text-[10px] font-semibold text-[#9a6a29]">{row.status}</span></td></tr>)}</tbody></table></div></div><div className="rounded-2xl border border-[#e9e5e2] bg-white p-5"><h3 className="font-semibold">أداء المبيعات</h3><p className="mt-1 text-xs text-[#99939a]">آخر ٧ أيام</p><div className="mt-7 flex h-40 items-end justify-between gap-2">{[42, 58, 38, 68, 54, 76, 91].map((height, index) => <div key={index} className="flex flex-1 flex-col items-center gap-2"><div className={`w-full rounded-t-lg ${index === 6 ? 'bg-[#29245c]' : 'bg-[#d9d5e8]'}`} style={{ height: `${height}%` }} /><span className="text-[10px] text-[#99939a]">{['س', 'ح', 'ن', 'ث', 'ر', 'خ', 'ج'][index]}</span></div>)}</div><div className="mt-5 flex items-center gap-2 text-xs text-[#4e8c62]"><TrendingUp className="size-3" /> المبيعات تنمو بشكل جيد هذا الأسبوع</div></div></div></div></main>{showProduct && <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#29245c]/20 p-5"><div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-xl"><div className="flex items-center justify-between"><h2 className="text-xl font-semibold">إضافة منتج جديد</h2><Button variant="ghost" size="icon" onClick={() => setShowProduct(false)}><X /></Button></div><div className="mt-5 grid gap-4"><input className="h-11 rounded-xl border border-[#e3dedd] px-4 text-sm" placeholder="اسم المنتج" /><input className="h-11 rounded-xl border border-[#e3dedd] px-4 text-sm" placeholder="السعر (ر.س)" /><select className="h-11 rounded-xl border border-[#e3dedd] px-4 text-sm"><option>اختاري التصنيف</option><option>العناية بالبشرة</option><option>العطور</option><option>العناية بالشعر</option></select><div className="rounded-xl border border-dashed border-[#d8d3d0] p-6 text-center text-sm text-[#99939a]">اسحبي صورة المنتج هنا أو اضغطي للاختيار</div></div><Button className="mt-5 w-full bg-[#29245c]" onClick={() => setShowProduct(false)}>حفظ المنتج</Button></div></div>}</div>
}

export default function Page() {
  const [mode, setMode] = useState<'store' | 'admin'>('store')
  return mode === 'store' ? <Storefront onAdmin={() => setMode('admin')} /> : <Dashboard onStore={() => setMode('store')} />
}
