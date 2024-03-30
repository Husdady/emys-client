// Interfaces
export interface PlaceholderState {
  placeholder: Record<string, any>
}

export interface UpdatePlaceholderPayload {
  data: any
  placeholderId: string
}

export interface PlaceholderContext extends PlaceholderState {
  updatePlaceholder: (payload: UpdatePlaceholderPayload) => void
}
