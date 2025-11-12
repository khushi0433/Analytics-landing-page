import { useEffect } from "react";

export default function Stats() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll(".bar");
            bars.forEach((bar, index) => {
              setTimeout(() => bar.classList.add("scale-y-100"), index * 100);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll(".bar-chart").forEach((chart) => observer.observe(chart));
  }, []);

  return (
    <div className="bar-chart flex gap-4 h-48">
      {[80, 60, 90, 70].map((h, i) => (
        <div
          key={i}
          className="bar bg-cyan-400 w-6 scale-y-0 origin-bottom transition-transform duration-500"
          style={{ height: `${h}%` }}
        ></div>
      ))}
    </div>
  );
}