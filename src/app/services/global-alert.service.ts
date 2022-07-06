import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalAlertService {

  constructor() { }

  globalSuccess(message: string, timeoutInSeconds?: number): void {
    // @ts-ignore
    window.CLUI.showGlobalAlert(message, 'alert-success', 'icon', timeoutInSeconds * 1000);
  }
  globalWarning(message: string, timeoutInSeconds?: number): void {
    // @ts-ignore
    window.CLUI.showGlobalAlert(message, 'alert-warning', 'icon', timeoutInSeconds * 1000);
  }
  globalInfo(message: string, timeoutInSeconds?: number): void {
    // @ts-ignore
    window.CLUI.showGlobalAlert(message, 'alert-info', 'icon', timeoutInSeconds * 1000);
  }
  globalError(message: string, timeoutInSeconds?: number): void {
    // @ts-ignore
    window.CLUI.showGlobalAlert(message, 'alert-danger', 'icon', timeoutInSeconds * 1000);
  }
}
