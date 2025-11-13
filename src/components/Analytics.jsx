import React from "react";
import Stats from "./ui/stats";

const metrics = [
  { value: "2.4M", label: "Page Views" },
  { value: "156K", label: "Unique Visitors" },
  { value: "4.2min", label: "Avg Session" },
  { value: "68%", label: "Return Rate" },
  { value: "89", label: "NPS Score" },
  { value: "3.2K", label: "Daily Active" },
];

const AnalyticsSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#0f1329] to-[#1a1f3a] py-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-400 font-bold">
          Advanced Analytics
        </h2>

        {/* Metrics Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-12">
          {metrics.map((metric, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-teal-400 hover:translate-y-[-2px] transition-all">
              <div className="text-2xl font-bold text-teal-400 mb-2">{metric.value}</div>
              <div className="text-gray-400 text-sm">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-80">
            <h3 className="text-xl font-semibold mb-4">Monthly Trends</h3>
            <Stats />
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-80">
            <h3 className="text-xl font-semibold mb-4">Growth Analytics</h3>
            <Stats />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;