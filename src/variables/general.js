// Assets
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar7 from "assets/img/avatars/avatar7.png";
import avatar8 from "assets/img/avatars/avatar8.png";
import avatar9 from "assets/img/avatars/avatar9.png";
import avatar10 from "assets/img/avatars/avatar10.png";
// Custom icons
import {
  AdobexdLogo,
  AtlassianLogo,
  InvisionLogo,
  JiraLogo,
  SlackLogo,
  SpotifyLogo,
} from "components/Icons/Icons.js";
import { AiOutlineExclamation } from "react-icons/ai";
import {
  FaArrowDown,
  FaArrowUp,
  FaBell,
  FaCreditCard,
  FaFilePdf,
  FaHtml5,
  FaShoppingCart,
} from "react-icons/fa";
import { SiDropbox } from "react-icons/si";

export const dashboardTableData = [
  {
    logo: AdobexdLogo,
    name: "Kulkarni Solutions",
    members: [avatar1, avatar2, avatar3, avatar4, avatar5],
    revenue: "$14,000",
    ebitda: 20,
    progression: 87,
  },
  {
    logo: AtlassianLogo,
    name: "Razdan Hotels",
    members: [avatar3, avatar2],
    budget: "$3,000",
    revenue: "$14,000",
    ebitda: -12,
    progression: 10,
  },
  {
    logo: SlackLogo,
    name: "Blackhawks",
    members: [avatar10, avatar4],
    revenue: "$14,000",
    ebitda: 39,
    progression: 100,
  },
  {
    logo: SpotifyLogo,
    name: "Zenomind",
    members: [avatar2, avatar3, avatar7, avatar8],
    revenue: "$14,000",
    ebitda: 17,
    progression: 100,
  },
  {
    logo: JiraLogo,
    name: "KairoFocus",
    members: [avatar10, avatar3, avatar7, avatar2, avatar8],
    revenue: "$14,000",
    ebitda: -10,
    progression: 25,
  },
  {
    logo: InvisionLogo,
    name: "Limaye Finance",
    members: [avatar9, avatar3, avatar2],
    revenue: "$14,000",
    ebitda: 18,
    progression: 40,
  },
];

export const timelineData = [
  {
    logo: FaBell,
    title: "$2400, Design changes",
    date: "22 DEC 7:20 PM",
    color: "teal.300",
  },
  {
    logo: FaHtml5,
    title: "New order #4219423",
    date: "21 DEC 11:21 PM",
    color: "orange",
  },
  {
    logo: FaShoppingCart,
    title: "Server Payments for April",
    date: "21 DEC 9:28 PM",
    color: "blue.400",
  },
  {
    logo: FaCreditCard,
    title: "New card added for order #3210145",
    date: "20 DEC 3:52 PM",
    color: "orange.300",
  },
  {
    logo: SiDropbox,
    title: "Unlock packages for Development",
    date: "19 DEC 11:35 PM",
    color: "purple",
  },
  {
    logo: AdobexdLogo,
    title: "New order #9851258",
    date: "18 DEC 4:41 PM",
  },
];
export const rtlDashboardTableData = [
  {
    logo: AdobexdLogo,
    name: "نسخة Purity UI",
    members: [avatar1, avatar2, avatar3, avatar4, avatar5],
    budget: "$14,000",
    progression: 60,
  },
  {
    logo: AtlassianLogo,
    name: "إضافة مسار التقدم",
    members: [avatar3, avatar2],
    budget: "$3,000",
    progression: 10,
  },
  {
    logo: SlackLogo,
    name: "إصلاح أخطاء النظام الأساسي",
    members: [avatar10, avatar4],
    budget: "غير مضبوط",
    progression: 100,
  },
  {
    logo: SpotifyLogo,
    name: "إطلاق تطبيق الهاتف المحمول الخاص بنا",
    members: [avatar2, avatar3, avatar7, avatar8],
    budget: "$32,000",
    progression: 100,
  },
  {
    logo: JiraLogo,
    name: "أضف صفحة التسعير الجديدة",
    members: [avatar10, avatar3, avatar7, avatar2, avatar8],
    budget: "$400",
    progression: 25,
  },
  {
    logo: InvisionLogo,
    name: "إعادة تصميم متجر جديد على الإنترنت",
    members: [avatar9, avatar3, avatar2],
    budget: "$7,600",
    progression: 40,
  },
];

export const rtlTimelineData = [
  {
    logo: FaBell,
    title: "$2400, تغييرات في التصميم",
    date: "22 DEC 7:20 PM",
    color: "teal.300",
  },
  {
    logo: FaHtml5,
    title: "طلب جديد #4219423",
    date: "21 DEC 11:21 PM",
    color: "orange",
  },
  {
    logo: FaShoppingCart,
    title: "مدفوعات الخادم لشهر أبريل",
    date: "21 DEC 9:28 PM",
    color: "blue.400",
  },
  {
    logo: FaCreditCard,
    title: "تمت إضافة بطاقة جديدة للطلب #3210145",
    date: "20 DEC 3:52 PM",
    color: "orange.300",
  },
  {
    logo: SiDropbox,
    title: "فتح الحزم من أجل التنمية",
    date: "19 DEC 11:35 PM",
    color: "purple",
  },
  {
    logo: AdobexdLogo,
    title: "طلب جديد #9851258",
    date: "18 DEC 4:41 PM",
  },
];

