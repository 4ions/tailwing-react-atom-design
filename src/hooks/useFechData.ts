import { useQuery } from '@tanstack/react-query'

import { apiCentralService } from '../services/RequestService'
import { QueryParams } from '../types/request'

// Hook para obtener datos
export const useGetData = <T>(endpoint: string, options: QueryParams) => {
  return useQuery({
    queryKey: [endpoint, options],
    queryFn: () => apiCentralService.get<T>(endpoint, options),
  })
}
