import React from 'react'

export default function Alert(props) {
  const capitalize = (word)=> {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    <div style={{height:'50px'}}>
      {/*  Below we have use '&&' operator which requires both the statements to be true
     At the beginnig props.alert is null which makes the first statement false and prohibit to execute
     It is similar to if statament telling to execute second statement only if 'alert' is not null */}
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>} 
    {/* Enclosed inside curly bracket for props.alert and div component */}
    </div>
    
    )
}
