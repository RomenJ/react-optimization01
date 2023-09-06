import {isEqual} from 'lodash'
import {memo} from 'react'

//Optimización con memo 

/*
const Li = memo(({ fullname }) => {

  console.log(`renderizando ${fullname}`)
  return (
    <li>
      {fullname}
    </li>
  )
})
*/
//Optimización con memo y chldren por parámetro
const Li = memo(({ children }) => {

  console.log(`renderizando ${children}`)
  return (
    <li>
      {children}
    </li>
  )
}, isEqual)

const MyList = ({ data }) => {
  console.log('renderizando lista')
  return (
    <ul>
      {data.map(x =>
        <Li
          key={x.name + x.lastname}>
              Name:{x.name} Lastname: {x.lastname}
        </Li>
      )}
    </ul>
  )
}


/*
const MyList = ({ data }) => {
  console.log('renderizando lista')
  return (
    <ul>
      {data.map(x =>
        <Li
          key={x.name + x.lastname}
          fullname={`${x.name} ${x.lastname}`}
        />
      )}
    </ul>
  )
}
*/
export default memo(MyList)
