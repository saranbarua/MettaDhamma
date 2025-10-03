/* eslint-disable react/prop-types */
import { useMemo, useState } from "react";

export default function Blogs() {
  // --- Sample content (replace with API data) -------------------------------
  const POSTS = [
    {
      id: 1,
      title: "Metta in Daily Life: 5-minute Practice That Sticks",
      excerpt:
        "Small, consistent metta moments can rewire how we react to stress, conflict, and self-criticism.",
      category: "Meditation",
      image:
        "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop",
      author: { name: "Ananda", avatar: "https://i.pravatar.cc/64?img=5" },
      date: "Oct 3, 2025",
      featured: true,
    },
    {
      id: 2,
      title: "Dhamma for Busy Minds: A Gentle Guide",
      excerpt:
        "If your schedule feels crowded, your practice doesn’t have to. Here’s a softer approach.",
      category: "Dhamma",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
      author: { name: "Maya", avatar: "https://i.pravatar.cc/64?img=32" },
      date: "Sep 29, 2025",
    },
    {
      id: 3,
      title: "Understanding the Four Noble Truths (Simply)",
      excerpt:
        "Clarity beats complexity. A plain-language reflection on suffering and its end.",
      category: "Dhamma",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop",
      author: { name: "Sujato", avatar: "https://i.pravatar.cc/64?img=14" },
      date: "Sep 20, 2025",
    },
    {
      id: 4,
      title: "Beginner’s Metta Script (Bangla + English)",
      excerpt:
        "A bilingual script you can read or listen to—crafted for gentle, real-life practice.",
      category: "Resources",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
      author: { name: "Deva", avatar: "https://i.pravatar.cc/64?img=12" },
      date: "Sep 12, 2025",
    },
    {
      id: 5,
      title: "Why Community Practice Works",
      excerpt:
        "Practicing together changes the texture of attention. Here’s what the science and suttas say.",
      category: "Community",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
      author: { name: "Khema", avatar: "https://i.pravatar.cc/64?img=25" },
      date: "Aug 31, 2025",
    },
    {
      id: 6,
      title: "Sutta Spotlight: Karaniya Metta Sutta",
      excerpt:
        "A concise, compassionate teaching—what it asks of us, and how to live it every day.",
      category: "Dhamma",
      image:
        "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1600&auto=format&fit=crop",
      author: { name: "Ananda", avatar: "https://i.pravatar.cc/64?img=5" },
      date: "Aug 18, 2025",
    },
  ];

  const CATEGORIES = ["All", "Meditation", "Dhamma", "Community", "Resources"];

  // --- State: search + category --------------------------------------------
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return POSTS.filter(
      (p) =>
        (active === "All" || p.category === active) &&
        (!q ||
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q))
    );
  }, [query, active]);

  const featured = filtered.find((p) => p.featured) || filtered[0];
  const rest = filtered.filter((p) => p.id !== featured?.id);

  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-neutral-950 via-neutral-900 to-emerald-950/20">
      {/* Top decoration haze */}
      <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]">
        <div className="absolute -left-24 -top-24 size-[36rem] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -right-16 top-20 size-[28rem] rounded-full bg-emerald-300/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-12 sm:py-16">
        {/* Header */}
        <header className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="tracking-[0.35em] text-xs font-semibold uppercase text-neutral-200/90 sm:text-sm">
              Our Journal
            </p>
            <h1 className="mt-2 font-serif text-4xl leading-tight text-neutral-50 drop-shadow-sm sm:text-5xl">
              Metta Dhamma Blog
            </h1>
            <p className="mt-3 max-w-2xl text-neutral-300">
              Clear reflections on practice, Dhamma, and community—crafted for a
              calmer, kinder everyday life.
            </p>
          </div>

          {/* Search */}
          <div className="w-full sm:w-80">
            <label className="sr-only" htmlFor="blog-search">
              Search posts
            </label>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 shadow-sm backdrop-blur-md">
              <MagnifierIcon className="h-4 w-4 text-emerald-200/80" />
              <input
                id="blog-search"
                type="search"
                placeholder="Search articles…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-neutral-100 placeholder:text-neutral-400 focus:outline-none"
              />
            </div>
          </div>
        </header>

        {/* Categories */}
        <nav className="mt-8 flex flex-wrap items-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={[
                "rounded-full border px-3.5 py-1.5 text-sm transition shadow-sm",
                active === c
                  ? "border-emerald-300/60 bg-emerald-400/10 text-emerald-100"
                  : "border-white/10 bg-white/5 text-neutral-200 hover:bg-white/10",
              ].join(" ")}
            >
              {c}
            </button>
          ))}
        </nav>

        {/* Featured */}
        {featured && <FeaturedPostCard post={featured} className="mt-8" />}

        {/* Grid */}
        <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}

          {rest.length === 0 && (
            <div className="col-span-full rounded-2xl border border-white/10 bg-white/5 p-10 text-center text-neutral-300">
              No posts found. Try a different keyword or category.
            </div>
          )}
        </section>

        {/* Footer meta */}
        <div className="mt-10 flex items-center gap-3 text-sm text-neutral-400">
          <span className="h-px w-10 bg-emerald-300/50" />
          <span>Metta Dhamma • Quietly handcrafted with care</span>
        </div>
      </div>
    </div>
  );
}

