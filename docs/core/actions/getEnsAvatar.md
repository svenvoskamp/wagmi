<script setup>
const packageName = '@wagmi/core'
</script>

# getEnsAvatar

Action for fetching address for ENS avatar.

## Import

```ts
import { getEnsAvatar } from '@wagmi/core'
```

## Usage

::: code-group
```ts [index.ts]
import { getEnsAvatar } from '@wagmi/core'
import { normalize } from 'viem/ens'
import { config } from './config'

const ensAvatar = getEnsAvatar(config, {
  name: normalize('wagmi-dev.eth'),
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

::: warning
Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAvatar`. You can use Viem's built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize) function for this.
:::

## Parameters

```ts
import { type GetEnsAvatarParameters } from '@wagmi/core'
```

---

### blockNumber

`bigint | undefined`

Block number to get ensAvatar at.

::: code-group
```ts [index.ts]
import { getEnsAvatar } from '@wagmi/core'
import { normalize } from 'viem/ens'
import { config } from './config'

const ensAvatar = getEnsAvatar(config, {
  blockNumber: 17829139n, // [!code focus]
  name: normalize('wagmi-dev.eth'),
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

### blockTag

`'latest' | 'earliest' | 'pending' | 'safe' | 'finalized' | undefined`

Block tag to get ensAvatar at.

::: code-group
```ts [index.ts]
import { getEnsAvatar } from '@wagmi/core'
import { normalize } from 'viem/ens'
import { config } from './config'

const ensAvatar = getEnsAvatar(config, {
  blockTag: 'latest', // [!code focus]
  name: normalize('wagmi-dev.eth'),
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

---

### chainId

`config['chains'][number]['id'] | undefined`

ID of chain to use when fetching data.

::: code-group
```ts [index.ts]
import { getEnsAvatar } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { normalize } from 'viem/ens'
import { config } from './config'

const ensAvatar = await getEnsAvatar(config, {
  chainId: mainnet.id, // [!code focus]
  name: normalize('wagmi-dev.eth'),
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

### gatewayUrls

`{ ipfs?: string | undefined; arweave?: string | undefined } | undefined`

Gateway urls to resolve IPFS and/or Arweave assets.

::: code-group
```ts [index.ts]
import { getEnsAvatar } from '@wagmi/core'
import { normalize } from 'viem/ens'
import { config } from './config'

const ensAvatar = await getEnsAvatar(config, {
  gatewayUrls: { // [!code focus]
    ipfs: 'https://cloudflare-ipfs.com', // [!code focus]
  }, // [!code focus]
  name: normalize('wagmi-dev.eth'),
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

### name

`string`

Name to get the address for.

::: code-group
```ts [index.ts]
import { getEnsAvatar } from '@wagmi/core'
import { normalize } from 'viem/ens'
import { config } from './config'

const ensAvatar = await getEnsAvatar(config, {
  name: normalize('wagmi-dev.eth'), // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

### universalResolverAddress

`Address | undefined`

- Address of ENS Universal Resolver Contract.
- Defaults to current chain's Universal Resolver Contract address.

::: code-group
```ts [index.ts]
import { getEnsAvatar } from '@wagmi/core'
import { normalize } from 'viem/ens'
import { config } from './config'

const ensAvatar = await getEnsAvatar(config, {
  name: normalize('wagmi-dev.eth'),
  universalResolverAddress: '0x74E20Bd2A1fE0cdbe45b9A1d89cb7e0a45b36376', // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type GetEnsAvatarReturnType } from '@wagmi/core'
```

`string | null`

The avatar URI for ENS name.

## Error

```ts
import { type getEnsAvatarError } from '@wagmi/core'
```

<!--@include: @shared/query/getEnsAvatar.md-->

## Viem

[`getEnsAvatar`](https://viem.sh/docs/ens/actions/getEnsAvatar.html)