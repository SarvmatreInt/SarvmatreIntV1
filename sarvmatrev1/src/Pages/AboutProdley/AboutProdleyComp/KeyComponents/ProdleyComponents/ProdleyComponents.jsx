import { data } from "./data";


export const ProdleyComponents = () => {
  return (
    <>
    {/* This part displays the KeyComponents heading */}
      <p className="text-green uppercase mt-16 font-bold text-3xl pb-6 heading-border-for-about-page">key components
      </p>
      <div className="grid sm:grid-cols-2 gap-[3.13rem] my-8">
        {
          data.map((datum, index) => {
            return (
              <div className="max-w-[550px]" key={index}>
                {/* This part displays the sub headings of key components(ex: Order Management System,Integrations etc.,) */}
                <h3 className="font-medium text-green text-lg">{datum.h3}</h3>
                {
                  datum.content.map((slice, index) => {
                    return (
                      <div className="mt-[0.81rem]" key={index}>
                        {/* This part displays the features of the sub components heading of the Key Components(ex: key features, sales channels etc.,) */}
                        <h4 className="text-green font-medium">{slice.h4}</h4>
                        <ul>
                          {
                            // This part displays the features of each of the above mentioned heading.
                            slice.listFeatures.map((feature, index) => {
                              return (
                                <li key={index} className="text-[#555555]">
                                  {feature}
                                </li>
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
    </>
  )
}
