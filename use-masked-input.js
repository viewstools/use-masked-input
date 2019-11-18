import { createTextMaskInputElement } from 'text-mask-core'
import { useLayoutEffect, useRef } from 'react'

export default function useMaskedInput({
  guide,
  input,
  keepCharPositions,
  mask,
  onChange,
  pipe,
  placeholderChar,
  showMask,
  value = '',
}) {
  let textMask = useRef()

  function init() {
    if (!input.current) return

    textMask.current = createTextMaskInputElement({
      guide,
      inputElement: input.current,
      keepCharPositions,
      mask,
      pipe,
      placeholderChar,
      showMask,
    })

    textMask.current.update(value)
  }

  useLayoutEffect(init, [
    guide,
    keepCharPositions,
    mask,
    pipe,
    placeholderChar,
    showMask,
  ])

  useLayoutEffect(() => {
    if (value === input.current.value) return

    init()
  }, [value])

  return event => {
    if (textMask.current) {
      textMask.current.update()
    }

    if (typeof onChange === 'function') {
      onChange(event)
    }
  }
}
