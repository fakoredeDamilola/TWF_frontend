import React from 'react'
import { CartesianGrid, LineChart, XAxis,YAxis,Tooltip,Legend,Line, ResponsiveContainer, PieChart, Pie } from 'recharts'

const Charts = ({data,type}:{data:any,type?:string}) => {

  const renderChart = (type?:string) => {
    switch (type) {
      case "line":
       return <ResponsiveContainer width="96%" height={300}> 
        <LineChart data={data}
       margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
       <CartesianGrid strokeDasharray="3 3" />
       <XAxis dataKey="name" />
       <YAxis />
       <Tooltip />
       <Legend />
       <Line type="monotone" dataKey="pv" stroke="#8884d8" />
       <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
     </LineChart>
   </ResponsiveContainer> 
   case "pie":
    return <ResponsiveContainer width="96%" height={300}>  
    <PieChart>
    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
  </PieChart>
  </ResponsiveContainer>
      default:
        break;
    }
  }
  return (
    <>
    {renderChart(type)}
    </>

     
  )
}

export default Charts