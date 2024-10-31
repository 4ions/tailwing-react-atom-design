import { PATHS_API_MODULES } from '@/constants/api'
import { apiCentralService } from './RequestService'
import { RequestOptions } from '@/types/request'

export const getAllWebSite = <T>(options: RequestOptions) =>
  apiCentralService.get<T>(PATHS_API_MODULES.WEBSITE, options)
