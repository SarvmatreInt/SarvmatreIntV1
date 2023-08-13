
const ResumeUpload = () => {
  return (
    <>
        <h2 className="blue-text-gradient font-bold text-2xl mt-4">Resume</h2>
        <h3 className="text-gray-500 font-bold text-2xl">Resume should be updated</h3>
        <label className="w-full flex flex-col mt-4">
            <input type="file" name="resume" id="resume" className="max-w-[130px]" />
            <span className="font-medium mt-1">
                (Max file size limit less than 2MB)
            </span>
        </label>
    </>
  )
}

export default ResumeUpload