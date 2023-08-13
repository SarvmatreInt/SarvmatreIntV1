

const CorporateIdentity = ({handleChange, formData}) => {
  return (
    <>
        <div className="mb-[6px] max-w-[300px]">
            <div>
                <label
                htmlFor="newContact_identity"
                className="text-xl font-medium"
                >
                CORPORATE IDENTITY
                </label>
            </div>
            <select
                className="w-full p-[6.5px] focus:outline-0 bg-inherit"
                style={{ borderBottom: "2px solid #9CA3AF" }}
                // value={data["identity"]}
                onChange={handleChange}
                name="identity"
            >
                <option value="individual">Individual</option>
                <option value="group">Group</option>
                <option value="company">Company</option>
            </select>
        </div>
    </>
  )
}

export default CorporateIdentity