import styles from "./Select.module.scss";
import cn from "classnames/bind";
import { useEffect, useRef, useState } from "react";

const cx = cn.bind(styles);

const Select = ({ items = [], selectedId, onChange }) => {
  const [open, setOpen] = useState(false);

  const refInput = useRef();

  const onOpen = (event) => {
    event.stopPropagation();
    refInput.current.focus();
    setOpen(true);
  };
  const onClose = () => setOpen(false);

  const onSelect = (item) => () => {
    onChange(item);
    onClose();
  };

  const outsideClick = () => {
    onClose();
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("click", outsideClick);
    }
    return () => {
      document.removeEventListener("click", outsideClick);
    };
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={cx("root", { open })}>
      <div className={cx("input")} onClick={onOpen}>
        {items.length > 0 ? (
          <input
            type="text"
            className="input"
            value={selectedId?.name ?? ""}
            onChange={(e) => console.log(e.target.value)}
            ref={refInput}
            readOnly
          />
        ) : (
          <input type="text" readOnly className="input" value={"Не выбран"} ref={refInput} />
        )}

        <button className={cx("inputIcon")}>
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.99999 5.17209L11.95 0.222092L13.364 1.63609L6.99999 8.00009L0.635986 1.63609L2.04999 0.222092L6.99999 5.17209Z"
              fill="#8E9299"
            />
          </svg>
        </button>
      </div>
      <div
        className="overlay__select"
        style={
          open
            ? {
                position: "fixed",
                top: "0",
                left: "0",
                width: "100vw",
                height: "100vh",
                zIndex: "2",
              }
            : {}
        }
      />
      <div className={cx("dd")}>
        <ul>
          {items.length > 0 ? (
            items.map((item) => (
              <li key={item.id} onClick={onSelect(item)}>
                {item.name}
              </li>
            ))
          ) : (
            <li>No items</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Select;
