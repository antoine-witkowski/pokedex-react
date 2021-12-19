const Button = ({ label, onClick=null, classList = "" }) => {
    return(

        <button onClick={onClick} className={classList}>
            {label}
        </button>

    );
}

export default Button;
