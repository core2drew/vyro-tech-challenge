import Tag from "../Tag";
import styles from "./index.module.scss";

type Media = {
  src: string;
  alt: string;
  placement: "featured" | "gallery";
};

type Props = {
  media: Array<Media>;
  name: string;
  code: string;
  condition: "new" | "used" | "demo";
  is_sold: boolean;
};

enum Condition {
  new = "New",
  used = "Second hand",
  demo = "Dealer demo",
}

export default function Vehicle(props: Props) {
  const { media, name, condition, is_sold } = props;

  // TODO
  // `props.media` is an array. Find the media item with placement='featured'
  const featuredMedia = media.find((item) => item.placement)?.src;
  const soldTagLabel = is_sold ? "Sold" : "Available now";
  return (
    <div className={styles.vehicle}>
      <img className={styles.media} src={featuredMedia} alt="[alt]" />
      <h2 className={styles.name}>{name}</h2>

      {/* 
        TODO - The `condition` is in lowercase and not friendly. Map the condition as follows and dispay the friendly version:

        - new -> "New"
        - used -> "Second hand"
        - demo -> "Dealer demo"
      */}
      <div className={styles.tags}>
        <Tag>{Condition[condition]}</Tag>
        <Tag>{soldTagLabel}</Tag>
      </div>
      {/* TODO - Add another <Tag/> component which shows "Sold" or "Available now", depending on whether the vehicle's is_sold property is true/false (respectively) */}
    </div>
  );
}
