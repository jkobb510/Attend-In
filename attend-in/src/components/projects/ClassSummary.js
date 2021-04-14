import React from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'
// import { checkIn } from '../../store/actions/courseActions'


const ClassSummary = ({course}) => {

  
  console.log('this.props',course)
  console.log('12313',course)

  var M = ''
  var T = ''
  var W = ''
  var TH = ''
  var F = ''

  if( !! course && course.length > 0 ) {

  course.courseTime.forEach(element => {
    if( element.Day == 'M' ) M = 'active'
    if( element.Day == 'T' ) T = 'active'
    if( element.Day == 'W' ) W = 'active'
    if( element.Day == 'TH' ) TH = 'active'
    if( element.Day == 'F' ) F = 'active'
  });

  if( !! course && course.isAttnBeingTaken  )
    return (
      <a href={ './attendance/' + course.id} className="attnBeingTaken">
          <div  className={ "card z-depth-0 project-summary border-radius-20 " + course.isAttnBeingTaken}>
            <div className="cardBackground border-radius-20-top-only">
              <p></p>
            </div>
            <div className="card-content grey-text text-darken-3">
              <span className="card-title "></span>
                <p className="courseName" >{course.courseName}</p>
                <p className="courseAbbr" >{course.abbr}</p>
            </div>
            <div>
              <div className="day-of-week">
                <div className={M}>Mo</div>
                <div className={T}>Tu</div>
                <div className={W}>We</div>
                <div className={TH}>Th</div>
                <div className={F}>Fr</div>
              </div>
            </div>
          </div>
      </a>
    )
    else 
      return (
          <div  className={ "card z-depth-0 project-summary border-radius-20 " + course.isAttnBeingTaken}>
            <div className="cardBackground border-radius-20-top-only">
              <p></p>
            </div>
            <div className="card-content grey-text text-darken-3">
              <span className="card-title "></span>
                <p className="courseName" >{course.courseName}</p>
                <p className="courseAbbr" >{course.abbr}</p>
            </div>
            <div>
              <div className="day-of-week">
                <div className={M}>Mo</div>
                <div className={T}>Tu</div>
                <div className={W}>We</div>
                <div className={TH}>Th</div>
                <div className={F}>Fr</div>
              </div>
            </div>
          </div>
      )
  }

   else return ( <div></div> )
}

const boogey = (x) => {
 console.log('asdasdasdasdasasdasdsadasd', x)
}

export default compose(
  firestoreConnect([{
    collection: 'attendance'
  }])
)( ClassSummary)