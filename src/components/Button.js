import PropTypes from 'prop-types'

const Button = ({color, title, onClick, showAdd}) => {
    const altText = 'Close'
    return (
        <button className='btn' onClick = {onClick} style = {!showAdd ? {backgroundColor: color}: {backgroundColor : 'red'}}>{!showAdd ? title : altText}</button>
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
