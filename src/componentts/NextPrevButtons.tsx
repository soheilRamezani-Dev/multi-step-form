import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetAllField } from "../redux/actions";

const NextPrevButtons = ({
  next,
  next_url,
  back,
  back_url,
  finalStep,
}: {
  next: string;
  next_url: string;
  back?: string;
  back_url?: string;
  finalStep?:boolean;
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const finalStepHandler = ():void=>{
    dispatch(resetAllField());
    navigate(next_url);
  }
  return (
    <div className="form-buttons">
      {next !== "" && !next_url && (  <input type='submit' value={next} className="next-button"/>)}
      {next_url !== "" && finalStep === false && (  <Link to={next_url}><span className="next-button">{next}</span></Link>)}
      {finalStep === true && (  <span onClick={finalStepHandler} className="next-button">{next}</span>)}
      {back !== undefined && back_url !== undefined && (
        <Link to={back_url}>
          <span className="back-button">{back}</span>
        </Link>
      )}
    </div>
  );
};

export default NextPrevButtons;