export const tablesTableData = [
  {
    logo: avatar5,
    name: "Ashish Kulkarni",
    email: "ashish@mail.com",
    subdomain: "CEO",
    domain: "Kulkarni Solutions",
    status: "Online",
    date: "14/06/21",
    self: 93,
    drive: 96,
    cognition: 91
  },
  {
    logo: avatar5,
    name: "Aditya Nair",
    email: "aditya@mail.com",
    subdomain: "CTO",
    domain: "Kulkarni Solutions",
    status: "Offline",
    date: "12/05/21",
    self: 93,
    drive: 96,
    cognition: 91
  },
  {
    logo: avatar3,
    name: "Vidushi Razdan",
    email: "vidushi@mail.com",
    subdomain: "CEO",
    domain: "Razdan Hotels",
    status: "Online",
    date: "07/06/21",
    self: 84,
    drive: 78,
    cognition: 73
  },
  {
    logo: avatar2,
    name: "Apurv Ghadi",
    email: "apurv@mail.com",
    subdomain: "CEO",
    domain: "Blackhawks",
    status: "Online",
    date: "14/11/21",
    self: 75,
    drive: 89,
    cognition: 81
  },
  {
    logo: avatar5,
    name: "Arpan Modi",
    email: "arpan@mail.com",
    subdomain: "CTO",
    domain: "Blackhawks",
    status: "Offline",
    date: "21/01/21",
    self: 84,
    drive: 71,
    cognition: 81
  },
  {
    logo: avatar7,
    name: "Shoaib Mansoori",
    email: "shoaib@mail.com",
    subdomain: "COO",
    domain: "Blackhawks",
    status: "Offline",
    date: "04/09/20",
    self: 91,
    drive: 99,
    cognition: 94
  },
];

export const tablesProjectData = [
  {
    logo: AdobexdLogo,
    name: "Purity UI Version",
    budget: "$14,000",
    status: "Working",
    progression: 60,
  },
  {
    logo: AtlassianLogo,
    name: "Add Progress Track",
    budget: "$3,000",
    status: "Canceled",
    progression: 10,
  },
  {
    logo: SlackLogo,
    name: "Fix Platform Errors",
    budget: "Not set",
    status: "Done",
    progression: 100,
  },
  {
    logo: SpotifyLogo,
    name: "Launch our Mobile App",
    budget: "$32,000",
    status: "Done",
    progression: 100,
  },
  {
    logo: JiraLogo,
    name: "Add the New Pricing Page",
    budget: "$400",
    status: "Working",
    progression: 25,
  },
];

export const invoicesData = [
  {
    date: "March, 01, 2020",
    code: "#MS-415646",
    price: "$180",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "February, 10, 2020",
    code: "#RV-126749",
    price: "$250",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "April, 05, 2020",
    code: "#FB-212562",
    price: "$560",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "June, 25, 2019",
    code: "#QW-103578",
    price: "$120",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "March, 01, 2019",
    code: "#AR-803481",
    price: "$300",
    logo: FaFilePdf,
    format: "PDF",
  },
];

export const billingData = [
  {
    name: "Global VC Preferences",
    company: "Viking Burrito",
    email: "oliver@burrito.com",
    number: "FRB1235476",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    name: "Sector Focus - Fintech (Europe)",
    company: "Stone Tech Zone",
    email: "lucas@stone-tech.com",
    number: "FRB1235476",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    name: "Gender Analysis of Founder",
    company: "Fiber Notion",
    email: "ethan@fiber.com",
    number: "FRB1235476",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
];

export const newestTransactions = [
  {
    name: "Netflix",
    date: "27 March 2021, at 12:30 PM",
    price: "- $2,500",
    logo: FaArrowDown,
  },
  {
    name: "Apple",
    date: "27 March 2021, at 12:30 PM",
    price: "+ $2,500",
    logo: FaArrowUp,
  },
];

export const olderTransactions = [
  {
    name: "Stripe",
    date: "26 March 2021, at 13:45 PM",
    price: "+ $800",
    logo: FaArrowUp,
  },
  {
    name: "HubSpot",
    date: "26 March 2021, at 12:30 PM",
    price: "+ $1,700",
    logo: FaArrowUp,
  },
  {
    name: "Webflow",
    date: "26 March 2021, at 05:00 PM",
    price: "Pending",
    logo: AiOutlineExclamation,
  },
  {
    name: "Microsoft",
    date: "25 March 2021, at 16:30 PM",
    price: "- $987",
    logo: FaArrowDown,
  },
];
