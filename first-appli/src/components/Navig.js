import Nav from 'react-bootstrap/Nav';

function Navig() {
  return (
    <div className='navi'>
    <Nav className='nvnavi' justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">About me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">My work</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Contact</Nav.Link>
      </Nav.Item>
     
    </Nav>
    </div>
  );
}

export default Navig;