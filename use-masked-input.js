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
  initialValue = '',
}) {
  let textMask = useRef(null)

  useLayoutEffect(() => {
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

    textMask.current.update(initialValue)
  }, [input, guide, keepCharPositions, mask, pipe, placeholderChar, showMask])

  return event => {
    if (textMask.current) {
      textMask.current.update()
    }

    if (typeof onChange === 'function') {
      onChange(event)
    }
  }
}
