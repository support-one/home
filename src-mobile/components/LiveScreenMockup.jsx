import React from 'react';
import { motion } from 'framer-motion';

const LiveScreenMockup = () => {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="text-center mb-14">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-apple-blue block mb-4">Live Preview</span>
        <h2 className="text-3xl font-bold tracking-tight mb-2">See It Running</h2>
        <p className="text-white/60">Real dashboards. Not mockups.</p>
      </div>

      <motion.div
        className="relative mx-auto w-[280px] h-[580px] rounded-[52px] border-[6px] border-[#1a1a1a] bg-black shadow-[0_40px_100px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.05)]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        style={{ willChange: 'transform' }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-30" />
        
        {/* Status bar */}
        <div className="relative z-20 flex justify-between items-center px-7 pt-4 pb-2">
          <span className="text-[10px] font-bold text-white/70">9:41</span>
          <div className="flex gap-1.5 items-center">
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><rect x="0" y="4" width="3" height="6" rx="0.5" fill="white" fillOpacity="0.4"/><rect x="4" y="2.5" width="3" height="7.5" rx="0.5" fill="white" fillOpacity="0.5"/><rect x="8" y="1" width="3" height="9" rx="0.5" fill="white" fillOpacity="0.7"/><rect x="12" y="0" width="2" height="10" rx="0.5" fill="white" fillOpacity="0.9"/></svg>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M7 1C4.5 1 2.3 2 0.7 3.7L2.1 5.1C3.4 3.8 5.1 3 7 3s3.6.8 4.9 2.1l1.4-1.4C11.7 2 9.5 1 7 1z" fill="white" fillOpacity="0.3"/><path d="M7 5c-1.7 0-3.2.7-4.2 1.8L4.2 8.2C4.9 7.5 5.9 7 7 7s2.1.5 2.8 1.2l1.4-1.4C10.2 5.7 8.7 5 7 5z" fill="white" fillOpacity="0.6"/><circle cx="7" cy="9.5" r="1.2" fill="white" fillOpacity="0.9"/></svg>
            <div className="w-[22px] h-[10px] border border-white/30 rounded-[3px] relative ml-0.5">
              <div className="absolute inset-[1.5px] right-[3px] bg-green-400 rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* Scrolling dashboard content */}
        <div className="relative w-full h-[calc(100%-40px)] overflow-hidden">
          <motion.div
            className="absolute w-full px-3"
            animate={{ y: [0, 0, -200, -200, -450, -450, -650, -650, 0] }}
            transition={{ 
              duration: 16, 
              repeat: Infinity, 
              ease: 'easeInOut',
              times: [0, 0.12, 0.18, 0.35, 0.41, 0.58, 0.64, 0.88, 1]
            }}
          >
            {/* App Header */}
            <div className="px-2 pt-4 pb-3">
              <div className="flex items-center justify-between mb-1">
                <div>
                  <p className="text-[9px] text-white/30 uppercase tracking-wider font-bold">Good Morning</p>
                  <p className="text-base font-black text-white tracking-tight">Sharma Textiles</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-apple-blue/30 to-purple-500/30 border border-white/10 flex items-center justify-center">
                  <span className="text-[10px] font-black text-white">ST</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="px-2 flex gap-2 mb-3">
              {[
                { label: 'New Bill', icon: '+', bg: 'bg-apple-blue/20', text: 'text-apple-blue' },
                { label: 'Stock', icon: '📦', bg: 'bg-orange-500/20', text: 'text-orange-400' },
                { label: 'Reports', icon: '📊', bg: 'bg-green-500/20', text: 'text-green-400' },
              ].map(a => (
                <div key={a.label} className={`flex-1 ${a.bg} rounded-2xl p-2.5 text-center border border-white/5`}>
                  <p className="text-base mb-0.5">{a.icon}</p>
                  <p className={`text-[8px] font-bold ${a.text}`}>{a.label}</p>
                </div>
              ))}
            </div>
            
            {/* Revenue Cards Row */}
            <div className="px-2 flex gap-2 mb-3">
              <div className="flex-1 bg-[#111]/90 rounded-2xl p-3 border border-white/5">
                <p className="text-[8px] text-white/30 font-bold mb-0.5">Today's Revenue</p>
                <p className="text-xl font-black text-white tracking-tight">₹4.2L</p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[5px] border-transparent border-b-green-400" />
                  <p className="text-[9px] text-green-400 font-bold">+12.4%</p>
                </div>
              </div>
              <div className="flex-1 bg-[#111]/90 rounded-2xl p-3 border border-white/5">
                <p className="text-[8px] text-white/30 font-bold mb-0.5">Orders</p>
                <p className="text-xl font-black text-white tracking-tight">847</p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[5px] border-transparent border-b-green-400" />
                  <p className="text-[9px] text-green-400 font-bold">+8.2%</p>
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="px-2 mb-3">
              <div className="bg-[#111]/90 rounded-2xl p-3 border border-white/5">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-[9px] text-white/40 font-bold">Monthly Revenue</p>
                  <div className="flex gap-1">
                    {['W', 'M', 'Y'].map((t, i) => (
                      <span key={t} className={`text-[7px] font-bold px-2 py-0.5 rounded-full ${i === 1 ? 'bg-apple-blue/20 text-apple-blue' : 'text-white/20'}`}>{t}</span>
                    ))}
                  </div>
                </div>
                <svg viewBox="0 0 220 70" fill="none" className="w-full h-auto">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0A84FF" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#0A84FF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 55 Q15 50 30 42 T60 35 T90 28 T120 32 T150 18 T180 12 T220 8" stroke="#0A84FF" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <path d="M0 55 Q15 50 30 42 T60 35 T90 28 T120 32 T150 18 T180 12 T220 8 L220 70 L0 70 Z" fill="url(#chartGrad)" />
                  <circle cx="220" cy="8" r="3" fill="#0A84FF" />
                  <circle cx="220" cy="8" r="6" fill="#0A84FF" fillOpacity="0.2" />
                </svg>
                <div className="flex justify-between mt-2">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map(m => (
                    <span key={m} className="text-[6px] text-white/20 font-bold">{m}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="px-2 mb-3">
              <div className="bg-[#111]/90 rounded-2xl p-3 border border-white/5">
                <div className="flex justify-between items-center mb-2.5">
                  <p className="text-[9px] text-white/40 font-bold">Recent Activity</p>
                  <span className="text-[7px] text-apple-blue font-bold">See All</span>
                </div>
                {[
                  { name: 'Order #2847', amount: '₹12,400', status: 'Paid', color: 'bg-green-400' },
                  { name: 'Payment — Sharma', amount: '₹8,200', status: 'Received', color: 'bg-green-400' },
                  { name: 'Invoice #1042', amount: '₹22,000', status: 'Pending', color: 'bg-yellow-400' },
                  { name: 'Stock Alert', amount: 'Widget A', status: 'Low', color: 'bg-red-400' },
                  { name: 'New Client', amount: 'Mehta Foods', status: 'Active', color: 'bg-green-400' },
                  { name: 'Expense Entry', amount: '₹3,500', status: 'Logged', color: 'bg-blue-400' },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${row.color}`} />
                      <div>
                        <span className="text-[9px] text-white/70 font-semibold block">{row.name}</span>
                        <span className="text-[7px] text-white/30">{row.amount}</span>
                      </div>
                    </div>
                    <span className={`text-[7px] font-bold px-1.5 py-0.5 rounded-full ${
                      row.status === 'Paid' || row.status === 'Received' || row.status === 'Active' ? 'bg-green-500/10 text-green-400' :
                      row.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-400' :
                      row.status === 'Low' ? 'bg-red-500/10 text-red-400' : 'bg-blue-500/10 text-blue-400'
                    }`}>{row.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inventory Summary */}
            <div className="px-2 mb-3">
              <div className="bg-[#111]/90 rounded-2xl p-3 border border-white/5">
                <p className="text-[9px] text-white/40 font-bold mb-2.5">Inventory</p>
                <div className="space-y-2">
                  {[
                    { name: 'Raw Silk', stock: 85, color: '#34C759' },
                    { name: 'Cotton Blend', stock: 42, color: '#FF9500' },
                    { name: 'Widget A', stock: 12, color: '#FF3B30' },
                  ].map(item => (
                    <div key={item.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-[8px] text-white/60 font-semibold">{item.name}</span>
                        <span className="text-[8px] text-white/40 font-bold">{item.stock}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${item.stock}%`, backgroundColor: item.color }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="px-2 flex gap-2 mb-3">
              <div className="flex-1 bg-[#111]/90 rounded-2xl p-3 border border-white/5 text-center">
                <p className="text-[8px] text-white/30 font-bold mb-0.5">Clients</p>
                <p className="text-lg font-black text-white">142</p>
              </div>
              <div className="flex-1 bg-[#111]/90 rounded-2xl p-3 border border-white/5 text-center">
                <p className="text-[8px] text-white/30 font-bold mb-0.5">Uptime</p>
                <p className="text-lg font-black text-green-400">99.9%</p>
              </div>
              <div className="flex-1 bg-[#111]/90 rounded-2xl p-3 border border-white/5 text-center">
                <p className="text-[8px] text-white/30 font-bold mb-0.5">Invoices</p>
                <p className="text-lg font-black text-apple-blue">48</p>
              </div>
            </div>

            {/* Bottom nav mockup */}
            <div className="px-2 mt-2 pb-8">
              <div className="bg-[#0a0a0a] rounded-full p-1.5 flex justify-around border border-white/5">
                {[
                  { label: 'Home', active: true },
                  { label: 'Bills', active: false },
                  { label: 'Stock', active: false },
                  { label: 'More', active: false },
                ].map(tab => (
                  <div key={tab.label} className={`text-[7px] font-bold px-4 py-1.5 rounded-full ${tab.active ? 'bg-apple-blue/20 text-apple-blue' : 'text-white/25'}`}>{tab.label}</div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-white/20 rounded-full z-20" />
      </motion.div>
    </section>
  );
};

export default LiveScreenMockup;
