"use client";
import React from "react";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Typography,
    Collapse,
    ListItem,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    DevicePhoneMobileIcon,
    GlobeAltIcon,
    ComputerDesktopIcon,
    SparklesIcon,
    MegaphoneIcon,
    BoltIcon,
    TableCellsIcon,
    LockClosedIcon,
    HeartIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    weight: '600',
    size: 'large',
    subsets: ['latin']
});

const servicesData = [
    {
        title: "Mobile App Development",
        icon: DevicePhoneMobileIcon,
        items: [
            { title: "iOS App Development", link: "/mobile-development" },
            { title: "Android App Development", link: "/mobile-development" },
            { title: "React Native App Development", link: "/mobile-development" },
            { title: "Flutter App Development", link: "/mobile-development" },
            { title: "Wearable App Development", link: "/mobile-development" },
            { title: "iPad App Development", link: "/mobile-development" },
            { title: "Game Development", link: "#" },
            { title: "VR/AR Apps", link: "#" },
            { title: "IoT App Development", link: "#" },
            { title: "Enterprise Mobility", link: "#" },
            { title: "M-Commerce Apps", link: "#" },
            { title: "Social Media Apps", link: "#" },
        ]
    },
    {
        title: "Website Development",
        icon: GlobeAltIcon,
        items: [
            { title: "Web Development", link: "/web-development" },
            { title: "UI/UX Design & Wireframing", link: "/web-design" },
            { title: "E-commerce Development", link: "/web-development" },
            { title: "CMS Development", link: "/web-development" },
            { title: "Node.js Development", link: "/web-development" },
            { title: "AngularJS Development", link: "/web-development" },
            { title: "ReactJS Development", link: "/web-development" },
            { title: "Custom Web Development", link: "#" },
            { title: "Portal Development", link: "#" },
            { title: "PWA Development", link: "#" },
            { title: "WordPress Development", link: "#" },
            { title: "Shopify Development", link: "#" },
            { title: "Magento Development", link: "#" },
            { title: "PHP Development", link: "#" },
            { title: "Python Development", link: "#" },
        ]
    },
    {
        title: "Software Development",
        icon: ComputerDesktopIcon,
        items: [
            { title: "Software Development", link: "/software-development" },
            { title: "SaaS Development", link: "/software-development" },
            { title: "ERP Software", link: "/software-development" },
            { title: "CRM Software", link: "/software-development" },
            { title: "Product Engineering", link: "#" },
            { title: "Legacy Modernization", link: "#" },
            { title: "API Development", link: "#" },
            { title: "Microservices Architecture", link: "#" },
            { title: "POS Software", link: "#" },
            { title: "LMS Software", link: "#" },
            { title: "HMS Software", link: "#" },
        ]
    },
    {
        title: "Artificial Intelligence",
        icon: SparklesIcon,
        items: [
            { title: "AI Automations", link: "/ai-automation" },
            { title: "AI Character Dating", link: "/ai-character-dating-app-development" },
            { title: "Generative AI", link: "/ai-automation" },
            { title: "Machine Learning", link: "/ai-automation" },
            { title: "Natural Language Processing", link: "/ai-automation" },
            { title: "Computer Vision", link: "/ai-automation" },
            { title: "Predictive Analytics", link: "#" },
            { title: "Deep Learning", link: "#" },
            { title: "Chatbot Development", link: "#" },
            { title: "Recommendation Engines", link: "#" },
            { title: "Image Recognition", link: "#" },
            { title: "Voice Assistants", link: "#" },
        ]
    },
    {
        title: "Blockchain Development",
        icon: TableCellsIcon,
        items: [
            { title: "Blockchain Development", link: "#" },
            { title: "Wallet App Development", link: "#" },
            { title: "Smart Contract Development", link: "#" },
            { title: "Exchange Software", link: "#" },
            { title: "Ethereum Development", link: "#" },
            { title: "NFT Marketplace", link: "#" },
            { title: "Private Blockchain", link: "#" },
            { title: "Crypto Wallets", link: "#" },
            { title: "ICO/STO Launch", link: "#" },
            { title: "Hyperledger Development", link: "#" },
            { title: "DeFi Solutions", link: "#" },
        ]
    },
    {
        title: "Enterprise Solution",
        icon: LockClosedIcon,
        items: [
            { title: "Data Analysis", link: "/data-analysis" },
            { title: "Cyber Security", link: "/cyber-security" },
            { title: "Cloud Computing", link: "#" },
            { title: "DevOps Services", link: "#" },
            { title: "Big Data Solutions", link: "#" },
            { title: "Business Intelligence", link: "#" },
            { title: "IT Consulting", link: "#" },
            { title: "Digital Transformation", link: "#" },
            { title: "Cloud Migration", link: "#" },
            { title: "AWS Services", link: "#" },
            { title: "Azure Solutions", link: "#" },
        ]
    },
    {
        title: "On-Demand Solutions",
        icon: BoltIcon,
        items: [
            { title: "On Demand", link: "#" },
            { title: "Grocery Delivery", link: "#" },
            { title: "Alcohol delivery", link: "#" },
            { title: "Agriculture", link: "#" },
            { title: "Pet Grooming", link: "#" },
            { title: "Dating App Development Company", link: "/dating-application-development" },
            { title: "Astrology", link: "#" },
            { title: "Baby Tracking", link: "#" },
            { title: "Dog Walking", link: "#" },
            { title: "Furniture", link: "#" },
            { title: "Music Streaming", link: "#" },
            { title: "Salon", link: "#" },
            { title: "Matrimony", link: "#" },
            { title: "Parking Finder", link: "#" },
            { title: "Job Portal", link: "#" },
            { title: "Video Streaming", link: "#" },
            { title: "Car Wash", link: "#" },
            { title: "Massage", link: "#" },
            { title: "Classified", link: "#" },
            { title: "On-Demand Doctor", link: "#" },
            { title: "Fuel Delivery", link: "#" },
            { title: "Car Rental", link: "#" },
            { title: "Medicine Delivery", link: "#" },
            { title: "Stock Trading", link: "#" },
            { title: "Auction", link: "#" },
            { title: "eWallet", link: "#" },
            { title: "Home Service", link: "#" },
            { title: "Flower Delivery", link: "#" },
            { title: "GPS Tracking", link: "#" },
            { title: "Packers & Movers", link: "#" },
            { title: "Loan Lending", link: "#" },
            { title: "Fantasy Sports", link: "#" },
            { title: "Milk Delivery", link: "#" },
            { title: "Influencer Marketing", link: "/influencer-marketing" },
            { title: "Water Delivery", link: "#" },
            { title: "Handyman", link: "#" },
            { title: "Fantasy Football", link: "#" },
            { title: "Ice Cream delivery", link: "#" },
            { title: "Podcast", link: "#" },
            { title: "Courier Delivery", link: "#" },
            { title: "Taxi Booking", link: "#" },
            { title: "Lawyer", link: "#" },
            { title: "Tutor Booking", link: "#" },
            { title: "Cloud Kitchen", link: "#" },
            { title: "News App", link: "#" },
            { title: "Food Delivery", link: "#" },
            { title: "Laundry", link: "#" },
            { title: "Bike Rental", link: "#" },
            { title: "Food Truck", link: "#" },
            { title: "Expense Management", link: "#" },
        ]
    }
];

