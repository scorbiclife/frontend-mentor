import css from "./index.module.scss";

export default function InteractiveRatingComponent() {
  return <InteractiveRatingComponentAskScene />;
}

function InteractiveRatingComponentAskScene() {
  return (
    <form className={css.rating}>
      <span className={css.icon}>
        <img src="./images/icon-star.svg" alt="decorative star icon" />
      </span>
      <h1 className={css.title}>How did we do?</h1>
      <p className={css.content}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className={css.options}>
        <RatingOption value={1} />
        <RatingOption value={2} />
        <RatingOption value={3} />
        <RatingOption value={4} />
        <RatingOption value={5} />
      </div>
      <button type="submit">
        Submit
      </button>
    </form>
  );
}

function RatingOption(props: { value: number }) {
  return (
    <label className={css.option}>
      {props.value}
      <input type="radio" name="rating" value={props.value} />
    </label>
  );
}
