import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
interface IDatePicker {
    startDate:Date |null,
    endDate:Date| null,
    setDateRange:React.Dispatch<React.SetStateAction<[Date | null, Date | null]>>
}



const CustomDatePicker = ({startDate,endDate,setDateRange}:IDatePicker) => {
    
  return (
      
        <DatePicker
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => {
            setDateRange(update);
          }}
          isClearable={true}
        />
      
  )
}

export default CustomDatePicker