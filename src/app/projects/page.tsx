'use client'

import * as React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Modal } from '../components/Modal';
import { ArrowLeft } from '../assets/icons/ArrowLeft';
import { Dots } from '../assets/icons/Dots';
import { Bell } from '../assets/icons/Bell';
import { Coin } from '../assets/icons/Coin';
import { UserAvatar } from '../assets/icons/UserAvatar';
import { Flow } from '../assets/icons/Flow';
import { Gantt } from '../assets/icons/Gantt';
import { Case } from '../assets/icons/Case';
import { ArrowRight } from '../assets/icons/ArrowRight';
import { Cross } from '../assets/icons/Cross';
import Image from 'next/image';
import { Calendar } from '../assets/icons/Calendar';
import { Message } from '../assets/icons/Message';
import { Clip } from '../assets/icons/Clip';
import { Plus } from '../assets/icons/Plus';
import { Minus } from '../assets/icons/Minus';
import { Expand } from '../assets/icons/Expand';
import { Pencil } from '../assets/icons/Pencil';
import { Users } from '../assets/icons/Users';
const BASE_PATH = '/procurement-demo';
const workflowSteps = [
  {
    key: 'probity',
    status: 'Completed',
    title: 'Probity & Risk',
    assignee: 'All Team',
    due: '08/08/2025',
    comments: 0,
    attachments: 1,
    from: '01.08.25',
    todos: [
      {
        id: 1,
        text: 'Set Up Project Team',
        assignee: 'Kris Logan',
        status: 'Completed',
      },
      {
        id: 2,
        text: 'Complete Probity Declarations',
        assignee: 'Kris Logan',
        status: 'Active',
      },
    ],
  },
  {
    key: 'strategy',
    status: 'Requires Approval',
    title: 'Procurement Strategy',
    assignee: 'Kris Logan',
    due: '08/08/2025',
    todos: [],
    comments: 3,
    attachments: 5,
  },
  {
    key: 'evaluation',
    status: 'Available',
    title: 'Evaluation Plan',
    assignee: 'Kris Logan',
    due: '08/08/2025',
    todos: [],
    comments: 0,
    attachments: 0,
  },
];

function StatusBadge({ status }: { status: string }) {
  if (status === 'Active')
    return <div className="px-3 py-1 rounded-full bg-[#0069FE]/6 text-[#0069FE] text-[13px] font-medium border border-[#0069FE]">Active</div>;
  if (status === 'Completed')
    return <div className="px-3 py-1 rounded-full bg-[#17BA6B]/6 text-[#17BA6B] text-[13px] font-medium border border-[#17BA6B]">Completed</div>;
  if (status === 'Requires Approval')
    return <div className="px-3 py-1 bg-[#0069FE]/6 rounded-full bg-[##0069FE] text-[#0069FE] text-[13px] font-medium border border-[#0069FE]">Requires Approval</div>;
  if (status === 'Available')
    return <div className="px-3 py-1 rounded-full bg-[#A442FF]/6 text-[#A442FF] text-[13px] font-medium border border-[#A442FF]">Available</div>;
  return <div className="px-3.5 py-1 rounded-full bg-[#E4E4E4] text-black text-[13px] font-medium">Not Available</div>;
}

