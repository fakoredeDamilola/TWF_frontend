export const handleInput = (
    name:string,
    value:string | string[],
    setErrorTable:React.Dispatch<React.SetStateAction<string[]>>,
    setState:React.Dispatch<React.SetStateAction<any>>
    ) => {
        console.log({name,value})
    setErrorTable([])
      setState((prevState:any) => {
          return {
              ...prevState,
              [name]:value
          }
      })
  }


 export const checkForError = (
    inputInfo:any,
    setErrorTable:React.Dispatch<React.SetStateAction<string[]>>,
    excludeInput:string[]
    ) =>{
    let value:keyof typeof inputInfo
      let arr:string[]=[]
    for( value in inputInfo){
      let str = inputInfo[value]
    if(str==="" && !excludeInput.includes(value)){
        arr.push(value)
      }
    }
      setErrorTable([...arr])
      return arr
  }

  export const clearInput = (
    inputInfo:any,
    setInput:React.Dispatch<React.SetStateAction<any>>
  ) => {
    let value:keyof typeof inputInfo
      for( value in inputInfo){
        inputInfo[value]=""
      }
      setInput(inputInfo)
  }