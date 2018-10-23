import { Query } from "react-apollo";
import gql from "graphql-tag";
import ErrorMessage from "./ErrorMessage";

export const allCourseQuery = gql`
  query getAllCourses {
    getAllCourses {
      id
      title
    }
    isConnected @client
  }
`;

export default function CourseList() {
  return (
    <Query query={allCourseQuery}>
      {({ loading, error, data: { getAllCourses, isConnected } }) => {
        if (error) return <ErrorMessage message="Error loading users." />;
        if (loading) return <div>Loading</div>;

        return (
          <section>
            <div>Status: {`${isConnected}`}</div>
            <ul>
              {getAllCourses.map((course, index) => (
                <li key={course.id}>
                  <div>
                    <span>{index + 1}. </span>
                    <span>{course.title}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        );
      }}
    </Query>
  );
}
