import { createPortal } from "react-dom"
import Button from "./Button"
import Working from "./Working"

const Modal = ({setter}) => {
    return createPortal(
        <div className="modal">
            <div className="content-modal">
                <Working />
                <Button cssClass={"close-modal"} content={"X"} handleClick={() => setter(false)} />
            </div>
        </div>, document.body
    )
}

export default Modal