import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title}) => {

  const onClick = () => {
    console.log("clicked severally")
  }
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='hello' onClick = {onClick}/>
    </header>
  )
}
//const headingStyle = { 
 // color: "red", backgroundColor:"black"
//}
Header.defaultProps = { 
 title: "Task Tracer", 
}
Header.propTypes ={ 
  title: PropTypes.string.isRequired,
}

export default Header