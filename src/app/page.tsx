'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Icon1 } from './assets/icons/Icon1';
import { Icon2 } from './assets/icons/Icon2';
import { Icon3 } from './assets/icons/Icon3';
import { Icon4 } from './assets/icons/Icon4';
import Image from 'next/image';
import { Prev } from './assets/icons/Prev';
import { Next } from './assets/icons/Next';
import { Download } from './assets/icons/Download';
import { FileCheck } from './assets/icons/FileCheck';
const suppliersData = [
  { name: 'APPL', value: 30 },
  { name: 'TH', value: 20 },
  { name: 'DLL', value: 24 },
  { name: 'HP', value: 18 },
  { name: 'TCL', value: 27 },
  { name: 'KL', value: 35 },
  { name: 'LNV', value: 40 },
  { name: 'SMS', value: 22 },
  { name: 'ACR', value: 38 },
  { name: 'INT', value: 33 },
  { name: 'AMD', value: 15 },
  { name: 'BVC', value: 19 },
];

const categoriesData = [
  { name: 'Production Parts', value: 85.54, color: '#34D399', percentage: '46.98%' },
  { name: 'Facilities', value: 37.91, color: '#FBBF24', percentage: '20.89%' },
  { name: 'IT & Telecoms', value: 23.89, color: '#60A5FA', percentage: '12.13%' },
  { name: 'Marketing', value: 17.69, color: '#F472B6', percentage: '9.71%' },
  { name: 'Human Resources', value: 11.63, color: '#A78BFA', percentage: '6.39%' },
  { name: 'Travel', value: 85.54, color: '#F87171', percentage: '46.98%' },
];

