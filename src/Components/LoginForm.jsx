import React from "react";
import { Link } from "react-router-dom";
import useForm from "../Hooks/useForm";
import { UserContext } from "../UserContext";
import { GET_USER, TOKEN_POST, USER_GET } from "./api";
import Button from "./Button";
import Input from "./Input";
import Error from "./Error";
import styles from "./LoginForm.module.css";
import stylesBtn from "./Button.module.css";
import Head from "../Assets/Head";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault(); //previne que a pagina recarregue no submit

    if (username.validate && password.validate) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && 'Dados incorretos.'} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">Perdeu a Senha?</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui uma conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">Cadastro</Link>
      </div>
    </section>
  );
};

export default LoginForm;
