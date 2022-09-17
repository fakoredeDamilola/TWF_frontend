import { Icon } from "@chakra-ui/react"
import { BiEnvelope } from "react-icons/bi"
import { BsSearch } from "react-icons/bs"
import { AiOutlineBell } from "react-icons/ai"
import { RiArrowDropDownLine } from "react-icons/ri"
import { FaPencilAlt } from "react-icons/fa"
import { FiCopy } from "react-icons/fi"
import { MdDelete } from "react-icons/md"



export const MessageIcon = ({maL,width}:{maL?:string,width?:string}) => {
return (
    <Icon as={BiEnvelope} mt={maL ? maL:"0px"} fontSize={["20px","20px","24px"]} mx={maL ? "20px": "0"} color='gray.300' cursor="pointer" />
)
}

export const SearchIcon = () => {
    return (
        <Icon as={BsSearch} fontSize={["20px","20px","24px"]}
        color='gray.300' cursor="pointer"
        />
    )
}

export const NotificationIcon = ({maL,width,click}:{maL?:string,width?:string,click:()=>void}) => {
    return (
        <Icon as={AiOutlineBell} mt={maL ? maL:"0px"} fontSize={["20px","20px","24px"]} mx={maL ? "20px": "0"} color='black' cursor="pointer" onClick={click} />
    )
}
export const Dropdown = ({maL,width}:{maL?:string,width?:string}) => {
    return (
        <Icon as={RiArrowDropDownLine} mt={maL ? maL:"0px"} fontSize={["20px","20px","24px"]} color='gray.300' cursor="pointer" />
    )
}
export const PencilIcon = ({maL,width,click}:{maL?:string,width?:string,click:()=>void}) => {
    return (
        <Icon as={FaPencilAlt} mt={maL ? maL:"0px"} fontSize={width? width :["20px","20px","24px"]} color='brand.primary' onClick={click} cursor="pointer" />
    )
}
export const DeleteIcon = ({maL,width,click}:{maL?:string,width?:string,click:()=>void}) => {
    return (
        <Icon as={MdDelete} mt={maL ? maL:"0px"} fontSize={width? width :["20px","20px","24px"]} color='brand.primary' onClick={click} cursor="pointer" />
    )
}
export const CopyIcon = ({maL,width,onClick}:{maL?:string,width?:string,onClick?:()=>void}) => {
    return (
        <Icon as={FiCopy} mt={maL ? maL:"0px"} fontSize={["20px","20px","24px"]} color='gray.300' cursor="pointer" />
    )
}
