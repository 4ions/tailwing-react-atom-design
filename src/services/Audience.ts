import { PATHS_API_MODULES } from '@/constants/api'
import { apiCentralService } from './RequestService'
import { RequestOptions } from '@/types/request'

export const getAllAudience = <T>(options: RequestOptions) =>
  apiCentralService.get<T>(PATHS_API_MODULES.AUDIENCE, options)

export const postAudience = <T>(options: RequestOptions) =>
  apiCentralService.post<T>(PATHS_API_MODULES.AUDIENCE, options)
