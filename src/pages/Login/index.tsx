import React from 'react';

/* Components */
import Input from '../../components/Input';

/* Images and Icons */
import logoImg from '../../assets/images/logo.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

const Login: React.FC = () => {
  return (
    <div id="page-login">
      <div id="page-login-content" className="container">
        <div className="site-description">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <form>
          <fieldset>
            <legend>
              Fazer login
              <button>Criar uma conta</button>
            </legend>

            <Input className="input" required name="e-mail" label="E-mail" />
            <Input className="input" required name="senha" label="Senha" />
          </fieldset>

          <footer>
            <div className="options-login">
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  className="regular-checkbox"
                  name="vehicle1"
                  value="Bike"
                />
                <label>Lembrar-me</label>
              </div>
              <span>Esqueci minha senha</span>
            </div>

            <button type="submit">Entrar</button>

            <div className="sign-up-container">
              <div className="sign-up">
                Não tem conta? <br />
                <a href="">Cadastre-se</a>
              </div>

              <span>
                É de graça
                <img src={purpleHeart} alt="Coração roxo" />
              </span>
            </div>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default Login;
