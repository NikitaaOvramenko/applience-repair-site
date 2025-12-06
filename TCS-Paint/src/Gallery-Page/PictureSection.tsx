import axios from "axios";
import { useEffect, useState } from "react";
import BeforeAfterCard from "../custom-components/BeforeAfterCard";

export default function PictureSection() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [pics, setPics] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = import.meta.env.VITE_PIC_URL;
    if (url) {
      axios
        .get(url)
        .then((res) => {
          setPics(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch images", err);
          setIsLoading(false);
        });
    } else {
      // Fallback if env is missing
      setIsLoading(false);
    }
  }, []);

  // Skeleton Loader Component
  const SkeletonCard = () => (
    <div className="w-full aspect-square bg-white/5 rounded-2xl animate-pulse border border-white/10 flex items-center justify-center">
      <div className="text-white/20 font-medium">Loading...</div>
    </div>
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="w-full bg-[rgba(3,0,0,0.72)] rounded-2xl p-6 md:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-[50vh]">
          {isLoading
            ? // Show 6 skeletons while loading
              Array.from({ length: 6 }).map((_, idx) => (
                <SkeletonCard key={`skeleton-${idx}`} />
              ))
            : pics.map((pic, idx) => (
                <div
                  key={idx}
                  className="w-full aspect-square transition-all duration-300 hover:scale-[1.02] hover:shadow-xl rounded-2xl overflow-hidden"
                >
                  <BeforeAfterCard
                    beforeSrc={pic.beforePic}
                    afterSrc={pic.afterPic}
                    width="w-full"
                    height="h-full"
                  />
                </div>
              ))}

          {!isLoading && pics.length === 0 && (
            <div className="col-span-full text-center text-white/50 py-20 border border-white/10 rounded-2xl">
              No images available at the moment.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
