const Button = {
        baseStyle: {
          borderRadius: "none",
        },
        sizes: {
          small: {
            px: 5,
            h: "50px",
            fontSize: "20px",
          },
          medium: {
            px: 7,
            h: "60px",
            fontSize: "25px",
          },
          large: {
            px: 8,
            h: "70px",
            fontSize: "30px",
            borderRadius: "10px",
          },
        },
        variants: {
          primary: {
            borderRadius: "6px",
            background:"brand.primary",
            color:"white",
            border:"0"
          },
          tranparent:{
            bg:"transparent",
            borderRadius:"6px"
          },
          secondary: {
            bg: "secondary",
            color: "#fff",
          },
          ghost: {
            bg: "transparent",
            border: "1px solid red",
          },
          primaryGhost: {
            bg: "transparent",
            border: "1px solid",
            borderColor: "primary",
          },
          secondaryGhost: {
            bg: "transparent",
            border: "1px solid",
            borderColor: "secondary",
            _hover: {
              color: "#fff",
              bg: "#BB1415",
            },
          },
        },
      }
  
  export default Button;