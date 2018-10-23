import App from "../../components/App";
import Header from "../../components/Header";
import AddUserForm from "../../forms/users/addUserForm";
import AddUserFormSetup from "../../forms/users/addUserFormSetup";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { allUserQuery } from "../../components/UserList";

export const addUserMutation = gql`
  mutation createUser($data: UserCreateInput!) {
    createUser(data: $data) {
      id
      name
    }
  }
`;

const form = new AddUserFormSetup();

export default () => (
  <App>
    <Header />
    <Mutation
      mutation={addUserMutation}
      update={(cache, { data: { createUser } }) => {
        const { getAllUsers } = cache.readQuery({ query: allUserQuery });
        cache.writeQuery({
          query: allUserQuery,
          data: { getAllUsers: getAllUsers.concat([createUser]) }
        });
      }}
    >
      {createUser => {
        form.mutation = createUser;
        return <AddUserForm form={form} />;
      }}
    </Mutation>
  </App>
);
