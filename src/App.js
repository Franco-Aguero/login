import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import axios from "axios"
import dotenv from "dotenv"
import './App.css';
dotenv.config()

const Login = () => {
  const { register,handleSubmit, formState: { errors } } = useForm();
  
  const {Url} = process.env
  const onSubmit = async(event) => {
    try{
      const { data } = await axios.post("https://api-flordeemprendedora.start-7.com/api/auth/login/", event)
      localStorage.setItem("token", data.token)
      alert("Te logueste con exito!!") 
    }
    catch(err){
      alert("Upsss Algo Salio Mal :(")
    }
  };


  return (
    <div className="container">
        
        <div className="containerLeft">
          <form onSubmit={ handleSubmit(onSubmit)} >      
            <h2><u>Be</u>m-vindo de volta!</h2>
            <p>Estamos felizes que esteja de volta para retomar seus <br/> projetos no Projetolist.</p>

            <input placeholder="E-mail" {...register("username",{
              required: {
                value:true,
                message: "Este campo es requerido"
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "El formato no es correcto @gmail.com"
              }
            })}/>
            {errors.username && <span>{errors.username.message}</span>}

            <input type="password" placeholder="Senha" {...register("password",{
              required: {
                value:true,
                message: "Este campo es requerido"
              },
              /* pattern: {
                value: ,
                message: "El formato no es correcto @gmail.com"
              } */
            })}/>
            {errors.password && <span>{errors.password.message}</span>}

            <Link to="/ho" id="recuper">Esqueceu sua senha?</Link>
            <button type="submit" id="BtnSubmit">Entrar</button>
            <span className="otro">OU ENTRE COM</span>

            <div className="formas">
              <button type="button"><FontAwesomeIcon icon={faFacebook} /></button>
              <button type="button">G</button>
            </div>

            <p className="otro">Ainda não tem uma conta? <b>Cadastre-se</b> </p>
          </form>
        </div>
        
      

        <div className="containerRight">
          <div className="header">
            <div id="Logo">
              <span>P</span>
              <hr id="lineLogo"/>
              <span>projetolist</span>
            </div>
            <Link to="/ajuda">Ajuda</Link>
          </div>

          <FontAwesomeIcon icon={faImage} id="imageDefault" />
          
          <footer>
            <span>© 2021, Projetolist</span>
            <span>UI/UX Design and Front-end by: <b>s<u>a</u></b></span>
          </footer>
        </div>
    </div>
  );
}

export default Login;
