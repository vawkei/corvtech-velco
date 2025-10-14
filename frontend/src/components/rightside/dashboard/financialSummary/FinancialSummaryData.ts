import { FaNairaSign } from 'react-icons/fa6';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { AiOutlineWarning } from 'react-icons/ai';
import { TbClockDollar } from 'react-icons/tb';

export const FinancialSummaryData = [
    {
        heading: 'Total Collections',
        sum: "847.2M",
        // icon:"icon",
        icon: FaNairaSign ,
         yesterday: { icon: FaArrowTrendUp, text: '+12.5% vs yesterday' },
    },
    {
        heading: 'Pending Remittances',
        sum: "156.8M",
        icon: TbClockDollar,
         yesterday: { icon: FaArrowTrendUp, text: '+12.5% vs yesterday' },
    },
    {
        heading: "Average Daily Payments",
        sum: "78M",
        icon: FaArrowTrendUp ,
         yesterday: { icon: FaArrowTrendUp, text: '+12.5% vs yesterday' },
    },
    {
        heading: 'Overdue Remittances',
        sum: "23.7M",
        icon: AiOutlineWarning,
         yesterday: { icon: FaArrowTrendUp, text: '+12.5% vs yesterday' },
    },
    
 
]