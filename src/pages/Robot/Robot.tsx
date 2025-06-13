const eyeImage = "https://i.ibb.co/mV7vC2vx/lefteye.png";
const eye = (props:any) => {
    return(
        <img
        alt={"eyeball"}
        src={eyeImage}
        style={props.eyeDiff}
        />
    )

}

function Robot(){
    return "Robot"
}
export default Robot;
