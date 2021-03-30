import './Container.css'
import Text from './Text'
import Select from './Select'

const Data = (props) => {
    
    const containerStyle = {
        display: props.submited == true? 'none' : 'block'
    }
    const msgStyle = {
        display: props.submited == true? 'block' : 'none'
    }
    return (
        <div className="Container">
            <div style={containerStyle}>
                {props.data.map(i => { 
                    if (i.fieldtype == 'text') return (<Text fieldinfo={i} valueChange={props.valueChange} />)
                    else if (i.fieldtype == 'select') return (<Select fieldinfo={i} valueChange={props.valueChange} />)
                    })}
                <button onClick={props.submit}>SUBMIT</button>
            </div>
            <div style={msgStyle}>
                Your Response Saved!
            </div>
        </div>
    )
}
export default Data