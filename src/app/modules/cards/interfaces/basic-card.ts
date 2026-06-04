export interface BasicCard {
  front: string;
  back: string;
  topic: string;
  tags: string[];
  relationType: string;
  relatedCardIDs: string[];
}
