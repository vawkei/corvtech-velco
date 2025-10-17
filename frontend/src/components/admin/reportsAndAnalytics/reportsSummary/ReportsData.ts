import { FaArrowTrendUp,  } from "react-icons/fa6";
import { TbCurrencyNaira } from 'react-icons/tb';
import { BiCalculator } from "react-icons/bi";
import { LuLeaf } from 'react-icons/lu';
// import { HiOutlineCalculator } from 'react-icons/hi2';


export const ReportAndAnalyticsData = [
    
        {
            heading: 'Total Emission Revenue',
            sum: "4.8B",
            icon: LuLeaf,
            color:"#16a34a",
            lastmonth: { icon: FaArrowTrendUp, text: '+12% vs last month' },
        },
        {
            heading: 'NESREA',
            sum: "4.6B/4.8B",
            icon:BiCalculator,
            color:"#16a34a",
            lastmonth: { icon: FaArrowTrendUp, text: '98.5%', status:"fulfilled" },
        },
        {
            heading: "Total Remittance Sent",
            sum: "4.5B",
            icon: TbCurrencyNaira,
            color:"#16a34a",
            lastmonth: { icon: FaArrowTrendUp, text: '+7.5% vs last month' },
        },
        {
            heading: 'Overdue Remittances',
            sum: "120M",
            icon: FaArrowTrendUp,
            color:"#16a34a",
            lastmonth: { icon: FaArrowTrendUp, text: 'Requires follow-up' },
        },
        
     
    
]