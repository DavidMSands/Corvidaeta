import React from 'react'
import { BarChart, Bar, LabelList, CartesianGrid, Tooltip, XAxis, YAxis} from 'recharts'

function BarComponent({isDark, data, keyData}) {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      layout='vertical'
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" hide  />
      <YAxis type="category" hide />
      <Tooltip />
      <Bar dataKey="count" fill="#ff7598bf">
      <LabelList dataKey={keyData}fill={isDark ? "#fff" : "#000"} position='insideLeft' />
      </Bar>
    </BarChart>
  
  )
}

export default BarComponent