import React from 'react';

const recentActivity = [
  { id: 1, type: 'order', title: 'New Order #4892', amount: '$124.00', time: '2 mins ago', icon: "fa fa-shopping-bag", color: 'text-green-400', bg: 'bg-green-400/10' },
  { id: 2, type: 'auth', title: 'User Login', user: 'sarah@example.com', time: '15 mins ago', icon: "fa fa-user-check", color: 'text-amber-400', bg: 'bg-amber-400/10' },
  { id: 3, type: 'firestore', title: 'Batch Write', details: 'Updated 45 product inventories', time: '1 hour ago', icon: "fa fa-database", color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { id: 4, type: 'order', title: 'New Order #4891', amount: '$89.50', time: '2 hours ago', icon: "fa fa-shopping-bag", color: 'text-green-400', bg: 'bg-green-400/10' },
  { id: 5, type: 'payment', title: 'Payment Failed', user: 'Order #4890', time: '3 hours ago', icon: "fa fa-credit-card", color: 'text-red-400', bg: 'bg-red-400/10' },
];

const transactions = [
  { id: 'TRX-9921', customer: 'Alice Johnson', amount: '$124.00', status: 'succeeded', date: 'Today, 10:42 AM' },
  { id: 'TRX-9920', customer: 'Bob Smith', amount: '$89.50', status: 'succeeded', date: 'Today, 09:15 AM' },
  { id: 'TRX-9919', customer: 'Carol White', amount: '$210.00', status: 'succeeded', date: 'Yesterday, 04:30 PM' },
];

export default function AdminPage() {
  return (
    <div className="flex h-[100dvh] w-full bg-zinc-950 text-slate-300 font-sans overflow-hidden selection:bg-green-500/30">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col justify-between shrink-0 hidden md:flex">
        <div>
          <div className="h-16 flex items-center px-6 border-b border-zinc-800">
            <i className="fa fa-flower w-6 h-6 text-green-500 mr-3" />
            <span className="text-zinc-100 font-bold tracking-wide uppercase text-sm">FloraHQ Admin</span>
          </div>
          
          <nav className="p-4 space-y-1">
            <a href="#" className="flex items-center px-3 py-2.5 bg-zinc-800/50 text-green-400 rounded-md group transition-colors">
              <i className="fa fa-tachometer-alt w-5 h-5 mr-3 opacity-90" />
              <span className="font-medium text-sm">Command Center</span>
            </a>
            <a href="#" className="flex items-center px-3 py-2.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 rounded-md group transition-colors">
              <i className="fa fa-shopping-bag w-5 h-5 mr-3 opacity-70 group-hover:opacity-100" />
              <span className="font-medium text-sm">Orders</span>
              <span className="ml-auto bg-zinc-800 text-zinc-300 py-0.5 px-2 rounded-full text-xs">12</span>
            </a>
            <a href="#" className="flex items-center px-3 py-2.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 rounded-md group transition-colors">
              <i className="fa fa-user w-5 h-5 mr-3 opacity-70 group-hover:opacity-100" />
              <span className="font-medium text-sm">Customers</span>
            </a>
            <a href="#" className="flex items-center px-3 py-2.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 rounded-md group transition-colors">
              <i className="fa fa-chart-line w-5 h-5 mr-3 opacity-70 group-hover:opacity-100" />
              <span className="font-medium text-sm">Analytics</span>
            </a>
            <a href="#" className="flex items-center px-3 py-2.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 rounded-md group transition-colors">
              <i className="fa fa-cog w-5 h-5 mr-3 opacity-70 group-hover:opacity-100" />
              <span className="font-medium text-sm">Settings</span>
            </a>
          </nav>
        </div>

        <div className="p-4 border-t border-zinc-800">
          <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3 px-3">System Status</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between px-3 py-2 bg-zinc-950/50 rounded-md border border-zinc-800/50">
              <div className="flex items-center">
                <i className="fa fa-credit-card w-4 h-4 text-zinc-400 mr-2" />
                <span className="text-sm font-medium text-zinc-300">Stripe</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs text-green-500 font-medium">Active</span>
              </div>
            </div>
            <div className="flex items-center justify-between px-3 py-2 bg-zinc-950/50 rounded-md border border-zinc-800/50">
              <div className="flex items-center">
                <i className="fa fa-server w-4 h-4 text-zinc-400 mr-2" />
                <span className="text-sm font-medium text-zinc-300">Firebase</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs text-green-500 font-medium">Active</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 flex items-center justify-between px-4 sm:px-8 border-b border-zinc-800/80 bg-zinc-900/20 backdrop-blur-sm z-10 shrink-0">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-zinc-100">Overview</h1>
            <div className="hidden sm:flex ml-6 px-3 py-1 bg-zinc-800/60 border border-zinc-700/50 rounded-full items-center text-xs text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>
              Live telemetry connected
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="relative hidden md:block">
              <i className="fa fa-magnifying-glass w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input 
                type="text" 
                placeholder="Search orders..." 
                className="bg-zinc-900 border border-zinc-800 rounded-md pl-9 pr-4 py-1.5 text-sm text-zinc-200 focus:outline-none focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 placeholder-zinc-600 transition-all w-48 lg:w-64"
              />
            </div>
            <button className="p-2 text-zinc-400 hover:text-zinc-100 relative">
              <i className="fa fa-bell w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border border-zinc-950"></span>
            </button>
            <div className="flex gap-2 ml-1 sm:ml-2">
              <button className="hidden sm:flex items-center px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-sm font-medium rounded-md transition-colors border border-zinc-700">
                <i className="fa fa-download w-4 h-4 mr-2" />
                Export
              </button>
              <button className="flex items-center px-3 py-1.5 bg-green-600 hover:bg-green-500 text-white text-sm font-medium rounded-md transition-colors shadow-[0_0_15px_rgba(22,163,74,0.3)]">
                <i className="fa fa-plus w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">New Order</span>
              </button>
            </div>
          </div>
        </header>

        {/* Scrollable Dashboard */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
          
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {/* Stripe Card 1 */}
            <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-lg p-5 relative overflow-hidden group hover:bg-zinc-900 transition-colors">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm font-medium text-zinc-400">Total Revenue</p>
                  <h3 className="text-2xl font-bold text-zinc-100 mt-1">$24,380.00</h3>
                </div>
                <div className="p-2 bg-green-500/10 rounded-md">
                  <i className="fa fa-credit-card w-5 h-5 text-green-500" />
                </div>
              </div>
              <div className="flex items-center text-xs">
                <i className="fa fa-trending-up w-3 h-3 text-green-400 mr-1" />
                <span className="text-green-400 font-medium">+12.5%</span>
                <span className="text-zinc-500 ml-2">vs last month</span>
              </div>
            </div>

            {/* Stripe Card 2 */}
            <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-lg p-5 relative overflow-hidden group hover:bg-zinc-900 transition-colors">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm font-medium text-zinc-400">Orders This Month</p>
                  <h3 className="text-2xl font-bold text-zinc-100 mt-1">142</h3>
                </div>
                <div className="p-2 bg-green-500/10 rounded-md">
                  <i className="fa fa-shopping-bag w-5 h-5 text-green-500" />
                </div>
              </div>
              <div className="flex items-center text-xs">
                <i className="fa fa-trending-up w-3 h-3 text-green-400 mr-1" />
                <span className="text-green-400 font-medium">+8.2%</span>
                <span className="text-zinc-500 ml-2">vs last month</span>
              </div>
            </div>

            {/* Firebase Card 1 */}
            <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-lg p-5 relative overflow-hidden group hover:bg-zinc-900 transition-colors">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"></div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm font-medium text-zinc-400">Active Users</p>
                  <h3 className="text-2xl font-bold text-zinc-100 mt-1">1,204</h3>
                </div>
                <div className="p-2 bg-amber-500/10 rounded-md">
                  <i className="fa fa-users w-5 h-5 text-amber-500" />
                </div>
              </div>
              <div className="flex items-center text-xs">
                <i className="fa fa-clock w-3 h-3 text-amber-400 mr-1" />
                <span className="text-amber-400 font-medium">98</span>
                <span className="text-zinc-500 ml-2">auth events today</span>
              </div>
            </div>

            {/* Firebase Card 2 */}
            <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-lg p-5 relative overflow-hidden group hover:bg-zinc-900 transition-colors">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"></div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm font-medium text-zinc-400">Firestore Reads</p>
                  <h3 className="text-2xl font-bold text-zinc-100 mt-1">42K</h3>
                </div>
                <div className="p-2 bg-amber-500/10 rounded-md">
                  <i className="fa fa-database w-5 h-5 text-amber-500" />
                </div>
              </div>
              <div className="flex items-center text-xs">
                <span className="text-zinc-400 font-medium">~1.2K</span>
                <span className="text-zinc-500 ml-1">reads / hour average</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Chart Area */}
            <div className="lg:col-span-2 bg-zinc-900/40 border border-zinc-800/80 rounded-lg p-4 sm:p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-base font-semibold text-zinc-100">Revenue & Activity</h3>
                  <p className="text-sm text-zinc-500">Last 7 days performance metrics</p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-sm bg-green-500"></span>
                    <span className="hidden sm:inline text-zinc-400">Revenue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-sm bg-amber-500"></span>
                    <span className="hidden sm:inline text-zinc-400">Users</span>
                  </div>
                </div>
              </div>
              
              {/* Custom CSS Bar Chart */}
              <div className="h-64 mt-8 flex items-end justify-between gap-1 sm:gap-2 pl-8 sm:px-2 relative">
                {/* Y-Axis labels */}
                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] sm:text-xs text-zinc-600">
                  <span>$5k</span>
                  <span>$3.75k</span>
                  <span>$2.5k</span>
                  <span>$1.25k</span>
                  <span>0</span>
                </div>
                {/* Horizontal grid lines */}
                <div className="absolute left-8 sm:left-0 right-0 top-0 bottom-0 flex flex-col justify-between pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="border-t border-zinc-800/50 w-full"></div>
                  ))}
                </div>

                {/* Bars */}
                {[
                  { day: 'Mon', rev: 40, usr: 60 },
                  { day: 'Tue', rev: 55, usr: 45 },
                  { day: 'Wed', rev: 35, usr: 70 },
                  { day: 'Thu', rev: 80, usr: 65 },
                  { day: 'Fri', rev: 65, usr: 85 },
                  { day: 'Sat', rev: 95, usr: 50 },
                  { day: 'Sun', rev: 75, usr: 40 },
                ].map((data, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 group relative z-10 h-full justify-end">
                    <div className="w-full max-w-[40px] flex items-end gap-0.5 sm:gap-1 h-full">
                      <div 
                        className="w-1/2 bg-green-500/80 hover:bg-green-400 rounded-t-sm transition-all duration-300"
                        style={{ height: `${data.rev}%` }}
                      ></div>
                      <div 
                        className="w-1/2 bg-amber-500/80 hover:bg-amber-400 rounded-t-sm transition-all duration-300"
                        style={{ height: `${data.usr}%` }}
                      ></div>
                    </div>
                    <span className="text-[10px] sm:text-xs text-zinc-500 font-medium mt-2">{data.day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity Feed */}
            <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-lg p-4 sm:p-6 flex flex-col h-[400px] lg:h-auto">
              <div className="flex justify-between items-center mb-6 shrink-0">
                <h3 className="text-base font-semibold text-zinc-100">Live Feed</h3>
                <button className="text-sm text-green-500 hover:text-green-400 font-medium flex items-center">
                  View all <i className="fa fa-arrow-right w-4 h-4 ml-1" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto pr-2 -mr-2 space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3 sm:gap-4">
                    <div className={`mt-0.5 w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${activity.bg}`}>
                      <i className={`w-4 h-4 ${activity.icon}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-zinc-200 truncate">{activity.title}</p>
                      <p className="text-xs text-zinc-500 mt-0.5 truncate">
                        {activity.amount || activity.user || activity.details}
                      </p>
                    </div>
                    <div className="text-[10px] sm:text-xs text-zinc-600 whitespace-nowrap shrink-0">
                      {activity.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section - Recent Transactions */}
          <div className="mt-6 sm:mt-8 bg-zinc-900/40 border border-zinc-800/80 rounded-lg overflow-hidden">
            <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-zinc-800 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
              <div className="flex items-center gap-2">
                <i className="fa fa-exchange-alt w-5 h-5 text-zinc-400" />
                <h3 className="text-base font-semibold text-zinc-100">Recent Stripe Transactions</h3>
              </div>
              <span className="self-start sm:self-auto px-2.5 py-1 bg-zinc-800 text-zinc-300 text-xs font-medium rounded-md border border-zinc-700">
                Live Mode
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-zinc-400 min-w-[600px]">
                <thead className="bg-zinc-900/50 text-xs uppercase text-zinc-500 font-semibold border-b border-zinc-800">
                  <tr>
                    <th className="px-6 py-4">Transaction ID</th>
                    <th className="px-6 py-4">Customer</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Amount</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/50">
                  {transactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-zinc-800/20 transition-colors">
                      <td className="px-6 py-4 font-mono text-zinc-300">{tx.id}</td>
                      <td className="px-6 py-4 text-zinc-200">{tx.customer}</td>
                      <td className="px-6 py-4">{tx.date}</td>
                      <td className="px-6 py-4 font-medium text-zinc-200">{tx.amount}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                          <i className="fa fa-check-circle w-3 h-3" />
                          {tx.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
