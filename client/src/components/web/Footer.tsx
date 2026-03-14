
import { footerData } from "@/app/data/data-config";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="mt-16 flex flex-col md:flex-row items-center md:item-start bg-accent p-5 rounded-sm">
            <div className="flex-col gap-4 items-center md:items-start">
                <p className="text-sm text-gray-500">Order Management System</p>
                <p className="text-sm text-gray-500">© 2026 OMS. All rights reserved.</p>
            </div>
            <div className="flex-row justify-between">
                {
                    footerData.map((item, index) => (
                        <div key={index} className="flex-col gap-4 items-center md:items-start">
                            <p className="text-sm text-gray-500">{item.title}</p>
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

        </div>

    )
}