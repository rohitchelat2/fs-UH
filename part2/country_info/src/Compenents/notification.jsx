const Notification = (props) => {

   
    if (props.message === null) {
      return null
    }
    
    else if(props.code === 1){
    return (
      <div className='notification'>
        {props.message}
      </div>
    )}
    else if(props.code === 0){
        return (
          <div className='error'>
            {props.message}
          </div>
        )}
 
  }

  export default Notification