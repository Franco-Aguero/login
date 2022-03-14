import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
/* import axios from "axios" */
import './App.css';

const Login = () => {
  const { register,handleSubmit, formState: { errors } } = useForm();  
  const onSubmit = async(event) => {
    const verifiedEmail = "aguerofranco2002@gmail.com", verifiedPassword = "React2022", { username, password} = event;
    username === verifiedEmail && password === verifiedPassword ? 
    Swal.fire({
      icon: 'success',
      title: "Você logou com sucesso!!",
    }) 
    : 
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "Senha ou e-mail errado, tente novamente",
    });
    /* try{
      const { data } = await axios.post( process.env.REACT_APP_URL, event)
      localStorage.setItem("token", data.token)
      Swal.fire({
        icon: 'success',
        title: "Você logou com sucesso!!",
      })  
    }
    catch(err){
      Swal.fire({
        icon: 'error',
        title: 'Ops...',
        text: "algo deu errado :(",
      })
    } */
  };

  return (
    <div className="container">
        <div className="containerLeft">
          <form onSubmit={ handleSubmit(onSubmit)} >      
            <h1><u>Be</u>m-vindo de volta!</h1>
            <p id="firstP">Estamos felizes que esteja de volta para retomar seus projetos no Projetolist.</p>
            <label>
              <input className={errors.username && "error"} placeholder="E-mail" {...register("username",{
                required: {
                  value:true,
                  message: "Este campo é obrigatório"
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "O formato não está correto @gmail.com"
                }
              })}/>
              {errors.username && <span>{errors.username.message}</span>}
            </label>
            <label>
              <input type="password" className={errors.password && "error"} placeholder="Senha" {...register("password",{
                required: {
                  value:true,
                  message: "Este campo é obrigatório"
                },
                minLength: {
                  value:8,
                  message: "deve ter no mínimo 8 caracteres"
                }
              })}/>
              {errors.password && <span>{errors.password.message}</span>}
            </label>
            <Link to="/recuper" id="recuper">Esqueceu sua senha?</Link>
            <button type="submit" id="BtnSubmit">Entrar</button>
            <span className="textCenter">OU ENTRE COM</span>

            <div className="loginMethods">
              <button type="button"><FontAwesomeIcon icon={faFacebook} id="faceIcon" /></button>
              <button type="button">G</button>
            </div>

            <p className="textCenter">Ainda não tem uma conta? <b>Cadastre-se</b> </p>
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