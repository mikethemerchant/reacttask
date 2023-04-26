import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  return (
    <header className='header'>
        <h1 >{title}</h1>
        <Button color='green' text='remove'/>
        <Button color='red' text='add'/>
        <Button color='blue' text='update'/>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker Default',
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header