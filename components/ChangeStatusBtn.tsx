import { Mutation } from "react-apollo";
import gql from "graphql-tag";

export const changeStatusMutation = gql`
  mutation updateNetworkStatus($isConnected: Boolean!) {
    updateNetworkStatus(isConnected: $isConnected) @client
  }
`;

export default function ChangeStatusBtn({ status }) {
  return (
    <Mutation mutation={changeStatusMutation}>
      {updateNetworkStatus => (
        <button
          onClick={() =>
            updateNetworkStatus({ variables: { isConnected: !status } })
          }
        >
          Change status
        </button>
      )}
    </Mutation>
  );
}
