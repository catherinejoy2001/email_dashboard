import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*
Email Marketing Dashboard V2 - Animated
React + Tailwind CSS + Framer Motion
*/

import React from "react";
import { motion } from "framer-motion";

// ====== Subcomponents ======
const StatCard = ({ title, subtitle, value, progress }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.03 }}
      className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 flex-1"
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-gray-500 text-sm">{subtitle}</h3>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        <span className="text-xs text-gray-400">{title}</span>
      </div>
      <div className="mt-3">
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1 }}
            className="h-2 bg-blue-500 rounded-full"
          ></motion.div>
        </div>
        <div className="text-xs text-gray-400 mt-2">Progress: {progress}%</div>
      </div>
    </motion.div>
  );
};

const SideNav = () => {
  const menu = [
    "Dashboard",
    "Email Lists",
    "Email Accounts",
    "Campaigns",
    "Reports",
    "Master Data",
  ];
  return (
    <motion.aside
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-64 border-r border-gray-200 bg-white/60 p-6 backdrop-blur-md"
    >
      <h2 className="font-bold text-lg mb-6">EmailPro Suite</h2>
      <nav className="space-y-2">
        {menu.map((item) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.05 }}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${
              item === "Dashboard"
                ? "bg-blue-50 text-blue-600 font-semibold"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            {item}
          </motion.div>
        ))}
      </nav>
    </motion.aside>
  );
};

const HeaderBar = ({ name = "User" }) => (
  <motion.header
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="flex items-center justify-between p-4 border-b border-gray-200 bg-white/60"
  >
    <h1 className="text-lg font-semibold">Email Marketing Overview</h1>
    <p className="text-sm text-gray-600">Welcome, {name} 👋</p>
  </motion.header>
);

const ActivityCard = ({ title, details }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm"
  >
    <h3 className="font-semibold text-gray-800">{title}</h3>
    <ul className="mt-3 text-sm space-y-2">
      {details.map((d, i) => (
        <li key={i}>• {d}</li>
      ))}
    </ul>
  </motion.div>
);

const TableRow = ({ data, index }) => (
  <motion.tr
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="border-b last:border-0 hover:bg-gray-50 transition"
  >
    <td className="px-4 py-3 text-sm">{data.status}</td>
    <td className="px-4 py-3 text-sm">{data.recipients}</td>
    <td className="px-4 py-3 text-sm">{data.performance}</td>
    <td className="px-4 py-3 text-sm">{data.revenue}</td>
    <td className="px-4 py-3 text-sm">{data.date}</td>
    <td className="px-4 py-3 text-sm">
      <div className="flex gap-2">
        <button className="px-2 py-1 border rounded-md text-sm">View</button>
        <button className="px-2 py-1 border rounded-md text-sm">Edit</button>
      </div>
    </td>
  </motion.tr>
);

// ====== Main Component ======
export default function DashboardV2() {
  const stats = [
    { subtitle: "Active Subscribers", title: "Subscribers", value: "12,430", progress: 70 },
    { subtitle: "Revenue", title: "Revenue Generated", value: "$24,100", progress: 55 },
    { subtitle: "Active Campaigns", title: "Campaigns", value: "18", progress: 40 },
    { subtitle: "Open Rate", title: "Average Open Rate", value: "26%", progress: 26 },
    { subtitle: "Bounce Rate", title: "Delivery Failures", value: "3%", progress: 3 },
  ];

  const activities = [
    "Black Friday campaign sent to 10,000 recipients",
    "New audience 'Premium Users' added (1,500 members)",
    "Scheduled Newsletter for Nov 12, 2025",
  ];

  const trends = [
    { metric: "Email Opens", value: "28%" },
    { metric: "Clicks", value: "7%" },
    { metric: "Unsubscribes", value: "0.4%" },
    { metric: "Conversions", value: "2.3%" },
  ];

  const campaigns = [
    { status: "Sent", recipients: "10,000", performance: "Open 28% / Click 7%", revenue: "$7,000", date: "Oct 30, 2025" },
    { status: "Scheduled", recipients: "6,200", performance: "N/A", revenue: "$0", date: "Nov 12, 2025" },
    { status: "Draft", recipients: "—", performance: "—", revenue: "$0", date: "—" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex overflow-hidden">
      <SideNav />

      <div className="flex-1 flex flex-col">
        <HeaderBar name="Catherine" />

        <main className="p-6 space-y-6">
          {/* KPIs */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
            }}
            className="flex flex-wrap gap-4"
          >
            {stats.map((s) => (
              <StatCard key={s.subtitle} {...s} />
            ))}
          </motion.section>

          {/* Performance + Activities */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-2 space-y-6">
              <ActivityCard title="Recent Activities" details={activities} />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-4">Engagement Trends</h3>
                <div className="grid grid-cols-2 gap-4">
                  {trends.map((t) => (
                    <motion.div
                      key={t.metric}
                      whileHover={{ scale: 1.05 }}
                      className="p-3 border rounded-lg bg-white/40"
                    >
                      <p className="text-sm text-gray-500">{t.metric}</p>
                      <p className="text-xl font-semibold mt-1">{t.value}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <ActivityCard
                title="Quick Actions"
                details={["Create Campaign", "View Templates", "Segment Lists", "Check Analytics"]}
              />

              <ActivityCard
                title="Recent Campaigns"
                details={[
                  "Black Friday Sale — Sent (28% Open Rate)",
                  "Newsletter — Scheduled for Nov 12",
                  "Product Launch — Draft",
                ]}
              />
            </div>
          </section>

          {/* Campaigns Table */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Campaigns</h3>
                <p className="text-sm text-gray-500">View and manage your campaigns</p>
              </div>
              <div className="flex gap-3">
                <input
                  className="px-3 py-2 border rounded-md"
                  placeholder="Search campaigns..."
                />
                <button className="px-3 py-2 border rounded-md bg-blue-50 hover:bg-blue-100">
                  + New Campaign
                </button>
              </div>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Recipients</th>
                    <th className="px-4 py-2">Performance</th>
                    <th className="px-4 py-2">Revenue</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {campaigns.map((c, i) => (
                    <TableRow key={i} data={c} index={i} />
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
}

