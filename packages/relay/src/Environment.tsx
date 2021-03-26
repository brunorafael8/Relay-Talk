import { Environment, Network, RecordSource, Store } from 'relay-runtime';
// import { createRelayNetworkLogger, RelayNetworkLoggerTransaction } from 'relay-runtime';

import executeFunction from './cacheHandler';

import { setupSubscription } from './setupSubscription';

// TODO - rollback network logger
// const RelayNetworkLogger = createRelayNetworkLogger(RelayNetworkLoggerTransaction);
// const network = Network.create(
//   process.env.NODE_ENV === 'development' ? RelayNetworkLogger.wrapFetch(executeFunction) : executeFunction,
//   setupSubscription,
// );
const network = Network.create(executeFunction, setupSubscription);

const source = new RecordSource();
const store = new Store(source);

const env = new Environment({
  network,
  store,
});

export default env;
