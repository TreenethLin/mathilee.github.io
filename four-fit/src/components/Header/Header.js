import PropTypes from 'prop-types';

import Button from '../Button/Button';

const Header = ({ logo, title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <div className='logo'>
                <img src={logo} alt="logo"/>
                <h1 className='title'>{title}</h1>
            </div>
            <Button color={showAdd ? "#bb1818" : "#004aad" } text={showAdd ? "Close" : "New"} onClick={onAdd}/>
        </header>
  )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header