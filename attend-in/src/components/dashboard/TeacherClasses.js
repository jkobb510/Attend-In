import React from 'react'
import { Link } from 'react-router-dom'

const TeacherClasses = ({courses}) => {
  console.log(courses)

  return (
    <div className="project-list section">
      { courses && courses.map(course => {
        console.log(course)
        return (
          <Link to={'/courses/' + course.id} key={course.id}>
            asd
          </Link>
        )
      })}
    </div>
  )
}

export default TeacherClasses

