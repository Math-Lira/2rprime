import React from "react";

export default function FooterSidebar() {
    return (
        <div>
            <footer className="hidden lg:block border-t border-darkGreen">
            <div className="hs-dropdown   flex [--strategy:absolute] [--auto-close:inside] [--placement:bottom-right] relative text-start">
              <button id="@@id" type="button" className="group w-full flex items-center gap-x-3 text-start px-5 py-2.5 disabled:opacity-50 disabled:pointer-events-none focus:outline-none" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                <img className="shrink-0 size-[38px] rounded-full" src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Avatar"/>
                <span className="grow block">
                  <span className="block text-sm font-semibold text-white group-hover:text-lightGreen group-focus-hover:text-lightGreen">
                    James Collison
                  </span>
                  <span className="block text-xs text-Green">
                    Preline@HS
                  </span>
                </span>
                <svg className="shrink-0 mt-0.5 size-4 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>
              </button>
    
              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)]" role="menu" aria-orientation="vertical" aria-labelledby="@@id">
                <div className="p-1 border-b border-gray-200">
                  <a className="py-2 px-3 flex items-center gap-x-3 rounded-lg text-sm text-white hover:bg-white disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-white" href="../../pro/dashboard/user-profile-my-profile.html">
                    <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Avatar"/>
    
                    <div className="grow">
                      <span className="text-sm font-semibold text-white">
                        James Collison
                      </span>
                      <p className="text-xs text-gray-500">
                        Preline@HS
                      </p>
                    </div>
                  </a>
                </div>
                <div className="p-1">
                  <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-white hover:bg-darkGreen disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-darkGreen" href="#">
                    <svg className="shrink-0 mt-0.5 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                    Billing
                  </a>
                  <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-white hover:bg-darkGreen disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-darkGreen" href="#">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                    Settings
                  </a>
                  <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-white hover:bg-darkGreen disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-darkGreen" href="#">
                    <svg className="shrink-0 mt-0.5 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    My account
                  </a>
                </div>
                <div className="px-4 py-3.5 border-y border-gray-200">
                  <div className="flex justify-between items-center">
                    <label htmlFor="@@darkmodeID" className="text-sm text-white">Dark mode</label>
                    <div className="relative inline-block">
                      <input data-hs-theme-switch type="checkbox" id="@@darkmodeID" className="relative w-11 h-6 p-px bg-darkGreen border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-lightGreen disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-lightGreen checked:border-lightGreen focus:checked:border-lightGreen
    
                      before:inline-block before:size-5 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200"/>
                    </div>
                  </div>
                </div>
                <div className="p-1">
                  <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-white hover:bg-darkGreen disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-darkGreen" href="#">
                    Customization
                    <div className="ms-auto">
                      <span className="ms-auto inline-flex items-center gap-1.5 py-px px-1.5 rounded text-[10px] leading-4 font-medium bg-darkGreen text-white">
                        New
                      </span>
                    </div>
                  </a>
                  <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-white hover:bg-darkGreen disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-darkGreen" href="#">
                    Manage team
                  </a>
                  <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-white hover:bg-darkGreen disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-darkGreen" href="#">
                    Sign out
                  </a>
                </div>
                <div className="p-1 border-t border-gray-200">
                  <button type="button" className="flex mt-0.5 gap-x-3 py-2 px-3 w-full rounded-lg text-sm text-white hover:bg-darkGreen disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-darkGreen" data-hs-overlay="#hs-pro-dasadam">
                    <svg className="shrink-0 size-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
                    Add team account
                  </button>
                </div>
              </div>
            </div>
          </footer>
        </div>
    )
}