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
      {next !== "" && (
        <Link to={next_url}>
          <button className="next-button">{next}</button>
        </Link>
      )}
      {back !== undefined && back_url !== undefined && (
        <Link to={back_url}>
          <span className="back-button">{back}</span>
        </Link>
      )}
    </div>
  );
};

export default NextPrevButtons;
