import Git from 'simple-git'
import { createResolver, defineNuxtModule } from 'nuxt/kit'

const git = Git()

const resolver = createResolver(import.meta.url)

export default defineNuxtModule({
  meta: {
    name: 'build-info'
  },
  async setup(resolvedOptions, nuxt) {
    let commit: string = 'unknown'
    try {
      commit = await git.revparse(['HEAD'])
    } catch (error) {
      console.error('Error fetching Git commit:', error)
    }

    let commitMessage: string = 'unknown'
    try {
      const log = await git.log({ n: 1 })
      commitMessage = log.latest?.message || 'unknown'
    } catch (error) {
      console.error('Error fetching Git commit message:', error)
    }

    let latestTag: string = 'unknown'
    try {
      const tags = await git.tags()
      latestTag = tags.latest || 'unknown'
    } catch (error) {
      console.error('Error fetching Git tags:', error)
    }

    nuxt.options.appConfig.buildInfo = {
      time: new Date().toISOString(),
      commit,
      commitMessage,
      version: latestTag
    }
  }
})

declare module '@nuxt/schema' {
  interface AppConfig {
    buildInfo: {
      time: string
      commit: string
      commitMessage: string
      version: string
    }
  }
}
