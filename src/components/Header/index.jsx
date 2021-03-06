import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProcessNewModal from "../../ProcessNewModal";
import Button from "../Button";
import Modal from "../Modal";
import Searchbar from "../Searchbar";

import "./Header.styles.css";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const headerNovoButtonHandler = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="header-bar">
        <Link className="header-link" to="/">
          <h1 className="global-title">
            Busca de <br /> processos
          </h1>
        </Link>
        <Searchbar />
        <Button onClick={headerNovoButtonHandler} type="button">
          NOVO
        </Button>
      </div>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ProcessNewModal />
      </Modal>
    </>
  );
};

export default Header;
