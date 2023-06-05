export interface UploadResponse {
  message: string
  files: File[]
  pinCodes: PinCode[]
  shareLinks: ShareLink[]
  originalNames: string[]
}

export interface File {
  name: string
  path: string
  bucket: string
  owner: any
  format: string
  size: number
  mimeType: string
  _id: string
  sharedWith: any[]
  createdAt: string
  updatedAt: string
  __v: number
}

export interface PinCode {
  file: string
  deleted: boolean
  _id: string
  pinCode: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface ShareLink {
  file: string
  link: string
  deleted: boolean
  _id: string
  createdAt: string
  updatedAt: string
  __v: number
}
