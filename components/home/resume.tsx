import React from 'react'
import ListRoadMap from '../roadMap/listRoadMap'

type Props = {}

const dataEducation = [
  {
    years:"2008 - 2014",
    title:'Nawaminthrachinuthit Suankularb Wittayalai Pathumthani School',
    detail:'Marjor : Math And science',
  },
  {
    years:"2014 - 2018",
    title:'Suan Sunandha Rajabhat University',
    detail:'Marjor : Business Computer',
  }
]

const dataWorks = [
  {
    years:"2019 - 2020",
    title:'Appbit Studio',
    detail:'Department : Frontend Development',
  },
  {
    years:"2020 - 2022",
    title:'Freelancer',
    detail:'Department : Frontend Development',
  },
  {
    years:"2022 - Present",
    title:'Kos Design',
    detail:'Department : Frontend Development',
  },
]
const Resume = (props: Props) => {
  return (
    <div className='bg-gray-100 py-20'>
      <div className="container">
        <div className='text-2xl font-bold text-center'>
          My Resume
        </div>

        <div className = "grid grid-cols-1 md:grid-cols-2 gap-5">
          <ListRoadMap title = {"Education"} data = {dataEducation}/>
          <ListRoadMap  title= {"Work Experience"} data = {dataWorks}/>
        </div>
      </div>
    </div>
  )
}

export default Resume