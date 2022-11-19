import React from 'react'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'


type FieldIconProps = {
  className: string
}

const FIELD_ICON_BASE = formatClassList([
  'absolute',
  'w-4',
  'right-4'
])

const FIELD_EMPTY_ICON = formatClassList([
  FIELD_ICON_BASE,
  'h-4'
])

const FIELD_ERROR_ICON = formatClassList([
  FIELD_ICON_BASE,
  'fa-times',
  'fa-regular',
  'text-2xl',
  'text-red-600'
])

const FIELD_VALID_ICON = formatClassList([
  FIELD_ICON_BASE,
  'fa-check',
  'fa-regular',
  'text-2xl',
  'text-green-600'
])

export const FieldEmptyIcon = ({
  className
}: FieldIconProps) => {
  const formattedFieldEmptyIcon = joinStrings(' ', FIELD_EMPTY_ICON, className)

  return (
    <div className={formattedFieldEmptyIcon}></div>
  )
}

export const FieldErrorIcon = ({
  className
}: FieldIconProps) => {
  const formattedFieldErrorIcon = joinStrings(' ', FIELD_ERROR_ICON, className)

  return (
    <i className={formattedFieldErrorIcon} />
  )
}

export const FieldValidIcon = ({
  className
}: FieldIconProps) => {
  const formattedFieldValidIcon = joinStrings(' ', FIELD_VALID_ICON, className)

  return (
    <i className={formattedFieldValidIcon} />
  )
}
