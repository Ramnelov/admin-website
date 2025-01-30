export interface Grade {
  name: string
  scope: number
  grade: string
}

export interface Courses {
  grades: Grade[]
}
