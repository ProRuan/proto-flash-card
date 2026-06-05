import { BasicCard } from './basic-card';

export interface StudyableCard extends BasicCard {
  studyLevel: number;
  //   isStudied: boolean;
  //   lastStudiedDate?: Date;
}
