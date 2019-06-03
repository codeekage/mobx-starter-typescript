import { observable, action, computed } from 'mobx'

export default class AppStore {
  @observable appName: string = 'React + MobX App'

  @computed get getAppName() {
    return this.appName
  }

  @action setAppName(appName: string) {
    this.appName = appName
  }
}
