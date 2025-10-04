/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import apiurl from "../../../apiurl/apiurl";

// ---------- helpers ----------

function parseTags(raw) {
  if (!raw) return [];
  // backend might return array, single string, or stringified JSON (even double-encoded)
  try {
    if (Array.isArray(raw)) return raw;
    let parsed = raw;
    if (typeof parsed === "string") parsed = JSON.parse(parsed);
    if (typeof parsed === "string") {
      try {
        parsed = JSON.parse(parsed);
      } catch {}
    }
    return Array.isArray(parsed) ? parsed : [String(parsed)];
  } catch {
    return [String(raw)];
  }
}

const stripHtml = (html = "") =>
  html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const readingTime = (html = "") => {
  const words = stripHtml(html).split(/\s+/).filter(Boolean).length;
  const min = Math.max(1, Math.round(words / 220));
  return `${min} min read`;
};

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

// ---------- skeleton ----------
function Skeleton() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 animate-pulse">
      <div className="h-8 w-1/2 bg-neutral-200 rounded" />
      <div className="mt-2 h-4 w-1/3 bg-neutral-200 rounded" />
      <div className="mt-6 h-64 w-full bg-neutral-200 rounded-xl" />
      <div className="mt-6 space-y-3">
        <div className="h-4 w-full bg-neutral-200 rounded" />
        <div className="h-4 w-11/12 bg-neutral-200 rounded" />
        <div className="h-4 w-10/12 bg-neutral-200 rounded" />
        <div className="h-4 w-9/12 bg-neutral-200 rounded" />
      </div>
    </div>
  );
}

// ---------- related card ----------
function RelatedCard({ post }) {
  return (
    <article className="overflow-hidden rounded-xl border bg-white transition hover:shadow-sm">
      <Link to={`/blog/${post.id}`} className="block">
        <div className="h-36 w-full overflow-hidden bg-neutral-100">
          <img
            src={`https://backend.mettadhamma.com${post.image}`}
            alt={post.title}
            className="h-full w-full object-cover"
            loading="lazy"
            onError={(e) => (e.currentTarget.style.visibility = "hidden")}
            crossOrigin="anonymous"
          />
        </div>
        <div className="p-4">
          <h4 className="font-semibold line-clamp-2 text-neutral-900">
            {post.title}
          </h4>
          <p className="mt-1 text-xs text-neutral-500">
            {post.date} • {post.readTime}
          </p>
        </div>
      </Link>
    </article>
  );
}

// ---------- main page ----------
export default function BlogDetailsPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let ignore = false;
    (async () => {
      setLoading(true);
      setErr("");
      try {
        // fetch single post
        const res = await fetch(`${apiurl.mainUrl}/blog/${id}`);
        const json = await res.json();

        if (!ignore) {
          if (!json?.success || !json?.data) {
            setErr("Blog not found.");
            setLoading(false);
            return;
          }

          const b = json.data;
          const tags = parseTags(b.tags ?? b.category);

          const normalized = {
            id: b._id,
            title: b.title,
            subHeading: b.subHeading,
            content: b.content || "",
            author: b.author || "Unknown",
            image: b.image,
            tags,
            date: formatDate(b.publishedAt || b.createdAt),
            readTime: readingTime(b.content),
          };

          setPost(normalized);

          // fetch related (simple heuristic: same first tag)
          const primaryTag = tags?.[0];
          const qs = new URLSearchParams({
            published: "true",
            limit: "6",
            page: "1",
          }).toString();
          const rRes = await fetch(`${apiurl.mainUrl}/blog?${qs}`);
          const rJson = await rRes.json();
          if (rJson?.success && Array.isArray(rJson.data)) {
            const rel = rJson.data
              .filter((x) => x._id !== b._id)
              .map((x) => {
                const xtags = parseTags(x.tags ?? x.category);
                return {
                  id: x._id,
                  title: x.title,
                  image: x.image,
                  tags: xtags,
                  date: formatDate(x.publishedAt || x.createdAt),
                  readTime: readingTime(x.content),
                  tagMatch: primaryTag && xtags.includes(primaryTag),
                };
              })
              .sort((a, c) => Number(c.tagMatch) - Number(a.tagMatch))
              .slice(0, 3);
            setRelated(rel);
          }
        }
      } catch {
        if (!ignore) setErr("Something went wrong loading the blog.");
      } finally {
        if (!ignore) setLoading(false);
      }
    })();
    return () => {
      ignore = true;
    };
  }, [id]);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  if (loading) return <Skeleton />;

  if (err) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <p className="text-neutral-500">{err}</p>
        <Link
          to="/blogs"
          className="mt-4 inline-flex rounded-full border px-4 py-2 text-sm hover:bg-neutral-50"
        >
          Back to blogs
        </Link>
      </div>
    );
  }

  if (!post) return null;

  const authorAvatar =
    "https://api.dicebear.com/7.x/initials/svg?backgroundType=gradientLinear&seed=" +
    encodeURIComponent(post.author || "U");

  return (
    <main className="min-h-screen w-full bg-neutral-50">
      {/* hero cover */}
      {post.image ? (
        <div className="w-full pt-8 bg-neutral-100">
          <img
            src={`https://backend.mettadhamma.com${post.image}`}
            alt={post.title}
            className="mx-auto max-h-[420px] w-full object-contain"
            loading="eager"
            crossOrigin="anonymous"
          />
        </div>
      ) : null}

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* title & meta */}
        <div className="mb-6">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-sm text-emerald-700 hover:underline"
          >
            ← Back to all articles
          </Link>

          <h1 className="mt-3 font-serif text-3xl md:text-4xl text-neutral-900">
            {post.title}
          </h1>

          {post.subHeading ? (
            <p className="mt-2 text-neutral-600">{post.subHeading}</p>
          ) : null}

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-neutral-600">
            <img
              src={authorAvatar}
              alt={post.author}
              className="h-8 w-8 rounded-full"
              loading="lazy"
            />
            <span>{post.author}</span>
            <span className="h-3 w-px bg-neutral-300" />
            <span>{post.date}</span>
            <span className="h-3 w-px bg-neutral-300" />
            <span>{post.readTime}</span>
          </div>

          {/* share */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                shareUrl
              )}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-green-400 text-black font-medium border px-3 py-1.5 hover:bg-neutral-100"
            >
              Share on Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                shareUrl
              )}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border px-3 py-1.5 hover:bg-neutral-100 bg-sky-400 text-black font-medium"
            >
              Share on X
            </a>
            <button
              className="rounded-full border px-3 py-1.5 hover:bg-neutral-100 hover:text-black bg-slate-400  text-white font-medium"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(shareUrl);
                } catch {}
              }}
            >
              Copy link
            </button>
          </div>
        </div>

        {/* content */}
        <article className="prose prose-neutral max-w-none prose-img:rounded-xl prose-headings:scroll-mt-20">
          {/* ⚠️ If you want strict safety, run the HTML through DOMPurify on the client before injecting. */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {/* divider */}
        <hr className="my-10 border-neutral-200" />

        {/* related */}
        {related.length ? (
          <section className="mt-8">
            <h3 className="text-lg font-semibold text-neutral-900">
              Related articles
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <RelatedCard key={r.id} post={r} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