function AccordionItem({
  title,
  action,
  children,
  expanded,
  onToggle,
}: {
  title: React.ReactNode;
  action?: React.ReactNode;
  children: React.ReactNode;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-[#F9F9F9] mb-2 flex flex-col justify-center">
      <div className="flex items-center justify-between w-full">
      <button
        className="flex items-center w-full p-4 cursor-pointer focus:outline-none gap-4"
        onClick={onToggle}
        aria-expanded={expanded}
      >
                <svg
          className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        <span className="font-medium text-left">{title}</span>

      </button>
      {action && <div className="px-4 pb-4 pt-2 min-w-[215px]">{action}</div>}
      </div>
      {expanded && <div className="pl-13 pr-6 pb-4">{children}</div>}
    </div>
  );
}

export default function ProjectsPage() {
  const [drawerStep, setDrawerStep] = React.useState<string | null>(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  // Accordion state: [confidential, unethical, conflict, declaration]
  const [accordion, setAccordion] = React.useState([true, false, false, false]);

  const handleAccordionToggle = (idx: number) => {
    setAccordion((prev) => prev.map((open, i) => (i === idx ? !open : open)));
  };

  const selectedStep = workflowSteps.find((s) => s.key === drawerStep);

  const handleCompleteClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      {/* Main Content */}
      <div className="flex flex-col ml-0 bg-[#F7F7F7] flex-1">
        {/* Header */}
        <header className="flex flex-col items-start justify-start px-[28px] py-5.5 gap-4">
          <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <button className="text-xl"><ArrowLeft /></button>
            <div className="flex items-center gap-2">
              <span className="text-[#737D8C] font-normal text-[32px]">WF001</span>
              <span className="text-[#737D8C] font-normal text-[32px]">-</span>
              <span className="text-[#061120] font-normal text-[32px]">Laptops</span>
            </div>
            <div className="flex items-center">
              <button>
                <Bell />
              </button>
            </div>
            <div className="flex items-center">
              <button>
                <Dots />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
          <span className="pr-4 border-r border-[#3D4C62]/10">
                      <StatusBadge status="Active" />
                    </span>
            <select className="h-[36px] px-3 py-2 bg-[#3D4C62]/6 rounded-full text-[15px] font-medium text-[#3D4C62] focus:outline-none border-r-12 border-transparent cursor-pointer">
            <option>Update Status</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
              <option value="on-hold">On Hold</option>
            </select>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Coin />
              <span className="text-sm font-medium text[#616161]">$5,000.000</span>
            </div>
            <div className="flex items-center gap-2 pl-3 border-l border-[#3D4C62]/10">
              
              <span className="text-sm text[#3D4C62]">own by </span>          <div className="w-5 h-5 rounded-full bg-gray-200 overflow-hidden">
            <Image
              src={`${BASE_PATH}/avatar.jpg`}
              alt="User profile"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div> <span className="font-medium text-[13px] text-[#252D39]">Caroline Collins</span>
            </div>
          </div>
        </header>

        {/* Tabs */}
        <Tabs.Root defaultValue="workflow" className="flex flex-col flex-1">
          <Tabs.List className="flex px-[28px] gap-8">
            <Tabs.Trigger value="details" className="pb-2 text-[17px] font-medium text-[#737D8C] data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-[#0069FE] focus:outline-none cursor-pointer">Details</Tabs.Trigger>
            <Tabs.Trigger value="workflow" className=" pb-2 text-[17px] font-medium text-[#737D8C] data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-[#0069FE] focus:outline-none cursor-pointer">Workflow</Tabs.Trigger>
            <Tabs.Trigger value="files" className=" pb-2 text-[17px] font-medium text-[#737D8C] data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-[#0069FE] focus:outline-none cursor-pointer">Files & Attachments</Tabs.Trigger>
            <Tabs.Trigger value="team" className=" pb-2 text-[17px] font-medium text-[#737D8C] data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-[#0069FE] focus:outline-none cursor-pointer">Team</Tabs.Trigger>
            <Tabs.Trigger value="opportunity" className=" pb-2 text-[17px] font-medium text-[#737D8C] data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-[#0069FE] focus:outline-none cursor-pointer">Opportunity Listing</Tabs.Trigger>
          </Tabs.List>
          <div className='px-[28px] '>
            <div className='border-t border-[#D9D9D9]'></div>
          </div>
          {/* Workflow Tab Content */}
            <Tabs.Content value="workflow" className="pt-3 px-[28px] flex-1 flex flex-col gap-6">
            {/* Flow/Gantt toggle */}
            <div className="flex items-center justify-between">
            <div className="flex items-center justify-start w-fit bg-[#3D4C62]/6 rounded-full py-2 px-3">
              <button className="text-[#061120] pr-3 font-medium flex items-center gap-2 cursor-pointer">  <Flow /> Flow</button>
              <button className="rounded text-[#737D8C] flex items-center gap-2 border-l border-[#3D4C62]/10 pl-3 cursor-pointer">
                <Gantt /> Gantt
              </button>
            </div>
            <div className="flex items-center gap-2">
            <div className="flex items-center justify-start w-fit border border-[#3D4C62]/10 rounded-full py-2 px-3 gap-2">
              <button className="rounded-l-full text-[15px] text-[#3D4C62] cursor-pointer"><Minus /></button>
              <button className="rounded-r-full text-[15px] text-[#3D4C62] cursor-pointer pl-2 border-l border-[#3D4C62]/10"><Plus /></button>
            </div>
            <button className="py-2 px-2 rounded-full border border-[#3D4C62]/10 text-[15px] text-[#3D4C62] cursor-pointer"><Expand /></button>
            <button className="flex items-center gap-2 py-2 px-3.5 rounded-full bg-[#3D4C62]/6 text-[15px] text-[#3D4C62] cursor-pointer"><Pencil /> Edit</button>

            </div>
            </div>
 

                    {/* Footer Navigation */}
        <footer className="flex gap-8 text-gray-500 text-sm">
          <a href="#" className="font-medium text-gray-900">Plan</a>
          <a href="#" className="hover:text-gray-900">Source</a>
          <a href="#" className="hover:text-gray-900">Manage</a>
          <a href="#" className="hover:text-gray-900">Pay</a>
        </footer>

            {/* Workflow Cards */}
            <div className="flex items-start my-auto">
              {workflowSteps.map((step, idx) => (
                <React.Fragment key={step.key}>
                  <div
                    className={`relative border rounded-lg p-3.5 w-60 flex flex-col items-start text-left transition-all duration-150 focus:outline-none cursor-pointer ${
                      step.status === 'Completed'
                        ? 'border-2 border-[#17BA6B] bg-[#3D4C62]/3 '
                        : step.status === 'Requires Approval' ? 'border-2 border-[#0069FE] bg-white'
                        : step.status === 'Available' ? 'border-2 border-[#A442FF] bg-white'
                        : 'border border-[#CDCDCD] opacity-80 bg-white'
                    }`}
                    onClick={() => setDrawerStep(step.key)}
                  >
                    <span className="mb-4">
                      <StatusBadge status={step.status} />
                    </span>
                    <div className={`font-medium text-md mb-3.5 ${step.status === 'Completed' ? 'text-[#737D8C]' : 'text-[#061120]'}`}>{step.title}</div>
                    <div className="text-sm font-medium text-[#616161] mb-2.5 flex items-center gap-2">
                      <div className={`flex items-center gap-2 font-medium text-[13px] ${step.status === 'Completed' ? 'text-[#737D8C]' : 'text-[#061120]'}`}>
                        {step.assignee === 'All Team' ? <Users /> : <Image src={`${BASE_PATH}/avatar2.png`} alt="User profile" width={20} height={20} className="w-5 h-5 object-cover rounded-full" />}
                        <span className="text-[#737D8C] font-normal">to</span> {step.assignee}</div>
                    </div>
                    <div className="flex items-center text-sm text-[#616161]">
                      <div className={`flex items-center gap-2 font-medium text-[13px] ${step.status === 'Completed' ? 'text-[#737D8C]' : 'text-[#061120]'}`}><Calendar /> <span className="text-[#737D8C] font-normal">to</span> {step.due}</div>
                    </div>
                    <div className="flex items-center gap-2 mt-5.5">
                      <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3D4C62]/6 text-black text-sm cursor-pointer"><Message /> {step.comments}</button>
                      <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3D4C62]/6 text-black text-sm cursor-pointer" onClick={(e) => {
                        e.stopPropagation();
                        handleCompleteClick();
                      }}><Clip /> {step.attachments}</button>
                    </div>
                  </div>
                  {idx < workflowSteps.length - 1 && (
                    <div className="flex items-center h-full mx-2">
                      <ArrowRight />
                    </div>
                  )}
                </React.Fragment>
              ))}
                <div className="flex items-center h-full mx-2">
                      <ArrowRight />
                    </div>
               <div className="flex items-center h-full mx-2">
               <button className="py-2 px-3.5 rounded-full bg-[#3D4C62]/6 text-[15px] text-[#3D4C62] cursor-pointer">Go to Source</button>
               </div>
            </div>
          </Tabs.Content>
        </Tabs.Root>



        {/* Drawer */}
        {selectedStep && (
          <div className="fixed top-[15px] right-[15px] h-[calc(100vh-30px)] w-[402px] bg-white shadow-2xl z-50 flex flex-col animate-slideIn rounded-lg">
            <div className="flex items-start justify-between px-4 pt-4">
              <div className="flex flex-col items-start">
                <div className="mb-4">
                <StatusBadge status={selectedStep.status} />

                </div>
                <div className="font-medium text-lg mb-3.5">{selectedStep.title}</div>
                <div className="text-sm text-[#616161] font-medium flex items-center gap-1 mb-2">
                  <div className="flex items-center gap-2"><UserAvatar /> {selectedStep.assignee}</div>
                </div>
                {selectedStep.from && (
                  <div className="flex items-center text-sm text-[#616161] gap-2">
                    <Case />from <span className="font-medium">{selectedStep.from}</span> to <span className="font-medium">{selectedStep.due}</span>
                  </div>
                )}
              </div>
              <button
                className="text-2xl text-gray-400 hover:text-gray-700 cursor-pointer"
                onClick={() => setDrawerStep(null)}
                aria-label="Close"
              >
                <Cross />
              </button>
            </div>
            <Tabs.Root defaultValue="todo">
              <Tabs.List className="flex px-4 mt-7 gap-6">
                <Tabs.Trigger value="description" className="pb-2 text-sm font-medium text-gray-600 data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-black border-b-2 border-transparent focus:outline-none flex-1 cursor-pointer">Description</Tabs.Trigger>
                <Tabs.Trigger value="todo" className="pb-2 text-sm font-medium text-gray-600 data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-black border-b-2 border-transparent focus:outline-none flex-1 cursor-pointer">To Do</Tabs.Trigger>
                <Tabs.Trigger value="messages" className="pb-2 text-sm font-medium text-gray-600 data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-black border-b-2 border-transparent focus:outline-none flex-1 cursor-pointer">Messages</Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="description" className="p-4 text-gray-500 text-sm">No description available.</Tabs.Content>
              <Tabs.Content value="todo" className="p-4">
                <ol className="space-y-4">
                  {selectedStep.todos && selectedStep.todos.length > 0 ? (
                    selectedStep.todos.map((todo, idx) => (
                      <li key={todo.id} className="flex gap-5">
                        <div>     <div className="font-normal text-sm text-[#616161] mt-3.5">{idx + 1}</div></div>
                        <div className='flex flex-1 flex-col gap-2 border-2 border-[#CDCDCD] rounded p-4'>
                        <div className="flex items-center justify-between">
                        <span className="font-medium text-sm">{todo.text}</span>
                          {todo.status === 'Completed' ? (
                            <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-medium leading-[1.6]">Completed</span>
                          ) : (
                            <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-medium leading-[1.6]">Active</span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-[#616161]">
                          <div className='flex items-center gap-2'><UserAvatar /> {todo.assignee}</div>
                        </div>
                        {todo.status === 'Active' && (
                          <div className="flex gap-2 mt-1 justify-end">
                            <button className="px-3 py-1 rounded bg-[#D9D9D9] text-black text-sm cursor-pointer">Upload</button>
                            <button className="px-3 py-1 rounded bg-black text-white text-sm cursor-pointer" onClick={handleCompleteClick}>Complete</button>
                          </div>
                        )}
                        </div>
            
                      </li>
                    ))
                  ) : (
                    <div className="text-gray-400 text-sm">No to-do items.</div>
                  )}
                </ol>
              </Tabs.Content>
              <Tabs.Content value="messages" className="p-4 text-gray-500 text-sm">No messages.</Tabs.Content>
            </Tabs.Root>
          </div>
        )}
        {/* Modal for Complete confirmation */}
        <Modal
          open={modalOpen}
          onClose={handleModalClose}
          header={<div className="text-[28px] font-medium">Probity & Risk</div>}
          body={
            <div className="w-full">
              {/* Overview Section */}
              <div className="mb-14">
                <div className="text-xl font-medium mb-6">Overview</div>
                <div className="mb-2 border-b border-[#D9D9D9] pb-4">
                  <span className="font-medium mb-1">Description</span>
                  <div>This form is to be completed by all project team members who are participating in any activities associated with the procurement for this project.</div>
                </div>
                <div className="flex flex-wrap gap-8 mt-4 pb-4 border-b border-[#D9D9D9]">
                  <div className="flex flex-col gap-1 flex-1">
                    <div className="font-medium">Title</div>
                    <div>Probity and Confidentiality Undertaking</div>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <div className="font-medium">Code</div>
                    <div>col_83</div>
                  </div>
                </div>
              </div>
              {/* Form Section */}
              <div className="mb-[74px]">
                <div className="font-medium text-xl mb-6">Form</div>
                {/* Confidentiality */}
                <div className="mb-8">
                  <div className="font-medium text-lg text-[#747474] mb-5">Confidentiality<span className="text-[#747474]">*</span></div>
                  <AccordionItem
                    title={
                      <div className="flex items-center justify-between w-full">
                        <span>Access to and Use of Confidential Information</span>
                      </div>
                    }
                    action={
                      <div className="flex gap-6 items-center ml-4">
                        <label className="flex items-center gap-2">
                          <input type="radio" name="confidential-info" className="accent-blue-600" /> Yes
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="radio" name="confidential-info" className="accent-blue-600" /> No
                        </label>
                      </div>
                    }
                    expanded={accordion[0]}
                    onToggle={() => handleAccordionToggle(0)}
                  >
                    <div className="pt-3 border-t border-[#D9D9D9]">
                      I acknowledge that as a connected party to the procurement, I will have access to confidential, commercially sensitive materials and information related to the procurement, including current procurements plans and initiatives of icare, draft agreements and documents, as well as information submitted by or concerning respondents to the procurement. I confirm that I will not use the confidential information for any purpose other than in connection with my responsibilities as a connected party to the procurement. I confirm that I will not disclose any confidential information to any person who has no official interest in the procurement without the express consent of icare&apos;s General Counsel or their delegate. I acknowledge that this requirement for confidentiality does not cease upon the completion of the procurement or award of contracts and will continue until otherwise notified by icare.
                    </div>
                  </AccordionItem>
                </div>
                {/* Probity */}
                <div className="mb-8">
                  <div className="font-medium text-lg text-[#747474] mb-5">Probity<span className="">*</span></div>
                  <AccordionItem
                    title={
                      <div className="flex items-center justify-between w-full">
                        <span>Conflicts of Interest and Unethical Behaviour</span>
                      </div>
                    }
                    action={
                      <div className="flex gap-6 items-center ml-4">
                        <label className="flex items-center gap-2">
                          <input type="radio" name="confidential-info" className="accent-blue-600" /> Yes
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="radio" name="confidential-info" className="accent-blue-600" /> No
                        </label>
                      </div>
                    }
                    expanded={accordion[1]}
                    onToggle={() => handleAccordionToggle(1)}
                  >
                    <div className="pt-3 border-t border-[#D9D9D9]">
                      Please indicate if you are aware of any conflicts of interest or unethical behaviour related to this procurement.
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    title={
                      <div className="flex items-center justify-between w-full">
                        <span>Conflict of Interest</span>
                      </div>
                    }
                    action={
                      <select className="px-2 py-1 text-base text-[#7C7C7C] outline-none focus:outline-none cursor-pointer">
                        <option>Choose an option</option>
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                      </select>
                    }
                    expanded={accordion[2]}
                    onToggle={() => handleAccordionToggle(2)}
                  >
                    <div className="pt-3 border-t border-[#D9D9D9]">
                      Please select the appropriate option regarding any conflict of interest you may have.
                    </div>
                  </AccordionItem>
                </div>
                {/* Declaration */}
                <div className="mb-8">
                  <div className="font-medium text-lg text-[#747474] mb-5">Declaration<span className="">*</span></div>
                  <AccordionItem
                    title={
                      <div className="flex items-center justify-between w-full">
                        <span>Declaration</span>
                      </div>
                    }
                    action={
                      <div className="flex gap-6 items-center ml-4">
                        <label className="flex items-center gap-2">
                          <input type="radio" name="confidential-info" className="accent-blue-600" /> Yes
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="radio" name="confidential-info" className="accent-blue-600" /> No
                        </label>
                      </div>
                    }
                    expanded={accordion[3]}
                    onToggle={() => handleAccordionToggle(3)}
                  >
                    <div className="pt-3 border-t border-[#D9D9D9]">
                      Please confirm your declaration for this procurement process.
                    </div>
                  </AccordionItem>
                </div>
              </div>
            </div>
          }
          footer={
            <div className="flex justify-end pt-5 border-t border-[#D9D9D9]">
              <button className="px-8 py-2 rounded bg-gray-200 text-gray-400 font-semibold cursor-not-allowed">Sign</button>
            </div>
          }
        />
      </div>
      <style jsx global>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slideIn {
          animation: slideIn 0.2s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </>
  );
}
