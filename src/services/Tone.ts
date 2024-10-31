import { PATHS_API_MODULES } from '@/constants/api'
import { apiCentralService } from './RequestService'
import { RequestOptions } from '@/types/request'

export const getAllTone = <T>(options: RequestOptions) =>
  apiCentralService.get<T>(PATHS_API_MODULES.TONE, options)

export const postTone = <T>(options: RequestOptions) =>
  apiCentralService.post<T>(PATHS_API_MODULES.TONE, options)
