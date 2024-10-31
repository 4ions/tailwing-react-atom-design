import { PATHS_API_HOST } from '../../constants/api'
import { HttpService } from './httpService'

export const apiCentralService = new HttpService(PATHS_API_HOST.CENTRAL_API)
