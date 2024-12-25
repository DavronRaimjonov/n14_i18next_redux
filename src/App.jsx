import React from "react";
import {  useTranslation } from "react-i18next";
import { IoLanguageSharp } from "react-icons/io5";
import Modal from "./components/modals";
import { useDispatch } from "react-redux";
import { languageModalVisibiltyAction } from "./redux/modal-slice";

const App = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <section className="bg-slate-500 py-5 text-white">
      <div className="w-[90%] m-auto flex items-center justify-between">
        <h3 className="text-xl">{t("navbar.logo")}</h3>
        <div className="flex items-center gap-5">
          <h3 className="cursor-pointer"> {t("navbar.link1")}</h3>
          <h3 className="cursor-pointer"> {t("navbar.link2")}</h3>
          <h3 className="cursor-pointer"> {t("navbar.link3")}</h3>
          <IoLanguageSharp
            onClick={() => dispatch(languageModalVisibiltyAction())}
            className="text-[20px] cursor-pointer"
          />
        </div>
      </div>
      <Modal />
    </section>
  );
};

export default App;
