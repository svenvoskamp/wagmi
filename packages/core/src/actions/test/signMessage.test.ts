import { accounts, config, testConnector } from '@wagmi/test'
import { describe, expect, test } from 'vitest'

import { connect } from '../connect.js'
import { disconnect } from '../disconnect.js'
import { signMessage, signMessageMutationOptions } from '../signMessage.js'

const connector = config.connectors[0]!

describe('signMessage', () => {
  test('default', async () => {
    await connect(config, { connector })
    await expect(
      signMessage(config, { message: 'foo bar baz' }),
    ).resolves.toMatchInlineSnapshot(
      '"0xbbfaf80b48f1067feb22abdff88464ae345ac1aa54b275c82847eb07c2185dab7d72051bcbd739a44daaac019f99ce38300ece87c7da4eb3da863179672b9acc1b"',
    )
    await disconnect(config, { connector })
  })

  test('behavior: user rejected request', async () => {
    const connector_ = config._internal.setup(
      testConnector({
        accounts,
        features: { signMessageError: true },
      }),
    )
    await connect(config, { connector: connector_ })
    await expect(
      signMessage(config, { message: 'foo bar baz' }),
    ).rejects.toMatchInlineSnapshot(`
      [UserRejectedRequestError: User rejected the request.

      Details: Failed to sign message.
      Version: viem@1.0.1]
    `)
    await disconnect(config, { connector: connector_ })
  })

  test('behavior: not connected', async () => {
    await expect(
      signMessage(config, { message: 'foo bar baz' }),
    ).rejects.toMatchInlineSnapshot(`
      [ConnectorNotFoundError: Connector not found.

      Version: @wagmi/core@1.0.2]
    `)
  })
})

describe('switchChainMutationOptions', () => {
  test('default', () => {
    expect(
      signMessageMutationOptions(config, { message: 'foo bar baz' }),
    ).toMatchInlineSnapshot(`
      {
        "mutationFn": [Function],
        "mutationKey": [
          "signMessage",
          {
            "message": "foo bar baz",
          },
        ],
      }
    `)
  })
})
