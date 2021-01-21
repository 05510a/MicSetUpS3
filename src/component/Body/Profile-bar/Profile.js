import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import useOnClickOutside from "../../../utility/use-onclick-outside";

import {
  Getname,
  DeleteProfile,
  addProfile,
  duplicate,
  editName,
  getEditName,
  getEditNameAction,
} from "../../../redux/action/Profile";

export default function Profile(props) {
  const disPatch = useDispatch();
  const [dropDown, setDropDown] = useState(true);
  const [selectOption, setSelectOption] = useState(0);
  const [deleteShow, setDeleteShow] = useState(true);
  const [dotMenu, setDotMenu] = useState(true);

  const { Profile, GetName, getEditName, profileNameShow } = useSelector(
    (state) => state.ProfileReducer
  );
  const [show, setShow] = useState(false);
  const reName = useRef();
  const dropDownRef = useRef();
  const dotMenuRef = useRef();
  const DeleteRef = useRef();
  // const dropDownRef = useRef();
  useOnClickOutside(reName, () => {
    if (!show) {
      console.log("123");
    } else {
      if (getEditName === "") {
        setShow(!show);
      } else {
        disPatch(editName());

        setShow(false);
      }
    }
  });

  useOnClickOutside(dropDownRef, () => {
    if (dropDown === false) {
      setDropDown(!dropDown);
    } else {
      console.log("not thing");
    }
  });
  useOnClickOutside(dotMenuRef, () => {
    if (!dotMenu) {
      setDotMenu(!dotMenu);
    }
  });
  useOnClickOutside(DeleteRef, () => {
    if (!deleteShow) {
      setDeleteShow(!deleteShow);
    }
  });
  const renderProfile = () => {
    return Profile.map((profile, index) => {
      return (
        <div
          onClick={(e) => {
            disPatch(Getname(e.currentTarget.textContent, index));
            setSelectOption(index);
          }}
          className={selectOption === index ? "option selected" : "option "}
          key={index}
        >
          {profile.name}
        </div>
      );
    });
  };

  return (
    <div className="profile-bar flex">
      <div className="loader" tooltip="Syncing Profiles" />
      <div style={{ width: "140px", textAlign: "right" }}>
        {profileNameShow}
      </div>
      <input
        onChange={(e) => {
          disPatch(getEditNameAction(e.target.value));
        }}
        value={GetName.name}
        ref={reName}
        type="text"
        name="profile"
        id="profileEdit"
        maxLength={15}
        className={show === true ? "show" : ""}
      />
      <div
        ref={dropDownRef}
        className="dropdown-area"
        onClick={() => {
          setDropDown(!dropDown);
        }}
      >
        <div
          style={{ width: "230px" }}
          id="profileDrop"
          className={dropDown === true ? "s3-dropdown" : "s3-dropdown expand"}
        >
          {profileNameShow}
          <div className="icon expand" />
        </div>
        <div
          ref={dropDownRef}
          id="profileDropOpt"
          className={
            dropDown === true ? "s3-options flex" : "s3-options flex expand"
          }
          style={{ bottom: "unset", top: 27 }}
        >
          {renderProfile()}
        </div>
      </div>
      <div
        ref={dotMenuRef}
        className={
          dotMenu === true ? "dots3 hover-border" : "dots3 hover-border active"
        }
        id="profileMenuToggle"
        onClick={() => {
          setDotMenu(!dotMenu);
        }}
      >
        <div
          ref={dotMenuRef}
          className={dotMenu === true ? "profile-act" : "profile-act show"}
          id="profileMenu"
        >
          <div
            onClick={() => {
              disPatch(addProfile());
              setSelectOption(GetName.index);
            }}
            className="act action"
          >
            add
          </div>
          <div className="act action">import</div>
          <div className="act divider" />
          <div
            onClick={() => {
              setShow(!show);
            }}
            className="act action"
          >
            rename
          </div>
          <div
            onClick={() => {
              disPatch(duplicate());
            }}
            className="act action"
          >
            duplicate
          </div>
          <div className="act action">export</div>
          <div className="act divider" />
          <div
            onClick={() => {
              setDeleteShow(false);
            }}
            className="act action"
            id="deleteAction"
          >
            delete
          </div>
        </div>
      </div>
      <div
        ref={DeleteRef}
        id="deleteAlert"
        className={
          deleteShow === true
            ? "flex alert profile-del"
            : "flex alert profile-del show"
        }
      >
        <div className="title">delete profile</div>
        <div className="body-text t-center">
          You're about to delete this profile. All bindings in this profile will
          be deleted.
        </div>
        <div
          onClick={() => {
            disPatch(DeleteProfile());
            setDeleteShow(true);
            console.log("indexname", Profile.length);

            setSelectOption(GetName.index);
          }}
          className="thx-btn"
          id="deleteConfirm"
        >
          delete
        </div>
      </div>
      <div className="obm hover-border" tooltip="On-board Profiles" />
      <div className="divider" />
      <div className="batt batt-30" tooltip="30% Battery" />
    </div>
  );
}
