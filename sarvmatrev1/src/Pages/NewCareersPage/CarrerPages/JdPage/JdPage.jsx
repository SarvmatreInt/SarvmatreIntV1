// minimum qualification 
//preffered qualification
// about the job
// responsibilities 
//skills

const JdPage = (curElem) => {
  const {id, jobName,location, duration, featured,createdAt } = curElem;
  return (
    <div>
      <div className="container">
        <div>
            <h1 className="text-7xl">{id}</h1>
            <h1 className="text-7xl">{jobName}</h1>
            <h1 className="text-7xl">{location}</h1>
            <h1 className="text-7xl">{duration}</h1>
            <h1 className="text-7xl">{featured}</h1>
            <h1 className="text-7xl">{createdAt}</h1>
        </div>
      </div>
    </div>
  )
}

export default JdPage