export default function ServicesMegaMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [activeCategory, setActiveCategory] = React.useState(servicesData[0].title);

    const activeItems = servicesData.find(cat => cat.title === activeCategory)?.items || [];

    const renderMobileItems = servicesData.map((category, key) => (
        <div key={key} className="mb-2">
            <Typography variant="small" color="blue-gray" className="font-bold mb-1 px-4">
                {category.title}
            </Typography>
            <ul className="pl-4">
                {category.items.map((item, idx) => (
                    <li key={idx}>
                        <Link href={item.link}>
                            <MenuItem className="text-sm text-gray-600 hover:text-black">
                                {item.title}
                            </MenuItem>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    ));

    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                allowHover={true}
                placement="bottom"
                offset={4}
            >
                <MenuHandler>
                    <Typography
                        as="div"
                        variant="small"
                        className="font-medium cursor-pointer"
                    >
                        <ListItem
                            className={`${montserrat.className} flex items-center gap-2 py-2 pr-4 font-medium text-black hover:text-white hover:bg-accent transition-all duration-300`}
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            Services
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl w-full rounded-xl lg:block p-0 overflow-hidden">
                    <div className="flex outline-none outline-0 min-h-[300px]">
                        {/* Sidebar */}
                        <div className="w-1/4 bg-gray-50 border-r border-gray-200 p-3 flex flex-col gap-1">
                            {servicesData.map((category) => (
                                <div
                                    key={category.title}
                                    onMouseEnter={() => setActiveCategory(category.title)}
                                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${activeCategory === category.title
                                        ? "bg-white shadow-md text-red-500"
                                        : "hover:bg-gray-100 text-gray-700"
                                        }`}
                                >
                                    <div className={`p-2 rounded-md ${activeCategory === category.title ? "bg-red-50 text-red-500" : "bg-gray-200 text-gray-600"}`}>
                                        {React.createElement(category.icon, { className: "h-5 w-5" })}
                                    </div>
                                    <Typography variant="small" className="font-bold">
                                        {category.title}
                                    </Typography>
                                </div>
                            ))}
                        </div>

                        {/* Content Area */}
                        <div className="w-3/4 p-6 bg-white overflow-y-auto max-h-[500px]">
                            <Typography variant="h6" color="blue-gray" className="mb-4 font-bold border-b pb-2 sticky top-0 bg-white z-10">
                                {activeCategory}
                            </Typography>
                            <div className="grid grid-cols-3 gap-x-6 gap-y-2">
                                {activeItems.map((item, idx) => (
                                    <Link href={item.link} key={idx}>
                                        <div className="p-2 hover:bg-gray-50 rounded-md transition-colors cursor-pointer group">
                                            <Typography variant="small" className="font-medium text-gray-900 group-hover:text-red-500 transition-colors text-xs lg:text-sm">
                                                {item.title}
                                            </Typography>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>
                    <div className="max-h-[400px] overflow-y-auto">
                        {renderMobileItems}
                    </div>
                </Collapse>
            </div>
        </React.Fragment>
    );
}
