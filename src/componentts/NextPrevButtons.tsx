const NextPrevButtons = ({ back, next }: { back: string; next: string }) => {
  return (
    <div className="form-buttons">
      {next !== "" && <button className="next-button">{next}</button>}
      {back !== "" && <span className="back-button">{back}</span>}
    </div>
  );
};

export default NextPrevButtons;
