import { Component, For } from 'solid-js'
import { Courses } from '~/data/data-types'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'

export const GradesTable: Component<Courses> = ({ grades }) => {
  return (
    <>
      <Card class="w-1/2">
        <CardHeader>
          <CardTitle>My grades.</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead class="w-[300px] text-left">Name</TableHead>
                <TableHead>Scope</TableHead>
                <TableHead class="text-right">Grade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <For each={grades}>
                {(row) => (
                  <TableRow>
                    <TableCell class="font-medium text-left">{row.name}</TableCell>
                    <TableCell>{row.scope}</TableCell>
                    <TableCell class="text-right">{row.grade}</TableCell>
                  </TableRow>
                )}
              </For>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  )
}
