import { Component } from 'solid-js'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Separator } from '~/components/ui/separator'
import { getAverageGrade, getTotalPoints, getWeightedAverageGrade } from '~/data/data-analysis'
import { Courses } from '~/data/data-types'

export const GradesStatistics: Component<Courses> = ({ grades }) => {
  return (
    <>
      <Card class="w-1/2">
        <CardHeader>
          <CardTitle>Statistics.</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="mb-2">
            <p>Total points.</p>
            {getTotalPoints(grades)}
          </div>
          <Separator />
          <div class="my-4">
            <p>Average grade.</p>
            {getAverageGrade(grades)}
          </div>
          <Separator />
          <div class="my-4">
            <p>Weighted average grade.</p>
            {getWeightedAverageGrade(grades)}
          </div>
        </CardContent>
      </Card>
    </>
  )
}
