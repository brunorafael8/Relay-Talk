import { RequestParameters, Variables, GraphQLResponse, SubscribeFunction, Observable } from 'relay-runtime';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { RelayObservable } from 'relay-runtime/lib/network/RelayObservable';

const websocketURL = 'ws://localhost:5000/subscriptions';

export const setupSubscription: SubscribeFunction = (
  request: RequestParameters,
  variables: Variables,
): RelayObservable<GraphQLResponse> => {
  const subscriptionClient = new SubscriptionClient(websocketURL, { reconnect: true });

  const subscribeObservable = subscriptionClient.request({
    query: request.text === null ? undefined : request.text,
    operationName: request.name,
    variables,
  });
  // @ts-expect-error
  return Observable.from(subscribeObservable);
};
