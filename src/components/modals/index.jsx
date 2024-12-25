import React from "react";
import { useSelector } from "react-redux";
import LanguageModal from "./language-modal";

const Modal = () => {
  const { languageModalVisibilty } = useSelector((state) => state.modalSlice);
  return <>{languageModalVisibilty && <LanguageModal />}</>;
};

export default Modal;
