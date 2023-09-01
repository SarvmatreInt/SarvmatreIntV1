import { data } from "./data";


export const ProdleyComponents = () => {
  return (
    <div className="py-10">
    <div className="container">
    {/* This part displays the KeyComponents heading */}
      <p className="text-green uppercase mt-16 font-bold text-4xl pb-6 heading-border-for-about-page">key components
      </p>
      <div className="grid sm:grid-cols-2 gap-[3.13rem] my-8">
        {
          data.map((datum, index) => {
            return (
              <div className="max-w-[550px]" key={index}>
                {/* This part displays the sub headings of key components(ex: Order Management System,Integrations etc.,) */}
                <h3 className="text-green text-2xl font-black text-[#68964C]">{datum.h3}</h3>
                {
                  datum.content.map((slice, index) => {
                    return (
                      <div className="mt-[0.81rem]" key={index}>
                        {/* This part displays the features of the sub components heading of the Key Components(ex: key features, sales channels etc.,) */}
                        <h4 className="text-green font-medium text-[#BFCC54] text-xl">{slice.h4}</h4>
                        <ul>
                          {
                            // This part displays the features of each of the above mentioned heading.
                            slice.listFeatures.map((feature, index) => {
                              return (
                                <div key={index} className="pl-[20px]">
                                <li  type="disc" className="text-[#555555]">
                                  {feature}
                                </li>
                                </div>
                              )
                            })
                          }
                        </ul>
                      </div>
                    )
                  })
                }
              </div>
          )})
        }
      </div>
    </div>
    </div>
  )
}
