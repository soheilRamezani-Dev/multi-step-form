import { Link } from "react-router-dom";

const NextPrevButtons = ({
  next,
  next_url,
  back,
  back_url,
}: {
  next: string;
  next_url: string;
  back?: string;
  back_url?: string;
}) => {
  return (
    <div className="form-buttons">
      {next !== "" && !next_url && (  <input type='submit' value={next} className="next-button"/>)}
      {next_url !== "" && (  <Link to={next_url}><span className="next-button">{next}</span></Link>)}
      {back !== undefined && back_url !== undefined && (
        <Link to={back_url}>
          <span className="back-button">{back}</span>
        </Link>
      )}
    </div>
  );
};

export default NextPrevButtons;
