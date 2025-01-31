import React from "react";
import Image from "next/image";
import HeaderSidebarMobile from "./components/HeaderSidebarMobile";
import FooterSidebar from "./components/FooterSidebar";

export default function Sidebar() {
    return (
    <div>
        <HeaderSidebarMobile/>

        <aside id="hs-pro-sidebar" className="hs-overlay [--auto-close:lg]
        hs-overlay-open:translate-x-0
        -translate-x-full transition-all duration-300 transform
        w-[260px] h-full
        hidden
        fixed inset-y-0 start-0 z-[60]
        bg-bottom border-e
        lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
        rounded-r-xl
        " tabIndex={-1} aria-label="Sidebar">
        <div className="relative flex flex-col h-full max-h-full pt-3">
          <header className="h-[46px] ps-5 pe-2 lg:ps-8 flex items-center gap-x-1">

              <Image src="/logo.png" width={70} height={32} alt="Logo do Empresa" priority className='block mt-32 mx-auto mb-24 ml-14'/>

            <div className="lg:hidden ms-auto">
              <button type="button" className="w-6 h-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-darkGreen disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-pro-sidebar">
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="7 8 3 12 7 16"/><line x1="21" x2="11" y1="12" y2="12"/><line x1="21" x2="11" y1="6" y2="6"/><line x1="21" x2="11" y1="18" y2="18"/></svg>
              </button>
            </div>
            <div className="hidden lg:block ms-2">
              
            </div>
          </header>
    
          <div className="mt-10 h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-darkGreen [&::-webkit-scrollbar-thumb]:bg-gray-300">
            <nav className="hs-accordion-group pb-3  w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
              <ul className="flex flex-col gap-y-1">

                <li className="px-2 lg:px-5 mb-1">
                  <a
                    className="relative flex gap-x-3 py-2 px-3 text-sm text-white rounded-lg overflow-hidden group"
                    href="../../pro/dashboard/index.html"
                  >
                    <span className="absolute inset-0 bg-darkGreen scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    <span className="relative flex items-center gap-x-3 z-10">
                      <svg
                        className="shrink-0 mt-0.5 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                      Dashboard
                    </span>
                  </a>
                </li>

                <li className="hs-accordion px-3 lg:px-5 mb-1" id="users-accordion">
                  <button
                    type="button"
                    className="hs-accordion-toggle hs-accordion-active:bg-darkGreen w-full flex items-center justify-between gap-x-3 py-2 px-3 text-sm text-white rounded-lg relative group focus:outline-none"
                    aria-expanded="false"
                    aria-controls="users-accordion-sub"
                  >
                    <div className="flex items-center gap-x-3">
                      <svg
                        className="shrink-0 mt-0.5 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      <span>Users</span>
                    </div>
                    <svg
                      className="hs-accordion-active:-rotate-180 shrink-0 size-4 transition-transform duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                    <span className="absolute inset-0 bg-darkGreen scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 rounded-lg z-[-1]"></span>
                  </button>

                  <div
                    id="users-accordion-sub"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                    role="region"
                    aria-labelledby="users-accordion"
                    style={{ display: "none" }}
                  >
                    <ul
                      className="hs-accordion-group ps-7 mt-1.5 space-y-1.5 relative before:absolute before:top-0 before:start-[18px] before:w-0.5 before:h-full before:bg-darkGreen"
                      data-hs-accordion-always-open
                    >
                      <li>
                        <a
                          className="flex gap-x-4 py-2 px-3 text-sm text-white rounded-lg relative group focus:outline-none"
                          href="../../pro/dashboard/users.html"
                        >
                          Overview
                          <span className="absolute inset-0 bg-lightGreen scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 rounded-lg z-[-1]"></span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex gap-x-4 py-2 px-3 text-sm text-white rounded-lg relative group focus:outline-none"
                          href="../../pro/dashboard/users-add-user.html"
                        >
                          Add User
                          <span className="absolute inset-0 bg-lightGreen scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 rounded-lg z-[-1]"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
    
                <li className="hs-accordion px-2 lg:px-5 mb-1" id="user-profile-accordion">
                  <button
                    type="button"
                    className="hs-accordion-toggle hs-accordion-active:bg-darkGreen w-full flex items-center justify-between gap-x-3 py-2 px-3 text-sm text-white rounded-lg relative group focus:outline-none"
                    aria-expanded="false"
                    aria-controls="user-profile-accordion-sub"
                  >
                    <div className="flex items-center gap-x-3">
                      <svg
                        className="shrink-0 mt-0.5 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="10" r="3" />
                        <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
                      </svg>
                      <span>User Profile</span>
                    </div>
                    <svg
                      className="hs-accordion-active:-rotate-180 shrink-0 size-4 transition-transform duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                    <span className="absolute inset-0 bg-darkGreen scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 rounded-lg z-[-1]"></span>
                  </button>

                  <div
                    id="user-profile-accordion-sub"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                    role="region"
                    aria-labelledby="user-profile-accordion"
                    style={{ display: "none" }}
                  >
                    <ul
                      className="hs-accordion-group ps-7 mt-1.5 space-y-1.5 relative before:absolute before:top-0 before:start-[18px] before:w-0.5 before:h-full before:bg-darkGreen"
                      data-hs-accordion-always-open
                    >
                      <li>
                        <a
                          className="flex gap-x-4 py-2 px-3 text-sm text-white rounded-lg relative group focus:outline-none"
                          href="../../pro/dashboard/user-profile-my-profile.html"
                        >
                          My Profile
                          <span className="absolute inset-0 bg-lightGreen scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 rounded-lg z-[-1]"></span>
                        </a>
                      </li>

                    </ul>
                  </div>
                </li>

                <li className="hs-accordion px-2 lg:px-5 mb-1" id="account-accordion">
                  <button
                    type="button"
                    className="hs-accordion-toggle hs-accordion-active:bg-darkGreen w-full flex items-center justify-between gap-x-3 py-2 px-3 text-sm text-white rounded-lg relative group focus:outline-none"
                    aria-expanded="false"
                    aria-controls="account-accordion-sub"
                  >
                    <div className="flex items-center gap-x-3">
                      <svg
                        className="shrink-0 mt-0.5 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="18" cy="15" r="3" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M10 15H6a4 4 0 0 0-4 4v2" />
                        <path d="m21.7 16.4-.9-.3" />
                        <path d="m15.2 13.9-.9-.3" />
                        <path d="m16.6 18.7.3-.9" />
                        <path d="m19.1 12.2.3-.9" />
                        <path d="m19.6 18.7-.4-1" />
                        <path d="m16.8 12.3-.4-1" />
                        <path d="m14.3 16.6 1-.4" />
                        <path d="m20.7 13.8 1-.4" />
                      </svg>
                      <span>Account</span>
                    </div>
                    <svg
                      className="hs-accordion-active:-rotate-180 shrink-0 size-4 transition-transform duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                    <span className="absolute inset-0 bg-darkGreen scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 rounded-lg z-[-1]"></span>
                  </button>

                  <div
                    id="account-accordion-sub"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                    role="region"
                    aria-labelledby="account-accordion"
                    style={{ display: "none" }}
                  >
                    <ul
                      className="hs-accordion-group ps-7 mt-1.5 space-y-1.5 relative before:absolute before:top-0 before:start-[18px] before:w-0.5 before:h-full before:bg-darkGreen"
                      data-hs-accordion-always-open
                    >
                      <li>
                        <a
                          className="flex gap-x-4 py-2 px-3 text-sm text-white rounded-lg relative group focus:outline-none"
                          href="../../pro/dashboard/account-profile.html"
                        >
                          Profile
                          <span className="absolute inset-0 bg-lightGreen scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 rounded-lg z-[-1]"></span>
                        </a>
                      </li>

                    </ul>
                  </div>
                </li>

                <li className="px-2 lg:px-5 mb-1">
                  <a
                    className="flex gap-x-3 py-2 px-3 text-sm text-white rounded-lg relative group focus:outline-none"
                    href="../../pro/dashboard/welcome-page.html"
                  >
                    <svg
                      className="shrink-0 mt-0.5 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <span>Welcome Page</span>
                    <span className="absolute inset-0 bg-darkGreen scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 rounded-lg z-[-1]"></span>
                  </a>
                </li>

                <li className="px-2 lg:px-5">
                  <a
                    className="flex gap-x-3 py-2 px-3 text-sm text-white rounded-lg relative group focus:outline-none"
                    href="../../pro/dashboard/empty-states.html"
                  >
                    <svg
                      className="shrink-0 mt-0.5 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    </svg>
                    <span>Empty Contents</span>
                    <span className="absolute inset-0 bg-darkGreen scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 rounded-lg z-[-1]"></span>
                  </a>
                </li>
    
                <li className="pt-5 px-5 lg:px-8 mt-5 border-t border-darkGreen first:border-transparent first:pt-0">
                  <span className="block text-xs mt-1 mb-3 uppercase text-white">
                    Apps
                  </span>
                </li>
    
                <li className="px-2 lg:px-5">
                  <a className="flex items-center gap-x-2 py-1.5 px-3 text-sm text-white rounded-lg hover:bg-darkGreen focus:outline-none focus:bg-lightGreen2 " href="../../pro/dashboard/chat.html">
                    <span className="flex justify-center items-center size-6 bg-lightGreen text-darkGreen  rounded-md">
                      <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    </span>
                    Chat
                  </a>
                </li>
    
                <li className="px-2 lg:px-5">
                  <a className="flex items-center gap-x-2 py-1.5 px-3 text-sm text-white rounded-lg hover:bg-darkGreen focus:outline-none focus:bg-lightGreen2 " href="../../pro/dashboard/inbox.html">
                    <span className="flex justify-center items-center size-6 bg-lightGreen text-darkGreen rounded-md">
                      <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
                    </span>
                    Inbox 
                    <span className="py-0.5 px-2 ml-1 inline-flex items-center gap-x-1.5 text-xs font-black bg-lightGreen text-darkGreen rounded-full">New</span>
                  </a>
                </li>
    
                <li className="px-2 lg:px-5">
                  <a className="flex items-center gap-x-2 py-1.5 px-3 text-sm text-white rounded-lg hover:bg-darkGreen focus:outline-none focus:bg-lightGreen2 " href="../../pro/dashboard/calendar-month.html">
                    <span className="flex justify-center items-center size-6 bg-lightGreen text-darkGreen rounded-md">
                      <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
                    </span>
                    Calendars
                  </a>
                </li>
    
                <li className="px-2 lg:px-5">
                  <a className="flex items-center gap-x-2 py-1.5 px-3 text-sm text-white rounded-lg hover:bg-darkGreen focus:outline-none focus:bg-lightGreen2 " href="../../pro/dashboard/kanban-board.html">
                    <span className="flex justify-center items-center size-6 bg-lightGreen text-darkGreen rounded-md">
                      <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 7v7"/><path d="M12 7v4"/><path d="M16 7v9"/></svg>
                    </span>
                    Kanban Board
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <FooterSidebar/>

        </div>
      </aside>
    </div>

    )
}