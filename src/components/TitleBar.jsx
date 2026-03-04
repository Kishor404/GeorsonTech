import "../styles/Components.css";

function TitleBar(props) {
  return(
    <>
        <div className="comp-titlebar">
            <div className="comp-title-img-cont">
                <img src={props.bg}/>
            </div>
            <div className="comp-title-p-cont">
                <p>{props.title}</p>
            </div>
        </div>
    </>
  );
}

export default TitleBar;