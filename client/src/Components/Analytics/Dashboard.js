import React, { useEffect, useState } from 'react'
import { AreaChart, BarChart, Bar, Legend, LabelList, Area, CartesianGrid, Tooltip, XAxis, YAxis} from 'recharts'
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import '../../react_dates_overrides.css'



function Dashboard({user}) {
  const [data1, setData1] = useState()
  const [data2, setData2] = useState()
  const [data3, setData3] = useState()
  const [data4, setData4] = useState()
  const [data5, setData5] = useState()
  const [projects, setProjects] = useState([])
  const [currentProject, setCurrentProject] = useState() 
  const [isSharp, setIsSharp] = useState(false)
  const [dateRange, setdateRange] = useState({
    startDate: null,
    endDate: null
  });
  const [focus, setFocus] = useState(null);

  const { startDate, endDate } = dateRange;
  let oneWeekPast = new Date()
  let pastDate = oneWeekPast.getDate() - 7
  oneWeekPast.setDate(pastDate)

  const handleOnDateChange = (startDate, endDate) =>
  setdateRange(startDate, endDate);

  const pathParams = `${user.id},${currentProject},${startDate === null ? convert(oneWeekPast) : convert(startDate?._d)},${endDate === null ? convert(new Date()) : convert(endDate?._d)}`

  function convert(str) {
    let date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }
   
  useEffect(() => {
    fetch(`pages_visted/${pathParams}`)
    .then(res => res.json())
    .then(stats => setData2(stats))
  }, [currentProject, dateRange])

  useEffect(() => {
    fetch(`/unique_views/${pathParams}`)
    .then(res => res.json())
    .then(stats => setData1(stats))
  }, [currentProject, dateRange])

  useEffect(() => {
    fetch(`/device/${pathParams}`)
    .then(res => res.json())
    .then(stats => setData3(stats))
  }, [currentProject, dateRange])

  useEffect(() => {
    fetch(`/countries/${pathParams}`)
    .then(res => res.json())
    .then(stats => setData4(stats))
  }, [currentProject, dateRange])

  useEffect(() => {
    fetch(`/referral_site/${pathParams}`)
    .then(res => res.json())
    .then(stats => setData5(stats))
  }, [currentProject, dateRange])

  useEffect(() => {
    fetch(`/my_projects/${user?.id}`)
    .then(res => res.json())
    .then(projects => {
      setProjects(projects)
      setCurrentProject(projects[0].id)
    })
  }, [])


  return (
    <div id='dash-container' style={{ color: '#FFFFFF' }}>
      <div id="filter-container">
        <div>
          <label for="projects" id='proj-label'>My projects:</label>
          <select name="projects" id="projects" onChange={e => setCurrentProject(e.target.value)}>
            {projects.map(project => (
              <option value={project?.id} >{project.project_name}</option>
            ))}
          </select>
        </div>
        <DateRangePicker
          startDatePlaceholderText="Start"
          startDate={startDate}
          onDatesChange={handleOnDateChange}
          endDatePlaceholderText="End"
          endDate={endDate}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
          focusedInput={focus}
          onFocusChange={focus => setFocus(focus)}
          startDateId="startDateMookh"
          endDateId="endDateMookh"
        />
      </div>
      <div id="area-chart">
        <h2>Views</h2>
        <AreaChart width={1000} height={400} data={data1}  onMouseOver={() => setIsSharp(!isSharp)} onMouseOut={() => setIsSharp(!isSharp)} >
          <Tooltip />
          <Area type={isSharp ? "" : "monotone"} dataKey="count" stroke="#bb86fc" fill='#bb86fc' />
          <Area type={isSharp ? "" : "monotone"} dataKey="unique" stroke="#fa6c90" fill='#ff7598bf'   />
          <CartesianGrid stroke="#fff" strokeDasharray="3 3"  />
          <XAxis dataKey="name" stroke="#fff" />
          <Legend />
          <YAxis stroke="#fff"  />
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
                  <YAxis type="category" hide  />
                  <Tooltip />
                  <Bar dataKey="count" fill="#ff7598bf">
                    <LabelList dataKey="page" fill="#fff"  position='insideLeft' />
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
                  <YAxis type="category" hide />
                  <Tooltip />
                  <Bar dataKey="count" fill="#ff7598bf">
                    <LabelList dataKey="is_mobile" fill="#fff" position='insideLeft'/>
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
                <YAxis type="category" hide />
                <Tooltip />
                <Bar dataKey="count" fill="#ff7598bf">
                <LabelList dataKey="country" fill="#fff" position='insideLeft'/>
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
                <XAxis type="number" hide  />
                <YAxis type="category" hide />
                <Tooltip />
                <Bar dataKey="count" fill="#ff7598bf">
                <LabelList dataKey="referral" fill="#fff" position='insideLeft' />
                </Bar>
              </BarChart>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard