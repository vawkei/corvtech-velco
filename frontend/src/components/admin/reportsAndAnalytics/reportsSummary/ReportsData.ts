import { FaArrowTrendUp } from "react-icons/fa6";
import { TbCurrencyNaira } from "react-icons/tb";
import { BiCalculator } from "react-icons/bi";
import { LuLeaf } from "react-icons/lu";
// import { HiOutlineCalculator } from 'react-icons/hi2';
import { WiMoonAltFull } from "react-icons/wi";

export const ReportAndAnalyticsData = [
  {
    heading: "Total Emission Revenue",
    sum: "4.8B",
    icon: LuLeaf,
    color: "#16a34a",
    lastmonth: {
      icon: FaArrowTrendUp,
      value: "+12%",
      label: "vs last month",
      valueColor: "success",
    },
  },
  {
    heading: "NESREA",
    sum: "4.6B/4.8B",
    icon: BiCalculator,
    color: "#16a34a",
    lastmonth: {
      icon: WiMoonAltFull,
      value: "98.5%",
      label: "fulfilled",
      valueColor: "success",
    },
  },
  {
    heading: "Total Remittance Sent",
    sum: "4.5B",
    icon: TbCurrencyNaira,
    color: "#16a34a",
    lastmonth: {
      icon: FaArrowTrendUp,
      value: "+7.5%",
      label: "vs last month",
      valueColor: "success",
    },
  },
  {
    heading: "Overdue Remittances",
    sum: "120M",
    icon: FaArrowTrendUp,
    color: "#16a34a",
    lastmonth: {
      icon: WiMoonAltFull,
      value: "Requires follow-up",
      label:"",
      valueColor: "error",
    },
  },
];
