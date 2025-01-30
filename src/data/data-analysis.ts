import { Grade } from '~/data/data-types'

function getNumericGrades(grades: Grade[]): number[] {
  return grades
    .map((grade) => grade.grade)
    .filter((grade) => grade !== 'G')
    .map(Number)
    .filter((value) => !isNaN(value))
}

export function getAverageGrade(grades: Grade[]): number {
  const validGrades = getNumericGrades(grades)
  if (validGrades.length === 0) return 0

  const total = validGrades.reduce((sum, value) => sum + value, 0)
  const average = total / validGrades.length
  return parseFloat(average.toFixed(2))
}

export function getWeightedAverageGrade(grades: Grade[]): number {
  const validGrades = grades
    .filter((grade) => grade.grade !== 'G')
    .map((grade) => ({
      grade: Number(grade.grade),
      scope: grade.scope,
    }))
    .filter((grade) => !isNaN(grade.grade))

  if (validGrades.length === 0) return 0

  const totalScope = validGrades.reduce((sum, grade) => sum + grade.scope, 0)
  const weightedTotal = validGrades.reduce((sum, grade) => sum + grade.grade * grade.scope, 0)
  const weightedAverage = weightedTotal / totalScope
  return parseFloat(weightedAverage.toFixed(2))
}

export function getTotalPoints(grades: { scope: number }[]): number {
  return grades.reduce((sum, grade) => sum + grade.scope, 0)
}
