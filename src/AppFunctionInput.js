const AppFunctionInput = ({ name, changeName }) => {

  return (
    <div className='input_main'>
      <input className='app_input' name="name" value={name} onChange={e => changeName(e)} />
    </div>
  )

}

export default AppFunctionInput;