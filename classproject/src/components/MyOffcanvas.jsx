import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { AlarmFill, ArrowRightCircle } from 'react-bootstrap-icons';



function MyOffcanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Göster
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, id, molestias doloremque aliquid ipsam rem labore esse sequi quibusdam ullam laborum quaerat odit expedita odio omnis eos. Repellat eum aut, sapiente recusandae voluptates quos voluptatem ea distinctio consequuntur est vitae amet maiores neque soluta sit voluptas quod sed obcaecati autem.
          <FontAwesomeIcon icon={faCoffee}/>
          <FontAwesomeIcon icon={faPencil}/>
          <FontAwesomeIcon className='trash' icon={faTrash}/>
          <AlarmFill size={50} color="red" />
          <ArrowRightCircle size={50} color='green'/>
            </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MyOffcanvas;