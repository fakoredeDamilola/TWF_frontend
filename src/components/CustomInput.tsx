import { Box, Button, Input, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

interface ICustomInput {
  handleFile?:(file:any) => void
  inputValue:string | number
  changeInput:(value:string,name:string) =>void
  input:string
  placeholder:string
  type:string
  name:string
  isError:boolean
  error?:string
}

const CustomInput = ({handleFile,inputValue,changeInput,input,placeholder,type,name,isError,error}:ICustomInput) => {
    const hiddenFileInput = React.useRef<any>();
    const handleClick = (event:any) => {
        hiddenFileInput.current.click();
      };

      // const handleChange = (event:any) => {
      //   const fileUploaded = event.target.files[0];
      //   console.log({fileUploaded})
      //   handleFile(fileUploaded);
      // };

      const renderInput = (input:string) =>{
        switch (input) {
          case "text":
            return <Box>
              <Input
            type={type}
            value={inputValue}
            mt="6px"
            border={isError ? "4px solid red" : "1px solid blue"}
            name={name}
            onChange={(event)=>changeInput(event.target.value, event.target.name)}
            placeholder={placeholder}
            />
            {isError && <Text color="red.200">
{error ?? "This input is wrong"}
            </Text> }
            </Box>
            
            case "textarea":
              return <Box>
                <Textarea 
                value={inputValue}
                mt="6px"
                border={isError ? "4px solid red" : "1px solid blue"}
                name={name}
                 onChange={(event)=>changeInput(event.target.value, event.target.name)}
                 placeholder={placeholder}

                />
                 {isError && <Text color="red.200">
{error ?? "This input is wrong"}
            </Text> }
              </Box>
        
          default:
            break;
        }
      }

  return (
    <>
    {/* <Box>
        <Button onClick={handleClick}>
        Upload a file
      </Button>
      <Input
      display="none"
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{display: 'none'}} 
      />
    </Box> */}
    {renderInput(input)}
    </>
    
    
  )
}

export default CustomInput