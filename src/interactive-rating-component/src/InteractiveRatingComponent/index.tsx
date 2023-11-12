import css from "./index.module.css";

export default function InteractiveRatingComponent() {
  return <InteractiveRatingComponentAskScene />;
}

function InteractiveRatingComponentAskScene() {
  return (
    <form className={css.rating}>
      <span className="round-icon bg--dark-blue">
        <img src="./images/icon-star.svg" alt="decorative star icon" />
      </span>
      <h1 className="title-font">How did we do?</h1>
      <p className="content-font content-line-height">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className={`${css.rating_rating} content-font`}>
        <RatingOption value={1} />
        <RatingOption value={2} />
        <RatingOption value={3} />
        <RatingOption value={4} />
        <RatingOption value={5} />
      </div>
      <button type="submit" className="bg-white-fg-orange">
        Submit
      </button>
    </form>
  );
}

function RatingOption(props: { value: number }) {
  return (
    <label className={css.rating_option}>
      {props.value}
      <input type="radio" name="rating" value={props.value} />
    </label>
  );
}
