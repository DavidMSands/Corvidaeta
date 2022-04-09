import React from 'react'

function Bar() {
  return (
    <BarChart
          width={500}
          height={300}
          data={data2}
          layout='vertical'
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" hide />
          <YAxis type="category" width={150} padding={{ right: 200 }} dataKey="page"/>
          <Tooltip />
          <Legend />
          <Bar type='monotone' dataKey="count" fill="#ff7597" />
      </BarChart>
  )
}

export default Bar