import Blogs from "../Blogs/Blogs";
import AllYoutubePage from "../YoutubeLink/AllYoutubePage";
import Event from "./Event";
import News from "./News";
import Slidder from "./Slidder";

export default function Home() {
  const STATS = [
    { label: "Guided Sessions", value: "120+" },
    { label: "Practitioners", value: "25k" },
    { label: "Countries Reached", value: "42" },
    { label: "Avg. Session Rating", value: "4.9" },
  ];
  const QUOTES = [
    {
      text: "Hatred never ceases by hatred, but only by love; this is the eternal rule.",
      source: "Dhammapada 5",
    },
    {
      text: "Just as a mother would protect her only child with her life, even so let one cultivate boundless love toward all beings.",
      source: "Karaṇīya Mettā Sutta",
    },
    {
      text: "Peace comes from within. Do not seek it without.",
      source: "Attributed to the Buddha",
    },
    {
      text: "In the seen, only the seen; in the heard, only the heard—thus the mind is freed.",
      source: "Bāhiya Sutta (Udāna 1.10)",
    },
    {
      text: "Better than a thousand hollow words is one word that brings peace.",
      source: "Dhammapada 100",
    },
    {
      text: "All conditioned things are impermanent—when one sees this with wisdom, one turns away from suffering.",
      source: "Dhammapada 277",
    },
  ];
  return (
    <div>
      <Slidder />
      <div className="container mx-auto ">
        <h1 className="text-3xl px-6 font-bold text-green-700 mb-4">
          Welcome To Metta Dhamma
        </h1>
        <div className="px-6 mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            আমাদের চ্যানেল <span className="font-bold"> মেত্তা ধাম্মা</span>{" "}
            নিবেদিত বৌদ্ধ ধর্মীয় প্ল্যাটফর্ম, যেখানে শান্তি, প্রজ্ঞা ও ধর্মীয়
            জ্ঞান ছড়িয়ে দেওয়ার লক্ষ্যে আমরা কাজ করে যাচ্ছি। ত্রিরত্ন– বুদ্ধ,
            ধর্ম ও সংঘ – এই তিন আশ্রয়ের আলোকে আমাদের চ্যানেল পরিচালিত হয়। আমরা
            বিশ্বাস করি, বৌদ্ধ শিক্ষা শুধু ধর্ম নয়, এটি একটি জীবনদর্শন।
          </p>
          <p className="my-2 text-lg text-gray-700 leading-relaxed">
            🎯আমাদের উদ্দেশ্য বুদ্ধের মহাজ্ঞান ও শিক্ষাকে সবার মাঝে ছড়িয়ে দেওয়া
            তরুণ প্রজন্মকে ধর্মীয় চেতনায় অনুপ্রাণিত করা অনলাইন মাধ্যমে সহজবোধ্য
            বুদ্ধবাণী ও ধর্মদেশনা প্রচার ধ্যান, সৎচিন্তা ও করুণা চর্চার জন্য
            মাধ্যমে নিজের প্রতি আত্নবিশ্বাস তৈরি করা
          </p>
          <p className="my-2 text-lg text-gray-700 leading-relaxed">
            📚 আমাদের কার্যক্রম সাপ্তাহিক ধর্মদেশনা ভিডিও থেরবাদ ও মহাযান
            মতবাদের সমন্বয়ে আলোচনাসভা উৎসব, পূর্ণিমা ও উপোসথ দিবস উপলক্ষে বিশেষ
            অনুষ্ঠান শিক্ষামূলক লেখা, প্রশ্নোত্তর পর্ব ও ধর্মীয় কুইজ প্রজ্ঞাবান
            ভিক্ষুদের সাক্ষাৎকার বুদ্ধের দর্শনে মানবতা ধর্মকে প্রচার করা দেওয়া
          </p>
          <p className="my-2 text-lg text-gray-700 leading-relaxed">
            🤝 আমাদের সাথে থাকুন আমাদের এই যাত্রা শুধু ধর্মচর্চা নয় – এটি
            অন্তরের আলোকিত পথের খোঁজ। আপনি যদি শান্তি, সমবেদনা ও প্রজ্ঞার
            অন্বেষক হয়ে থাকেন, তবে আপনি ঠিক জায়গাতেই এসেছেন। আমাদের ওয়েবসাইটের
            মাধ্যমে আপনি ধর্মের সেবা নিতে পারবেন।
          </p>
        </div>
        <News />
        <section
          className="relative isolate w-full overflow-hidden bg-gradient-to-tr from-neutral-950 via-neutral-900 to-emerald-900/50"
          aria-label="Metta Dhamma welcome + stats + quotes"
        >
          {/* soft pattern haze */}
          <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]">
            <div className="absolute -left-24 -top-24 size-[36rem] rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute -right-16 top-20 size-[28rem] rounded-full bg-emerald-300/10 blur-3xl" />
          </div>

          {/* delicate inner vignette */}
          <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5 [box-shadow:inset_0_0_140px_50px_rgba(0,0,0,0.35)]" />

          {/* Header */}
          <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20 md:py-24 lg:py-28">
            <p className="tracking-[0.35em] text-xs font-semibold uppercase text-neutral-200/90 sm:text-sm">
              Welcome to our
            </p>

            <h1 className="mt-2 font-serif text-4xl leading-tight text-neutral-50 drop-shadow-sm sm:text-5xl md:text-6xl">
              <span className="block">Metta Dhamma</span>
              <span className="block text-[0.65em] font-light italic text-neutral-100/90">
                Channel
              </span>
            </h1>

            <div className="mt-5 max-w-2xl border-l-2 border-emerald-300/70 pl-4">
              <p className="text-base leading-relaxed text-neutral-100/95 sm:text-lg">
                Let the teachings of Buddha enrich your life with{" "}
                <span className="font-medium text-emerald-200/95">
                  happiness
                </span>
                ,<span className="mx-1">hope</span>, and{" "}
                <span className="font-medium text-emerald-200/95">harmony</span>
                .
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3 text-sm text-neutral-200/80">
              <span className="h-px w-12 bg-emerald-300/70" />
              <span>Breathe in. Soften. Be here.</span>
            </div>
          </div>

          {/* By the numbers */}
          <div className="relative mx-auto max-w-6xl px-6 pb-12 md:pb-16">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="group rounded-xl border border-white/10 bg-white/5 px-5 py-6 backdrop-blur-md transition hover:bg-white/10"
                >
                  <div className="font-serif text-3xl text-emerald-200/95 md:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-neutral-200/80">
                    {s.label}
                  </div>
                  <div className="mt-3 h-px w-10 bg-emerald-300/60 transition-all group-hover:w-14" />
                </div>
              ))}
            </div>
          </div>

          {/* Quotes */}
          <div className="relative mx-auto max-w-6xl px-6 pb-20">
            <h2 className="mb-6 font-serif text-2xl text-neutral-50 sm:text-3xl">
              Words to sit with
            </h2>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {QUOTES.map((q, i) => (
                <figure
                  key={i}
                  className="relative rounded-2xl border border-white/10 bg-white/5 p-6 leading-relaxed text-neutral-100/95 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-md"
                >
                  {/* ornament */}
                  <svg
                    aria-hidden="true"
                    className="absolute -top-3 -left-3 h-10 w-10 opacity-30"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7.5 3C5 3 3 5 3 7.5c0 1.9 1.1 3.5 2.7 4.3C5.1 16 3 18 3 21h6c0-2.9-1.9-5-4-6.4 2.3-.6 4-2.7 4-5.1C9 5 8.5 3 7.5 3zm9 0C14 3 12 5 12 7.5c0 1.9 1.1 3.5 2.7 4.3C14.1 16 12 18 12 21h6c0-2.9-1.9-5-4-6.4 2.3-.6 4-2.7 4-5.1 0-2.5-.5-4.5-1.5-6z" />
                  </svg>

                  <blockquote className="relative">“{q.text}”</blockquote>
                  <figcaption className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-emerald-200/90">
                      {q.source}
                    </span>
                    <span className="h-px w-10 bg-emerald-300/60" />
                  </figcaption>
                </figure>
              ))}

              {/* Wide card for emphasis */}
              <figure className="relative col-span-full rounded-2xl border border-white/10 bg-gradient-to-r from-emerald-500/10 to-emerald-300/10 p-7 backdrop-blur-md lg:col-span-3">
                <blockquote className="font-serif text-xl text-emerald-100 sm:text-2xl">
                  “When the mind is steady and kind, the world reveals its quiet
                  goodness.”
                </blockquote>
                <figcaption className="mt-3 text-sm text-neutral-200/85">
                  Metta Dhamma Channel
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <Event />

        <Blogs />
        <AllYoutubePage />
        {/* Elegant CTA / Practice Path */}
        <section
          className="relative isolate w-full overflow-hidden bg-gradient-to-br from-emerald-900/60 via-neutral-900/70 to-neutral-950"
          aria-label="Begin your practice"
        >
          {/* soft glow accents */}
          <div className="pointer-events-none absolute inset-0 opacity-50">
            <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl text-neutral-50 sm:text-4xl">
                Walk the Path with Metta
              </h2>
              <p className="mt-3 text-neutral-200/90">
                শান্তি, প্রজ্ঞা ও করুণা—এই তিনে গড়ে উঠুক আপনার প্রতিদিন। Choose
                a gentle starting point and take one mindful step today.
              </p>
            </div>

            {/* Three graceful cards */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {/* Practice */}
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:bg-white/10">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-300/40 bg-emerald-300/10">
                    {/* lotus icon */}
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="currentColor"
                    >
                      <path d="M12 3c2 3 4 4 7 4-1 3-3 5-7 6-4-1-6-3-7-6 3 0 5-1 7-4zM5 14c2 2 4 3 7 3s5-1 7-3c-1 3-4 6-7 7-3-1-6-4-7-7z" />
                    </svg>
                  </span>
                  <h3 className="font-serif text-xl text-neutral-50">
                    Practice
                  </h3>
                </div>
                <p className="mt-3 text-neutral-200/90">
                  Daily 10-minute loving-kindness meditations to soften the
                  heart and steady the mind.
                </p>
                <div className="mt-4 h-px w-10 bg-emerald-300/60 transition-all group-hover:w-14" />
              </div>

              {/* Learn */}
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:bg-white/10">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-300/40 bg-emerald-300/10">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="currentColor"
                    >
                      <path d="M7 4h9a3 3 0 0 1 0 6H9a2 2 0 1 0 0 4h8v2H9a4 4 0 0 1 0-8h7a1 1 0 0 0 0-2H7V4z" />
                    </svg>
                  </span>
                  <h3 className="font-serif text-xl text-neutral-50">Learn</h3>
                </div>
                <p className="mt-3 text-neutral-200/90">
                  Short talks on the Dhamma—clear, kind, and practical for
                  everyday life.
                </p>
                <div className="mt-4 h-px w-10 bg-emerald-300/60 transition-all group-hover:w-14" />
              </div>

              {/* Serve */}
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:bg-white/10">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-300/40 bg-emerald-300/10">
                    {/* hands/heart icon */}
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="currentColor"
                    >
                      <path d="M12 21s-6-3.5-6-8a4 4 0 0 1 7-2.4A4 4 0 0 1 18 13c0 4.5-6 8-6 8z" />
                    </svg>
                  </span>
                  <h3 className="font-serif text-xl text-neutral-50">Serve</h3>
                </div>
                <p className="mt-3 text-neutral-200/90">
                  Acts of mettā in community: small deeds, bright hearts.
                </p>
                <div className="mt-4 h-px w-10 bg-emerald-300/60 transition-all group-hover:w-14" />
              </div>
            </div>

            {/* CTA + newsletter */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <div className="text-center sm:text-left">
                <p className="text-neutral-200/90">
                  Ready to begin? Join our next live session or receive a weekly
                  reflection.
                </p>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <a
                  href="#live"
                  className="inline-flex items-center justify-center rounded-full border border-emerald-300/60 bg-emerald-400/10 px-5 py-2.5 text-sm font-medium text-emerald-100 shadow-sm backdrop-blur-md transition hover:bg-emerald-400/20"
                >
                  Join Live Session
                </a>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-sm backdrop-blur-md"
                >
                  <input
                    type="email"
                    required
                    placeholder="Your email"
                    className="w-56 bg-transparent px-4 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-300/70 focus:outline-none"
                    aria-label="Email for weekly reflection"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 text-sm font-medium text-emerald-100 hover:bg-white/10"
                  >
                    Get Weekly Reflection
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
