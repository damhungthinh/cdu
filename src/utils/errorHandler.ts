import { Untyped } from '@entity/Base'
import { get } from 'lodash'

export type CustomError = {
  status: number
  code?: number
  reason?: string
  form?: Map<string, string>
}

const ERROR = {
  504: 'Services are under mantaince. Please try again later!',
  401: 'Your session expired, please login again!',
}

export const errorHandler = (_error: Untyped, _messages?: Untyped | string) => {
  const error: CustomError = {
    status: 500,
  }
  if (!_error || !get(_error, 'status') || !get(_error, 'data')) {
    error.reason =
      "Can't connect to server. Please check your connection or try again later!"
    return error
  }

  error.status = get(_error, 'status', 500)
  if (get(_error, 'status', 0) < 500) {
    const reason = get(_error, 'data.reason', '')
    const form = get(_error, 'data.form', {})

    if (reason) {
      error.reason = reason
    }
    if (Object.keys(form).length) {
      error.form = form
    }
  }
  if (!error.reason) {
    error.reason = get(
      ERROR,
      error.status,
      'Something bad happened, please try again later'
    )
  }
  return error
}
