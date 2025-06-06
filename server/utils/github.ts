import type { H3Event } from 'h3'
import { Octokit } from 'octokit'

let _octokit: Octokit

export function useOctokit() {
  const { githubToken } = useRuntimeConfig()

  if (!_octokit) {
    _octokit = new Octokit({
      auth: githubToken
    })
  }
  return _octokit
}

// Read more about caching functions https://hub.nuxt.com/docs/features/cache#server-functions-caching
export const fetchRepo = defineCachedFunction(
  async (event: H3Event, owner: string, name: string) => {
    const { data } = await useOctokit().request('GET /repos/{owner}/{name}', {
      owner,
      name
    })

    return data
  },
  {
    maxAge: 60 * 10, // 10 minutes
    swr: true,
    group: 'functions',
    name: 'getRepoDetails',
    getKey: (_event: H3Event, owner: string, repo: string) => `${owner}/${repo}`
  }
)
