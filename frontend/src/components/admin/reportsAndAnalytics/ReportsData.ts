import { FaArrowTrendUp, FaNairaSign } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa6";
import { BiCalculator } from "react-icons/bi";
export const ReportAndAnalyticsData = [
    
        {
            heading: 'Total Emission Revenue',
            sum: "4.8B",
            icon: FaLeaf,
            color:"#16a34a",
            lastmonth: { icon: FaArrowTrendUp, text: '+12.5% vs last month' },
        },
        {
            heading: 'NESREA',
            sum: "4.6B/4.8B",
            icon:BiCalculator,
            color:"#2563eb",
            lastmonth: { icon: FaArrowTrendUp, text: '+12.5% vs last month' },
        },
        {
            heading: "Total Remittance Sent",
            sum: "4.5B",
            icon: FaNairaSign,
            color:"#9333ea",
            lastmonth: { icon: FaArrowTrendUp, text: '+12.5% vs last month' },
        },
        {
            heading: 'Overdue Remittances',
            sum: "120M",
            icon: FaArrowTrendUp,
            color:"#dc2626",
            lastmonth: { icon: FaArrowTrendUp, text: 'Requires follow-up' },
        },
        
     
    
]