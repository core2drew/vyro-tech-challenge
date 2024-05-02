export type Media = {
  src: string;
  alt: string;
  placement: "featured" | "gallery";
};

export type Vehicle = {
  media: Array<Media>;
  name: string;
  code: string;
  condition: "new" | "used" | "demo";
  is_sold: boolean;
};
