import { useState, useRef, useEffect } from "react";

export default function BeforeAfterCard({
  beforeSrc,
  afterSrc,
  width = "w-full",
  height = "aspect-square",
}: {
  beforeSrc: string;
  afterSrc: string;
  width?: string;
  height?: string;
}) {
  const [position, setPosition] = useState(50); // Percentage 0-100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const calculatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleTouchStart = () => setIsDragging(true);

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;

      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      calculatePosition(clientX);
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("touchmove", handleMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchend", handleEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className={`relative select-none group ${width} ${height} overflow-hidden rounded-2xl border-4 border-black cursor-col-resize`}
      onMouseDown={(e) => {
        handleMouseDown();
        calculatePosition(e.clientX);
      }}
      onTouchStart={(e) => {
        handleTouchStart();
        calculatePosition(e.touches[0].clientX);
      }}
    >
      {/* Before Image (Background) */}
      <img
        src={beforeSrc}
        alt="Before"
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none select-none"
        draggable={false}
      />

      {/* After Image (Foreground with clip-path) */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none select-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={afterSrc}
          alt="After"
          className="absolute top-0 left-0 w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-black transform transition-transform group-hover:scale-110">
          <div className="flex gap-[2px]">
            <div className="w-[2px] h-4 bg-black rounded-full"></div>
            <div className="w-[2px] h-4 bg-black rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
