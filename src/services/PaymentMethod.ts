import { PATHS_API_MODULES } from '@/constants/api'
import { apiCentralService } from './RequestService'
import { RequestOptions } from '@/types/request'

export const getAllPaymentMethod = <T>(options: RequestOptions) =>
  apiCentralService.get<T>(PATHS_API_MODULES.PAYMENT_METHOD, options)

export const postPaymentMethod = <T>(options: RequestOptions) =>
  apiCentralService.post<T>(PATHS_API_MODULES.PAYMENT_METHOD, options)
