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
      {next !== "" && (  <input type='submit' value={next} className="next-button"/>)}
      {back !== undefined && back_url !== undefined && (
        <Link to={back_url}>
          <span className="back-button">{back}</span>
        </Link>
      )}
    </div>
  );
};

export default NextPrevButtons;
