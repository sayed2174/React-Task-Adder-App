import Toast from 'react-bootstrap/Toast';

function Toaster({msg}) {
  return (
    <>
        <Toast
          className="d-inline-block m-1"
          bg="primary"
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Message</strong>
          </Toast.Header>
          <Toast.Body className={"primary" === 'Dark' && 'text-white'}>
            {msg}
          </Toast.Body>
        </Toast>
    </>
  );
}

export default Toaster;