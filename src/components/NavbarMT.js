"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  GlobeAmericasIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  TableCellsIcon,
  BoltIcon,
  LockClosedIcon,
  MegaphoneIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CogIcon,
  HeartIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { header } from "@/data";
import Image from "next/image";

// Development services
const developmentItems = [
  {
    link: "/web-development",
    title: "Web Development",
    description: "Custom websites & web applications",
    icon: GlobeAltIcon,
  },
  {
    link: "/mobile-development",
    title: "Mobile Application Development",
    description: "iOS & Android mobile applications",
    icon: DevicePhoneMobileIcon,
  },
  {
    link: "/web-design",
    title: "UI/UX Design & Wireframing",
    description: "User interface design & wireframing",
    icon: PaintBrushIcon,
  },
  {
    link: "/software-development",
    title: "Software Development",
    description: "Custom software solutions & enterprise apps",
    icon: ComputerDesktopIcon,
  },
  {
    link: "/dating-application-development",
    title: "Dating App Development Company",
    description: "Custom dating apps & platforms",
    icon: HeartIcon,
  },
  {
    link: "/ai-character-dating-app-development",
    title: "AI Character Dating",
    description: "Virtual companion & AI dating apps",
    icon: SparklesIcon,
  },
];

// Digital Marketing services
const digitalMarketingItems = [
  {
    link: "/seo",
    title: "SEO",
    description: "Search engine optimization",
    icon: GlobeAmericasIcon,
  },
  {
    link: "/email-marketing",
    title: "Email Marketing",
    description: "Campaigns, automation & deliverability",
    icon: MegaphoneIcon,
  },
  {
    link: "/content-marketing",
    title: "Content Marketing",
    description: "Blogs, landing pages & content strategy",
    icon: PaintBrushIcon,
  },
  {
    link: "/influencer-marketing",
    title: "Influencer Marketing",
    description: "Creators, UGC & partnerships",
    icon: MegaphoneIcon,
  },
  {
    link: "/google-ads-management",
    title: "Google Ads Management",
    description: "PPC strategy & optimization",
    icon: CogIcon,
  },
  {
    link: "/google-ads-management",
    title: "Ads Management",
    description: "High-ROI paid social campaigns",
    icon: MegaphoneIcon,
  },
  {
    link: "/marketing-automation",
    title: "Marketing Automation",
    description: "Workflows & personalization",
    icon: CogIcon,
  },
];

// Other services
const otherServicesItems = [
  {
    link: "/data-analysis",
    title: "Data Analysis",
    description: "Business intelligence & analytics",
    icon: TableCellsIcon,
  },
  {
    link: "/ai-automation",
    title: "AI Automations",
    description: "AI-powered automation solutions",
    icon: BoltIcon,
  },
  {
    link: "/cyber-security",
    title: "Cyber Security",
    description: "Security solutions & consulting",
    icon: LockClosedIcon,
  },
];

import { Montserrat } from "next/font/google";

const monteserrat = Montserrat({
  weight: '600',
  size: 'large',
  subsets: ['latin']
})

// Development menu component
const DevelopmentMenu = React.memo(function DevelopmentMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = developmentItems.map(
    ({ icon, title, description, link }, key) => (
      <Link href={link} key={key}>
        <MenuItem className="group dropdown-item flex items-center gap-3 rounded-lg hover:bg-accent transition-all duration-300 transform hover:scale-105">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 transition-colors group-hover:!bg-transparent">
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6 text-gray-900 transition-colors group-hover:!text-white",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold !text-black group-hover:!text-white transition-colors"
            >
              {title}
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="text-xs font-normal text-gray-600 group-hover:!text-white/90 transition-colors"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    ),
  );

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
              className={`${monteserrat.className} flex items-center gap-2 py-2 pr-4 font-medium text-black hover:text-white hover:bg-accent transition-all duration-300`}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Development
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
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-2 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
});

