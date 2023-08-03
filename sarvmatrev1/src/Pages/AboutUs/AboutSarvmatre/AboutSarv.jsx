import AboutDifference from "./AboutSarComp/AboutDifference/AboutDifference"
import AboutInto from "./AboutSarComp/AboutIntro/AboutInto"
import AboutValues from "./AboutSarComp/AboutValues/AboutValues"
import AboutMisVis from "./AboutSarComp/AboutmissVis/AboutMisVis"

const AboutSarv = () => {
  return (
    <div>
      <AboutInto/>
      <AboutMisVis/>
      <AboutDifference/>
      <AboutValues/>
      <div className="py-32">
        <div className="container">
            <div className="flex justify-center items-center ">
            <iframe width="960" height="515" className="rounded-xl" src="https://www.youtube.com/embed/TKd_e9KVLP4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSarv
