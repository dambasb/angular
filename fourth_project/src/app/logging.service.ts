export class LoggingService {
  logToStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
