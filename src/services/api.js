import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.aynkaranastro.in'
const API_TIMEOUT = 10000

// Create axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    
    // Add timestamp to prevent caching
    if (config.method === 'get') {
      config.params = {
        ...config.params,
        _t: Date.now()
      }
    }
    
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    const { response, request, message } = error
    
    // Handle different error types
    if (response) {
      // Server responded with error status
      const errorData = {
        status: response.status,
        message: response.data?.message || 'An error occurred',
        errors: response.data?.errors || {}
      }
      
      // Handle specific status codes
      switch (response.status) {
        case 401:
          localStorage.removeItem('auth_token')
          window.location.href = '/login'
          break
        case 403:
          console.error('Access forbidden')
          break
        case 404:
          console.error('Resource not found')
          break
        case 422:
          console.error('Validation error', errorData.errors)
          break
        case 500:
          console.error('Server error')
          break
        default:
          console.error('API Error:', errorData)
      }
      
      return Promise.reject(errorData)
    } else if (request) {
      // Request made but no response
      return Promise.reject({
        status: 0,
        message: 'Network error. Please check your connection.'
      })
    } else {
      // Something else happened
      return Promise.reject({
        status: 0,
        message: message || 'An unexpected error occurred'
      })
    }
  }
)

// API methods
export const api = {
  get: (url, params = {}) => apiClient.get(url, { params }),
  post: (url, data) => apiClient.post(url, data),
  put: (url, data) => apiClient.put(url, data),
  patch: (url, data) => apiClient.patch(url, data),
  delete: (url) => apiClient.delete(url),
  
  // Upload with progress
  upload: (url, file, onProgress) => {
    const formData = new FormData()
    formData.append('file', file)
    
    return apiClient.post(url, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        )
        onProgress?.(percentCompleted)
      }
    })
  }
}

export default apiClient