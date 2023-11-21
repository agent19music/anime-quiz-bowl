import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Landingpage({username, setUsername}) {
  const navigate = useNavigate();

  async function welcome() {
    const { value: text } = await Swal.fire({
      input: "text",
      inputLabel: "Username",
      inputPlaceholder: "Enter your unique username here...",
      inputAttributes: {
        "aria-label": "Type your username here",
      },
      showCancelButton: true,
    });

    if (text) {
      setUsername(text);
      localStorage.setItem('username', text);
      Swal.fire(text).then((result) => {
        if (result.isConfirmed) {
          navigate('/home');
        }
      });
    }
  }
  console.log(username);

  return (
    <div className='container'>
      <div className='col md-12 text-center' id='main-container'>
        <div className='row justify-content-center align-items-center' style={{ height: '100vh' }}>
          <div className='col-md-12'>
            <h5 className='pb-3'>WELCOME TO ANIME ZETU QUIZ BOWL !!</h5>
            <img src='/landing.jpeg' alt='loading...' className='img-fluid pb-2' style={{maxWidth: '50%'}} />
            <div className="d-grid gap-2 pt-3">
              <button className="btn btn-success" onClick={welcome} type="button">
                <i className="fas fa-circle-arrow-right"></i> Begin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
