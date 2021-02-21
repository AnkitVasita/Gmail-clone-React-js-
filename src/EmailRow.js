import React from "react";
import "./EmailRow.css";
import { Checkbox, IconButton } from "@material-ui/core";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

const EmailRow = ({ id, title, description, subject, time }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        description,
        subject,
        time,
      })
    );
    history.push("/mail");
  };

  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderRoundedIcon />
        </IconButton>
        <IconButton>
          <LabelOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4 className="emailRow__message">
          {subject} -{" "}
          <span className="emailRow__description"> {description}</span>
        </h4>
      </div>
      <p className="emailRow__time">{time}</p>
    </div>
  );
};

export default EmailRow;
