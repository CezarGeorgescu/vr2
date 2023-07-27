import React from 'react'

const SecChoose = (props) => {
    return (
        <section className="position-relative">
            <div className="container">
                <div className={"mb-5 " + (props.status == "center" ? "text-center" : "")}>
                    <p className="medium font__size--16 text__16-1024 text-uppercase text__gr-default">WHY CHOOSE US</p>
                    <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-3">Affordable VR Services for Everyone</h2>
                    <p className="light font__size--16 text__16-1024 color__gray-1">At VRNas, we believe that everyone should have access to the benefits of VR. That's <br /> why we offer a range of pricing options to meet the needs of any budget.</p>
                </div>

                <div className="position-relative">
                    <img src="./../images/dfsdfdsf.png" className="images__ornamen-choose-bg" alt="" />

                    <div className="wrapper__choose-data position-relative z-2">
                        <div className="wrapper__tag-price text-center">
                            <p className="normal font__size--16 text__16-1024 color__gray-1 mb-0">Start from</p>
                            <h2 className="semi-bold font__size--60">$99</h2>
                            <a href="#!" className="bold font__size--14 text__14-1024 btn__action-more color__white ls__1 text-uppercase mb-3">get started</a>
                            <p className="normal font__size--12 text__12-1024 color__gray-1 mb-0">30 Days Moneyback Guarantee</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 line__left md z-1">
                                <div className="pr-lg-5 mb-lg-0 mb-5">
                                    <div className="d-flex align-items-start">
                                        <img src="./../images/Icon.png" className="object-fit-content" alt="" />
                                        <div className="ml-3">
                                            <h5 className="normal font__size--18 text__18-1024">Customizable Packages</h5>
                                            <p className="normal font__size--16 text__16-1024 lh-2 color__gray-1">We understand that each project is unique, so we offer customizable packages to ensure that you get the services you need at a price that works for you. Our team will work with you to create a package that meets your specific goals and budget.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start my-4">
                                        <img src="./../images/Icon.png" className="object-fit-content" alt="" />
                                        <div className="ml-3">
                                            <h5 className="normal font__size--18 text__18-1024">Flexible Payment Options</h5>
                                            <p className="normal font__size--16 text__16-1024 lh-2 color__gray-1">We offer flexible payment options to make it easy for you to get started with our services. We accept various payment methods, including credit cards, bank transfers, and PayPal, and we can also work with you to create a payment plan that suits your needs.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start">
                                        <img src="./../images/Icon.png" className="object-fit-content" alt="" />
                                        <div className="ml-3">
                                            <h5 className="normal font__size--18 text__18-1024">Satisfaction Guarantee</h5>
                                            <p className="normal font__size--16 text__16-1024 lh-2 color__gray-1">We stand behind our services and are committed to ensuring that you are completely satisfied with the final product. If for any reason you are not happy with our services, we will work with you to make it right or provide a full refund.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-right">
                            <img src="./../images/Mask group.png" className="images__character-choose" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecChoose