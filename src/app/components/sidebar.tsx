"use client"

import Link from "next/link"
import React, { useState } from "react"
import { usePathname } from "next/navigation"
import { PlusCircledIcon } from "../assets/icons/PlusCircledIcon"
import { List } from "../assets/icons/List"
import { Grid } from "../assets/icons/Grid"
import { QuestionBuble } from "../assets/icons/QuestionBuble"
import { Shop } from '../assets/icons/Shop'
import { DocStar } from '../assets/icons/DocStar'
import { CartQuestion } from '../assets/icons/CartQuestion'
import { ClipboardCheck } from '../assets/icons/ClipboardCheck'
import { Receipt } from '../assets/icons/Receipt'
import { Users } from '../assets/icons/Users'
import { Folder } from '../assets/icons/Folder'
import { Gear } from '../assets/icons/Gear'
import { Tools } from '../assets/icons/Tools'
import { Briefcase } from '../assets/icons/Briefcase'

export function Sidebar() {
  const [filesOpen, setFilesOpen] = useState(true)
  const [adminOpen, setAdminOpen] = useState(true)
  const pathname = usePathname();
  return (
    <aside className="w-[246px] border-r border-[#3D4C621A] pt-13 flex flex-col h-screen fixed px-2">
      <div className="py-5.5">
        <button className="flex items-center gap-2 bg-[#0069FE0F] min-w-[113px] text-[#061120] hover:bg-blue-100 rounded-full p-2 ">
          <PlusCircledIcon />
          <span className="text-[15px] font-medium">Create</span>
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-2">
        <ul className="space-y-1">
          <li>
            <Link
              href="/"
              className={`flex items-center gap-3 py-2 text-[15px] font-medium text-[#737D8C] ${pathname === '/' ? 'font-bold text-black' : ''}`}
            >
              <Grid />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={`flex items-center gap-3 py-2 text-[15px] font-medium rounded-md text-[#737D8C] hover:bg-gray-100 ${pathname === '/tasks' ? 'font-bold text-black' : ''}`}
            >
              <List />
              Tasks
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={`flex items-center gap-3 py-2 text-[15px] font-medium rounded-md text-[#737D8C] hover:bg-gray-100 ${pathname === '/rfxes' ? 'font-bold text-black' : ''}`}
            >
              <QuestionBuble />
              RFxes
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`flex items-center gap-3 py-2 text-[15px] font-medium rounded-md text-[#737D8C] hover:bg-gray-100 ${pathname === '/projects' ? 'font-bold text-black' : ''}`}
            >
              <Briefcase />
              Projects
            </Link>
          </li>
          <li>
            <div className='border-t border-[#3D4C621A]'></div>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center gap-3 py-2 text-[15px] font-medium rounded-md text-[#737D8C] hover:bg-gray-100"
            >
              <Shop />
              Vendors
            </Link>
          </li>
        </ul>

        <div className="mt-6">
          <button
            className="flex items-center justify-between w-full font-medium  mb-2 focus:outline-none text-[#9AA5B3]"
            onClick={() => setFilesOpen((open) => !open)}
            aria-expanded={filesOpen}
            aria-controls="files-section"
            type="button"
          >
            <p className="text-[14px] font-medium text-[#9AA5B3]">Files</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`lucide lucide-chevron-up transition-transform duration-200 ${filesOpen ? '' : 'rotate-180'}`}
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          </button>
          {filesOpen && (
            <ul className="space-y-1" id="files-section">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-3 py-2 text-[15px] font-medium rounded-md text-[#737D8C] hover:bg-gray-100"
                >
                  <DocStar />
                  Contracts
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-3 py-2 text-[15px] font-medium rounded-md text-[#737D8C] hover:bg-gray-100"
                >
                  <CartQuestion />
                  Purchase Requests
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-3 py-2 text-[15px] font-medium rounded-md text-[#737D8C] hover:bg-gray-100"
                >
                  <ClipboardCheck />
                  Purchase Orders
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-3 py-2 text-[15px] font-medium rounded-md text-[#737D8C] hover:bg-gray-100"
                >
                  <Receipt />
                  Invoices
                </Link>
              </li>
            </ul>
          )}
        </div>

        <div className="mt-6">
          <button
            className="flex items-center justify-between w-full text-xs font-medium text-[#9AA5B3] mb-2 focus:outline-none"
            onClick={() => setAdminOpen((open) => !open)}
            aria-expanded={adminOpen}
            aria-controls="admin-section"
            type="button"
          >
            <p className="text-[14px] font-medium text-[#9AA5B3]">Administration</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`lucide lucide-chevron-up transition-transform duration-200 ${adminOpen ? '' : 'rotate-180'}`}
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          </button>
          {adminOpen && (
            <ul className="space-y-1" id="admin-section">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-3 py-2 text-[15px] font-medium rounded-md text-[#737D8C] hover:bg-gray-100"
                >
                  <Users />
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-3 py-2 text-[15px] font-medium rounded-md text-[#737D8C] hover:bg-gray-100"
                >
                  <Folder />
                  Template Base
                </Link>
              </li>
              <li>
                <Link
                  href="/settings"
                  className="flex items-center gap-3 py-2 text-[15px] font-medium rounded-md text-[#737D8C] hover:bg-gray-100"
                >
                  <Gear />
                  Settings
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>

      <div className="p-3">
        <button className="flex items-center gap-2 text-[#737D8C] hover:bg-gray-100 rounded-md py-2 w-full">
          <Tools />
          <span className="text-[15px] font-medium">Modify</span>
        </button>
      </div>
    </aside>
  )
}
