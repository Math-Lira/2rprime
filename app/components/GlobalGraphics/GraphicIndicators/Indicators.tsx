'use client'

import React, { useEffect } from "react";
import { initializeCharts } from "./utils/index";
import './utils/index'

export default function Indicators() {

    useEffect(() => {
        initializeCharts();
    }, [])

    return (
        <div>

            <div className="mb-2 xl:mb-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-5">

            <div className="flex flex-col p-3 bg-white border border-gray-200 shadow-[0_4px_6px_0px_rgba(0,0,0,0.03)] rounded-xl">
                <div className="space-y-4">
                <h2 className="text-xs uppercase text-gray-500">
                    Users
                </h2>

                <div className="grid grid-cols-2 gap-x-2">
                    <div className="text-2xl font-semibold text-gray-800">
                    17,482
                    </div>

                    <div id="hs-users-line-chart"></div>
                </div>

                <div className="flex items-center gap-x-2">
                    <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs bg-green-100 text-darkGreen rounded-md">
                    <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                    37.3%
                    </span>
                    <p className="text-xs text-gray-500">
                    from 12,142
                    </p>
                </div>
                </div>
            </div>

            <div className="flex flex-col p-3 bg-white border border-gray-200 shadow-[0_4px_6px_0px_rgba(0,0,0,0.03)] rounded-xl">
                <div className="space-y-4">
                <h2 className="text-xs uppercase text-gray-500">
                    Avg. click rate
                </h2>

                <div className="grid grid-cols-2 gap-x-2">
                    <div className="text-2xl font-semibold text-gray-800">
                    52,639
                    </div>

                    <div id="hs-avg-click-rate-line-chart"></div>
                </div>

                <div className="flex items-center gap-x-2">
                    <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs bg-green-100 text-darkGreen rounded-md">
                    <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                    14.5%
                    </span>
                    <p className="text-xs text-gray-500">
                    from 48,503
                    </p>
                </div>
                </div>
            </div>

            <div className="flex flex-col p-3 bg-white border border-gray-200 shadow-[0_4px_6px_0px_rgba(0,0,0,0.03)] rounded-xl">
                <div className="space-y-4">
                <h2 className="text-xs uppercase text-gray-500">
                    Sessions
                </h2>

                <div className="grid grid-cols-2 gap-x-2">
                    <div className="text-2xl font-semibold text-gray-800">
                    21,336
                    </div>

                    <div id="hs-sessions-line-chart"></div>
                </div>

                <div className="flex items-center gap-x-2">
                    <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs bg-red-100 text-red-900 rounded-md">
                    <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>
                    4.1%
                    </span>
                    <p className="text-xs text-gray-500">
                    from 20,229
                    </p>
                </div>
                </div>
            </div>

            <div className="flex flex-col p-3 bg-white border border-gray-200 shadow-[0_4px_6px_0px_rgba(0,0,0,0.03)] rounded-xl">
                <div className="space-y-4">
                <h2 className="text-xs uppercase text-gray-500">
                    Session duration
                </h2>

                <div className="grid grid-cols-2 gap-x-2">
                    <div className="text-2xl font-semibold text-gray-800">
                    5m 10s
                    </div>

                    <div id="hs-session-duration-line-chart"></div>
                </div>

                <div className="flex items-center gap-x-2">
                    <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs bg-yellow-100 text-yellow-900 rounded-md">
                    0.0%
                    </span>
                    <p className="text-xs text-gray-500">
                    from 5m 10s
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}