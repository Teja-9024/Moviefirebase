// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import { Link } from 'react-router-dom';

export function OffcanvasExample() {
  return (
    <>
      <Container>
      <div className='d-flex justify-content-between py-3'>
          <h1 className='word fs-2 '>MOVIE APP</h1>
          <div>
          <Link  className="text-decoration-none btn2b playclick  px-1 mx-2" to={'/playlist'}>Playlist   </Link>
          <Link  className="text-decoration-none px-2 btn2b logclick" to={'/'}>Log Out   </Link> 
          
          </div>
        
     </div>
      </Container>
      
      
    </>
  );
}

export function OffcanvasExample2() {
  return (
    <>
      <Container>
      <div className='d-flex justify-content-between py-3'>
          <h1 className='word fs-2 '>MOVIE APP</h1>
          <div>
          <Link  className="text-decoration-none btn2b playclick  px-1 mx-2" to={'/Home'}>Home</Link>
          <Link  className="text-decoration-none px-2 btn2b logclick" to={'/'}>Log Out   </Link> 
          
          </div>
        
     </div>
      </Container>
      
      
    </>
  );
}

