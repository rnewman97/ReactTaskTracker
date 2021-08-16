import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({onClick, showAdd, title}) => {

   

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick = {onClick} showAdd = {showAdd}></Button> 
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// If wanted CSS in JS can make object and set style = {headingStyle}
// const headingStyle = {
//     color: "red",
//     backgroundColor: "black"
// }


export default Header
