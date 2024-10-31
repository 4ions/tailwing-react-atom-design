import { PATHS_API_MODULES } from '@/constants/api'
import { apiCentralService } from './RequestService'
import { RequestOptions } from '@/types/request'

export const getAllSubCategories = <T>(options: RequestOptions) =>
  apiCentralService.get<T>(PATHS_API_MODULES.SUBCATEGORY, options)

export const postSubCategory = <T>(options: RequestOptions) =>
  apiCentralService.post<T>(PATHS_API_MODULES.SUBCATEGORY, options)
