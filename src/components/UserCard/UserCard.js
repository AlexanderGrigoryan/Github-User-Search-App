import styles from "./UserCard.module.css";
import location from "../../img/icon-location.svg";
import website from "../../img/icon-website.svg";
import twitter from "../../img/icon-twitter.svg";
import company from "../../img/icon-company.svg";
import locationDark from "../../img/icon-location-dark.svg";
import websiteDark from "../../img/icon-website-dark.svg";
import twitterDark from "../../img/icon-twitter-dark.svg";
import companyDark from "../../img/icon-company-dark.svg";

function UserCard({ changeMode, setChangeMode, search, setSearch }) {
  let date = new Date(search.created_at);

  const [day, month, dayIndex, year] = date.toDateString().split(" ");
  const joined = dayIndex + " " + month + " " + year;

  return (
    <div
      className={`${styles.container} ${
        changeMode ? styles.container__dark : null
      }`}
    >
      <div className={styles.info}>
        <img
          className={styles.avatar}
          src={search.avatar_url}
          alt="User Avatar"
        />
        <div className={styles.profile}>
          <div>
            <p
              className={`${styles.username} ${
                changeMode ? styles.username__dark : null
              }`}
            >
              {search.name ? search.name : "Not available"}
            </p>
            <p className={styles.userurl}>{"@" + search.login}</p>
          </div>
          <p
            className={`${styles.joined} ${
              changeMode ? styles.joined__dark : null
            }`}
          >
            Joined {joined}
          </p>
        </div>
      </div>
      <p className={`${styles.bio} ${changeMode ? styles.bio__dark : null}`}>
        {search.bio ? search.bio : "This profile has no bio"}
      </p>
      <div
        className={`${styles.statistics__container} ${
          changeMode ? styles.statistics__dark : null
        }`}
      >
        <div className={styles.statistics__block}>
          <p
            className={`${styles.statistics__name} ${
              changeMode ? styles.statistics__name_dark : null
            }`}
          >
            Repos
          </p>
          <p
            className={`${styles.statistics__number} ${
              changeMode ? styles.statistics__number_dark : null
            }`}
          >
            {search.public_repos}
          </p>
        </div>
        <div className={styles.statistics__block}>
          <p
            className={`${styles.statistics__name} ${
              changeMode ? styles.statistics__name_dark : null
            }`}
          >
            Followers
          </p>
          <p
            className={`${styles.statistics__number} ${
              changeMode ? styles.statistics__number_dark : null
            }`}
          >
            {search.followers}
          </p>
        </div>
        <div className={styles.statistics__block}>
          <p
            className={`${styles.statistics__name} ${
              changeMode ? styles.statistics__name_dark : null
            }`}
          >
            Following
          </p>
          <p
            className={`${styles.statistics__number} ${
              changeMode ? styles.statistics__number_dark : null
            }`}
          >
            {search.following}
          </p>
        </div>
      </div>
      <div className={styles.link}>
        <div className={styles.link__1}>
          <div className={styles.link__block}>
            <img
              src={`${changeMode ? locationDark : location}`}
              alt="Location"
            />
            <p
              className={`${styles.link__name} ${
                changeMode ? styles.link__name_dark : null
              }`}
            >
              {search.location ? search.location : "Not Available"}
            </p>
          </div>
          <div className={styles.link__block}>
            <img src={`${changeMode ? websiteDark : website}`} alt="website" />
            <p
              className={`${styles.link__name} ${
                changeMode ? styles.link__name_dark : null
              }`}
            >
              {search.blog ? search.blog : "Not Available"}
            </p>
          </div>
        </div>
        <div className={styles.link__2}>
          <div className={styles.link__block}>
            <img src={`${changeMode ? twitterDark : twitter}`} alt="twitter" />
            <p
              className={`${styles.link__name} ${
                changeMode ? styles.link__name_dark : null
              }`}
            >
              {search.twitter_username
                ? search.twitter_username
                : "Not Available"}
            </p>
          </div>
          <div className={styles.link__block}>
            <img src={`${changeMode ? companyDark : company}`} alt="company" />
            <p
              className={`${styles.link__name} ${
                changeMode ? styles.link__name_dark : null
              }`}
            >
              {search.company ? search.company : "Not Available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
