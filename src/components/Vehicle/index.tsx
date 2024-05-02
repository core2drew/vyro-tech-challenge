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

export default function Vehicle(props: Props) {
  const { media, name, condition } = props;

  // TODO
  // `props.media` is an array. Find the media item with placement='featured'
  const featuredMedia = "https://via.placeholder.com/1000x600";

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
      <Tag>{condition}</Tag>

      {/* TODO - Add another <Tag/> component which shows "Sold" or "Available now", depending on whether the vehicle's is_sold property is true/false (respectively) */}
    </div>
  );
}
