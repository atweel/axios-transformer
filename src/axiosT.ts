import {AxiosTransformer} from './AxiosTransformer'
import axios, {AxiosRequestConfig} from 'axios'
import {AxiosInstanceT, AxiosStaticT} from './types'
import {AxiosEventBus} from './AxiosEventBus'

import assignIn from 'lodash.assignin';

export const axiosT: AxiosStaticT = assignIn(new AxiosTransformer(), {
  event: new AxiosEventBus(),
  create: (axiosConfig: AxiosRequestConfig) => {
    const axiosInstance = axios.create(axiosConfig)
    return new AxiosTransformer(axiosInstance) as AxiosInstanceT
  },
  Cancel: axios.Cancel,
  CancelToken: axios.CancelToken,
  isCancel: axios.isCancel,
  all: axios.all,
  spread: axios.spread,
  isAxiosError: axios.isAxiosError,
})
