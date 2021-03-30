import './Theme.css'

const Select = (props) => {
    props.valueChange(props.fieldinfo.fieldId, props.fieldinfo.options[0]);
    return (
        <div class="select-edit">
            <div class="txtLabel">{props.fieldinfo.fieldlabel}</div>
            <select class="coursein" onChange={event=>{console.log(event.target.value); props.valueChange(props.fieldinfo.fieldId, event.target.value)}}>
                {props.fieldinfo.options.map(((i) => (<option value={i}>{i}</option>)))}
            </select>
        </div>  
    )
}

export default Select