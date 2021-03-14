import React, { FC } from 'react'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'


type FieldIconProps = {
  className: string
}

const FIELD_ICON_BASE: string = `
  absolute
  w-4
  right-4
`

const FIELD_EMPTY_ICON: string = `
  ${FIELD_ICON_BASE}
  h-4
`

const FIELD_ERROR_ICON: string = `
  ${FIELD_ICON_BASE}
  fa-times
  far
  text-2xl
  text-red-600
`

const FIELD_VALID_ICON: string = `
  ${FIELD_ICON_BASE}
  fa-check
  far
  text-2xl
  text-green-600
`

export const FieldEmptyIcon: FC<FieldIconProps> = ({
  className
}: FieldIconProps) => {
  const formattedFieldEmptyIcon: string = formatClassList(
    joinStrings(' ', FIELD_EMPTY_ICON, className)
  )
  return (
    <div className={formattedFieldEmptyIcon}></div>
  )
}

export const FieldErrorIcon: FC<FieldIconProps> = ({
  className
}: FieldIconProps) => {
  const formattedFieldErrorIcon: string = formatClassList(
    joinStrings(' ', FIELD_ERROR_ICON, className)
  )
  return (
    <i className={formattedFieldErrorIcon} />
  )
}

export const FieldValidIcon: FC<FieldIconProps> = ({
  className
}: FieldIconProps) => {
  const formattedFieldValidIcon: string = formatClassList(
    joinStrings(' ', FIELD_VALID_ICON, className)
  )
  return (
    <i className={formattedFieldValidIcon} />
  )
}
