import type { ReactNode } from "react";
import Link from "next/link";



type AdminLayoutProps ={
children:ReactNode;
}

export default function AdminLayout({
    children,
}:AdminLayoutProps){
    return(
        <div className="min-h-screen bg-slate-50 md:grid md:grid-cols-[240px_1fr]">
            <aside className="flex flex-wrap items-center gap-2 bg-slate-100 text-slate-700 px-4 py-5 border-b border-slate-200 shadow-sm md:block md:sticky md:top-0 md:h-screen md:overflow-y-auto md:pt-8 md:pb-8 md:border-b-0 md:border-r md:shadow-md">
                <h2 className="w-full text-lg md:text-xl font-bold text-center tracking-wide bg-linear-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent underline decoration-indigo-200 underline-offset-8">Admin</h2>
                <p className="w-full text-xs md:text-sm text-center font-light mt-1 mb-3 md:mt-5 md:mb-8 text-slate-500 leading-relaxed">Welcome to ABC School Management Dashboard</p>
                <Link rel="stylesheet" href="/admin" className="block grow basis-[calc(50%-0.25rem)] md:basis-auto text-center md:text-left rounded-xl px-3 py-2.5 md:px-4 md:py-3 md:mb-2 text-sm font-semibold text-white bg-linear-to-r from-indigo-500 to-sky-500 shadow-md shadow-indigo-200 transition-all duration-200 hover:brightness-105 md:hover:translate-x-1">
                Dashboard
                </Link>
                <Link rel="stylesheet" href="/admission" className="block grow basis-[calc(50%-0.25rem)] md:basis-auto text-center md:text-left rounded-xl px-3 py-2.5 md:px-4 md:py-3 md:mb-2 text-sm font-medium text-slate-600 bg-slate-50 border border-slate-200 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 md:hover:translate-x-1">
                Admission
                </Link>
                <Link rel="stylesheet" href="/notice" className="block grow basis-[calc(50%-0.25rem)] md:basis-auto text-center md:text-left rounded-xl px-3 py-2.5 md:px-4 md:py-3 md:mb-2 text-sm font-medium text-slate-600 bg-slate-50 border border-slate-200 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 md:hover:translate-x-1">
                Notice Board
                </Link>
                <Link rel="stylesheet" href="/teachers "className="block grow basis-[calc(50%-0.25rem)] md:basis-auto text-center md:text-left rounded-xl px-3 py-2.5 md:px-4 md:py-3 md:mb-2 text-sm font-medium text-slate-600 bg-slate-50 border border-slate-200 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 md:hover:translate-x-1">
                Teachers & Staff
                </Link>
                <Link rel="stylesheet" href="/gallery" className="block grow basis-[calc(50%-0.25rem)] md:basis-auto text-center md:text-left rounded-xl px-3 py-2.5 md:px-4 md:py-3 md:mb-2 text-sm font-medium text-slate-600 bg-slate-50 border border-slate-200 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 md:hover:translate-x-1">
                Gallery
                </Link>
                <Link rel="stylesheet" href="/facilities" className="block grow basis-[calc(50%-0.25rem)] md:basis-auto text-center md:text-left rounded-xl px-3 py-2.5 md:px-4 md:py-3 md:mb-2 text-sm font-medium text-slate-600 bg-slate-50 border border-slate-200 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 md:hover:translate-x-1">
                Facilities
                </Link>
                <Link rel="stylesheet" href="/facilities" className="block grow basis-[calc(50%-0.25rem)] md:basis-auto text-center md:text-left rounded-xl px-3 py-2.5 md:px-4 md:py-3 md:mb-2 text-sm font-medium text-slate-600 bg-slate-50 border border-slate-200 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 md:hover:translate-x-1">
                Settings
                </Link>
            </aside>
            <>{children}</>
        </div>
    )
}