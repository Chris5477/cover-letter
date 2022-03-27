const Button = ({cssClass, content, handleClick }) => {

    return(
        <button onClick={handleClick} className={cssClass}>{content}</button>
    )
}

export default Button;