/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import apiurl from "../../../apiurl/apiurl";

const stripHtml = (html = "") =>
  html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
const excerptOf = (html, n = 160) => {
  const t = stripHtml(html);
  return t.length > n ? t.slice(0, n).trim() + "…" : t;
};

export default function AllBlogs() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    (async () => {
      setIsLoading(true);
      try {
        // latest 3 published
        const qs = new URLSearchParams({
          published: "true",
          limit: "3",
          page: "1",
        }).toString();

        const res = await fetch(`${apiurl.mainUrl}/blog?${qs}`);
        const json = await res.json();

        if (!ignore && json?.success) {
          const rows = (json?.data || []).map((b) => ({
            id: b._id,
            title: b.title,
            excerpt: b.subHeading || excerptOf(b.content, 160),
            image: b.image,
            category:
              Array.isArray(b.tags) && b.tags.length ? b.tags[0] : "General",
            author: {
              name: b.author || "Unknown",
              avatar:
                "https://api.dicebear.com/7.x/initials/svg?backgroundType=gradientLinear&seed=" +
                encodeURIComponent(b.author || "U"),
            },
            date: new Date(b.publishedAt || b.createdAt).toLocaleDateString(
              "en-US",
              {
                month: "short",
                day: "numeric",
                year: "numeric",
              }
            ),
            featured: false,
          }));
          // mark first as featured
          if (rows[0]) rows[0].featured = true;
          setPosts(rows);
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (!ignore) setIsLoading(false);
      }
    })();
    return () => {
      ignore = true;
    };
  }, []);

  const featured = useMemo(() => (posts.length ? posts[0] : null), [posts]);
  const rest = useMemo(() => (posts.length > 1 ? posts : []), [posts]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-neutral-950 via-neutral-900 to-emerald-950/20">
      {/* Top decoration haze */}
      <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]">
        <div className="absolute -left-24 -top-24 size-[36rem] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -right-16 top-20 size-[28rem] rounded-full bg-emerald-300/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-12 sm:py-16">
        {/* Header */}
        <header className="flex flex-col items-start justify-between gap-6 mb-2 sm:flex-row sm:items-end">
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
        </header>

        {/* Featured */}
        {featured && <FeaturedPostCard post={featured} className="mt-8" />}

        {/* Grid */}
        <section className="mt-8">
          {isLoading ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : rest.length ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <ArticleCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
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

function FeaturedPostCard({ post }) {
  return (
    <article className="grid overflow-hidden rounded-2xl border bg-white shadow-sm sm:grid-cols-2">
      <div className="relative h-56 sm:h-full">
        <img
          src={`https://backend.mettadhamma.com${post.image}`}
          alt={post.title}
          className="h-full w-full object-cover"
          loading="lazy"
          crossOrigin="anonymous"
        />
      </div>
      <div className="p-6 sm:p-8">
        <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-emerald-700">
          Featured <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
        </span>
        <h3 className="mt-2 font-serif text-2xl text-neutral-900">
          {post.title}
        </h3>
        <p className="mt-3 text-neutral-700">{post.excerpt}</p>
        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-neutral-600">
          <span className="h-3 w-px bg-neutral-200" />
          <AuthorMeta author={post.author} date={post.date} />
        </div>
        <a
          href={`/blog/${post.id}`}
          className="mt-6 inline-flex rounded-full border border-emerald-600 px-4 py-2 text-sm text-emerald-700 hover:bg-emerald-50"
        >
          Read article
        </a>
      </div>
    </article>
  );
}

function ArticleCard({ post }) {
  return (
    <article className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow">
      <div className="relative h-44">
        <img
          src={`https://backend.mettadhamma.com${post.image}`}
          alt={post.title}
          className="h-full w-full object-cover"
          loading="lazy"
          crossOrigin="anonymous"
        />
      </div>
      <div className="p-5">
        <h4 className="font-serif text-lg text-neutral-900">
          <a href={`/blog/${post.id}`} className="hover:underline">
            {post.title}
          </a>
        </h4>
        <p className="mt-2 line-clamp-2 text-neutral-700">{post.excerpt}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-neutral-600">
          <AuthorMeta author={post.author} date={post.date} />
          <a
            href={`/blog/${post.id}`}
            className="text-emerald-700 hover:underline"
          >
            Read
          </a>
        </div>
      </div>
    </article>
  );
}

function AuthorMeta({ author, date }) {
  return (
    <div className="flex items-center gap-2">
      <img
        src={author.avatar}
        alt={author.name}
        className="h-7 w-7 rounded-full"
        loading="lazy"
      />
      <span>{author.name}</span>
      <span className="h-3 w-px bg-neutral-200" />
      <span>{date}</span>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-md">
      {/* Image area */}
      <div className="relative h-44 w-full overflow-hidden rounded-t-2xl bg-white/10">
        {/* soft pulse */}
        <div className="absolute inset-0 animate-pulse bg-white/5" />
        {/* subtle shine sweep */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_1.6s_infinite]" />
      </div>

      {/* Content area */}
      <div className="p-5">
        <div className="h-4 w-3/4 rounded bg-white/10" />
        <div className="mt-2 h-3 w-full rounded bg-white/10" />
        <div className="mt-2 h-3 w-2/3 rounded bg-white/10" />

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-white/10" />
            <div className="h-3 w-24 rounded bg-white/10" />
          </div>
          <div className="h-3 w-12 rounded bg-white/10" />
        </div>
      </div>
    </div>
  );
}
