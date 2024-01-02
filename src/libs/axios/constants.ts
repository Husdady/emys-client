// Constants
export const JWT_ERRORS = ['jwt-expired', 'jwt-malformed', 'jwt-unauthorized']

export const errors: Record<string, string> = {
  'Network Error': 'Ah ocurrido un error al establecer conexión con el servidor'
}

export const common = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

export const multipart = {
  Accept: 'multipart/form-data',
  'Content-Type': 'multipart/form-data'
}
