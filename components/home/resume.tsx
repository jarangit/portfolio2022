import React from 'react'
import ListRoadMap from '../roadMap/listRoadMap'

type Props = {}

const dataEducation = [
  {
    years:"2008 - 2014",
    title:'Nawaminthrachinuthit Suankularb Wittayalai Pathumthani School',
    detail:'Marjor : Math And science',
    description:[]
  },
  {
    years:"2014 - 2018",
    title:'Suan Sunandha Rajabhat University',
    detail:'Marjor : Business Computer',
    description:[]
  }
]

const dataWorks = [
  {
    years:"2019 - 2020",
    title:'Appbit Studio',
    detail:'Department : Frontend Development',
    description:[
      `Develop and maintain WordPress websites`,
      `Create and customize WordPress themes and plugins`,
      `Optimize WordPress sites for performance and speed`,
      `Implement SEO best practices`,
      `Proficiency with front-end web technologies such as HTML, CSS, and JavaScript`,
      `Experience with Git and version control`,
    ]
  },
  {
    years:"2020 - 2022",
    title:'Freelancer',
    detail:'Department : Frontend Development',
    description:[]
  },
  {
    years:"2022 - Present",
    title:'Kos Design',
    detail:'Department : Frontend Development',
    description:[
      `Develop and maintain web applications using React.js, Redux, TypeScript, TailwindCSS, Styled-Components, and Next.js`,
      `Develop and maintain web applications using React.js`,
      `Collaborate with the design team to create beautiful and functional user interfaces`,
      `Implement responsive design and ensure cross-browser compatibility`,
      `Optimize web applications for performance and speed`,
      `Implement SEO best practices`,
      `Proficiency with front-end web technologies such as HTML, CSS, and JavaScript`,
      `Experience with Git and version control`,
    ]
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