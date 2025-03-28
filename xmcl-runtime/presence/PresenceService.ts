import { Client, SetActivity } from '@xmcl/discord-rpc'
import { PresenceService as IPresenceService, SharedState, PresenceServiceKey, Settings } from '@xmcl/runtime-api'
import { Inject, LauncherAppKey } from '~/app'
import { AbstractService, ExposeServiceKey } from '~/service'
import { kSettings } from '~/settings'
import { LauncherApp } from '../app/LauncherApp'

@ExposeServiceKey(PresenceServiceKey)
export class PresenceService extends AbstractService implements IPresenceService {
  private discord: Client
  private current: SetActivity = {
  }

  constructor(@Inject(LauncherAppKey) app: LauncherApp,
    @Inject(kSettings) private settings: SharedState<Settings>,
  ) {
    super(app, async () => {
      if (settings.discordPresence) {
        try {
          await this.discord.connect()
        } catch (e) {
          // Ignore
        }
      }
    })

    settings.subscribe('discordPresenceSet', async (state) => {
      if (state) {
        await this.discord.connect().catch((e) => {
          this.warn('Fail to connect to discord. %o', e)
        })
      } else {
        await this.discord.destroy()
      }
    })

    // TODO: finish this
    // .subscribe('connectionGroup', (id) => {
    //   if (this.discord.isConnected) {
    //     this.current.state = id ? 'Group ' + id : ''
    //     this.current.partyId = id || undefined
    //     if (id) {
    //       this.current.partyMax = 20
    //       this.current.partySize = 1
    //     } else {
    //       this.current.partyMax = undefined
    //       this.current.partySize = undefined
    //     }
    //     this.current.joinSecret = id ? id + 'secret' : undefined
    //     this.discord.user?.setActivity(this.current).catch((e) => {
    //       this.warn('Fail to set discord presence. %o', e)
    //     })
    //   }
    // }).subscribe('connectionAdd', () => {
    //   this.current.partySize = (this.current.partySize || 1) + 1
    //   this.discord.user?.setActivity(this.current).catch((e) => {
    //     this.warn('Fail to set discord presence. %o', e)
    //   })
    // }).subscribe('connectionDrop', () => {
    //   this.current.partySize = (this.current.partySize || 1) - 1
    //   this.discord.user?.setActivity(this.current).catch((e) => {
    //     this.warn('Fail to set discord presence. %o', e)
    //   })
    // })

    this.discord = new Client({
      clientId: '1337842405847863397',
    })
  }

  async setActivity(activity: string): Promise<void> {
    if (!this.settings.discordPresence) {
      return
    }
    if (!this.discord.isConnected) {
      try {
        await this.discord.connect()
      } catch (e) {
        return
      }
    }
    const param = this.current
    this.current.largeImageKey = 'dark_512'
    this.current.startTimestamp = Date.now()
    this.current.details = activity
    await this.discord.user?.setActivity(param).catch((e) => {
      this.warn('Fail to set discord presence. %o', e)
    })
  }
}
