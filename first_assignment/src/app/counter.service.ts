export class CounterService {
  toActive = 0;
  toInactive = 0;

  counter(userType: string) {
    if (userType === 'active') {
      this.toInactive++;
      console.log(`To inactive ${this.toInactive}`);
    } else if (userType === 'inactive') {
      this.toActive++;
      console.log(`To active ${this.toActive}`);
    }
  }
}
