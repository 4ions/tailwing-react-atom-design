import { PATHS_API_MODULES } from '@/constants/api'
import { apiCentralService } from './RequestService'
import { RequestOptions } from '@/types/request'

export const getAllLanguages = <T>(options: RequestOptions) =>
  apiCentralService.get<T>(PATHS_API_MODULES.LANGUAGE, options)

export const postLanguage = <T>(options: RequestOptions) =>
  apiCentralService.post<T>(PATHS_API_MODULES.LANGUAGE, options)
