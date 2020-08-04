import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/14207154?s=460&u=06c12cab15fa6793d6e9fe466f0ee892162eca35&v=4"
          alt="Elson Junior"
        />
        <div>
          <strong>Elson Junior</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        porta ac sapien fermentum ultrices.
        <br />
        Mauris tempus interdum tellus ac ullamcorper. Vestibulum sapien lacus,
        ullamcorper vel est eu, elementum dapibus nibh. Aliquam id turpis
        dictum, egestas lectus at, tempus velit. Integer nibh eros, facilisis id
        nunc id, ullamcorper interdum diam.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
