'use client'

import React, { useState } from "react";

export default function GlobalList() {
    const [checked, setChecked] = useState(false);
    return (
        <div>
            <div className="w-full h-full min-h-[calc(100vh_-_120px)] flex flex-col">
                
            {/* Navegação Superior - INICIO */}
            <nav className="relative  flex space-x-1 after:absolute after:bottom-0 after:inset-x-0 after:border-b-2 after:border-stone-200" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
            <button type="button" className="hs-tab-active:after:bg-stone-800 hs-tab-active:text-stone-800 px-2.5 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2  hover:bg-stone-100 text-stone-500 hover:text-stone-800 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 after:absolute after:-bottom-2 after:inset-x-0 after:z-10 after:h-0.5 after:pointer-events-none active " id="hs-pro-tabs-dut-item-all" aria-selected="true" data-hs-tab="#hs-pro-tabs-dut-all" aria-controls="hs-pro-tabs-dut-all" role="tab" >
                All
                </button>
                <button type="button" className="hs-tab-active:after:bg-stone-800 hs-tab-active:text-stone-800 px-2.5 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2  hover:bg-stone-100 text-stone-500 hover:text-stone-800 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 after:absolute after:-bottom-2 after:inset-x-0 after:z-10 after:h-0.5 after:pointer-events-none  " id="hs-pro-tabs-dut-item-archived" aria-selected="false" data-hs-tab="#hs-pro-tabs-dut-archived" aria-controls="hs-pro-tabs-dut-archived" role="tab" >
                Archived
                </button>
                <button type="button" className="hs-tab-active:after:bg-stone-800 hs-tab-active:text-stone-800 px-2.5 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2  hover:bg-stone-100 text-stone-500 hover:text-stone-800 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 after:absolute after:-bottom-2 after:inset-x-0 after:z-10 after:h-0.5 after:pointer-events-none  " id="hs-pro-tabs-dut-item-publish" aria-selected="false" data-hs-tab="#hs-pro-tabs-dut-publish" aria-controls="hs-pro-tabs-dut-publish" role="tab" >
                Publish
                </button>
                <button type="button" className="hs-tab-active:after:bg-stone-800 hs-tab-active:text-stone-800 px-2.5 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2  hover:bg-stone-100 text-stone-500 hover:text-stone-800 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 after:absolute after:-bottom-2 after:inset-x-0 after:z-10 after:h-0.5 after:pointer-events-none  " id="hs-pro-tabs-dut-item-unpublish" aria-selected="false" data-hs-tab="#hs-pro-tabs-dut-unpublish" aria-controls="hs-pro-tabs-dut-unpublish" role="tab" >
                Unpublish
                </button>
            </nav>
            {/* Navegação Superior - FIM */}
            
            {/* Pesquisa - INICIO */}
            <div className="pb-4 py-4 grid md:grid-cols-2 gap-y-2 md:gap-y-0 md:gap-x-5 border-b border-stone-200">
                <div>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                    <svg className="shrink-0 size-4 text-stone-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    </div>
                    <input type="text" className="py-[7px] ps-10 pe-8 block w-full bg-stone-100 border-transparent rounded-lg text-sm placeholder:text-stone-500 focus:border-green-500 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none" placeholder="Search products"/>
                    <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-1">
                    <button type="button" className="inline-flex shrink-0 justify-center items-center size-6 rounded-full text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600" aria-label="Close">
                        <span className="sr-only">Close</span>
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                    </button>
                    </div>
                </div>
                </div>
            </div>
            {/* Pesquisa - FIM */}

            <div>
                <div id="hs-pro-tabs-dut-all" role="tabpanel" aria-labelledby="hs-pro-tabs-dut-item-all">
                <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
                    <div className="w-full overflow-x-auto">
                    <table className="w-full mt-1 table-fixed border-collapse border border-stone-200 rounded-lg overflow-hidden">

                        <thead className="border-b border-stone-300">
                        <tr>
                            {/* Coluna 01 = ITEM */}
                            <th scope="col" className="ps-3 py-4 text-start w-[50px]">
                            <input type="checkbox" className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none"/>
                            </th>

                            <th scope="col" className="w-[370px]">

                            <div className="hs-dropdown relative inline-flex w-full cursor-pointer">
                                <button id="hs-pro-eptits" type="button" className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                Item
                                </button>
                            </div>
                            </th>

                            {/* Coluna 02 = TYPE */}
                            <th scope="col" className="w-[200px]">
                            <div className="hs-dropdown relative inline-flex w-full cursor-pointer">
                                <button id="hs-pro-epttys" type="button" className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                Type
                                </button>
                            </div>
                            </th>

                            {/* Coluna 03 = Stocks */}
                            <th scope="col" className="w-[150px]">
                            <div className="hs-dropdown relative inline-flex w-full cursor-pointer">
                                <button id="hs-pro-eptsts" type="button" className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                Stocks
                                </button>
                            </div>
                            </th>

                            {/* Coluna 04 = SKU */}
                            <th scope="col" className="w-[220px]">
                            <div className="hs-dropdown relative inline-flex w-full cursor-pointer">
                                <button id="hs-pro-eptsks" type="button" className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                SKU
                                </button>
                            </div>
                            </th>

                            {/* Coluna 05 = PRICE */}
                            <th scope="col" className="w-[170px]">
                            <div className="hs-dropdown relative inline-flex w-full cursor-pointer">
                                <button id="hs-pro-eptprs" type="button" className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                Price
                                </button>
                            </div>
                            </th>

                            {/* Coluna 06 = AVAILABLE IN */}
                            <th scope="col" className="w-[250px]">
                            <div className="hs-dropdown relative inline-flex w-full cursor-pointer">
                                <button id="hs-pro-eptai" type="button" className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                Available In
                                </button>
                            </div>
                            </th>


                            {/* Coluna 07 = STATUS */}
                            <th scope="col" className="w-[150px]">
                            <div className="hs-dropdown relative inline-flex w-full cursor-pointer">
                                <button id="hs-pro-eptai" type="button" className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                Status
                                </button>
                            </div>
                            </th>

                            <th scope="col"></th>
                        </tr>
                        </thead>

                        <tbody className="divide-y divide-stone-200">
                        <tr>
                            <td className="size-px whitespace-nowrap ps-3 py-4">
                            <input type="checkbox" className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none"/>
                            </td>
                            <td className="size-px whitespace-nowrap px-4 py-3">
                            <div className="w-full flex items-center gap-x-3">
                                <img className="shrink-0 size-12 rounded-md" src="https://images.unsplash.com/photo-1528310385748-dba09bf1657a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&h=320&q=80" alt="Product Image"/>
                                <div className="grow">
                                <a className="text-sm font-medium text-stone-800 hover:text-green-600 decoration-2 hover:underline focus:outline-none focus:underline focus:text-green-600" href="../../pro/ecommerce/product-details.html">
                                    Google Home
                                </a>
                                </div>
                            </div>
                            </td>
                            <td className="size-px whitespace-nowrap px-4 py-3">
                            <span className="text-sm text-stone-600">
                                Electronics
                            </span>
                            </td>
                            <label className="relative inline-flex items-center cursor-pointer mt-7 ml-5">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={checked}
                                onChange={() => setChecked(!checked)}
                            />
                            <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-colors duration-300 ease-in-out"></div>
                            <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full shadow-md transform peer-checked:translate-x-5 transition-transform duration-300 ease-in-out"></div>
                            </label>
                            <td className="size-px whitespace-nowrap px-4 py-3">
                            <span className="text-sm text-stone-600">
                                2384741241
                            </span>
                            </td>
                            <td className="size-px whitespace-nowrap px-4 py-3">
                            <span className="text-sm text-stone-600">
                                $65
                            </span>
                            </td>
                            <td className="size-px whitespace-nowrap px-4 py-3">
                            <div className="flex flex-wrap gap-1">
                                <span className="p-2 bg-stone-100 text-stone-800 text-xs rounded-md">
                                🛍️ In store
                                </span>
                                <span className="p-2 bg-stone-100 text-stone-800 text-xs rounded-md">
                                🌐 Online
                                </span>
                            </div>
                            </td>
                            <td className="size-px whitespace-nowrap px-4 py-3">
                            <div className="flex flex-wrap gap-1">
                                <span className="p-2 bg-yellow-100 text-yellow-700 text-xs rounded-md">
                                Pendente
                                </span>
                            </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="size-px whitespace-nowrap ps-3 py-4">
                            <input type="checkbox" className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none"/>
                            </td>
                            <td className="size-px whitespace-nowrap px-4 py-3">
                            <div className="w-full flex items-center gap-x-3">
                                <img className="shrink-0 size-12 rounded-md" src="https://images.unsplash.com/photo-1613852348851-df1739db8201?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&h=320&q=80" alt="Product Image"/>
                                <div className="grow">
                                <a className="text-sm font-medium text-stone-800 hover:text-green-600 decoration-2 hover:underline focus:outline-none focus:underline focus:text-green-600" href="../../pro/ecommerce/product-details.html">
                                    Calvin Klein T-shirts
                                </a>
                                </div>
                            </div>
                            </td>
                            <td className="size-px whitespace-nowrap px-4 py-3">
                            <span className="text-sm text-stone-600">
                                Clothing
                            </span>
                            </td>
                            <label className="relative inline-flex items-center cursor-pointer mt-7 ml-5">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={checked}
                                onChange={() => setChecked(!checked)}
                            />
                            <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-colors duration-300 ease-in-out"></div>
                            <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full shadow-md transform peer-checked:translate-x-5 transition-transform duration-300 ease-in-out"></div>
                            </label>
                            <td className="size-px whitespace-nowrap px-4 py-3">
                            <span className="text-sm text-stone-600">
                                4124123847
                            </span>
                            </td>
                            <td className="size-px whitespace-nowrap px-4 py-3">
                            <span className="text-sm text-stone-600">
                                $21
                            </span>
                            </td>
                            <td className="size-px whitespace-nowrap px-4 py-3">
                            <div className="flex flex-wrap gap-1">
                                <span className="p-2 bg-stone-100 text-stone-800 text-xs rounded-md">
                                🛍️ In store
                                </span>
                            </div>
                            </td>
                            <td className="size-px whitespace-nowrap px-4 py-3">
                            <div className="flex flex-wrap gap-1">
                                <span className="p-2 bg-green-100 text-darkGreen text-xs rounded-md">
                                Concluido
                                </span>
                            </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>

                <div className="mt-5 flex flex-wrap justify-between items-center gap-2">
                    <p className="text-sm text-stone-800">
                    <span className="font-medium">27</span>
                    <span className="text-stone-500">results</span>
                    </p>

                    <nav className="flex justify-end items-center gap-x-1" aria-label="Pagination">
                    <button type="button" className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100" aria-label="Previous">
                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                        <span className="sr-only">Previous</span>
                    </button>
                    <div className="flex items-center gap-x-1">
                        <span className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-stone-100 text-stone-800 py-2 px-3 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-current="page">1</span>
                        <span className="min-h-[38px] flex justify-center items-center text-stone-500 py-2 px-1.5 text-sm">of</span>
                        <span className="min-h-[38px] flex justify-center items-center text-stone-500 py-2 px-1.5 text-sm">3</span>
                    </div>
                    <button type="button" className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100" aria-label="Next">
                        <span className="sr-only">Next</span>
                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                    </nav>
                </div>
                </div>

                <div id="hs-pro-tabs-dut-archived" className="hidden" role="tabpanel" aria-labelledby="hs-pro-tabs-dut-item-archived">

                <div className="p-5  flex flex-col justify-center items-center text-center">
                    <svg className="w-48 mx-auto mb-4" width="178" height="90" viewBox="0 0 178 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="27" y="50.5" width="124" height="39" rx="7.5" fill="currentColor" className="fill-white"/>
                    <rect x="27" y="50.5" width="124" height="39" rx="7.5" stroke="currentColor" className="stroke-stone-50"/>
                    <rect x="34.5" y="58" width="24" height="24" rx="4" fill="currentColor" className="fill-stone-50"/>
                    <rect x="66.5" y="61" width="60" height="6" rx="3" fill="currentColor" className="fill-stone-50"/>
                    <rect x="66.5" y="73" width="77" height="6" rx="3" fill="currentColor" className="fill-stone-50"/>
                    <rect x="19.5" y="28.5" width="139" height="39" rx="7.5" fill="currentColor" className="fill-white"/>
                    <rect x="19.5" y="28.5" width="139" height="39" rx="7.5" stroke="currentColor" className="stroke-stone-100"/>
                    <rect x="27" y="36" width="24" height="24" rx="4" fill="currentColor" className="fill-stone-100"/>
                    <rect x="59" y="39" width="60" height="6" rx="3" fill="currentColor" className="fill-stone-100"/>
                    <rect x="59" y="51" width="92" height="6" rx="3" fill="currentColor" className="fill-stone-100"/>
                    <g filter="url(#filter4)">
                    <rect x="12" y="6" width="154" height="40" rx="8" fill="currentColor" className="fill-white" shape-rendering="crispEdges"/>
                    <rect x="12.5" y="6.5" width="153" height="39" rx="7.5" stroke="currentColor" className="stroke-stone-100" shape-rendering="crispEdges"/>
                    <rect x="20" y="14" width="24" height="24" rx="4" fill="currentColor" className="fill-stone-200 "/>
                    <rect x="52" y="17" width="60" height="6" rx="3" fill="currentColor" className="fill-stone-200"/>
                    <rect x="52" y="29" width="106" height="6" rx="3" fill="currentColor" className="fill-stone-200"/>
                    </g>
                    <defs>
                    <filter id="filter4" x="0" y="0" width="178" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="6"/>
                    <feGaussianBlur stdDeviation="6"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1187_14810"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1187_14810" result="shape"/>
                    </filter>
                    </defs>
                    </svg>

                    <div className="max-w-sm mx-auto">
                    <p className="mt-2 font-medium text-stone-800">
                        Your data will appear here soon.
                    </p>
                    <p className="mb-5 text-sm text-stone-500">
                        In the meantime, you can create new custom insights to monitor your most important metrics.
                    </p>
                    </div>

                    <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50" href="#">
                    Learn more
                    </a>
                </div>
                </div>

                <div id="hs-pro-tabs-dut-publish" className="hidden" role="tabpanel" aria-labelledby="hs-pro-tabs-dut-item-publish">

                <div className="p-5  flex flex-col justify-center items-center text-center">
                    <svg className="w-48 mx-auto mb-4" width="178" height="90" viewBox="0 0 178 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="27" y="50.5" width="124" height="39" rx="7.5" fill="currentColor" className="fill-white"/>
                    <rect x="27" y="50.5" width="124" height="39" rx="7.5" stroke="currentColor" className="stroke-stone-50"/>
                    <rect x="34.5" y="58" width="24" height="24" rx="4" fill="currentColor" className="fill-stone-50"/>
                    <rect x="66.5" y="61" width="60" height="6" rx="3" fill="currentColor" className="fill-stone-50"/>
                    <rect x="66.5" y="73" width="77" height="6" rx="3" fill="currentColor" className="fill-stone-50"/>
                    <rect x="19.5" y="28.5" width="139" height="39" rx="7.5" fill="currentColor" className="fill-white"/>
                    <rect x="19.5" y="28.5" width="139" height="39" rx="7.5" stroke="currentColor" className="stroke-stone-100"/>
                    <rect x="27" y="36" width="24" height="24" rx="4" fill="currentColor" className="fill-stone-100"/>
                    <rect x="59" y="39" width="60" height="6" rx="3" fill="currentColor" className="fill-stone-100"/>
                    <rect x="59" y="51" width="92" height="6" rx="3" fill="currentColor" className="fill-stone-100"/>
                    <g filter="url(#filter5)">
                    <rect x="12" y="6" width="154" height="40" rx="8" fill="currentColor" className="fill-white" shape-rendering="crispEdges"/>
                    <rect x="12.5" y="6.5" width="153" height="39" rx="7.5" stroke="currentColor" className="stroke-stone-100" shape-rendering="crispEdges"/>
                    <rect x="20" y="14" width="24" height="24" rx="4" fill="currentColor" className="fill-stone-200 "/>
                    <rect x="52" y="17" width="60" height="6" rx="3" fill="currentColor" className="fill-stone-200"/>
                    <rect x="52" y="29" width="106" height="6" rx="3" fill="currentColor" className="fill-stone-200"/>
                    </g>
                    <defs>
                    <filter id="filter5" x="0" y="0" width="178" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="6"/>
                    <feGaussianBlur stdDeviation="6"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1187_14810"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1187_14810" result="shape"/>
                    </filter>
                    </defs>
                    </svg>

                    <div className="max-w-sm mx-auto">
                    <p className="mt-2 font-medium text-stone-800">
                        Your data will appear here soon.
                    </p>
                    <p className="mb-5 text-sm text-stone-500">
                        In the meantime, you can create new custom insights to monitor your most important metrics.
                    </p>
                    </div>

                    <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50" href="#">
                    Learn more
                    </a>
                </div>
                </div>

                <div id="hs-pro-tabs-dut-unpublish" className="hidden" role="tabpanel" aria-labelledby="hs-pro-tabs-dut-item-unpublish">

                <div className="p-5  flex flex-col justify-center items-center text-center">
                    <svg className="w-48 mx-auto mb-4" width="178" height="90" viewBox="0 0 178 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="27" y="50.5" width="124" height="39" rx="7.5" fill="currentColor" className="fill-white"/>
                    <rect x="27" y="50.5" width="124" height="39" rx="7.5" stroke="currentColor" className="stroke-stone-50"/>
                    <rect x="34.5" y="58" width="24" height="24" rx="4" fill="currentColor" className="fill-stone-50"/>
                    <rect x="66.5" y="61" width="60" height="6" rx="3" fill="currentColor" className="fill-stone-50"/>
                    <rect x="66.5" y="73" width="77" height="6" rx="3" fill="currentColor" className="fill-stone-50"/>
                    <rect x="19.5" y="28.5" width="139" height="39" rx="7.5" fill="currentColor" className="fill-white"/>
                    <rect x="19.5" y="28.5" width="139" height="39" rx="7.5" stroke="currentColor" className="stroke-stone-100"/>
                    <rect x="27" y="36" width="24" height="24" rx="4" fill="currentColor" className="fill-stone-100"/>
                    <rect x="59" y="39" width="60" height="6" rx="3" fill="currentColor" className="fill-stone-100"/>
                    <rect x="59" y="51" width="92" height="6" rx="3" fill="currentColor" className="fill-stone-100"/>
                    <g filter="url(#filter6)">
                    <rect x="12" y="6" width="154" height="40" rx="8" fill="currentColor" className="fill-white" shape-rendering="crispEdges"/>
                    <rect x="12.5" y="6.5" width="153" height="39" rx="7.5" stroke="currentColor" className="stroke-stone-100" shape-rendering="crispEdges"/>
                    <rect x="20" y="14" width="24" height="24" rx="4" fill="currentColor" className="fill-stone-200 "/>
                    <rect x="52" y="17" width="60" height="6" rx="3" fill="currentColor" className="fill-stone-200"/>
                    <rect x="52" y="29" width="106" height="6" rx="3" fill="currentColor" className="fill-stone-200"/>
                    </g>
                    <defs>
                    <filter id="filter6" x="0" y="0" width="178" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="6"/>
                    <feGaussianBlur stdDeviation="6"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1187_14810"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1187_14810" result="shape"/>
                    </filter>
                    </defs>
                    </svg>

                    <div className="max-w-sm mx-auto">
                    <p className="mt-2 font-medium text-stone-800">
                        Your data will appear here soon.
                    </p>
                    <p className="mb-5 text-sm text-stone-500">
                        In the meantime, you can create new custom insights to monitor your most important metrics.
                    </p>
                    </div>

                    <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50" href="#">
                    Learn more
                    </a>
                </div>
                </div>
            </div>
            </div>

            <div id="hs-pro-epfo" className="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform size-full sm:w-[400px] z-[80] flex flex-col bg-white border-s hidden" role="dialog" tabIndex={-1} aria-labelledby="hs-pro-epfo-label">

            <div className="flex justify-between items-center py-3 px-5 border-b">
                <h3 id="hs-pro-epfo-label" className="font-semibold text-stone-800">
                Filter
                </h3>
                <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-stone-100 text-stone-800 hover:bg-stone-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-200" aria-label="Close" data-hs-overlay="#hs-pro-epfo">
                <span className="sr-only">Close</span>
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>

            <div className="h-[calc(100%-58px)] flex flex-col">
                <div className="h-full p-5 overflow-y-auto overflow-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-stone-100 [&::-webkit-scrollbar-thumb]:bg-stone-300">
                <div className="pb-5 mb-5 last:pb-0 last:mb-0 border-b last:border-b-0 border-stone-200">
                    <label className="font-semibold text-xs uppercase text-stone-800">
                    Product vendor
                    </label>

                    <div className="mt-3 grid grid-cols-2">
                    <div className="space-y-2">

                        <div className="flex items-center">
                        <input type="checkbox" className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none" id="hs-pro-epfopvch1" checked/>
                        <label htmlFor="hs-pro-epfopvch1" className="text-sm text-stone-800 ms-3">
                            Google
                        </label>
                        </div>

                        <div className="flex items-center">
                        <input type="checkbox" className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none" id="hs-pro-epfopvch2"/>
                        <label htmlFor="hs-pro-epfopvch2" className="text-sm text-stone-800 ms-3">
                            Topman
                        </label>
                        </div>

                        <div className="flex items-center">
                        <input type="checkbox" className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none" id="hs-pro-epfopvch3"/>
                        <label htmlFor="hs-pro-epfopvch3" className="text-sm text-stone-800 ms-3">
                            RayBan
                        </label>
                        </div>

                        <div className="flex items-center">
                        <input type="checkbox" className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none" id="hs-pro-epfopvch4"/>
                        <label htmlFor="hs-pro-epfopvch4" className="text-sm text-stone-800 ms-3">
                            Mango
                        </label>
                        </div>

                        <div className="flex items-center">
                        <input type="checkbox" className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none" id="hs-pro-epfopvch5"/>
                        <label htmlFor="hs-pro-epfopvch5" className="text-sm text-stone-800 ms-3">
                            Calvin Klein
                        </label>
                        </div>

                        <div className="flex items-center">
                        <input type="checkbox" className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none" id="hs-pro-epfopvch6"/>
                        <label htmlFor="hs-pro-epfopvch6" className="text-sm text-stone-800 ms-3">
                            Givenchy
                        </label>
                        </div>

                        <div className="flex items-center">
                        <input type="checkbox" className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none" id="hs-pro-epfopvch7"/>
                        <label htmlFor="hs-pro-epfopvch7" className="text-sm text-stone-800 ms-3">
                            Asos
                        </label>
                        </div>

                        <div className="flex items-center">
                        <input type="checkbox" className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none" id="hs-pro-epfopvch8"/>
                        <label htmlFor="hs-pro-epfopvch8" className="text-sm text-stone-800 ms-3">
                            Apple
                        </label>
                        </div>

                        <div className="flex items-center">
                        <input type="checkbox" className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none" id="hs-pro-epfopvch9"/>
                        <label htmlFor="hs-pro-epfopvch9" className="text-sm text-stone-800 ms-3">
                            Zara
                        </label>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center">
                        <input type="checkbox" className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none" id="hs-pro-epfopvch10"/>
                        <label htmlFor="hs-pro-epfopvch10" className="text-sm text-stone-800 ms-3">
                            Times
                        </label>
                        </div>

                        <div className="flex items-center">
                        <input type="checkbox" className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none" id="hs-pro-epfopvch11"/>
                        <label htmlFor="hs-pro-epfopvch11" className="text-sm text-stone-800 ms-3">
                            Nike
                        </label>
                        </div>

                        <div className="flex items-center">
                        <input type="checkbox" className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none" id="hs-pro-epfopvch12"/>
                        <label htmlFor="hs-pro-epfopvch12" className="text-sm text-stone-800 ms-3">
                            Adidas
                        </label>
                        </div>

                        <div className="flex items-center">
                        <input type="checkbox" className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none" id="hs-pro-epfopvch17"/>
                        <label htmlFor="hs-pro-epfopvch17" className="text-sm text-stone-800 ms-3">
                            Reebok
                        </label>
                        </div>

                        <div className="flex items-center">
                        <input type="checkbox" className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none" id="hs-pro-epfopvch13"/>
                        <label htmlFor="hs-pro-epfopvch13" className="text-sm text-stone-800 ms-3">
                            Levis
                        </label>
                        </div>

                        <div className="flex items-center">
                        <input type="checkbox" className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none" id="hs-pro-epfopvch14"/>
                        <label htmlFor="hs-pro-epfopvch14" className="text-sm text-stone-800 ms-3">
                            Beats
                        </label>
                        </div>

                        <div className="flex items-center">
                        <input type="checkbox" className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none" id="hs-pro-epfopvch15"/>
                        <label htmlFor="hs-pro-epfopvch15" className="text-sm text-stone-800 ms-3">
                            Clarke
                        </label>
                        </div>

                        <div className="flex items-center">
                        <input type="checkbox" className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none" id="hs-pro-epfopvch16"/>
                        <label htmlFor="hs-pro-epfopvch16" className="text-sm text-stone-800 ms-3">
                            Mango
                        </label>
                        </div>
                    </div>
                    </div>

                    <p className="mt-3">
                    <button type="button" className="py-1.5 px-2 inline-flex items-center gap-x-1 text-xs font-medium rounded-full border border-dashed border-stone-200 bg-white text-green-600 hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50">
                        <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        Clear
                    </button>
                    </p>
                </div>

                <div className="pb-5 mb-5 last:pb-0 last:mb-0 border-b last:border-b-0 border-stone-200">
                    <label className="font-semibold text-xs uppercase text-stone-800">
                    Availability
                    </label>

                    <div className="mt-3 space-y-2">
                    <div className="flex items-center">
                        <input type="checkbox" className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none" id="hs-pro-epfoach1" checked/>
                        <label htmlFor="hs-pro-epfoach1" className="text-sm text-stone-800 ms-3">
                        Available on Online Store
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input type="checkbox" className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none" id="hs-pro-epfoach2"/>
                        <label htmlFor="hs-pro-epfoach2" className="text-sm text-stone-800 ms-3">
                        Unavailable on Online Store
                        </label>
                    </div>
                    </div>

                    <p className="mt-3">
                    <button type="button" className="py-1.5 px-2 inline-flex items-center gap-x-1 text-xs font-medium rounded-full border border-dashed border-stone-200 bg-white text-green-600 hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50">
                        <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        Clear
                    </button>
                    </p>
                </div>

                <div className="pb-5 mb-5 last:pb-0 last:mb-0 border-b last:border-b-0 border-stone-200">
                    <label className="font-semibold text-xs uppercase text-stone-800">
                    Tagged with
                    </label>

                    <div className="mt-3">
                    <input type="text" className="py-2 px-3 block w-full bg-stone-100 border-transparent rounded-lg text-sm placeholder:text-stone-500 focus:border-green-500 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none" placeholder="Enter tags"/>
                    </div>

                    <p className="mt-3">
                    <button type="button" className="py-1.5 px-2 inline-flex items-center gap-x-1 text-xs font-medium rounded-full border border-dashed border-stone-200 bg-white text-green-600 hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50">
                        <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        Clear
                    </button>
                    </p>
                </div>
                </div>

                <div className="p-5 bg-white border-t border-stone-200">
                <div className="flex items-center gap-x-2">
                    <button type="button" className="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50">
                    <svg className="hidden sm:block shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    Clear all filters
                    </button>

                    <button type="button" className="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-green-500" data-hs-overlay="#hs-pro-epfo">
                    Save
                    </button>
                </div>
                </div>
            </div>
            </div>

            <div id="hs-pro-eepm" className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto [--close-when-click-inside:true] pointer-events-none" role="dialog" tabIndex={-1} aria-labelledby="hs-pro-eepm-label">
            <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-md sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center">
                <div className="w-full max-h-full flex flex-col bg-white rounded-xl pointer-events-auto shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)]">
                <div className="py-3 px-4 flex justify-between items-center border-b border-stone-200">
                    <h3 id="hs-pro-eepm-label" className="font-semibold text-stone-800">
                    Export products (2)
                    </h3>
                    <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-stone-100 text-stone-800 hover:bg-stone-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-200" aria-label="Close" data-hs-overlay="#hs-pro-eepm">
                    <span className="sr-only">Close</span>
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                </div>

                <div className="overflow-y-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-stone-100 [&::-webkit-scrollbar-thumb]:bg-stone-300">
                    <div className="p-4">
                    <div className="pb-5 mb-5 last:pb-0 last:mb-0 border-b last:border-b-0 border-stone-200">
                        <p className="mb-3 text-sm text-stone-500">
                        This CSV file can update all product information. To update just inventory quantites use the <a className="text-sm text-green-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline" href="#">CSV file for inventory</a>.
                        </p>

                        <label className="text-sm text-stone-500">
                        Export
                        </label>

                        <div className="mt-2 space-y-2">
                        <div className="flex items-center">
                            <input type="radio" name="hs-pro-eepmer" className="shrink-0 border-stone-300 rounded-full text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none" id="hs-pro-eepmer1" checked/>
                            <label htmlFor="hs-pro-eepmer1" className="text-sm text-stone-800 ms-3">
                            Current page
                            </label>
                        </div>

                        <div className="flex items-center">
                            <input type="radio" name="hs-pro-eepmer" className="shrink-0 border-stone-300 rounded-full text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none" id="hs-pro-eepmer2"/>
                            <label htmlFor="hs-pro-eepmer2" className="text-sm text-stone-800 ms-3">
                            All products
                            </label>
                        </div>

                        <div className="flex items-center">
                            <input type="radio" name="hs-pro-eepmer" className="shrink-0 border-stone-300 rounded-full text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none" id="hs-pro-eepmer3"/>
                            <label htmlFor="hs-pro-eepmer3" className="text-sm text-stone-800 ms-3">
                            Selected: 20 products
                            </label>
                        </div>
                        </div>
                    </div>

                    <div className="pb-5 mb-5 last:pb-0 last:mb-0 border-b last:border-b-0 border-stone-200">
                        <label className="text-sm text-stone-500">
                        Export as
                        </label>

                        <div className="mt-2 space-y-2">
                        <div className="flex items-center">
                            <input type="radio" name="hs-pro-eepmear" className="shrink-0 border-stone-300 rounded-full text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none" id="hs-pro-eepmear1" checked/>
                            <label htmlFor="hs-pro-eepmear1" className="text-sm text-stone-800 ms-3">
                            CSV for Excel, Numbers, or other spreadsheet programs
                            </label>
                        </div>

                        <div className="flex items-center">
                            <input type="radio" name="hs-pro-eepmear" className="shrink-0 border-stone-300 rounded-full text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none" id="hs-pro-eepmear2"/>
                            <label htmlFor="hs-pro-eepmear2" className="text-sm text-stone-800 ms-3">
                            Plain CSV file
                            </label>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="p-4 flex justify-end gap-x-2">
                    <div className="w-full flex justify-end items-center gap-x-2">
                    <button type="button" className="py-2 px-3 inline-flex justify-center items-center text-start bg-white border border-gray-200 text-gray-800 text-sm font-medium rounded-lg shadow-sm align-middle hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-pro-eepm">
                        Save as draft
                    </button>

                    <button type="button" className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-start bg-green-600 border border-green-600 text-white text-sm font-medium rounded-lg shadow-sm align-middle hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-green-300" data-hs-overlay="#hs-pro-eepm">
                        Export
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div id="hs-pro-eipm" className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto [--close-when-click-inside:true] pointer-events-none" role="dialog" tabIndex={-1} aria-labelledby="hs-pro-eipm-label">
            <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center">
                <div className="w-full max-h-full flex flex-col bg-white rounded-xl pointer-events-auto shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)]">

                <div className="py-3 px-4 flex justify-between items-center border-b border-stone-200">
                    <h3 id="hs-pro-eipm-label" className="font-semibold text-stone-800">
                    Import products
                    </h3>
                    <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-stone-100 text-stone-800 hover:bg-stone-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-200" aria-label="Close" data-hs-overlay="#hs-pro-eipm">
                    <span className="sr-only">Close</span>
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                </div>

                <div className="overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-stone-100 [&::-webkit-scrollbar-thumb]:bg-stone-300">
                    <div className="p-4">
                    <label className="block text-sm text-stone-500">
                        <a className="text-sm text-green-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline" href="#">Download a sample CSV template</a> to see an example of the format required.
                    </label>

                    <div className="space-y-2">
                        <label className="hidden mb-2 text-sm font-medium text-stone-800">
                        Upload images
                        </label>
                        <div className="p-12 h-56 flex justify-center bg-white border border-dashed border-stone-300 rounded-xl">
                        <div className="text-center">
                            <svg className="w-16 text-stone-400 mx-auto" width="70" height="46" viewBox="0 0 70 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.05172 9.36853L17.2131 7.5083V41.3608L12.3018 42.3947C9.01306 43.0871 5.79705 40.9434 5.17081 37.6414L1.14319 16.4049C0.515988 13.0978 2.73148 9.92191 6.05172 9.36853Z" fill="currentColor" stroke="currentColor" strokeWidth="2" className="fill-white stroke-stone-400"/>
                            <path d="M63.9483 9.36853L52.7869 7.5083V41.3608L57.6982 42.3947C60.9869 43.0871 64.203 40.9434 64.8292 37.6414L68.8568 16.4049C69.484 13.0978 67.2685 9.92191 63.9483 9.36853Z" fill="currentColor" stroke="currentColor" strokeWidth="2" className="fill-white stroke-stone-400"/>
                            <rect x="17.0656" y="1.62305" width="35.8689" height="42.7541" rx="5" fill="currentColor" stroke="currentColor" strokeWidth="2" className="fill-white stroke-stone-400"/>
                            <path d="M47.9344 44.3772H22.0655C19.3041 44.3772 17.0656 42.1386 17.0656 39.3772L17.0656 35.9161L29.4724 22.7682L38.9825 33.7121C39.7832 34.6335 41.2154 34.629 42.0102 33.7025L47.2456 27.5996L52.9344 33.7209V39.3772C52.9344 42.1386 50.6958 44.3772 47.9344 44.3772Z" stroke="currentColor" strokeWidth="2" className="stroke-stone-400"/>
                            <circle cx="39.5902" cy="14.9672" r="4.16393" stroke="currentColor" strokeWidth="2" className="stroke-stone-400"/>
                            </svg>

                            <div className="mt-4 flex flex-wrap justify-center text-sm leading-6 text-stone-600">
                            <span className="pe-1 font-medium text-stone-800">
                                Drop your files here or
                            </span>
                            <label htmlFor="hs-pro-eipb" className="relative cursor-pointer bg-white font-semibold text-green-600 hover:text-green-700 rounded-lg decoration-2 hover:underline focus-within:outline-none focus-within:ring-2 focus-within:ring-green-600 focus-within:ring-offset-2">
                                <span>browse</span>
                                <input id="hs-pro-eipb" type="file" className="sr-only" name="hs-pro-deuuf"/>
                            </label>
                            </div>

                            <p className="mt-1 text-xs text-stone-400">
                            CSV, XLS, DOCX
                            </p>
                        </div>
                        </div>
                    </div>

                    <div className="mt-3 flex">
                        <input type="checkbox" className="mt-0.5 shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none" id="hs-pro-eipoonch"/>
                        <label htmlFor="hs-pro-eipoonch" className="text-sm text-stone-500 ms-3">
                        Overwrite any current products that have the same handle. Existing values will be used for any missing columns. <a className="text-sm text-green-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline" href="#">Learn more</a>
                        </label>
                    </div>
                    </div>
                </div>

                <div className="p-4 flex justify-end gap-x-2">
                    <div className="w-full flex justify-end items-center gap-x-2">
                    <button type="button" className="py-2 px-3 inline-flex justify-center items-center text-start bg-white border border-gray-200 text-gray-800 text-sm font-medium rounded-lg shadow-sm align-middle hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-pro-eipm">
                        Save as draft
                    </button>

                    <button type="button" className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-start bg-green-600 border border-green-600 text-white text-sm font-medium rounded-lg shadow-sm align-middle hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-green-300" data-hs-overlay="#hs-pro-eipm">
                        Upload and continue
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}