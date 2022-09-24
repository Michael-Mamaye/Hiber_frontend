import Layout from "../layout/Layout";

export const ProtectedRoute = ({ component: Component }) => {
  return <Layout children={<Component />} />;
};
