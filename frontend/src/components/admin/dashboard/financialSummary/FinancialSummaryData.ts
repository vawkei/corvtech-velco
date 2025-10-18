// import { FaNairaSign } from 'react-icons/fa6';
import { TbCurrencyNaira } from 'react-icons/tb';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { AiOutlineWarning } from 'react-icons/ai';
import { TbClockDollar } from 'react-icons/tb';
// import { WiMoonAltFull } from 'react-icons/wi';

export const FinancialSummaryData = [
    {
        heading: 'Total Collections',
        sum: "847.2M",
        // icon:"icon",
        icon: TbCurrencyNaira,
        color:"#16a34a",
         yesterday: { icon: FaArrowTrendUp, text: '+12.5% vs yesterday' },
    },
    {
        heading: 'Pending Remittances',
        sum: "156.8M",
        icon: TbClockDollar,
        color:"#2563eb",
         yesterday: { icon: FaArrowTrendUp, text: '+12.5% vs yesterday' },
    },
    {
        heading: "Average Daily Payments",
        sum: "78M",
        icon: FaArrowTrendUp,
        color:"#9333ea",
         yesterday: { icon: FaArrowTrendUp, text: '+12.5% vs yesterday' },
    },
    {
        heading: 'Overdue Remittances',
        sum: "23.7M",
        icon: AiOutlineWarning,
        color:"#dc2626",
         yesterday: { icon: FaArrowTrendUp, text: '+12.5% vs yesterday' },
    },
    
 
]