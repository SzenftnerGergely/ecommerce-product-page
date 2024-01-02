import { RiMenuLine } from "react-icons/ri"
import { links } from "@/lib/constants"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

export function SideBar() {

    return (
        <Sheet>
            <SheetTrigger >
                <RiMenuLine variant="outline" className="text-[#b6bcc8] hover:text-gray-700 w-auto h-7 lg:hidden transition-all" />
            </SheetTrigger>
            <SheetContent side={"left"} className="pt-16">
                {links.map((link, idx) => (
                    <div key={idx}>
                        <a
                            href={link.href}
                            className='text-lg font-semibold text-[#b6bcc8] trasition-all duration-100 
                                        hover:text-[#1d2025] hover:border-b-4 pb-[3.5rem] hover:border-b-[#ff7d1a]'
                        >
                            {link.name}
                        </a>
                    </div>
                ))}
            </SheetContent>
        </Sheet>
    )
}