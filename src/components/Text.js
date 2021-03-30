import './Theme.css'

const Text = (props) => {
    return (
        <div>
            <div className="txtLabel">{props.fieldinfo.fieldlabel}</div>
            <input className="txt" placeholder={props.fieldinfo.fieldplaceholder} pattern="^[\p{L} ,.'-]+$" onfocus="" required onKeyUp={event=>{console.log(event.target.value); props.valueChange(props.fieldinfo.fieldId, event.target.value)}}/>
            <label text={props.fieldinfo.fieldrules[0].message} className="txtError"></label>
        </div>
    )
}

export default Text