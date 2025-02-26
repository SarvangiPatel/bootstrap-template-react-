import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {

  return (
    <>

    <div className="container  d-flex align-items-center justify-content-center px-3 w-100 mt-5"style={{
      border:'1px solid black'
    }}>
      <div className="row w-100 align-items-center ">
        <div className="col-md-6 text-center text-md-start">
          <h1 className="fw-bold">Hi, Hi, I'm John Deo.</h1>
          <p className="text-muted fs-5">
            A freelance Web developer from London. I convert custom web designs to Bootstrap templates.
            I make YouTube videos and write Blog.
          </p>
          <button className="btn btn-primary">I'm Available</button>
          <div className="mt-3">
            <i className="bi bi-facebook mx-2 fs-4"></i>
            <i className="bi bi-twitter mx-2 fs-4"></i>
            <i className="bi bi-github mx-2 fs-4"></i>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPTKrhPb_TUkHWn5_2Yxf6UVakQ8i2tZgyepyMfVkP1_k8K0cqkq27JNnN-LvMqW7X7k&usqp=CAU" className="img-fluid rounded-circle w-75" alt="John Deo" />
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App
