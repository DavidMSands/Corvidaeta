import React, { useEffect, useState } from 'react'
import { AreaChart, BarChart, Bar, Legend, LabelList, Label, ResponsiveContainer, Cell, Area, CartesianGrid, Tooltip, XAxis, YAxis} from 'recharts'


function Dashboard({user}) {
  const [data1, setData1] = useState()
  const [data2, setData2] = useState()
  const [data3, setData3] = useState()
  const [data4, setData4] = useState()
  const [data5, setData5] = useState()
  const [projects, setProjects] = useState([])
  const [currentProject, setCurrentProject] = useState()  
  useEffect(() => {
    fetch(`pages_visted/${user.id},${currentProject}`)
    .then(res => res.json())
    .then(stats => setData2(stats))
  }, [currentProject])

  console.log(projects)

  useEffect(() => {
    fetch(`/unique_views/${user.id},${currentProject}`)
    .then(res => res.json())
    .then(stats => setData1(stats))
  }, [currentProject])

  useEffect(() => {
    fetch(`/device/${user.id},${currentProject}`)
    .then(res => res.json())
    .then(stats => setData3(stats))
  }, [currentProject])

  useEffect(() => {
    fetch(`/countries/${user.id},${currentProject}`)
    .then(res => res.json())
    .then(stats => setData4(stats))
  }, [currentProject])

  useEffect(() => {
    fetch(`/referral_site/${user.id},${currentProject}`)
    .then(res => res.json())
    .then(stats => setData5(stats))
  }, [currentProject])

  useEffect(() => {
    fetch(`/my_projects/${user?.id}`)
    .then(res => res.json())
    .then(projects => {
      setProjects(projects)
      setCurrentProject(projects[0].id)
    })
  }, [])

  // const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page b', uv: 500, pv: 2300, amt: 2300}, {name: 'Page b', uv: 200, pv: 2300, amt: 2300}];
  return (
    <div id='dash-container' style={{ color: '#FFFFFF' }}>
      <label for="cars">My projects:</label>
      <select name="cars" id="cars" onChange={e => setCurrentProject(e.target.value)}>
        {projects.map(project => (
          <option value={project?.id} >{project.project_name}</option>
        ))}
      </select>
      <div id="area-chart">
        <h2>Views</h2>
        <AreaChart width={1000} height={400} data={data1} >
          <Tooltip />
          <Area type="" dataKey="count" stroke="#bb86fc" fill='#bb86fc' />
          <Area type="" dataKey="unique" stroke="#fa6c90" fill='#ff7598bf' />
          <CartesianGrid stroke="#fff" strokeDasharray="3 3"  />
          <XAxis dataKey="name" stroke="#fff" />
          <Legend />
          <YAxis stroke="#fff" hide />
        </AreaChart>
      </div>
      <div id="bar-container">
        <div className="split">
          <div className='bar-container'>
            <h2>Pages</h2>
            <div className="bar">
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
                  <YAxis type="category"  width={80}  dataKey="page" stroke="#fff" style={{ color: '#FFFFFF' }}/>
                  <Tooltip />
                  <Bar type='monotone' dataKey="count" fill="#ff7598bf">
                    {/* <LabelList dataKey="page" fill="#fff" className='label-list'/> */}
                  </Bar>
                </BarChart>
            </div>
          </div>
            <div className='bar-container'>
            <h2>Mobile</h2>
              <div class="bar">
                <BarChart
                  width={500}
                  height={300}
                  data={data3}
                  layout='vertical'
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" hide />
                  <YAxis type="category"  width={50} className='bar-y' margin={{ right: 200 }} stroke="#fff" dataKey="is_mobile"/>
                  <Tooltip />
                  <Bar type='monotone' dataKey="count" fill="#ff7598bf">
                    {/* <LabelList dataKey="is_mobile" fill="#fff"/> */}
                  </Bar>
                </BarChart>
              </div>
            </div>
        </div>
        <div class="split">
          <div className='bar-container'>
            <h2>Countries</h2>
            <BarChart
                width={500}
                height={300}
                data={data4}
                layout='vertical'
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" hide />
                <YAxis type="category" width={90}  stroke="#fff" dataKey="country"/>
                <Tooltip />
                <Bar type='monotone' dataKey="count" fill="#ff7598bf">
                {/* <LabelList dataKey="country" fill="#fff"/> */}
                </Bar>
              </BarChart>
          </div>
            <div className='bar-container'>
            <h2>Referral site</h2>
              <BarChart
                width={500}
                height={300}
                data={data5}
                layout='vertical'
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" hide stroke="#fff" />
                <YAxis type="category"  width={150} padding={{ right: 200 }} stroke="#fff" dataKey="referral"/>
                <Tooltip />
                <Bar type='monotone' dataKey="count" fill="#ff7598bf">
                {/* <LabelList dataKey="referral" fill="#fff"/> */}
                </Bar>
              </BarChart>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard