export const setLocalStorage = (name:string,value:string) => {
localStorage.setItem(name,value)
}


export function getColor(){ 
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
  }

 export const handleFile = async (event:any,input:string) => {
    const formData = new FormData()
    formData.append('file', event)
    formData.append('upload_preset', 'sxzy4k1p')
    formData.append('folder', 'twf')


  try {
      const data = await fetch('https://api.cloudinary.com/v1_1/fakorede29/image/upload', {
          method: "POST",
          body: formData
        }).then(r => r.json())
       return data

      } catch (error) {
        console.log(error)
      }

  }