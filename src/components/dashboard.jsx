import React from "react";
import MiniChart from "./ui/Minichart";

const stats = [
  { icon: "📊", title: "Total Revenue", value: "$42,847", description: "Monthly revenue increased by 23% compared to last month." },
  { icon: "👥", title: "Active Users", value: "18.5K", description: "Real-time analytics showing active users." },
  { icon: "🎯", title: "Conversion Rate", value: "94.3%", description: "Customer satisfaction rate from recent surveys." },
  { icon: "🚀", title: "Performance Score", value: "7,392", description: "System performance metrics." },
  { icon: "💰", title: "Monthly Growth", value: "+28.5%", description: "Month-over-month growth in users & revenue." },
  { icon: "⚡", title: "System Uptime", value: "99.9%", description: "Minimal downtime ensuring smooth experience." },
];

const Dashboard = () => {
  return (
    <section className="bg-gradient-to-b from-[#0a0e27] to-[#0f1329] py-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-400 font-bold">
          Dashboard Overview
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:translate-y-[-5px] hover:border-teal-400 transition-all">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-teal-400 to-blue-400 rounded-lg text-xl">
                  {stat.icon}
                </div>
                <div className="text-gray-400 text-sm font-medium">{stat.title}</div>
              </div>
              <div className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-400">{stat.value}</div>
              <p className="text-gray-500 text-sm">{stat.description}</p>
              {/* Mini Chart placeholder */}
              <div className="mt-4 h-14 bg-gray-700 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;