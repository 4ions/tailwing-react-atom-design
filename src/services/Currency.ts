import { PATHS_API_MODULES } from '@/constants/api'
import { apiCentralService } from './RequestService'
import { RequestOptions } from '@/types/request'

export const getAllCurrency = <T>(options: RequestOptions) =>
  apiCentralService.get<T>(PATHS_API_MODULES.CURRENCY, options)

export const postCurrency = <T>(options: RequestOptions) =>
  apiCentralService.post<T>(PATHS_API_MODULES.CURRENCY, options)
