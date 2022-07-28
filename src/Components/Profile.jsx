import React, { useEffect } from 'react'
import axios from 'axios'


const Profile = () => {

    useEffect(() => {

        axios.get('http://localhost:8080/student/me')
        .then((res) => {
            console.log('After get request:', res);
        })
        .catch((err) => {
            console.log('Error in get req:', err);
        })

    }, [])

  return (
    <section className="bg-light">
        <div className="container" >
            <div className="row">
                <div className="col-lg-12 mb-4 mb-sm-5">
                    <div className="card card-style1 border-0">
                        <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                            <div className="row align-items-center">
                                <div className="col-lg-6 mb-4 mb-lg-0">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="..." />
                                </div>
                                <div className="col-lg-6 px-xl-10">
                                    <div className="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                                        <h3 className="h2 text-white mb-0">John Doe</h3>
                                        <span className="text-primary">Student</span>
                                    </div>
                                    <ul className="list-unstyled mb-1-9">
                                        <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Email:</span> johndoe@mail.com</li>
                                        <li className="display-28 mb-2 mb-xl-3" ><span className="display-26 text-secondary me-2 font-weight-600">Phone:</span> 9204342232</li>
                                        <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Registration Number:</span> C2K20004010 </li>
                                    </ul>
                                    <ul className="social-icon-style1 list-unstyled mb-0 ps-0">
                                        <li><a href="#!"><i className="ti-twitter-alt"></i></a></li>
                                        <li><a href="#!"><i className="ti-facebook"></i></a></li>
                                        <li><a href="#!"><i className="ti-pinterest"></i></a></li>
                                        <li><a href="#!"><i className="ti-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
        </div>

        {/* Accordions and more details */}
    <div className="accordion" id="accordionExample">
        <div className="row d-flex justify-content-center">
            <div className="col-md-3 col-sm-6 col-sx-12">
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Personal Information
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    {/* <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                    <ul className="list-group">
                        <li className="list-group-item" ><strong>First Name :</strong> Gaurav J Somani</li>
                        <li className="list-group-item" ><strong>Middle Name :</strong> Gaurav J Somani</li>
                        <li className="list-group-item" ><strong>Last Name :</strong> Gaurav J Somani</li>
                        <li className="list-group-item" ><strong>DOB :</strong> 01-01-2001</li>
                        <li className="list-group-item"><strong>Gmail :</strong> : gauravsomani52750@gmail.com</li>
                        <li className="list-group-item"><strong>Address :</strong> : Flat no 101, Tulsi Appt, Amravati</li>
                        <li className="list-group-item" ><strong>Phone :</strong> 232331212</li>
                        <li className="list-group-item" ><strong>Section :</strong> 02 </li>
                        <li className="list-group-item" ><strong>Aadhar Number :</strong> 02 </li>
                        <li className="list-group-item" ><strong>Pan Number :</strong> 02 </li>
                        <li className="list-group-item" ><strong>Citizenship :</strong> 02 </li>

                    </ul>
                </div>
                </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 col-sx-12">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Education Information
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {/* <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                        <ul className="list-group">
                            <li className="list-group-item" ><strong>Registration Id :</strong> C2K32323200</li>
                            <li className="list-group-item" ><strong>Branch :</strong> Computer </li>
                            <li className="list-group-item" ><strong>PRN Number :</strong> Gaurav J Somani</li>
                            <li className="list-group-item" ><strong>SSC Percentage :</strong> 01-01-2001</li>
                            <li className="list-group-item"><strong>HSC Percentage :</strong> : gauravsomani52750@gmail.com</li>
                            <li className="list-group-item"><strong>1st Sem CGPA :</strong> : Flat no 101, Tulsi Appt, Amravati</li>
                            <li className="list-group-item" ><strong>2nd Sem CGPA :</strong> 232331212</li>
                            <li className="list-group-item" ><strong>3rd Sem CGPA :</strong> 02 </li>
                            <li className="list-group-item" ><strong>4th Sem CGPA :</strong> 02 </li>
                            <li className="list-group-item" ><strong>5th Sem CGPA :</strong> 02 </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 col-sx-12">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Company  Information
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <ul className="list-group">
                            <li className="list-group-item" ><strong>Company Applied :</strong> Phonepe </li>
                            <li className="list-group-item" ><strong>Company Applied :</strong> Phonepe  </li>
                            <li className="list-group-item" ><strong>Company Applied :</strong> Phonepe </li>
                            <li className="list-group-item" ><strong>Company Applied :</strong> Phonepe </li>
                            <li className="list-group-item"><strong>Company Applied :</strong> : Phonepe </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    

    </section>
  )
}

export default Profile