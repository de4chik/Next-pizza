import { Header } from "@/widgets/header";

const LayoutPage: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
export default LayoutPage;
