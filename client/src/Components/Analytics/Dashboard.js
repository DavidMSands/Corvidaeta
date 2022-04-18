import React, { useEffect, useState } from 'react'
import { AreaChart, BarChart, Bar, Legend, LabelList, Area, CartesianGrid, Tooltip, XAxis, YAxis} from 'recharts'
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import { HiStatusOnline } from 'react-icons/hi'
import '../../react_dates_overrides.css'



function Dashboard({ setShowNavBar, isDark }) {
  const [data1, setData1] = useState(false)
  const [data2, setData2] = useState()
  const [data3, setData3] = useState()
  const [data4, setData4] = useState()
  const [data5, setData5] = useState()
  const [projects, setProjects] = useState([])
  const [currentProject, setCurrentProject] = useState() 
  const [isSharp, setIsSharp] = useState(false)
  const [user, setUser] = useState(null)
  const [dateRange, setdateRange] = useState({
    startDate: null,
    endDate: null
  });
  const [focus, setFocus] = useState(null)
  const [avgMs, setAvgMs] = useState(false)
  const [sumMs, setSumMs] = useState(false)
  const [showVisitors, setShowVisitors] = useState(true)
  const [showViews, setShowViews] = useState(true)

  const { startDate, endDate } = dateRange;
  let oneWeekPast = new Date()
  let pastDate = oneWeekPast.getDate() - 7
  oneWeekPast.setDate(pastDate)

  const handleOnDateChange = (startDate, endDate) =>
  setdateRange(startDate, endDate);

  const pathParams = `${user?.id},${currentProject},${startDate === null ? convert(oneWeekPast) : convert(startDate?._d)},${endDate === null ? convert(new Date()) : convert(endDate?._d)}`
  console.log(data1)
  useEffect(() => {
    fetch('/me').then(r => {
      if (r.ok) {
        r.json()
        .then(user => setUser(() => user))
        .then(setShowNavBar(true))
      } else {
        r.json()
      }
    }) 
  }, [])

  function convert(str) {
    let date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2)
    return [date.getFullYear(), mnth, day].join("-")
  }

  function msToMinAndSec(ms) {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0)
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds
  }

  function sum(items, prop) {
    return items.reduce((a, b) => {
      return a + b[prop]
    }, 0)
  }

   
  useEffect(() => {
    fetch(`/pages_visted/${pathParams}`)
    .then(res => res.json())
    .then(stats => setData2(stats))
  }, [currentProject, dateRange])

  useEffect(() => {
    if(user) {
    fetch(`/unique_views/${pathParams}`)
    .then(res => res.json())
    .then(stats => setData1(stats))
  }
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
    if(user) {
      fetch(`/my_projects/${user?.id}`)
    .then(res => res.json())
    .then(projects => {
      setProjects(projects)
      setCurrentProject(projects[0]?.id)
    })
  }
  }, [user])

  useEffect(() => {
    fetch(`/average_time_on_site/${pathParams}`)
    .then(res => res.json())
    .then(mill => {
      setAvgMs(mill.avg)
      setSumMs(mill.total)
    })
  }, [currentProject, dateRange])

  

  return (
    <div id='dash-container' style={{ color: '#FFFFFF' }}>
      <div id="filter-container">
        <div>
          <label for="projects" id='proj-label'>My projects:</label>
          <select name="projects" id="projects" onChange={e => setCurrentProject(e.target.value)}>
            {projects?.map(project => (
              <option value={project?.id} >{project?.project_name}</option>
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
      <div id='overview-container'>
        <div>
          <p className='totals' onClick={() => setShowVisitors(!showVisitors)}>{data1 ? sum(data1, "unique") : 0}</p>
          <p>Total visitors {showVisitors ? <HiStatusOnline id='pink-status'/> : null}</p>
        </div>
        <div>
          <p className='totals' onClick={() => setShowViews(!showViews)}>{data1 ? sum(data1, "count") : 0}</p>
          <p>All page views {showViews ? <HiStatusOnline id='purple-status'/> : null}</p>
        </div>
        <div>
          <p className='totals'>{avgMs ? msToMinAndSec(avgMs) : '0:00'}</p>
          <p>Average time on site</p>
        </div>
        <div>
          <p className='totals'>{sumMs ? msToMinAndSec(sumMs) : '0:00'}</p>
          <p>Total time on site</p>
        </div>
      </div>
      <div id="area-chart">
        <h2>Views</h2>
        <AreaChart width={1000} height={400} data={data1}  onMouseOver={() => setIsSharp(!isSharp)} onMouseOut={() => setIsSharp(!isSharp)} >
          <Tooltip />
          {showViews ? <Area type={isSharp ? "" : "monotone"} dataKey="count" stroke="#bb86fc" fill='#bb86fc' /> : null }
          {showVisitors ? <Area type={isSharp ? "" : "monotone"} dataKey="unique" stroke="#fa6c90" fill='#ff7598bf' /> : null }
          <CartesianGrid stroke={isDark ? "#fff" : "#000"} strokeDasharray="3 3"  />
          <XAxis dataKey="name" stroke={isDark ? "#fff" : "#000"} />
          <Legend />
          <YAxis stroke={isDark ? "#fff" : "#000"} hide />
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
                    <LabelList dataKey="page" fill={isDark ? "#fff" : "#000"}  position='insideLeft' />
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
                    <LabelList dataKey="is_mobile" fill={isDark ? "#fff" : "#000"} position='insideLeft'/>
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
                <LabelList dataKey="country" fill={isDark ? "#fff" : "#000"} position='insideLeft'/>
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
                <LabelList dataKey="referral" fill={isDark ? "#fff" : "#000"} position='insideLeft' />
                </Bar>
              </BarChart>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard