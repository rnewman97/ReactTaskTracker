import PropTypes from 'prop-types'

const Button = ({color, title, onClick}) => {
    return (
        <button className='btn' onClick = {onClick} style = {{backgroundColor: color}}>{title}</button>
    )
}

Button.defaultProps = {
    title: 'Add',
    color: 'black',
}

Button.propTypes = {
    title: PropTypes.string.isRequired, 
    color: PropTypes.string.isRequired
}



export default Button
