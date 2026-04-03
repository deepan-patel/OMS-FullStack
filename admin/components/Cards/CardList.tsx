import { CardContents } from "@/types/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";

const popularContent: CardContents = [
    {
        id: 1,
        title: "JavaScript Tutorial",
        badge: "Coding",
        image:
            "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 4300,
    },
    {
        id: 2,
        title: "Tech Trends 2025",
        badge: "Tech",
        image:
            "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 3200,
    },
    {
        id: 3,
        title: "The Future of AI",
        badge: "AI",
        image:
            "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 2400,
    },
    {
        id: 4,
        title: "React Hooks Explained",
        badge: "Coding",
        image:
            "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 1500,
    },
    {
        id: 5,
        title: "Image Generation with AI",
        badge: "AI",
        image:
            "https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 1200,
    },
];

const latestTransactions: CardContents = [
    {
        id: 1,
        title: "Subscription Renewal",
        badge: "John Doe",
        image:
            "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 1400,
    },
    {
        id: 2,
        title: "Payment for Services",
        badge: "Jane Smith",
        image:
            "https://images.pexels.com/photos/4969918/pexels-photo-4969918.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 2100,
    },
    {
        id: 3,
        title: "Subscription Renewal",
        badge: "Michael Johnson",
        image:
            "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 1300,
    },
    {
        id: 4,
        title: "Payment for Services",
        badge: "Lily Adams",
        image:
            "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 2500,
    },
    {
        id: 5,
        title: "Subscription Renewal",
        badge: "Sam Brown",
        image:
            "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 1400,
    },
];


export default function CardList({ title }: { title: string }) {

    const list = title === "Popular Content" ? popularContent : latestTransactions;


    return (
        <div>
            <div className="font-medium text-lg mb-4">
                {title}
            </div>
            <div className="flex flex-col gap-2">
                {
                    list.map((item) => {
                        return (
                            <Card key={item.id} className="flex flex-row items-center gap-2">
                                <CardHeader className="relative w-12 h-12 overflow-hidden ml-2">
                                    <Image src={item.image} alt={item.title} fill className="rounded-md object-cover" />
                                </CardHeader>
                                <CardContent className="flex flex-1 flex-col gap-2">
                                    <CardTitle>{item.title}</CardTitle>
                                    <Badge variant="secondary" className="rounded-sm">{item.badge}</Badge>
                                </CardContent>
                                <CardFooter className="flex">
                                    <p>{item.count / 1000}K</p>
                                </CardFooter>
                            </Card>
                        )
                    })
                }
            </div>

        </div>
    )
}