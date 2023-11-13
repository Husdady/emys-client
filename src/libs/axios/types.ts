// Types
import type { BaseQueryFn } from '@reduxjs/toolkit/query'

// Interfaces
import { AxiosParams } from './interfaces'

export type AxiosBaseQueryResponse = BaseQueryFn<AxiosParams, unknown, unknown>