export default function Home() {
  return (
    <div className="flex-1 px-[28px] py-5.5 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[32px] font-normal text-[#061120] mb-5.5">Dashboard</h1>
        {/* Top Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl py-5 px-6 flex items-center justify-between gap-2 shadow-sm">
            <div className="flex flex-col gap-2">
            <div className="text-[#737D8C] text-[15px] font-medium">Active Contracts</div>
            <div className="text-[36px] font-medium text-[#061120] leading-[1.06]">24</div>
            </div>
            <div>
              <Icon1 />
            </div>
          </div>
          <div className="bg-white rounded-xl py-5 px-6 flex items-center justify-between gap-2 shadow-sm">
            <div className="flex flex-col gap-2">
            <div className="text-[#737D8C] text-[15px] font-medium">Portfolio TCV</div>
            <div className="text-[36px] font-medium text-[#061120] leading-[1.06]">$100M</div>
            </div>
            <div>
              <Icon2 />
            </div>
          </div>
          <div className="bg-white rounded-xl py-5 px-6 flex items-center justify-between gap-2 shadow-sm">
            <div className="flex flex-col gap-2">
            <div className="text-[#737D8C] text-[15px] font-medium flex items-center justify-between gap-2">Suppliers</div>
            <div className="text-[36px] font-medium text-[#061120] leading-[1.06]">13</div>
            </div>
            <div>
              <Icon3 />
            </div>
          </div>
          <div className="bg-white rounded-xl py-5 px-6 flex items-center justify-between gap-2 shadow-sm">
            <div className="flex flex-col gap-2">
            <div className="text-[#737D8C] text-[15px] font-medium flex items-center justify-between gap-2">Contract Managers</div>
            <div className="text-[36px] font-medium text-[#061120] leading-[1.06]">4</div>
              </div>
              <div>
                <Icon4 />
              </div>
          </div>
        </div>
        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Active Sources */}
          <div className="col-span-6 bg-white rounded-xl py-5 px-6 shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="font-medium text-[#061120] text-[19px]">Active Sources <span className="text-[17px] text-[#9AA5B3] font-medium ml-2">6</span></div>
              <div className="flex items-center gap-1">
              <button className="w-8 h-8 rounded-full border border-[#3D4C62]/10 flex items-center justify-center cursor-pointer"><Prev /></button>
              <button className="w-8 h-8 rounded-full border border-[#3D4C62]/10 flex items-center justify-center cursor-pointer"><Next /></button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {/* Source Item 1 */}
              <div className="flex flex-col gap-4.5 p-3 bg-[#0069FE]/6 rounded-xl">
                <div className="flex items-start justify-between w-full">
                  <div className="flex flex-col gap-1 text-[13px]">
                    <span className="text-[#737D8C] text-[13px]">WF001</span>
                    <span className="font-medium text[#061120]">Laptops</span>
                  </div>
                  <div className="text-[#9AA5B3] text-[11px] font-medium w-[38px] h-6 rounded-full border border-[#3D4C62]/10 flex items-center justify-center">81%</div>
                </div>
                <div className="w-full h-[3px] bg-[#3D4C62]/10 rounded-full overflow-hidden">
                  <div className="h-[3px] bg-[#0069FE] rounded-full" style={{ width: '81%' }}></div>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="text-[#061120] font-medium text-[15px]">$1,200,000.00</div>
                  <div className="flex -space-x-2">
                    <Image src="/avatar.jpg" alt="avatar" width={24} height={24} className="w-6 h-6 rounded-full" />
                    <Image src="/avatar2.png" alt="avatar" width={24} height={24} className="w-6 h-6 rounded-full" />
                    <Image src="/avatar2.png" alt="avatar" width={24} height={24} className="w-6 h-6 rounded-full" />
                  </div>
                </div>
              </div>
              {/* Source Item 2 */}
              <div className="flex flex-col gap-4.5 p-3 bg-[#0069FE]/6 rounded-xl">
                <div className="flex items-start justify-between w-full">
                  <div className="flex flex-col gap-1 text-[13px]">
                    <span className="text-[#737D8C] text-[13px]">WF045</span>
                    <span className="font-medium text[#061120]">Cars</span>
                  </div>
                  <div className="text-[#9AA5B3] text-[11px] font-medium w-[38px] h-6 rounded-full border border-[#3D4C62]/10 flex items-center justify-center">25%</div>
                </div>
                <div className="w-full h-[3px] bg-[#3D4C62]/10 rounded-full overflow-hidden">
                  <div className="h-[3px] bg-[#0069FE] rounded-full" style={{ width: '25%' }}></div>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="text-[#061120] font-medium text-[15px]">$10,600,000.00</div>
                  <div className="flex -space-x-2">
                    <Image src="/avatar.jpg" alt="avatar" width={24} height={24} className="w-6 h-6 rounded-full" />
                    <Image src="/avatar2.png" alt="avatar" width={24} height={24} className="w-6 h-6 rounded-full" />
                  </div>
                </div>
              </div>
              {/* Source Item 3 */}
              <div className="flex flex-col gap-4.5 p-3 bg-[#0069FE]/6 rounded-xl">
                <div className="flex items-start justify-between w-full">
                  <div className="flex flex-col gap-1 text-[13px]">
                    <span className="text-[#737D8C] text-[13px]">WF023</span>
                    <span className="font-medium text[#061120]">Adobe Subscription</span>
                  </div>
                  <div className="text-[#9AA5B3] text-[11px] font-medium w-[38px] h-6 rounded-full border border-[#3D4C62]/10 flex items-center justify-center">43%</div>
                </div>
                <div className="w-full h-[3px] bg-[#3D4C62]/10 rounded-full overflow-hidden">
                  <div className="h-[3px] bg-[#0069FE] rounded-full" style={{ width: '43%' }}></div>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="text-[#061120] font-medium text-[15px]">$100,000.00</div>
                  <div className="flex -space-x-2">
                    <Image src="/avatar.jpg" alt="avatar" width={24} height={24} className="w-6 h-6 rounded-full" />
                    <Image src="/avatar2.png" alt="avatar" width={24} height={24} className="w-6 h-6 rounded-full" />
                  </div>
                </div>
              </div>
              {/* Source Item 4 */}
              <div className="flex flex-col gap-4.5 p-3 bg-[#0069FE]/6 rounded-xl">
                <div className="flex items-start justify-between w-full">
                  <div className="flex flex-col gap-1 text-[13px]">
                    <span className="text-[#737D8C] text-[13px]">WF017</span>
                    <span className="font-medium text[#061120]">Office Rent</span>
                  </div>
                  <div className="text-[#9AA5B3] text-[11px] font-medium w-[38px] h-6 rounded-full border border-[#3D4C62]/10 flex items-center justify-center">52%</div>
                </div>
                <div className="w-full h-[3px] bg-[#3D4C62]/10 rounded-full overflow-hidden">
                  <div className="h-[3px] bg-[#0069FE] rounded-full" style={{ width: '52%' }}></div>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="text-[#061120] font-medium text-[15px]">$550,000.00</div>
                  <div className="flex -space-x-2">
                    <Image src="/avatar.jpg" alt="avatar" width={24} height={24} className="w-6 h-6 rounded-full" />
                    <Image src="/avatar2.png" alt="avatar" width={24} height={24} className="w-6 h-6 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Spend by Suppliers (BarChart) */}
          <div className="col-span-6 bg-white rounded-xl py-5 px-6 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-7">
              <div className="font-medium text-[#061120] text-[19px]">Active Sources</div>
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-4 pr-5 border-r border-[#3D4C62]/10">
                <select className="h-[36px] pr-3 py-1.5 rounded-full text-[13px] font-medium text-[#737D8C] focus:outline-none cursor-pointer">
            <option>Last Month</option>
              <option value="active">Last 30 Days</option>
              <option value="pending">Last 90 Days</option>
              <option value="on-hold">All Time</option>
            </select>
            <button className="w-8 h-8 rounded-full bg-[#3D4C62]/10 flex items-center justify-center cursor-pointer cursor-pointer">
              <Download />
            </button>

                </div>
              <div className="flex items-center gap-1">
              <button className="w-8 h-8 rounded-full border border-[#3D4C62]/10 flex items-center justify-center cursor-pointer"><Prev /></button>
              <button className="w-8 h-8 rounded-full border border-[#3D4C62]/10 flex items-center justify-center cursor-pointer"><Next /></button>
              </div>
              </div>
       
            </div>
            <div className="h-full w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={suppliersData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3B82F6" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* Spend by Categories (PieChart) */}
          <div className="col-span-6 bg-white rounded-xl py-5 px-6 shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-7">
              <div className="font-medium text-[#061120] text-[19px]">Spend by Categories</div>
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-4">
                <select className="h-[36px] pr-3 py-1.5 rounded-full text-[13px] font-medium text-[#737D8C] focus:outline-none cursor-pointer">
            <option>Last Month</option>
              <option value="active">Last 30 Days</option>
              <option value="pending">Last 90 Days</option>
              <option value="on-hold">All Time</option>
            </select>
            <button className="w-8 h-8 rounded-full bg-[#3D4C62]/10 flex items-center justify-center cursor-pointer cursor-pointer">
              <Download />
            </button>

                </div>
              </div>
            </div>
            <div className="flex gap-6 items-center justify-between">
     
              <div>
                {/* <div className="text-2xl font-bold mb-2">$160M</div> */}
                <ul className="text-sm text-gray-600 space-y-5">
                  {categoriesData.map((cat) => (
                    <li key={cat.name} className="text-[#737D8C] text-[13px] font-medium">
                      <div className="inline-block w-3 h-3 rounded-full mr-2.5" style={{ background: cat.color }}></div>
                      {cat.name} <div className="text-[#061120] text-[15px] font-medium ml-5 mt-1.5">${cat.value}M <span className="text-[#737D8C] text-[15px] font-normal">({cat.percentage})</span></div>
                    </li>
                  ))}
                </ul>
              </div>
              <ResponsiveContainer width={240} height={240}>
                <PieChart>
                  <Pie
                    data={categoriesData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={2}
                  >
                    {categoriesData.map((entry, idx) => (
                      <Cell key={`cell-${idx}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* My Approvals */}
          <div className="col-span-6 bg-white rounded-xl py-5 px-6 shadow-sm flex flex-col">
            <div className="flex items-center gap-6 mb-4">
              <button className="font-medium text-[#061120] text-[19px] cursor-pointer">My Approvals <span className="text-[#0069FE] ml-2">9</span></button>
              <button className="font-medium text-[#737D8C] text-[19px] cursor-pointer">Expired Contracts <span className="text-[#9AA5B3] ml-2">5</span></button>
            </div>
            <ul className="">
              <li className="flex items-start justify-between pt-3 gap-4">
                <div className="flex items-start shrink-0">
                  <FileCheck />

                </div>
                <div className="flex items-center justify-between w-full gap-4 pb-3 border-b border-[#3D4C62]/10">
                <div className="flex flex-col gap-1">
                  <div className="font-medium text-[#061120] text-[15px]"><span className="text-[13px] text-[#9AA5B3]">for</span> Procurement Strategy</div>
                  <div className="text-[13px] text-[#737D8C]">456G Laptops</div>
                </div>
                <div className="px-3 py-1.5 rounded-full border border-[#3D4C62]/10 text-[#061120] text-[13px] font-medium flex items-center gap-2 shrink-0"><div className="w-1.5 h-1.5 rounded-full bg-[#16BA6B]"></div>Approved</div>
                </div>
    
          
              </li>
              <li className="flex items-start justify-between pt-3 gap-4">
              <div className="flex items-start shrink-0">
                  <FileCheck />

                </div>
                <div className="flex items-center justify-between w-full gap-4 pb-3 border-b border-[#3D4C62]/10">
                <div className="flex flex-col gap-1">
                  <div className="font-medium text-[#061120] text-[15px]"><span className="text-[13px] text-[#9AA5B3]">for</span> Invoice</div>
                  <div className="text-[13px] text-[#737D8C]">990D Cars</div>
                </div>
                <div className="px-3 py-1.5 rounded-full border border-[#3D4C62]/10 text-[#061120] text-[13px] font-medium flex items-center gap-2 shrink-0"><div className="w-1.5 h-1.5 rounded-full bg-[#16BA6B]"></div>Approved</div>
                </div>
       
              </li>
              <li className="flex items-center justify-between pt-3 gap-4">
              <div className="flex items-start shrink-0">
                  <FileCheck />

                </div>
                <div className="flex items-center justify-between w-full gap-4 pb-3 border-b border-[#3D4C62]/10">
                <div className="flex flex-col gap-1">
                  <div className="font-medium text-[#061120] text-[15px]"><span className="text-[13px] text-[#9AA5B3]">for</span> Contract</div>
                  <div className="text-[13px] text-[#737D8C]">678H Adobe Subscription</div>
                </div>
                <div className="px-3 py-1.5 rounded-full border border-[#3D4C62]/10 text-[#061120] text-[13px] font-medium flex items-center gap-2 shrink-0"><div className="w-1.5 h-1.5 rounded-full bg-[#D13C3C]"></div>Rejected</div>
                </div>
              </li>
              <li className="flex items-center justify-between pt-3 gap-4">
              <div className="flex items-start shrink-0">
                  <FileCheck />

                </div>
                <div className="flex items-center justify-between w-full gap-4 pb-3 border-b border-[#3D4C62]/10">
                <div className="flex flex-col gap-1">
                  <div className="font-medium text-[#061120] text-[15px]"><span className="text-[13px] text-[#9AA5B3]">for</span> Purchase Request</div>
                  <div className="text-[13px] text-[#737D8C]">456G Laptops</div>
                </div>
                </div>
                <div className="px-3 py-1.5 rounded-full border border-[#3D4C62]/10 text-[#061120] text-[13px] font-medium flex items-center gap-2 shrink-0"><div className="w-1.5 h-1.5 rounded-full bg-[#FD9F2C]"></div>In Progress</div>
              </li>
              <li className="flex items-center justify-between pt-3 gap-4">
              <div className="flex items-start shrink-0">
                  <FileCheck />

                </div>
                <div className="flex items-center justify-between w-full gap-4 pb-3 border-b border-[#3D4C62]/10">
                <div className="flex flex-col gap-1">
                  <div className="font-medium text-[#061120] text-[15px]"><span className="text-[13px] text-[#9AA5B3]">for</span> Opportunity Listing</div>
                  <div className="text-[13px] text-[#737D8C]">990D Cars</div>
                </div>
                </div>
                <div className="px-3 py-1.5 rounded-full border border-[#3D4C62]/10 text-[#061120] text-[13px] font-medium flex items-center gap-2 shrink-0"><div className="w-1.5 h-1.5 rounded-full bg-[#FD9F2C]"></div>In Progress</div>
              </li>
              <li className="flex items-center justify-between pt-3 gap-4">
              <div className="flex items-start shrink-0">
                  <FileCheck />

                </div>
                <div className="flex items-center justify-between w-full gap-4 pb-3">
                <div className="flex flex-col gap-1">
                  <div className="font-medium text-[#061120] text-[15px]"><span className="text-[13px] text-[#9AA5B3]">for</span> Opportunity Listing</div>
                  <div className="text-[13px] text-[#737D8C]">990D Cars</div>
                </div>
                </div>
                <div className="px-3 py-1.5 rounded-full border border-[#3D4C62]/10 text-[#061120] text-[13px] font-medium flex items-center gap-2 shrink-0"><div className="w-1.5 h-1.5 rounded-full bg-[#FD9F2C]"></div>In Progress</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
