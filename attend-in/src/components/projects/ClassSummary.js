import React from 'react'
import moment from 'moment'

const ClassSummary = ({course}) => {
  console.log('12313',course)
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title "></span>
        <p>{course.courseName}</p>
      </div>
    </div>
  )
}

export default ClassSummary
