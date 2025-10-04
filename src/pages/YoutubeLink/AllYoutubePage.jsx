import React, { useEffect, useMemo, useState } from "react";
import apiurl from "../../../apiurl/apiurl";

/* helpers (kept just in case) */
function getVideoIdFromUrl(url) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.replace("/", "");
    const v = u.searchParams.get("v");
    if (v) return v;
    const paths = u.pathname.split("/").filter(Boolean);
    if ((paths[0] === "shorts" || paths[0] === "embed") && paths[1])
      return paths[1];
    return "";
  } catch {
    return "";
  }
}
const toThumb = (videoId) =>
  videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : undefined;

function VideoPlayerModal({ open, onClose, videoId, title, description }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[120]  bg-black/70 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-xl rounded-xl overflow-hidden shadow-2xl">
        {/* header */}
        <div className="flex items-center justify-between border-b p-3">
          <h3 className="font-semibold line-clamp-2 pr-6">{title}</h3>
          <button
            className="p-2 hover:bg-gray-100 rounded"
            onClick={onClose}
            title="Close"
          >
            ✕
          </button>
        </div>

        {/* player */}
        <div className="bg-black aspect-video w-full ">
          {videoId ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title={title || "YouTube video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white">
              Invalid video
            </div>
          )}
        </div>

        {/* description */}
        {description ? (
          <div className="p-4 max-h-[40vh] overflow-auto">
            {/* Show raw text with line breaks preserved (no markdown lib required) */}
            <pre className="whitespace-pre-wrap text-sm text-gray-700">
              {description}
            </pre>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function AllYoutubePage() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [playerOpen, setPlayerOpen] = useState(false);
  const [currentVid, setCurrentVid] = useState({
    id: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    let ignore = false;
    (async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${apiurl.mainUrl}/youtube`);
        const json = await res.json();

        if (!ignore && json?.success) {
          const rows = (json?.data || []).map((v) => {
            const vid = v.videoId || getVideoIdFromUrl(v.url);
            return {
              ...v,
              videoId: vid,
              thumbnail: v.thumbnail || toThumb(vid),
            };
          });
          setVideos(rows);
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

  const featured = useMemo(() => (videos.length ? videos[0] : null), [videos]);
  const gridItems = useMemo(
    () => (featured ? videos.slice(1) : videos),
    [videos, featured]
  );

  const openPlayer = (row) => {
    setCurrentVid({
      id: row.videoId,
      title: row.title,
      description: row.description || "",
    });
    setPlayerOpen(true);
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            Latest Videos
          </h1>
          <p className="mt-2 text-gray-600 max-w-2xl">
            Tutorials, announcements, and highlights from our channel.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="max-w-7xl mx-auto px-4 mt-6">
        {isLoading ? (
          <div className="rounded-xl overflow-hidden border">
            <div className="w-full aspect-video bg-gray-200 animate-pulse" />
          </div>
        ) : featured ? (
          <article className="rounded-xl overflow-hidden border hover:shadow transition">
            <div
              className="relative group cursor-pointer"
              onClick={() => openPlayer(featured)}
              title={featured.title}
            >
              <img
                src={featured.thumbnail}
                alt={featured.title}
                className="w-full aspect-video object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <button className="bg-white text-black rounded-full px-5 py-2 font-medium shadow">
                  ▶ Play
                </button>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold line-clamp-2">
                {featured.title}
              </h2>
              {featured.description ? (
                <p className="text-sm text-gray-600 line-clamp-2 mt-1 whitespace-pre-line">
                  {featured.description}
                </p>
              ) : null}
              <p className="text-xs text-gray-500 mt-2">
                {new Date(featured?.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
          </article>
        ) : (
          <div className="border rounded-lg p-8 text-center text-gray-600">
            No videos available.
          </div>
        )}
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 mt-8">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border rounded-xl p-3">
                <div className="w-full aspect-video bg-gray-200 animate-pulse rounded" />
                <div className="h-4 bg-gray-200 animate-pulse rounded mt-3 w-3/4" />
                <div className="h-3 bg-gray-100 animate-pulse rounded mt-2 w-1/2" />
              </div>
            ))}
          </div>
        ) : gridItems.length ? (
          <>
            <h3 className="text-lg font-semibold mb-3">Latest uploads</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {gridItems.map((row) => (
                <article
                  key={row._id || row.videoId}
                  className="border rounded-xl overflow-hidden hover:shadow-md transition"
                >
                  <div
                    className="relative group cursor-pointer"
                    onClick={() => openPlayer(row)}
                    title={row.title}
                  >
                    <img
                      src={row.thumbnail}
                      alt={row.title}
                      className="w-full aspect-video object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <button className="bg-white text-black rounded-full px-4 py-2 font-medium shadow">
                        ▶ Play
                      </button>
                    </div>
                  </div>
                  <div className="p-3">
                    <h4
                      className="font-semibold line-clamp-2 min-h-[3rem]"
                      title={row.title}
                    >
                      {row.title}
                    </h4>
                    {row.description ? (
                      <p className="text-sm text-gray-600 line-clamp-2 mt-1 whitespace-pre-line">
                        {row.description}
                      </p>
                    ) : null}
                    <p className="text-xs text-gray-500 mt-2">
                      {new Date(row?.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </>
        ) : null}
      </section>

      {/* Modal */}
      <VideoPlayerModal
        open={playerOpen}
        onClose={() => setPlayerOpen(false)}
        videoId={currentVid.id}
        title={currentVid.title}
        description={currentVid.description}
      />
    </main>
  );
}
