import { Query } from "react-apollo";
import gql from "graphql-tag";
import ErrorMessage from "./ErrorMessage";
import ChangeStatusBtn from "./ChangeStatusBtn";

export const allUserQuery = gql`
  query getAllUsers {
    getAllUsers {
      id
      name
      courses {
        title
      }
    }
    isConnected @client
  }
`;

export default function UserList() {
  return (
    <Query query={allUserQuery}>
      {({ loading, error, data: { getAllUsers, isConnected } }) => {
        if (error) return <ErrorMessage message="Error loading users." />;
        if (loading) return <div>Loading</div>;

        return (
          <section>
            <div className="status">Status {`${isConnected}`}</div>
            <ul>
              {getAllUsers.map((user, index) => (
                <li key={user.id}>
                  <div>
                    <span>{index + 1}. </span>
                    <span>{user.name}</span>
                  </div>
                </li>
              ))}
            </ul>
            <ChangeStatusBtn status={isConnected} />
            <style jsx>{`
              section {
                padding-bottom: 20px;
              }
              li {
                display: block;
                margin-bottom: 10px;
              }
              div {
                align-items: center;
                display: flex;
              }
              a {
                font-size: 14px;
                margin-right: 10px;
                text-decoration: none;
                padding-bottom: 0;
                border: 0;
              }
              span {
                font-size: 14px;
                margin-right: 5px;
              }
              ul {
                margin: 0;
                padding: 0;
              }
              button:before {
                align-self: center;
                border-style: solid;
                border-width: 6px 4px 0 4px;
                border-color: #ffffff transparent transparent transparent;
                content: "";
                height: 0;
                margin-right: 5px;
                width: 0;
              }
              .status {
                padding: 10px 0;
              }
            `}</style>
          </section>
        );
      }}
    </Query>
  );
}
