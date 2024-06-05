import { Form } from 'react-bootstrap';

export default function Navigation() {
  return (

    <Form className='cuestionario'>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Correo:</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Descripcion</label>
        <input type="password" className="form-control1" id="exampleInputPassword1" size={100}/>
        <button type="submit" class="btn btn-danger">Enviar</button>
      </div>
            
    </Form>
  );
}
