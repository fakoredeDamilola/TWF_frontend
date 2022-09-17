import { Box,Heading, Text } from "@chakra-ui/react"
import { useCallback, useState } from "react";
import Slider from "react-slick";
import { useTransition } from "react-spring";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    const mod = (n: any, m: any) => ((n % m) + m) % m
    const [index, setIndex] = useState(0);
    const [activeIndex,setActiveIndex] = useState(0);
    const [prevIndex,setPrevIndex] = useState(0);
    const [direction,setDirection] = useState("");
    const testimonies = [
        {
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quos autem distinctio earum unde nemo tempore repudiandae vero quasi a qui facere dolore alias maiores consectetur, esse accusantium nisi nobis.",
            tailor:"Damilola",
            location:"Lagos,Nigeria",
            name:"yeyhehhe"
        },
        {
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quos autem distinctio earum unde nemo tempore repudiandae vero quasi a qui facere dolore alias maiores consectetur, esse accusantium nisi nobis.",
            tailor:"Damilola",
            location:"Lagos,Nigeria",
            name:"yeyhehhe"
        },
        {
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quos autem distinctio earum unde nemo tempore repudiandae vero quasi a qui facere dolore alias maiores consectetur, esse accusantium nisi nobis.",
            tailor:"Damilola",
            location:"Lagos,Nigeria",
            name:"yeyhehhe"
        },
        {
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quos autem distinctio earum unde nemo tempore repudiandae vero quasi a qui facere dolore alias maiores consectetur, esse accusantium nisi nobis.",
            tailor:"Damilola",
            location:"Lagos,Nigeria",
            name:"yeyhehhe"
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const handlePrev = useCallback(() => {
        setIndex(state => mod(state - 1, testimonies.length));
      }, [setIndex]);
    
      const handleNext = useCallback(() => {
        setIndex(state => mod(state + 1, testimonies.length));
      }, [setIndex]);
    //    const transitions = useTransition(
    //     [index],(item:number)=>item,{
    //         from :{
                
    //         }
    //     }
    //    )
    // ([index], (item: number) => item, {
    //     from: { opacity: 0, transform: 'translateX(-420px)' },
    //     enter: { opacity: 1, transform: 'translateX(0px)' },
    //     leave: { opacity: 0, transform: 'translateX(420px)' }
    //   });
  return (
    // <Box>
    //    <Heading as="h1">What our shoppers are saying about us</Heading> 
    //    {testimonies.map((item,index)=>(
    //     <Box>
    //         <Text>{item.tailor}</Text>
    //         <Text>{item.text}</Text>
    //         <Text>{item.name} {item.location}</Text>

    //     </Box>
    //     ))

    //    }
    // </Box>
    <div>
    <h2>ehhehhe</h2>
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  </div>
    
  )
}

export default Testimonials