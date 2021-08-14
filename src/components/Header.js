import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

    const onClick = () => {
        console.log('Clicked!')
    }

    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button onClick = {onClick}></Button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Weekly Planner'
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
