import React, {useState} from 'react'
import { Container, Table,Row,Col,Button,Modal } from 'react-bootstrap'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { ToastContainer } from 'react-toastify';



const JdMaster = () => {
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  
  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  const [show4, setShow4] = useState(false);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const [show5, setShow5] = useState(false);

  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);
  return (
    <div>
        <Sidebar />
        <NavbarMenu />
        <ToastContainer />
        <Container className='myprofile' >
        <Table>
            <thead>
                <tr>
                <th>Category</th>
                            <th>Force to use our database? </th>
                            <th>Exclusivity</th>
                            <th>CVs quality check </th>
                            <th>priority tag (P)</th>
                            <th>JD upload date-time </th>
                            <th>JD number </th>
                            <th>Number of vacancies</th>
                            <th> JD details</th>
                          
                            <th>Company </th>
                            <th>Job Description</th>
                           
                            <th>Terms Of JD</th>
                            
                            <th>remarks/comments </th>
                            <th>Client coordination</th>
                            <th>admin spoc</th>
                            <th>JD status </th>
                            <th>Allow one candidate submission by user? </th>
                            <th>JD Acceptance </th>
                            <th>When submission happened?  </th>
                            <th>Feedback from client updated by user </th>
                            <th>Feedback from admin</th>
                            <th>Cvs quality approval</th>
                            <th>Status as per user </th>
                            <th>Offer</th>
                    
                </tr>
            </thead>
            <tbody>
            <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td >n/a</td>
                    <td>na</td>
                    <td  onClick={handleShow1} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-briefcase'></i></td>
                    <td  onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-briefcase'></i></td>
                   
                    <td >n/a</td>
                    <td onClick={handleShow5} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                   
                    <td>n/a</td>
                    <td >n/a</td>
                    
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td  onClick={handleShow3} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                    <td >n/a</td>
                    <td >n/a</td>
                    <td >na</td>
                    <td >n/a</td>
                    <td>na</td>
                    <td  onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td >n/a</td>
                    <td>na</td>
                    <td  onClick={handleShow1} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-briefcase'></i></td>
                    <td  onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-briefcase'></i></td>
                   
                    <td >n/a</td>
                    <td onClick={handleShow5} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                   
                    <td>n/a</td>
                    <td >n/a</td>
                    
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td  onClick={handleShow3} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                    <td >n/a</td>
                    <td >n/a</td>
                    <td >na</td>
                    <td >n/a</td>
                    <td>na</td>
                    <td  onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td >n/a</td>
                    <td>na</td>
                    <td  onClick={handleShow1} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-briefcase'></i></td>
                    <td  onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-briefcase'></i></td>
                   
                    <td >n/a</td>
                    <td onClick={handleShow5} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                   
                    <td>n/a</td>
                    <td >n/a</td>
                    
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td  onClick={handleShow3} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                    <td >n/a</td>
                    <td >n/a</td>
                    <td >na</td>
                    <td >n/a</td>
                    <td>na</td>
                    <td  onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td >n/a</td>
                    <td>na</td>
                    <td  onClick={handleShow1} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-briefcase'></i></td>
                    <td  onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-briefcase'></i></td>
                   
                    <td >n/a</td>
                    <td onClick={handleShow5} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                   
                    <td>n/a</td>
                    <td >n/a</td>
                    
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td  onClick={handleShow3} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                    <td >n/a</td>
                    <td >n/a</td>
                    <td >na</td>
                    <td >n/a</td>
                    <td>na</td>
                    <td  onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td >n/a</td>
                    <td>na</td>
                    <td  onClick={handleShow1} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-briefcase'></i></td>
                    <td  onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-briefcase'></i></td>
                   
                    <td >n/a</td>
                    <td onClick={handleShow5} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                   
                    <td>n/a</td>
                    <td >n/a</td>
                    
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td  onClick={handleShow3} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                    <td >n/a</td>
                    <td >n/a</td>
                    <td >na</td>
                    <td >n/a</td>
                    <td>na</td>
                    <td  onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td >n/a</td>
                    <td>na</td>
                    <td  onClick={handleShow1} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-briefcase'></i></td>
                    <td  onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-briefcase'></i></td>
                   
                    <td >n/a</td>
                    <td onClick={handleShow5} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                   
                    <td>n/a</td>
                    <td >n/a</td>
                    
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td  onClick={handleShow3} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                    <td >n/a</td>
                    <td >n/a</td>
                    <td >na</td>
                    <td >n/a</td>
                    <td>na</td>
                    <td  onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prashant</td>
                    <td>2</td>
                    <td>Na</td>
                    <td>4</td>
                    <td>n/a</td>
                    <td >n/a</td>
                    <td>na</td>
                    <td  onClick={handleShow1} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-briefcase'></i></td>
                    <td  onClick={handleShow4} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-briefcase'></i></td>
                   
                    <td >n/a</td>
                    <td onClick={handleShow5} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                   
                    <td>n/a</td>
                    <td >n/a</td>
                    
                    <td>Indivisual</td>
                    <td>82827272828</td>
                    <td>patna</td>
                    <td  onClick={handleShow3} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                    <td >n/a</td>
                    <td >n/a</td>
                    <td >na</td>
                    <td >n/a</td>
                    <td>na</td>
                    <td  onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                </tr>
            </tbody>
            </Table>
            </Container>
            <Modal show={show1} onHide={handleClose1} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-suitcase me-3" ></i>Jd's Name Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col xs={6}>
                <h6 className='fw-bold mt-5 mx-3'> <i className="fab fa-firefox me-2"></i> Website: </h6>
            <a href="https://example.com" className='mx-3'>https://example.com</a>
            <h6 className='fw-bold mt-5 mx-3'> <i className="fab fa-linkedin me-2"></i> LinkedIn: </h6>
            <a href="https://linkedin.com" className='mx-3'>https://linkedin.com</a>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> Number Of vacancies: <span className='text-muted'> 100</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i> Experience: <span className='text-muted'> 2 years</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i> Salary: <span className='text-muted'> n/a</span></h6>
            </Col>
            <Col xs={6}>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-book me-2"></i> Education: <span className='text-muted'> n/a</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-map-marked-alt"></i> Work Location: <span className='text-muted'> Patna, Bihar , India</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fab fa-intercom"></i> Rounds of an interview: <span className='text-muted'> 13</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-sticky-note"></i> Notice period preference given by the client: <span className='text-muted'> n/a</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-user"></i> admin spoc)
: <span className='text-muted'> n/a</span></h6>
            </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show2} onHide={handleClose2} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-info-circle me-3" ></i>Offer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col xs={6}>
                <h6 className='fw-bold mt-5 mx-3'> Candidate ID </h6>
            
            <h6 className='fw-bold mt-5 mx-3'>  Offer Candidate Name </h6>
            
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> Offered Designation :<span className='text-muted'> 100</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i> Candidate Work Location: <span className='text-muted'> Delhi</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i> Offered CTC: <span className='text-muted'> 20,000</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> Sign up Rate :<span className='text-muted'> 20%</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i> Base Invoice Value: <span className='text-muted'> 6788</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i> Offer Accepted?: <span className='text-muted'> yes</span></h6>
            
            </Col>
            <Col xs={6}>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> DOJ :<span className='text-muted'> 12-march-2021</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i> Resigned?: <span className='text-muted'> NO</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i> Copy Of Resignation Received?: <span className='text-muted'> No</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> User Incentives :<span className='text-muted'> 10000</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i> Joined?: <span className='text-muted'> No</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i> User comments/remarks: <span className='text-muted'> good</span></h6>
            </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show3} onHide={handleClose3} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-info-circle me-3" ></i>Offer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col xs={6}>
                         
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> User ID who accepted the JD :<span className='text-muted'> 100</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-user me-2"></i>  User name who accepted the JD: <span className='text-muted'> Delhi</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i>Date time of accepting : <span className='text-muted'> 20,000</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> Assured delivery date-time :<span className='text-muted'> 20%</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i>Own portal/our portal : <span className='text-muted'> 6788</span></h6>
            
            </Col>
            <Col xs={6}>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> Assured delivery date-time :<span className='text-muted'> 20%</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i>Own portal/our portal : <span className='text-muted'> 6788</span></h6>
           
            </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show4} onHide={handleClose4} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-info-circle me-3" ></i>Offer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col xs={6}>
                         
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> Tittle :<span className='text-muted'> 100</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-user me-2"></i>  Client Name: <span className='text-muted'> Delhi</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-browser me-2"></i>Client Company Website : <span className='text-muted'> 20,000</span></h6>
            
            </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose4}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show5} onHide={handleClose5} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-info-circle me-3" ></i>Offer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col xs={6}>
                         
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> Notice Period preference given by client :<span className='text-muted'> 100</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-user me-2"></i>  Sign up rate with client: <span className='text-muted'> Delhi</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i>Payment term : <span className='text-muted'> 20,000</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> Replacement period :<span className='text-muted'> 20%</span></h6>
           
            
            </Col>
            <Col xs={6}>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i>Number of submission required : <span className='text-muted'> 5</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i>  Your Payout :<span className='text-muted'> 20%</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i>Assured delivery required by the client(TAT): <span className='text-muted'> 6788</span></h6>
           
            </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose5}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default JdMaster