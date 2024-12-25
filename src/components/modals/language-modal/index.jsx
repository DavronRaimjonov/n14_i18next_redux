import { Modal, Segmented } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { languageModalVisibiltyAction } from "../../../redux/modal-slice";
import { useSegmentedApi } from "../../../generic/locale-options";
import { getLang } from "../../../redux/langugage-slice";
import i18next from "i18next";

const LanguageModal = () => {
  const { languageModalVisibilty } = useSelector((state) => state.modalSlice);
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || "eng"
  );
  const dispatch = useDispatch();
  const onOk = () => {
    dispatch(getLang(language));
    i18next.changeLanguage(language);
    dispatch(languageModalVisibiltyAction());
  };

  const { segmentedApi } = useSegmentedApi();
  return (
    <Modal
      open={languageModalVisibilty}
      onCancel={() => dispatch(languageModalVisibiltyAction())}
      onOk={onOk}
      closable={false}
    >
      <div className="w-[70%] m-auto">
        <Segmented
          defaultValue={localStorage.getItem("lang") || "eng"}
          className="w-full"
          style={{ marginBottom: 8 }}
          onChange={(e) => setLanguage(e)}
          options={segmentedApi()}
        />
      </div>
    </Modal>
  );
};

export default LanguageModal;
