import { Legend, RadialBarChart,RadialBar, Tooltip, PolarAngleAxis } from "recharts";

 
const data = [
	{
		name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8',
	},
	
];

const style = {
	top: -30,
	left: 0,
	lineHeight: '24px',
};


const RadialChart = () => {
        // Sample data
        const data = [
          { name: 'A', x: 1, fill: 'green' },
          { name: 'B', x: 2, fill: 'yellow' },
          // { name: 'C', x: 3, fill: 'aqua' },
          // { name: 'D', x: 4, fill: 'blue' },
          // { name: 'E', x: 5, fill: 'orange' },
          // { name: 'F', x: 6, fill: 'red' },
          // { name: 'G', x: 7, fill: 'black' },
          // { name: 'H', x: 8, fill: 'purple' },
          // { name: 'I', x: 9, fill: 'gray' },
        ];
      
        return (
          <RadialBarChart width={143} height={143} data={data}
          style={style}
          // cx={30 / 2}
          // cy={30 / 2}
          innerRadius={25}
          // outerRadius={18}
          barSize={4}
          startAngle={90}
          endAngle={-270}>
            <PolarAngleAxis
              type="number"
              domain={[0, 10]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              background
              dataKey="value"
              cornerRadius={30 / 2}
              fill="#0BEFF2"
            />
            <text
              x={143 / 2}
              y={143 / 2}
              textAnchor="middle"
              dominantBaseline="middle"
              className="progress-label"
            >
              89
            </text>
          </RadialBarChart>
        )
}

export default RadialChart