import './Container.css'

const Header = (props) => {
    return ( 
        <header className="Container">
            <div style={headerFormName}>{props.data.formName}</div>
            <div style={headerFormDesc}>{props.data.formDesc}</div>
        </header>
    )
}
Header.defaultProps = {
    data: {formName: 'test form', formDesc: 'this is a test form, only to test'}
}

const headerFormName = {
    fontSize: '20pt',
    textTransform: 'capitalize'
}

const headerFormDesc = {
    fontSize: '15pt',
    color: '#bbbbbb'
}

export default Header