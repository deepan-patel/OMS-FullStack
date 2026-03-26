import Link from "next/link";
import { Bell, Home, ShoppingBag, ShoppingCart } from "lucide-react";
import { buttonVariants } from "../ui/button";
import SearchBar from "./SearchBar";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { ThemeToggle } from "../theme/ThemeToggle";

export default function NavBar() {
    return (
        <nav className="w-full flex justify-between items-center bg-accent p-5 mb-5 rounded-xl">
            <div className="flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 md:w-7 md:h-7" />
                <span className="text-bold tex-xl md:text-2xl tracking-wider ">OMS</span>
            </div>


            <div className="flex items-center gap-6">
                <SearchBar />
                <Link href="/"><Home className="hover:text-primary text-gray-500" /></Link>
                <Bell className="hover:text-primary w-9 h-9 text-gray-500" />
                <ThemeToggle />
                <ShoppingCartIcon />
                <Link className={buttonVariants({ variant: "default", className: "hover:text-primary" })} href="/sign-in" >Sign In</Link>
            </div>

        </nav>
    )
}