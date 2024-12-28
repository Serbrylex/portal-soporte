import { useState } from 'react'

interface LogData {
  id: string // Añadimos un id para identificar cada log
  type: string
  message: string
  stack: string
  file: string
  lineNumber: string
  timestamp: string
  url: string
  environment: string
  browser: string
  os: string
  appVersion: string
  app: string
  user_uid: string
  user_name: string
  business_day_uid: string
  business_dt: string
  shift_uid: string
  shift_number: number
  business_unit_uid: string
  business_unit_name: string
  frontDetails: {
    componentName: string | null
    params: string | null
  }
  backendDetails: {
    type: string | null
    endpoint: string | null
    method: string | null
    params: string | null
    response: string | null
    url: string | null
  }
  errorSource: string
}

export function useLogData() {
  const [logs] = useState<LogData[]>([
    {
      id: '1',
      type: "Error",
      message: "ErrorBoundary test",
      stack: "OverviewContainer@webpack-internal:///(app-pages-browser)/./src/app/(back-office)/cash-management/components/OverviewContainer.js:18:11\n...",
      file: "///(app-pages-browser)/./src/app/(back-office)/cash-management/components/OverviewContainer.js",
      lineNumber: "18:11",
      timestamp: "2024-12-28T16:21:04.402Z",
      url: "/cash-management/",
      environment: "development",
      browser: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.0",
      os: "Win32",
      appVersion: "1.31.0",
      app: "back-office",
      user_uid: "0403faef-db70-437c-a59f-d68100c25c6f",
      user_name: "Sergio Bryan Guillermo",
      business_day_uid: "bbe5b1e5-df21-4be0-90fe-b4a9c575859b",
      business_dt: "2024-12-26T00:00:00",
      shift_uid: "40d2b611-dd09-4e02-9efd-389673ee62d2",
      shift_number: 3,
      business_unit_uid: "554a1b07-38ab-4f3f-8e7a-f845c5a36630",
      business_unit_name: "Lab 1 NP6",
      frontDetails: {
        componentName: null,
        params: null
      },
      backendDetails: {
        type: null,
        endpoint: null,
        method: null,
        params: null,
        response: null,
        url: null
      },
      errorSource: "frontend"
    },
    // Añadimos un segundo log de ejemplo
    {
      id: '2',
      type: "Warning",
      message: "API response timeout",
      stack: "fetchData@webpack-internal:///(app-pages-browser)/./src/app/api/fetchData.js:25:9\n...",
      file: "///(app-pages-browser)/./src/app/api/fetchData.js",
      lineNumber: "25:9",
      timestamp: "2024-12-28T17:30:15.123Z",
      url: "/dashboard/",
      environment: "development",
      browser: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      os: "MacIntel",
      appVersion: "1.31.0",
      app: "back-office",
      user_uid: "1234abcd-5678-90ef-ghij-klmnopqrstuv",
      user_name: "Ana Martínez",
      business_day_uid: "ccdd1122-3344-5566-7788-99aabbccddee",
      business_dt: "2024-12-27T00:00:00",
      shift_uid: "aabbccdd-eeff-0011-2233-445566778899",
      shift_number: 2,
      business_unit_uid: "11223344-5566-7788-99aa-bbccddee",
      business_unit_name: "Lab 2 NP8",
      frontDetails: {
        componentName: "DashboardComponent",
        params: "{ userId: '1234abcd' }"
      },
      backendDetails: {
        type: "GET",
        endpoint: "/api/dashboard-data",
        method: "GET",
        params: "{ timeRange: '7d' }",
        response: null,
        url: "http://api.example.com/dashboard-data?timeRange=7d"
      },
      errorSource: "backend"
    },
  ])

  return { logs }
}

