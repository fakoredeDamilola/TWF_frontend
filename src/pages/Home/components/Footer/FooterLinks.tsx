import { Box, Flex, Grid, Link, useMediaQuery } from "@chakra-ui/react";

export function FooterLinks (){
    
 const [isMobileDevice] = useMediaQuery('(max-width: 750px)');
    const footerLinks = {
        "Products" : [
            {name:"SmartSwap", link:"https://smartswap.rigelprotocol.com/"},
            {name:"Gift Dapp",link:"https://gift.rigelprotocol.com/"},
            {name:"Leverage Exchange",link:"#"},
            {name:"P2P",link:"/"},
            {name:"LaunchPad",link:"https://launchpad.rigelprotocol.com/"}
        ],
        "Company":[
            {name:"About us",link:"https://www.rigelprotocol.com/about"},
            {name:"Road Map",link:"https://www.rigelprotocol.com/#roadMaps"},
            {name:"Partners",link:"https://www.rigelprotocol.com/#partners"},
            {name:"Press Resources",link:"https://www.rigelprotocol.com/press"},
        ],
        "Support":[
            {name:"FAQs",link:"https://www.rigelprotocol.com/faqs"},
            {name:"Blog",link:"https://medium.com/rigelprotocol"},
        ],
    }
    return (
        <Box>
           
        <Grid templateColumns={isMobileDevice ? "repeat(2,1fr)" : "repeat(3,1fr)"} mt={3}>
        <Box>
        <Box color="white" fontSize="18px" fontWeight="800">Contact us</Box>
            {footerLinks["Products"].map((obj,index)=>{
                return <Box color="#fff" my={3} key={index} >
                    <Link isExternal href={obj.link} fontSize="16px">{obj.name}</Link>
                    </Box>
            }
            )}
        </Box>
        <Box>
        <Box color="white" fontSize="18px" fontWeight="800">help & support</Box>
         
            {footerLinks["Company"].map((obj,index)=>{
                return <Box color="#fff" my={3} key={index}  fontSize="16px">
                    <Link isExternal href={obj.link} >{obj.name}</Link>
                    </Box>
            }
            )}
        </Box>
        <Box>
        <Box color="white" fontSize="18px" fontWeight="800">Subscribe</Box>
         
            {footerLinks["Support"].map((obj,index)=>{
                return <Box color="#fff" my={3} key={index}  fontSize="16px">
                    <Link isExternal href={obj.link} >{obj.name}</Link>
                    </Box>
            }
            )}
        </Box>
        </Grid>
        </Box>
        
    )
}