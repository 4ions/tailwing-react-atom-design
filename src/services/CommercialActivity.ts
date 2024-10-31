import { PATHS_API_MODULES } from '@/constants/api'
import { apiCentralService } from './RequestService'
import { RequestOptions } from '@/types/request'

export const getAllCommercialActivity = <T>(options: RequestOptions) =>
  apiCentralService.get<T>(PATHS_API_MODULES.COMMERCIAL_ACTIVITY, options)

export const postCommercialActivity = <T>(options: RequestOptions) =>
  apiCentralService.post<T>(PATHS_API_MODULES.COMMERCIAL_ACTIVITY, options)
