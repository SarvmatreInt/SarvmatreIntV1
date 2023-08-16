

const CheckBox = ({handleChange,  nri}) => {
  return (
    <>
        <h2 className="blue-text-gradient font-bold text-2xl mt-4 mb-2">Address</h2>
        <label htmlFor="residentType" className="flex gap-3 items-center">
            <input type="checkbox" name="residentType" id="residentType" onChange={handleChange} checked={nri}/>
            <span className="font-medium">I am outside India</span>
        </label>
    </>
  )
}

export default CheckBox