import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { buttonVariants } from "../ui/button";

export default function NavBar() {
    return (
        <nav className="w-full flex justify-between items-center bg-accent p-5 mb-5 rounded-xl">
            <div className="flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 md:w-9 md:h-9 hover:text-primary" />
                <span className="text-bold tex-xl md:text-2xl tracking-wider hover:text-primary">OMS FullStack Project</span>
            </div>


            <div>
                <Link className={buttonVariants({ variant: "default" })} href="/sign-in" >Sign In</Link>
            </div>

        </nav>
    )
}