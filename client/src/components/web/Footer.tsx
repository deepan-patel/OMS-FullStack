
import { footerData } from "@/app/data/data-config";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="mt-16 flex flex-col md:gap-0 gap-8 md:flex-row items-center justify-between md:items-start bg-accent p-5 rounded-sm">
            <div className="flex flex-col gap-4 items-center md:items-start">
                <p className="text-sm text-gray-500">Order Management System</p>
                <p className="text-sm text-gray-500">© 2026 OMS. All rights reserved.</p>
            </div>


            {
                footerData.map((item, index) => (
                    <div key={index} className="flex flex-col gap-4 items-center md:items-start">
                        <p className="text-sm font-bold text-gray-500">{item.title}</p>
                        <div className="flex flex-col gap-4">
                            {
                                item.links.map((link, index) => (
                                    <Link key={index} href={link.href} className="text-sm text-gray-500">{link.label}</Link>
                                ))
                            }
                        </div>
                    </div>
                ))
            }







        </div>

    )
}