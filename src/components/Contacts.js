const Contacts = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>I was {props.age}, graduated from {props.school}, and graduated in {props.graduationYear}</p>
        </div>
    );
};

export default Contacts;