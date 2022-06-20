import React from 'react'
import RoadMapItem from './roadMapItem'

type Props = {
  title: string;
  data: any;
}

const ListRoadMap = ({ title, data }: Props) => {
  return (
    <div>
      <div>
        <div className="text-xl font-bold text-center my-6">{title}</div>

        <div className="flex flex-col gap-5">
          {data && data.length ?
            data.map((item: any, key: string) => (
              <React.Fragment key={key}>
                <RoadMapItem
                  years={item.years}
                  title={item.title}
                  detail={item.detail}
                />
              </React.Fragment>
            ))
            : null}
        </div>
      </div>
    </div>
  )
}

export default ListRoadMap