// Digital Marketing menu component
const DigitalMarketingMenu = React.memo(function DigitalMarketingMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = digitalMarketingItems.map(
    ({ icon, title, description, link }, key) => (
      <Link href={link} key={key}>
        <MenuItem className="group dropdown-item flex items-center gap-3 rounded-lg hover:bg-accent transition-all duration-300 transform hover:scale-105">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 transition-colors group-hover:!bg-transparent">
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6 text-gray-900 transition-colors group-hover:!text-white",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold !text-black group-hover:!text-white transition-colors"
            >
              {title}
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="text-xs font-normal text-gray-600 group-hover:!text-white/90 transition-colors"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    ),
  );

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
              className={`${monteserrat.className} flex items-center gap-2 py-2 pr-4 font-medium text-black hover:text-white hover:bg-accent transition-all duration-300`}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Digital Marketing
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
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-2 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
});

// Other Services menu component
const OtherServicesMenu = React.memo(function OtherServicesMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = otherServicesItems.map(
    ({ icon, title, description, link }, key) => (
      <Link href={link} key={key}>
        <MenuItem className="group dropdown-item flex items-center gap-3 rounded-lg hover:bg-accent transition-all duration-300 transform hover:scale-105">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 transition-colors group-hover:!bg-transparent">
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6 text-gray-900 transition-colors group-hover:!text-white",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold !text-black group-hover:!text-white transition-colors"
            >
              {title}
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="text-xs font-normal text-gray-600 group-hover:!text-white/90 transition-colors"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    ),
  );

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
              className={`${monteserrat.className} flex items-center gap-2 py-2 pr-4 font-medium text-black hover:text-white hover:bg-accent transition-all duration-300`}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Other Services
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
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-2 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
});

import ServicesMegaMenu from './ServicesMegaMenu';

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 gap-x-6">
      <ServicesMegaMenu />
      <Link href="/blog">
        <ListItem className={`${monteserrat.className} flex items-center gap-2 py-2 pr-4 font-medium text-black hover:text-white hover:bg-accent transition-all duration-300`}>
          Blog
        </ListItem>
      </Link>
      <Link href="/about">
        <ListItem className={`${monteserrat.className} flex items-center gap-2 py-2 pr-4 font-medium text-black hover:text-white hover:bg-accent transition-all duration-300`}>
          About Us
        </ListItem>
      </Link>
    </List>
  );
}

export function NavbarMT() {
  const [openNav, setOpenNav] = React.useState(false);

  const { logo, btnText } = header;

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);


  return (
    <>
      <div className={`lg:top-[1rem] py-4 lg:py-6 fixed w-full transition-all z-10`}>
        <Navbar className="mx-auto w-full px-6 lg:px-8 py-3 lg:py-4" data-aos='fade-down' data-aos-delay='1000'>
          <div className="flex items-center justify-between text-blue-gray-900 border-none">
            <Link href='/' data-aos='fade-down' data-aos-delay='1300'>
              <Image src={logo} alt="Systrocode Logo" width='60' height='60'></Image>
            </Link>
            <div className="hidden lg:block" data-aos='fade-down' data-aos-delay='1400'>
              <NavList />
            </div>
            <div className="hidden gap-2 lg:flex">
              <Link href='https://wa.me/919672040456' data-aos='fade-down' data-aos-delay='1500' target="_blank" rel="noopener noreferrer" aria-label="Contact us via WhatsApp">
                <Button variant="text" size="lg" className='bg-accent text-white link text-lg border-none'>
                  {btnText}
                </Button>
              </Link>
              {/* <Button variant="gradient" size="sm">
              Sign In
            </Button> */}
            </div>
            <IconButton
              variant="text"
              color="blue-gray"
              className="lg:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </IconButton>
          </div>
          <Collapse open={openNav}>
            <NavList />
            <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
              <Link href='https://wa.me/919672040456' className='w-full' target="_blank" rel="noopener noreferrer" aria-label="Contact us via WhatsApp">
                <Button variant="outlined" size="md" fullWidth className='bg-accent text-white border-none'>
                  {btnText}
                </Button>
              </Link>
              {/* <Button variant="gradient" size="sm" fullWidth>
                Sign In
              </Button> */}
            </div>
          </Collapse>
        </Navbar>
      </div>
      {/* Spacer to offset the fixed navbar height */}
      <div aria-hidden="true" className="h-16 lg:h-20"></div>
    </>
  );
}