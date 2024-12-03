import { Component, createEffect, createSignal, Show } from 'solid-js'
import { Button } from '~/components/ui/button'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '~/components/ui/dialog'
import { useSessionData } from '~/data/data-context'
import { supabase } from '~/utils/supabase'

export const Nav: Component = () => {
  const [isOpen, setIsOpen] = createSignal(false)
  const [showLogout, setShowLogout] = createSignal(false)

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setIsOpen(false)
  }

  const sessionDataResource = useSessionData()

  createEffect(() => {
    if (sessionDataResource.loading) {
      return
    }

    if (sessionDataResource.error) {
      setShowLogout(false)
    } else {
      setShowLogout(true)
    }
  })

  return (
    <>
      <nav class="fixed left-0 right-0 top-0 z-50 flex justify-start">
        <Show when={showLogout()}>
          <Button
            variant="outline"
            class="m-2"
            onClick={() => {
              setIsOpen(true)
            }}
          >
            Log out
          </Button>
        </Show>
      </nav>
      <Dialog open={isOpen()} onOpenChange={setIsOpen}>
        <DialogContent class="w-11/12 sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Log out</DialogTitle>
            <DialogDescription>Are you sure you want to log out?</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="submit" onClick={handleLogout} variant="outline">
              Log out
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
