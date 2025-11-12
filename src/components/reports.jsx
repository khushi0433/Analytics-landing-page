import React from "react";

const reports = [
  { icon: "💼", title: "Business Intelligence", value: "98.5%", desc: "Accuracy in predictive analytics and forecasting." },
  { icon: "📱", title: "Mobile Analytics", value: "2.4M", desc: "Mobile app downloads and active engagement." },
  { icon: "🌍", title: "Global Reach", value: "150+", desc: "Countries using our platform worldwide." },
  { icon: "🚀", title: "Performance Index", value: "847", desc: "Performance scoring across all metrics." },
  { icon: "⚡", title: "Response Time", value: "0.2s", desc: "Average API response time." },
  { icon: "📊", title: "Data Processing", value: "12TB", desc: "Daily data volume processed." },
];

const ReportsSection = () => (
  <section className="bg-gradient-to-b from-[#1a0033] via-[#2d1b69] to-[#0f1329] py-20 px-6">
    <div className="max-w-[1400px] mx-auto">
      <h2 className="text-4xl text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-400 font-bold">
        Reports & Insights
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reports.map((report, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-teal-400 hover:translate-y-[-5px] transition-all">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-teal-400 to-blue-400 text-2xl rounded-xl">
              {report.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{report.title}</h3>
            <div className="text-2xl font-bold text-teal-400 mb-2">{report.value}</div>
            <p className="text-gray-400 text-sm">{report.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReportsSection;