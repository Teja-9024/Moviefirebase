// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import { Link } from 'react-router-dom';

function OffcanvasExample() {
  return (
    <>
      <Container>
      <div className='d-flex justify-content-between py-3'>
          <h1 className='word fs-2 '>MOVIE APP</h1>
          <Link  className="text-decoration-none px-2 btn2b" to={'/'}>Log Out   </Link> 
     </div>
      </Container>
      
      
    </>
  );
}

export default OffcanvasExample;