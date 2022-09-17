import { Box, Flex, Img, Link, Text } from "@chakra-ui/react";

import { IoLogoTwitter,IoLogoDiscord,IoLogoGithub } from "react-icons/io5";
import { FaTelegramPlane,FaFacebookF,FaMediumM,FaLinkedinIn  } from "react-icons/fa"
import Logo from "../../../../components/Logo";

export function FooterSocialMedia (){
    const sociaLinks = [
        { name:"facebook", link:"facebook.com", icon:<FaFacebookF color="#000C15" /> },
        { name:"twitter", link:"https://twitter.com/rigelprotocol", icon:<IoLogoTwitter color="#000C15"/> },
        { name:"discord", link:"https://discord.com/invite/j86NH95GDD", icon:<IoLogoDiscord color="#000C15" /> },
        { name:"medium", link:"https://medium.com/rigelprotocol", icon:<FaMediumM color="#000C15" /> },
        { name:"telegram", link:"https://www.t.me/rigelprotocol", icon:<FaTelegramPlane color="#000C15" /> },
        { name:"github", link:"https://github.com/rigelprotocol", icon:<IoLogoGithub color="#000C15" /> },
        { name:"linkedin", link:"https://www.linkedin.com/company/rigelprotocol", icon:<FaLinkedinIn color="#000C15" />},
    ]
    return (
        <Box color="white">
           <Logo />
           <Text my="20px" width={["95%","95%","280px"]}>The5kShop is an independent online retailer offering variety of products ranging from branded products, stock from other retailers to its own label ‘T5S’.</Text>
           <Flex>
{sociaLinks.map((social,index)=>{
    return (
    <Flex justifyContent="center" alignItems="center" key={index} width="24px" height="24px" background="#FFF" mr={3} borderRadius="50%" >
        <Link href={social.link} isExternal>{social.icon}</Link>
        
    </Flex>)
})}
           </Flex>
        </Box>
    )
}