function FeaturedPostCard({ post, className = "" }) {
  return (
    <article
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-md ${className}`}
    >
      <div className="grid gap-0 sm:grid-cols-2">
        <div className="relative h-64 sm:h-full">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/40 via-black/0 to-emerald-900/10" />
        </div>

        <div className="relative p-6 sm:p-8">
          <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-emerald-200/90">
            Featured
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-300/80" />
          </span>

          <h2 className="mt-2 font-serif text-2xl text-neutral-50 sm:text-3xl">
            {post.title}
          </h2>
          <p className="mt-3 text-neutral-300">{post.excerpt}</p>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-neutral-300/90">
            <Badge>{post.category}</Badge>
            <span className="h-3 w-px bg-white/15" />
            <AuthorMeta author={post.author} date={post.date} />
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={`#/blog/${post.id}`}
              className="inline-flex items-center justify-center rounded-full border border-emerald-300/60 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-100 shadow-sm backdrop-blur-md transition hover:bg-emerald-400/20"
            >
              Read article
            </a>
            <a
              href="#"
              className="text-sm text-neutral-300 underline-offset-4 hover:underline"
            >
              Save for later
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function ArticleCard({ post }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-md transition hover:bg-white/10">
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0" />
        <div className="absolute left-4 top-4">
          <Badge>{post.category}</Badge>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-serif text-xl text-neutral-50">
          <a href={`#/blog/${post.id}`} className="hover:underline">
            {post.title}
          </a>
        </h3>
        <p className="mt-2 line-clamp-2 text-neutral-300">{post.excerpt}</p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
          <AuthorMeta
            author={post.author}
            date={post.date}
            readTime={post.readTime}
          />
          <a
            href={`#/blog/${post.id}`}
            className="inline-flex items-center gap-1 text-emerald-200/95 hover:underline"
          >
            Read
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-emerald-300/40 bg-emerald-300/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-emerald-100">
      {children}
    </span>
  );
}

function AuthorMeta({ author, date, readTime }) {
  return (
    <div className="flex items-center gap-3 text-neutral-300/90">
      <img
        src={author.avatar}
        alt={author.name}
        className="h-7 w-7 rounded-full ring-1 ring-white/10"
        loading="lazy"
      />
      <span className="text-neutral-200">{author.name}</span>
      <span className="h-3 w-px bg-white/15" />
      <span>{date}</span>
      <span className="h-3 w-px bg-white/15" />
      <span>{readTime}</span>
    </div>
  );
}

// --- Icons -----------------------------------------------------------------
function MagnifierIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m21 21-4.3-4.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowRightIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5 12h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="m13 6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
