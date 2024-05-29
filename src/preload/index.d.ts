import { ElectronAPI } from '@electron-toolkit/preload'

interface MyElectronAPI extends ElectronAPI {
  openFileDialog: () => Promise<string | null>
}

declare global {
  interface Window {
    electron: MyElectronAPI
    api: unknown
  }
}
