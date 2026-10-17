import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  Camera,
  MapPin,
  Menu,
  Phone,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
  UserRound,
  X,
} from 'lucide-react';

const services = [
  { icon: Scissors, name: 'The Signature Cut', price: '$45', duration: '45 MIN', description: 'A tailored haircut, finished with a hot towel and a style that feels like you.' },
  { icon: UserRound, name: 'Beard Sculpting', price: '$35', duration: '30 MIN', description: 'Precision shaping, warm lather, and a straight-razor finish for a cleaner edge.' },
  { icon: Sparkles, name: 'The Full Ritual', price: '$75', duration: '75 MIN', description: 'Our signature cut and beard service, paired with a restorative face treatment.' },
];

const masters = [
  { name: 'Marcus Reed', role: 'MASTER BARBER · 12 YEARS', image: 'photo-1500648767791-00dcc994a43e', position: 'center 35%' },
  { name: 'Elliot Hayes', role: 'MASTER BARBER · 9 YEARS', image: 'photo-1507003211169-0a1dd7228f2d', position: 'center 35%' },
  { name: 'Andre Collins', role: 'BEARD SPECIALIST · 8 YEARS', image: 'photo-1506794778202-cad84cf45f1d', position: 'center 32%' },
];

const gallery = [
  { image: 'photo-1621605815971-fbc98d665033', alt: 'Barber refining a modern haircut', size: 'md:col-span-7 md:row-span-2' },
  { image: 'photo-1599351431202-1e0f0137899a', alt: 'A clean, close fade haircut', size: 'md:col-span-5' },
  { image: 'photo-1622286342621-4bd786c2447c', alt: 'Barber tools arranged on a work station', size: 'md:col-span-5' },
  { image: 'photo-1593702295094-aea6c85f6590', alt: 'Classic barber shop chair and mirror', size: 'md:col-span-4' },
  { image: 'photo-1503951914875-452162b0f3f1', alt: 'Warmly lit barbershop interior', size: 'md:col-span-4' },
  { image: 'photo-1620122830785-4b1d4bf9e6d7', alt: 'Finished textured haircut detail', size: 'md:col-span-4' },
];

const reviews = [
  { quote: 'The best haircut I have had in the city. Thoughtful, precise, and never rushed.', name: 'Daniel K.', detail: 'REGULAR SINCE 2022' },
  { quote: 'The whole experience feels considered, from the welcome to the hot towel finish.', name: 'James R.', detail: 'FIRST VISIT' },
  { quote: 'Marcus understood exactly what I wanted. I have already booked my next visit.', name: 'Michael T.', detail: 'REGULAR SINCE 2023' },
];

