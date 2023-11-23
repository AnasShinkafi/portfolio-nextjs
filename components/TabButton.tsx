import {motion} from "framer-motion"

const variants = {
  default: { width: 0},
  active: {width: "calc(100% - 0.75rem)"}
}

type Props = {
    active: boolean;
    selectTab: any;
    children: any;
}

const TabButton = ({ active, selectTab, children}: Props) => {
    const buttonClasses = active ? "text-white" : 'text-[#ADB7BE] border'
  return (
    <button onClick={selectTab}>
        <p className={` mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
        </p>
        <motion.div animate={active ? "active" : "default"} variants={variants} className=" h-1 bg-primary-500 mt-2 mr-3"></motion.div>
    </button>
  )
}

export default TabButton 