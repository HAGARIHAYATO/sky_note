declare module '*.vue' {
  import { VueConstructor } from 'vue';
  const d: VueConstructor;
  export default d;

  export interface IPopUp {
    status: boolean,
    isPopUp: boolean
  }

  export interface IStar {
    altitude: string,
    altitudeNum: number,
    confirmed: string,
    content: string,
    direction: string,
    directionNum: number,
    drowing: string,
    eclipticalFlag: string,
    enName: string,
    id: string,
    jpName: string,
    origin: string,
    ptolemyFlag: string,
    roughly: string,
    starIcon: string,
    starImage: string
  }

  export interface IQuery {
    lat: string,
    lng: string,
    date: string,
    hour: string,
    min: string,
    user_sub?: string
  }

  export interface IUser {
    sub: string,
    picture: string,
    name: string
  }

  export interface Result {
    result: Array<IStar>
  }
}