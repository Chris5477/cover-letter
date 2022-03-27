const Button = ({cssClass, content, handleClick, handleCopy }) => {

    return(
        <button onClick={handleClick} className={cssClass}>{content}</button>
    )
}

export default Button;