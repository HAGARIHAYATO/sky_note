export interface IQuery {
  lat: string,
  lng: string,
  date: string,
  hour: string,
  min: string,
  user_sub?: string
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

export interface IParams {
  user_sub: string
}

export interface IResID {
  id: string
}