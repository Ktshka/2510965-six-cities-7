import { ChangeEvent, FormEvent, Fragment, useState } from 'react';

const MIN_COMMENT_LENGTH = 50;

const RATING_STARS = [
  { value: 5, id: '5-stars', title: 'perfect' },
  { value: 4, id: '4-stars', title: 'good' },
  { value: 3, id: '3-stars', title: 'not bad' },
  { value: 2, id: '2-stars', title: 'badly' },
  { value: 1, id: '1-star', title: 'terribly' },
];

type ReviewFormState = {
  rating: number;
  review: string;
};

function ReviewForm() {
  const [formData, setFormData] = useState<ReviewFormState>({
    rating: 0,
    review: '',
  });

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, rating: Number(evt.target.value) });
  };

  const handleReviewChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, review: evt.target.value });
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    // отправка на сервер будет реализована в следующих модулях
  };

  const isSubmitDisabled = formData.rating === 0 || formData.review.length < MIN_COMMENT_LENGTH;

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING_STARS.map(({ value, id, title }) => (
          <Fragment key={id}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={id}
              type="radio"
              checked={formData.rating === value}
              onChange={handleRatingChange}
            />
            <label htmlFor={id} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.review}
        onChange={handleReviewChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_COMMENT_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitDisabled}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
