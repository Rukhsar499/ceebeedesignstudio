"use client"

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div> 
        <div id="banner1" className="min-h-screen bg-amber-50 z-10 fixed top-0 left-0 w-1/4">
        </div>
        <div id="banner2" className="min-h-screen bg-amber-50 z-10 fixed top-0 left-1/4 w-1/4">
        </div>
        <div id="banner3" className="min-h-screen bg-amber-50 z-10 fixed top-0 left-2/4 w-1/4">
        </div>
        <div id="banner4" className="min-h-screen bg-amber-50 z-10 fixed top-0 left-3/4 w-1/4">
        </div>
        {children}

        </div>
    )

}