const photo = (id, width = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

function SectionHeading({ eyebrow, title, copy, light = false }) {
  return (
    <div className={`reveal mb-10 md:mb-14 ${light ? 'text-white' : 'text-ink'}`}>
      <p className="mb-3 text-[10px] font-semibold tracking-[.24em] text-gold">{eyebrow}</p>
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <h2 className="font-display text-4xl leading-[1.04] tracking-tight sm:text-5xl md:text-6xl">{title}</h2>
        {copy && <p className={`max-w-sm text-sm leading-7 ${light ? 'text-white/70' : 'text-ink/60'}`}>{copy}</p>}
      </div>
    </div>
  );
}

export default function BarbershopLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const localDate = new Date();
  const minDate = `${localDate.getFullYear()}-${String(localDate.getMonth() + 1).padStart(2, '0')}-${String(localDate.getDate()).padStart(2, '0')}`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-charcoal text-white">
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#home" className="group flex items-center gap-3" aria-label="The Gilded Chair home">
            <span className="grid h-10 w-10 place-items-center border border-gold/50 text-gold transition-colors group-hover:bg-gold group-hover:text-charcoal"><Scissors size={18} strokeWidth={1.5} /></span>
            <span className="font-display text-lg leading-none tracking-wide">THE GILDED CHAIR<span className="mt-1.5 block font-sans text-[8px] font-medium tracking-[.28em] text-white/65">BARBER · EST. 2014</span></span>
          </a>
          <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link" href="#masters">Our barbers</a>
            <a className="nav-link" href="#gallery">The shop</a>
            <a className="nav-link" href="#reviews">Reviews</a>
          </nav>
          <a href="#booking" className="hidden border border-gold px-5 py-3 text-[10px] font-semibold uppercase tracking-[.2em] text-gold transition-colors hover:bg-gold hover:text-charcoal md:inline-flex">Book an appointment</a>
          <button type="button" className="grid h-11 w-11 place-items-center border border-white/20 text-white md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
        {menuOpen && <nav className="absolute inset-x-0 top-full grid gap-1 border-t border-white/10 bg-charcoal px-5 py-4 md:hidden" aria-label="Mobile navigation">
          {['Services', 'Our barbers', 'The shop', 'Reviews'].map((item, index) => <a key={item} href={['#services', '#masters', '#gallery', '#reviews'][index]} onClick={closeMenu} className="py-3 text-xs uppercase tracking-[.18em] text-white/75">{item}</a>)}
          <a href="#booking" onClick={closeMenu} className="mt-2 bg-gold px-4 py-3 text-center text-xs font-bold uppercase tracking-[.16em] text-charcoal">Book an appointment</a>
        </nav>}
      </header>

      <main>
        <section id="home" className="hero relative flex min-h-[760px] items-end sm:min-h-[820px] lg:min-h-[900px]">
          <div className="absolute inset-0 bg-cover bg-[center_38%]" style={{ backgroundImage: `url("${photo('photo-1503951914875-452162b0f3f1', 2200)}")` }} role="img" aria-label="A warmly lit barbershop with vintage leather chairs" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/15 to-black/30" />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-40 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
            <div className="max-w-3xl">
              <p className="reveal mb-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[.25em] text-gold sm:text-xs"><span className="h-px w-9 bg-gold" />A quieter kind of confidence</p>
              <h1 className="reveal font-display text-[clamp(4rem,11vw,8.75rem)] leading-[.88] tracking-[-.045em]">Precision<br /><span className="italic text-gold">Grooming.</span></h1>
              <p className="reveal mt-7 max-w-lg text-sm leading-7 text-white/75 sm:text-base sm:leading-8">A modern barbershop rooted in craft. Considered cuts, honest conversation, and a little time set aside just for you.</p>
              <div className="reveal mt-9 flex flex-wrap items-center gap-5">
                <a href="#booking" className="inline-flex min-h-14 items-center gap-6 bg-gold px-6 text-[10px] font-bold uppercase tracking-[.2em] text-charcoal transition-all hover:bg-[#e7c75d] hover:shadow-[0_0_34px_rgba(212,175,55,.22)]">Book your chair <ArrowUpRight size={16} /></a>
                <a href="#services" className="inline-flex items-center gap-2 py-3 text-[10px] font-semibold uppercase tracking-[.2em] text-white/75 transition-colors hover:text-gold">Explore services <ArrowRight size={15} /></a>
              </div>
            </div>
            <div className="mt-16 flex items-center gap-4 text-[9px] uppercase tracking-[.2em] text-white/65 sm:mt-20"><span className="block h-px w-12 bg-gold/70" />Thoughtfully cut. Never rushed.</div>
          </div>
          <div className="absolute bottom-10 right-8 hidden rotate-180 text-[9px] uppercase tracking-[.25em] text-white/65 [writing-mode:vertical-rl] lg:block">Scroll to discover</div>
        </section>

        <section id="services" className="bg-charcoal px-5 py-24 sm:px-8 md:py-32 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="THE MENU · 01" title={<>Good grooming.<br /><span className="italic text-gold">No guesswork.</span></>} copy="Every service starts with a conversation and ends when the details feel right. No rush, no one-size-fits-all." light />
            <div className="grid gap-4 md:grid-cols-3">
              {services.map(({ icon: Icon, name, price, duration, description }, index) => (
                <article key={name} className="reveal service-card group relative flex min-h-[330px] flex-col border border-white/10 bg-surface p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 sm:p-9" style={{ transitionDelay: `${index * 70}ms` }}>
                  <div className="mb-12 flex items-center justify-between"><span className="grid h-12 w-12 place-items-center border border-gold/30 text-gold transition-colors group-hover:bg-gold group-hover:text-charcoal"><Icon size={22} strokeWidth={1.4} /></span><span className="text-[9px] tracking-[.2em] text-white/65">0{index + 1}</span></div>
                  <div className="mt-auto"><div className="mb-3 flex items-end justify-between gap-3"><h3 className="font-display text-2xl sm:text-[27px]">{name}</h3><span className="font-display text-2xl text-gold">{price}</span></div><p className="mb-5 text-[9px] tracking-[.2em] text-gold/80">{duration}</p><p className="max-w-sm text-sm leading-6 text-white/65">{description}</p></div>
                  <a href="#booking" aria-label={`Book ${name}`} className="absolute inset-0" />
                </article>
              ))}
            </div>
            <p className="mt-5 text-[10px] text-white/65">All services include a consultation and a drink on us.</p>
          </div>
        </section>

        <section id="masters" className="bg-[#141414] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="THE HANDS BEHIND THE CRAFT · 02" title={<>Good hands.<br /><span className="italic text-gold">Good people.</span></>} copy="Skilled, easy to talk to, and serious about the little things. Get to know the barbers behind your best cut." light />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {masters.map((master, index) => (
                <article key={master.name} className="reveal group" style={{ transitionDelay: `${index * 90}ms` }}>
                  <div className="relative aspect-[4/4.7] overflow-hidden bg-surface"><img className="h-full w-full object-cover grayscale-[.18] transition duration-700 group-hover:scale-[1.035] group-hover:grayscale-0" src={photo(master.image, 900)} alt={`${master.name}, master barber`} loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-80" /><a className="absolute bottom-5 right-5 grid h-10 w-10 place-items-center border border-white/45 text-white transition-colors hover:border-gold hover:bg-gold hover:text-charcoal" href="https://www.instagram.com/" aria-label={`${master.name} on Instagram`}><Camera size={16} /></a></div>
                  <div className="flex items-center justify-between border-b border-white/15 py-5"><div><h3 className="font-display text-2xl">{master.name}</h3><p className="mt-2 text-[9px] tracking-[.19em] text-gold">{master.role}</p></div><ArrowUpRight className="text-white/65 transition-colors group-hover:text-gold" size={19} /></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-charcoal px-5 py-24 sm:px-8 md:py-32 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="A LOOK INSIDE · 03" title={<>A space to<br /><span className="italic text-gold">slow down.</span></>} copy="The details matter. From the first pour to the final brush-off, this is your time." light />
            <div className="grid auto-rows-[210px] grid-cols-1 gap-3 sm:grid-cols-2 md:auto-rows-[190px] md:grid-cols-12 md:gap-4">
              {gallery.map((item, index) => <figure key={item.image} className={`reveal gallery-image group relative overflow-hidden bg-surface ${item.size}`} style={{ transitionDelay: `${(index % 3) * 60}ms` }}><img src={photo(item.image, 1200)} alt={item.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent opacity-50 transition-opacity group-hover:opacity-80" /><figcaption className="absolute bottom-4 left-4 translate-y-2 text-[9px] uppercase tracking-[.19em] text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-90">THE GILDED CHAIR · 0{index + 1}</figcaption></figure>)}
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-[#141414] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="KIND WORDS · 04" title={<>Well said.<br /><span className="italic text-gold">Well earned.</span></>} copy="The best measure of a good visit is knowing you will be back." light />
            <div className="grid gap-4 md:grid-cols-3">
              {reviews.map((review, index) => <article key={review.name} className="reveal border border-white/10 bg-surface p-7 sm:p-8" style={{ transitionDelay: `${index * 70}ms` }}><div className="mb-7 flex gap-1 text-gold" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, star) => <Star key={star} size={13} fill="currentColor" strokeWidth={1} />)}</div><blockquote className="min-h-[112px] font-display text-[21px] leading-8 text-white/90">“{review.quote}”</blockquote><div className="mt-7 border-t border-white/10 pt-5"><p className="text-xs font-semibold tracking-wide">{review.name}</p><p className="mt-2 text-[9px] tracking-[.18em] text-white/65">{review.detail}</p></div></article>)}
            </div>
          </div>
        </section>

        <section id="booking" className="relative bg-[#171716] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
          <div className="absolute inset-0 opacity-[.08]" style={{ backgroundImage: 'radial-gradient(#d4af37 0.7px, transparent 0.7px)', backgroundSize: '18px 18px' }} />
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
            <div className="reveal flex flex-col justify-center">
              <p className="mb-4 text-[10px] font-semibold tracking-[.24em] text-gold">YOUR CHAIR IS WAITING · 05</p>
              <h2 className="font-display text-5xl leading-[.98] tracking-tight sm:text-6xl">Make time<br />for <span className="italic text-gold">yourself.</span></h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-white/65">Choose your service and a time that works. We will take care of the rest.</p>
              <div className="mt-10 space-y-5 text-sm text-white/70">
                <p className="flex items-center gap-3"><MapPin size={16} className="text-gold" /> Downtown Manhattan, New York</p>
                <p className="flex items-center gap-3"><Clock3 size={16} className="text-gold" /> Tue–Fri 9–8 · Sat 9–6 · Sun 10–4</p>
                <a href="tel:+12125550148" className="flex items-center gap-3 transition-colors hover:text-gold"><Phone size={16} className="text-gold" /> +1 (212) 555-0148</a>
              </div>
              <div className="map-placeholder mt-9 flex min-h-40 items-end justify-between overflow-hidden border border-white/10 p-5"><div className="relative z-10"><p className="text-[9px] font-semibold tracking-[.2em] text-gold">FIND YOUR WAY</p><p className="mt-2 font-display text-xl">Downtown Manhattan</p><p className="mt-1 text-xs text-white/65">Exact address shared with your booking</p></div><a href="https://maps.google.com/?q=barbershop+Downtown+Manhattan" target="_blank" rel="noreferrer" className="relative z-10 grid h-10 w-10 place-items-center border border-gold/60 text-gold transition-colors hover:bg-gold hover:text-charcoal" aria-label="Open map"><ArrowUpRight size={17} /></a></div>
            </div>

            <div className="reveal border border-white/10 bg-[#1d1d1b] p-6 sm:p-9 lg:p-10">
              {submitted ? <div className="flex min-h-[420px] flex-col items-center justify-center text-center"><span className="mb-6 grid h-14 w-14 place-items-center rounded-full border border-gold/50 text-gold"><Check size={24} /></span><p className="text-[10px] font-semibold tracking-[.2em] text-gold">REQUEST RECEIVED</p><h3 className="mt-4 font-display text-3xl">We’ll be in touch.</h3><p className="mt-3 max-w-xs text-sm leading-6 text-white/65">Your appointment request is ready. Our team will confirm your time shortly.</p><button type="button" onClick={() => setSubmitted(false)} className="mt-8 border border-white/20 px-5 py-3 text-[10px] font-semibold uppercase tracking-[.17em] text-white/75 transition-colors hover:border-gold hover:text-gold">Make another request</button></div> : <>
                <div className="mb-8 flex items-start justify-between"><div><p className="text-[9px] font-semibold tracking-[.21em] text-gold">BOOK YOUR VISIT</p><h3 className="mt-3 font-display text-3xl">A better cut starts here.</h3></div><CalendarDays className="mt-1 text-gold" size={21} strokeWidth={1.5} /></div>
                <form className="space-y-5" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
                  <div className="grid gap-5 sm:grid-cols-2"><label className="field-label">Your name<input className="field-input" name="name" type="text" placeholder="e.g. James Carter" autoComplete="name" required /></label><label className="field-label">Phone number<input className="field-input" name="phone" type="tel" placeholder="+1 (555) 000-0000" autoComplete="tel" required /></label></div>
                  <div className="grid gap-5 sm:grid-cols-2"><label className="field-label">Choose a service<select className="field-input" name="service" defaultValue="" required><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.name} value={service.name}>{service.name} · {service.price}</option>)}</select></label><label className="field-label">Preferred date<input className="field-input date-input" type="date" name="date" min={minDate} required /></label></div>
                  <label className="field-label">Anything we should know? <span className="font-normal normal-case tracking-normal text-white/65">Optional</span><textarea className="field-input min-h-[100px] resize-y" name="notes" placeholder="Your usual style, a special request…" rows="3" /></label>
                  <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between"><button type="submit" className="inline-flex min-h-14 items-center justify-center gap-4 bg-gold px-6 text-[10px] font-bold uppercase tracking-[.19em] text-charcoal transition-all hover:bg-[#e7c75d]">Request an appointment <ArrowRight size={15} /></button><p className="flex items-center gap-2 text-[10px] text-white/65"><ShieldCheck size={14} className="text-gold/70" /> No payment required to book</p></div>
                </form>
              </>}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-charcoal px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <a href="#home" className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center border border-gold/40 text-gold"><Scissors size={16} strokeWidth={1.5} /></span><span className="font-display text-base tracking-wide">THE GILDED CHAIR<span className="mt-1 block font-sans text-[8px] tracking-[.25em] text-white/65">BARBER · EST. 2014</span></span></a>
          <div className="flex flex-wrap gap-x-7 gap-y-3 text-[10px] uppercase tracking-[.16em] text-white/65"><a href="#services" className="transition-colors hover:text-gold">Services</a><a href="#masters" className="transition-colors hover:text-gold">Our barbers</a><a href="#gallery" className="transition-colors hover:text-gold">The shop</a><a href="#booking" className="transition-colors hover:text-gold">Booking</a></div>
          <a href="https://www.instagram.com/" className="flex items-center gap-2 text-xs text-white/65 transition-colors hover:text-gold"><Camera size={16} /> Instagram</a>
        </div>
        <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-5 text-[9px] tracking-[.08em] text-white/65 sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} The Gilded Chair. All rights reserved.</p><p>Address and contact details shown as demo content.</p></div>
      </footer>
    </div>
  );
}

