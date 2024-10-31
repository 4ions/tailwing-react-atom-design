import { PATHS_API_MODULES } from '@/constants/api'
import { apiCentralService } from './RequestService'
import { RequestOptions } from '@/types/request'

export const getAllCategories = <T>(options: RequestOptions) =>
  apiCentralService.get<T>(PATHS_API_MODULES.CATEGORY, options)

export const postCategory = <T>(options: RequestOptions) =>
  apiCentralService.post<T>(PATHS_API_MODULES.CATEGORY, options)
