
const SchedMeet = () => {
  return (
    <div>
      <div className="container">
        <h1 className="text-4xl py-10 font-bold" >Schedule and Meet</h1>
        <div>
            <div>
            <form action="">
            <div className="flex text-3xl font-medium pb-4">
                <h1>Hey, my name is </h1>
                <input type="text" className="placeholder:text-center border-b-2 border-black mx-3"  placeholder="Type here " />
                <h1>and I'm looking for</h1>
                <input type="email" className="placeholder:text-center border-b-2 border-black mx-3" placeholder="Select dropdown "  />
            </div>
                <div className="flex text-3xl font-medium pb-5">
                    <h1>Get in touch with me at</h1>
                    <input type="email"  className="placeholder:text-center border-b-2 border-black mx-3" placeholder="Your Email ID here "/> 
                    <h1>!</h1>
                </div>
                <div>
                    <button className="button-17">Submit</button>
                </div>
            </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SchedMeet
